"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const PartnersSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const partners = [
    {
      name: "RSG Recruiting Solutions Group GmbH",
      description:
        "RSG Recruiting Solutions Group GmbH ist ein innovatives Beratungsunternehmen, das sich auf KI-Lösungen für Marketing, Vertrieb und Recruiting spezialisiert hat. Wir helfen Unternehmen, die Kraft der künstlichen Intelligenz zu nutzen, um ihre Geschäftsprozesse zu optimieren und ihre Ziele zu erreichen.",
      logo: "/rsg-logo.png",
      link: "https://recruiting-sg.de",
    },
    {
      name: "Elumalab",
      description:
        "Die All-in-One Kommunikationsplattform, die alle Kundennachrichten von WhatsApp, Instagram, Facebook und mehr an einem Ort vereint. Mit intelligenten Automatisierungen, Team-Kollaboration und umfassenden Analysen für optimale Kundenkommunikation.",
      logo: "/elumalab-logo.png",
      link: "https://www.elumalab.com",
    },
    {
      name: "Connect Recruit AI Flow",
      description:
        "Eine leistungsstarke No-Code-Plattform, die es Ihnen ermöglicht, komplexe Recruiting-Workflows zu automatisieren und alle Ihre HR-Tools nahtlos zu integrieren. Sparen Sie wertvolle Zeit, eliminieren Sie manuelle Aufgaben und optimieren Sie Ihren gesamten Recruiting-Prozess mit intelligenten, KI-gesteuerten Workflows.",
      logo: "/rsg-connect-app.png",
      link: "https://rsg-connect.de",
    },
  ]

  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="section-title">Unsere Partner im Recruiting-Ökosystem</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Gemeinsam mit unseren Partnern bieten wir Ihnen ein umfassendes Recruiting-Ökosystem für maximalen Erfolg
            bei der Personalsuche und -entwicklung.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`card border border-gray-200 hover:border-accent/30 transform transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="h-16 sm:h-20 md:h-24 lg:h-32 flex items-center justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 p-2 sm:p-3 md:p-4">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} - Partner von Lacar Associate`}
                  width={200}
                  height={100}
                  className="h-auto w-auto max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1.5 sm:mb-2 text-center">{partner.name}</h3>
              <p className="text-gray-600 text-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-xs sm:text-sm md:text-base">
                {partner.description}
              </p>
              <div className="text-center">
                <Link
                  href={partner.link}
                  target="_blank"
                  className="inline-flex items-center text-accent hover:text-accent-light font-semibold transition-colors text-xs sm:text-sm md:text-base"
                >
                  Mehr erfahren <ArrowRight className="ml-1.5 h-3.5 w-3.5 sm:ml-2 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-16 text-center">
          <p className="text-gray-600 mb-4 text-sm md:text-base">
            Interessiert an einer Partnerschaft mit Lacar Associate? Wir freuen uns auf den Austausch mit Ihnen.
          </p>
          <Link
            href="https://recruiting-sg.de/"
            target="_blank"
            className="bg-accent hover:bg-accent-light text-white font-medium py-2 px-4 md:py-3 md:px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center text-sm md:text-base"
          >
            Kontaktieren Sie uns
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
