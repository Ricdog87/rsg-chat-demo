"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Calculator, TrendingUp, Clock, Users, BrainCircuit, Zap, PieChart, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
// Update the import path
// Entferne den Import für useLanguage
// import { useLanguage } from "@/app/contexts/language-context"

// Typen für die Eingabewerte
type CalculatorInputs = {
  employees: number
  avgSalary: number
  workHoursPerWeek: number
  automationPotential: number
  implementationCost: number
  monthlyMaintenanceCost: number
  errorReductionRate: number
}

// Typen für die Ergebnisse
type CalculatorResults = {
  annualLaborCost: number
  automatedHoursPerWeek: number
  automatedHoursPerYear: number
  annualLaborSavings: number
  errorCostSavings: number
  totalAnnualSavings: number
  firstYearSavings: number
  roi: number
  paybackPeriodMonths: number
}

export function KiRoiCalculator() {
  // Standardwerte für die Eingabefelder
  const defaultInputs: CalculatorInputs = {
    employees: 10,
    avgSalary: 60000,
    workHoursPerWeek: 40,
    automationPotential: 20,
    implementationCost: 15000,
    monthlyMaintenanceCost: 500,
    errorReductionRate: 30,
  }

  // State für Eingabewerte und Ergebnisse
  const [inputs, setInputs] = useState<CalculatorInputs>(defaultInputs)
  const [results, setResults] = useState<CalculatorResults | null>(null)
  const [activeTab, setActiveTab] = useState<"inputs" | "results">("inputs")
  // Entferne die Verwendung von useLanguage
  // const { t, language } = useLanguage()

  // Berechnung der Ergebnisse bei Änderung der Eingabewerte
  useEffect(() => {
    calculateResults()
  }, [inputs])

  // Funktion zur Berechnung der Ergebnisse
  const calculateResults = () => {
    // Jährliche Arbeitskosten
    const annualLaborCost = inputs.employees * inputs.avgSalary

    // Automatisierte Stunden pro Woche und Jahr
    const automatedHoursPerWeek = inputs.employees * inputs.workHoursPerWeek * (inputs.automationPotential / 100)
    const automatedHoursPerYear = automatedHoursPerWeek * 48 // 48 Arbeitswochen pro Jahr

    // Stundensatz berechnen (Jahresgehalt / Arbeitsstunden pro Jahr)
    const hourlyRate = inputs.avgSalary / (inputs.workHoursPerWeek * 48)

    // Jährliche Einsparungen durch Automatisierung
    const annualLaborSavings = automatedHoursPerYear * hourlyRate * 0.7 // 70% der Zeit wird tatsächlich eingespart

    // Einsparungen durch Fehlerreduzierung (angenommen 5% der Arbeitskosten sind Fehlerkosten)
    const errorCostSavings = annualLaborCost * 0.05 * (inputs.errorReductionRate / 100)

    // Gesamte jährliche Einsparungen
    const totalAnnualSavings = annualLaborSavings + errorCostSavings

    // Einsparungen im ersten Jahr (abzüglich Implementierungskosten)
    const firstYearSavings = totalAnnualSavings - inputs.implementationCost - inputs.monthlyMaintenanceCost * 12

    // ROI berechnen (Return on Investment)
    const totalInvestment = inputs.implementationCost + inputs.monthlyMaintenanceCost * 12
    const roi = (totalAnnualSavings / totalInvestment) * 100

    // Amortisationszeit in Monaten
    const monthlyNetSavings = totalAnnualSavings / 12 - inputs.monthlyMaintenanceCost
    const paybackPeriodMonths = inputs.implementationCost / monthlyNetSavings

    setResults({
      annualLaborCost,
      automatedHoursPerWeek,
      automatedHoursPerYear,
      annualLaborSavings,
      errorCostSavings,
      totalAnnualSavings,
      firstYearSavings,
      roi,
      paybackPeriodMonths,
    })
  }

  // Handler für Änderungen an den Eingabefeldern
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputs((prev) => ({
      ...prev,
      [name]: Number.parseFloat(value) || 0,
    }))
  }

  // Formatierung von Zahlen als Währung
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(value)
  }

  // Formatierung von Zahlen mit Dezimalstellen
  const formatNumber = (value: number, decimals = 1) => {
    return new Intl.NumberFormat("de-DE", { maximumFractionDigits: decimals }).format(value)
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-card/50 backdrop-blur-sm rounded-xl border border-primary/30 overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-primary/20 p-6 border-b border-primary/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Calculator className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-primary">KI ROI Rechner</h2>
          </div>

          {/* Tabs */}
          <div className="flex bg-background/40 rounded-lg p-1 border border-primary/20">
            <button
              onClick={() => setActiveTab("inputs")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === "inputs" ? "bg-primary text-white" : "hover:bg-primary/10 text-white"
              }`}
            >
              Eingabe
            </button>
            <button
              onClick={() => setActiveTab("results")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === "results" ? "bg-primary text-white" : "hover:bg-primary/10 text-white"
              }`}
            >
              Ergebnisse
            </button>
          </div>
        </div>
        <p className="mt-2 text-sm text-white">
          Berechnen Sie, wie viel Ihr Unternehmen durch den Einsatz von KI-Lösungen und Automatisierung sparen kann.
        </p>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === "inputs" ? (
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
              {/* Employees */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="employees" className="text-sm font-medium flex items-center">
                    <Users className="mr-2 h-4 w-4 text-primary" />
                    Mitarbeiter
                  </label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-primary/70" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">
                          Geben Sie die Anzahl der Mitarbeiter ein, deren Arbeitsprozesse automatisiert werden könnten.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <input
                  type="number"
                  id="employees"
                  name="employees"
                  value={inputs.employees}
                  onChange={handleInputChange}
                  min="1"
                  className="w-full rounded-md border border-input bg-background/70 px-3 py-2 text-sm text-white placeholder:text-gray-400 backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Average Annual Salary */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="avgSalary" className="text-sm font-medium flex items-center">
                    <TrendingUp className="mr-2 h-4 w-4 text-primary" />
                    Durchschnittliches Jahresgehalt
                  </label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-primary/70" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">
                          Geben Sie das durchschnittliche Jahresgehalt der betroffenen Mitarbeiter ein.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <input
                  type="number"
                  id="avgSalary"
                  name="avgSalary"
                  value={inputs.avgSalary}
                  onChange={handleInputChange}
                  min="0"
                  step="1000"
                  className="w-full rounded-md border border-input bg-background/70 px-3 py-2 text-sm text-white placeholder:text-gray-400 backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Work Hours per Week */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="workHoursPerWeek" className="text-sm font-medium flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-primary" />
                    Arbeitsstunden pro Woche
                  </label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-primary/70" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">
                          Geben Sie die durchschnittliche Anzahl der Arbeitsstunden pro Woche ein.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <input
                  type="number"
                  id="workHoursPerWeek"
                  name="workHoursPerWeek"
                  value={inputs.workHoursPerWeek}
                  onChange={handleInputChange}
                  min="1"
                  max="60"
                  className="w-full rounded-md border border-input bg-background/70 px-3 py-2 text-sm text-white placeholder:text-gray-400 backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Automation Potential */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="automationPotential" className="text-sm font-medium flex items-center">
                    <Zap className="mr-2 h-4 w-4 text-primary" />
                    Automatisierungspotenzial
                  </label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-primary/70" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">
                          Wie viel Prozent der aktuellen Aufgaben können durch KI und Automatisierung übernommen werden?
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <input
                  type="range"
                  id="automationPotential"
                  name="automationPotential"
                  value={inputs.automationPotential}
                  onChange={handleInputChange}
                  min="5"
                  max="50"
                  step="5"
                  className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-white">
                  <span>5%</span>
                  <span>{inputs.automationPotential}%</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Implementation Cost */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="implementationCost" className="text-sm font-medium flex items-center">
                    <BrainCircuit className="mr-2 h-4 w-4 text-primary" />
                    Implementierungskosten
                  </label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-primary/70" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">
                          Welche einmaligen Kosten entstehen für die Implementierung der KI-Lösung?
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <input
                  type="number"
                  id="implementationCost"
                  name="implementationCost"
                  value={inputs.implementationCost}
                  onChange={handleInputChange}
                  min="0"
                  step="1000"
                  className="w-full rounded-md border border-input bg-background/70 px-3 py-2 text-sm text-white placeholder:text-gray-400 backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Monthly Maintenance Cost */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="monthlyMaintenanceCost" className="text-sm font-medium flex items-center">
                    <PieChart className="mr-2 h-4 w-4 text-primary" />
                    Monatliche Wartungskosten
                  </label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-primary/70" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">
                          Welche laufenden monatlichen Kosten entstehen für die Wartung und den Betrieb der KI-Lösung?
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <input
                  type="number"
                  id="monthlyMaintenanceCost"
                  name="monthlyMaintenanceCost"
                  value={inputs.monthlyMaintenanceCost}
                  onChange={handleInputChange}
                  min="0"
                  step="100"
                  className="w-full rounded-md border border-input bg-background/70 px-3 py-2 text-sm text-white placeholder:text-gray-400 backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Error Reduction Rate */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="errorReductionRate" className="text-sm font-medium flex items-center">
                    <Zap className="mr-2 h-4 w-4 text-primary" />
                    Fehlerreduktionsrate
                  </label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-primary/70" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Um wie viel Prozent reduziert die KI-Lösung Fehler und Nacharbeit?</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <input
                  type="range"
                  id="errorReductionRate"
                  name="errorReductionRate"
                  value={inputs.errorReductionRate}
                  onChange={handleInputChange}
                  min="10"
                  max="70"
                  step="5"
                  className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-white">
                  <span>10%</span>
                  <span>{inputs.errorReductionRate}%</span>
                  <span>70%</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setActiveTab("results")}
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90 shadow-md hover:shadow-lg"
              >
                Ergebnisse anzeigen
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {results && (
              <>
                {/* Main Results */}
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
                  <div className="rounded-lg border border-primary/30 bg-primary/20 p-4 text-center print-visible shadow-md">
                    <h3 className="text-lg font-semibold text-primary">Jährliche Einsparungen</h3>
                    <p className="mt-2 text-3xl font-bold text-white">{formatCurrency(results.totalAnnualSavings)}</p>
                    <p className="mt-1 text-sm text-white font-medium">
                      Gesamte jährliche Einsparungen durch Automatisierung und Fehlerreduktion.
                    </p>
                  </div>
                  <div className="rounded-lg border border-primary/30 bg-primary/20 p-4 text-center print-visible shadow-md">
                    <h3 className="text-lg font-semibold text-primary">ROI</h3>
                    <p className="mt-2 text-3xl font-bold text-white">{formatNumber(results.roi)}%</p>
                    <p className="mt-1 text-sm text-white font-medium">Return on Investment (ROI) der KI-Lösung.</p>
                  </div>
                  <div className="rounded-lg border border-primary/30 bg-primary/20 p-4 text-center print-visible shadow-md">
                    <h3 className="text-lg font-semibold text-primary">Amortisationszeit</h3>
                    <p className="mt-2 text-3xl font-bold text-white">
                      {formatNumber(results.paybackPeriodMonths)} Monate
                    </p>
                    <p className="mt-1 text-sm text-white font-medium">
                      Zeitraum, bis sich die Investition in die KI-Lösung amortisiert hat.
                    </p>
                  </div>
                </div>

                {/* Detailed Results */}
                <div className="rounded-lg border border-primary/30 bg-card/50 p-6 shadow-md">
                  <h3 className="mb-4 text-xl font-semibold text-primary">Detaillierte Analyse</h3>
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium text-primary">Zeiteinsparungen</h4>
                        <p className="mt-1 text-sm text-white font-medium">
                          <span className="font-semibold">{formatNumber(results.automatedHoursPerWeek)}</span> Stunden
                          pro Woche
                        </p>
                        <p className="mt-1 text-sm text-white font-medium">
                          <span className="font-semibold">{formatNumber(results.automatedHoursPerYear)}</span> Stunden
                          pro Jahr
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-primary">Kosteneinsparungen</h4>
                        <p className="mt-1 text-sm text-white font-medium">
                          <span className="font-semibold">{formatCurrency(results.annualLaborSavings)}</span> durch
                          Zeiteinsparungen
                        </p>
                        <p className="mt-1 text-sm text-white font-medium">
                          <span className="font-semibold">{formatCurrency(results.errorCostSavings)}</span> durch
                          Fehlerreduktion
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-primary/10">
                      <h4 className="text-sm font-medium text-primary">Investitionsrendite</h4>
                      <div className="mt-2 grid gap-2 sm:grid-cols-1 md:grid-cols-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-white">Implementierungskosten</span>
                          <span className="text-sm font-semibold text-white">
                            {formatCurrency(inputs.implementationCost)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-white">Jährliche Wartungskosten</span>
                          <span className="text-sm font-semibold text-white">
                            {formatCurrency(inputs.monthlyMaintenanceCost * 12)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-white">Einsparungen im ersten Jahr</span>
                          <span className="text-sm font-semibold text-white">
                            {formatCurrency(results.firstYearSavings)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-white">Einsparungen im zweiten Jahr</span>
                          <span className="text-sm font-semibold text-white">
                            {formatCurrency(results.totalAnnualSavings - inputs.monthlyMaintenanceCost * 12)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Benefits */}
                <div className="rounded-lg border border-primary/20 bg-card/30 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-primary">Zusätzliche Vorteile</h3>
                  <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                    <div className="flex items-start">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <TrendingUp className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-primary">Produktivitätssteigerung</h4>
                        <p className="mt-1 text-xs text-white">
                          Mitarbeiter können sich auf wichtigere Aufgaben konzentrieren.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Users className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-primary">Mitarbeiterzufriedenheit</h4>
                        <p className="mt-1 text-xs text-white">
                          Weniger repetitive Aufgaben führen zu höherer Zufriedenheit.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Zap className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-primary">Bessere Entscheidungsfindung</h4>
                        <p className="mt-1 text-xs text-white">
                          KI-gestützte Analysen ermöglichen fundiertere Entscheidungen.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <BrainCircuit className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-primary">Wettbewerbsvorteil</h4>
                        <p className="mt-1 text-xs text-white">Innovation und Effizienzsteigerung durch KI-Einsatz.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-between">
                  <button
                    onClick={() => setActiveTab("inputs")}
                    className="rounded-md border border-primary bg-transparent px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
                  >
                    Parameter anpassen
                  </button>
                  <button
                    onClick={() => {
                      // Add a class to the body before printing
                      document.body.classList.add("printing")
                      // Print the page
                      window.print()
                      // Remove the class after printing
                      setTimeout(() => {
                        document.body.classList.remove("printing")
                      }, 500)
                    }}
                    className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90 shadow-md hover:shadow-lg"
                  >
                    Ergebnisse speichern
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
