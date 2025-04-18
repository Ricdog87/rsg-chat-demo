import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, ArrowRight, MessageSquare, Clock, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt | Elumalab",
  description:
    "Kontaktiere uns für Fragen zu Elumalab, unserer KI-gestützten Plattform für Kundenkommunikation. Wir helfen dir gerne weiter!",
  keywords: "Kontakt, Elumalab, Kundenkommunikation, KI-Chatbot, Support, Beratung",
}

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:16px_16px] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">Kontakt</h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto animate-slide-up-delay">
            Wir freuen uns, von dir zu hören. Kontaktiere uns für Fragen, Feedback oder Unterstützung.
          </p>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Kontaktinformationen</h2>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start group transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-4 rounded-lg border border-transparent hover:border-gray-200">
                    <Phone className="h-6 w-6 text-pink-500 mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h3 className="font-bold text-gray-900">Telefon</h3>
                      <p className="text-gray-600">+49 176 60772556</p>
                    </div>
                  </div>
                  <div className="flex items-start group transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-4 rounded-lg border border-transparent hover:border-gray-200">
                    <Mail className="h-6 w-6 text-pink-500 mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h3 className="font-bold text-gray-900">E-Mail</h3>
                      <p className="text-gray-600">hello@elumalab.com</p>
                    </div>
                  </div>
                  <div className="flex items-start group transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-4 rounded-lg border border-transparent hover:border-gray-200">
                    <MapPin className="h-6 w-6 text-pink-500 mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h3 className="font-bold text-gray-900">Adresse</h3>
                      <p className="text-gray-600">
                        RSG Recruiting Solutions Group GmbH
                        <br />
                        Am Heiligenhaus 9
                        <br />
                        65207 Wiesbaden
                        <br />
                        Deutschland
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Geschäftszeiten</h2>
                <div className="space-y-2 mb-8">
                  <div className="flex justify-between">
                    <span className="font-medium">Montag - Freitag:</span>
                    <span>9:00 - 18:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Samstag - Sonntag:</span>
                    <span>Geschlossen</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
                  <h3 className="text-xl font-bold mb-4">Warum uns kontaktieren?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MessageSquare className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">Persönliche Beratung zu unseren Lösungen</p>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">Individuelle Anpassungen für dein Unternehmen</p>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">Schnelle Antworten auf all deine Fragen</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Schreib uns</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Betreff
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
                      required
                    ></textarea>
                  </div>

                  {/* Hidden fields for email routing */}
                  <input type="hidden" name="_to" value="hello@elumalab.com" />
                  <input type="hidden" name="_subject" value="Neue Kontaktanfrage von der Website" />

                  <Button
                    type="submit"
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md group transition-all duration-300 ease-in-out"
                  >
                    <span>Nachricht senden</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[length:20px_20px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:scale-[1.01]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.9378955034487!2d8.2392!3d50.0689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDA0JzA4LjAiTiA4wrAxNCczNS4xIkU!5e0!3m2!1sde!2sde!4v1617289123456!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Elumalab Standort"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:16px_16px] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Bereit, deine Kundenkommunikation zu revolutionieren?
            </h2>
            <p className="text-xl mb-10 text-white">
              Starte jetzt mit Elumalab und erlebe den Unterschied in deiner Kundenkommunikation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-6 text-lg font-medium group transition-all duration-300 ease-in-out"
                >
                  <span>Kostenlos starten</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium transition-all duration-300 ease-in-out"
                >
                  Demo ansehen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
