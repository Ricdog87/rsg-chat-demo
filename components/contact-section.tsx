"use client"

import type React from "react"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Mail, Phone, MapPin, Calendar } from 'lucide-react'
import Link from "next/link"
import { submitContactForm, type ContactFormData } from "@/app/actions/contact-form"

const ContactSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      const result = await submitContactForm(formData)
      setSubmitResult(result)

      if (result.success) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        })
      }
    } catch (error) {
      console.error("Fehler beim Absenden des Formulars:", error)
      setSubmitResult({
        success: false,
        message: "Es gab ein technisches Problem. Bitte versuchen Sie es später erneut.",
      })
    } finally {
      setIsSubmitting(false)

      if (submitResult?.success) {
        setTimeout(() => {
          setSubmitResult(null)
        }, 5000)
      }
    }
  }

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="section-title">Kontakt & Beratung</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Headhunting Deutschland und Executive Search – in Berlin, Hamburg, München, Frankfurt, Köln, Wiesbaden & NRW.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div
            className={`transform transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-5 md:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6">Kontaktieren Sie uns</h3>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                      aria-label="Ihr Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                      aria-label="Ihre E-Mail-Adresse"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                      aria-label="Ihre Telefonnummer"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                      aria-label="Ihr Unternehmen"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                    aria-label="Ihre Nachricht an uns"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                    Ich stimme der{" "}
                    <Link href="/datenschutz" className="text-accent hover:underline">
                      Datenschutzerklärung
                    </Link>{" "}
                    zu *
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-accent hover:bg-accent-light text-white font-medium py-2 px-4 md:py-3 md:px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center w-full text-sm md:text-base"
                >
                  {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                </button>

                {submitResult && (
                  <div
                    className={`p-3 rounded-md text-sm ${
                      submitResult.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}
                  >
                    {submitResult.message}
                  </div>
                )}
              </form>
            </div>
          </div>

          <div
            className={`transform transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Direkte Beratung</h3>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start">
                  <div className="bg-accent/10 p-2 md:p-3 rounded-lg mr-3 md:mr-4 flex-shrink-0">
                    <Calendar className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold mb-1">Beratungstermin buchen</h4>
                    <p className="text-gray-600 mb-2 md:mb-3 text-sm md:text-base">
                      Recruiting in Berlin, Hamburg, München, Frankfurt, Köln, Wiesbaden & NRW – wir beraten Sie gerne.
                    </p>
                    <Link
                      href="/kontakt"
                      className="bg-accent hover:bg-accent-light text-white font-medium py-1.5 px-3 md:py-2 md:px-4 rounded-md transition-all duration-300 inline-flex items-center justify-center text-sm"
                    >
                      Termin buchen
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-accent/10 p-2 md:p-3 rounded-lg mr-3 md:mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold mb-1">Telefonisch</h4>
                    <p className="text-gray-600 mb-1 text-sm md:text-base">Rufen Sie uns direkt an:</p>
                    <a
                      href="tel:+4917660772556"
                      className="text-primary font-semibold hover:text-accent transition-colors text-sm md:text-base"
                    >
                      +49 176 60772556
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-accent/10 p-2 md:p-3 rounded-lg mr-3 md:mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold mb-1">E-Mail</h4>
                    <p className="text-gray-600 mb-1 text-sm md:text-base">Schreiben Sie uns eine E-Mail:</p>
                    <a
                      href="mailto:info@lacar-associate.de"
                      className="text-primary font-semibold hover:text-accent transition-colors text-sm md:text-base"
                    >
                      info@lacar-associate.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-accent/10 p-2 md:p-3 rounded-lg mr-3 md:mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold mb-1">Standort</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Remote in ganz Deutschland – aktiv in Berlin, Hamburg, München, Frankfurt, Köln, Wiesbaden & NRW.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
