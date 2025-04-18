"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, Check } from "lucide-react"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [step, setStep] = useState(1)

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Side - Signup Form */}
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="mb-10">
            <Link href="/" className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-yellow-300 flex items-center justify-center text-white font-bold text-xl mr-2">
                E
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-yellow-300 text-transparent bg-clip-text">
                Eluma
              </span>
            </Link>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Konto erstellen</h2>
            <p className="mt-2 text-sm text-gray-600">
              Oder{" "}
              <Link href="/login" className="font-medium text-pink-600 hover:text-pink-500">
                melde dich mit deinem bestehenden Konto an
              </Link>
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Kostenlos starten</CardTitle>
              <CardDescription>Erstelle dein Konto und starte deine 14-tägige kostenlose Testphase</CardDescription>

              {/* Progress Steps */}
              <div className="flex items-center mt-4">
                <div className="flex items-center relative">
                  <div
                    className={`rounded-full h-8 w-8 flex items-center justify-center ${step >= 1 ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-500"}`}
                  >
                    {step > 1 ? <Check className="h-5 w-5" /> : 1}
                  </div>
                  <div className="ml-2 text-sm font-medium text-gray-900">Konto</div>
                </div>
                <div className={`flex-1 h-0.5 mx-4 ${step >= 2 ? "bg-pink-500" : "bg-gray-200"}`}></div>
                <div className="flex items-center relative">
                  <div
                    className={`rounded-full h-8 w-8 flex items-center justify-center ${step >= 2 ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-500"}`}
                  >
                    {step > 2 ? <Check className="h-5 w-5" /> : 2}
                  </div>
                  <div className="ml-2 text-sm font-medium text-gray-900">Unternehmen</div>
                </div>
                <div className={`flex-1 h-0.5 mx-4 ${step >= 3 ? "bg-pink-500" : "bg-gray-200"}`}></div>
                <div className="flex items-center relative">
                  <div
                    className={`rounded-full h-8 w-8 flex items-center justify-center ${step >= 3 ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-500"}`}
                  >
                    3
                  </div>
                  <div className="ml-2 text-sm font-medium text-gray-900">Bestätigung</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {step === 1 && (
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Vorname</Label>
                      <Input id="firstName" placeholder="Max" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nachname</Label>
                      <Input id="lastName" placeholder="Mustermann" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail</Label>
                    <Input id="email" type="email" placeholder="deine@email.de" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Passwort</Label>
                    <div className="relative">
                      <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" required />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500">
                      Mindestens 8 Zeichen, ein Großbuchstabe, eine Zahl und ein Sonderzeichen
                    </p>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" className="mt-1" />
                    <Label htmlFor="terms" className="text-sm">
                      Ich akzeptiere die{" "}
                      <Link href="/terms" className="text-pink-600 hover:text-pink-500">
                        Nutzungsbedingungen
                      </Link>{" "}
                      und{" "}
                      <Link href="/privacy" className="text-pink-600 hover:text-pink-500">
                        Datenschutzrichtlinien
                      </Link>
                    </Label>
                  </div>

                  <Button
                    type="button"
                    className="w-full bg-gradient-to-r from-pink-500 to-yellow-300 hover:from-pink-600 hover:to-yellow-400"
                    onClick={() => setStep(2)}
                  >
                    Weiter
                  </Button>
                </form>
              )}

              {step === 2 && (
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Unternehmensname</Label>
                    <Input id="companyName" placeholder="Musterfirma GmbH" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry">Branche</Label>
                    <select
                      id="industry"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Bitte auswählen</option>
                      <option value="retail">Einzelhandel</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="services">Dienstleistungen</option>
                      <option value="manufacturing">Produktion</option>
                      <option value="tech">Technologie</option>
                      <option value="other">Sonstiges</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="teamSize">Teamgröße</Label>
                    <select
                      id="teamSize"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Bitte auswählen</option>
                      <option value="1-5">1-5 Mitarbeiter</option>
                      <option value="6-20">6-20 Mitarbeiter</option>
                      <option value="21-50">21-50 Mitarbeiter</option>
                      <option value="51-200">51-200 Mitarbeiter</option>
                      <option value="201+">201+ Mitarbeiter</option>
                    </select>
                  </div>

                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setStep(1)}>
                      Zurück
                    </Button>
                    <Button
                      type="button"
                      className="bg-gradient-to-r from-pink-500 to-yellow-300 hover:from-pink-600 hover:to-yellow-400"
                      onClick={() => setStep(3)}
                    >
                      Weiter
                    </Button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="rounded-lg bg-green-50 p-4 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="mt-3 text-lg font-medium text-green-800">Fast geschafft!</h3>
                    <p className="mt-2 text-sm text-green-700">
                      Wir haben dir eine Bestätigungs-E-Mail gesendet. Bitte klicke auf den Link in der E-Mail, um deine
                      Registrierung abzuschließen.
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Keine E-Mail erhalten?{" "}
                      <button type="button" className="font-medium text-pink-600 hover:text-pink-500">
                        Erneut senden
                      </button>
                    </p>
                  </div>

                  <Button
                    type="button"
                    className="w-full bg-gradient-to-r from-pink-500 to-yellow-300 hover:from-pink-600 hover:to-yellow-400"
                    onClick={() => (window.location.href = "/dashboard")}
                  >
                    Zum Dashboard
                  </Button>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">Oder registrieren mit</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full">
                  <svg className="mr-2 h-4 w-4" aria-hidden="true" viewBox="0 0 24 24">
                    <path
                      d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                      fill="#34A853"
                    />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <svg className="mr-2 h-4 w-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300">
          <div className="flex h-full items-center justify-center p-12">
            <div className="max-w-xl text-white">
              <h2 className="text-4xl font-bold mb-6">Starte deine Reise mit Eluma</h2>
              <p className="text-xl mb-8">
                Registriere dich jetzt und entdecke, wie Eluma deine Kundenkommunikation revolutionieren kann.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Check className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium">14 Tage kostenlos testen</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Check className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium">Keine Kreditkarte erforderlich</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Check className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium">Persönliches Onboarding</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

