"use client"

import { useInView } from "react-intersection-observer"
import { Users, BookOpen, LifeBuoy, Briefcase } from "lucide-react"
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
        "Professionelles Headhunting und Executive Search für Fach- und Führungskräfte zum Festpreis von 9.999 € netto. Wir finden die besten Talente für Ihr Unternehmen.",
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
        "Praxisnahe Schulungen für Recruiter, Personalberater und HR-Teams zur Optimierung Ihrer Recruiting-Prozesse. Steigern Sie die Effizienz Ihres Recruitings.",
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
        "Professionelle Unterstützung für Mitarbeiter bei beruflicher Neuorientierung und Karriereplanung. Wir begleiten den Übergang in eine neue berufliche Zukunft.",
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
        "Schnelle Vermittlung von qualifizierten Freelancern und Interim Managern für Ihre Projekte. Flexible Lösungen für temporäre Personalbedarfe.",
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
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Maßgeschneiderte Lösungen für Ihre Personalgewinnung und -entwicklung. Von der Personalvermittlung bis zum
            Freelancer-Recruiting bieten wir alles aus einer Hand.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card border border-gray-200 hover:border-accent/30 transform transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start">
                <div className="flex justify-center md:justify-start mb-3 md:mb-0 md:mr-4 md:mt-1">{service.icon}</div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-center md:text-left">{service.title}</h3>
                  <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base text-center md:text-left">
                    {service.description}
                  </p>
                  <ul className="space-y-1 md:space-y-2 mb-3 md:mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2 flex-shrink-0"></span>
                        <span className="text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center md:text-left">
                    <Link
                      href={service.link}
                      className="text-accent hover:text-accent-light font-medium inline-flex items-center text-sm md:text-base"
                    >
                      Mehr erfahren
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
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

        <div className="mt-10 md:mt-16 bg-gray-50 rounded-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                Maßgeschneiderte Recruiting-Lösungen für Ihren Erfolg
              </h3>
              <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                Jedes Unternehmen ist einzigartig – deshalb passen wir unsere Recruiting-Strategie individuell an Ihre
                Bedürfnisse an. Vom ersten Gespräch bis zur erfolgreichen Einstellung begleiten wir Sie durch den
                gesamten Prozess und sorgen für eine optimale Besetzung Ihrer offenen Positionen.
              </p>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Unsere erfahrenen Headhunter und Recruiter verfügen über umfangreiche Branchenkenntnisse und ein
                weitreichendes Netzwerk, um die besten Talente für Ihr Unternehmen zu finden – und das zum Festpreis
                ohne versteckte Kosten.
              </p>
              <Link
                href="https://meetings-eu1.hubspot.com/meetings/serrano/lead-kalender?uuid=656818da-bec4-434f-8209-e2b8ac089a5c"
                target="_blank"
                className="bg-accent hover:bg-accent-light text-white font-medium py-2 px-4 md:py-3 md:px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center text-sm md:text-base"
              >
                Beratungsgespräch vereinbaren
              </Link>
            </div>
            <div className="relative h-56 md:h-64 lg:h-auto">
              <Image
                src="/recruiting-meeting-image.png"
                alt="Professionelle Recruiting-Services von Lacar Associate"
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
