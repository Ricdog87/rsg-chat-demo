import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Outplacement Services | Lacar Associate",
  description:
    "Professionelle Unterstützung für Mitarbeiter bei beruflicher Neuorientierung und Karriereplanung. Wir begleiten den Übergang in eine neue berufliche Zukunft.",
}

export default function OutplacementPage() {
  return (
    <main className="pt-20">
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Outplacement Services</h1>
            <p className="text-xl text-white/90 mb-8">
              Professionelle Unterstützung für Mitarbeiter bei beruflicher Neuorientierung und Karriereplanung. Wir
              begleiten den Übergang in eine neue berufliche Zukunft.
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
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Warum Outplacement?</h2>
              <p className="text-gray-600 mb-4">
                Trennungsprozesse sind für alle Beteiligten herausfordernd. Mit unseren Outplacement-Services
                unterstützen wir sowohl Unternehmen als auch Mitarbeiter dabei, diese Phase professionell und
                wertschätzend zu gestalten.
              </p>
              <p className="text-gray-600 mb-6">
                Für Unternehmen bieten wir eine verantwortungsvolle Lösung, um ihrer sozialen Verantwortung gerecht zu
                werden und das Arbeitgeberimage zu schützen. Für Mitarbeiter schaffen wir eine strukturierte Begleitung
                auf dem Weg in eine neue berufliche Zukunft.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Professionelle Begleitung in der Übergangsphase</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Individuelle Karriereberatung und Potenzialanalyse</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Optimierung der Bewerbungsunterlagen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Vorbereitung auf Vorstellungsgespräche</span>
                </li>
              </ul>
            </div>
            <div className="relative h-80 md:h-96">
              <Image
                src="/outplacement-image.png"
                alt="Outplacement Services - Lacar Associate"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-primary text-center">Unser Outplacement-Prozess</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Standortbestimmung</h3>
              <p className="text-gray-600">
                Wir analysieren die aktuelle Situation, identifizieren Stärken, Kompetenzen und Entwicklungspotenziale
                und definieren berufliche Ziele.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Bewerbungsoptimierung</h3>
              <p className="text-gray-600">
                Wir optimieren Lebenslauf, Anschreiben und Online-Profile und entwickeln eine individuelle
                Bewerbungsstrategie für den Arbeitsmarkt.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Interviewtraining</h3>
              <p className="text-gray-600">
                Wir bereiten auf Vorstellungsgespräche vor, trainieren Selbstpräsentation und Gehaltsverhandlungen und
                geben Feedback zur Verbesserung.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Jobsuche & Netzwerken</h3>
              <p className="text-gray-600">
                Wir unterstützen bei der aktiven Jobsuche, vermitteln Netzwerkstrategien und begleiten bis zum
                erfolgreichen Vertragsabschluss.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Interesse an unseren Outplacement-Services?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch und erfahren Sie, wie wir Ihre Mitarbeiter
            bei der beruflichen Neuorientierung unterstützen können.
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
