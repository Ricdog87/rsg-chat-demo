"use client"

import { useRouter } from "next/navigation"

// Demo user credentials
export const DEMO_USER = {
  id: "demo-user-id",
  email: "demo@elumalab.com",
  name: "Demo User",
  avatar_url: "/images/ricardo.png",
  role: "demo",
}

// Function to start a demo session
export const startDemoSession = () => {
  // Store demo user in localStorage
  localStorage.setItem("elumalab_demo_user", JSON.stringify(DEMO_USER))
  localStorage.setItem("elumalab_auth_token", "demo-token-12345")

  // Return the demo user
  return DEMO_USER
}

// Hook to handle demo login and redirect
export const useDemoLogin = () => {
  const router = useRouter()

  const loginAsDemo = () => {
    startDemoSession()
    router.push("/dashboard")
  }

  return { loginAsDemo }
}

// Check if user is in demo mode
export const isDemoMode = () => {
  if (typeof window === "undefined") return false

  const demoUser = localStorage.getItem("elumalab_demo_user")
  return !!demoUser
}

// Get demo user if in demo mode
export const getDemoUser = () => {
  if (typeof window === "undefined") return null

  const demoUser = localStorage.getItem("elumalab_demo_user")
  return demoUser ? JSON.parse(demoUser) : null
}

// End demo session
export const endDemoSession = () => {
  localStorage.removeItem("elumalab_demo_user")
  localStorage.removeItem("elumalab_auth_token")
}
