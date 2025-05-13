export type ConsentType = "necessary" | "analytics" | "marketing"

export function hasConsent(type: ConsentType): boolean {
  if (typeof window === "undefined") return false

  try {
    const consentData = localStorage.getItem("cookie-consent")
    if (!consentData) return false

    const consent = JSON.parse(consentData)
    return consent[type] === true
  } catch (error) {
    console.error("Error checking consent:", error)
    return false
  }
}

export function getConsentTimestamp(): string | null {
  if (typeof window === "undefined") return null

  try {
    const consentData = localStorage.getItem("cookie-consent")
    if (!consentData) return null

    const consent = JSON.parse(consentData)
    return consent.timestamp || null
  } catch (error) {
    console.error("Error getting consent timestamp:", error)
    return null
  }
}
