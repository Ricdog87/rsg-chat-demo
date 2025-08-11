export default function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <h2 className="section-title">Häufige Fragen rund um Headhunting & Recruiting (FAQ)</h2>
        <dl className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8 space-y-4">
          <div>
            <dt className="font-semibold text-primary">Wie schnell erhalten wir erste Bewerber?</dt>
            <dd>Meist innerhalb von 7-14 Tagen – deutschlandweit in Berlin, Hamburg, München, Frankfurt, Köln und NRW.</dd>
          </div>
          <div>
            <dt className="font-semibold text-primary">Für welche Regionen rekrutiert Lacar Associate?</dt>
            <dd>Bundesweit in Städten wie Berlin, Hamburg, München, Frankfurt, Köln, Wiesbaden und ganz Nordrhein-Westfalen (NRW).</dd>
          </div>
          <div>
            <dt className="font-semibold text-primary">Was kostet eine Personalvermittlung?</dt>
            <dd>9.999 € netto pro Projekt – garantiert ohne Erfolgsprovision oder versteckte Kosten.</dd>
          </div>
        </dl>

        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Wie schnell erhalten wir erste Bewerber?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Meist innerhalb von 7-14 Tagen – deutschlandweit.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Für welche Regionen rekrutiert Lacar Associate?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Bundesweit in Städten wie Berlin, Hamburg, München, Frankfurt, Köln und mehr.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Was kostet eine Personalvermittlung?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "9.999 € netto pro Projekt – garantiert ohne Erfolgsprovision oder versteckte Kosten.",
                  },
                },
              ],
            }),
          }}
        />
      </div>
    </section>
  )
}
