"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Calculator, ArrowRight, Info } from "lucide-react"

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

const VacancyCostCalculator = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>(defaultValues)
  const [results, setResults] = useState<any>(null)
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
      // Für numerische Felder: Nur Zahlen und leere Strings erlauben
      if (name === "salary" || name === "recruitingCosts") {
        // Erlaubt leere Strings und Zahlen
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

  const calculateCosts = () => {
    // Konvertieren der String-Werte in Zahlen für die Berechnung
    const salary = Number(inputs.salary) || 0
    const recruitingCosts = Number(inputs.recruitingCosts) || 0

    // Rekrutierungskosten (% vom Jahresgehalt)
    const recruitingCost = (salary * recruitingCosts) / 100

    // Gesamtkosten
    const totalCost = recruitingCost

    // Fixpreis von Lacar Associate
    const fixedPrice = 9999

    // Ersparnis
    const fixedPriceAdvantage = Math.round(totalCost - fixedPrice)

    setResults({
      recruitingCost: Math.round(recruitingCost),
      totalCost: Math.round(totalCost),
      fixedPrice: fixedPrice,
      fixedPriceAdvantage: fixedPriceAdvantage,
    })

    setShowResults(true)
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(value)
  }

  return (
    <section id="calculator" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="section-title">Kostenvergleich | Personalvermittlung zum Festpreis vs. Provision</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Vergleichen Sie die Kosten einer klassischen Personalvermittlung mit Provision und unserem transparenten
            Festpreis-Modell. Sehen Sie auf einen Blick, wie viel Sie mit Lacar Associate sparen können.
          </p>
        </div>

        <div
          className={`transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-primary p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white flex items-center">
                <Calculator className="mr-3 h-6 w-6" /> Kosten einer unbesetzten Stelle berechnen
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
                      <p className="text-xs sm:text-sm text-gray-600 mb-1">Kosten mit Lacar Associate</p>
                      <p className="text-lg sm:text-xl font-bold text-accent">{formatCurrency(results.fixedPrice)}</p>
                      <p className="text-xs text-gray-500 mt-1">Festpreis unabhängig vom Gehalt</p>
                    </div>
                  </div>

                  <div className="bg-accent/10 p-4 sm:p-5 md:p-6 rounded-lg">
                    <div className="flex items-start">
                      <div className="bg-accent rounded-full p-1.5 sm:p-2 mr-3 sm:mr-4 flex-shrink-0 mt-0.5">
                        <Info className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <div>
                        <h5 className="text-base sm:text-lg font-bold text-accent mb-2">
                          Ihr Sparpotenzial mit Lacar Associate
                        </h5>
                        <p className="mb-2 sm:mb-3 text-sm sm:text-base">
                          Mit unserem Festpreis-Modell von nur <span className="font-bold">9.999 € netto</span> für die
                          erfolgreiche Besetzung Ihrer Vakanz sparen Sie:
                        </p>
                        <p className="text-lg sm:text-xl md:text-2xl font-bold text-accent">
                          {results.fixedPriceAdvantage > 0
                            ? formatCurrency(results.fixedPriceAdvantage)
                            : "Keine Ersparnis bei diesem Gehalt"}
                        </p>
                        <p className="mt-3 sm:mt-4">
                          <a
                            href="#model"
                            className="text-accent hover:text-accent-light font-medium inline-flex items-center text-sm sm:text-base"
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
                          >
                            Mehr über unser Festpreis-Modell erfahren{" "}
                            <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                          </a>
                        </p>
                      </div>
                    </div>
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

export default VacancyCostCalculator
