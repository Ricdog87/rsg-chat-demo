import { createClient } from "@supabase/supabase-js"

// Supabase-Konfiguration
export const supabaseUrl = "https://tskzxlzudfnsvmfzrtpc.supabase.co"
export const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRza3p4bHp1ZGZuc3ZtZnpydHBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMDAwNDgsImV4cCI6MjA1OTY3NjA0OH0.MruZCznunAUwtQbk1Ln0WK1MGzXxiy66ic88jkjF2ws"

// Supabase-Client erstellen
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Authentifizierungsfunktionen
export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    throw error
  }

  return data
}

export async function signUpWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    throw error
  }

  return data
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()

  if (error) {
    throw error
  }
}

export async function getCurrentUser() {
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    return null
  }

  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}

export async function getUserProfile(userId: string) {
  const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single()

  if (error) {
    console.error("Error fetching user profile:", error)
    return null
  }

  return data
}

// Demo-Funktionalität
export const DEMO_USER = {
  id: "demo-user-id",
  email: "demo@elumalab.com",
  name: "Demo User",
  avatar_url: "/images/avatar-placeholder.png",
  role: "demo",
}

export async function startDemoSession() {
  // Speichern des Demo-Benutzers im localStorage
  localStorage.setItem("demoUser", JSON.stringify(DEMO_USER))
  return DEMO_USER
}

export async function loginWithDemo() {
  // In einer echten Implementierung würden wir hier eine spezielle Demo-Anmeldung durchführen
  // Für jetzt simulieren wir einfach eine erfolgreiche Anmeldung mit dem Demo-Benutzer
  return { user: DEMO_USER, session: { access_token: "demo-token" } }
}

export async function isDemoUser() {
  const demoUser = localStorage.getItem("demoUser")
  return !!demoUser
}

// Fehlende Exporte hinzufügen
export async function getMessagesForConversation(conversationId: string) {
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("conversation_id", conversationId)
    .order("created_at", { ascending: true })

  if (error) {
    console.error("Error fetching messages:", error)
    return []
  }

  return data || []
}

export async function sendMessage(message: {
  conversation_id: string
  content: string
  sender_type: string
}) {
  const { data, error } = await supabase
    .from("messages")
    .insert([
      {
        ...message,
        created_at: new Date().toISOString(),
      },
    ])
    .select()

  if (error) {
    console.error("Error sending message:", error)
    throw error
  }

  return data?.[0]
}

export async function getStatistics() {
  // Hier würden wir normalerweise Statistiken aus Supabase abrufen
  // Für jetzt geben wir Mock-Daten zurück
  return {
    totalMessages: 8432,
    activeConversations: 24,
    channels: {
      whatsapp: 45,
      email: 30,
      instagram: 15,
      webchat: 10,
    },
  }
}

export async function getConversations() {
  const { data, error } = await supabase
    .from("conversations")
    .select(`
      *,
      contact:contacts(*)
    `)
    .order("last_updated", { ascending: false })

  if (error) {
    console.error("Error fetching conversations:", error)
    return []
  }

  return data || []
}

export async function getContacts() {
  const { data, error } = await supabase.from("contacts").select("*")

  if (error) {
    console.error("Error fetching contacts:", error)
    return []
  }

  return data || []
}
