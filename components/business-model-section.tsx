"use client"

import Link from "next/link"
import { CheckCircle, Clock, Euro, ShieldCheck } from "lucide-react"
import { useInView } from "react-intersection-observer"

const BusinessModelSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="model" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="section-title">Unser Fixpreis-Modell für Personalvermittlung</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Transparente Kosten, klare Prozesse und ein faires Preismodell – so revolutionieren wir bei Lacar Associate
            die Personalvermittlung. Keine Provisionen, keine versteckten Kosten.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Price Model Card */}
          <div
            className={`card transform transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
              <Euro className="h-7 w-7 md:h-8 md:w-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-center mb-3 md:mb-4">Projektpreis</h3>
            <p className="text-3xl md:text-4xl font-bold text-center text-accent mb-2">9.999 €</p>
            <p className="text-center text-gray-500 mb-4">netto pro Projekt</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base">Transparente Kosten ohne versteckte Gebühren</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base">Keine Erfolgsprovision auf das Jahresgehalt</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base">Planbare Kosten für Ihr Recruiting-Budget</span>
              </li>
            </ul>
          </div>

          {/* Payment Model Card */}
          <div
            className={`card transform transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
              <ShieldCheck className="h-7 w-7 md:h-8 md:w-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-center mb-3 md:mb-4">Zahlungsmodell</h3>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <p className="font-semibold text-sm md:text-base">Anzahlung</p>
                <p className="text-xl md:text-2xl font-bold text-primary">2.500 €</p>
                <p className="text-xs md:text-sm text-gray-500">zu Projektbeginn</p>
              </div>
              <div>
                <p className="font-semibold text-sm md:text-base">Restzahlung</p>
                <p className="text-xl md:text-2xl font-bold text-primary">7.499 €</p>
                <p className="text-xs md:text-sm text-gray-500">bei erfolgreicher Besetzung</p>
              </div>
            </div>
          </div>

          {/* Benefits Card */}
          <div
            className={`card transform transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
              <Clock className="h-7 w-7 md:h-8 md:w-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-center mb-3 md:mb-4">Ihre Vorteile</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base">
                  <strong>Schnelligkeit:</strong> Erste Kandidaten innerhalb von 7-14 Tagen
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base">
                  <strong>Transparenz:</strong> Klare Kommunikation und regelmäßige Updates
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base">
                  <strong>Kein Risiko:</strong> Erfolgsabhängige Restzahlung
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base">
                  <strong>Expertise:</strong> Spezialisierte Headhunter mit Branchenerfahrung
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base">
                  <strong>Qualität:</strong> Sorgfältige Vorauswahl aller Kandidaten
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <Link
            href="https://meetings-eu1.hubspot.com/meetings/serrano/lead-kalender?uuid=656818da-bec4-434f-8209-e2b8ac089a5c"
            target="_blank"
            className="bg-accent hover:bg-accent-light text-white font-medium py-2 px-4 md:py-3 md:px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center text-sm md:text-base"
          >
            Unverbindliches Beratungsgespräch vereinbaren
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BusinessModelSection
