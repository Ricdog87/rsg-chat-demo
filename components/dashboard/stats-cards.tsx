"use client"

import { MessageSquare, Clock, BarChart } from "lucide-react"
import { StatsCard } from "@/components/dashboard/stats-card"

export function StatsCards() {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <StatsCard
        title="Gesamtnachrichten"
        value="8,432"
        trend={{ value: 18, label: "im Vergleich zum Vormonat" }}
        color="blue"
        icon={<MessageSquare className="h-5 w-5 text-blue-600" />}
        className="transition-all duration-300 delay-0"
      />
      <StatsCard
        title="Durchschnittliche Reaktionszeit"
        value="12m"
        trend={{ value: 3, label: "im Vergleich zum Vormonat" }}
        color="orange"
        icon={<Clock className="h-5 w-5 text-orange-600" />}
        className="transition-all duration-300 delay-100"
      />
      <StatsCard
        title="Konversionsrate"
        value="24%"
        trend={{ value: 2, label: "im Vergleich zum Vormonat" }}
        color="green"
        icon={<BarChart className="h-5 w-5 text-green-600" />}
        className="transition-all duration-300 delay-200"
      />
    </div>
  )
}
