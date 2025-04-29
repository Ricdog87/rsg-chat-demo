"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Calculator, TrendingUp, Clock, Users, BrainCircuit, Zap, PieChart, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
// Update the import path
import { useLanguage } from "@/app/contexts/language-context"

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
  const { t, language } = useLanguage()

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
            <h2 className="text-2xl font-bold text-primary">{t("roi-calculator-title")}</h2>
          </div>

          {/* Tabs */}
          <div className="flex bg-background/40 rounded-lg p-1 border border-primary/20">
            <button
              onClick={() => setActiveTab("inputs")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === "inputs" ? "bg-primary text-white" : "hover:bg-primary/10 text-white"
              }`}
            >
              {t("input")}
            </button>
            <button
              onClick={() => setActiveTab("results")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === "results" ? "bg-primary text-white" : "hover:bg-primary/10 text-white"
              }`}
            >
              {t("results")}
            </button>
          </div>
        </div>
        <p className="mt-2 text-sm text-white">{t("calculator-intro")}</p>
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
                    {t("employees")}
                  </label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-primary/70" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">{t("employees-tooltip")}</p>
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
                    {t("avg-salary")}
                  </label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-primary/70" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">{t("avg-salary-tooltip")}</p>
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
                    {t("work-hours")}
                  </label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-primary/70" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">{t("work-hours-tooltip")}</p>
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
                    {t("automation-potential")}
                  </label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-primary/70" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">{t("automation-potential-tooltip")}</p>
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
                    {t("implementation-cost")}
                  </label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-primary/70" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">{t("implementation-cost-tooltip")}</p>
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
                    {t("maintenance-cost")}
                  </label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-primary/70" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">{t("maintenance-cost-tooltip")}</p>
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
                    {t("error-reduction")}
                  </label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-primary/70" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">{t("error-reduction-tooltip")}</p>
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
                {t("show-results")}
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
                    <h3 className="text-lg font-semibold text-primary">{t("annual-savings")}</h3>
                    <p className="mt-2 text-3xl font-bold text-white">{formatCurrency(results.totalAnnualSavings)}</p>
                    <p className="mt-1 text-sm text-white font-medium">{t("annual-savings-desc")}</p>
                  </div>
                  <div className="rounded-lg border border-primary/30 bg-primary/20 p-4 text-center print-visible shadow-md">
                    <h3 className="text-lg font-semibold text-primary">{t("roi")}</h3>
                    <p className="mt-2 text-3xl font-bold text-white">{formatNumber(results.roi)}%</p>
                    <p className="mt-1 text-sm text-white font-medium">{t("roi-desc")}</p>
                  </div>
                  <div className="rounded-lg border border-primary/30 bg-primary/20 p-4 text-center print-visible shadow-md">
                    <h3 className="text-lg font-semibold text-primary">{t("payback-period")}</h3>
                    <p className="mt-2 text-3xl font-bold text-white">
                      {formatNumber(results.paybackPeriodMonths)} {t("months")}
                    </p>
                    <p className="mt-1 text-sm text-white font-medium">{t("payback-period-desc")}</p>
                  </div>
                </div>

                {/* Detailed Results */}
                <div className="rounded-lg border border-primary/30 bg-card/50 p-6 shadow-md">
                  <h3 className="mb-4 text-xl font-semibold text-primary">{t("detailed-analysis")}</h3>
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium text-primary">{t("time-savings")}</h4>
                        <p className="mt-1 text-sm text-white font-medium">
                          <span className="font-semibold">{formatNumber(results.automatedHoursPerWeek)}</span>{" "}
                          {t("hours-per-week")}
                        </p>
                        <p className="mt-1 text-sm text-white font-medium">
                          <span className="font-semibold">{formatNumber(results.automatedHoursPerYear)}</span>{" "}
                          {t("hours-per-year")}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-primary">{t("cost-savings")}</h4>
                        <p className="mt-1 text-sm text-white font-medium">
                          <span className="font-semibold">{formatCurrency(results.annualLaborSavings)}</span>{" "}
                          {t("through-time-savings")}
                        </p>
                        <p className="mt-1 text-sm text-white font-medium">
                          <span className="font-semibold">{formatCurrency(results.errorCostSavings)}</span>{" "}
                          {t("through-error-reduction")}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-primary/10">
                      <h4 className="text-sm font-medium text-primary">{t("investment-return")}</h4>
                      <div className="mt-2 grid gap-2 sm:grid-cols-1 md:grid-cols-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-white">{t("implementation-costs")}</span>
                          <span className="text-sm font-semibold text-white">
                            {formatCurrency(inputs.implementationCost)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-white">{t("annual-maintenance")}</span>
                          <span className="text-sm font-semibold text-white">
                            {formatCurrency(inputs.monthlyMaintenanceCost * 12)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-white">{t("first-year-savings")}</span>
                          <span className="text-sm font-semibold text-white">
                            {formatCurrency(results.firstYearSavings)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-white">{t("second-year-savings")}</span>
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
                  <h3 className="mb-4 text-xl font-semibold text-primary">{t("additional-benefits")}</h3>
                  <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                    <div className="flex items-start">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <TrendingUp className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-primary">{t("productivity")}</h4>
                        <p className="mt-1 text-xs text-white">{t("productivity-desc")}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Users className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-primary">{t("satisfaction")}</h4>
                        <p className="mt-1 text-xs text-white">{t("satisfaction-desc")}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Zap className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-primary">{t("decision-making")}</h4>
                        <p className="mt-1 text-xs text-white">{t("decision-making-desc")}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <BrainCircuit className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-primary">{t("competitive-advantage")}</h4>
                        <p className="mt-1 text-xs text-white">{t("competitive-advantage-desc")}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-between">
                  <button
                    onClick={() => setActiveTab("inputs")}
                    className="rounded-md border border-primary bg-transparent px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
                  >
                    {t("adjust-parameters")}
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
                    {t("save-results")}
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
