import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Schulungen & Trainings für Recruiter | Lacar Associate",
  description:
    "Praxisnahe Schulungen für Recruiter, Personalberater und HR-Teams zur Optimierung Ihrer Recruiting-Prozesse. Steigern Sie die Effizienz Ihres Recruitings.",
}

export default function SchulungenPage() {
  return (
    <main className="pt-20">
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Schulungen & Trainings für Recruiter</h1>
            <p className="text-xl text-white/90 mb-8">
              Praxisnahe Schulungen für Recruiter, Personalberater und HR-Teams zur Optimierung Ihrer
              Recruiting-Prozesse. Steigern Sie die Effizienz Ihres Recruitings.
            </p>
            <Link
              href="https://meetings-eu1.hubspot.com/meetings/serrano/lead-kalender?uuid=656818da-bec4-434f-8209-e2b8ac089a5c"
              target="_blank"
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
                Unsere Schulungen und Trainings basieren auf jahrelanger praktischer Erfahrung im Recruiting und
                Headhunting. Wir vermitteln keine theoretischen Konzepte, sondern praxiserprobte Methoden und Techniken,
                die sofort anwendbar sind.
              </p>
              <p className="text-gray-600 mb-6">
                Ob Sie Ihre internen Recruiter weiterbilden oder als Personalberater Ihre Skills verbessern möchten –
                unsere Schulungen sind auf Ihre Bedürfnisse zugeschnitten und liefern messbare Ergebnisse.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Praxisnahe Inhalte von erfahrenen Recruitern</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Individuelle Anpassung an Ihre Bedürfnisse</span>
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
                alt="Schulungen und Trainings für Recruiter - Lacar Associate"
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
                Lernen Sie moderne Methoden zur Identifikation und Ansprache von passiven Kandidaten. Von Boolean Search
                bis zu kreativen Sourcing-Techniken.
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
                href="/#contact"
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
              <p className="text-gray-600 mb-4">
                Optimieren Sie Ihre Kommunikation mit potenziellen Kandidaten. Von der ersten Kontaktaufnahme bis zum
                erfolgreichen Interview.
              </p>
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
                href="/#contact"
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
                Verbessern Sie Ihre Recruiting-Prozesse für mehr Effizienz und bessere Kandidatenerlebnisse. Von der
                Stellenausschreibung bis zum Onboarding.
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
                href="/#contact"
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
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch und erfahren Sie, wie unsere Schulungen Ihr
            Recruiting-Team auf das nächste Level bringen können.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://meetings-eu1.hubspot.com/meetings/serrano/lead-kalender?uuid=656818da-bec4-434f-8209-e2b8ac089a5c"
              target="_blank"
              className="bg-accent hover:bg-accent-light text-white font-medium py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center"
            >
              Beratungstermin vereinbaren
            </Link>
            <Link
              href="/#contact"
              className="bg-white border border-primary text-primary hover:bg-primary/5 font-medium py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center"
            >
              Kontaktformular
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
    </main>
  )
}
