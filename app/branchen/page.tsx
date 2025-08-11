import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Recruiting Branchen – Engineering, IT, Finance & Kaufmännisch | Lacar Associate",
  description:
    "Headhunting & Recruiting zum Festpreis – Deutschlandweit aus Wiesbaden. Spezialisierung auf Engineering, IT, Finance & Kaufmännisch in Berlin, Hamburg, München, Frankfurt, Köln & NRW.",
  alternates: { canonical: "https://lacar-associate.de/branchen" },
  openGraph: {
    title: "Recruiting Branchen – Engineering, IT, Finance & Kaufmännisch | Lacar Associate",
    description:
      "Deutschlandweite Personalvermittlung aus Wiesbaden. Engineering, IT, Finance & Kaufmännisch – transparent zum Festpreis.",
    url: "https://lacar-associate.de/branchen",
    type: "website",
  },
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start text-sm md:text-base">
      <CheckCircle2 className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
      <span>{children}</span>
    </li>
  )
}

export default function BranchenPage() {
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: "https://lacar-associate.de",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Branchen",
        item: "https://lacar-associate.de/branchen",
      },
    ],
  }

  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        name: "Engineering Recruiting",
        serviceType: "Recruiting",
        areaServed: ["Deutschland", "Wiesbaden", "Berlin", "Hamburg", "München", "Frankfurt", "Köln", "NRW"],
        provider: { "@type": "Organization", name: "Lacar Associate" },
      },
      {
        "@type": "Service",
        name: "IT Recruiting",
        serviceType: "Recruiting",
        areaServed: ["Deutschland", "Wiesbaden", "Berlin", "Hamburg", "München", "Frankfurt", "Köln", "NRW"],
        provider: { "@type": "Organization", name: "Lacar Associate" },
      },
      {
        "@type": "Service",
        name: "Finance Recruiting",
        serviceType: "Recruiting",
        areaServed: ["Deutschland", "Wiesbaden", "Berlin", "Hamburg", "München", "Frankfurt", "Köln", "NRW"],
        provider: { "@type": "Organization", name: "Lacar Associate" },
      },
      {
        "@type": "Service",
        name: "Kaufmännisches Recruiting",
        serviceType: "Recruiting",
        areaServed: ["Deutschland", "Wiesbaden", "Berlin", "Hamburg", "München", "Frankfurt", "Köln", "NRW"],
        provider: { "@type": "Organization", name: "Lacar Associate" },
      },
    ],
  }

  return (
    <main className="pt-16 md:pt-20">
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Recruiting für Engineering, IT, Finance & Kaufmännisch – Deutschlandweit aus Wiesbaden
          </h1>
          <p className="text-white/90 text-base md:text-lg max-w-3xl">
            Transparente Personalvermittlung zum Festpreis – in Berlin, Hamburg, München, Frankfurt, Köln, Wiesbaden &
            NRW. Erste qualifizierte Profile in 7–14 Tagen.
          </p>
          <div className="mt-6">
            <Link
              href="/kontakt"
              className="bg-accent hover:bg-accent-light text-white font-medium py-2.5 px-4 rounded-md inline-flex"
            >
              Beratungstermin vereinbaren
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div id="engineering" className="mb-10 md:mb-14">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">Engineering Recruiting</h2>
            <p className="text-gray-700 mb-4">
              Wir besetzen Ingenieur- und Technikrollen deutschlandweit mit Fokus auf Wiesbaden und Rhein-Main.
            </p>
            <ul className="space-y-2">
              <Bullet>Maschinenbau, Elektrotechnik, Mechatronik</Bullet>
              <Bullet>Qualitätsmanagement, Produktion, Instandhaltung</Bullet>
              <Bullet>Supply Chain, Fertigungsplanung, Industrial Engineering</Bullet>
            </ul>
          </div>

          <div id="it" className="mb-10 md:mb-14">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">IT Recruiting</h2>
            <p className="text-gray-700 mb-4">
              Software, Data & Cloud – wir rekrutieren für Startups, Mittelstand und Konzerne.
            </p>
            <ul className="space-y-2">
              <Bullet>Softwareentwicklung (Frontend, Backend, Fullstack)</Bullet>
              <Bullet>DevOps, Cloud, SRE & IT-Security</Bullet>
              <Bullet>Data Engineering, BI & Analytics</Bullet>
            </ul>
          </div>

          <div id="finance" className="mb-10 md:mb-14">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">Finance Recruiting</h2>
            <p className="text-gray-700 mb-4">
              Für moderne Finance-Organisationen – in Berlin, Hamburg, München, Frankfurt, Köln & NRW.
            </p>
            <ul className="space-y-2">
              <Bullet>Controlling & FP&amp;A</Bullet>
              <Bullet>Rechnungswesen, Bilanzbuchhaltung &amp; Reporting</Bullet>
              <Bullet>Internal Audit, Tax &amp; Treasury</Bullet>
            </ul>
          </div>

          <div id="kaufmaennisch" className="mb-10 md:mb-14">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">Kaufmännisches Recruiting</h2>
            <p className="text-gray-700 mb-4">
              Kaufmännische Rollen mit Fokus auf Vertrieb, Einkauf, HR und Backoffice – bundesweit.
            </p>
            <ul className="space-y-2">
              <Bullet>Sales (Innen- &amp; Außendienst) &amp; Customer Service</Bullet>
              <Bullet>Einkauf, Disposition &amp; Administration</Bullet>
              <Bullet>HR, Assistenz &amp; Office Management</Bullet>
            </ul>
          </div>

          <div className="text-center">
            <Link
              href="/kontakt"
              className="bg-accent hover:bg-accent-light text-white font-medium py-2.5 px-5 rounded-md inline-flex"
            >
              Jetzt unverbindlich Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
    </main>
  )
}
