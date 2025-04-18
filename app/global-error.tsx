"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="de">
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Etwas ist schiefgelaufen!</h1>
          <p className="text-lg text-gray-700 mb-8 max-w-md">
            Es tut uns leid, aber es ist ein unerwarteter Fehler aufgetreten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => reset()} className="bg-pink-500 hover:bg-pink-600 text-white">
              Erneut versuchen
            </Button>
            <Link href="/">
              <Button variant="outline">Zurück zur Startseite</Button>
            </Link>
          </div>
        </div>
      </body>
    </html>
  )
}
