import type React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CheckCircle, ArrowRight, MessageSquare, Users, Zap, BarChart3, Globe, Lock } from "lucide-react"

export const metadata: Metadata = {
  title: "Funktionen | Elumalab WhatsApp Business Plattform",
  description:
    "Entdecken Sie alle Funktionen von Elumalab: WhatsApp Business API, gemeinsamer Posteingang, KI-Chatbot, Team-Kollaboration, Analysen und Automatisierungen.",
  keywords:
    "WhatsApp Business API, Messaging-Plattform, KI-Chatbot, Kundenkommunikation, Automatisierung, Kundenservice",
  openGraph: {
    title: "Funktionen | Elumalab WhatsApp Business Plattform",
    description:
      "Entdecken Sie alle Funktionen von Elumalab: WhatsApp Business API, gemeinsamer Posteingang, KI-Chatbot und mehr.",
    images: [{ url: "/images/elumalab-features-og.jpg", width: 1200, height: 630 }],
  },
}

export default function FunktionenPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Alle Funktionen für erfolgreiche Kundenkommunikation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Elumalab bietet Ihnen alle Tools, die Sie für eine effiziente und erfolgreiche Kundenkommunikation über
              WhatsApp und andere Messaging-Kanäle benötigen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white"
                >
                  Demo anfordern
                </Button>
              </Link>
              <Link href="/preise">
                <Button size="lg" variant="outline">
                  Preise ansehen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold mb-6">WhatsApp Business API</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nutzen Sie den beliebtesten Messaging-Kanal der Welt professionell für Ihr Unternehmen. Mit der
                offiziellen WhatsApp Business API können Sie Ihre Kunden dort erreichen, wo sie bereits aktiv sind.
              </p>
              <ul className="space-y-4 mb-8">
                <FeatureListItem>Offizielle WhatsApp Business API ohne Einschränkungen</FeatureListItem>
                <FeatureListItem>Mehrere Mitarbeiter können gleichzeitig kommunizieren</FeatureListItem>
                <FeatureListItem>Newsletter und Broadcast-Nachrichten an Ihre Kontakte</FeatureListItem>
                <FeatureListItem>Automatische Antworten und Chatbots für 24/7 Service</FeatureListItem>
                <FeatureListItem>Nahtlose Integration in Ihre bestehenden Systeme</FeatureListItem>
              </ul>
              <Link href="/funktionen/whatsapp-business">
                <Button className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500">
                  Mehr erfahren
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-orange-400/10 rounded-2xl transform translate-x-2 translate-y-2"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                <Image
                  src="/images/whatsapp-business-preview.png"
                  alt="WhatsApp Business API Integration"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-400/10 rounded-2xl transform translate-x-2 translate-y-2"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                <Image
                  src="/images/unified-inbox-preview.png"
                  alt="Gemeinsamer Posteingang für alle Messaging-Kanäle"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Gemeinsamer Posteingang</h2>
              <p className="text-lg text-gray-600 mb-6">
                Verwalten Sie alle Kundennachrichten von WhatsApp, Instagram, Facebook und mehr an einem Ort. Kein
                Wechseln zwischen verschiedenen Plattformen mehr - alles übersichtlich und effizient in einer
                Oberfläche.
              </p>
              <ul className="space-y-4 mb-8">
                <FeatureListItem>Alle Messaging-Kanäle in einer Oberfläche</FeatureListItem>
                <FeatureListItem>Vollständiger Überblick über die Kundenhistorie</FeatureListItem>
                <FeatureListItem>Schnelle Reaktionszeiten durch optimierte Workflows</FeatureListItem>
                <FeatureListItem>Einfache Zuweisung von Nachrichten an Teammitglieder</FeatureListItem>
                <FeatureListItem>Vorlagen für häufige Antworten</FeatureListItem>
              </ul>
              <Link href="/funktionen/gemeinsamer-posteingang">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-400 hover:from-blue-600 hover:to-purple-500">
                  Mehr erfahren
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold mb-6">KI-Chatbot</h2>
              <p className="text-lg text-gray-600 mb-6">
                Automatisieren Sie bis zu 80% Ihrer Kundenanfragen mit unserem intelligenten KI-Assistenten. Er lernt
                aus Ihren Daten und wird mit jeder Interaktion besser, um Ihren Kunden 24/7 zu helfen.
              </p>
              <ul className="space-y-4 mb-8">
                <FeatureListItem>Trainiert mit Ihren eigenen Daten und Inhalten</FeatureListItem>
                <FeatureListItem>Beantwortet häufige Fragen automatisch</FeatureListItem>
                <FeatureListItem>Nahtlose Übergabe an menschliche Mitarbeiter bei Bedarf</FeatureListItem>
                <FeatureListItem>Kontinuierliche Verbesserung durch maschinelles Lernen</FeatureListItem>
                <FeatureListItem>Mehrsprachige Unterstützung</FeatureListItem>
              </ul>
              <Link href="/funktionen/ki-chatbot">
                <Button className="bg-gradient-to-r from-green-500 to-teal-400 hover:from-green-600 hover:to-teal-500">
                  Mehr erfahren
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-400/10 rounded-2xl transform translate-x-2 translate-y-2"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                <Image
                  src="/images/ai-chatbot-preview.png"
                  alt="KI-Chatbot für automatisierte Kundenanfragen"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Weitere leistungsstarke Funktionen</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Entdecken Sie alle Tools, die Elumalab bietet, um Ihre Kundenkommunikation auf das nächste Level zu heben.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="h-8 w-8 text-purple-500" />}
              title="Team-Kollaboration"
              description="Arbeiten Sie nahtlos im Team zusammen, weisen Sie Nachrichten zu und behalten Sie den Überblick über alle Kundeninteraktionen."
              link="/funktionen/team-zusammenarbeit"
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8 text-blue-500" />}
              title="Detaillierte Analysen"
              description="Gewinnen Sie wertvolle Einblicke in Ihre Kundenkommunikation und optimieren Sie Ihre Prozesse kontinuierlich."
              link="/funktionen/analysen"
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-yellow-500" />}
              title="Automatisierungen"
              description="Sparen Sie Zeit mit automatisierten Workflows, Antworten und Benachrichtigungen für wiederkehrende Aufgaben."
              link="/funktionen/automatisierungen"
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8 text-green-500" />}
              title="Integrationen"
              description="Verbinden Sie Elumalab nahtlos mit Ihren bestehenden Systemen wie CRM, E-Commerce und mehr."
              link="/funktionen/integrationen"
            />
            <FeatureCard
              icon={<Lock className="h-8 w-8 text-red-500" />}
              title="Datenschutz & Sicherheit"
              description="Ihre Daten sind bei uns sicher. Wir erfüllen höchste Sicherheitsstandards und sind vollständig DSGVO-konform."
              link="/funktionen/datenschutz-sicherheit"
            />
            <FeatureCard
              icon={<MessageSquare className="h-8 w-8 text-orange-500" />}
              title="WhatsApp Newsletter"
              description="Erreichen Sie Ihre Kunden direkt über WhatsApp mit personalisierten Newslettern und Marketing-Kampagnen."
              link="/funktionen/whatsapp-newsletter"
            />
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Elumalab vs. andere Lösungen</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sehen Sie, warum führende Unternehmen sich für Elumalab entscheiden, um ihre Kundenkommunikation zu
              optimieren.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 text-left font-bold text-gray-900 border-b">Funktion</th>
                  <th className="p-4 text-center font-bold text-pink-600 border-b">Elumalab</th>
                  <th className="p-4 text-center font-bold text-gray-900 border-b">Andere Anbieter</th>
                </tr>
              </thead>
              <tbody>
                <ComparisonRow
                  feature="Offizielle WhatsApp Business API"
                  elumalab={true}
                  others="Teilweise (oft mit Einschränkungen)"
                />
                <ComparisonRow
                  feature="Gemeinsamer Posteingang für alle Kanäle"
                  elumalab={true}
                  others="Teilweise (oft nur ausgewählte Kanäle)"
                />
                <ComparisonRow
                  feature="KI-Chatbot mit eigenem Wissen trainiert"
                  elumalab={true}
                  others="Selten (meist nur Standard-Antworten)"
                />
                <ComparisonRow feature="Team-Kollaboration" elumalab={true} others="Teilweise (oft mit Zusatzkosten)" />
                <ComparisonRow feature="Detaillierte Analysen" elumalab={true} others="Begrenzt" />
                <ComparisonRow feature="Automatisierungen & Workflows" elumalab={true} others="Begrenzt" />
                <ComparisonRow feature="WhatsApp Newsletter" elumalab={true} others="Selten" />
                <ComparisonRow feature="DSGVO-Konformität" elumalab={true} others="Nicht immer" />
                <ComparisonRow feature="Deutschsprachiger Support" elumalab={true} others="Selten" />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-orange-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit, Ihre Kundenkommunikation zu revolutionieren?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entdecken Sie, wie Elumalab Ihrem Unternehmen helfen kann, effizienter zu kommunizieren und mehr Kunden zu
            gewinnen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button
                size="lg"
                className="bg-white text-pink-600 hover:bg-gray-100 font-medium px-8 py-6 h-auto text-lg"
              >
                Demo anfordern
              </Button>
            </Link>
            <Link href="/preise">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-medium px-8 py-6 h-auto text-lg"
              >
                Preise ansehen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full flex flex-col">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <Link href={link} className="text-pink-600 font-medium hover:text-pink-700 inline-flex items-center mt-2">
        Mehr erfahren
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  )
}

function FeatureListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start">
      <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
      <span>{children}</span>
    </li>
  )
}

function ComparisonRow({ feature, elumalab, others }: { feature: string; elumalab: boolean | string; others: string }) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150">
      <td className="p-4 text-gray-900 font-medium">{feature}</td>
      <td className="p-4 text-center text-gray-700">
        {typeof elumalab === "boolean" ? (
          elumalab ? (
            <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
          ) : (
            <span className="text-gray-400">—</span>
          )
        ) : (
          elumalab
        )}
      </td>
      <td className="p-4 text-center text-gray-700">{others}</td>
    </tr>
  )
}
