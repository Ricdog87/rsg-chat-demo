"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, ChevronRight, Filter } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

export function CurrentConversations() {
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState("all")

  const handleRefresh = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
  }

  const conversations = [
    {
      id: "1",
      name: "Maria Schmidt",
      message: "Vielen Dank für die schnelle Antwort! Ich werde morgen vorbeikommen.",
      time: "Vor 5 Min",
      status: "active",
      unread: 3,
      channel: "whatsapp",
    },
    {
      id: "2",
      name: "Thomas Weber",
      message: "Haben Sie die schwarze Variante auch in Größe M?",
      time: "Vor 30 Min",
      status: "active",
      unread: 0,
      channel: "instagram",
    },
    {
      id: "3",
      name: "Laura Müller",
      message: "Perfekt, danke für die Information!",
      time: "Vor 2 Std",
      status: "closed",
      unread: 0,
      channel: "email",
    },
    {
      id: "4",
      name: "Michael Schneider",
      message: "Wann kann ich mit der Lieferung rechnen?",
      time: "Vor 3 Std",
      status: "pending",
      unread: 1,
      channel: "facebook",
    },
    {
      id: "5",
      name: "Sophie Wagner",
      message: "Ich habe Ihre Anfrage erhalten und werde mich darum kümmern.",
      time: "Vor 4 Std",
      status: "active",
      unread: 0,
      channel: "webchat",
    },
  ]

  const filteredConversations =
    filter === "all" ? conversations : conversations.filter((conv) => conv.status === filter)

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case "whatsapp":
        return (
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-green-500">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )
      case "instagram":
        return (
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-pink-500">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        )
      case "facebook":
        return (
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-blue-500">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        )
      case "email":
        return (
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        )
      case "webchat":
        return (
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-purple-500">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-base">Aktuelle Konversationen</CardTitle>
          <CardDescription>Letzte Kundeninteraktionen</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                <span className="hidden sm:inline">Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuCheckboxItem checked={filter === "all"} onCheckedChange={() => setFilter("all")}>
                Alle anzeigen
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked={filter === "active"} onCheckedChange={() => setFilter("active")}>
                Aktiv
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked={filter === "pending"} onCheckedChange={() => setFilter("pending")}>
                Wartend
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked={filter === "closed"} onCheckedChange={() => setFilter("closed")}>
                Geschlossen
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="icon" onClick={handleRefresh} disabled={loading}>
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {filteredConversations.map((conversation) => (
            <div
              key={conversation.id}
              className="flex items-start gap-4 p-4 hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <Avatar>
                <AvatarImage
                  src={`/placeholder.svg?height=40&width=40&text=${conversation.name.charAt(0)}`}
                  alt={conversation.name}
                />
                <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <p className="font-medium">{conversation.name}</p>
                    {getChannelIcon(conversation.channel)}
                  </div>
                  <Badge
                    variant={
                      conversation.status === "active"
                        ? "default"
                        : conversation.status === "pending"
                          ? "secondary"
                          : "outline"
                    }
                    className="ml-auto text-xs"
                  >
                    {conversation.status === "active"
                      ? "Aktiv"
                      : conversation.status === "pending"
                        ? "Wartend"
                        : "Geschlossen"}
                  </Badge>
                  {conversation.unread > 0 && (
                    <Badge variant="destructive" className="text-xs">
                      {conversation.unread}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground truncate mt-1">{conversation.message}</p>
                <p className="text-xs text-muted-foreground mt-1">{conversation.time}</p>
              </div>
              <Button variant="ghost" size="icon" className="mt-1">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <Button variant="outline" className="w-full">
            Alle Konversationen anzeigen
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
