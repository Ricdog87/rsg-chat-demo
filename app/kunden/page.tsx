import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Kunden | Elumalab",
  description: "Erfahren Sie, wie Unternehmen mit Elumalab ihre Kundenkommunikation verbessert haben",
}

export default function KundenPage() {
  return (
    <div>
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Unsere Erfolgsgeschichten</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Erfahren Sie, wie Unternehmen verschiedener Branchen mit Elumalab ihre Kundenkommunikation revolutioniert
              haben.
            </p>
          </div>

          {/* Featured Case Study */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <Image
                    src="/images/company-logo1.png"
                    alt="Mode GmbH Logo"
                    width={180}
                    height={60}
                    className="h-12 w-auto"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">65% schnellere Antwortzeiten bei Mode GmbH</h2>
                <p className="text-gray-600 mb-6">
                  Mode GmbH, ein führender Online-Modehändler, konnte mit Elumalab die Antwortzeiten im Kundenservice um
                  65% reduzieren und die Kundenzufriedenheit deutlich steigern.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="bg-pink-100 text-pink-800 text-sm font-medium px-3 py-1 rounded-full">
                    E-Commerce
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    WhatsApp Business
                  </span>
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    Kundenservice
                  </span>
                </div>
                <Link href="/fallstudien/mode-gmbh">
                  <Button className="w-full sm:w-auto">Fallstudie lesen</Button>
                </Link>
              </div>
              <div className="bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center p-8">
                <Image
                  src="/images/testimonial1.png"
                  alt="Mode GmbH Dashboard"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center p-6">
                <Image
                  src="/images/company-logo2.png"
                  alt="TechSolutions AG Logo"
                  width={160}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">TechSolutions AG</h3>
                <p className="text-gray-600 mb-4">
                  Der KI-Chatbot von Elumalab beantwortet 70% der Kundenanfragen automatisch und ermöglicht es dem
                  Support-Team, sich auf komplexere Aufgaben zu konzentrieren.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    IT-Dienstleistungen
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    KI-Chatbot
                  </span>
                </div>
                <Link href="/fallstudien/techsolutions-ag" className="text-blue-600 font-medium hover:text-blue-700">
                  Fallstudie lesen →
                </Link>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center p-6">
                <Image
                  src="/images/company-logo3.png"
                  alt="Retail Plus Logo"
                  width={160}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Retail Plus</h3>
                <p className="text-gray-600 mb-4">
                  Mit den Analysen von Elumalab konnte Retail Plus die Konversionsrate um 40% steigern und die
                  Kundenzufriedenheit verbessern.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Einzelhandel
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Analysen
                  </span>
                </div>
                <Link href="/fallstudien/retail-plus" className="text-green-600 font-medium hover:text-green-700">
                  Fallstudie lesen →
                </Link>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center p-6">
                <Image
                  src="/images/company-logo4.png"
                  alt="HealthCare Plus Logo"
                  width={160}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">HealthCare Plus</h3>
                <p className="text-gray-600 mb-4">
                  HealthCare Plus reduzierte Terminausfälle um 35% durch automatisierte WhatsApp-Erinnerungen und
                  verbesserte die Patientenkommunikation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Gesundheitswesen
                  </span>
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Automatisierung
                  </span>
                </div>
                <Link href="/fallstudien/healthcare-plus" className="text-red-600 font-medium hover:text-red-700">
                  Fallstudie lesen →
                </Link>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center p-6">
                <Image
                  src="/images/company-logo5.png"
                  alt="FinanzDirekt Logo"
                  width={160}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">FinanzDirekt</h3>
                <p className="text-gray-600 mb-4">
                  FinanzDirekt konnte die Kundenbindung um 45% steigern und die Bearbeitungszeit für Anfragen um 30%
                  reduzieren.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Finanzen
                  </span>
                  <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Kundenbindung
                  </span>
                </div>
                <Link href="/fallstudien/finanzdirekt" className="text-purple-600 font-medium hover:text-purple-700">
                  Fallstudie lesen →
                </Link>
              </div>
            </div>

            {/* Case Study 5 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center p-6">
                <Image
                  src="/images/company-logo6.png"
                  alt="EduLearn Logo"
                  width={160}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">EduLearn</h3>
                <p className="text-gray-600 mb-4">
                  EduLearn verbesserte die Kommunikation zwischen Lehrern, Studenten und Eltern und steigerte die
                  Zufriedenheit um 60%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Bildung
                  </span>
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Kommunikation
                  </span>
                </div>
                <Link href="/fallstudien/edulearn" className="text-yellow-600 font-medium hover:text-yellow-700">
                  Fallstudie lesen →
                </Link>
              </div>
            </div>

            {/* Case Study 6 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center p-6">
                <Image
                  src="/images/company-logo1.png"
                  alt="TravelWorld Logo"
                  width={160}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">TravelWorld</h3>
                <p className="text-gray-600 mb-4">
                  TravelWorld optimierte das Reiseerlebnis durch nahtlose Kommunikation und konnte die
                  Kundenzufriedenheit um 50% steigern.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-cyan-100 text-cyan-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Reisen
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Kundenerlebnis
                  </span>
                </div>
                <Link href="/fallstudien/travelworld" className="text-cyan-600 font-medium hover:text-cyan-700">
                  Fallstudie lesen →
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-pink-500 to-orange-400 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Bereit, Ihre eigene Erfolgsgeschichte zu schreiben?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Entdecken Sie, wie Elumalab auch Ihr Unternehmen bei der Optimierung der Kundenkommunikation unterstützen
              kann.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/demo">
                <Button className="w-full sm:w-auto bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium">
                  Demo anfordern
                </Button>
              </Link>
              <Link href="/kontakt">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium"
                >
                  Kontakt aufnehmen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
