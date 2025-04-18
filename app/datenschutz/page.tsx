"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function DatenschutzPage() {
  const { language } = useLanguage()

  return (
    <main style={{ padding: "6rem 1rem 2rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ marginBottom: "2rem" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", marginBottom: "1rem" }}>
            ← {language === "de" ? "Zurück zur Startseite" : "Back to Home"}
          </Link>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
            {language === "de" ? "Datenschutzerklärung" : "Privacy Policy"}
          </h1>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {language === "de" ? (
            <>
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher
                ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
              </p>

              <section>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                  Verantwortlich für die Datenverarbeitung
                </h2>
                <p>RSG Recruiting Solutions Group GmbH</p>
                <p>Am Heiligenhaus 9</p>
                <p>65207 Wiesbaden</p>
                <p>E-Mail: info@recruiting-sg.de</p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>Marke</h2>
                <p>RSG AI Consulting ist eine Marke der RSG Recruiting Solutions Group GmbH</p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                  Datenschutzbeauftragter
                </h2>
                <p>Bei Fragen zum Datenschutz wenden Sie sich bitte an unseren Datenschutzbeauftragten:</p>
                <p>Ricardo Serrano</p>
                <p>E-Mail: datenschutz@recruiting-sg.de</p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                  Erhebung und Verarbeitung personenbezogener Daten
                </h2>
                <p>
                  Wir erheben personenbezogene Daten, wenn Sie uns diese im Rahmen Ihrer Bestellung, bei einer
                  Kontaktaufnahme mit uns oder bei Registrierung für unsere personalisierten Dienste freiwillig
                  mitteilen. Welche Daten erhoben werden, ist aus den jeweiligen Eingabeformularen ersichtlich. Wir
                  verwenden die von Ihnen mitgeteilten Daten zur Vertragsabwicklung und Bearbeitung Ihrer Anfragen.
                </p>
                <p style={{ marginTop: "0.5rem" }}>
                  Nach vollständiger Abwicklung des Vertrages oder Löschung Ihres Kundenkontos werden Ihre Daten für die
                  weitere Verwendung gesperrt und nach Ablauf der steuer- und handelsrechtlichen Aufbewahrungsfristen
                  gelöscht, sofern Sie nicht ausdrücklich in eine weitere Nutzung Ihrer Daten eingewilligt haben oder
                  wir uns eine darüber hinausgehende Datenverwendung vorbehalten, die gesetzlich erlaubt ist und über
                  die wir Sie in dieser Erklärung informieren.
                </p>
              </section>
            </>
          ) : (
            <>
              <p>
                The protection of your personal data is of particular concern to us. We therefore process your data
                exclusively on the basis of the legal provisions (GDPR, TKG 2003).
              </p>

              <section>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                  Responsible for Data Processing
                </h2>
                <p>RSG Recruiting Solutions Group GmbH</p>
                <p>Am Heiligenhaus 9</p>
                <p>65207 Wiesbaden</p>
                <p>Germany</p>
                <p>Email: info@recruiting-sg.de</p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>Brand</h2>
                <p>RSG AI Consulting is a brand of RSG Recruiting Solutions Group GmbH</p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                  Data Protection Officer
                </h2>
                <p>If you have any questions about data protection, please contact our data protection officer:</p>
                <p>Ricardo Serrano</p>
                <p>Email: datenschutz@recruiting-sg.de</p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                  Collection and Processing of Personal Data
                </h2>
                <p>
                  We collect personal data when you voluntarily provide it to us as part of your order, when contacting
                  us, or when registering for our personalized services. The data collected can be seen in the
                  respective input forms. We use the data you provide to process contracts and handle your inquiries.
                </p>
                <p style={{ marginTop: "0.5rem" }}>
                  After complete processing of the contract or deletion of your customer account, your data will be
                  blocked for further use and deleted after the expiry of the tax and commercial law retention periods,
                  unless you have expressly consented to further use of your data or we reserve the right to use data
                  beyond this, which is legally permitted and about which we inform you in this declaration.
                </p>
              </section>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
