"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, Bot, User, ExternalLink } from "lucide-react"
import { CharlotteChatSystem, type ChatMessage } from "@/lib/charlotte-chat"

export function CharlotteChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatSystemRef = useRef<CharlotteChatSystem | null>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const initializeChat = async () => {
      try {
        chatSystemRef.current = CharlotteChatSystem.getInstance()
        await chatSystemRef.current.initialize()

        // Load existing chat history
        const history = chatSystemRef.current.getChatHistory()
        if (history.length > 0) {
          setMessages(history)
        } else {
          // Set welcome message if no history
          const welcomeMessage: ChatMessage = {
            id: "welcome",
            text: "Hallo! Ich bin Charlotte, Ihre virtuelle Assistentin von RSG. Ich kenne alle Details zu unseren Services - Personalvermittlung, Schulungen, Outplacement und Freelancer-Vermittlung. Wie kann ich Ihnen heute helfen?",
            sender: "charlotte",
            timestamp: new Date(),
          }
          setMessages([welcomeMessage])
        }

        setIsInitialized(true)
      } catch (error) {
        console.error("[v0] Failed to initialize Charlotte:", error)
        setIsInitialized(true) // Still allow basic functionality
      }
    }

    initializeChat()
  }, [])

  const handleSendMessage = async () => {
    if (!inputValue.trim() || !isInitialized) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    try {
      if (chatSystemRef.current) {
        const charlotteResponse = await chatSystemRef.current.processMessage(inputValue)
        setMessages((prev) => [...prev, charlotteResponse])
      } else {
        // Fallback to simple response if chat system failed to initialize
        const fallbackResponse: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: "Entschuldigung, ich habe gerade technische Schwierigkeiten. Bitte kontaktieren Sie uns direkt unter +49 611 341 779 70 für eine persönliche Beratung.",
          sender: "charlotte",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, fallbackResponse])
      }
    } catch (error) {
      console.error("[v0] Error processing message:", error)
      const errorResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: "Es tut mir leid, aber ich konnte Ihre Nachricht nicht verarbeiten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt unter +49 611 341 779 70.",
        sender: "charlotte",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorResponse])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleSourceClick = (source: string) => {
    // Track click for analytics if available
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      ;(window as any).dataLayer.push({
        event: "charlotte_source_click",
        source_url: source,
      })
    }

    // Navigate to source page
    window.open(source, "_blank")
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
        size="icon"
        disabled={!isInitialized}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-40 w-80 sm:w-96 h-96 shadow-xl">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Bot className="h-5 w-5 text-primary" />
              Charlotte - RSG Assistentin
              {!isInitialized && <span className="text-xs text-muted-foreground">(Lädt...)</span>}
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col h-full p-0">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-4 pb-2 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-2 ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === "user" ? "bg-accent text-white" : "bg-primary text-white"
                    }`}
                  >
                    {message.sender === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>

                  <div className="max-w-[75%]">
                    <div
                      className={`p-3 rounded-lg text-sm ${
                        message.sender === "user" ? "bg-accent text-white ml-auto" : "bg-muted text-foreground"
                      }`}
                    >
                      {message.text}
                    </div>

                    {message.sender === "charlotte" && message.sources && message.sources.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {message.sources.map((source, index) => (
                          <button
                            key={index}
                            onClick={() => handleSourceClick(source)}
                            className="inline-flex items-center gap-1 text-xs text-primary hover:text-accent transition-colors bg-primary/5 hover:bg-accent/5 px-2 py-1 rounded"
                          >
                            <ExternalLink className="h-3 w-3" />
                            {source === "/"
                              ? "Startseite"
                              : source.replace("/", "").charAt(0).toUpperCase() + source.replace("/", "").slice(1)}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="bg-muted text-foreground p-3 rounded-lg text-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-primary rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-primary rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={isInitialized ? "Schreiben Sie Ihre Nachricht..." : "Lädt..."}
                  className="flex-1"
                  disabled={isTyping || !isInitialized}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping || !isInitialized}
                  size="icon"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              {!isTyping && isInitialized && (
                <div className="mt-2 flex flex-wrap gap-1">
                  <button
                    onClick={() => setInputValue("Wie funktioniert Ihre Personalvermittlung?")}
                    className="text-xs text-primary hover:text-accent bg-primary/5 hover:bg-accent/5 px-2 py-1 rounded transition-colors"
                  >
                    Personalvermittlung
                  </button>
                  <button
                    onClick={() => setInputValue("Was kostet Ihr Service?")}
                    className="text-xs text-primary hover:text-accent bg-primary/5 hover:bg-accent/5 px-2 py-1 rounded transition-colors"
                  >
                    Kosten
                  </button>
                  <button
                    onClick={() => setInputValue("Kontakt aufnehmen")}
                    className="text-xs text-primary hover:text-accent bg-primary/5 hover:bg-accent/5 px-2 py-1 rounded transition-colors"
                  >
                    Kontakt
                  </button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
