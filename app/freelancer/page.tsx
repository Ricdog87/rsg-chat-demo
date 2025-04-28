import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Freelancer-Recruiting | Lacar Associate",
  description:
    "Schnelle Vermittlung von qualifizierten Freelancern und Interim Managern für Ihre Projekte. Flexible Lösungen für temporäre Personalbedarfe.",
}

export default function FreelancerPage() {
  return (
    <main className="pt-20">
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Freelancer-Recruiting</h1>
            <p className="text-xl text-white/90 mb-8">
              Schnelle Vermittlung von qualifizierten Freelancern und Interim Managern für Ihre Projekte. Flexible
              Lösungen für temporäre Personalbedarfe.
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
              <h2 className="text-3xl font-bold mb-6 text-primary">Warum Freelancer-Recruiting?</h2>
              <p className="text-gray-600 mb-4">
                In der heutigen dynamischen Arbeitswelt sind Flexibilität und schnelle Reaktionsfähigkeit entscheidend.
                Unser Freelancer-Recruiting bietet Ihnen Zugang zu hochqualifizierten Spezialisten für zeitlich
                begrenzte Projekte oder zur Überbrückung von Personalengpässen.
              </p>
              <p className="text-gray-600 mb-6">
                Wir verfügen über ein umfangreiches Netzwerk an erfahrenen Freelancern und Interim Managern aus
                verschiedenen Branchen und Fachbereichen, die kurzfristig verfügbar sind und sofort produktiv in Ihrem
                Unternehmen mitarbeiten können.
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
                  <span>Kosteneffizienz durch bedarfsgerechten Einsatz</span>
                </li>
              </ul>
            </div>
            <div className="relative h-80 md:h-96 order-1 md:order-2">
              <Image
                src="/freelancer-image.png"
                alt="Freelancer-Recruiting - Lacar Associate"
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
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">IT & Entwicklung</h3>
              <p className="text-gray-600 mb-4">
                Spezialisierte IT-Freelancer für Entwicklungsprojekte, Systemimplementierungen oder digitale
                Transformationen.
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
              <h3 className="text-xl font-bold mb-3">Management & Beratung</h3>
              <p className="text-gray-600 mb-4">
                Erfahrene Interim Manager und Berater für strategische Projekte, Restrukturierungen oder
                Wachstumsphasen.
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
              <h3 className="text-xl font-bold mb-3">Marketing & Kreation</h3>
              <p className="text-gray-600 mb-4">
                Kreative Freelancer für Marketingkampagnen, Content-Erstellung oder Designprojekte.
              </p>
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
          <h2 className="text-3xl font-bold mb-6 text-primary">Benötigen Sie kurzfristig Spezialisten?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch und erfahren Sie, wie wir Ihnen mit
            qualifizierten Freelancern bei Ihren Projekten helfen können.
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
