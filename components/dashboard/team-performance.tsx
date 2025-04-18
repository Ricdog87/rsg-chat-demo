"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TeamPerformance() {
  const [loading, setLoading] = useState(false)

  const handleRefresh = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
  }

  const teamMembers = [
    {
      name: "Anna Müller",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Support Manager",
      responseTime: "2.1 Min",
      satisfaction: 98,
    },
    {
      name: "Thomas Weber",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Kundenberater",
      responseTime: "3.5 Min",
      satisfaction: 95,
    },
    {
      name: "Laura Schmidt",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Kundenberaterin",
      responseTime: "4.2 Min",
      satisfaction: 92,
    },
  ]

  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center">
        <div className="flex-1">
          <CardTitle>Team-Performance</CardTitle>
          <CardDescription>Leistungsübersicht des Support-Teams</CardDescription>
        </div>
        <Button variant="outline" size="icon" onClick={handleRefresh} disabled={loading}>
          <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <Avatar>
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">{member.responseTime}</p>
                <p className="text-sm text-muted-foreground">Antwortzeit</p>
              </div>
              <div className="text-right">
                <p className="font-medium">{member.satisfaction}%</p>
                <p className="text-sm text-muted-foreground">Zufriedenheit</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
