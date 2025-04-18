import { CheckCircle } from "lucide-react"

export function Features() {
  const features = [
    {
      title: "WhatsApp Business API",
      description:
        "Verbinden Sie sich mit Kunden auf ihrer bevorzugten Messaging-Plattform. Senden Sie Benachrichtigungen, Newsletter und bieten Sie Kundensupport an.",
      benefits: [
        "Offizielle WhatsApp Business API",
        "Mehrere Teammitglieder auf einer Nummer",
        "Automatisierte Antworten & Chatbots",
        "Broadcast-Nachrichten an Kundensegmente",
      ],
      image: "/images/feature-whatsapp.png",
    },
    {
      title: "Einheitlicher Posteingang",
      description:
        "Verwalten Sie alle Kundengespräche an einem Ort. Verpassen Sie keine Nachricht mehr, egal über welchen Kanal.",
      benefits: [
        "WhatsApp, Instagram, Facebook, E-Mail & mehr",
        "Team-Kollaborationstools",
        "Kundenhistorie auf einen Blick",
        "Intelligentes Routing & Zuweisung",
      ],
      image: "/images/feature-inbox.png",
    },
    {
      title: "KI-gestützte Automatisierung",
      description:
        "Sparen Sie Zeit und bieten Sie sofortige Antworten mit unserem fortschrittlichen KI-Chatbot und Automatisierungstools.",
      benefits: [
        "24/7 Kundensupport",
        "Personalisierte Antworten",
        "Nahtlose Übergabe an Mitarbeiter",
        "Kontinuierliches Lernen aus Interaktionen",
      ],
      image: "/images/feature-ai.png",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Leistungsstarke Funktionen für moderne Unternehmen</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Alles, was Sie brauchen, um stärkere Kundenbeziehungen aufzubauen und mehr Umsatz durch Messaging zu
            erzielen.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`}
            >
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{feature.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-pink-500 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full max-w-xl lg:max-w-none">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-orange-400/10 rounded-2xl transform translate-x-2 translate-y-2"></div>
                  <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                    <img src={feature.image || "/placeholder.svg"} alt={feature.title} className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
