import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ImpressumPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-yellow-300 flex items-center justify-center text-white font-bold text-xl mr-2">
                  E
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-yellow-300 text-transparent bg-clip-text">
                  Eluma
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="text-gray-700 hover:text-pink-500 transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-pink-500 transition-colors">
                Preise
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-pink-500 transition-colors">
                Über uns
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-pink-500 transition-colors">
                Kontakt
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-700 hover:text-pink-500 transition-colors">
                Login
              </Link>
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-pink-500 to-yellow-300 hover:from-pink-600 hover:to-yellow-400">
                  Kostenlos starten
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Impressum</h1>
        </div>
      </header>

      {/* Impressum Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Eluma – die smarte Messaging-Plattform</h2>
              <p className="text-lg text-gray-600 mb-6">Ein Produkt der</p>

              <h3 className="text-2xl font-bold mb-4 text-gray-800">RSG Recruiting Solutions Group GmbH</h3>
              <p className="text-lg text-gray-600 mb-2">Am Heiligenhaus 9, 65207 Wiesbaden</p>

              <p className="text-lg text-gray-600 mb-6">
                <strong>Geschäftsführer:</strong> Constance Renz, Ricardo Serrano
              </p>

              <p className="text-lg text-gray-600 mb-2">
                <strong>Handelsregister:</strong> HRB 123456, Amtsgericht Wiesbaden
              </p>

              <p className="text-lg text-gray-600 mb-2">
                <strong>USt-ID:</strong> DE123456789
              </p>

              <p className="text-lg text-gray-600 mb-6">
                <strong>Kontakt:</strong>{" "}
                <a href="mailto:info@elumalab.com" className="text-pink-500 hover:underline">
                  info@elumalab.com
                </a>
              </p>

              <h3 className="text-2xl font-bold mb-4 text-gray-800">Haftungshinweis</h3>
              <p className="text-lg text-gray-600 mb-6">
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
                Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-gray-800">Urheberrecht</h3>
              <p className="text-lg text-gray-600 mb-6">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <Link href="/" className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-yellow-300 flex items-center justify-center text-white font-bold text-xl mr-2">
                  E
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-yellow-300 text-transparent bg-clip-text">
                  Eluma
                </span>
              </Link>
              <p className="text-gray-400 max-w-md">
                Die smarte Messaging-Plattform für dein Business. Verbinde alle deine Messaging-Kanäle und steigere
                deine Effizienz.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Produkt</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/features" className="text-gray-400 hover:text-pink-400">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="text-gray-400 hover:text-pink-400">
                      Preise
                    </Link>
                  </li>
                  <li>
                    <Link href="/integrations" className="text-gray-400 hover:text-pink-400">
                      Integrationen
                    </Link>
                  </li>
                  <li>
                    <Link href="/integrations" className="text-gray-400 hover:text-pink-400">
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
                    <Link href="/docs" className="text-gray-400 hover:text-pink-400">
                      Dokumentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/help" className="text-gray-400 hover:text-pink-400">
                      Hilfe-Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-gray-400 hover:text-pink-400">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Unternehmen</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-pink-400">
                      Über uns
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-gray-400 hover:text-pink-400">
                      Karriere
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-pink-400">
                      Kontakt
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
            <p>© {new Date().getFullYear()} Eluma. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

