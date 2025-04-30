import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Allgemeine Geschäftsbedingungen | Lacar Associate",
  description: "Allgemeine Geschäftsbedingungen für die Dienstleistungen von Lacar Associate.",
}

export default function AGBPage() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <h1 className="text-3xl font-bold mb-8 text-primary">Allgemeine Geschäftsbedingungen</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">§ 1 Leistungsgegenstand</h2>
            <p className="mb-4">
              Lacar Associate erbringt für den Auftraggeber professionelle Dienstleistungen im Rahmen der
              Personalvermittlung. Gegenstand ist die Identifikation, Ansprache und Vorstellung geeigneter
              Kandidat:innen zur Besetzung vakanter Positionen beim Auftraggeber.
            </p>
            <p className="mb-4">Der Leistungsumfang umfasst insbesondere:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Analyse und Abstimmung des Anforderungsprofils</li>
              <li>Schaltung von Stellenanzeigen in geeigneten Medien</li>
              <li>Active Sourcing & Direktansprache qualifizierter Kandidat:innen</li>
              <li>Durchführung strukturierter (telefonischer und/oder persönlicher) Interviews</li>
              <li>Aufbereitung und Vorstellung geeigneter Profile</li>
              <li>Koordination von Interviews mit dem Auftraggeber</li>
              <li>Begleitung des Prozesses bis zur erfolgreichen Einstellung</li>
            </ul>
            <p>
              Ein bestimmter Vermittlungserfolg wird nicht geschuldet. Die Auswahlentscheidung trifft ausschließlich der
              Auftraggeber.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">§ 2 Vertragslaufzeit und Kündigung</h2>
            <p className="mb-4">
              Der Vermittlungsauftrag beginnt mit Vertragsunterzeichnung und läuft bis zur erfolgreichen Besetzung oder
              Kündigung. Der Auftrag kann von beiden Seiten mit einer Frist von 4 Wochen zum Monatsende schriftlich
              gekündigt werden.
            </p>
            <p>
              Kandidat:innen, die vor oder während der Kündigungsfrist vorgestellt wurden, gelten als
              provisionspflichtig – auch bei einer späteren Einstellung innerhalb von 6 Monaten nach letzter
              Profilvorstellung.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">§ 3 Mitteilungspflichten bei Einstellung</h2>
            <p>
              Der Auftraggeber verpflichtet sich, Lacar Associate unverzüglich – spätestens 14 Kalendertage nach
              Unterzeichnung eines Arbeitsvertrages – über eine Einstellung eines durch Lacar Associate vorgestellten
              Kandidaten zu informieren.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">§ 4 Vertraulichkeit & Datenschutz</h2>
            <p className="mb-4">
              Beide Parteien verpflichten sich zur vertraulichen Behandlung sämtlicher im Rahmen der Zusammenarbeit
              erlangten Informationen. Die Weitergabe von Bewerberdaten an Dritte ist untersagt.
            </p>
            <p className="mb-4">
              Die Verarbeitung personenbezogener Daten erfolgt gemäß DSGVO. Der Auftraggeber verpflichtet sich, die
              übermittelten Daten ausschließlich für Zwecke der konkreten Personalauswahl zu nutzen und nach Abschluss
              des Auswahlverfahrens datenschutzkonform zu löschen.
            </p>
            <p>
              Kommt es zu einer Einstellung durch ein verbundenes Unternehmen oder Dritten, so bleibt der
              Honoraranspruch bestehen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">§ 5 Vorabkontakte & Doppelbewerbungen</h2>
            <p>
              Ist ein durch Lacar Associate vorgestellter Kandidat dem Auftraggeber bereits bekannt, so ist dies
              innerhalb von 7 Werktagen nach Profilübermittlung schriftlich mitzuteilen. Erfolgt keine fristgerechte
              Mitteilung, gilt der Kandidat als provisionspflichtig vermittelt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">§ 6 Eigentum und Rückgabe von Unterlagen</h2>
            <p className="mb-4">
              Alle durch Lacar Associate erstellten Unterlagen (z. B. Exposés, Bewertungen, Notizen) bleiben geistiges
              Eigentum von Lacar Associate.
            </p>
            <p>
              Sofern kein Anstellungsverhältnis zustande kommt, sind diese Unterlagen auf Verlangen vollständig
              zurückzugeben oder datenschutzkonform zu löschen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">§ 7 Vergütung & Fälligkeit</h2>
            <p className="mb-4">Das Vermittlungshonorar beträgt pauschal 9.999 € netto pro Vakanz.</p>
            <p className="mb-4">Die Vergütung wird in zwei Stufen fällig:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Anzahlung in Höhe von 2.500 € netto bei Vertragsunterzeichnung</li>
              <li>Restbetrag bei Unterzeichnung des Arbeitsvertrages zwischen Kandidat:in und Auftraggeber</li>
            </ul>
            <p>Alle Rechnungsbeträge sind sofort nach Zugang ohne Abzug fällig.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">§ 8 Nachträglicher Vertragsschluss</h2>
            <p>
              Kommt es innerhalb von 6 Monaten nach letzter Vorstellung zur Einstellung eines durch Lacar Associate
              präsentierten Kandidaten, so bleibt der vollständige Honoraranspruch bestehen – auch nach Beendigung des
              Vermittlungsvertrages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">§ 9 Preise & Umsatzsteuer</h2>
            <p>Alle Honorare verstehen sich als Nettopreise zzgl. der gesetzlich geltenden Umsatzsteuer.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">§ 10 Gerichtsstand & anwendbares Recht</h2>
            <p>Es gilt ausschließlich deutsches Recht. Gerichtsstand ist Wiesbaden.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">§ 11 Salvatorische Klausel</h2>
            <p>
              Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein, bleibt die Gültigkeit der
              übrigen unberührt. Die Parteien verpflichten sich, die unwirksame Klausel durch eine Regelung zu ersetzen,
              die dem wirtschaftlichen Zweck am nächsten kommt.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link href="/" className="inline-flex items-center text-primary hover:text-accent transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </main>
  )
}
