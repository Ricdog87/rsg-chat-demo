// Mock data for the application
// This file replaces the Supabase database with mock data

export const mockUsers = [
  {
    id: "1",
    email: "user@example.com",
    created_at: "2023-01-01T00:00:00.000Z",
    user_metadata: {
      name: "Demo User",
      avatar_url: "/placeholder.svg?height=100&width=100",
    },
  },
]

// Export the first user as mockUser for backward compatibility
export const mockUser = mockUsers[0]

export const mockProfiles = [
  {
    id: "1",
    user_id: "1",
    name: "Demo User",
    avatar_url: "/placeholder.svg?height=100&width=100",
    company: "Elumalab GmbH",
    role: "Admin",
    created_at: "2023-01-01T00:00:00.000Z",
    updated_at: "2023-01-01T00:00:00.000Z",
  },
]

// Export the first profile as mockProfile for backward compatibility
export const mockProfile = mockProfiles[0]

export const mockContacts = [
  {
    id: "1",
    name: "Maria Schmidt",
    email: "maria.schmidt@example.com",
    phone: "+49 123 4567890",
    channel: "WhatsApp",
    status: "Aktiv",
    tags: ["Stammkunde", "VIP"],
    created_at: "2023-01-01T00:00:00.000Z",
    updated_at: "2023-01-01T00:00:00.000Z",
  },
  {
    id: "2",
    name: "Thomas Weber",
    email: "thomas.weber@example.com",
    phone: "+49 123 4567891",
    channel: "Instagram",
    status: "Aktiv",
    tags: ["Neukunde"],
    created_at: "2023-01-02T00:00:00.000Z",
    updated_at: "2023-01-02T00:00:00.000Z",
  },
  {
    id: "3",
    name: "Laura Müller",
    email: "laura.mueller@example.com",
    phone: "+49 123 4567892",
    channel: "WhatsApp",
    status: "Inaktiv",
    tags: ["Stammkunde"],
    created_at: "2023-01-03T00:00:00.000Z",
    updated_at: "2023-01-03T00:00:00.000Z",
  },
  {
    id: "4",
    name: "Michael Schneider",
    email: "michael.schneider@example.com",
    phone: "+49 123 4567893",
    channel: "Facebook",
    status: "Aktiv",
    tags: ["Geschäftskunde", "VIP"],
    created_at: "2023-01-04T00:00:00.000Z",
    updated_at: "2023-01-04T00:00:00.000Z",
  },
  {
    id: "5",
    name: "Sophie Wagner",
    email: "sophie.wagner@example.com",
    phone: "+49 123 4567894",
    channel: "Email",
    status: "Aktiv",
    tags: ["Neukunde"],
    created_at: "2023-01-05T00:00:00.000Z",
    updated_at: "2023-01-05T00:00:00.000Z",
  },
]

export const mockConversations = [
  {
    id: "1",
    contact_id: "1",
    last_message: "Vielen Dank für die schnelle Antwort! Ich werde morgen vorbeikommen.",
    last_updated: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 minutes ago
    status: "active",
    unread_count: 3,
    created_at: "2023-01-01T00:00:00.000Z",
    updated_at: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
  },
  {
    id: "2",
    contact_id: "2",
    last_message: "Haben Sie die schwarze Variante auch in Größe M?",
    last_updated: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
    status: "active",
    unread_count: 0,
    created_at: "2023-01-02T00:00:00.000Z",
    updated_at: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
  },
  {
    id: "3",
    contact_id: "3",
    last_message: "Perfekt, danke für die Information!",
    last_updated: new Date(Date.now() - 1000 * 60 * 120).toISOString(), // 2 hours ago
    status: "closed",
    unread_count: 0,
    created_at: "2023-01-03T00:00:00.000Z",
    updated_at: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
  },
  {
    id: "4",
    contact_id: "4",
    last_message: "Wann kann ich mit der Lieferung rechnen?",
    last_updated: new Date(Date.now() - 1000 * 60 * 180).toISOString(), // 3 hours ago
    status: "pending",
    unread_count: 1,
    created_at: "2023-01-04T00:00:00.000Z",
    updated_at: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
  },
  {
    id: "5",
    contact_id: "5",
    last_message: "Ich habe Ihre Anfrage erhalten und werde mich darum kümmern.",
    last_updated: new Date(Date.now() - 1000 * 60 * 240).toISOString(), // 4 hours ago
    status: "active",
    unread_count: 0,
    created_at: "2023-01-05T00:00:00.000Z",
    updated_at: new Date(Date.now() - 1000 * 60 * 240).toISOString(),
  },
]

export const mockMessages = [
  {
    id: "1",
    conversation_id: "1",
    sender_type: "contact",
    content:
      "Hallo! Ich interessiere mich für das Produkt, das Sie gestern in Ihrer Instagram-Story gezeigt haben. Ist das noch verfügbar?",
    created_at: new Date(Date.now() - 1000 * 60 * 60).toISOString(), // 1 hour ago
    status: "read",
  },
  {
    id: "2",
    conversation_id: "1",
    sender_type: "user",
    content:
      "Hallo Maria! Vielen Dank für dein Interesse. Ja, das Produkt ist noch verfügbar. Es handelt sich um unsere neue Sommerkollektion.",
    created_at: new Date(Date.now() - 1000 * 60 * 55).toISOString(), // 55 minutes ago
    status: "read",
  },
  {
    id: "3",
    conversation_id: "1",
    sender_type: "contact",
    content: "Das klingt super! Welche Größen habt ihr noch auf Lager?",
    created_at: new Date(Date.now() - 1000 * 60 * 50).toISOString(), // 50 minutes ago
    status: "read",
  },
  {
    id: "4",
    conversation_id: "1",
    sender_type: "user",
    content: "Wir haben aktuell noch alle Größen von S bis XL verfügbar. Die Farben sind Weiß, Schwarz und Rosé.",
    created_at: new Date(Date.now() - 1000 * 60 * 45).toISOString(), // 45 minutes ago
    status: "read",
  },
  {
    id: "5",
    conversation_id: "1",
    sender_type: "contact",
    content:
      "Perfekt! Ich würde gerne die Größe M in Rosé nehmen. Kann ich das Produkt im Laden abholen oder bietet ihr auch Versand an?",
    created_at: new Date(Date.now() - 1000 * 60 * 40).toISOString(), // 40 minutes ago
    status: "read",
  },
]

export const mockStatistics = {
  totalMessages: 1248,
  activeConversations: 32,
  responseRate: 94,
  avgResponseTime: "8 min",
  channels: {
    WhatsApp: 65,
    Instagram: 28,
    Facebook: 15,
    Email: 12,
  },
}
