import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Datenschutzerklärung</h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Wir nehmen den Schutz deiner persönlichen Daten sehr ernst.
          </p>
        </div>
      </header>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-lg text-gray-600 mb-8">
              <strong>Stand: 1. April 2025</strong>
            </p>

            <h2 className="text-3xl font-bold mb-6 text-gray-800">1. Verantwortliche Stelle</h2>
            <p className="text-lg text-gray-600 mb-8">
              Verantwortlich für die Erhebung, Verarbeitung und Nutzung Ihrer personenbezogenen Daten im Sinne der
              Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-lg text-gray-600 mb-2">
                <strong>RSG Recruiting Solutions Group GmbH</strong>
              </p>
              <p className="text-lg text-gray-600 mb-2">Am Heiligenhaus 9</p>
              <p className="text-lg text-gray-600 mb-2">65207 Wiesbaden</p>
              <p className="text-lg text-gray-600 mb-2">Deutschland</p>
              <p className="text-lg text-gray-600">
                E-Mail:{" "}
                <a href="mailto:info@elumalab.com" className="text-pink-500 hover:underline">
                  info@elumalab.com
                </a>
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              2. Erhebung und Verarbeitung personenbezogener Daten
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Wenn Sie unsere Website besuchen, erheben wir automatisch bestimmte Informationen über Ihr Gerät,
              einschließlich Informationen über Ihren Webbrowser, Ihre IP-Adresse, Ihre Zeitzone und einige der Cookies,
              die auf Ihrem Gerät installiert sind.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Wenn Sie sich für unseren Service registrieren oder unsere Dienste nutzen, erheben wir zusätzlich folgende
              Daten:
            </p>
            <ul className="list-disc pl-6 mb-8 text-lg text-gray-600">
              <li className="mb-2">Name und Kontaktinformationen (E-Mail, Telefonnummer)</li>
              <li className="mb-2">Unternehmensinformationen (Name, Adresse, Branche)</li>
              <li className="mb-2">Zahlungsinformationen (bei kostenpflichtigen Diensten)</li>
              <li className="mb-2">Nutzungsdaten unserer Plattform</li>
              <li>Kommunikationsinhalte, die über unsere Plattform verarbeitet werden</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 text-gray-800">3. Zwecke der Datenverarbeitung</h2>
            <p className="text-lg text-gray-600 mb-4">
              Wir verarbeiten Ihre personenbezogenen Daten für folgende Zwecke:
            </p>
            <ul className="list-disc pl-6 mb-8 text-lg text-gray-600">
              <li className="mb-2">Bereitstellung und Verbesserung unserer Dienste</li>
              <li className="mb-2">Kommunikation mit Ihnen bezüglich Ihres Kontos oder unserer Dienste</li>
              <li className="mb-2">Verarbeitung von Zahlungen</li>
              <li className="mb-2">Einhaltung gesetzlicher Verpflichtungen</li>
              <li>Analyse der Nutzung unserer Website und Dienste zur Verbesserung des Nutzererlebnisses</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 text-gray-800">4. Rechtsgrundlage der Verarbeitung</h2>
            <p className="text-lg text-gray-600 mb-8">
              Die Rechtsgrundlage für die Verarbeitung Ihrer personenbezogenen Daten ist in der Regel die Erfüllung
              eines Vertrags (Art. 6 Abs. 1 lit. b DSGVO), die Erfüllung rechtlicher Verpflichtungen (Art. 6 Abs. 1 lit.
              c DSGVO) oder unser berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO). Wenn wir Ihre Daten auf Grundlage
              einer Einwilligung verarbeiten, ist die Rechtsgrundlage Art. 6 Abs. 1 lit. a DSGVO.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-gray-800">5. Datenweitergabe an Dritte</h2>
            <p className="text-lg text-gray-600 mb-4">
              Wir geben Ihre personenbezogenen Daten nur in folgenden Fällen an Dritte weiter:
            </p>
            <ul className="list-disc pl-6 mb-8 text-lg text-gray-600">
              <li className="mb-2">
                An Dienstleister, die uns bei der Bereitstellung unserer Dienste unterstützen (z.B. Hosting-Provider,
                Zahlungsdienstleister)
              </li>
              <li className="mb-2">Wenn wir gesetzlich dazu verpflichtet sind</li>
              <li className="mb-2">Zum Schutz unserer Rechte oder des Eigentums von Eluma</li>
              <li>Mit Ihrer ausdrücklichen Einwilligung</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 text-gray-800">6. Datensicherheit</h2>
            <p className="text-lg text-gray-600 mb-8">
              Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre personenbezogenen Daten gegen
              zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen den Zugriff unberechtigter
              Personen zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung
              fortlaufend verbessert.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-gray-800">7. Ihre Rechte</h2>
            <p className="text-lg text-gray-600 mb-4">
              Sie haben folgende Rechte in Bezug auf Ihre personenbezogenen Daten:
            </p>
            <ul className="list-disc pl-6 mb-8 text-lg text-gray-600">
              <li className="mb-2">Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li className="mb-2">Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li className="mb-2">Recht auf Löschung (Art. 17 DSGVO)</li>
              <li className="mb-2">Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li className="mb-2">Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p className="text-lg text-gray-600 mb-8">
              Um diese Rechte auszuüben, kontaktieren Sie uns bitte unter{" "}
              <a href="mailto:info@elumalab.com" className="text-pink-500 hover:underline">
                info@elumalab.com
              </a>
              .
            </p>

            <h2 className="text-3xl font-bold mb-6 text-gray-800">8. Änderungen dieser Datenschutzerklärung</h2>
            <p className="text-lg text-gray-600 mb-8">
              Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu ändern. Die aktuelle Version der
              Datenschutzerklärung ist stets auf unserer Website verfügbar. Bitte überprüfen Sie regelmäßig unsere
              Website auf Änderungen.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-gray-800">9. Kontakt</h2>
            <p className="text-lg text-gray-600 mb-8">
              Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte unter{" "}
              <a href="mailto:info@elumalab.com" className="text-pink-500 hover:underline">
                info@elumalab.com
              </a>
              .
            </p>
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
                    <Link href="/roadmap" className="text-gray-400 hover:text-pink-400">
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
                    <Link href="/webinars" className="text-gray-400 hover:text-pink-400">
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
                    <Link href="/privacy" className="text-gray-400 hover:text-pink-400">
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
            <p>© {new Date().getFullYear()} Eluma. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

