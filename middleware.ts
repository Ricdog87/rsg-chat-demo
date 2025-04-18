import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Einfache Middleware, die nur den Dashboard-Zugriff prüft
  const path = request.nextUrl.pathname

  // Wenn es sich um den Dashboard-Pfad handelt, leiten wir zur Login-Seite weiter
  // In einer echten Anwendung würden wir hier die Authentifizierung prüfen
  if (path.startsWith("/dashboard") || path.startsWith("/(authenticated)")) {
    // Für Demonstrationszwecke erlauben wir den Zugriff auf das Dashboard
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/(authenticated)/:path*"],
}
