"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, BookOpen, Users } from "lucide-react"

const AcademySection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="academy" className="section-padding gradient-bg text-white">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div
            ref={ref}
            className={`transform transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Lacar eLearning Academy</h2>
            <p className="text-base md:text-lg text-white/90 mb-4 md:mb-6">
              Unsere spezialisierte Schulungsplattform für Personalberater und Recruiter bietet praxisnahe Kurse und
              Workshops, die Ihre Recruiting-Fähigkeiten auf das nächste Level heben. Profitieren Sie von unserem
              Expertenwissen und steigern Sie Ihren Erfolg im Recruiting.
            </p>

            <div className="space-y-3 sm:space-y-4 md:space-y-6 mb-4 sm:mb-6 md:mb-8">
              <div className="flex items-start">
                <div className="bg-white/10 p-1.5 sm:p-2 md:p-3 rounded-lg mr-2 sm:mr-3 md:mr-4 flex-shrink-0">
                  <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-0.5 sm:mb-1">
                    Praxisnahe Online-Kurse
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm md:text-base">
                    Von modernen Sourcing-Strategien bis hin zu Verhandlungstechniken – unsere Kurse vermitteln
                    praktisches Wissen für den Recruiting-Alltag und helfen Ihnen, effizienter und erfolgreicher zu
                    arbeiten.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white/10 p-1.5 sm:p-2 md:p-3 rounded-lg mr-2 sm:mr-3 md:mr-4 flex-shrink-0">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-0.5 sm:mb-1">
                    Live-Workshops & Webinare
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm md:text-base">
                    Interaktive Sessions mit erfahrenen Trainern und die Möglichkeit, Fragen zu stellen und sich mit
                    Gleichgesinnten auszutauschen. Profitieren Sie vom direkten Austausch mit Experten.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white/10 p-1.5 sm:p-2 md:p-3 rounded-lg mr-2 sm:mr-3 md:mr-4 flex-shrink-0">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-0.5 sm:mb-1">Zertifizierungen</h3>
                  <p className="text-white/80 text-xs sm:text-sm md:text-base">
                    Dokumentieren Sie Ihre Expertise mit anerkannten Zertifikaten und heben Sie sich im Recruiting-Markt
                    ab. Unsere Zertifizierungen sind in der Branche anerkannt und wertgeschätzt.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="https://lacar-learn-ai-pro.lovable.app/"
              target="_blank"
              className="inline-flex items-center text-accent hover:text-accent-light font-semibold transition-colors text-sm md:text-base"
            >
              Academy entdecken <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </div>

          <div
            ref={ref}
            className={`relative h-80 md:h-[500px] transform transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <Image
              src="/lacar-elearning-new.png"
              alt="Lacar eLearning Academy - Professionelle Schulungen für Recruiter"
              fill
              className="object-cover rounded-lg"
            />

            {/* Testimonial */}
            <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-6 left-3 sm:left-4 md:left-6 bg-white p-2 sm:p-3 md:p-4 rounded-lg shadow-lg">
              <p className="text-primary italic mb-1.5 sm:mb-2 text-xs sm:text-sm md:text-base">
                "Die Kurse der Lacar Academy haben meine Recruiting-Fähigkeiten auf ein neues Level gehoben. Praxisnah,
                effektiv und direkt umsetzbar. Ich konnte meine Erfolgsquote deutlich steigern."
              </p>
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gray-200 mr-1.5 sm:mr-2 md:mr-3"></div>
                <div>
                  <p className="font-semibold text-primary text-xs sm:text-sm md:text-base">Sarah M.</p>
                  <p className="text-xxs sm:text-xs md:text-sm text-gray-600">Senior Recruiter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AcademySection
