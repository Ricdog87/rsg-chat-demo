import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Personalvermittlung zum Festpreis | Lacar Associate",
  description:
    "Professionelles Headhunting und Executive Search für Fach- und Führungskräfte zum Festpreis von 9.999 € netto. Keine versteckten Kosten, keine Überraschungen.",
}

export default function PersonalvermittlungPage() {
  return (
    <main className="pt-16 md:pt-20">
      <section className="bg-primary text-white py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Personalvermittlung zum Festpreis
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8">
              Professionelles Headhunting und Executive Search für Fach- und Führungskräfte zum Festpreis von 9.999 €
              netto. Keine versteckten Kosten, keine Überraschungen.
            </p>
            <Link
              href="https://meetings-eu1.hubspot.com/meetings/serrano/lead-kalender?uuid=656818da-bec4-434f-8209-e2b8ac089a5c"
              target="_blank"
              className="bg-accent hover:bg-accent-light text-white font-medium py-2 px-4 md:py-3 md:px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center text-sm md:text-base"
            >
              Jetzt Beratungstermin vereinbaren
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-primary">
                Warum Personalvermittlung zum Festpreis?
              </h2>
              <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                Die klassische Personalvermittlung mit Provisionen basierend auf dem Jahresgehalt ist intransparent und
                oft teuer. Unser Fixpreis-Modell bietet Ihnen volle Kostenkontrolle und Planungssicherheit.
              </p>
              <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                Mit unserem Festpreis von 9.999 € netto pro Projekt wissen Sie von Anfang an genau, welche Kosten auf
                Sie zukommen – unabhängig vom Gehalt der zu besetzenden Position.
              </p>
              <ul className="space-y-2 md:space-y-3">
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
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">
                    Erfolgsabhängige Restzahlung – nur bei erfolgreicher Besetzung
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 sm:h-72 md:h-80 lg:h-96">
              <Image
                src="/personalvermittlung-image.png"
                alt="Personalvermittlung zum Festpreis - Lacar Associate"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-primary text-center">
            Unser Personalvermittlungs-Prozess
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg md:text-xl mb-3 md:mb-4">
                1
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Bedarfsanalyse</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Wir analysieren gemeinsam mit Ihnen die Anforderungen an die zu besetzende Position und definieren das
                ideale Kandidatenprofil.
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg md:text-xl mb-3 md:mb-4">
                2
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Kandidatensuche</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Wir nutzen unsere bewährten Sourcing-Methoden und unser Netzwerk, um passende Kandidaten zu
                identifizieren und direkt anzusprechen.
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg md:text-xl mb-3 md:mb-4">
                3
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Vorauswahl</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Wir führen ausführliche Interviews mit den Kandidaten und prüfen ihre Qualifikationen, Motivation und
                kulturelle Passung.
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg md:text-xl mb-3 md:mb-4">
                4
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Vermittlung</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Wir präsentieren Ihnen die besten Kandidaten und begleiten Sie durch den gesamten Einstellungsprozess
                bis zum Vertragsabschluss.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-primary">
            Bereit für Ihre nächste Einstellung?
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8">
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch und erfahren Sie, wie wir Ihnen bei der
            Besetzung Ihrer offenen Positionen helfen können.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://meetings-eu1.hubspot.com/meetings/serrano/lead-kalender?uuid=656818da-bec4-434f-8209-e2b8ac089a5c"
              target="_blank"
              className="bg-accent hover:bg-accent-light text-white font-medium py-2 px-4 md:py-3 md:px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center text-sm md:text-base"
            >
              Beratungstermin vereinbaren
            </Link>
            <Link
              href="/#contact"
              className="bg-white border border-primary text-primary hover:bg-primary/5 font-medium py-2 px-4 md:py-3 md:px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center text-sm md:text-base"
            >
              Kontaktformular
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
        <Link
          href="/"
          className="inline-flex items-center text-primary hover:text-accent transition-colors text-sm md:text-base"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück zur Startseite
        </Link>
      </div>
    </main>
  )
}
