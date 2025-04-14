"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Calculator, ArrowRight, Info } from "lucide-react"

type CalculatorInputs = {
  position: string
  salary: string
  workdays: string
  vacancyDuration: string
  recruitingCosts: string
  onboardingTime: string
  productivityLoss: string
}

const defaultValues: CalculatorInputs = {
  position: "Führungskraft",
  salary: "80000",
  workdays: "220",
  vacancyDuration: "90",
  recruitingCosts: "15",
  onboardingTime: "90",
  productivityLoss: "30",
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
      if (
        name === "salary" ||
        name === "workdays" ||
        name === "vacancyDuration" ||
        name === "recruitingCosts" ||
        name === "onboardingTime" ||
        name === "productivityLoss"
      ) {
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
    const workdays = Number(inputs.workdays) || 220
    const vacancyDuration = Number(inputs.vacancyDuration) || 1
    const recruitingCosts = Number(inputs.recruitingCosts) || 0
    const onboardingTime = Number(inputs.onboardingTime) || 0
    const productivityLoss = Number(inputs.productivityLoss) || 0

    // Täglicher Gehaltswert
    const dailySalary = salary / workdays

    // Direkte Kosten der Vakanz
    const directVacancyCost = dailySalary * vacancyDuration

    // Rekrutierungskosten (% vom Jahresgehalt)
    const recruitingCost = (salary * recruitingCosts) / 100

    // Onboarding-Kosten (reduzierte Produktivität während Einarbeitung)
    const onboardingCost = dailySalary * onboardingTime * (productivityLoss / 100)

    // Gesamtkosten
    const totalCost = directVacancyCost + recruitingCost + onboardingCost

    // Monatliche Kosten
    const monthlyCost = totalCost / (vacancyDuration / 30)

    // Kosten pro Tag
    const dailyCost = totalCost / vacancyDuration

    setResults({
      directVacancyCost: Math.round(directVacancyCost),
      recruitingCost: Math.round(recruitingCost),
      onboardingCost: Math.round(onboardingCost),
      totalCost: Math.round(totalCost),
      monthlyCost: Math.round(monthlyCost),
      dailyCost: Math.round(dailyCost),
      fixedPriceAdvantage: Math.round(totalCost - 9999),
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
          <h2 className="section-title">Vakanzkosten-Rechner | Kosten unbesetzter Stellen berechnen</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Berechnen Sie die tatsächlichen Kosten einer unbesetzten Stelle in Ihrem Unternehmen. Erfahren Sie, wie viel
            Sie mit unserem Festpreis-Modell für Personalvermittlung und Headhunting sparen können.
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

                  <div className="mb-6">
                    <label htmlFor="workdays" className="block text-sm font-medium text-gray-700 mb-1">
                      Arbeitstage pro Jahr
                    </label>
                    <input
                      type="text"
                      id="workdays"
                      name="workdays"
                      value={inputs.workdays}
                      onChange={handleInputChange}
                      pattern="[0-9]*"
                      inputMode="numeric"
                      min="1"
                      max="365"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div className="mb-6 md:mb-0">
                    <label htmlFor="vacancyDuration" className="block text-sm font-medium text-gray-700 mb-1">
                      Voraussichtliche Vakanzdauer (Tage)
                    </label>
                    <input
                      type="text"
                      id="vacancyDuration"
                      name="vacancyDuration"
                      value={inputs.vacancyDuration}
                      onChange={handleInputChange}
                      pattern="[0-9]*"
                      inputMode="numeric"
                      min="1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    />
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

                  <div className="mb-6">
                    <label htmlFor="onboardingTime" className="block text-sm font-medium text-gray-700 mb-1">
                      Einarbeitungszeit (Tage)
                    </label>
                    <input
                      type="text"
                      id="onboardingTime"
                      name="onboardingTime"
                      value={inputs.onboardingTime}
                      onChange={handleInputChange}
                      pattern="[0-9]*"
                      inputMode="numeric"
                      min="0"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="productivityLoss" className="block text-sm font-medium text-gray-700 mb-1">
                      Produktivitätsverlust während Einarbeitung (%)
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="productivityLoss"
                        name="productivityLoss"
                        value={inputs.productivityLoss}
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-5 sm:mb-6">
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-xs sm:text-sm text-gray-600 mb-1">Direkte Vakanzkosten</p>
                      <p className="text-lg sm:text-xl font-bold text-primary">
                        {formatCurrency(results.directVacancyCost)}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-xs sm:text-sm text-gray-600 mb-1">Rekrutierungskosten</p>
                      <p className="text-lg sm:text-xl font-bold text-primary">
                        {formatCurrency(results.recruitingCost)}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-xs sm:text-sm text-gray-600 mb-1">Einarbeitungskosten</p>
                      <p className="text-lg sm:text-xl font-bold text-primary">
                        {formatCurrency(results.onboardingCost)}
                      </p>
                    </div>
                  </div>

                  <div className="bg-primary/10 p-4 sm:p-5 md:p-6 rounded-lg mb-5 sm:mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-3 md:mb-0">
                        <p className="text-xs sm:text-sm text-primary mb-1">Gesamtkosten der unbesetzten Stelle</p>
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                          {formatCurrency(results.totalCost)}
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0 md:text-right">
                        <p className="text-xs sm:text-sm text-gray-600 mb-1">Das entspricht pro</p>
                        <p className="text-sm sm:text-base font-medium">
                          Monat: <span className="font-bold">{formatCurrency(results.monthlyCost)}</span>
                          <br className="inline md:hidden" /> Tag:{" "}
                          <span className="font-bold">{formatCurrency(results.dailyCost)}</span>
                        </p>
                      </div>
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
                          {formatCurrency(results.fixedPriceAdvantage)}
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
