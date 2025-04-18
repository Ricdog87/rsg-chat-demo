"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { getStatistics, getConversations, getContacts } from "@/lib/supabase"

// Definiere den Kontext-Typ
interface DashboardContextType {
  statistics: {
    totalMessages: number
    activeConversations: number
    channels: Record<string, number>
  }
  conversations: any[]
  contacts: any[]
  loading: boolean
  refreshData: () => Promise<void>
}

// Erstelle den Kontext
const DashboardContext = createContext<DashboardContextType | undefined>(undefined)

// Provider-Komponente
export function DashboardProvider({ children }: { children: ReactNode }) {
  const [statistics, setStatistics] = useState({
    totalMessages: 0,
    activeConversations: 0,
    channels: {},
  })
  const [conversations, setConversations] = useState([])
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)

  // Daten laden
  const loadData = async () => {
    setLoading(true)
    try {
      const stats = await getStatistics()
      const convos = await getConversations()
      const contactsList = await getContacts()

      setStatistics(stats)
      setConversations(convos)
      setContacts(contactsList)
    } catch (error) {
      console.error("Fehler beim Laden der Dashboard-Daten:", error)
    } finally {
      setLoading(false)
    }
  }

  // Daten aktualisieren
  const refreshData = async () => {
    await loadData()
  }

  // Initialer Datenload
  useEffect(() => {
    loadData()

    // Set up polling for data updates (since we removed real-time subscriptions)
    const interval = setInterval(() => {
      loadData()
    }, 30000) // Refresh every 30 seconds

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <DashboardContext.Provider value={{ statistics, conversations, contacts, loading, refreshData }}>
      {children}
    </DashboardContext.Provider>
  )
}

// Hook für den Zugriff auf den Kontext
export function useDashboard() {
  const context = useContext(DashboardContext)
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider")
  }
  return context
}
