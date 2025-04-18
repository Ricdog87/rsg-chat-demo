"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { RefreshCw, ArrowUp, MessageSquare, Clock, PieChart } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function LiveAnalytics() {
  const [data, setData] = useState({
    totalMessages: 8432,
    responseTime: 12,
    conversionRate: 24,
    channelDistribution: {
      whatsapp: 65,
      instagram: 20,
      facebook: 10,
      email: 5,
    },
    topRequests: {
      productAvailability: 35,
      openingHours: 25,
      pricing: 20,
      deliveryTimes: 15,
      other: 5,
    },
    teamPerformance: [
      { name: "Anna Meyer", time: 8, performance: 95 },
      { name: "Max Schulz", time: 12, performance: 85 },
      { name: "Julia Becker", time: 15, performance: 75 },
      { name: "David Krause", time: 18, performance: 65 },
    ],
    lastUpdated: new Date(),
  })

  const [loading, setLoading] = useState(false)
  const [autoRefresh, setAutoRefresh] = useState(false)

  useEffect(() => {
    if (!autoRefresh) return

    const interval = setInterval(() => {
      updateData()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoRefresh])

  const updateData = () => {
    setLoading(true)

    setTimeout(() => {
      setData((prevData) => {
        const randomChange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
        const randomPercentage = (value) => {
          const change = value * (randomChange(-5, 5) / 100)
          return Math.max(0, Math.min(100, value + change))
        }

        return {
          totalMessages: prevData.totalMessages + randomChange(-10, 20),
          responseTime: Math.max(1, prevData.responseTime + randomChange(-2, 2)),
          conversionRate: Math.max(1, Math.min(100, prevData.conversionRate + randomChange(-2, 2))),
          channelDistribution: {
            whatsapp: randomPercentage(prevData.channelDistribution.whatsapp),
            instagram: randomPercentage(prevData.channelDistribution.instagram),
            facebook: randomPercentage(prevData.channelDistribution.facebook),
            email: randomPercentage(prevData.channelDistribution.email),
          },
          topRequests: {
            productAvailability: randomPercentage(prevData.topRequests.productAvailability),
            openingHours: randomPercentage(prevData.topRequests.openingHours),
            pricing: randomPercentage(prevData.topRequests.pricing),
            deliveryTimes: randomPercentage(prevData.topRequests.deliveryTimes),
            other: randomPercentage(prevData.topRequests.other),
          },
          teamPerformance: prevData.teamPerformance.map((member) => ({
            ...member,
            time: Math.max(1, member.time + randomChange(-2, 2)),
            performance: Math.max(1, Math.min(100, member.performance + randomChange(-3, 3))),
          })),
          lastUpdated: new Date(),
        }
      })
      setLoading(false)
    }, 1000)
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString("de-DE", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-bold">Echtzeit-Analysen</h2>
          <span className="text-sm text-gray-500">Letzte Aktualisierung: {formatTime(data.lastUpdated)}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            className={autoRefresh ? "bg-green-50 text-green-700" : ""}
            onClick={() => setAutoRefresh(!autoRefresh)}
          >
            {autoRefresh ? "Auto-Aktualisierung aktiv" : "Auto-Aktualisierung"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={updateData}
            disabled={loading}
            className="flex items-center gap-2"
          >
            {loading ? <RefreshCw className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
            Aktualisieren
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Gesamtnachrichten</p>
                <h3 className="text-3xl font-bold mt-1">{data.totalMessages.toLocaleString()}</h3>
                <p className="text-sm text-green-600 mt-1 flex items-center">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  +18% im Vergleich zum Vormonat
                </p>
              </div>
              <div className="bg-pink-100 p-2 rounded-lg">
                <MessageSquare className="h-6 w-6 text-pink-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Durchschnittliche Reaktionszeit</p>
                <h3 className="text-3xl font-bold mt-1">{data.responseTime}m</h3>
                <p className="text-sm text-amber-600 mt-1 flex items-center">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  +3m im Vergleich zum Vormonat
                </p>
              </div>
              <div className="bg-amber-100 p-2 rounded-lg">
                <Clock className="h-6 w-6 text-amber-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Konversionsrate</p>
                <h3 className="text-3xl font-bold mt-1">{data.conversionRate}%</h3>
                <p className="text-sm text-green-600 mt-1 flex items-center">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  +2% im Vergleich zum Vormonat
                </p>
              </div>
              <div className="bg-green-100 p-2 rounded-lg">
                <PieChart className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Kanalverteilung</CardTitle>
            <CardDescription>Nachrichtenvolumen nach Kanal</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span>WhatsApp</span>
                  </div>
                  <span className="text-sm font-medium">{data.channelDistribution.whatsapp.toFixed(1)}%</span>
                </div>
                <Progress value={data.channelDistribution.whatsapp} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                    <span>Instagram</span>
                  </div>
                  <span className="text-sm font-medium">{data.channelDistribution.instagram.toFixed(1)}%</span>
                </div>
                <Progress value={data.channelDistribution.instagram} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <span>Facebook</span>
                  </div>
                  <span className="text-sm font-medium">{data.channelDistribution.facebook.toFixed(1)}%</span>
                </div>
                <Progress value={data.channelDistribution.facebook} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-gray-500 mr-2"></div>
                    <span>E-Mail</span>
                  </div>
                  <span className="text-sm font-medium">{data.channelDistribution.email.toFixed(1)}%</span>
                </div>
                <Progress value={data.channelDistribution.email} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Häufige Anfragen</CardTitle>
            <CardDescription>Top Themen nach Häufigkeit</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span>Produktverfügbarkeit</span>
                  <span className="text-sm font-medium">{data.topRequests.productAvailability.toFixed(1)}%</span>
                </div>
                <Progress value={data.topRequests.productAvailability} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <span>Öffnungszeiten</span>
                  <span className="text-sm font-medium">{data.topRequests.openingHours.toFixed(1)}%</span>
                </div>
                <Progress value={data.topRequests.openingHours} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <span>Preisanfragen</span>
                  <span className="text-sm font-medium">{data.topRequests.pricing.toFixed(1)}%</span>
                </div>
                <Progress value={data.topRequests.pricing} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <span>Lieferzeiten</span>
                  <span className="text-sm font-medium">{data.topRequests.deliveryTimes.toFixed(1)}%</span>
                </div>
                <Progress value={data.topRequests.deliveryTimes} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <span>Sonstiges</span>
                  <span className="text-sm font-medium">{data.topRequests.other.toFixed(1)}%</span>
                </div>
                <Progress value={data.topRequests.other} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Team Performance</CardTitle>
            <CardDescription>Reaktionszeiten nach Teammitglied</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {data.teamPerformance.map((member, index) => (
                <div key={index} className="flex items-center">
                  <Avatar className="h-8 w-8 mr-3">
                    <AvatarFallback className="bg-pink-100 text-pink-800">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{member.name}</span>
                      <span className="text-sm">{member.time}m</span>
                    </div>
                    <Progress value={member.performance} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
