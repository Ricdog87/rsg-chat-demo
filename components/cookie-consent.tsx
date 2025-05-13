"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

type CookieConsent = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true, // Necessary cookies are always enabled
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem("cookie-consent")

    // Only show the consent banner if no choice has been made yet
    if (!savedConsent) {
      // Small delay to prevent the banner from flashing on page load
      const timer = setTimeout(() => {
        setShowConsent(true)
      }, 800)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    const fullConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
    }

    saveConsent(fullConsent)
  }

  const handleAcceptSelected = () => {
    saveConsent(consent)
  }

  const handleRejectAll = () => {
    const minimalConsent = {
      necessary: true, // Necessary cookies are always enabled
      analytics: false,
      marketing: false,
    }

    saveConsent(minimalConsent)
  }

  const saveConsent = (consentData: CookieConsent) => {
    // Save to localStorage
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify({
        ...consentData,
        timestamp: new Date().toISOString(),
      }),
    )

    // Hide the consent banner
    setShowConsent(false)

    // Here you would typically initialize your analytics/marketing tools
    // based on the user's consent
    if (consentData.analytics) {
      // Initialize analytics (e.g., Google Analytics)
      console.log("Analytics cookies enabled")
    }

    if (consentData.marketing) {
      // Initialize marketing tools (e.g., Facebook Pixel)
      console.log("Marketing cookies enabled")
    }
  }

  const handleToggleConsent = (type: keyof CookieConsent) => {
    if (type === "necessary") return // Cannot toggle necessary cookies

    setConsent((prev) => ({
      ...prev,
      [type]: !prev[type],
    }))
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
                    <input
                      type="checkbox"
                      checked={consent.necessary}
                      disabled
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
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
                      checked={consent.analytics}
                      onChange={() => handleToggleConsent("analytics")}
                      className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Marketing-Cookies</p>
                    <p className="text-xs text-gray-500">
                      Diese Cookies werden verwendet, um Ihnen relevante Werbung anzuzeigen.
                    </p>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      checked={consent.marketing}
                      onChange={() => handleToggleConsent("marketing")}
                      className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
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
