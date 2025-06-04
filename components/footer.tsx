"use client"

import Link from "next/link"
import { Linkedin, Mail, Phone, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto container-padding py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-3 md:mb-4 inline-block">
              Lacar Associate
            </Link>
            <p className="text-white/80 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">
              Professionelle Personalvermittlung zum Festpreis. Headhunting und Recruiting ohne Risiko für Unternehmen
              aller Größen und Branchen.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/42169392/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://www.instagram.com/lacar.associate/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">Navigation</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link
                  href="/"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById("model")
                    if (element) {
                      const headerOffset = window.innerWidth >= 768 ? 100 : 80
                      const elementPosition = element.getBoundingClientRect().top
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      })
                    }
                  }}
                  className="text-white/80 hover:text-accent transition-colors text-sm md:text-base"
                >
                  Unser Modell
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById("services")
                    if (element) {
                      const headerOffset = window.innerWidth >= 768 ? 100 : 80
                      const elementPosition = element.getBoundingClientRect().top
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      })
                    }
                  }}
                  className="text-white/80 hover:text-accent transition-colors text-sm md:text-base"
                >
                  Leistungen
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById("academy")
                    if (element) {
                      const headerOffset = window.innerWidth >= 768 ? 100 : 80
                      const elementPosition = element.getBoundingClientRect().top
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      })
                    }
                  }}
                  className="text-white/80 hover:text-accent transition-colors text-sm md:text-base"
                >
                  Academy
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById("contact")
                    if (element) {
                      const headerOffset = window.innerWidth >= 768 ? 100 : 80
                      const elementPosition = element.getBoundingClientRect().top
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      })
                    }
                  }}
                  className="text-white/80 hover:text-accent transition-colors text-sm md:text-base"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">Rechtliches</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link
                  href="/impressum"
                  className="text-white/80 hover:text-accent transition-colors text-sm md:text-base"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-white/80 hover:text-accent transition-colors text-sm md:text-base"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-white/80 hover:text-accent transition-colors text-sm md:text-base">
                  AGBs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">Kontakt</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                <a
                  href="tel:+4917660772556"
                  className="text-white/80 hover:text-accent transition-colors text-sm md:text-base"
                >
                  +49 176 60772556
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@lacar-associate.de"
                  className="text-white/80 hover:text-accent transition-colors text-sm md:text-base"
                >
                  info@lacar-associate.de
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">Unsere Partner</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a
                  href="https://www.recruiting-sg.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-accent transition-colors text-sm md:text-base"
                >
                  RSG Recruiting Solutions Group
                </a>
              </li>
              <li>
                <a
                  href="https://www.rsg-ai-consulting.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-accent transition-colors text-sm md:text-base"
                >
                  RSG AI Consulting
                </a>
              </li>
              <li>
                <a
                  href="https://lacar-elearning.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-accent transition-colors text-sm md:text-base"
                >
                  Lacar eLearning
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 sm:mt-8 pt-4 sm:pt-6 md:pt-8 text-center text-white/60 text-xxs xs:text-xs sm:text-sm">
          <p>
            &copy; 2020 - 2025 Lacar Associate. Alle Rechte vorbehalten. Headhunting und Personalvermittlung zum
            Festpreis.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
