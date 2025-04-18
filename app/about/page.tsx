import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation - Same as in page.tsx */}
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
              <Link href="/about" className="text-pink-500 font-medium">
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Über Eluma</h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Wir revolutionieren die Art und Weise, wie Unternehmen mit ihren Kunden kommunizieren.
          </p>
        </div>
      </header>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Unsere Geschichte</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Eluma wurde 2025 mit einer klaren Vision gegründet: Die Kundenkommunikation für Unternehmen jeder
                  Größe zu vereinfachen und zu verbessern.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Wir haben erkannt, dass viele Unternehmen Schwierigkeiten haben, mit der wachsenden Anzahl an
                  Kommunikationskanälen Schritt zu halten. WhatsApp, Instagram, Facebook, E-Mail – die Liste wird immer
                  länger.
                </p>
                <p className="text-lg text-gray-600">
                  Unsere Lösung: Eine intuitive, farbenfrohe Plattform, die alle diese Kanäle in einem einheitlichen
                  Posteingang zusammenführt und es Unternehmen ermöglicht, effizienter und persönlicher mit ihren Kunden
                  zu kommunizieren.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&h=400&auto=format&fit=crop"
                  alt="Eluma Gründerteam"
                  width={500}
                  height={400}
                  className="rounded-lg w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 bg-gray-100 p-6 rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500&h=400&auto=format&fit=crop"
                  alt="Eluma Mission"
                  width={500}
                  height={400}
                  className="rounded-lg w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Unsere Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Wir glauben, dass großartige Kundenkommunikation der Schlüssel zum Erfolg jedes Unternehmens ist.
                  Unsere Mission ist es, diese Kommunikation so einfach, effizient und angenehm wie möglich zu
                  gestalten.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Mit Eluma möchten wir Unternehmen dabei helfen, echte Beziehungen zu ihren Kunden aufzubauen, die auf
                  schneller, persönlicher und relevanter Kommunikation basieren.
                </p>
                <p className="text-lg text-gray-600">
                  Wir sind überzeugt, dass zufriedene Kunden zu treuen Kunden werden, und treue Kunden sind das
                  Fundament jedes erfolgreichen Unternehmens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800">Unsere Werte</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-pink-500">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Innovation</h3>
              <p className="text-gray-600 text-center">
                Wir streben danach, kontinuierlich neue und bessere Wege zu finden, um die Kundenkommunikation zu
                verbessern.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-orange-500">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Kundenfokus</h3>
              <p className="text-gray-600 text-center">
                Unsere Kunden stehen im Mittelpunkt all unserer Entscheidungen. Ihr Erfolg ist unser Erfolg.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-yellow-500">🌈</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Kreativität</h3>
              <p className="text-gray-600 text-center">
                Wir glauben, dass Kommunikation nicht langweilig sein muss. Kreativität und Farbe machen den
                Unterschied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800">Unser Team</h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <TeamMember
              name="Constance Renz"
              role="CEO & Co-Founder"
              image="/images/constance.jpeg"
              bio="Ausgebildete Prompt Engineerin mit Leidenschaft für KI-Automation und KI-Agenten. Constance hat es sich zur Aufgabe gemacht, die Kommunikationstechnologie zu revolutionieren."
            />
            <TeamMember
              name="Ricardo Serrano"
              role="CTO & Co-Founder"
              image="/images/ric.jpg"
              bio="Prompt Engineer und KI-Spezialist mit umfassender Erfahrung in der Entwicklung von KI-Agenten. Ricardo liebt es, innovative Lösungen für komplexe Kommunikationsprobleme zu schaffen."
            />
          </div>

          <div className="text-center mt-16">
            <Link href="/careers">
              <Button variant="outline" size="lg" className="border-pink-500 text-pink-500 hover:bg-pink-50">
                Karriere bei Eluma
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Werde Teil der Eluma-Revolution</h2>
          <p className="text-xl mb-10 text-white max-w-3xl mx-auto">
            Entdecke, wie Eluma deine Kundenkommunikation auf das nächste Level heben kann.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-white text-pink-500 hover:bg-gray-100 px-8">
                Kostenlos starten
              </Button>
            </Link>
            <Link href="/demo">
              <Button
                size="lg"
                className="bg-white text-pink-500 hover:bg-gray-100 border-2 border-white font-bold px-8"
              >
                Demo ansehen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - Same as in page.tsx */}
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
                      Roadmap
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
                      Webinare
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

function TeamMember({ name, role, image, bio }) {
  return (
    <div className="text-center bg-white p-8 rounded-xl shadow-lg">
      <div className="mb-6 relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-300 rounded-full transform scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={200}
          height={200}
          className="rounded-full w-48 h-48 mx-auto object-cover relative z-10"
        />
      </div>
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-pink-500 mb-4">{role}</p>
      <p className="text-gray-600">{bio}</p>
    </div>
  )
}

