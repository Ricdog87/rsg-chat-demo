"use client"

import type React from "react"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import { uploadAvatar } from "@/lib/profile"

interface UserAvatarProps {
  size?: "sm" | "md" | "lg"
  showUpload?: boolean
}

export function UserAvatar({ size = "md", showUpload = false }: UserAvatarProps) {
  const { user, profile, refreshProfile } = useAuth()
  const [uploading, setUploading] = useState(false)

  // Größe des Avatars basierend auf der Prop
  const sizeClass = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-16 w-16",
  }[size]

  // Initialen für den Fallback generieren
  const getInitials = () => {
    if (profile?.full_name) {
      return profile.full_name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .substring(0, 2)
    }

    if (profile?.username) {
      return profile.username.substring(0, 2).toUpperCase()
    }

    if (user?.email) {
      return user.email.substring(0, 2).toUpperCase()
    }

    return "U"
  }

  // Avatar hochladen
  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0] || !user) return

    const file = e.target.files[0]

    // Überprüfe, ob es sich um ein Bild handelt
    if (!file.type.startsWith("image/")) {
      alert("Bitte lade nur Bilder hoch.")
      return
    }

    setUploading(true)

    try {
      const result = await uploadAvatar(user.id, file)

      if (!result.success) {
        throw new Error(result.error || "Fehler beim Hochladen des Avatars")
      }

      // Profil aktualisieren, um den neuen Avatar anzuzeigen
      await refreshProfile()
    } catch (error) {
      console.error("Fehler beim Hochladen des Avatars:", error)
      alert("Fehler beim Hochladen des Avatars. Bitte versuche es erneut.")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <Avatar className={sizeClass}>
        <AvatarImage src={profile?.avatar_url || ""} alt={profile?.full_name || "Benutzer"} />
        <AvatarFallback className="bg-pink-100 text-pink-800">{getInitials()}</AvatarFallback>
      </Avatar>

      {showUpload && (
        <div className="mt-2">
          <input
            type="file"
            id="avatar-upload"
            accept="image/*"
            onChange={handleAvatarUpload}
            className="hidden"
            disabled={uploading}
          />
          <label htmlFor="avatar-upload">
            <Button
              variant="outline"
              size="sm"
              className="text-xs"
              disabled={uploading}
              onClick={() => document.getElementById("avatar-upload")?.click()}
              type="button"
            >
              {uploading ? "Wird hochgeladen..." : "Avatar ändern"}
            </Button>
          </label>
        </div>
      )}
    </div>
  )
}

export function UserName() {
  const { profile, user } = useAuth()

  // Name anzeigen (Priorität: Vollständiger Name > Benutzername > E-Mail)
  const displayName = profile?.full_name || profile?.username || user?.email?.split("@")[0] || "Benutzer"

  return <span className="font-medium">{displayName}</span>
}
