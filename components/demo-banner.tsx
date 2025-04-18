"use client"

import { useAuth } from "@/contexts/auth-context"
import { useState, useEffect } from "react"

export function DemoBanner() {
  const { isDemoUser, signOut } = useAuth()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Überprüfen, ob der Benutzer ein Demo-Benutzer ist
    const checkDemoUser = async () => {
      const isDemo = await isDemoUser()
      setIsVisible(isDemo)
    }

    checkDemoUser()
  }, [isDemoUser])

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-pink-500 to-orange-400 text-white py-2 px-4 text-center">
      <p className="text-sm">
        Sie sind im Demo-Modus angemeldet. Alle Änderungen werden nicht gespeichert.{" "}
        <button onClick={() => signOut()} className="underline font-medium hover:text-white/80 transition-colors">
          Abmelden
        </button>
      </p>
    </div>
  )
}

export default DemoBanner
