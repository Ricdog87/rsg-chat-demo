"use client"

import Link from "next/link"
import { Mail, Phone } from "lucide-react"
// Update the import path
import { useLanguage } from "@/app/contexts/language-context"
import { Logo } from "@/components/logo"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border/50 bg-background/95">
      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo className="mb-4" />
            <p className="text-sm text-white">{t("about-description")}</p>
            <p className="text-xs text-gray-400">
              RSG AI Consulting ist ein innovatives Beratungsunternehmen, das sich auf KI-Lösungen und Prompt
              Engineering für Marketing, Vertrieb und Recruiting spezialisiert hat. Wir helfen Unternehmen, die
              transformative Kraft der künstlichen Intelligenz strategisch zu nutzen.
            </p>
            <div className="flex flex-col space-y-2 pt-2">
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-primary" />
                <a href="tel:+4917660772445" className="text-sm text-white hover:text-primary transition-colors">
                  +49 176 6077 2445
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-primary" />
                <a
                  href="mailto:info@recruiting-sg.de"
                  className="text-sm text-white hover:text-primary transition-colors"
                >
                  info@recruiting-sg.de
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-primary">{t("company")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#about" className="text-white transition-colors hover:text-primary">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-white transition-colors hover:text-primary">
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link href="/#connect-recruit" className="text-white transition-colors hover:text-primary">
                  {t("connect-recruit")}
                </Link>
              </li>
              <li>
                <Link href="/#elumalab" className="text-white transition-colors hover:text-primary">
                  {t("elumalab")}
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-white transition-colors hover:text-primary">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-primary">{t("legal")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/impressum" className="text-gray-300 transition-colors hover:text-white">
                  {t("imprint")}
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-gray-300 transition-colors hover:text-white">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-gray-300 transition-colors hover:text-white">
                  {t("terms")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-primary">{t("follow-us")}</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/105505351"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/recruiting_solutions_group/"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/50 pt-8 text-center">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} RSG AI Consulting. {t("all-rights-reserved")}
          </p>
        </div>
      </div>
    </footer>
  )
}
