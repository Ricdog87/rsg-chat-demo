import Link from "next/link"
import { Wrench, Cpu, LineChart, FileText, CheckCircle2 } from "lucide-react"

export default function SectorsSection() {
  const sectors = [
    {
      icon: <Wrench className="h-7 w-7 text-accent" />,
      title: "Engineering Recruiting",
      desc: "Ingenieurwesen & Technik – Entwicklung, Produktion, Qualität, Supply Chain. Deutschlandweit aus Wiesbaden.",
      bullets: [
        "Maschinenbau, Elektrotechnik, Mechatronik",
        "Qualitätssicherung & Produktion",
        "Supply Chain & Operations",
      ],
      anchor: "engineering",
    },
    {
      icon: <Cpu className="h-7 w-7 text-accent" />,
      title: "IT Recruiting",
      desc: "Software, Data & Cloud – Fullstack, DevOps, Data, Security. Berlin, Hamburg, München, Frankfurt, Köln & NRW.",
      bullets: ["Softwareentwicklung & Architektur", "DevOps, Cloud & SRE", "Data Engineering & BI"],
      anchor: "it",
    },
    {
      icon: <LineChart className="h-7 w-7 text-accent" />,
      title: "Finance Recruiting",
      desc: "Controlling, Accounting, Audit, Tax & Treasury – vom Mittelstand bis Konzern. Bundesweit.",
      bullets: ["Controlling & FP&A", "Rechnungswesen & Accounting", "Internal Audit, Tax & Treasury"],
      anchor: "finance",
    },
    {
      icon: <FileText className="h-7 w-7 text-accent" />,
      title: "Kaufmännisches Recruiting",
      desc: "Office, Vertrieb & HR – qualifiziert, schnell und transparent zum Festpreis.",
      bullets: ["Vertriebsinnen-/Außendienst", "Einkauf & Customer Service", "HR, Assistenz & Backoffice"],
      anchor: "kaufmaennisch",
    },
  ]

  return (
    <section aria-labelledby="sectors-heading" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-8 md:mb-12">
          <h2 id="sectors-heading" className="section-title">
            Recruiting für Engineering, IT, Finance & Kaufmännisch – Deutschlandweit aus Wiesbaden
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto">
            Wir besetzen Fach- und Führungspositionen in ganz Deutschland. Fokus auf Berlin, Hamburg, München,
            Frankfurt, Köln, Wiesbaden & NRW – transparent zum Festpreis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {sectors.map((s) => (
            <div key={s.title} className="card border border-gray-200 hover:border-accent/30 transition-colors">
              <div className="flex items-start gap-3">
                <div className="mt-1">{s.icon}</div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-1">{s.title}</h3>
                  <p className="text-gray-600 mb-3">{s.desc}</p>
                  <ul className="space-y-1.5 mb-4">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/branchen#${s.anchor}`}
                      className="text-accent hover:text-accent-light font-medium text-sm"
                    >
                      Details ansehen
                    </Link>
                    <Link href="/kontakt" className="text-primary hover:text-accent font-medium text-sm">
                      Beratung anfragen
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/branchen"
            className="bg-accent hover:bg-accent-light text-white font-medium py-2.5 px-4 rounded-md transition-colors inline-flex items-center justify-center"
          >
            Alle Branchen im Überblick
          </Link>
        </div>
      </div>
    </section>
  )
}
