"use client"

import { useAuth } from "@/contexts/auth-context"
import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DemoBanner() {
  const { signOut, isDemo } = useAuth()

  if (!isDemo) return null

  return (
    <div className="bg-yellow-100 border-b border-yellow-200 p-2 text-yellow-800">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5" />
          <p className="text-sm font-medium">
            Sie befinden sich im Demo-Modus. Alle Änderungen werden lokal gespeichert.
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="border-yellow-300 bg-yellow-50 hover:bg-yellow-200 text-yellow-800"
          onClick={() => signOut()}
        >
          Demo beenden
        </Button>
      </div>
    </div>
  )
}
