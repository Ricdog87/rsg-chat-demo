"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import { useState } from "react"

export function TopRequests() {
  const [loading, setLoading] = useState(false)

  const handleRefresh = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
  }

  const requests = [
    { topic: "Produktverfügbarkeit", percentage: 32 },
    { topic: "Lieferstatus", percentage: 24 },
    { topic: "Rückgaben & Umtausch", percentage: 18 },
    { topic: "Technische Probleme", percentage: 15 },
    { topic: "Preisanfragen", percentage: 11 },
  ]

  return (
    <Card className="col-span-1">
      <CardHeader className="flex flex-row items-center">
        <div className="flex-1">
          <CardTitle>Häufigste Anfragen</CardTitle>
          <CardDescription>Top-Themen der Kundenanfragen</CardDescription>
        </div>
        <Button variant="outline" size="icon" onClick={handleRefresh} disabled={loading}>
          <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {requests.map((request) => (
            <div key={request.topic} className="flex items-center justify-between">
              <span className="text-sm">{request.topic}</span>
              <span className="text-sm font-medium">{request.percentage}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
