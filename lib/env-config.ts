// Umgebungsvariablen-Konfiguration
export const envConfig = {
  // Supabase-Konfiguration
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
  },

  // Website-Konfiguration
  site: {
    // Die Marketing-Website
    marketingUrl: "https://www.elumalab.com",
    // Die Anwendungs-URL (Subdomain)
    appUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://app.elumalab.com",
    name: process.env.NEXT_PUBLIC_SITE_NAME || "Elumalab",
  },

  // Überprüfen, ob die Supabase-Konfiguration vollständig ist
  isSupabaseConfigured: () => {
    return !!envConfig.supabase.url && !!envConfig.supabase.anonKey
  },
}
