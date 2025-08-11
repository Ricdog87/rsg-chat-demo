"use client"

import { hasConsent } from "@/utils/consent-manager"

type EventPayload = Record<string, string | number | boolean | null | undefined>

export function trackEvent(event: string, category: string, label?: string, payload?: EventPayload) {
  if (typeof window === "undefined") return
  if (!hasConsent("analytics")) {
    // Respect consent: no tracking
    return
  }

  const data = {
    event,
    category,
    label,
    ...payload,
    timestamp: new Date().toISOString(),
  }

  // Non-invasive: push to dataLayer if present, else no-op
  ;(window as any).dataLayer = (window as any).dataLayer || []
  ;(window as any).dataLayer.push(data)

  // Helpful console for early verification
  // eslint-disable-next-line no-console
  console.log("[trackEvent]", data)
}
