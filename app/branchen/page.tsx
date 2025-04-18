import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Branchen | Elumalab",
  description: "Branchenspezifische Lösungen für WhatsApp Business und Kundenkommunikation",
}

export default function BranchenPage() {
  return (
    <div>
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Branchenspezifische Lösungen</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entdecken Sie, wie Elumalab die Kundenkommunikation in verschiedenen Branchen revolutioniert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* E-Commerce */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">E-Commerce</h3>
                <p className="text-gray-600 mb-4">
                  Steigern Sie Ihre Konversionsraten und reduzieren Sie Warenkorbabbrüche durch proaktive Kommunikation
                  über WhatsApp.
                </p>
                <a href="/branchen/e-commerce" className="text-pink-600 font-medium hover:text-pink-700">
                  Mehr erfahren →
                </a>
              </div>
            </div>

            {/* Einzelhandel */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Einzelhandel</h3>
                <p className="text-gray-600 mb-4">
                  Verbinden Sie Online- und Offline-Erlebnisse und bieten Sie personalisierten Service über WhatsApp.
                </p>
                <a href="/branchen/einzelhandel" className="text-orange-600 font-medium hover:text-orange-700">
                  Mehr erfahren →
                </a>
              </div>
            </div>

            {/* Gesundheitswesen */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Gesundheitswesen</h3>
                <p className="text-gray-600 mb-4">
                  Verbessern Sie die Patientenkommunikation und automatisieren Sie Terminbuchungen und Erinnerungen.
                </p>
                <a href="/branchen/gesundheitswesen" className="text-blue-600 font-medium hover:text-blue-700">
                  Mehr erfahren →
                </a>
              </div>
            </div>

            {/* Finanzen */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Finanzen</h3>
                <p className="text-gray-600 mb-4">
                  Bieten Sie sicheren und personalisierten Kundenservice für Finanzdienstleistungen über WhatsApp.
                </p>
                <a href="/branchen/finanzen" className="text-green-600 font-medium hover:text-green-700">
                  Mehr erfahren →
                </a>
              </div>
            </div>

            {/* Bildung */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Bildung</h3>
                <p className="text-gray-600 mb-4">
                  Verbessern Sie die Kommunikation zwischen Bildungseinrichtungen, Studenten und Eltern.
                </p>
                <a href="/branchen/bildung" className="text-yellow-600 font-medium hover:text-yellow-700">
                  Mehr erfahren →
                </a>
              </div>
            </div>

            {/* Reisen */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Reisen</h3>
                <p className="text-gray-600 mb-4">
                  Optimieren Sie das Reiseerlebnis durch nahtlose Kommunikation vor, während und nach der Reise.
                </p>
                <a href="/branchen/reisen" className="text-purple-600 font-medium hover:text-purple-700">
                  Mehr erfahren →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
