import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, Check, ExternalLink } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function IntegrationsPage() {
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Integrationen</h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Verbinde Eluma mit deinen bestehenden Tools und optimiere deinen Workflow.
          </p>
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input type="text" placeholder="Suche nach Integrationen..." className="pl-10 py-6 text-lg bg-white" />
            <Button className="absolute right-1.5 top-1.5 bg-gradient-to-r from-pink-500 to-yellow-300 hover:from-pink-600 hover:to-yellow-400">
              Suchen
            </Button>
          </div>
        </div>
      </header>

      {/* Integration Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="flex flex-wrap justify-center mb-12">
                <TabsTrigger value="all">Alle</TabsTrigger>
                <TabsTrigger value="crm">CRM</TabsTrigger>
                <TabsTrigger value="ecommerce">E-Commerce</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
                <TabsTrigger value="productivity">Produktivität</TabsTrigger>
                <TabsTrigger value="analytics">Analytik</TabsTrigger>
                <TabsTrigger value="other">Sonstige</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="grid md:grid-cols-3 gap-8">
                  <IntegrationCard
                    name="Salesforce"
                    description="Verbinde Eluma mit Salesforce, um Kundendaten zu synchronisieren und Kommunikation zu verfolgen."
                    category="CRM"
                    image="/placeholder.svg?height=60&width=120"
                    popular={true}
                  />

                  <IntegrationCard
                    name="HubSpot"
                    description="Integriere Eluma mit HubSpot für nahtloses Kontaktmanagement und Marketing-Automatisierung."
                    category="CRM"
                    image="/placeholder.svg?height=60&width=120"
                    popular={true}
                  />

                  <IntegrationCard
                    name="Shopify"
                    description="Verbinde deinen Shopify-Shop mit Eluma für Bestellbenachrichtigungen und Kundensupport."
                    category="E-Commerce"
                    image="/placeholder.svg?height=60&width=120"
                    popular={true}
                  />

                  <IntegrationCard
                    name="WooCommerce"
                    description="Integriere WooCommerce mit Eluma, um Kunden über Bestellstatus zu informieren und Support zu bieten."
                    category="E-Commerce"
                    image="/placeholder.svg?height=60&width=120"
                  />

                  <IntegrationCard
                    name="Mailchimp"
                    description="Synchronisiere Kontakte zwischen Eluma und Mailchimp für konsistente Kommunikation."
                    category="Marketing"
                    image="/placeholder.svg?height=60&width=120"
                  />

                  <IntegrationCard
                    name="Google Workspace"
                    description="Verbinde Eluma mit Google Workspace für nahtlose Kalender- und E-Mail-Integration."
                    category="Produktivität"
                    image="/placeholder.svg?height=60&width=120"
                  />

                  <IntegrationCard
                    name="Slack"
                    description="Erhalte Benachrichtigungen in Slack über neue Nachrichten und wichtige Ereignisse in Eluma."
                    category="Produktivität"
                    image="/placeholder.svg?height=60&width=120"
                  />

                  <IntegrationCard
                    name="Zapier"
                    description="Verbinde Eluma mit über 3.000 Apps durch Zapier-Automatisierungen."
                    category="Produktivität"
                    image="/placeholder.svg?height=60&width=120"
                    popular={true}
                  />

                  <IntegrationCard
                    name="Google Analytics"
                    description="Verfolge die Performance deiner Kundenkommunikation mit Google Analytics."
                    category="Analytik"
                    image="/placeholder.svg?height=60&width=120"
                  />

                  <IntegrationCard
                    name="Zendesk"
                    description="Integriere Eluma mit Zendesk für ein nahtloses Ticketing-System."
                    category="Support"
                    image="/placeholder.svg?height=60&width=120"
                  />

                  <IntegrationCard
                    name="Microsoft 365"
                    description="Verbinde Eluma mit Microsoft 365 für Kalender- und E-Mail-Integration."
                    category="Produktivität"
                    image="/placeholder.svg?height=60&width=120"
                  />

                  <IntegrationCard
                    name="Stripe"
                    description="Verarbeite Zahlungen direkt in Eluma-Konversationen mit der Stripe-Integration."
                    category="Zahlungen"
                    image="/placeholder.svg?height=60&width=120"
                  />
                </div>
              </TabsContent>

              <TabsContent value="crm">
                <div className="grid md:grid-cols-3 gap-8">
                  <IntegrationCard
                    name="Salesforce"
                    description="Verbinde Eluma mit Salesforce, um Kundendaten zu synchronisieren und Kommunikation zu verfolgen."
                    category="CRM"
                    image="/placeholder.svg?height=60&width=120"
                    popular={true}
                  />

                  <IntegrationCard
                    name="HubSpot"
                    description="Integriere Eluma mit HubSpot für nahtloses Kontaktmanagement und Marketing-Automatisierung."
                    category="CRM"
                    image="/placeholder.svg?height=60&width=120"
                    popular={true}
                  />

                  <IntegrationCard
                    name="Pipedrive"
                    description="Verbinde Eluma mit Pipedrive, um Verkaufschancen zu verfolgen und Kundenkommunikation zu optimieren."
                    category="CRM"
                    image="/placeholder.svg?height=60&width=120"
                  />

                  <IntegrationCard
                    name="Zoho CRM"
                    description="Integriere Eluma mit Zoho CRM für eine 360-Grad-Sicht auf deine Kunden."
                    category="CRM"
                    image="/placeholder.svg?height=60&width=120"
                  />
                </div>
              </TabsContent>

              {/* Weitere TabsContent für andere Kategorien würden hier folgen */}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Featured Integration */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-4 bg-gradient-to-r from-pink-500 to-yellow-300">Empfohlen</Badge>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Zapier Integration</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Mit der Zapier-Integration kannst du Eluma mit über 3.000 anderen Apps verbinden, ohne eine einzige
                  Zeile Code zu schreiben. Automatisiere Workflows, spare Zeit und reduziere manuelle Arbeit.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Verbinde Eluma mit über 3.000 Apps</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Erstelle Automatisierungen ohne Programmierkenntnisse</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Spare Zeit durch automatisierte Workflows</p>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-pink-500 to-yellow-300 hover:from-pink-600 hover:to-yellow-400">
                  Zapier Integration einrichten
                </Button>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Zapier Integration"
                  width={500}
                  height={400}
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">Eluma API</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Unsere leistungsstarke API ermöglicht es dir, individuelle Integrationen zu entwickeln und Eluma an
                deine spezifischen Bedürfnisse anzupassen.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Umfassende Dokumentation</h3>
                  <p className="text-gray-600 mb-4">
                    Unsere detaillierte API-Dokumentation macht es einfach, mit der Entwicklung zu beginnen.
                  </p>
                  <Link href="/docs/api" className="flex items-center text-pink-500 font-medium">
                    <span>Zur Dokumentation</span>
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Entwickler-Support</h3>
                  <p className="text-gray-600 mb-4">
                    Unser Entwicklerteam steht dir bei Fragen und Problemen zur Seite.
                  </p>
                  <Link href="/contact" className="flex items-center text-pink-500 font-medium">
                    <span>Support kontaktieren</span>
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Beispiel-Code</h3>
                  <p className="text-gray-600 mb-4">
                    Starte schneller mit unseren Beispiel-Implementierungen in verschiedenen Programmiersprachen.
                  </p>
                  <Link href="/docs/api/examples" className="flex items-center text-pink-500 font-medium">
                    <span>Beispiele ansehen</span>
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Bereit, deine Tools zu verbinden?</h2>
          <p className="text-xl mb-10 text-white max-w-3xl mx-auto">
            Starte jetzt mit Eluma und entdecke, wie nahtlose Integrationen deine Kundenkommunikation verbessern können.
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

function IntegrationCard({ name, description, category, image, popular = false }) {
  return (
    <Card className="hover:shadow-lg transition-shadow h-full">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <Image src={image || "/placeholder.svg"} alt={name} width={120} height={60} className="object-contain" />
          {popular && <Badge className="bg-gradient-to-r from-pink-500 to-yellow-300">Beliebt</Badge>}
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{category}</span>
          <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50">
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

