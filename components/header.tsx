"use client"
import { useState, useEffect } from "react"
import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/app/contexts/language-context"
import { LanguageSelector } from "@/components/language-selector"
import { Logo } from "@/components/logo"

export function Header() {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"])
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(8px)"])
  const { theme, setTheme } = useTheme()
  const { t } = useLanguage()

  // State für das mobile Menü
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Schließe das mobile Menü, wenn die Fenstergröße ändert
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Ändere das navItems-Array, um den KI-ROI-Kalkulator hinzuzufügen
  const navItems = [
    { title: t("home"), href: "/" },
    { title: t("about"), href: "/#about" },
    {
      title: t("services"),
      href: "/#services",
      dropdown: true,
    },
    { title: t("connect-recruit"), href: "/#connect-recruit" },
    { title: t("elumalab"), href: "/#elumalab" },
    { title: t("roi-calculator"), href: "/ki-roi-kalkulator" },
    { title: t("contact"), href: "/#contact" },
  ]

  // Funktion zum Scrollen zu einem Abschnitt
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault()
      const id = href.substring(2)
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setMobileMenuOpen(false)
      }
    } else if (pathname === "/" && href.startsWith("#")) {
      e.preventDefault()
      const id = href.substring(1)
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setMobileMenuOpen(false)
      }
    } else {
      setMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      className="fixed top-0 z-50 w-full border-b border-transparent"
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        borderColor: useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"]),
      }}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.title} className="relative">
                  <Link
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      pathname === item.href ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.title}
                    {item.dropdown && (
                      <span className="ml-1 inline-block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://meetings.hubspot.com/r-serrano"
            className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90 md:block"
          >
            {t("book-consultation")}
          </Link>

          <LanguageSelector />

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </button>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50 animate-in slide-in-from-top-5">
          <div className="container py-4">
            <div className="flex justify-center pb-4">
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block py-2 text-lg hover:text-primary transition-colors"
                >
                  {item.title}
                </Link>
              ))}
              <Link
                href="https://meetings.hubspot.com/r-serrano"
                className="mt-2 rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-primary/90"
              >
                {t("book-consultation")}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </motion.header>
  )
}
