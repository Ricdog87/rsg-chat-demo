"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw, Download } from "lucide-react"

export function ResponseTimeChart() {
  const [loading, setLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const chartRef = useRef<HTMLDivElement>(null)

  const handleRefresh = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
  }

  useEffect(() => {
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

  // Beispieldaten für das Balkendiagramm
  const barData = [
    { day: "Mon", value: 12 },
    { day: "Tue", value: 8 },
    { day: "Wed", value: 15 },
    { day: "Thu", value: 6 },
    { day: "Fri", value: 10 },
    { day: "Sat", value: 24 },
    { day: "Sun", value: 32 },
  ]

  // Finde den maximalen Wert für die Skalierung
  const maxValue = Math.max(...barData.map((item) => item.value))

  return (
    <Card
      className={`overflow-hidden transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      ref={chartRef}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-base">Reaktionszeit</CardTitle>
          <CardDescription>Durchschnittliche Zeit bis zur ersten Antwort (Minuten)</CardDescription>
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
        <div className="h-[300px] w-full relative">
          <div className="absolute inset-0 flex items-end justify-between px-4 pb-8">
            {barData.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="w-12 bg-blue-500 rounded-t-md transition-all duration-1000 ease-out hover:bg-blue-600"
                  style={{
                    height: isVisible ? `${(item.value / maxValue) * 220}px` : "0px",
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div
                    className="text-white text-xs font-medium text-center mt-1 transition-opacity duration-300"
                    style={{ opacity: isVisible ? 1 : 0, transitionDelay: `${index * 100 + 500}ms` }}
                  >
                    {item.value}
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-2">{item.day}</div>
              </div>
            ))}
          </div>

          {/* Y-Axis Labels */}
          <div className="absolute top-0 left-0 bottom-8 flex flex-col justify-between py-4 text-xs text-gray-500">
            <span>32</span>
            <span>24</span>
            <span>16</span>
            <span>8</span>
            <span>0</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
