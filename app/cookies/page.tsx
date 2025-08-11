import Link from "next/link"
import OpenCookieSettings from "@/components/open-cookie-settings"

export const metadata = {
  title: "Cookie-Richtlinie | Lacar Associate",
  description:
    "Informationen zu Cookies und Tracking auf lacar-associate.de. Verwalten Sie Ihre Einwilligungen für Analyse- und Marketing-Cookies.",
  alternates: { canonical: "https://lacar-associate.de/cookies" },
}

export default function CookiesPage() {
  return (
    <main className="pt-16 md:pt-20">
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-primary">Cookie-Richtlinie</h1>
        <p className="text-gray-700 mb-6">
          Wir verwenden Cookies, um grundlegende Funktionen der Website bereitzustellen (notwendig) sowie optional
          Analyse- und Marketing-Cookies, sofern Sie zustimmen. Sie können Ihre Einstellungen jederzeit ändern.
        </p>

        <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Einwilligungen verwalten</h2>
          <p className="text-gray-600 mb-3">Öffnen Sie den Dialog, um Ihre Auswahl zu ändern oder zu widerrufen.</p>
          <OpenCookieSettings />
        </div>

        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-semibold mb-2">Cookie-Kategorien</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Notwendig: Erforderlich für grundlegende Funktionen (z. B. Seitennavigation). Diese Cookies können nicht
                deaktiviert werden.
              </li>
              <li>Analyse: Helfen uns, die Nutzung der Website zu verstehen und zu verbessern.</li>
              <li>Marketing: Dienen dazu, relevante Inhalte und Angebote anzuzeigen.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">Speicherdauer</h3>
            <p className="text-gray-700">
              Einwilligungen verfallen automatisch nach 180 Tagen, danach fragen wir erneut nach Ihrer Zustimmung.
            </p>
          </section>
        </div>

        <div className="mt-8">
          <Link href="/" className="text-primary hover:text-accent transition-colors">
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </main>
  )
}
