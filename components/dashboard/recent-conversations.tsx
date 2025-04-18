"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { mockContacts, mockConversations } from "@/lib/mock-data"

export function RecentConversations() {
  const [loading, setLoading] = useState(false)

  const handleRefresh = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
  }

  // Kombiniere Konversationen mit Kontaktdaten
  const conversations = mockConversations.slice(0, 5).map((conversation) => {
    const contact = mockContacts.find((c) => c.id === conversation.contact_id)
    return {
      ...conversation,
      contact,
    }
  })

  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center">
        <div className="flex-1">
          <CardTitle>Aktuelle Konversationen</CardTitle>
          <CardDescription>Neueste Kundengespräche</CardDescription>
        </div>
        <Button variant="outline" size="icon" onClick={handleRefresh} disabled={loading}>
          <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <Avatar>
                <AvatarImage
                  src={`/placeholder.svg?height=40&width=40&text=${conversation.contact?.name.charAt(0)}`}
                  alt={conversation.contact?.name}
                />
                <AvatarFallback>{conversation.contact?.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-medium">{conversation.contact?.name}</p>
                  <Badge
                    variant={
                      conversation.status === "active"
                        ? "default"
                        : conversation.status === "pending"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {conversation.status === "active"
                      ? "Aktiv"
                      : conversation.status === "pending"
                        ? "Wartend"
                        : "Geschlossen"}
                  </Badge>
                  {conversation.unread_count > 0 && (
                    <Badge variant="destructive" className="ml-auto">
                      {conversation.unread_count} neu
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground truncate mt-1">{conversation.last_message}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {new Date(conversation.last_updated).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full mt-2">
            Alle Konversationen anzeigen
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
