"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, MoreHorizontal, ChevronDown, Paperclip, Send, Smile } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

export default function InboxPage() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>("1")
  const [messageText, setMessageText] = useState("")

  // Mock-Konversationsdaten
  const conversations = [
    {
      id: "1",
      contact: {
        name: "Ricardo Serrano",
        avatar: "/images/avatar-ricardo.jpg",
        channel: "whatsapp",
      },
      lastMessage:
        "Hallo Ricardo, herzlichen Glückwunsch und willkommen in unserem exklusiven Club hier auf WhatsApp! 🎉",
      time: "01.04.2025",
      unread: false,
    },
    {
      id: "2",
      contact: {
        name: "Maria Schmidt",
        avatar: "/images/avatar-maria.jpg",
        channel: "whatsapp",
      },
      lastMessage: "Vielen Dank für die schnelle Antwort!",
      time: "31.03.2025",
      unread: true,
    },
    {
      id: "3",
      contact: {
        name: "Thomas Weber",
        avatar: "/images/avatar-thomas.jpg",
        channel: "instagram",
      },
      lastMessage: "Haben Sie die schwarze Variante auch in Größe M?",
      time: "30.03.2025",
      unread: false,
    },
  ]

  // Mock-Nachrichten für die ausgewählte Konversation
  const messages = [
    {
      id: "1",
      sender: "system",
      content: "Hallo Ricardo, herzlichen Glückwunsch und willkommen in unserem exklusiven Club hier auf WhatsApp! 🎉",
      time: "01.04.2025 10:30",
    },
    {
      id: "2",
      sender: "system",
      content: "Als kleines Dankeschön erhältst du 10% Rabatt auf deinen nächsten Besuch mit dem Code: *WACLUB24*",
      time: "01.04.2025 10:31",
    },
    {
      id: "3",
      sender: "system",
      content: "Freu dich auf viele weitere exklusive Vorteile und besondere Erlebnisse! 🎁",
      time: "01.04.2025 10:32",
      image: "/images/welcome-image.jpg",
    },
  ]

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // In einer echten App würden Sie die Nachricht an Ihr Backend senden
      console.log("Nachricht wird gesendet:", messageText)
      setMessageText("")
    }
  }

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case "whatsapp":
        return <WhatsAppIcon className="h-4 w-4" />
      case "instagram":
        return (
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-purple-500 fill-current">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
            <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
            <circle cx="18.406" cy="5.594" r="1.44" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex h-full">
      {/* Konversationsliste */}
      <div className="w-80 border-r bg-white flex flex-col">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Alle Unterhaltungen</h2>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input type="search" placeholder="Unterhaltungen durchsuchen..." className="pl-8 bg-gray-50" />
          </div>
        </div>

        <Tabs defaultValue="open" className="flex-1 flex flex-col">
          <div className="px-4 pt-2">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="open">Offen</TabsTrigger>
              <TabsTrigger value="later">Später</TabsTrigger>
              <TabsTrigger value="done">Erledigt</TabsTrigger>
            </TabsList>
          </div>

          <div className="p-2">
            <Button variant="outline" size="sm" className="w-full flex justify-between">
              <span>Am neuesten</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>

          <TabsContent value="open" className="flex-1 overflow-y-auto p-0 m-0">
            <div className="divide-y">
              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  className={`w-full text-left p-3 hover:bg-gray-50 ${
                    selectedConversation === conversation.id ? "bg-pink-50" : ""
                  }`}
                  onClick={() => setSelectedConversation(conversation.id)}
                >
                  <div className="flex items-start">
                    <div className="relative mr-3">
                      <Avatar>
                        <AvatarImage src={conversation.contact.avatar} alt={conversation.contact.name} />
                        <AvatarFallback>{conversation.contact.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full">
                        {getChannelIcon(conversation.contact.channel)}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <p className="font-medium truncate">{conversation.contact.name}</p>
                        <p className="text-xs text-gray-500">{conversation.time}</p>
                      </div>
                      <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="later" className="flex-1 p-4">
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
              <p>Keine Unterhaltungen für später markiert</p>
            </div>
          </TabsContent>

          <TabsContent value="done" className="flex-1 p-4">
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
              <p>Keine erledigten Unterhaltungen</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Konversationsdetails */}
      {selectedConversation ? (
        <div className="flex-1 flex flex-col bg-gray-50">
          {/* Konversations-Header */}
          <div className="bg-white border-b p-4 flex items-center justify-between">
            <div className="flex items-center">
              <Avatar className="mr-3">
                <AvatarImage
                  src={conversations.find((c) => c.id === selectedConversation)?.contact.avatar}
                  alt={conversations.find((c) => c.id === selectedConversation)?.contact.name}
                />
                <AvatarFallback>
                  {conversations.find((c) => c.id === selectedConversation)?.contact.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-medium">
                  {conversations.find((c) => c.id === selectedConversation)?.contact.name}
                </h2>
                <div className="flex items-center text-sm text-gray-500">
                  {getChannelIcon(conversations.find((c) => c.id === selectedConversation)?.contact.channel || "")}
                  <span className="ml-1 capitalize">
                    {conversations.find((c) => c.id === selectedConversation)?.contact.channel}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                Zuweisen
              </Button>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Nachrichten */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[75%] rounded-lg p-3 ${
                    message.sender === "user" ? "bg-pink-500 text-white" : "bg-white border border-gray-200"
                  }`}
                >
                  {message.image && (
                    <div className="mb-2 rounded-md overflow-hidden">
                      <img
                        src={message.image || "/placeholder.svg"}
                        alt="Nachrichtenanhang"
                        className="w-full h-auto"
                      />
                    </div>
                  )}
                  <p>{message.content}</p>
                  <p className={`text-xs mt-1 ${message.sender === "user" ? "text-pink-100" : "text-gray-500"}`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Nachrichteneingabe */}
          <div className="bg-white border-t p-4">
            <div className="flex items-end gap-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Paperclip className="h-5 w-5" />
              </Button>
              <div className="flex-1 bg-gray-50 rounded-lg p-2">
                <Input
                  type="text"
                  placeholder="Nachricht schreiben..."
                  className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage()
                    }
                  }}
                />
                <div className="flex justify-between mt-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Smile className="h-5 w-5" />
                  </Button>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">{messageText.length}/1000</span>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500"
                      onClick={handleSendMessage}
                      disabled={!messageText.trim()}
                    >
                      <Send className="h-4 w-4 mr-1" />
                      Senden
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h2 className="text-xl font-medium mb-2">Wählen Sie eine Unterhaltung</h2>
            <p className="text-gray-500">Wählen Sie eine Unterhaltung aus der Liste, um zu chatten</p>
          </div>
        </div>
      )}
    </div>
  )
}
