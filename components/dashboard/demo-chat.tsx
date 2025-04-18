"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RefreshCw, Send } from "lucide-react"

// Demo-Nachrichten
const DEMO_MESSAGES = [
  {
    id: "msg-1",
    sender: "system",
    content: "Willkommen im Demo-Chat! Hier können Sie die Chat-Funktion testen.",
    timestamp: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: "msg-2",
    sender: "customer",
    content: "Hallo, ich habe eine Frage zu meiner Bestellung.",
    timestamp: new Date(Date.now() - 1800000).toISOString(),
  },
  {
    id: "msg-3",
    sender: "agent",
    content: "Gerne helfe ich Ihnen weiter. Können Sie mir bitte Ihre Bestellnummer mitteilen?",
    timestamp: new Date(Date.now() - 1700000).toISOString(),
  },
]

// Automatische Antworten
const AUTO_RESPONSES = [
  "Vielen Dank für Ihre Nachricht. Wie kann ich Ihnen weiterhelfen?",
  "Ich verstehe Ihr Anliegen. Lassen Sie mich das für Sie prüfen.",
  "Danke für die Information. Gibt es noch etwas, das ich für Sie tun kann?",
  "Ich habe Ihre Anfrage notiert und werde mich darum kümmern.",
  "Haben Sie noch weitere Fragen zu diesem Thema?",
]

export function DemoChat() {
  const [messages, setMessages] = useState(DEMO_MESSAGES)
  const [inputValue, setInputValue] = useState("")
  const [isRefreshing, setIsRefreshing] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Automatisch zum Ende der Nachrichten scrollen
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Neue Nachricht hinzufügen
    const newMessage = {
      id: `msg-${Date.now()}`,
      sender: "customer",
      content: inputValue,
      timestamp: new Date().toISOString(),
    }

    setMessages([...messages, newMessage])
    setInputValue("")

    // Automatische Antwort nach kurzer Verzögerung
    setTimeout(() => {
      const randomResponse = AUTO_RESPONSES[Math.floor(Math.random() * AUTO_RESPONSES.length)]

      const responseMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: "agent",
        content: randomResponse,
        timestamp: new Date().toISOString(),
      }

      setMessages((prev) => [...prev, responseMessage])
    }, 1000)
  }

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setIsRefreshing(false)
    }, 1000)
  }

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <Card className="flex flex-col h-[400px]">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-1">
          <CardTitle>Live-Chat</CardTitle>
          <CardDescription>Testen Sie die Chat-Funktion</CardDescription>
        </div>
        <Button variant="outline" size="icon" onClick={handleRefresh} disabled={isRefreshing}>
          <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
          <span className="sr-only">Aktualisieren</span>
        </Button>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "customer" ? "justify-end" : "justify-start"}`}>
              <div
                className={`flex gap-2 max-w-[80%] ${message.sender === "customer" ? "flex-row-reverse" : "flex-row"}`}
              >
                <Avatar className="h-8 w-8">
                  {message.sender === "agent" && <AvatarImage src="/images/avatar-placeholder.png" alt="Agent" />}
                  <AvatarFallback>
                    {message.sender === "customer" ? "C" : message.sender === "agent" ? "A" : "S"}
                  </AvatarFallback>
                </Avatar>
                <div
                  className={`rounded-lg p-3 ${
                    message.sender === "customer"
                      ? "bg-primary text-primary-foreground"
                      : message.sender === "agent"
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  <p>{message.content}</p>
                  <p className="text-xs opacity-70 mt-1 text-right">{formatTime(message.timestamp)}</p>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <form
          className="flex w-full gap-2"
          onSubmit={(e) => {
            e.preventDefault()
            handleSendMessage()
          }}
        >
          <Input
            placeholder="Nachricht eingeben..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
            <span className="sr-only">Senden</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
