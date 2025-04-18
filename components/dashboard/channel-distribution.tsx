"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw, Download } from "lucide-react"
import { useState } from "react"

export function ChannelDistribution() {
  const [loading, setLoading] = useState(false)

  const handleRefresh = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
  }

  const channels = [
    { name: "WhatsApp", percentage: 45, color: "bg-green-500" },
    { name: "Instagram", percentage: 25, color: "bg-pink-500" },
    { name: "Facebook", percentage: 15, color: "bg-blue-500" },
    { name: "Email", percentage: 10, color: "bg-gray-500" },
    { name: "Webchat", percentage: 5, color: "bg-purple-500" },
  ]

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-base">Kanalverteilung</CardTitle>
          <CardDescription>Nachrichtenvolumen nach Kanal</CardDescription>
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
        <div className="space-y-4">
          {channels.map((channel) => (
            <div key={channel.name} className="space-y-1">
              <div className="flex justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className={`inline-block w-3 h-3 rounded-full ${channel.color}`}></span>
                  <span>{channel.name}</span>
                </div>
                <span className="font-medium">{channel.percentage}%</span>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${channel.color} transition-all duration-1000 ease-out`}
                  style={{
                    width: `${channel.percentage}%`,
                    animation: "growRight 1.5s ease-out forwards",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
