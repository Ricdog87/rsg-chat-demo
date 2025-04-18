import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function OnboardingPage() {
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Unser Onboarding-Prozess</h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Wir begleiten dich Schritt für Schritt auf dem Weg zu einer erfolgreichen Kundenkommunikation.
          </p>
        </div>
      </header>

      {/* Onboarding Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">1. Persönliches Kick-off Meeting</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Wir starten mit einem persönlichen Gespräch, um deine Anforderungen und Ziele zu verstehen. Unser
                  Experte analysiert deine aktuelle Kommunikationsstrategie und entwickelt einen maßgeschneiderten Plan
                  für deine Eluma-Implementation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Bedarfsanalyse und Zielsetzung</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Technische Voraussetzungen klären</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Zeitplan für die Implementierung</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-6 rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400&h=300&auto=format&fit=crop"
                  alt="Kick-off Meeting"
                  width={400}
                  height={300}
                  className="rounded-lg w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 md:order-1 bg-gray-100 p-6 rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=400&h=300&auto=format&fit=crop"
                  alt="Technische Einrichtung"
                  width={400}
                  height={300}
                  className="rounded-lg w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">2. Technische Einrichtung</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Unser technisches Team unterstützt dich bei der Einrichtung deines Eluma-Accounts. Wir helfen dir bei
                  der Verbindung deiner WhatsApp Business API, der Konfiguration deines Dashboards und der Integration
                  bestehender Systeme.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-orange-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>WhatsApp Business API Einrichtung</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-orange-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Dashboard-Konfiguration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-orange-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Integration bestehender Systeme (CRM, etc.)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">3. Schulung & Training</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Wir schulen dich und dein Team in allen Funktionen von Eluma. In interaktiven Workshops lernst du, wie
                  du die Plattform optimal für deine Kundenkommunikation nutzen kannst.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Umfassende Plattform-Schulung</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Best Practices für die Kundenkommunikation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Automatisierungen und Workflows einrichten</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-6 rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400&h=300&auto=format&fit=crop"
                  alt="Schulung & Training"
                  width={400}
                  height={300}
                  className="rounded-lg w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 bg-gray-100 p-6 rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=400&h=300&auto=format&fit=crop"
                  alt="Laufende Betreuung"
                  width={400}
                  height={300}
                  className="rounded-lg w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">4. Laufende Betreuung & Optimierung</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Unsere Zusammenarbeit endet nicht nach dem Onboarding. Wir bieten kontinuierliche Unterstützung,
                  regelmäßige Check-ins und Optimierungsvorschläge, um sicherzustellen, dass du das Maximum aus Eluma
                  herausholst.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Regelmäßige Check-in Meetings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Performance-Analysen und Optimierungsvorschläge</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Priorisierter Support bei technischen Fragen</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Was unsere Kunden über unser Onboarding sagen
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=60&h=60&auto=format&fit=crop"
                      alt="Kundenfoto"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Michael Bauer</p>
                    <p className="text-sm text-gray-500">Geschäftsführer, TechSolutions GmbH</p>
                  </div>
                </div>
                <p className="italic text-gray-600">
                  "Das Onboarding-Team von Eluma hat uns hervorragend unterstützt. Die persönliche Betreuung und die
                  maßgeschneiderten Schulungen haben uns geholfen, die Plattform schnell und effizient zu
                  implementieren."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=60&h=60&auto=format&fit=crop"
                      alt="Kundenfoto"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Sarah Müller</p>
                    <p className="text-sm text-gray-500">Marketing Leiterin, Fashion Store</p>
                  </div>
                </div>
                <p className="italic text-gray-600">
                  "Der Onboarding-Prozess war unkompliziert und sehr effektiv. Besonders beeindruckt hat mich, wie
                  schnell wir unsere bestehenden Systeme integrieren konnten. Innerhalb einer Woche waren wir voll
                  einsatzfähig."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <Image
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=60&h=60&auto=format&fit=crop"
                      alt="Kundenfoto"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Thomas Klein</p>
                    <p className="text-sm text-gray-500">Kundenservice, Reisebüro Sonnenschein</p>
                  </div>
                </div>
                <p className="italic text-gray-600">
                  "Die kontinuierliche Betreuung nach dem Onboarding ist Gold wert. Die regelmäßigen Check-ins und
                  Optimierungsvorschläge haben uns geholfen, unsere Kundenkommunikation stetig zu verbessern."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              Wartung & Support während der Nutzung
            </h2>

            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Technische Wartung</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Wir kümmern uns um die technische Seite, damit du dich auf dein Geschäft konzentrieren kannst. Unsere
                  Plattform wird kontinuierlich gewartet und aktualisiert, um optimale Leistung und Sicherheit zu
                  gewährleisten.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Regelmäßige Sicherheitsupdates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Performance-Optimierungen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Automatische Backups deiner Daten</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Kontinuierliche Überwachung der Systemstabilität</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-6 rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1581092921461-39b9d08ed9ad?q=80&w=400&h=300&auto=format&fit=crop"
                  alt="Technische Wartung"
                  width={400}
                  height={300}
                  className="rounded-lg w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 bg-gray-100 p-6 rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=400&h=300&auto=format&fit=crop"
                  alt="Support & Beratung"
                  width={400}
                  height={300}
                  className="rounded-lg w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Support & Beratung</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Unser Support-Team steht dir bei Fragen und Problemen zur Seite. Je nach gewähltem Paket bieten wir
                  verschiedene Support-Level, von E-Mail-Support bis hin zu einem dedizierten Account Manager.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-orange-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Mehrsprachiger Support (Deutsch, Englisch)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-orange-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Umfangreiche Wissensdatenbank</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-orange-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Video-Tutorials und Webinare</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-orange-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Strategische Beratung zur Optimierung deiner Kommunikation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Bereit für ein reibungsloses Onboarding?</h2>
          <p className="text-xl mb-10 text-white max-w-3xl mx-auto">
            Starte jetzt mit Eluma und erlebe, wie einfach die Implementierung einer professionellen WhatsApp Business
            Lösung sein kann.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-white text-pink-500 hover:bg-gray-100 px-8">
                Kostenlos starten
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 px-8">
                Beratungsgespräch vereinbaren
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

