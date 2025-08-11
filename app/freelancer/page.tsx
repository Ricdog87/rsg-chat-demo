import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowLeft } from 'lucide-react'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Headhunting & Recruiting zum Festpreis – Deutschlandweit | Lacar Associate",
  description:
    "Personalvermittlung & Executive Search für Unternehmen. Festpreis, transparent & schnell in Berlin, Hamburg, München, Frankfurt & ganz Deutschland.",
  alternates: { canonical: "https://lacar-associate.de/freelancer" },
}

export default function FreelancerPage() {
  return (
    <main className="pt-20">
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Freelancer-Recruiting – bundesweit</h1>
            <p className="text-xl text-white/90 mb-8">
              Qualifizierte Freelancer in Berlin, Hamburg, München, Frankfurt, Köln, Wiesbaden & NRW – schnell verfügbar.
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
              <h2 className="text-3xl font-bold mb-6 text-primary">Warum Freelancer-Recruiting?</h2>
              <p className="text-gray-600 mb-4">
                Flexible Lösungen – ideal für Projekte in Berlin, Hamburg, München, Frankfurt, Köln, Wiesbaden & NRW.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Schnelle Verfügbarkeit von Spezialisten</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Flexible Einsatzmodelle und Vertragslaufzeiten</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Zugang zu Spezialwissen ohne langfristige Bindung</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Bundesweit verfügbar – auch NRW</span>
                </li>
              </ul>
            </div>
            <div className="relative h-80 md:h-96 order-1 md:order-2">
              <Image
                src="/freelancer-image.png"
                alt="Freelancer Recruiting – deutschlandweit – IT & Management"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-primary text-center">Unsere Freelancer-Bereiche</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cards remain but copy is now GEO flavored above */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">IT & Entwicklung</h3>
              <p className="text-gray-600 mb-4">
                IT-Projekte deutschlandweit – schnell besetzen in Berlin, Hamburg, München & NRW.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                  <span>Softwareentwickler</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                  <span>DevOps-Spezialisten</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                  <span>IT-Projektmanager</span>
                </li>
              </ul>
              <Link href="/kontakt" className="text-accent hover:text-accent-light font-medium inline-flex items-center">
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
              <h3 className="text-xl font-bold mb-3">Management & Beratung</h3>
              <p className="text-gray-600 mb-4">
                Interim-Expertise für Frankfurt, Köln, Wiesbaden & ganz Deutschland.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                  <span>Interim Manager</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                  <span>Unternehmensberater</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                  <span>Change Manager</span>
                </li>
              </ul>
              <Link href="/kontakt" className="text-accent hover:text-accent-light font-medium inline-flex items-center">
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
              <h3 className="text-xl font-bold mb-3">Marketing & Kreation</h3>
              <p className="text-gray-600 mb-4">Bundesweit einsatzbereit – lokal stark in NRW und Großstädten.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                  <span>Marketing-Spezialisten</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                  <span>Content Creator</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                  <span>UX/UI Designer</span>
                </li>
              </ul>
              <Link href="/kontakt" className="text-accent hover:text-accent-light font-medium inline-flex items-center">
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
          <h2 className="text-3xl font-bold mb-6 text-primary">Benötigen Sie kurzfristig Spezialisten?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Freelancer-Vermittlung für Berlin, Hamburg, München, Frankfurt, Köln, Wiesbaden & NRW – transparent, schnell
            und effizient.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-accent hover:bg-accent-light text-white font-medium py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center"
            >
              Beratungstermin vereinbaren
            </Link>
            <Link
              href="/personalvermittlung"
              className="bg-white border border-primary text-primary hover:bg-primary/5 font-medium py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center"
            >
              Mehr zu Personalvermittlung
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
