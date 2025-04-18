"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function ImprintPage() {
  const { language, t } = useLanguage()

  return (
    <main style={{ padding: "6rem 1rem 2rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ marginBottom: "2rem" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", marginBottom: "1rem" }}>
            ← {language === "de" ? "Zurück zur Startseite" : "Back to Home"}
          </Link>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>{language === "de" ? "Impressum" : "Imprint"}</h1>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {language === "de" ? (
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
          ) : (
            <>
              <section>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                  Information according to § 5 TMG
                </h2>
                <p>RSG Recruiting Solutions Group GmbH</p>
                <p>Am Heiligenhaus 9</p>
                <p>65207 Wiesbaden</p>
                <p>Germany</p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>Brand</h2>
                <p>RSG AI Consulting is a brand of RSG Recruiting Solutions Group GmbH</p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>Represented by</h2>
                <p>Managing Directors: Constance Renz and Ricardo Serrano</p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>Contact</h2>
                <p>Phone: +49 176 60772556</p>
                <p>Email: info@recruiting-sg.de</p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>Registration</h2>
                <p>Entry in the Commercial Register</p>
                <p>Register Court: Amtsgericht Wiesbaden</p>
                <p>Register Number: HRB XXXXX</p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>VAT ID</h2>
                <p>VAT identification number according to § 27 a of the German VAT law:</p>
                <p>DE XXXXXXXXX</p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                  Responsible for content according to § 55 Abs. 2 RStV
                </h2>
                <p>Ricardo Serrano</p>
                <p>Am Heiligenhaus 9</p>
                <p>65207 Wiesbaden</p>
                <p>Germany</p>
              </section>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
