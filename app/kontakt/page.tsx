import type { Metadata } from "next"
import ContactSection from "@/components/contact-section"
import { CharlotteChatbot } from "@/components/charlotte-chatbot"

export const metadata: Metadata = {
  title: "Headhunting & Recruiting zum Festpreis – Deutschlandweit | Lacar Associate",
  description:
    "Kontakt für Headhunting & Recruiting zum Festpreis – Deutschlandweit aus Wiesbaden. Engineering, IT, Finance & Kaufmännisch in Berlin, Hamburg, München, Frankfurt, Köln & NRW.",
  alternates: { canonical: "https://lacar-associate.de/kontakt" },
}

export default function KontaktPage() {
  return (
    <main className="pt-16 md:pt-20">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
          Headhunting & Recruiting – Deutschlandweit aus Wiesbaden
        </h1>
        <p className="text-gray-700 mb-6">
          Wir rekrutieren für Engineering, IT, Finance & Kaufmännisch – in Berlin, Hamburg, München, Frankfurt, Köln,
          Wiesbaden & NRW. Transparent zum Festpreis.
        </p>
      </div>
      <ContactSection />
      <CharlotteChatbot />
    </main>
  )
}
