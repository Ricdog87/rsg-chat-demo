"use client"

import { HeroSection } from "@/components/hero-section"
import { AboutUs } from "@/components/about-us"
import { Services } from "@/components/services"
import { Elumalab } from "@/components/elumalab"
import { ConnectRecruit } from "@/components/connect-recruit"
import { ContactSection } from "@/components/contact-section"
import { KiRoiCalculator } from "@/components/ki-roi-calculator" // Add this import
import { useLanguage } from "@/contexts/language-context"

// Add a new section to contain the calculator
function CalculatorSection() {
  const { t } = useLanguage()
  return (
    <section id="calculator" className="relative w-full bg-gradient-to-b from-background to-background/95 py-16">
      <div className="absolute inset-0 ai-grid-bg" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="section-title">{t("roi-calculator-title")}</h2>
          <p className="section-description">{t("roi-calculator-description")}</p>
        </div>
        <KiRoiCalculator />
      </div>
    </section>
  )
}

export default function Home() {
  const { t } = useLanguage()

  return (
    <main>
      <HeroSection />
      <CalculatorSection /> {/* Add the calculator section right after the hero section */}
      <AboutUs />
      <Services />
      <Elumalab />
      <ConnectRecruit />
      <ContactSection />
    </main>
  )
}
