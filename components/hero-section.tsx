"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronDown } from 'lucide-react'

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
          alt="Headhunting Deutschland – Recruiting Wiesbaden – moderner Konferenzraum"
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3 md:mb-4">
            Headhunting & Personalvermittlung zum Festpreis – Bundesweit
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-4 md:mb-6 lg:mb-8">
            Executive Search und Recruiting für Berlin, Hamburg, München, Frankfurt, Köln, Wiesbaden & NRW – transparent
            zum Fixpreis von 9.999&nbsp;€ netto.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/kontakt"
              className="bg-accent hover:bg-accent-light text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center text-sm sm:text-base lg:text-lg text-center"
            >
              Jetzt Beratungstermin buchen <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <button
              onClick={scrollToNextSection}
              className="bg-white/90 hover:bg-white text-primary border border-primary/20 font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center text-sm sm:text-base lg:text-lg"
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
