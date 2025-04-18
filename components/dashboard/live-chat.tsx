"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Paperclip, Smile } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Message {
  id: string
  content: string
  sender: "user" | "contact"
  timestamp: Date
  status?: "sent" | "delivered" | "read"
}

export function LiveChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hallo! Ich interessiere mich für eure Produkte. Wann habt ihr geöffnet?",
      sender: "contact",
      timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 Minuten her
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const chatRef = useRef<HTMLDivElement>(null)

  // Automatisches Scrollen zum Ende der Nachrichtenliste
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Animiere das Tippen-Indikator
  useEffect(() => {
    if (isTyping) {
      const timer = setTimeout(() => {
        setIsTyping(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isTyping])

  useEffect(() => {
    // Intersection Observer für lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (chatRef.current) {
      observer.observe(chatRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!newMessage.trim()) return

    // Neue Nachricht hinzufügen
    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      content: newMessage,
      sender: "user",
      timestamp: new Date(),
      status: "sent",
    }

    setMessages((prev) => [...prev, userMessage])
    setNewMessage("")

    // Simuliere Antwort vom Kontakt
    setIsTyping(true)

    setTimeout(() => {
      // Ändere den Status der gesendeten Nachricht auf "delivered"
      setMessages((prev) => prev.map((msg) => (msg.id === userMessage.id ? { ...msg, status: "delivered" } : msg)))
    }, 1000)

    setTimeout(() => {
      // Ändere den Status der gesendeten Nachricht auf "read"
      setMessages((prev) => prev.map((msg) => (msg.id === userMessage.id ? { ...msg, status: "read" } : msg)))
    }, 2000)

    setTimeout(() => {
      const responses = [
        "Vielen Dank für Ihre Nachricht! Wir haben Montag bis Freitag von 9 bis 18 Uhr geöffnet.",
        "Super, danke! Und habt ihr das neue Modell XYZ auf Lager?",
        "Ich würde es gerne heute noch anschauen kommen.",
        "Könnt ihr mir bitte die Adresse eures Geschäfts schicken?",
        "Bietet ihr auch Lieferungen an?",
      ]

      const responseIndex = messages.length % responses.length

      const contactMessage: Message = {
        id: `msg-${Date.now() + 1}`,
        content: responses[responseIndex],
        sender: "contact",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, contactMessage])
      setIsTyping(false)
    }, 3000)
  }

  const getMessageStatusIcon = (status: string) => {
    switch (status) {
      case "sent":
        return <div className="text-gray-400 text-xs">✓</div>
      case "delivered":
        return <div className="text-gray-400 text-xs">✓✓</div>
      case "read":
        return <div className="text-blue-500 text-xs">✓✓</div>
      default:
        return null
    }
  }

  return (
    <Card
      className={`flex flex-col h-[500px] overflow-hidden transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      ref={chatRef}
    >
      <CardHeader className="border-b px-4 py-3 flex flex-row items-center justify-between space-y-0">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40&text=M" alt="Maria Schmidt" />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-base">Maria Schmidt</CardTitle>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
              <span>Online</span>
              <Badge variant="outline" className="text-[10px] h-4 px-1">
                WhatsApp
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
              transitionDelay: `${index * 100}ms`,
            }}
          >
            <div
              className={`max-w-[75%] rounded-lg p-3 ${
                message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100"
              }`}
            >
              <div className="text-sm">{message.content}</div>
              <div className="flex items-center justify-end gap-1 mt-1">
                <div className={`text-xs ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </div>
                {message.sender === "user" && message.status && getMessageStatusIcon(message.status)}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg p-3">
              <div className="flex gap-1">
                <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0ms]"></div>
                <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce [animation-delay:150ms]"></div>
                <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce [animation-delay:300ms]"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </CardContent>

      <div className="border-t p-3">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <Button type="button" variant="ghost" size="icon">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Nachricht eingeben..."
            className="flex-1"
          />
          <Button type="button" variant="ghost" size="icon">
            <Smile className="h-4 w-4" />
          </Button>
          <Button type="submit" disabled={!newMessage.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </Card>
  )
}
