"use server"

import { Resend } from "resend"

// Initialisiere Resend mit deinem API-Key (muss in der Produktionsumgebung gesetzt werden)
// In der Entwicklungsumgebung kannst du einen Dummy-Key verwenden
const resend = new Resend(process.env.RESEND_API_KEY || "dummy_key")

export type ContactFormData = {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validiere die Eingaben
    if (!formData.name || !formData.email || !formData.message) {
      return {
        success: false,
        message: "Bitte füllen Sie alle Pflichtfelder aus.",
      }
    }

    // Sende die E-Mail
    const { data, error } = await resend.emails.send({
      from: "Kontaktformular <noreply@lacar-associate.de>",
      to: "ricardo.serrano@lacar-assoiate.de", // Die angegebene E-Mail-Adresse
      subject: `Neue Kontaktanfrage von ${formData.name}`,
      text: `
        Name: ${formData.name}
        E-Mail: ${formData.email}
        Telefon: ${formData.phone || "Nicht angegeben"}
        Unternehmen: ${formData.company || "Nicht angegeben"}
        
        Nachricht:
        ${formData.message}
      `,
      // Optional: HTML-Version der E-Mail
      html: `
        <h2>Neue Kontaktanfrage über die Website</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>E-Mail:</strong> ${formData.email}</p>
        <p><strong>Telefon:</strong> ${formData.phone || "Nicht angegeben"}</p>
        <p><strong>Unternehmen:</strong> ${formData.company || "Nicht angegeben"}</p>
        <h3>Nachricht:</h3>
        <p>${formData.message.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (error) {
      console.error("Fehler beim Senden der E-Mail:", error)
      return {
        success: false,
        message: "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.",
      }
    }

    return {
      success: true,
      message: "Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze bei Ihnen.",
    }
  } catch (error) {
    console.error("Fehler bei der Formularverarbeitung:", error)
    return {
      success: false,
      message: "Es gab ein Problem beim Verarbeiten Ihrer Anfrage. Bitte versuchen Sie es später erneut.",
    }
  }
}
