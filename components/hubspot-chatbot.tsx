"use client"

import { useEffect } from "react"
import { hasConsent } from "@/utils/consent-manager"

const HubspotChatbot = () => {
  useEffect(() => {
    // This would normally load the HubSpot chatbot script
    const loadHubspotChat = () => {
      // Only load if user has given marketing consent
      if (hasConsent("marketing")) {
        const script = document.createElement("script")
        script.src = "//js.hs-scripts.com/YOURHUBSPOTID.js"
        script.async = true
        script.defer = true
        document.body.appendChild(script)
      }
    }

    // Aktiviere den HubSpot-Chat für die Live-Website
    loadHubspotChat()

    return () => {
      // Cleanup if needed
    }
  }, [])

  return null // This component doesn't render anything visible
}

export default HubspotChatbot
