"use client"

import { KiRoiCalculator } from "@/components/ki-roi-calculator"
import { useLanguage } from "@/contexts/language-context"

export default function KiRoiCalculatorPage() {
  const { t } = useLanguage()

  return (
    <main className="pt-24 pb-16 relative bg-background">
      {/* Background elements to match front page styling */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 ai-grid-bg opacity-30" />

      {/* Glow effects similar to front page */}
      <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute right-1/4 bottom-1/3 h-64 w-64 rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {t("roi-calculator-title")}
            </span>
          </h1>
          <p className="text-lg text-white font-medium">{t("roi-calculator-description")}</p>
        </div>

        {/* Calculator with enhanced styling */}
        <div className="relative z-10 shadow-xl shadow-primary/5">
          <KiRoiCalculator />
        </div>

        {/* Information section with improved contrast */}
        <div className="mt-16 mx-auto max-w-3xl relative z-10">
          <h2 className="text-2xl font-bold text-primary mb-4">{t("how-it-works")}</h2>
          <p className="text-white mb-4 text-lg">{t("calculator-explanation")}</p>

          <div className="space-y-4 mt-6">
            <div className="rounded-lg border border-primary/30 bg-card/50 p-6 shadow-md hover:shadow-lg hover:shadow-primary/5 transition-all">
              <h3 className="text-lg font-semibold text-primary mb-2">{t("time-savings-factor")}</h3>
              <p className="text-white text-base">{t("time-savings-explanation")}</p>
            </div>

            <div className="rounded-lg border border-primary/30 bg-card/50 p-6 shadow-md hover:shadow-lg hover:shadow-primary/5 transition-all">
              <h3 className="text-lg font-semibold text-primary mb-2">{t("error-reduction-factor")}</h3>
              <p className="text-white text-base">{t("error-reduction-explanation")}</p>
            </div>

            <div className="rounded-lg border border-primary/30 bg-card/50 p-6 shadow-md hover:shadow-lg hover:shadow-primary/5 transition-all">
              <h3 className="text-lg font-semibold text-primary mb-2">{t("investment-costs")}</h3>
              <p className="text-white text-base">{t("investment-costs-explanation")}</p>
            </div>

            <div className="rounded-lg border border-primary/30 bg-card/50 p-6 shadow-md hover:shadow-lg hover:shadow-primary/5 transition-all">
              <h3 className="text-lg font-semibold text-primary mb-2">{t("amortization")}</h3>
              <p className="text-white text-base">{t("amortization-explanation")}</p>
            </div>
          </div>

          <div className="mt-8 p-8 rounded-lg border border-primary/30 bg-primary/10 shadow-lg">
            <h3 className="text-xl font-semibold text-primary mb-4">{t("ready-to-start")}</h3>
            <p className="text-white text-lg mb-4">{t("expert-help")}</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="#contact"
                className="rounded-md bg-primary px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-primary/90 shadow-md hover:shadow-lg hover:shadow-primary/20"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {t("get-in-touch")}
              </a>
              <a
                href="https://meetings.hubspot.com/r-serrano"
                className="rounded-md border border-primary bg-transparent px-6 py-3 text-center text-sm font-medium text-primary transition-colors hover:bg-primary/10"
                target="_blank"
                rel="noreferrer"
              >
                {t("book-consultation-appointment")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
