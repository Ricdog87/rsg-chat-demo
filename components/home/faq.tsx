"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export function FAQ() {
  const faqs = [
    {
      question: "Was ist Elumalab?",
      answer:
        "Elumalab ist eine All-in-One-Kundenkommunikationsplattform, die Unternehmen dabei hilft, mit ihren Kunden über WhatsApp Business, Instagram, Facebook und andere Kanäle in Kontakt zu treten. Unsere Plattform umfasst Funktionen wie einen einheitlichen Posteingang, KI-Chatbot, Team-Kollaborationstools und Automatisierungsfunktionen.",
    },
    {
      question: "Wie funktioniert die WhatsApp Business Integration?",
      answer:
        "Elumalab verbindet sich mit der offiziellen WhatsApp Business API, sodass Sie über Ihre Geschäftsnummer Nachrichten senden und empfangen können. Mehrere Teammitglieder können dieselbe Nummer nutzen, und Sie können automatisierte Antworten, Chatbots und Broadcast-Nachrichten an Kundensegmente einrichten.",
    },
    {
      question: "Benötige ich ein WhatsApp Business-Konto, um Elumalab zu nutzen?",
      answer:
        "Ja, Sie benötigen ein WhatsApp Business-Konto, um unsere WhatsApp-Integration zu nutzen. Wir können Ihnen bei der Einrichtung und Verifizierung Ihres WhatsApp Business-Kontos im Rahmen unseres Onboarding-Prozesses helfen.",
    },
    {
      question: "Können mehrere Teammitglieder dieselbe WhatsApp-Nummer verwenden?",
      answer:
        "Ja! Mit Elumalab können mehrere Teammitglieder gleichzeitig dieselbe WhatsApp Business-Nummer nutzen. Unsere Plattform umfasst Team-Kollaborationsfunktionen wie interne Notizen, Gesprächszuweisungen und Aktivitätsprotokolle.",
    },
    {
      question: "Wie funktioniert der KI-Chatbot?",
      answer:
        "Unser KI-Chatbot verwendet fortschrittliche natürliche Sprachverarbeitung, um Kundenanfragen automatisch zu verstehen und zu beantworten. Sie können ihn mit Ihren FAQs, Produktinformationen und Unternehmensrichtlinien trainieren. Der Chatbot kann Routineanfragen rund um die Uhr bearbeiten und bei Bedarf nahtlos an menschliche Mitarbeiter übergeben.",
    },
    {
      question: "Gibt es eine kostenlose Testphase?",
      answer:
        "Ja, wir bieten eine 14-tägige kostenlose Testphase für alle unsere Pläne an. Keine Kreditkarte erforderlich, um Ihre Testphase zu starten. Sie haben während der Testphase Zugriff auf alle Funktionen, die in Ihrem ausgewählten Plan enthalten sind.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Häufig gestellte Fragen</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Finden Sie Antworten auf häufige Fragen zu Elumalab und unseren Dienstleistungen.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full text-left p-4 rounded-lg flex justify-between items-center ${
                  openIndex === index
                    ? "bg-gradient-to-r from-pink-50 to-orange-50 text-gray-900"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                }`}
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white border border-gray-100 rounded-b-lg mt-1">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Noch Fragen?</p>
          <a href="/kontakt" className="text-pink-600 font-medium hover:text-pink-700 inline-flex items-center">
            Kontaktieren Sie unser Support-Team
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
