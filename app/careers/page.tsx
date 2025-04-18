import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Briefcase, Users, Zap, Heart, Coffee, Sparkles } from "lucide-react"

export default function CareersPage() {
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Karriere bei Eluma</h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Werde Teil unseres Teams und hilf uns, die Zukunft der Kundenkommunikation zu gestalten.
          </p>
          <Button size="lg" className="bg-white text-pink-500 hover:bg-gray-100">
            Offene Stellen ansehen
          </Button>
        </div>
      </header>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800">Warum zu Eluma?</h2>

            <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Unsere Mission</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Bei Eluma arbeiten wir daran, Unternehmen dabei zu helfen, bessere und persönlichere Beziehungen zu
                  ihren Kunden aufzubauen. Wir glauben, dass großartige Kundenkommunikation der Schlüssel zum Erfolg
                  jedes Unternehmens ist.
                </p>
                <p className="text-lg text-gray-600">
                  Als Teil unseres Teams wirst du an innovativen Lösungen arbeiten, die tausenden von Unternehmen
                  helfen, ihre Kundenkommunikation zu revolutionieren.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&h=400&auto=format&fit=crop"
                  alt="Eluma Team"
                  width={500}
                  height={400}
                  className="rounded-lg w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <BenefitCard
                icon={<Zap className="h-8 w-8 text-pink-500" />}
                title="Innovative Technologie"
                description="Arbeite mit den neuesten Technologien und gestalte die Zukunft der Kundenkommunikation."
              />
              <BenefitCard
                icon={<Users className="h-8 w-8 text-orange-400" />}
                title="Großartiges Team"
                description="Werde Teil eines diversen, talentierten und leidenschaftlichen Teams mit flachen Hierarchien."
              />
              <BenefitCard
                icon={<Heart className="h-8 w-8 text-yellow-400" />}
                title="Work-Life-Balance"
                description="Flexible Arbeitszeiten, Remote-Arbeit und 30 Tage Urlaub für deine persönliche Balance."
              />
              <BenefitCard
                icon={<Sparkles className="h-8 w-8 text-green-500" />}
                title="Persönliche Entwicklung"
                description="Individuelles Weiterbildungsbudget und regelmäßige Entwicklungsgespräche."
              />
              <BenefitCard
                icon={<Coffee className="h-8 w-8 text-blue-500" />}
                title="Moderne Büros"
                description="Arbeite in unseren modernen Büros mit kostenlosem Kaffee, Snacks und Getränken."
              />
              <BenefitCard
                icon={<Briefcase className="h-8 w-8 text-purple-500" />}
                title="Attraktive Vergütung"
                description="Wettbewerbsfähiges Gehalt, Bonusprogramm und Mitarbeiteraktienoptionen."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800">Offene Stellen</h2>

            <div className="space-y-6 mb-12">
              <JobCard
                title="Senior Frontend Engineer (React/Next.js)"
                location="Wiesbaden, Deutschland"
                type="Vollzeit"
                department="Engineering"
                description="Wir suchen einen erfahrenen Frontend-Entwickler, der unsere Benutzeroberfläche mit React und Next.js weiterentwickelt und optimiert."
              />

              <JobCard
                title="Backend Developer (Node.js)"
                location="Remote, Deutschland"
                type="Vollzeit"
                department="Engineering"
                description="Als Backend-Entwickler wirst du an der Skalierung unserer API und der Implementierung neuer Features arbeiten."
              />

              <JobCard
                title="Product Manager"
                location="Wiesbaden, Deutschland"
                type="Vollzeit"
                department="Produkt"
                description="Wir suchen einen erfahrenen Product Manager, der die Entwicklung unserer Plattform vorantreibt und eng mit dem Entwicklungsteam zusammenarbeitet."
              />

              <JobCard
                title="Customer Success Manager"
                location="Wiesbaden, Deutschland"
                type="Vollzeit"
                department="Customer Success"
                description="Als Customer Success Manager bist du die Schnittstelle zwischen unseren Kunden und unserem Produkt. Du hilfst Kunden, das Beste aus Eluma herauszuholen."
              />

              <JobCard
                title="Marketing Manager"
                location="Wiesbaden, Deutschland"
                type="Vollzeit"
                department="Marketing"
                description="Wir suchen einen kreativen Marketing Manager, der unsere Marketingstrategie entwickelt und umsetzt, um Eluma bekannter zu machen."
              />

              <JobCard
                title="Sales Development Representative"
                location="Wiesbaden, Deutschland"
                type="Vollzeit"
                department="Vertrieb"
                description="Als Sales Development Representative identifizierst du potenzielle Kunden und führst erste Gespräche, um Eluma vorzustellen."
              />
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-600 mb-8">
                Keine passende Stelle dabei? Wir sind immer auf der Suche nach talentierten Menschen, die unser Team
                verstärken.
              </p>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-pink-500 text-pink-500 hover:bg-pink-50">
                  Initiativbewerbung senden
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800">Unser Bewerbungsprozess</h2>

            <div className="grid md:grid-cols-4 gap-8">
              <ProcessStep
                number="1"
                title="Bewerbung"
                description="Sende uns deinen Lebenslauf und ein kurzes Anschreiben, warum du zu Eluma passen würdest."
              />

              <ProcessStep
                number="2"
                title="Erstes Gespräch"
                description="Ein kurzes Kennenlerngespräch mit unserem Recruiting-Team, um mehr über dich zu erfahren."
              />

              <ProcessStep
                number="3"
                title="Fachgespräch"
                description="Ein tiefergehendes Gespräch mit deinem potenziellen Team und eine technische Aufgabe (je nach Position)."
              />

              <ProcessStep
                number="4"
                title="Finales Gespräch"
                description="Ein letztes Gespräch mit der Führungsebene und die Besprechung der Konditionen."
              />
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg text-gray-600 mb-8">
                Wir legen Wert auf einen transparenten und effizienten Bewerbungsprozess. Von der ersten Bewerbung bis
                zur Entscheidung dauert es in der Regel nicht länger als 2-3 Wochen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Unsere Unternehmenskultur</h2>
          <p className="text-xl mb-12 text-white max-w-3xl mx-auto">
            Bei Eluma leben wir eine offene, inklusive und innovative Kultur. Wir schätzen Kreativität, Zusammenarbeit
            und kontinuierliches Lernen.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">Transparenz</h3>
              <p className="text-white/90">
                Wir teilen Informationen offen und ehrlich, damit jeder im Team fundierte Entscheidungen treffen kann.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">Eigenverantwortung</h3>
              <p className="text-white/90">
                Wir vertrauen darauf, dass jeder im Team Verantwortung übernimmt und eigenständig arbeitet.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">Kundenfokus</h3>
              <p className="text-white/90">
                Wir stellen die Bedürfnisse unserer Kunden in den Mittelpunkt all unserer Entscheidungen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-800">Bereit, Teil von Eluma zu werden?</h2>
          <p className="text-xl mb-10 text-gray-700 max-w-3xl mx-auto">
            Wir freuen uns darauf, dich kennenzulernen und gemeinsam die Zukunft der Kundenkommunikation zu gestalten.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-yellow-300 hover:from-pink-600 hover:to-yellow-400 text-white px-8 py-6 text-xl"
          >
            Jetzt bewerben
          </Button>
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

function BenefitCard({ icon, title, description }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

function JobCard({ title, location, type, department, description }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <div className="flex flex-wrap items-center mt-2 text-sm text-gray-600">
              <div className="flex items-center mr-4 mb-2 md:mb-0">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{location}</span>
              </div>
              <div className="flex items-center mr-4 mb-2 md:mb-0">
                <Briefcase className="h-4 w-4 mr-1" />
                <span>{type}</span>
              </div>
              <div className="flex items-center mb-2 md:mb-0">
                <Users className="h-4 w-4 mr-1" />
                <span>{department}</span>
              </div>
            </div>
          </div>
          <Badge className="bg-gradient-to-r from-pink-500 to-yellow-300 mt-2 md:mt-0 self-start md:self-center">
            Neu
          </Badge>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button className="bg-gradient-to-r from-pink-500 to-yellow-300 hover:from-pink-600 hover:to-yellow-400">
          Details & Bewerbung
        </Button>
      </CardContent>
    </Card>
  )
}

function ProcessStep({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-2xl font-bold text-white">{number}</span>
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

