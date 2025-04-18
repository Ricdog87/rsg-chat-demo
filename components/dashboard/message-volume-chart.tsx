"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RefreshCw, Download } from "lucide-react"

export function MessageVolumeChart() {
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("weekly")
  const [isVisible, setIsVisible] = useState(false)
  const chartRef = useRef<HTMLDivElement>(null)

  const handleRefresh = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
  }

  useEffect(() => {
    setIsVisible(true)

    // Intersection Observer für lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (chartRef.current) {
      observer.observe(chartRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  // Beispieldaten für die Charts
  const chartData = {
    weekly: [
      { day: "Mon", value: 45 },
      { day: "Tue", value: 75 },
      { day: "Wed", value: 58 },
      { day: "Thu", value: 90 },
      { day: "Fri", value: 85 },
      { day: "Sat", value: 48 },
      { day: "Sun", value: 30 },
    ],
    daily: [
      { hour: "00:00", value: 15 },
      { hour: "04:00", value: 10 },
      { hour: "08:00", value: 45 },
      { hour: "12:00", value: 80 },
      { hour: "16:00", value: 65 },
      { hour: "20:00", value: 30 },
    ],
    monthly: [
      { month: "Jan", value: 320 },
      { month: "Feb", value: 450 },
      { month: "Mar", value: 380 },
      { month: "Apr", value: 520 },
      { month: "Mai", value: 650 },
      { month: "Jun", value: 580 },
    ],
  }

  return (
    <Card
      className={`overflow-hidden transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      ref={chartRef}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-base">Nachrichtenvolumen</CardTitle>
          <CardDescription>Erhaltene Nachrichten über alle Kanäle</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={handleRefresh} disabled={loading}>
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <Tabs defaultValue="weekly" value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="daily">Täglich</TabsTrigger>
              <TabsTrigger value="weekly">Wöchentlich</TabsTrigger>
              <TabsTrigger value="monthly">Monatlich</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="weekly" className="space-y-4 h-[300px] relative">
            <div className="absolute inset-0 flex items-end justify-between px-4 pt-6">
              <svg className="w-full h-full" viewBox="0 0 700 250" preserveAspectRatio="none">
                {/* Hintergrund-Bereich */}
                <defs>
                  <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#818cf8" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#818cf8" stopOpacity="0.05" />
                  </linearGradient>
                </defs>

                {/* Gitterlinien */}
                <g className="grid-lines">
                  <line x1="0" y1="50" x2="700" y2="50" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="0" y1="100" x2="700" y2="100" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="0" y1="150" x2="700" y2="150" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="0" y1="200" x2="700" y2="200" stroke="#e5e7eb" strokeWidth="1" />
                </g>

                {/* Bereichs-Chart */}
                <path
                  d={`
                    M0,${250 - chartData.weekly[0].value * 2.5}
                    ${chartData.weekly.map((d, i) => `L${i * 100 + 100},${250 - d.value * 2.5}`).join(" ")}
                    L700,250 L0,250 Z
                  `}
                  fill="url(#areaGradient)"
                  className="transition-all duration-1000 ease-out"
                  style={{
                    clipPath: isVisible
                      ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                      : "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
                  }}
                />

                {/* Linienchart */}
                <path
                  d={`
                    M0,${250 - chartData.weekly[0].value * 2.5}
                    ${chartData.weekly.map((d, i) => `L${i * 100 + 100},${250 - d.value * 2.5}`).join(" ")}
                  `}
                  fill="none"
                  stroke="#818cf8"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-1000 ease-out"
                  style={{
                    strokeDasharray: 1000,
                    strokeDashoffset: isVisible ? 0 : 1000,
                  }}
                />

                {/* Datenpunkte */}
                {chartData.weekly.map((d, i) => (
                  <circle
                    key={i}
                    cx={i * 100 + 100}
                    cy={250 - d.value * 2.5}
                    r="5"
                    fill="#818cf8"
                    stroke="white"
                    strokeWidth="2"
                    className="transition-all duration-500"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "scale(1)" : "scale(0)",
                      transformOrigin: "center",
                      transitionDelay: `${i * 100}ms`,
                    }}
                  />
                ))}
              </svg>

              {/* X-Achsen-Beschriftungen */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 text-xs text-gray-500">
                {chartData.weekly.map((d, i) => (
                  <span
                    key={i}
                    style={{
                      marginLeft: i === 0 ? "0" : "",
                      marginRight: i === chartData.weekly.length - 1 ? "0" : "",
                    }}
                  >
                    {d.day}
                  </span>
                ))}
              </div>

              {/* Y-Achsen-Beschriftungen */}
              <div className="absolute top-6 left-2 bottom-6 flex flex-col justify-between text-xs text-gray-500">
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span>0</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="daily" className="space-y-4 h-[300px] relative">
            {/* Ähnlicher Inhalt wie weekly, aber mit täglichen Daten */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              Tägliche Daten werden geladen...
            </div>
          </TabsContent>

          <TabsContent value="monthly" className="space-y-4 h-[300px] relative">
            {/* Ähnlicher Inhalt wie weekly, aber mit monatlichen Daten */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              Monatliche Daten werden geladen...
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
