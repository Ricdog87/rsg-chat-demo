"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { getMessagesForConversation, sendMessage } from "@/lib/supabase"

export default function ChatView({ conversationId }: { conversationId: string }) {
  const [messages, setMessages] = useState<any[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [sending, setSending] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Nachrichten laden
  useEffect(() => {
    if (!conversationId) {
      return
    }

    const loadMessages = async () => {
      try {
        setLoading(true)
        setError(null)

        const data = await getMessagesForConversation(conversationId)
        setMessages(data || [])
      } catch (err: any) {
        console.error("Fehler beim Laden der Nachrichten:", err)
        setError(err.message || "Fehler beim Laden der Nachrichten")
      } finally {
        setLoading(false)
      }
    }

    loadMessages()

    // Set up polling for new messages (since we removed real-time subscriptions)
    const interval = setInterval(async () => {
      try {
        const data = await getMessagesForConversation(conversationId)
        if (data.length > messages.length) {
          setMessages(data)
        }
      } catch (err) {
        console.error("Fehler beim Aktualisieren der Nachrichten:", err)
      }
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [conversationId, messages.length])

  // Automatisches Scrollen zum Ende der Nachrichtenliste
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Nachricht senden
  const sendMessageHandler = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!newMessage.trim()) return

    try {
      setSending(true)

      await sendMessage({
        conversation_id: conversationId,
        content: newMessage,
        sender: "user", // 'user' für eigene Nachrichten
      })

      // Refresh messages
      const updatedMessages = await getMessagesForConversation(conversationId)
      setMessages(updatedMessages)

      setNewMessage("")
    } catch (err: any) {
      console.error("Fehler beim Senden der Nachricht:", err)
      setError(err.message || "Fehler beim Senden der Nachricht")
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="flex flex-col h-[600px] bg-gray-50 rounded-xl shadow">
      {/* Fehlermeldung */}
      {error && (
        <Alert variant="destructive" className="m-2">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Nachrichtenliste */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-pink-500"></div>
          </div>
        ) : messages.length === 0 ? (
          <div className="flex justify-center items-center h-full text-gray-500">
            Keine Nachrichten in dieser Konversation
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-3 max-w-[75%] rounded-lg ${
                msg.sender === "customer"
                  ? "bg-gray-200 text-gray-800 self-start"
                  : "bg-pink-500 text-white self-end ml-auto"
              }`}
            >
              {msg.content}
              <div className={`text-xs mt-1 ${msg.sender === "customer" ? "text-gray-500" : "text-pink-100"}`}>
                {new Date(msg.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Eingabefeld für neue Nachrichten */}
      <form onSubmit={sendMessageHandler} className="p-3 border-t border-gray-200 flex gap-2">
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Nachricht eingeben..."
          disabled={sending || loading}
          className="flex-1"
        />
        <Button
          type="submit"
          disabled={sending || loading || !newMessage.trim()}
          className="bg-gradient-to-r from-pink-500 to-yellow-300 hover:from-pink-600 hover:to-yellow-400"
        >
          {sending ? (
            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </form>
    </div>
  )
}
