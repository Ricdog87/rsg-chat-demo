// Domain-Konfiguration
export const domainConfig = {
  // Produktions-Domain - Fix: Ensure URL has proper protocol
  productionDomain: process.env.NEXT_PUBLIC_SITE_URL || "https://elumalab.com",

  // Entwicklungs-Domain (für lokale Entwicklung)
  developmentDomain: "http://localhost:3000",

  // Aktuelle Domain basierend auf der Umgebung
  get currentDomain() {
    return process.env.NODE_ENV === "production" ? this.productionDomain : this.developmentDomain
  },

  // Supabase-Callback-URL
  get authCallbackUrl() {
    return `${this.currentDomain}/auth/callback`
  },
}
