"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import { useState } from "react"

export function ActivityChart() {
  const [loading, setLoading] = useState(false)

  const handleRefresh = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
  }

  return (
    <Card className="col-span-3">
      <CardHeader className="flex flex-row items-center">
        <div className="flex-1">
          <CardTitle>Aktivitätsübersicht</CardTitle>
          <CardDescription>Nachrichtenvolumen und Antwortzeiten</CardDescription>
        </div>
        <Button variant="outline" size="icon" onClick={handleRefresh} disabled={loading}>
          <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="weekly">Wöchentlich</TabsTrigger>
              <TabsTrigger value="monthly">Monatlich</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="weekly" className="space-y-4">
            <div className="h-[300px] w-full">
              {/* Hier würde normalerweise ein echtes Chart stehen */}
              <div className="w-full h-full bg-gradient-to-r from-pink-100 to-blue-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-medium text-gray-700">Wöchentliche Aktivitätsübersicht</div>
                  <div className="text-sm text-gray-500 mt-2">
                    Dieses Chart zeigt Ihre wöchentliche Nachrichtenaktivität und Antwortzeiten
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="monthly" className="space-y-4">
            <div className="h-[300px] w-full">
              {/* Hier würde normalerweise ein echtes Chart stehen */}
              <div className="w-full h-full bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-medium text-gray-700">Monatliche Aktivitätsübersicht</div>
                  <div className="text-sm text-gray-500 mt-2">
                    Dieses Chart zeigt Ihre monatliche Nachrichtenaktivität und Antwortzeiten
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
