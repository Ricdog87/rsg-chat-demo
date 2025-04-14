"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronDown } from "lucide-react"

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToNextSection = () => {
    const modelSection = document.getElementById("model")
    if (modelSection) {
      const headerOffset = window.innerWidth >= 768 ? 100 : 80
      const elementPosition = modelSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/header-image.png"
          alt="Professioneller Konferenzraum für Headhunting und Recruiting"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-primary/70 md:bg-primary/60"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`max-w-3xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Personalvermittlung und Headhunting zum Fixpreis. Null Risiko.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8">
            Professionelles Headhunting und Recruiting zum Festpreis – 9.999&nbsp;€ netto pro Projekt. Keine versteckten
            Kosten, keine Überraschungen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="https://meetings-eu1.hubspot.com/meetings/serrano/lead-kalender?uuid=656818da-bec4-434f-8209-e2b8ac089a5c"
              target="_blank"
              className="bg-accent hover:bg-accent-light text-white font-medium py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center text-base sm:text-lg"
            >
              Jetzt Termin buchen <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button
              onClick={scrollToNextSection}
              className="bg-white/90 hover:bg-white text-primary border border-primary/20 font-medium py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center text-base sm:text-lg"
            >
              Mehr erfahren
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
        onClick={scrollToNextSection}
      >
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  )
}

export default HeroSection
