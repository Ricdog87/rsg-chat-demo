"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Calculator, ArrowRight, Info } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts"

type CalculatorInputs = {
  position: string
  salary: string
  recruitingCosts: string
}

const defaultValues: CalculatorInputs = {
  position: "Führungskraft",
  salary: "80000",
  recruitingCosts: "25",
}

const positionOptions = [
  { value: "Führungskraft", label: "Führungskraft", defaultSalary: 80000 },
  { value: "Fachkraft", label: "Fachkraft", defaultSalary: 60000 },
  { value: "Sachbearbeiter", label: "Sachbearbeiter", defaultSalary: 45000 },
  { value: "Andere", label: "Andere Position", defaultSalary: 50000 },
]

const presets = [20, 25, 30]

export default function VacancyCostCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>(defaultValues)
  const [results, setResults] = useState<{
    recruitingCost: number
    fixedPrice: number
    saving: number
    savingPct: number
  } | null>(null)
  const [showResults, setShowResults] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    if (name === "position") {
      const selectedPosition = positionOptions.find((option) => option.value === value)
      setInputs((prev) => ({
        ...prev,
        [name]: value,
        salary: selectedPosition ? selectedPosition.defaultSalary.toString() : prev.salary,
      }))
    } else {
      if (name === "salary" || name === "recruitingCosts") {
        if (value === "" || /^\d*$/.test(value)) {
          setInputs((prev) => ({
            ...prev,
            [name]: value,
          }))
        }
      } else {
        setInputs((prev) => ({
          ...prev,
          [name]: value,
        }))
      }
    }
  }

  const applyPreset = (pct: number) => {
    setInputs((prev) => ({ ...prev, recruitingCosts: String(pct) }))
  }

  const calculateCosts = () => {
    const salary = Number(inputs.salary) || 0
    const recruitingPct = Number(inputs.recruitingCosts) || 0
    const recruitingCost = Math.round((salary * recruitingPct) / 100)
    const fixedPrice = 9999
    const saving = Math.max(0, recruitingCost - fixedPrice)
    const savingPct = recruitingCost > 0 ? Math.round((saving / recruitingCost) * 100) : 0

    setResults({
      recruitingCost,
      fixedPrice,
      saving,
      savingPct,
    })

    setShowResults(true)
  }

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(value)

  const chartData = results && [
    { name: "Provision", value: results.recruitingCost },
    { name: "Festpreis", value: results.fixedPrice },
  ]

  return (
    <section id="calculator" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="section-title">Vakanzkosten- und Provisionsvergleich</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Vergleichen Sie klassische Provisionsmodelle mit unserem Fixpreis – relevant für Berlin, Hamburg, München,
            Frankfurt, Köln, Wiesbaden & NRW.
          </p>
        </div>

        <div
          className={`transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-primary p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white flex items-center">
                <Calculator className="mr-3 h-6 w-6" /> Kosten einer Besetzung berechnen
              </h3>
            </div>

            <div className="p-4 sm:p-5 md:p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
                <div>
                  <div className="mb-5">
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Position
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={inputs.position}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    >
                      {positionOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Jahresgehalt (brutto)
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="salary"
                        name="salary"
                        value={inputs.salary}
                        onChange={handleInputChange}
                        pattern="[0-9]*"
                        inputMode="numeric"
                        className="w-full px-3 py-2.5 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                        aria-label="Jahresgehalt in Euro"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-500">€</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-6">
                    <label htmlFor="recruitingCosts" className="block text-sm font-medium text-gray-700 mb-1">
                      Rekrutierungskosten (% vom Jahresgehalt)
                    </label>
                    <div className="flex items-center gap-2 mb-2">
                      {presets.map((p) => (
                        <button
                          key={p}
                          type="button"
                          className={`px-3 py-1.5 rounded-md text-sm border transition-colors ${
                            Number(inputs.recruitingCosts) === p
                              ? "bg-accent text-white border-accent"
                              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                          }`}
                          onClick={() => applyPreset(p)}
                          aria-pressed={Number(inputs.recruitingCosts) === p}
                        >
                          {p}%
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        id="recruitingCosts"
                        name="recruitingCosts"
                        value={inputs.recruitingCosts}
                        onChange={handleInputChange}
                        pattern="[0-9]*"
                        inputMode="numeric"
                        min="0"
                        max="100"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                        aria-label="Prozent der Rekrutierungskosten"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-500">%</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={calculateCosts}
                      className="w-full bg-accent hover:bg-accent-light text-white font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center"
                    >
                      Kosten berechnen <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {showResults && results && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-lg sm:text-xl font-bold text-primary mb-4">Ergebnis der Berechnung</h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-xs sm:text-sm text-gray-600 mb-1">Kosten bei regulärer Personalvermittlung</p>
                      <p className="text-lg sm:text-xl font-bold text-primary">
                        {formatCurrency(results.recruitingCost)}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Basierend auf {inputs.recruitingCosts}% vom Jahresgehalt
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-xs sm:text-sm text-gray-600 mb-1">Kosten mit Lacar Associate (Festpreis)</p>
                      <p className="text-lg sm:text-xl font-bold text-accent">{formatCurrency(results.fixedPrice)}</p>
                      <p className="text-xs text-gray-500 mt-1">Unabhängig vom Gehalt</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-accent/10 p-4 sm:p-5 md:p-6 rounded-lg">
                      <div className="flex items-start">
                        <div className="bg-accent rounded-full p-1.5 sm:p-2 mr-3 sm:mr-4 flex-shrink-0 mt-0.5">
                          <Info className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                        </div>
                        <div>
                          <h5 className="text-base sm:text-lg font-bold text-accent mb-2">
                            Ihr Sparpotenzial – auch in Berlin, Hamburg, München & NRW
                          </h5>
                          <p className="mb-2 sm:mb-3 text-sm sm:text-base">
                            Mit unserem Festpreis von <span className="font-bold">9.999 € netto</span> sparen Sie:
                          </p>
                          <p className="text-lg sm:text-xl md:text-2xl font-bold text-accent">
                            {results.saving > 0
                              ? `${formatCurrency(results.saving)} (${results.savingPct}%)`
                              : "Keine Ersparnis bei diesem Gehalt"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-3 sm:p-4 md:p-5 rounded-lg border border-gray-200">
                      <ChartContainer
                        config={{
                          value: { label: "Kosten", color: "hsl(var(--chart-1))" },
                        }}
                        className="h-[220px]"
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={chartData || []} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Bar dataKey="value" fill="var(--color-value)" radius={[6, 6, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <a
                      href="/#model"
                      className="text-accent hover:text-accent-light font-medium inline-flex items-center text-sm sm:text-base"
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.getElementById("model")
                        if (element) {
                          const headerOffset = window.innerWidth >= 768 ? 100 : 80
                          const elementPosition = element.getBoundingClientRect().top
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                        }
                      }}
                    >
                      Mehr über unser Festpreis-Modell erfahren <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
