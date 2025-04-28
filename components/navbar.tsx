"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      // Verhindert das Scrollen des Body, wenn das Menü geöffnet ist
      document.body.style.overflow = "hidden"
    } else {
      // Stellt das Scrollen wieder her, wenn das Menü geschlossen ist
      document.body.style.overflow = "auto"
    }

    return () => {
      // Cleanup: Stellt das Scrollen wieder her, wenn die Komponente unmounted wird
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = window.innerWidth >= 768 ? 100 : 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setIsOpen(false)
    }
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-3 md:py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="relative">
          <div
            className={`transition-all duration-300 ${
              isScrolled ? "bg-transparent" : "bg-white/70 backdrop-blur-sm rounded-lg px-3 py-2"
            }`}
          >
            <div className="relative">
              {/* Desktop Logo */}
              <div className="hidden md:block">
                <Image
                  src="/logo-lacar-new.png"
                  alt="Lacar Associate Logo"
                  width={158}
                  height={40}
                  className="h-auto w-auto max-h-16"
                  priority
                />
              </div>

              {/* Mobile Logo */}
              <div className="block md:hidden">
                <Image
                  src="/logo-lacar-new.png"
                  alt="Lacar Associate Logo"
                  width={126}
                  height={32}
                  className="h-auto w-auto max-h-12"
                  priority
                />
              </div>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <button
            onClick={() => scrollToSection("model")}
            className={`${
              isScrolled ? "text-primary" : "text-white"
            } hover:text-accent font-medium transition-colors text-sm lg:text-base`}
          >
            Unser Modell
          </button>
          <button
            onClick={() => scrollToSection("calculator")}
            className={`${
              isScrolled ? "text-primary" : "text-white"
            } hover:text-accent font-medium transition-colors text-sm lg:text-base`}
          >
            Vakanzkosten-Rechner
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className={`${
              isScrolled ? "text-primary" : "text-white"
            } hover:text-accent font-medium transition-colors text-sm lg:text-base`}
          >
            Leistungen
          </button>
          <button
            onClick={() => scrollToSection("academy")}
            className={`${
              isScrolled ? "text-primary" : "text-white"
            } hover:text-accent font-medium transition-colors text-sm lg:text-base`}
          >
            Academy
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`${
              isScrolled ? "text-primary" : "text-white"
            } hover:text-accent font-medium transition-colors text-sm lg:text-base`}
          >
            Kontakt
          </button>
          <Link
            href="https://meetings-eu1.hubspot.com/meetings/serrano/lead-kalender?uuid=656818da-bec4-434f-8209-e2b8ac089a5c"
            target="_blank"
            className="bg-accent hover:bg-accent-light text-white font-medium py-2 px-4 lg:py-2 lg:px-5 rounded-md transition-all duration-300 inline-flex items-center justify-center text-sm lg:text-base"
          >
            Termin buchen
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? "text-primary" : "text-white"} z-20`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-10 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } pt-20 overflow-y-auto`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-6">
          <button
            onClick={() => scrollToSection("model")}
            className="text-primary hover:text-accent font-medium transition-colors py-2 text-left text-lg"
          >
            Unser Modell
          </button>
          <button
            onClick={() => scrollToSection("calculator")}
            className="text-primary hover:text-accent font-medium transition-colors py-2 text-left text-lg"
          >
            Vakanzkosten-Rechner
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-primary hover:text-accent font-medium transition-colors py-2 text-left text-lg"
          >
            Leistungen
          </button>
          <button
            onClick={() => scrollToSection("academy")}
            className="text-primary hover:text-accent font-medium transition-colors py-2 text-left text-lg"
          >
            Academy
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-primary hover:text-accent font-medium transition-colors py-2 text-left text-lg"
          >
            Kontakt
          </button>
          <Link
            href="https://meetings-eu1.hubspot.com/meetings/serrano/lead-kalender?uuid=656818da-bec4-434f-8209-e2b8ac089a5c"
            target="_blank"
            className="bg-accent hover:bg-accent-light text-white font-medium py-3 px-5 rounded-md transition-all duration-300 inline-flex items-center justify-center w-full text-center text-lg mt-4"
            onClick={() => setIsOpen(false)}
          >
            Termin buchen
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
