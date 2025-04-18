import { mockProfile } from "./mock-data"

export interface Profile {
  id: string
  username: string | null
  full_name: string | null
  avatar_url: string | null
  website: string | null
  bio: string | null
  created_at: string | null
  updated_at: string | null
}

// Profil abrufen
export async function getProfileByUserId(userId: string): Promise<Profile | null> {
  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return {
      ...mockProfile,
      id: userId,
    }
  } catch (error) {
    console.error("Fehler beim Abrufen des Profils:", error)
    return null
  }
}

// Profil aktualisieren
export async function updateProfile(
  userId: string,
  updates: Partial<Omit<Profile, "id" | "created_at" | "updated_at">>,
): Promise<{ success: boolean; data?: Profile; error?: any }> {
  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const updatedProfile = {
      ...mockProfile,
      ...updates,
      id: userId,
      updated_at: new Date().toISOString(),
    }

    return { success: true, data: updatedProfile }
  } catch (error) {
    console.error("Fehler beim Aktualisieren des Profils:", error)
    return { success: false, error }
  }
}

// Avatar hochladen
export async function uploadAvatar(
  userId: string,
  file: File,
): Promise<{ success: boolean; url?: string; error?: any }> {
  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Generate a mock URL
    const url = `/placeholder.svg?height=200&width=200&text=${encodeURIComponent(file.name)}`

    return { success: true, url }
  } catch (error) {
    console.error("Fehler beim Hochladen des Avatars:", error)
    return { success: false, error }
  }
}
