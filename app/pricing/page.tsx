import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, X } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Preise | Elumalab",
  description:
    "Transparente Preise für alle Unternehmen. Wähle das Paket, das am besten zu deinen Bedürfnissen passt und revolutioniere deine Kundenkommunikation.",
  keywords: "Elumalab Preise, WhatsApp Business Preise, KI-Chatbot Kosten, Messaging Plattform Kosten",
}

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:16px_16px] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">Preise</h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto animate-slide-up-delay">
            Transparente Preise für alle Unternehmen. Wähle das Paket, das am besten zu deinen Bedürfnissen passt.
          </p>
        </div>
      </header>

      {/* Pricing Plans */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-gray-600 mb-6">Ideal für kleine Unternehmen und Einzelunternehmer</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">€29</span>
                  <span className="text-gray-600">/Monat</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <PricingFeature included={true} text="1 Benutzer" />
                  <PricingFeature included={true} text="WhatsApp & Instagram Integration" />
                  <PricingFeature included={true} text="Einheitlicher Posteingang" />
                  <PricingFeature included={true} text="Basis-KI-Chatbot" />
                  <PricingFeature included={true} text="E-Mail-Support" />
                  <PricingFeature included={false} text="WhatsApp-Newsletter" />
                  <PricingFeature included={false} text="Team-Kollaboration" />
                  <PricingFeature included={false} text="Erweiterte Automatisierungen" />
                </ul>
                <Link href="/signup?plan=starter">
                  <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white group transition-all duration-300 ease-in-out">
                    <span>Jetzt starten</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

              {/* Business Plan */}
              <div className="border-2 border-pink-500 rounded-lg p-8 shadow-lg relative transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="absolute top-0 right-0 bg-pink-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg font-medium">
                  Beliebt
                </div>
                <h3 className="text-2xl font-bold mb-2">Business</h3>
                <p className="text-gray-600 mb-6">Perfekt für wachsende Teams und Unternehmen</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">€79</span>
                  <span className="text-gray-600">/Monat</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <PricingFeature included={true} text="5 Benutzer" />
                  <PricingFeature included={true} text="Alle Messaging-Kanäle" />
                  <PricingFeature included={true} text="Team-Kollaboration" />
                  <PricingFeature included={true} text="Erweiterter KI-Chatbot" />
                  <PricingFeature included={true} text="WhatsApp-Newsletter" />
                  <PricingFeature included={true} text="Erweiterte Automatisierungen" />
                  <PricingFeature included={true} text="Detaillierte Analysen" />
                  <PricingFeature included={true} text="Prioritäts-Support" />
                </ul>
                <Link href="/signup?plan=business">
                  <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white group transition-all duration-300 ease-in-out">
                    <span>Jetzt starten</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

              {/* Enterprise Plan */}
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-6">Maßgeschneiderte Lösungen für große Unternehmen</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">Individuell</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <PricingFeature included={true} text="Unbegrenzte Benutzer" />
                  <PricingFeature included={true} text="Alle Business-Features" />
                  <PricingFeature included={true} text="Dedizierter Account Manager" />
                  <PricingFeature included={true} text="Anpassbare KI-Modelle" />
                  <PricingFeature included={true} text="Anpassbare Integrationen" />
                  <PricingFeature included={true} text="SLA-Garantie" />
                  <PricingFeature included={true} text="24/7 Premium-Support" />
                  <PricingFeature included={true} text="Individuelle Schulungen" />
                </ul>
                <Link href="/contact?plan=enterprise">
                  <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white group transition-all duration-300 ease-in-out">
                    <span>Kontakt aufnehmen</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[length:20px_20px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Detaillierter Funktionsvergleich</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 text-left font-bold text-gray-900 border-b">Funktion</th>
                    <th className="p-4 text-center font-bold text-gray-900 border-b">Starter</th>
                    <th className="p-4 text-center font-bold text-pink-600 border-b">Business</th>
                    <th className="p-4 text-center font-bold text-gray-900 border-b">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <ComparisonRow feature="Benutzer" starter="1" business="5" enterprise="Unbegrenzt" />
                  <ComparisonRow
                    feature="Messaging-Kanäle"
                    starter="WhatsApp, Instagram"
                    business="Alle Kanäle"
                    enterprise="Alle Kanäle + API"
                  />
                  <ComparisonRow
                    feature="KI-Chatbot"
                    starter="Basis (50 Anfragen/Tag)"
                    business="Erweitert (500 Anfragen/Tag)"
                    enterprise="Unbegrenzt + Anpassbar"
                  />
                  <ComparisonRow
                    feature="WhatsApp-Newsletter"
                    starter={false}
                    business="500 Kontakte"
                    enterprise="Unbegrenzt"
                  />
                  <ComparisonRow feature="Team-Kollaboration" starter={false} business={true} enterprise={true} />
                  <ComparisonRow
                    feature="Automatisierungen"
                    starter="Basis (3)"
                    business="Erweitert (20)"
                    enterprise="Unbegrenzt"
                  />
                  <ComparisonRow
                    feature="Analysen & Berichte"
                    starter="Basis"
                    business="Detailliert"
                    enterprise="Erweitert + Export"
                  />
                  <ComparisonRow
                    feature="Support"
                    starter="E-Mail"
                    business="Priorität (E-Mail, Chat)"
                    enterprise="Premium (24/7)"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Häufig gestellte Fragen</h2>

            <div className="space-y-8">
              <FaqItem
                question="Gibt es eine kostenlose Testphase?"
                answer="Ja, du kannst Elumalab 14 Tage lang kostenlos testen. Keine Kreditkarte erforderlich. Nach Ablauf der Testphase kannst du dich für ein Paket entscheiden oder dein Konto wird automatisch auf die kostenlose Version herabgestuft."
              />

              <FaqItem
                question="Kann ich mein Paket jederzeit wechseln?"
                answer="Ja, du kannst jederzeit zu einem höheren Paket upgraden. Ein Downgrade ist zum Ende deiner aktuellen Abrechnungsperiode möglich. Alle Änderungen werden sofort wirksam und die Kosten anteilig berechnet."
              />

              <FaqItem
                question="Welche Zahlungsmethoden werden akzeptiert?"
                answer="Wir akzeptieren alle gängigen Kredit- und Debitkarten (Visa, Mastercard, American Express) sowie PayPal und Überweisung für jährliche Abonnements."
              />

              <FaqItem
                question="Gibt es versteckte Kosten?"
                answer="Nein, bei Elumalab gibt es keine versteckten Kosten. Alle Funktionen und Limits sind transparent in den Paketbeschreibungen aufgeführt. Bei Fragen steht dir unser Support-Team gerne zur Verfügung."
              />

              <FaqItem
                question="Wie funktioniert der KI-Chatbot?"
                answer="Unser KI-Chatbot lernt aus deinen bisherigen Kundeninteraktionen und kann häufig gestellte Fragen automatisch beantworten. Du behältst die volle Kontrolle und kannst jederzeit eingreifen. Die KI wird kontinuierlich besser, je mehr sie genutzt wird."
              />

              <FaqItem
                question="Ist Elumalab DSGVO-konform?"
                answer="Ja, Elumalab ist vollständig DSGVO-konform. Alle Daten werden sicher in Deutschland gespeichert und verarbeitet. Wir bieten umfassende Funktionen zur Einhaltung der Datenschutzbestimmungen."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:16px_16px] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Bereit, deine Kundenkommunikation zu revolutionieren?
            </h2>
            <p className="text-xl mb-10 text-white">
              Starte jetzt mit Elumalab und erlebe den Unterschied in deiner Kundenkommunikation.
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
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium transition-all duration-300 ease-in-out"
                >
                  Beratungsgespräch vereinbaren
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function PricingFeature({ included, text }: { included: boolean; text: string }) {
  return (
    <li className="flex items-start">
      {included ? (
        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
      ) : (
        <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
      )}
      <span className={included ? "text-gray-700" : "text-gray-400"}>{text}</span>
    </li>
  )
}

function ComparisonRow({
  feature,
  starter,
  business,
  enterprise,
}: { feature: string; starter: string | boolean; business: string | boolean; enterprise: string | boolean }) {
  const renderCell = (value: string | boolean) => {
    if (value === true) return <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
    if (value === false) return <X className="h-5 w-5 text-gray-400 mx-auto" />
    return value
  }

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150">
      <td className="p-4 text-gray-900 font-medium">{feature}</td>
      <td className="p-4 text-center text-gray-700">{renderCell(starter)}</td>
      <td className="p-4 text-center text-gray-700 bg-pink-50">{renderCell(business)}</td>
      <td className="p-4 text-center text-gray-700">{renderCell(enterprise)}</td>
    </tr>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-6 rounded-lg border border-gray-200">
      <h3 className="text-xl font-bold mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  )
}
