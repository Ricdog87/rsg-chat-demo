"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default function AuthCallbackPage() {
  const router = useRouter()

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { searchParams } = new URL(window.location.href)
      const code = searchParams.get("code")

      if (code) {
        try {
          await supabase.auth.exchangeCodeForSession(code)
          router.push("/dashboard")
        } catch (error) {
          console.error("Error exchanging code for session:", error)
          router.push("/login?error=auth_callback_error")
        }
      } else {
        router.push("/login?error=no_code_provided")
      }
    }

    handleAuthCallback()
  }, [router])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Authentifizierung wird abgeschlossen...</h1>
        <p className="mt-2">Bitte warten Sie, während wir Sie anmelden.</p>
      </div>
    </div>
  )
}
