import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { CharlotteChatbot } from "@/components/charlotte-chatbot"

export const metadata: Metadata = {
  title: "Headhunting & Recruiting zum Festpreis – Deutschlandweit | Lacar Associate",
  description:
    "Personalvermittlung & Executive Search für Unternehmen. Festpreis, transparent & schnell in Berlin, Hamburg, München, Frankfurt & ganz Deutschland.",
  alternates: { canonical: "https://lacar-associate.de/outplacement" },
}

export default function OutplacementPage() {
  return (
    <main className="pt-20">
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Outplacement Services – deutschlandweit</h1>
            <p className="text-xl text-white/90 mb-8">
              Professionelle Unterstützung in Berlin, Hamburg, München, Frankfurt, Köln, Wiesbaden & NRW.
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
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Warum Outplacement?</h2>
              <p className="text-gray-600 mb-4">
                Unterstützung für Unternehmen und Mitarbeitende – regional stark in NRW und bundesweit in allen
                Großstädten.
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
                alt="Outplacement – Karriereberatung – bundesweit in Deutschland"
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
              <p className="text-gray-600">Ziele und Stärken definieren – lokal (z. B. NRW) & bundesweit relevant.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Bewerbungsoptimierung</h3>
              <p className="text-gray-600">
                Unterlagen & Online-Profile für Berlin, Hamburg, München & mehr optimieren.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Interviewtraining</h3>
              <p className="text-gray-600">Selbstpräsentation & Verhandlung für deutsche Top-Standorte trainieren.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Jobsuche & Netzwerken</h3>
              <p className="text-gray-600">Aktive Suche – Frankfurt, Köln, Wiesbaden & deutschlandweit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Outplacement in Berlin, Hamburg, München, Frankfurt, Köln, Wiesbaden & NRW
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Wir begleiten Sie professionell in die nächste Rolle – deutschlandweit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-accent hover:bg-accent-light text-white font-medium py-3 px-6 rounded-md"
            >
              Beratungstermin vereinbaren
            </Link>
            <Link
              href="/personalvermittlung"
              className="bg-white border border-primary text-primary hover:bg-primary/5 font-medium py-3 px-6 rounded-md"
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
      <CharlotteChatbot />
    </main>
  )
}
