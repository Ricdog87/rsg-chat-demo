import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { CharlotteChatbot } from "@/components/charlotte-chatbot"

export const metadata: Metadata = {
  title: "Headhunting & Recruiting zum Festpreis – Deutschlandweit | Lacar Associate",
  description:
    "Personalvermittlung & Executive Search für Unternehmen. Festpreis, transparent & schnell in Berlin, Hamburg, München, Frankfurt & ganz Deutschland.",
  alternates: { canonical: "https://lacar-associate.de/schulungen" },
}

export default function SchulungenPage() {
  return (
    <main className="pt-20">
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Headhunting & Personalvermittlung – Recruiting-Schulungen bundesweit
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Praxisnahe Trainings für Berlin, Hamburg, München, Frankfurt, Köln, Wiesbaden & NRW – bessere Ergebnisse
              im Executive Search.
            </p>
            <Link
              href="/kontakt"
              className="bg-accent hover:bg-accent-light text-white font-medium py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center"
            >
              Jetzt Beratungstermin vereinbaren
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 text-primary">Warum Schulungen bei Lacar Associate?</h2>
              <p className="text-gray-600 mb-4">
                Recruiting-Schulungen mit Fokus auf Headhunting Deutschland: Berlin, Hamburg, München, Frankfurt, Köln,
                Wiesbaden & NRW.
              </p>
              <p className="text-gray-600 mb-6">
                Direkter Transfer in die Praxis – für Personalvermittlung zum Fixpreis und Executive Search auf
                Top-Niveau.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Praxisnahe Inhalte von erfahrenen Recruitern</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Fokus auf Berlin, Hamburg, München, Frankfurt, Köln & NRW</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Sofort anwendbare Techniken und Tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Nachhaltige Verbesserung Ihrer Recruiting-Ergebnisse</span>
                </li>
              </ul>
            </div>
            <div className="relative h-80 md:h-96 order-1 md:order-2">
              <Image
                src="/schulungen-image.png"
                alt="Recruiting Schulungen – Headhunting Deutschland – Training"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-primary text-center">Unsere Schulungsangebote</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Sourcing-Strategien</h3>
              <p className="text-gray-600 mb-4">
                Moderne Methoden – ideal für Berlin, Hamburg, München, Frankfurt, Köln und NRW.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                  <span>Effektive Suchstrategien</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                  <span>Boolean Search Mastery</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                  <span>X-Ray Search Techniken</span>
                </li>
              </ul>
              <Link
                href="/kontakt"
                className="text-accent hover:text-accent-light font-medium inline-flex items-center"
              >
                Mehr erfahren
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Direktansprache</h3>
              <p className="text-gray-600 mb-4">Kommunikation, die wirkt – für Standorte wie Wiesbaden, Köln & NRW.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                  <span>Personalisierte Ansprache</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                  <span>Überzeugungstechniken</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                  <span>Einwandbehandlung</span>
                </li>
              </ul>
              <Link
                href="/kontakt"
                className="text-accent hover:text-accent-light font-medium inline-flex items-center"
              >
                Mehr erfahren
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Recruiting-Prozessoptimierung</h3>
              <p className="text-gray-600 mb-4">
                Effizienz steigern – anwendbar in ganz Deutschland, von Berlin bis München.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                  <span>Prozessanalyse</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                  <span>Candidate Experience</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                  <span>Automatisierung</span>
                </li>
              </ul>
              <Link
                href="/kontakt"
                className="text-accent hover:text-accent-light font-medium inline-flex items-center"
              >
                Mehr erfahren
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Interesse an unseren Schulungen?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Wir schulen Teams in Berlin, Hamburg, München, Frankfurt, Köln, Wiesbaden & NRW – praxisnah und
            ergebnisorientiert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-accent hover:bg-accent-light text-white font-medium py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center"
            >
              Beratungstermin vereinbaren
            </Link>
            <Link
              href="/kontakt"
              className="bg-white border border-primary text-primary hover:bg-primary/5 font-medium py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <Link href="/" className="inline-flex items-center text-primary hover:text-accent transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück zur Startseite
        </Link>
      </div>
      <CharlotteChatbot />
    </main>
  )
}
