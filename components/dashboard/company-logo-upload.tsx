"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"

export function CompanyLogoUpload() {
  const [uploading, setUploading] = useState(false)
  const [logo, setLogo] = useState<string | null>(null)
  const { user } = useAuth()

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("Sie müssen ein Bild auswählen")
      }

      const file = event.target.files[0]
      const fileExt = file.name.split(".").pop()
      const filePath = `company-logos/${user?.id}-${Math.random()}.${fileExt}`

      const { error: uploadError } = await supabase.storage.from("logos").upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      const { data } = supabase.storage.from("logos").getPublicUrl(filePath)

      setLogo(data.publicUrl)

      // Aktualisiere das Unternehmensprofil mit dem neuen Logo
      if (user) {
        const { error } = await supabase.from("company_profiles").upsert({
          user_id: user.id,
          logo_url: data.publicUrl,
        })

        if (error) {
          console.error("Fehler beim Aktualisieren des Unternehmensprofils:", error)
        }
      }
    } catch (error) {
      console.error("Fehler beim Hochladen:", error)
      alert("Fehler beim Hochladen des Logos.")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        {logo ? (
          <img
            src={logo || "/placeholder.svg"}
            alt="Unternehmenslogo"
            className="h-16 w-16 object-contain rounded-md border"
          />
        ) : (
          <div className="h-16 w-16 flex items-center justify-center rounded-md border bg-gray-50">
            <span className="text-gray-400">Kein Logo</span>
          </div>
        )}

        <div>
          <Button
            onClick={() => document.getElementById("logo-upload")?.click()}
            disabled={uploading}
            variant="outline"
          >
            {uploading ? "Wird hochgeladen..." : "Logo hochladen"}
          </Button>
          <input id="logo-upload" type="file" accept="image/*" onChange={handleUpload} className="hidden" />
          <p className="text-sm text-gray-500 mt-1">Empfohlene Größe: 512x512px, max. 2MB</p>
        </div>
      </div>
    </div>
  )
}

export default CompanyLogoUpload
