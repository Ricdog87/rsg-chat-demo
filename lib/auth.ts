import { v4 as uuidv4 } from "uuid"

// Mock-Benutzer für die Demo
const DEMO_USER = {
  id: "demo-user-id",
  email: "demo@elumalab.com",
  name: "Demo User",
  avatar_url: "/images/avatar-placeholder.png",
  role: "admin",
}

// Prüfen, ob es sich um einen Demo-Benutzer handelt
export async function isDemoUser(): Promise<boolean> {
  if (typeof window === "undefined") return false
  return localStorage.getItem("demoUser") !== null
}

// Demo-Sitzung starten
export async function startDemoSession() {
  if (typeof window === "undefined") return null

  const demoUser = {
    ...DEMO_USER,
    session_id: uuidv4(),
    created_at: new Date().toISOString(),
  }

  localStorage.setItem("demoUser", JSON.stringify(demoUser))
  return demoUser
}

// Mit Demo-Benutzer anmelden
export async function loginWithDemo() {
  if (typeof window === "undefined") return { user: null }

  const demoUser = JSON.parse(localStorage.getItem("demoUser") || "{}")
  return { user: demoUser }
}

// Aktuellen Benutzer abrufen
export async function getCurrentUser() {
  if (typeof window === "undefined") {
    return { success: false, data: { user: null } }
  }

  // Prüfen, ob es sich um einen Demo-Benutzer handelt
  if (await isDemoUser()) {
    const demoUser = JSON.parse(localStorage.getItem("demoUser") || "{}")
    return { success: true, data: { user: demoUser } }
  }

  // In einer echten Anwendung würde hier die Authentifizierung mit Supabase erfolgen
  // Da wir aber nur Mock-Daten verwenden, geben wir einen leeren Benutzer zurück
  return { success: false, data: { user: null } }
}

// Benutzerprofil abrufen
export async function getUserProfile(userId: string) {
  if (typeof window === "undefined") return null

  // Prüfen, ob es sich um einen Demo-Benutzer handelt
  if (await isDemoUser()) {
    return JSON.parse(localStorage.getItem("demoUser") || "{}")
  }

  // In einer echten Anwendung würde hier das Profil aus der Datenbank abgerufen werden
  // Da wir aber nur Mock-Daten verwenden, geben wir null zurück
  return null
}

// Mit E-Mail anmelden
export async function signInWithEmail(email: string, password: string) {
  // In einer echten Anwendung würde hier die Authentifizierung mit Supabase erfolgen
  // Da wir aber nur Mock-Daten verwenden, geben wir einen Mock-Benutzer zurück
  const mockUser = {
    id: uuidv4(),
    email,
    name: email.split("@")[0],
    avatar_url: "/images/avatar-placeholder.png",
    role: "user",
  }

  if (typeof window !== "undefined") {
    localStorage.setItem("mockUser", JSON.stringify(mockUser))
  }

  return { user: mockUser }
}

// Mit E-Mail registrieren
export async function signUpWithEmail(email: string, password: string) {
  // In einer echten Anwendung würde hier die Registrierung mit Supabase erfolgen
  // Da wir aber nur Mock-Daten verwenden, geben wir einen Mock-Benutzer zurück
  const mockUser = {
    id: uuidv4(),
    email,
    name: email.split("@")[0],
    avatar_url: "/images/avatar-placeholder.png",
    role: "user",
  }

  if (typeof window !== "undefined") {
    localStorage.setItem("mockUser", JSON.stringify(mockUser))
  }

  return { user: mockUser }
}

// Abmelden
export async function signOut() {
  if (typeof window === "undefined") return

  localStorage.removeItem("mockUser")
  localStorage.removeItem("demoUser")
}

// Benutzerdaten aktualisieren
export async function updateUser(updates: any): Promise<{ success: boolean; error?: any }> {
  try {
    if (typeof window === "undefined") {
      throw new Error("Funktion kann nur clientseitig ausgeführt werden.")
    }

    const mockUserString = localStorage.getItem("mockUser")
    if (!mockUserString) {
      throw new Error("Kein Benutzer gefunden.")
    }

    const mockUser = JSON.parse(mockUserString)
    const updatedUser = { ...mockUser, ...updates }
    localStorage.setItem("mockUser", JSON.stringify(updatedUser))

    return { success: true }
  } catch (error: any) {
    console.error("Fehler beim Aktualisieren des Benutzers:", error)
    return { success: false, error }
  }
}

// Passwort aktualisieren
export async function updatePassword(newPassword: string): Promise<{ success: boolean; error?: any }> {
  try {
    // Da wir Mock-Daten verwenden, simulieren wir einfach den Erfolg
    return { success: true }
  } catch (error: any) {
    console.error("Fehler beim Aktualisieren des Passworts:", error)
    return { success: false, error }
  }
}
