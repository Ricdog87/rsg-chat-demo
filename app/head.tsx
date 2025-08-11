export default function Head() {
  const siteUrl = "https://lacar-associate.de"
  const title = "Headhunting & Recruiting zum Festpreis – Deutschlandweit | Lacar Associate"
  const description =
    "Personalvermittlung & Executive Search für Unternehmen. Festpreis, transparent & schnell in Berlin, Hamburg, München, Frankfurt & ganz Deutschland."

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Lacar Associate",
    url: siteUrl,
    telephone: "+49 176 60772556",
    image: `${siteUrl}/logo-lacar-new.png`,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Am Heiligenhaus 9",
      addressLocality: "Wiesbaden",
      postalCode: "65207",
      addressCountry: "DE",
    },
    areaServed: ["Berlin", "Hamburg", "München", "Frankfurt", "Köln", "NRW", "Deutschland"],
    sameAs: [
      "https://www.linkedin.com/company/42169392/",
      "https://www.instagram.com/lacar.associate/",
      "https://lacar-elearning.com",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  }

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Headhunting Deutschland, Personalvermittlung zum Fixpreis, Executive Search, Recruiting Wiesbaden, Headhunter Berlin, Headhunter Hamburg, Headhunter München, Headhunter Frankfurt, Headhunter Köln, NRW Recruiting, Engineering Recruiting, IT Recruiting, Finance Recruiting, Kaufmännisches Recruiting, Headhunter Wiesbaden, Recruiting Deutschlandweit"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />

      <link rel="canonical" href={siteUrl} />
      <link rel="icon" href="/favicon.ico" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
    </>
  )
}
