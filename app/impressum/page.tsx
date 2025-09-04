import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Headhunting & Recruiting zum Festpreis – Deutschlandweit | Lacar Associate",
  description:
    "Personalvermittlung & Executive Search für Unternehmen. Festpreis, transparent & schnell in Berlin, Hamburg, München, Frankfurt & ganz Deutschland.",
  alternates: { canonical: "https://lacar-associate.de/impressum" },
}

export default function ImpressumPage() {
  return (
    <main className="pt-16 md:pt-20">
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-primary">Impressum</h1>

        <div className="space-y-6 md:space-y-8">
          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="mb-1 md:mb-2 text-sm md:text-base">Lacar Associate Employee UG (Haftungsbeschränkt)</p>
            <p className="mb-1 md:mb-2 text-sm md:text-base">Am Heiligenhaus 9</p>
            <p className="mb-1 md:mb-2 text-sm md:text-base">65207 Wiesbaden</p>
            <p className="mb-1 md:mb-2 text-sm md:text-base">Handelsregister: 31695</p>
            <p className="mb-1 md:mb-2 text-sm md:text-base">Registergericht: Wiesbaden</p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Vertreten durch</h2>
            <p className="mb-1 md:mb-2 text-sm md:text-base">Ricardo Serrano</p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Kontakt</h2>
            <p className="mb-1 md:mb-2 text-sm md:text-base">Telefon: +49 176 60772556</p>
            <p className="mb-1 md:mb-2 text-sm md:text-base">E-Mail: info@lacar-associate.de</p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Umsatzsteuer-ID</h2>
            <p className="mb-1 md:mb-2 text-sm md:text-base">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            </p>
            <p className="mb-1 md:mb-2 text-sm md:text-base">DE330106020</p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Angaben zur Berufshaftpflichtversicherung</h2>
            <p className="mb-1 md:mb-2 text-sm md:text-base">Name und Sitz des Versicherers:</p>
            <p className="mb-1 md:mb-2 text-sm md:text-base">Hiscox SA Niederlassung für Deutschland</p>
            <p className="mb-1 md:mb-2 text-sm md:text-base">Arnulfstraße 31</p>
            <p className="mb-1 md:mb-2 text-sm md:text-base">80636 München</p>
            <p className="mb-4 md:mb-5 text-sm md:text-base">
              Geltungsraum der Versicherung: Deutschland / USA / Kanada
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
              Verbraucherstreitbeilegung/Universalschlichtungsstelle
            </h2>
            <p className="text-sm md:text-base">
              Wir nehmen an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil. Zuständig ist
              die Universalschlichtungsstelle des Zentrums für Schlichtung e.V., Straßburger Straße 8, 77694 Kehl am
              Rhein (
              <a
                href="https://www.verbraucher-schlichter.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://www.verbraucher-schlichter.de
              </a>
              ).
            </p>
          </section>

          <section>
            <p className="text-sm text-gray-500 mt-8">
              Quelle:{" "}
              <a
                href="https://www.e-recht24.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://www.e-recht24.de
              </a>
            </p>
          </section>
        </div>

        <div className="mt-8 md:mt-12">
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:text-accent transition-colors text-sm md:text-base"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </main>
  )
}
