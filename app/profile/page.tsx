"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { UserAvatar } from "@/components/user-avatar"
import { useAuth } from "@/contexts/auth-context"
import { updateProfile } from "@/lib/profile"
import { updateUser } from "@/lib/auth"

export default function ProfilePage() {
  const { user, profile, loading, refreshProfile } = useAuth()
  const [fullName, setFullName] = useState("")
  const [username, setUsername] = useState("")
  const [website, setWebsite] = useState("")
  const [bio, setBio] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [updating, setUpdating] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const router = useRouter()

  // Profildaten laden, wenn sie verfügbar sind
  useEffect(() => {
    if (profile) {
      setFullName(profile.full_name || "")
      setUsername(profile.username || "")
      setWebsite(profile.website || "")
      setBio(profile.bio || "")
    }

    if (user) {
      setEmail(user.email || "")
    }
  }, [profile, user])

  // Wenn noch geladen wird oder kein Benutzer angemeldet ist
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Lade Profil...</p>
        </div>
      </div>
    )
  }

  if (!user || !profile) {
    router.push("/login")
    return null
  }

  // Profil aktualisieren
  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setUpdating(true)
    setError("")
    setSuccess("")

    try {
      // Profildaten aktualisieren
      const profileResult = await updateProfile(user.id, {
        full_name: fullName,
        username,
        website,
        bio,
      })

      if (!profileResult.success) {
        throw new Error(profileResult.error?.message || "Fehler beim Aktualisieren des Profils")
      }

      // Wenn ein neues Passwort eingegeben wurde
      if (password) {
        if (password !== confirmPassword) {
          throw new Error("Die Passwörter stimmen nicht überein")
        }

        const userResult = await updateUser({ password })
        if (!userResult.success) {
          throw new Error(userResult.error?.message || "Fehler beim Aktualisieren des Passworts")
        }
      }

      // Wenn die E-Mail-Adresse geändert wurde
      if (email !== user.email) {
        const userResult = await updateUser({ email })
        if (!userResult.success) {
          throw new Error(userResult.error?.message || "Fehler beim Aktualisieren der E-Mail-Adresse")
        }
      }

      // Profil neu laden
      await refreshProfile()

      setSuccess("Profil erfolgreich aktualisiert")
      setPassword("")
      setConfirmPassword("")
    } catch (err: any) {
      setError(err.message || "Ein Fehler ist aufgetreten. Bitte versuche es erneut.")
    } finally {
      setUpdating(false)
    }
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Mein Profil</h1>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <UserAvatar size="lg" showUpload />
              <div>
                <CardTitle>Profil bearbeiten</CardTitle>
                <CardDescription>Aktualisiere deine persönlichen Informationen</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="mb-4 bg-green-50 border-green-200 text-green-800">
                <AlertDescription>{success}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Vollständiger Name</Label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Dein vollständiger Name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="username">Benutzername</Label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Dein Benutzername"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="https://deine-website.de"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Über mich</Label>
                <Textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Erzähle etwas über dich"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-Mail</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Neues Passwort (leer lassen, um beizubehalten)</Label>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Passwort bestätigen</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <Button
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-yellow-300 hover:from-pink-600 hover:to-yellow-400"
                disabled={updating}
              >
                {updating ? "Wird aktualisiert..." : "Profil aktualisieren"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
