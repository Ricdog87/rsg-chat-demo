"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center text-white font-bold text-xl mr-2">
                E
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
                Elumalab
              </span>
            </Link>
            <p className="text-gray-400 max-w-md">
              Die smarte Messaging-Plattform für dein Business. Verbinde alle deine Messaging-Kanäle und steigere deine
              Effizienz.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Produkt</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/funktionen" className="text-gray-400 hover:text-pink-400">
                    Funktionen
                  </Link>
                </li>
                <li>
                  <Link href="/preise" className="text-gray-400 hover:text-pink-400">
                    Preise
                  </Link>
                </li>
                <li>
                  <Link href="/integrationen" className="text-gray-400 hover:text-pink-400">
                    Integrationen
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Ressourcen</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-pink-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/hilfe" className="text-gray-400 hover:text-pink-400">
                    Hilfe-Center
                  </Link>
                </li>
                <li>
                  <Link href="/api-dokumentation" className="text-gray-400 hover:text-pink-400">
                    API Dokumentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Unternehmen</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/ueber-uns" className="text-gray-400 hover:text-pink-400">
                    Über uns
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt" className="text-gray-400 hover:text-pink-400">
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link href="/datenschutz" className="text-gray-400 hover:text-pink-400">
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link href="/impressum" className="text-gray-400 hover:text-pink-400">
                    Impressum
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Elumalab. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
