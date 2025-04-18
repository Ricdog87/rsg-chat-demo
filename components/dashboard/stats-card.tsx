"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: string | number
  trend?: {
    value: number
    label: string
  }
  icon?: React.ReactNode
  color?: "green" | "orange" | "blue" | "purple"
  className?: string
}

export function StatsCard({ title, value, trend, icon, color = "blue", className }: StatsCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [displayValue, setDisplayValue] = useState(0)
  const numericValue = typeof value === "string" ? Number.parseFloat(value.replace(/,/g, "")) : value

  // Farbvarianten
  const colorStyles = {
    green: {
      bgLight: "bg-green-50",
      iconBg: "bg-green-100",
      text: "text-green-600",
      trendPositive: "text-green-500",
      trendNegative: "text-red-500",
    },
    orange: {
      bgLight: "bg-orange-50",
      iconBg: "bg-orange-100",
      text: "text-orange-600",
      trendPositive: "text-green-500",
      trendNegative: "text-red-500",
    },
    blue: {
      bgLight: "bg-blue-50",
      iconBg: "bg-blue-100",
      text: "text-blue-600",
      trendPositive: "text-green-500",
      trendNegative: "text-red-500",
    },
    purple: {
      bgLight: "bg-purple-50",
      iconBg: "bg-purple-100",
      text: "text-purple-600",
      trendPositive: "text-green-500",
      trendNegative: "text-red-500",
    },
  }

  const colorClasses = colorStyles[color]

  // Animation für den Zahlenwert
  useEffect(() => {
    setIsVisible(true)

    const animateValue = () => {
      const duration = 1500
      const startTime = Date.now()

      const updateValue = () => {
        const currentTime = Date.now()
        const elapsedTime = currentTime - startTime

        if (elapsedTime < duration) {
          const progress = elapsedTime / duration
          // Easing-Funktion für sanftere Animation
          const easedProgress = 1 - Math.pow(1 - progress, 3)
          setDisplayValue(Math.floor(easedProgress * numericValue))
          requestAnimationFrame(updateValue)
        } else {
          setDisplayValue(numericValue)
        }
      }

      requestAnimationFrame(updateValue)
    }

    if (isVisible && !isNaN(numericValue)) {
      animateValue()
    }
  }, [isVisible, numericValue])

  // Formatiere den Wert als String
  const formattedValue =
    typeof value === "string"
      ? value.includes("%")
        ? `${displayValue}%`
        : displayValue.toLocaleString()
      : displayValue.toLocaleString()

  return (
    <Card
      className={cn(
        "overflow-hidden border transition-all duration-300 hover:shadow-md",
        colorClasses.bgLight,
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className,
      )}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          {icon && (
            <div className={cn("h-10 w-10 rounded-full flex items-center justify-center", colorClasses.iconBg)}>
              {icon}
            </div>
          )}
        </div>
        <div className={cn("text-3xl font-bold", colorClasses.text)}>{formattedValue}</div>
        {trend && (
          <div className="flex items-center gap-1 mt-2">
            <div
              className={cn(
                "text-xs font-medium",
                trend.value >= 0 ? colorClasses.trendPositive : colorClasses.trendNegative,
              )}
            >
              {trend.value >= 0 ? "+" : ""}
              {trend.value}%
            </div>
            <div className="text-xs text-gray-500">{trend.label}</div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
