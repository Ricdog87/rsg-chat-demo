"use client"

import { useState } from "react"
import { Check, Globe } from "lucide-react"
import { useLanguage } from "@/app/contexts/language-context"

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleLanguageChange = (lang: "de" | "en") => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        aria-label={t("language")}
      >
        <Globe className="h-[1.2rem] w-[1.2rem]" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md border border-border bg-background shadow-lg">
          <div className="py-1">
            <button
              onClick={() => handleLanguageChange("de")}
              className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent"
            >
              <span className="flex-1 text-left">Deutsch</span>
              {language === "de" && <Check className="h-4 w-4" />}
            </button>
            <button
              onClick={() => handleLanguageChange("en")}
              className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent"
            >
              <span className="flex-1 text-left">English</span>
              {language === "en" && <Check className="h-4 w-4" />}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
