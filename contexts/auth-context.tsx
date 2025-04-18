"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  signInWithEmail,
  signUpWithEmail,
  signOut,
  getCurrentUser,
  getUserProfile,
  startDemoSession,
  loginWithDemo,
  isDemoUser as checkIsDemoUser,
} from "@/lib/auth"
import type { User } from "@supabase/supabase-js"

type UserProfile = {
  id: string
  email?: string
  name?: string
  avatar_url?: string
  role?: string
}

type AuthContextType = {
  user: User | null
  profile: UserProfile | null
  isLoading: boolean
  isDemoUser: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  startDemoSession: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isDemoUser, setIsDemoUser] = useState(false)
  const router = useRouter()

  useEffect(() => {
    async function loadUser() {
      try {
        setIsLoading(true)

        // Prüfen, ob es sich um einen Demo-Benutzer handelt
        const isDemo = await checkIsDemoUser()
        setIsDemoUser(isDemo)

        if (isDemo) {
          const demoUser = JSON.parse(localStorage.getItem("demoUser") || "{}")
          setUser(demoUser as User)
          setProfile(demoUser as UserProfile)
          setIsLoading(false)
          return
        }

        // Normaler Benutzer-Ladevorgang
        const user = await getCurrentUser()
        setUser(user)

        if (user) {
          const profile = await getUserProfile(user.id)
          setProfile(profile || { id: user.id, email: user.email })
        }
      } catch (error) {
        console.error("Error loading user:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadUser()
  }, [])

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true)
      const { user } = await signInWithEmail(email, password)
      setUser(user)

      if (user) {
        const profile = await getUserProfile(user.id)
        setProfile(profile || { id: user.id, email: user.email })
      }

      router.push("/dashboard")
    } catch (error) {
      console.error("Login error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (email: string, password: string) => {
    try {
      setIsLoading(true)
      const { user } = await signUpWithEmail(email, password)
      setUser(user)

      if (user) {
        // Erstellen eines Standardprofils für neue Benutzer
        const defaultProfile = { id: user.id, email: user.email }
        setProfile(defaultProfile)

        // Hier könnte man das Profil in der Datenbank speichern
      }

      router.push("/onboarding")
    } catch (error) {
      console.error("Signup error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    try {
      setIsLoading(true)

      if (isDemoUser) {
        localStorage.removeItem("demoUser")
        setIsDemoUser(false)
      } else {
        await signOut()
      }

      setUser(null)
      setProfile(null)
      router.push("/")
    } catch (error) {
      console.error("Logout error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const startDemoSessionHandler = async () => {
    try {
      setIsLoading(true)
      const demoUser = await startDemoSession()
      const { user } = await loginWithDemo()

      setUser(user as User)
      setProfile(demoUser as UserProfile)
      setIsDemoUser(true)

      router.push("/dashboard")
    } catch (error) {
      console.error("Demo session error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        isLoading,
        isDemoUser,
        login,
        signup,
        logout,
        startDemoSession: startDemoSessionHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
