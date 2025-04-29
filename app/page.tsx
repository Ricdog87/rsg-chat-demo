"use client"

import { HeroSection } from "@/components/hero-section"
import { AboutUs } from "@/components/about-us"
import { Services } from "@/components/services"
import { Elumalab } from "@/components/elumalab"
import { ConnectRecruit } from "@/components/connect-recruit"
import { ContactSection } from "@/components/contact-section"
import { KiRoiCalculator } from "@/components/ki-roi-calculator" // Add this import

// Add a new section to contain the calculator
function CalculatorSection() {
  return (
    <section id="calculator" className="relative w-full bg-gradient-to-b from-background to-background/95 py-16">
      <div className="absolute inset-0 ai-grid-bg" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="section-title">KI-ROI Kalkulator</h2>
          <p className="section-description">
            Berechnen Sie, wie viel Ihr Unternehmen durch den Einsatz von KI-Lösungen und Automatisierung sparen kann.
            Unser Kalkulator berücksichtigt Personalkosten, Zeitersparnis, Fehlerreduzierung und mehr.
          </p>
        </div>
        <KiRoiCalculator />
      </div>
    </section>
  )
}

export default function Home() {
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
