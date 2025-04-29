"use client"

import Link from "next/link"

export default function ImpressumPage() {
  return (
    <main style={{ padding: "6rem 1rem 2rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ marginBottom: "2rem" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", marginBottom: "1rem" }}>
            ← Zurück zur Startseite
          </Link>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Impressum</h1>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <>
            <section>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>Angaben gemäß § 5 TMG</h2>
              <p>RSG Recruiting Solutions Group GmbH</p>
              <p>Am Heiligenhaus 9</p>
              <p>65207 Wiesbaden</p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>Marke</h2>
              <p>RSG AI Consulting ist eine Marke der RSG Recruiting Solutions Group GmbH</p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>Vertreten durch</h2>
              <p>Geschäftsführer: Constance Renz und Ricardo Serrano</p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>Kontakt</h2>
              <p>Telefon: +49 176 60772556</p>
              <p>E-Mail: info@recruiting-sg.de</p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>Registereintrag</h2>
              <p>Eintragung im Handelsregister</p>
              <p>Registergericht: Amtsgericht Wiesbaden</p>
              <p>Registernummer: HRB XXXXX</p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
              <p>DE XXXXXXXXX</p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>Ricardo Serrano</p>
              <p>Am Heiligenhaus 9</p>
              <p>65207 Wiesbaden</p>
            </section>
          </>
        </div>
      </div>
    </main>
  )
}
