"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function AGBPage() {
  const { language } = useLanguage()

  return (
    <main style={{ padding: "6rem 1rem 2rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ marginBottom: "2rem" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", marginBottom: "1rem" }}>
            ← {language === "de" ? "Zurück zur Startseite" : "Back to Home"}
          </Link>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
            {language === "de" ? "Allgemeine Geschäftsbedingungen" : "Terms and Conditions"}
          </h1>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {language === "de" ? (
            <>
              <p>
                Die nachfolgenden Geschäftsbedingungen gelten für alle zwischen der RSG Recruiting Solutions Group GmbH
                (RSG AI Consulting) und dem Kunden abgeschlossenen Verträge.
              </p>

              <section>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>1. Geltungsbereich</h2>
                <p>
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der RSG Recruiting
                  Solutions Group GmbH (nachfolgend "RSG" genannt) und ihren Kunden über die Erbringung von
                  Dienstleistungen im Bereich KI-Lösungen, Beratung und Software.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>2. Marke</h2>
                <p>
                  RSG AI Consulting ist eine Marke der RSG Recruiting Solutions Group GmbH. Alle Verträge werden mit der
                  RSG Recruiting Solutions Group GmbH geschlossen.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>3. Vertragsschluss</h2>
                <p>
                  Der Vertrag kommt durch die Annahme des Angebots der RSG durch den Kunden zustande. Die Annahme kann
                  schriftlich, per E-Mail oder durch konkludentes Handeln erfolgen.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>4. Leistungsumfang</h2>
                <p>
                  Der Umfang der Leistungen ergibt sich aus der Leistungsbeschreibung des Angebots, den Angaben auf der
                  Website und den ergänzenden Angaben in der Auftragsbestätigung. Änderungen und Ergänzungen bedürfen
                  der Schriftform.
                </p>
                <p style={{ marginTop: "0.5rem" }}>
                  RSG ist berechtigt, die vereinbarten Leistungen zu ändern, zu reduzieren oder zu ergänzen, sofern dies
                  für den Kunden zumutbar ist.
                </p>
              </section>
            </>
          ) : (
            <>
              <p>
                The following terms and conditions apply to all contracts concluded between RSG Recruiting Solutions
                Group GmbH (RSG AI Consulting) and the customer.
              </p>

              <section>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                  1. Scope of Application
                </h2>
                <p>
                  These General Terms and Conditions (GTC) apply to all contracts between RSG Recruiting Solutions Group
                  GmbH (hereinafter referred to as "RSG") and its customers for the provision of services in the field
                  of AI solutions, consulting, and software.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>2. Brand</h2>
                <p>
                  RSG AI Consulting is a brand of RSG Recruiting Solutions Group GmbH. All contracts are concluded with
                  RSG Recruiting Solutions Group GmbH.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                  3. Conclusion of Contract
                </h2>
                <p>
                  The contract is concluded when the customer accepts RSG's offer. Acceptance can be in writing, by
                  email, or through conclusive action.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>4. Scope of Services</h2>
                <p>
                  The scope of services is derived from the service description in the offer, the information on the
                  website, and the supplementary information in the order confirmation. Changes and additions require
                  written form.
                </p>
                <p style={{ marginTop: "0.5rem" }}>
                  RSG is entitled to change, reduce, or supplement the agreed services, provided this is reasonable for
                  the customer.
                </p>
              </section>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
