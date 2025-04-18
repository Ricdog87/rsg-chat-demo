import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { PublicNavbar } from "@/components/public-navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Über uns | Elumalab WhatsApp Business Plattform",
  description:
    "Erfahren Sie mehr über Elumalab, unsere Mission und das Team hinter der innovativen KI-gestützten Kommunikationsplattform.",
  keywords: "Elumalab, Über uns, Team, Mission, WhatsApp Business Plattform, KI-Chatbot, Kundenkommunikation",
  openGraph: {
    title: "Über uns | Elumalab WhatsApp Business Plattform",
    description:
      "Erfahren Sie mehr über Elumalab, unsere Mission und das Team hinter der innovativen KI-gestützten Kommunikationsplattform.",
    images: [{ url: "/images/elumalab-about-og.jpg", width: 1200, height: 630 }],
  },
}

export default function AboutPage() {
  return (
    <>
      <PublicNavbar />

      {/* Header */}
      <header className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:16px_16px] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">Über uns</h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto animate-slide-up-delay">
            Erfahren Sie mehr über Elumalab, unsere Mission und das Team hinter der innovativen KI-gestützten
            Kommunikationsplattform.
          </p>
        </div>
      </header>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Unsere Geschichte</h2>
            <div className="prose max-w-none text-lg">
              <p className="mb-4">
                Elumalab entstand aus einer einfachen Beobachtung: Unternehmen verbringen zu viel Zeit damit, zwischen
                verschiedenen Kommunikationskanälen zu wechseln. Diese Ineffizienz führt zu verpassten Nachrichten,
                verzögerten Antworten und letztendlich zu unzufriedenen Kunden.
              </p>
              <p className="mb-4">
                Unsere Gründer, die selbst aus dem Mittelstand kommen, beschlossen, dieses Problem zu lösen. Sie
                entwickelten eine Plattform, die alle Kommunikationskanäle an einem Ort vereint und es Unternehmen
                ermöglicht, effizienter mit ihren Kunden zu kommunizieren.
              </p>
              <p className="mb-4">
                Der Durchbruch kam mit der Integration von KI-Technologie: Wir erkannten, dass bis zu 80% der
                Kundenanfragen wiederkehrende Fragen sind, die automatisiert beantwortet werden können. So entstand
                unser KI-Assistent, der heute das Herzstück von Elumalab bildet.
              </p>
              <p className="mb-4">
                Heute nutzen Hunderte von Unternehmen in ganz Deutschland Elumalab, um ihre Kundenkommunikation zu
                revolutionieren. Unser Team wächst stetig, aber unsere Mission bleibt dieselbe: Unternehmen dabei zu
                helfen, bessere Beziehungen zu ihren Kunden aufzubauen – effizienter, persönlicher und mit Unterstützung
                modernster KI-Technologie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[length:20px_20px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Unsere Mission</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Wir glauben daran, dass jede Interaktion zählt. Unsere Mission ist es, Unternehmen dabei zu helfen,
              bedeutungsvolle Beziehungen zu ihren Kunden aufzubauen – durch innovative KI-Technologie und eine
              Kommunikationsplattform, die so intuitiv wie leistungsstark ist.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Effizienz steigern</h3>
                <p className="text-gray-600">
                  Wir helfen Unternehmen, ihre Kommunikationsprozesse zu optimieren und wertvolle Zeit zu sparen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">KI demokratisieren</h3>
                <p className="text-gray-600">
                  Wir machen fortschrittliche KI-Technologie für Unternehmen jeder Größe zugänglich und nutzbar.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Kundenerlebnis verbessern</h3>
                <p className="text-gray-600">
                  Wir sorgen für schnellere, persönlichere und relevantere Kundenkommunikation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Unser Team</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center transform transition-all duration-300 hover:scale-105">
                <div className="mb-4 mx-auto w-40 h-40 relative rounded-full overflow-hidden">
                  <Image src="/images/constance.png" alt="Constanze Renz" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">Constanze Renz</h3>
                <p className="text-gray-600 mb-2">Co-Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  Mit über 10 Jahren Erfahrung im Bereich Kundenkommunikation und digitales Marketing leitet Constanze
                  die strategische Ausrichtung von Elumalab.
                </p>
              </div>
              <div className="text-center transform transition-all duration-300 hover:scale-105">
                <div className="mb-4 mx-auto w-40 h-40 relative rounded-full overflow-hidden">
                  <Image src="/images/ricardo.png" alt="Ricardo Serrano" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">Ricardo Serrano</h3>
                <p className="text-gray-600 mb-2">Co-Founder & CTO</p>
                <p className="text-gray-600 text-sm">
                  Als erfahrener KI-Spezialist und Produktmanager sorgt Ricardo für die technische Umsetzung und
                  kontinuierliche Weiterentwicklung der Elumalab-Plattform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[length:20px_20px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Unsere Werte</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center transform transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Kundenfokus</h3>
                <p className="text-gray-600">
                  Wir stellen die Bedürfnisse unserer Kunden in den Mittelpunkt all unserer Entscheidungen.
                </p>
              </div>
              <div className="text-center transform transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Wir streben danach, innovative Lösungen zu entwickeln, die echte Probleme lösen.
                </p>
              </div>
              <div className="text-center transform transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Transparenz</h3>
                <p className="text-gray-600">
                  Wir kommunizieren offen und ehrlich mit unseren Kunden, Partnern und Mitarbeitern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:16px_16px] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Werde Teil der Elumalab-Community</h2>
            <p className="text-xl mb-10 text-white">
              Schließe dich Hunderten von Unternehmen an, die bereits mit Elumalab ihre Kundenkommunikation
              revolutioniert haben.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-6 text-lg font-medium group transition-all duration-300 ease-in-out"
                >
                  <span>Kostenlos starten</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/kontakt">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium transition-all duration-300 ease-in-out"
                >
                  Kontakt aufnehmen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
