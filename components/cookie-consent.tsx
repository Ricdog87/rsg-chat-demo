"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

type CookieConsent = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  timestamp?: string
}

const EXPIRY_DAYS = 180
const MS_IN_DAY = 24 * 60 * 60 * 1000

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    try {
      const savedConsentRaw = localStorage.getItem("cookie-consent")
      if (!savedConsentRaw) {
        const timer = setTimeout(() => setShowConsent(true), 800)
        return () => clearTimeout(timer)
      }

      const saved = JSON.parse(savedConsentRaw) as CookieConsent
      // Optional migration: ensure necessary is true
      if (typeof saved.necessary !== "boolean") saved.necessary = true
      setConsent(saved)

      const ts = saved.timestamp ? new Date(saved.timestamp).getTime() : 0
      const expired = !ts || Date.now() - ts > EXPIRY_DAYS * MS_IN_DAY
      if (expired) {
        setShowConsent(true)
      }
    } catch {
      setShowConsent(true)
    }
  }, [])

  // Provide a global trigger to re-open consent
  useEffect(() => {
    const openHandler = () => {
      setShowDetails(true)
      setShowConsent(true)
    }
    window.addEventListener("open-cookie-consent", openHandler)
    ;(window as any).showCookieSettings = () => {
      window.dispatchEvent(new CustomEvent("open-cookie-consent"))
    }
    return () => {
      window.removeEventListener("open-cookie-consent", openHandler)
      if ((window as any).showCookieSettings) {
        delete (window as any).showCookieSettings
      }
    }
  }, [])

  const saveConsent = (consentData: CookieConsent) => {
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify({
        ...consentData,
        timestamp: new Date().toISOString(),
      }),
    )
    setShowConsent(false)

    if (consentData.analytics) {
      // Here you could initialize analytics later (kept empty as GA4 is not requested)
      // console.log("Analytics consent granted")
    }
    if (consentData.marketing) {
      // Initialize marketing tools here if needed
      // console.log("Marketing consent granted")
    }
  }

  const handleToggleConsent = (type: keyof CookieConsent) => {
    if (type === "necessary") return
    setConsent((prev) => ({ ...prev, [type]: !prev[type] }))
  }

  const handleAcceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true })
  }
  const handleAcceptSelected = () => {
    saveConsent(consent)
  }
  const handleRejectAll = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false })
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200 p-4 md:p-6">
      <div className="container mx-auto">
        <div className="flex flex-col space-y-4">
          <div>
            <h3 className="text-lg font-bold mb-2">Cookie-Einstellungen</h3>
            <p className="text-sm text-gray-600 mb-2">
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Weitere
              Informationen finden Sie in unserer{" "}
              <Link href="/datenschutz" className="text-accent hover:underline">
                Datenschutzerklärung
              </Link>{" "}
              und in der{" "}
              <Link href="/cookies" className="text-accent hover:underline">
                Cookie-Richtlinie
              </Link>
              .
            </p>

            {showDetails && (
              <div className="mt-4 space-y-3 border-t border-gray-200 pt-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Notwendige Cookies</p>
                    <p className="text-xs text-gray-500">
                      Diese Cookies sind für die Funktionalität der Website erforderlich und können nicht deaktiviert
                      werden.
                    </p>
                  </div>
                  <div className="bg-primary/10 p-1 rounded">
                    <input type="checkbox" checked disabled className="h-4 w-4 text-primary border-gray-300 rounded" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Analyse-Cookies</p>
                    <p className="text-xs text-gray-500">
                      Diese Cookies helfen uns, die Nutzung unserer Website zu verstehen und zu verbessern.
                    </p>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      checked={!!consent.analytics}
                      onChange={() => handleToggleConsent("analytics")}
                      className="h-4 w-4 text-accent border-gray-300 rounded"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Marketing-Cookies</p>
                    <p className="text-xs text-gray-500">
                      Diese Cookies werden verwendet, um relevante Werbung zu zeigen.
                    </p>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      checked={!!consent.marketing}
                      onChange={() => handleToggleConsent("marketing")}
                      className="h-4 w-4 text-accent border-gray-300 rounded"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 justify-end">
            <button
              onClick={handleRejectAll}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            >
              Ablehnen
            </button>

            <button
              onClick={() => setShowDetails(!showDetails)}
              className="px-4 py-2 text-sm font-medium text-primary border border-primary hover:bg-primary/5 rounded-md transition-colors"
            >
              {showDetails ? "Details ausblenden" : "Einstellungen anpassen"}
            </button>

            {showDetails && (
              <button
                onClick={handleAcceptSelected}
                className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-light rounded-md transition-colors"
              >
                Auswahl speichern
              </button>
            )}

            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-sm font-medium text-white bg-accent hover:bg-accent-light rounded-md transition-colors"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
