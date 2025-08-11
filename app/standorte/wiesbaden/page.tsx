import Link from "next/link"

export const metadata = {
  title: "Headhunter Wiesbaden – Recruiting zum Festpreis | Lacar Associate",
  description:
    "Headhunting & Recruiting aus Wiesbaden – deutschlandweit für Engineering, IT, Finance & Kaufmännisch. Fixpreis 9.999 € netto.",
  alternates: { canonical: "https://lacar-associate.de/standorte/wiesbaden" },
  openGraph: {
    title: "Headhunter Wiesbaden – Recruiting zum Festpreis | Lacar Associate",
    description:
      "Personalvermittlung aus Wiesbaden für ganz Deutschland – Engineering, IT, Finance & Kaufmännisch zum Fixpreis.",
    url: "https://lacar-associate.de/standorte/wiesbaden",
    type: "website",
  },
}

export default function WiesbadenPage() {
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://lacar-associate.de" },
      { "@type": "ListItem", position: 2, name: "Standorte", item: "https://lacar-associate.de/standorte" },
      { "@type": "ListItem", position: 3, name: "Wiesbaden", item: "https://lacar-associate.de/standorte/wiesbaden" },
    ],
  }

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Lacar Associate",
    url: "https://lacar-associate.de/standorte/wiesbaden",
    telephone: "+49 176 60772556",
    image: "https://lacar-associate.de/logo-lacar-new.png",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Am Heiligenhaus 9",
      addressLocality: "Wiesbaden",
      postalCode: "65207",
      addressCountry: "DE",
    },
    areaServed: ["Wiesbaden", "Rhein-Main", "Deutschland"],
    sameAs: ["https://www.linkedin.com/company/42169392/", "https://www.instagram.com/lacar.associate/"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    knowsAbout: ["Engineering Recruiting", "IT Recruiting", "Finance Recruiting", "Kaufmännisches Recruiting"],
  }

  const services = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        name: "Engineering Recruiting",
        serviceType: "Recruiting",
        areaServed: ["Wiesbaden", "Rhein-Main", "Deutschland"],
      },
      {
        "@type": "Service",
        name: "IT Recruiting",
        serviceType: "Recruiting",
        areaServed: ["Wiesbaden", "Rhein-Main", "Deutschland"],
      },
      {
        "@type": "Service",
        name: "Finance Recruiting",
        serviceType: "Recruiting",
        areaServed: ["Wiesbaden", "Rhein-Main", "Deutschland"],
      },
      {
        "@type": "Service",
        name: "Kaufmännisches Recruiting",
        serviceType: "Recruiting",
        areaServed: ["Wiesbaden", "Rhein-Main", "Deutschland"],
      },
    ],
  }

  return (
    <main className="pt-16 md:pt-20">
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Headhunter in Wiesbaden – bundesweit aktiv
          </h1>
          <p className="text-white/90 text-base md:text-lg max-w-3xl">
            Recruiting & Executive Search aus Wiesbaden – für Engineering, IT, Finance & Kaufmännisch. Fixpreis 9.999 €
            netto.
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
          <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">Warum Lacar Associate?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Transparenter Festpreis – keine Provision, keine Überraschungen</li>
            <li>Erste qualifizierte Profile innerhalb von 7–14 Tagen</li>
            <li>Stark in Wiesbaden & Rhein-Main, aktiv in ganz Deutschland</li>
          </ul>

          <div className="mt-8">
            <Link href="/branchen" className="text-accent hover:text-accent-light font-medium">
              Zu unseren Branchen
            </Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }} />
    </main>
  )
}
