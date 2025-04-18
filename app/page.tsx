import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, Users, BarChart3, Zap } from "lucide-react"

export default function Home() {
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

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Dein WhatsApp Business auf dem nächsten Level
              </h1>
              <p className="text-xl text-white mb-8">
                Eluma verbindet alle deine Messaging-Kanäle in einer frischen, übersichtlichen Plattform. Kommuniziere
                effizienter und steigere deine Kundenzufriedenheit!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="bg-white text-pink-500 hover:bg-gray-100">
                    Kostenlos starten
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="bg-white text-pink-500 hover:bg-gray-100 border-2 border-white font-bold"
                  >
                    Live Demo testen
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative bg-white p-6 rounded-xl shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-300">
                <div className="absolute -top-10 -right-10 bg-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full transform rotate-12 shadow-lg">
                  Neu!
                </div>
                <div className="absolute -bottom-8 -left-8 bg-yellow-300 text-gray-800 text-sm font-bold px-4 py-2 rounded-full transform -rotate-12 shadow-lg">
                  KI-gestützt
                </div>
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-yellow-300/20 mix-blend-overlay z-10"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1596742578443-7682ef7b7266?q=80&w=600&h=400&auto=format&fit=crop"
                    alt="Eluma Dashboard"
                    width={600}
                    height={400}
                    className="rounded-lg transform transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg z-20">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <span className="text-xs font-medium">Live-Daten</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 bg-gradient-to-r from-pink-500/10 to-yellow-300/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            Alle Funktionen, die dein Business braucht
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<MessageSquare className="h-10 w-10 text-pink-500" />}
              title="Einheitlicher Posteingang"
              description="Alle Nachrichten von WhatsApp, Instagram und mehr an einem Ort verwalten."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-orange-400" />}
              title="Team-Kollaboration"
              description="Arbeite nahtlos mit deinem Team zusammen und verteile Aufgaben effizient."
            />
            <FeatureCard
              icon={<BarChart3 className="h-10 w-10 text-yellow-400" />}
              title="Detaillierte Analysen"
              description="Verstehe deine Kunden besser mit umfassenden Berichten und Statistiken."
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-purple-500" />}
              title="Automatisierungen"
              description="Spare Zeit mit intelligenten Automatisierungen und Chatbots."
            />
          </div>

          <div className="mt-16 text-center">
            <Link href="/features">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-yellow-300 hover:from-pink-600 hover:to-yellow-400"
              >
                Alle Features entdecken <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800">So einfach funktioniert's</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-pink-500">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Registrieren</h3>
              <p className="text-gray-600">
                Erstelle deinen Account und verbinde deine WhatsApp Business API in wenigen Minuten.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-500">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Einrichten</h3>
              <p className="text-gray-600">
                Passe dein Dashboard an, lade dein Team ein und richte Automatisierungen ein.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-yellow-500">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Kommunizieren</h3>
              <p className="text-gray-600">
                Starte sofort mit der effizienten Kommunikation mit deinen Kunden über alle Kanäle.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/onboarding">
              <Button variant="outline" size="lg" className="border-pink-500 text-pink-500 hover:bg-pink-50">
                Mehr über unser Onboarding erfahren
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">Was unsere Kunden sagen</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Eluma hat unsere Kundenkommunikation revolutioniert. Wir sparen täglich Stunden!"
              author="Maria Schmidt"
              company="Boutique Bella"
            />
            <TestimonialCard
              quote="Die bunte, intuitive Oberfläche macht die Arbeit zum Vergnügen. Endlich Spaß bei der Kundenkommunikation!"
              author="Thomas Weber"
              company="Café Sonnenschein"
            />
            <TestimonialCard
              quote="Der Support ist fantastisch und die Plattform wird ständig mit neuen Features aktualisiert."
              author="Laura Müller"
              company="Fitness Studio Vital"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-800">
            Bereit für strahlende Kundenkommunikation?
          </h2>
          <p className="text-xl mb-10 text-gray-700 max-w-3xl mx-auto">
            Starte noch heute mit Eluma und erlebe, wie einfach und effizient WhatsApp Business sein kann.
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 text-xl">
              Kostenlos registrieren <ArrowRight className="ml-2" />
            </Button>
          </Link>
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
                    <Link href="/dashboard" className="text-gray-400 hover:text-pink-400">
                      Demo
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
                    <Link href="/contact" className="text-gray-400 hover:text-pink-400">
                      Kontakt
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

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-pink-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function TestimonialCard({ quote, author, company }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
      <p className="text-white text-lg mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-bold text-white">{author}</p>
        <p className="text-white/80">{company}</p>
      </div>
    </div>
  )
}

