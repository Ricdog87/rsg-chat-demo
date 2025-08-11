"use client"

export default function OpenCookieSettings() {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("open-cookie-consent"))
        }
      }}
      className="bg-accent hover:bg-accent-light text-white font-medium py-2 px-4 rounded-md transition-colors"
      aria-label="Cookie-Einstellungen öffnen"
    >
      Cookie-Einstellungen öffnen
    </button>
  )
}
