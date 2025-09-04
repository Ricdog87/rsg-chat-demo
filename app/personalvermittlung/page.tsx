import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { CharlotteChatbot } from "@/components/charlotte-chatbot"

export const metadata: Metadata = {
  title: "Headhunting & Recruiting zum Festpreis – Deutschlandweit | Lacar Associate",
  description:
    "Personalvermittlung & Executive Search für Unternehmen. Festpreis, transparent & schnell in Berlin, Hamburg, München, Frankfurt & ganz Deutschland.",
  alternates: { canonical: "https://lacar-associate.de/personalvermittlung" },
}

export default function PersonalvermittlungPage() {
  return (
    <main className="pt-16 md:pt-20">
      <section className="bg-primary text-white py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Headhunting & Personalvermittlung zum Festpreis – Bundesweit
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8">
              Executive Search in Berlin, Hamburg, München, Frankfurt, Köln, Wiesbaden & NRW – 9.999 € Fixpreis, keine
              versteckten Kosten.
            </p>
            <Link
              href="/kontakt"
              className="bg-accent hover:bg-accent-light text-white font-medium py-2 px-4 md:py-3 md:px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center text-sm md:text-base"
            >
              Jetzt Beratungstermin buchen
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-primary">
                Personalvermittlung zum Fixpreis in ganz Deutschland
              </h2>
              <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                Headhunting Deutschland – wir besetzen Fach- und Führungspositionen in Berlin, Hamburg, München,
                Frankfurt, Köln, Wiesbaden & NRW mit einem transparenten Fixpreis.
              </p>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">Transparente Kosten ohne Erfolgsprovision</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">Executive Search & Direktansprache bundesweit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">Schnelle Ergebnisse: erste Profile in 7–14 Tagen</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 sm:h-72 md:h-80 lg:h-96">
              <Image
                src="/personalvermittlung-image.png"
                alt="Personalvermittlung zum Fixpreis – Headhunting Deutschland – Executive Search"
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
                Anforderungen, Standort (z. B. Berlin, Hamburg, München, Frankfurt) und Idealprofil definieren.
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg md:text-xl mb-3 md:mb-4">
                2
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Kandidatensuche</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Direktansprache und Netzwerk – stark in NRW, Köln & Wiesbaden, deutschlandweit skalierbar.
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg md:text-xl mb-3 md:mb-4">
                3
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Vorauswahl</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Qualitative Interviews, Skill-Checks & Cultural Fit – Executive Search Fokus.
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg md:text-xl mb-3 md:mb-4">
                4
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Vermittlung</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Top-Profile präsentieren und durch den gesamten Prozess begleiten – zum Fixpreis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-primary">
            Recruiting in Berlin, Hamburg, München, Frankfurt, Köln, Wiesbaden & NRW
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8">
            Profitieren Sie von bundesweiter Sichtbarkeit und lokaler Expertise – Headhunting Deutschland zum Festpreis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-accent hover:bg-accent-light text-white font-medium py-2 px-4 md:py-3 md:px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center text-sm md:text-base"
            >
              Jetzt Beratungstermin buchen
            </Link>
            <Link
              href="/personalvermittlung"
              className="bg-white border border-primary text-primary hover:bg-primary/5 font-medium py-2 px-4 md:py-3 md:px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center text-sm md:text-base"
            >
              Mehr zu Personalvermittlung
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
      <CharlotteChatbot />
    </main>
  )
}
