import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-700 dark:text-gray-300">Seite nicht gefunden</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
        Die Seite, die Sie suchen, existiert nicht oder wurde verschoben.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Zurück zur Startseite</Link>
      </Button>
    </div>
  )
}
