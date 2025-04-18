import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "€29",
      description: "Perfekt für kleine Unternehmen, die gerade mit Messaging beginnen.",
      features: [
        "1 WhatsApp Business Nummer",
        "2 Teammitglieder",
        "500 Konversationen/Monat",
        "Basis-Chatbot",
        "E-Mail-Support",
        "Mobile App Zugang",
      ],
      cta: "Kostenlos testen",
      popular: false,
    },
    {
      name: "Professional",
      price: "€79",
      description: "Für wachsende Unternehmen, die fortschrittlichere Funktionen und Kapazitäten benötigen.",
      features: [
        "1 WhatsApp Business Nummer",
        "5 Teammitglieder",
        "2.000 Konversationen/Monat",
        "Fortschrittlicher KI-Chatbot",
        "WhatsApp Newsletter",
        "Analysen & Berichte",
        "Prioritäts-Support",
        "Alle Integrationen",
      ],
      cta: "Kostenlos testen",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Individuell",
      description: "Für große Organisationen mit komplexen Anforderungen und hohem Volumen.",
      features: [
        "Mehrere WhatsApp Nummern",
        "Unbegrenzte Teammitglieder",
        "Unbegrenzte Konversationen",
        "Individuelle KI-Lösungen",
        "Erweiterte Analysen",
        "API-Zugang",
        "Dedizierter Account Manager",
        "Individuelle Integrationen",
        "SLA-Garantie",
      ],
      cta: "Vertrieb kontaktieren",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Einfache, transparente Preise</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Wählen Sie den Plan, der am besten zu Ihrem Unternehmen passt. Alle Pläne beinhalten eine 14-tägige
            kostenlose Testphase.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border ${
                plan.popular ? "border-pink-500" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                  Beliebteste Wahl
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.price !== "Individuell" && <span className="text-gray-500">/Monat</span>}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white"
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </div>
              <div className="bg-gray-50 p-6 md:p-8">
                <p className="font-medium mb-4">Enthaltene Leistungen:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Benötigen Sie eine individuelle Lösung für Ihr Unternehmen?</p>
          <Button variant="outline" className="font-medium">
            Kontaktieren Sie unser Vertriebsteam
          </Button>
        </div>
      </div>
    </section>
  )
}
