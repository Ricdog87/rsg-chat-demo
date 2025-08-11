"use client"

import { useInView } from "react-intersection-observer"
import { Users, BookOpen, LifeBuoy, Briefcase } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

const ServicesSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const services = [
    {
      icon: <Users className="h-8 w-8 md:h-10 md:w-10 text-accent" />,
      title: "Personalvermittlung",
      description:
        "Headhunting Deutschland und Executive Search zum Festpreis – Berlin, Hamburg, München, Frankfurt, Köln, Wiesbaden & NRW.",
      features: [
        "Direktansprache von passiven Kandidaten",
        "Umfassende Kandidatenanalyse und Matching",
        "Persönliche Interviews und Qualifikationsprüfung",
        "Begleitung des gesamten Einstellungsprozesses",
      ],
      link: "/personalvermittlung",
    },
    {
      icon: <BookOpen className="h-8 w-8 md:h-10 md:w-10 text-accent" />,
      title: "Schulungen & Trainings",
      description:
        "Praxisnahe Recruiting-Schulungen für Deutschland: Berlin, Hamburg, München, Frankfurt, Köln & NRW – Performance steigern.",
      features: [
        "Moderne Sourcing-Strategien und -Techniken",
        "Professionelle Direktansprache und Kommunikation",
        "Optimierung der Candidate Experience",
        "Effiziente Recruiting-Prozessoptimierung",
      ],
      link: "/schulungen",
    },
    {
      icon: <LifeBuoy className="h-8 w-8 md:h-10 md:w-10 text-accent" />,
      title: "Outplacement Services",
      description:
        "Bundesweite Unterstützung bei Neuorientierung – in Berlin, Hamburg, München, Frankfurt, Köln, Wiesbaden & NRW.",
      features: [
        "Individuelle Karriereberatung und Potenzialanalyse",
        "Professioneller Bewerbungsunterlagen-Check",
        "Intensives Interview-Training und Vorbereitung",
        "Strategische Jobsuche und Netzwerkaufbau",
      ],
      link: "/outplacement",
    },
    {
      icon: <Briefcase className="h-8 w-8 md:h-10 md:w-10 text-accent" />,
      title: "Freelancer-Recruiting",
      description:
        "Schnelle Vermittlung bundesweit – Berlin, Hamburg, München, Frankfurt, Köln, NRW und ganz Deutschland.",
      features: [
        "Zugang zu spezialisierten Freelancern verschiedener Branchen",
        "Schnelle Vermittlung innerhalb weniger Tage",
        "Umfassende Qualitätssicherung und Referenzprüfung",
        "Flexible Einsatzmodelle und Vertragslaufzeiten",
      ],
      link: "/freelancer",
    },
  ]

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="section-title">Unsere Recruiting-Dienstleistungen</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto">
            Personalvermittlung zum Fixpreis und Headhunting Deutschland: Wir rekrutieren in Berlin, Hamburg, München,
            Frankfurt, Köln, Wiesbaden & NRW – schnell, transparent und effizient.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card border border-gray-200 hover:border-accent/30 transform transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start">
                <div className="flex justify-center md:justify-start mb-2 sm:mb-3 md:mb-0 md:mr-4 md:mt-1">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1.5 sm:mb-2 text-center md:text-left">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base text-center md:text-left">
                    {service.description}
                  </p>
                  <ul className="space-y-1 md:space-y-2 mb-3 md:mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2 flex-shrink-0"></span>
                        <span className="text-xs sm:text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center md:text-left">
                    <Link
                      href={service.link}
                      className="text-accent hover:text-accent-light font-medium inline-flex items-center text-xs sm:text-sm md:text-base"
                    >
                      Mehr zu {service.title}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 sm:h-4 sm:w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 items-center">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">
                Headhunting Deutschland – lokal stark, bundesweit präsent
              </h3>
              <p className="text-gray-600 mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base">
                Ob Berlin, Hamburg, München, Frankfurt, Köln, Wiesbaden oder NRW – wir liefern transparente
                Personalvermittlung zum Fixpreis mit messbaren Ergebnissen.
              </p>
              <Link
                href="/kontakt"
                className="bg-accent hover:bg-accent-light text-white font-medium py-2 px-4 md:py-3 md:px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center text-sm md:text-base"
              >
                Jetzt Beratungstermin buchen
              </Link>
            </div>
            <div className="relative h-56 md:h-64 lg:h-auto">
              <Image
                src="/recruiting-meeting-image.png"
                alt="Headhunting Deutschland & Recruiting Wiesbaden – Teammeeting"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
