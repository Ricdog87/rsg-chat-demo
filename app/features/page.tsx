import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Users, BarChart3, Zap, Bot, Globe, Lock, Smartphone, Headphones, Rocket } from "lucide-react"

export default function FeaturesPage() {
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
              <Link href="/features" className="text-pink-500 font-medium">
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Alle Features im Überblick</h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Entdecke die vielfältigen Funktionen von Eluma, die deine Kundenkommunikation auf das nächste Level heben.
          </p>
        </div>
      </header>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800">Hauptfunktionen</h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <FeatureCard
              icon={<MessageSquare className="h-12 w-12 text-pink-500" />}
              title="Einheitlicher Posteingang"
              description="Alle Nachrichten von WhatsApp, Instagram, Facebook und mehr an einem Ort verwalten. Nie wieder zwischen verschiedenen Apps wechseln."
              image="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=500&h=300&auto=format&fit=crop"
            />

            <FeatureCard
              icon={<Users className="h-12 w-12 text-orange-400" />}
              title="Team-Kollaboration"
              description="Arbeite nahtlos mit deinem Team zusammen. Weise Konversationen zu, hinterlasse interne Notizen und vermeide Doppelarbeit."
              image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&h=300&auto=format&fit=crop"
            />

            <FeatureCard
              icon={<BarChart3 className="h-12 w-12 text-yellow-400" />}
              title="Detaillierte Analysen"
              description="Verstehe deine Kunden besser mit umfassenden Berichten und Statistiken. Optimiere deine Kommunikationsstrategie basierend auf Daten."
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&h=300&auto=format&fit=crop"
            />

            <FeatureCard
              icon={<Bot className="h-12 w-12 text-purple-500" />}
              title="KI-gestützte Automatisierungen"
              description="Spare Zeit mit intelligenten Automatisierungen und Chatbots. Beantworte häufig gestellte Fragen automatisch und konzentriere dich auf komplexere Anliegen."
              image="https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=500&h=300&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* All Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800">Alle Features im Detail</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <SmallFeatureCard
              icon={<Globe className="h-8 w-8 text-pink-500" />}
              title="Multi-Kanal-Support"
              description="Verbinde WhatsApp, Instagram, Facebook, E-Mail und mehr in einer einzigen Plattform."
            />

            <SmallFeatureCard
              icon={<Smartphone className="h-8 w-8 text-orange-400" />}
              title="Mobile App"
              description="Bleibe auch unterwegs mit der Eluma-App für iOS und Android mit deinen Kunden in Kontakt."
            />

            <SmallFeatureCard
              icon={<Lock className="h-8 w-8 text-yellow-400" />}
              title="Datenschutz & Sicherheit"
              description="Deine Daten sind bei uns sicher. Wir erfüllen alle DSGVO-Anforderungen und verwenden Verschlüsselung."
            />

            <SmallFeatureCard
              icon={<Zap className="h-8 w-8 text-green-500" />}
              title="Schnellantworten"
              description="Erstelle vorgefertigte Antworten für häufig gestellte Fragen und spare wertvolle Zeit."
            />

            <SmallFeatureCard
              icon={<Headphones className="h-8 w-8 text-blue-500" />}
              title="Premium Support"
              description="Unser Support-Team steht dir bei Fragen und Problemen zur Seite – schnell und kompetent."
            />

            <SmallFeatureCard
              icon={<Rocket className="h-8 w-8 text-purple-500" />}
              title="Regelmäßige Updates"
              description="Wir entwickeln Eluma ständig weiter und fügen regelmäßig neue Funktionen hinzu."
            />

            <SmallFeatureCard
              icon={<MessageSquare className="h-8 w-8 text-pink-500" />}
              title="Broadcast-Nachrichten"
              description="Sende Nachrichten an mehrere Kunden gleichzeitig für Ankündigungen oder Promotions."
            />

            <SmallFeatureCard
              icon={<Users className="h-8 w-8 text-orange-400" />}
              title="Kundenprofile"
              description="Speichere wichtige Kundeninformationen und Interaktionshistorie für personalisierten Service."
            />

            <SmallFeatureCard
              icon={<BarChart3 className="h-8 w-8 text-yellow-400" />}
              title="Leistungsberichte"
              description="Erhalte wöchentliche und monatliche Berichte über deine Kommunikationsleistung."
            />
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800">Integrationen</h2>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Verbinde deine bestehenden Tools</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Eluma lässt sich nahtlos in deine bestehende Technologie-Infrastruktur integrieren. Verbinde deine
                  CRM-Systeme, E-Commerce-Plattformen und mehr für einen reibungslosen Workflow.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Unsere API ermöglicht es dir, Eluma an deine spezifischen Bedürfnisse anzupassen und mit deinen
                  eigenen Systemen zu verbinden.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">Salesforce</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">HubSpot</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">Shopify</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">WooCommerce</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">Zendesk</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">Zapier</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">Google Workspace</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">Microsoft 365</span>
                </div>
              </div>
              <div className="bg-gray-100 p-6 rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=500&h=400&auto=format&fit=crop"
                  alt="Integrationen"
                  width={500}
                  height={400}
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Bereit, Eluma auszuprobieren?</h2>
          <p className="text-xl mb-10 text-white max-w-3xl mx-auto">
            Starte jetzt mit Eluma und erlebe, wie einfach und effizient moderne Kundenkommunikation sein kann.
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

function FeatureCard({ icon, title, description, image }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

function SmallFeatureCard({ icon, title, description }) {
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

