import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Datenschutzerklärung | Lacar Associate",
  description: "Datenschutzerklärung und Informationen zum Umgang mit Ihren Daten bei Lacar Associate.",
}

export default function DatenschutzPage() {
  return (
    <main className="pt-16 md:pt-20">
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-primary">Datenschutzerklärung</h1>

        <div className="space-y-6 md:space-y-8 text-sm md:text-base">
          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-base md:text-lg font-medium mb-2">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie
              unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-base md:text-lg font-medium mb-2">Datenerfassung auf dieser Website</h3>
            <h4 className="font-medium mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
            <p className="mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können
              Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
            </p>

            <h4 className="font-medium mb-2">Wie erfassen wir Ihre Daten?</h4>
            <p className="mb-4">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
              Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p className="mb-4">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
              IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder
              Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website
              betreten.
            </p>

            <h4 className="font-medium mb-2">Wofür nutzen wir Ihre Daten?</h4>
            <p className="mb-4">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
              Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <h4 className="font-medium mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
            <p className="mb-4">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
              Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können
              Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
              bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des
              Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
            <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>

            <h3 className="text-base md:text-lg font-medium mb-2">Analyse-Tools und Tools von Drittanbietern</h3>
            <p className="mb-4">
              Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem
              mit sogenannten Analyseprogrammen.
            </p>
            <p>
              Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">2. Hosting</h2>
            <p className="mb-4">Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>

            <h3 className="text-base md:text-lg font-medium mb-2">Strato</h3>
            <p className="mb-4">
              Anbieter ist die Strato AG, Otto-Ostrowski-Straße 7, 10249 Berlin (nachfolgend „Strato"). Wenn Sie unsere
              Website besuchen, erfasst Strato verschiedene Logfiles inklusive Ihrer IP-Adressen.
            </p>
            <p className="mb-4">
              Weitere Informationen entnehmen Sie der Datenschutzerklärung von Strato:{" "}
              <a
                href="https://www.strato.de/datenschutz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://www.strato.de/datenschutz/
              </a>
              .
            </p>
            <p>
              Die Verwendung von Strato erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes
              Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende
              Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit.
              a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf
              Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die
              Einwilligung ist jederzeit widerrufbar.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>

            <h3 className="text-base md:text-lg font-medium mb-2">Datenschutz</h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerklärung.
            </p>
            <p className="mb-4">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene
              Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
              Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
              und zu welchem Zweck das geschieht.
            </p>
            <p className="mb-4">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
              Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
              möglich.
            </p>

            <h3 className="text-base md:text-lg font-medium mb-2">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mb-4">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p className="mb-1">Ricardo Serrano</p>
            <p className="mb-1">Am Heiligenhaus 9</p>
            <p className="mb-1">65207 Wiesbaden</p>
            <p className="mb-1">Telefon: +49 176 60772556</p>
            <p className="mb-4">E-Mail: info@lacar-associate.de</p>
            <p className="mb-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen
              über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o.
              Ä.) entscheidet.
            </p>

            <h3 className="text-base md:text-lg font-medium mb-2">Speicherdauer</h3>
            <p className="mb-4">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
              Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
              berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden
              Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
              personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
              letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>

            <h3 className="text-base md:text-lg font-medium mb-2">
              Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website
            </h3>
            <p className="mb-4">
              Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf
              Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
              nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung
              personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49
              Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in
              Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung
              zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre
              Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir
              Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern
              diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit.
              c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs.
              1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den
              folgenden Absätzen dieser Datenschutzerklärung informiert.
            </p>

            <h3 className="text-base md:text-lg font-medium mb-2">
              Hinweis zur Datenweitergabe in datenschutzrechtlich nicht sichere Drittstaaten sowie die Weitergabe an
              US-Unternehmen, die nicht DPF-zertifiziert sind
            </h3>
            <p className="mb-4">
              Wir verwenden unter anderem Tools von Unternehmen mit Sitz in datenschutzrechtlich nicht sicheren
              Drittstaaten sowie US-Tools, deren Anbieter nicht nach dem EU-US-Data Privacy Framework (DPF) zertifiziert
              sind. Wenn diese Tools aktiv sind, können Ihre personenbezogene Daten in diese Staaten übertragen und dort
              verarbeitet werden. Wir weisen darauf hin, dass in datenschutzrechtlich unsicheren Drittstaaten kein mit
              der EU vergleichbares Datenschutzniveau garantiert werden kann.
            </p>
            <p className="mb-4">
              Wir weisen darauf hin, dass die USA als sicherer Drittstaat grundsätzlich ein mit der EU vergleichbares
              Datenschutzniveau aufweisen. Eine Datenübertragung in die USA ist danach zulässig, wenn der Empfänger eine
              Zertifizierung unter dem „EU-US Data Privacy Framework" (DPF) besitzt oder über geeignete zusätzliche
              Garantien verfügt. Informationen zu Übermittlungen an Drittstaaten einschließlich der Datenempfänger
              finden Sie in dieser Datenschutzerklärung.
            </p>

            <h3 className="text-base md:text-lg font-medium mb-2">Empfänger von personenbezogenen Daten</h3>
            <p className="mb-4">
              Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist
              teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir
              geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer
              Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von
              Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der
              Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
              Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen
              Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über
              gemeinsame Verarbeitung geschlossen.
            </p>

            <h3 className="text-base md:text-lg font-medium mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="mb-4">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
              bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
              Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 className="text-base md:text-lg font-medium mb-2">
              Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
            </h3>
            <p className="mb-4 uppercase">
              Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie
              jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung
              Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen
              gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie
              dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen
              Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung
              nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der
              Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
            </p>
            <p className="mb-4 uppercase">
              Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht,
              jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke
              derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in
              Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum
              Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).
            </p>

            <h3 className="text-base md:text-lg font-medium mb-2">
              Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </h3>
            <p className="mb-4">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
              Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
              oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger
              verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
            </p>

            <h3 className="text-base md:text-lg font-medium mb-2">Recht auf Datenübertragbarkeit</h3>
            <p className="mb-4">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
              automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
              aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
              verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>

            <h3 className="text-base md:text-lg font-medium mb-2">Auskunft, Berichtigung und Löschung</h3>
            <p className="mb-4">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
              Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
              Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren
              Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
            </p>

            <h3 className="text-base md:text-lg font-medium mb-2">Recht auf Einschränkung der Verarbeitung</h3>
            <p className="mb-4">
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu
              können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden
              Fällen:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir
                in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
                Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
              <li className="mb-2">
                Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der
                Löschung die Einschränkung der Datenverarbeitung verlangen.
              </li>
              <li className="mb-2">
                Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung
                oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die
                Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
              <li className="mb-2">
                Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren
                und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen,
                haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
            </ul>
            <p>
              Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von
              ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder
              Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen
              Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines
              Mitgliedstaats verarbeitet werden.
            </p>

            <h3 className="text-base md:text-lg font-medium mb-2">SSL- bzw. TLS-Verschlüsselung</h3>
            <p className="mb-4">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
              Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers
              von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
            <p>
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht
              von Dritten mitgelesen werden.
            </p>

            <h3 className="text-base md:text-lg font-medium mb-2">Widerspruch gegen Werbe-E-Mails</h3>
            <p>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht
              ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber
              der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
              Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">4. Datenerfassung auf dieser Website</h2>

            <h3 className="text-base md:text-lg font-medium mb-2">Cookies</h3>
            <p className="mb-4">
              Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf
              Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung
              (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies
              werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
              gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
            </p>
            <p className="mb-4">
              Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies).
              Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb
              von Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
            </p>
            <p className="mb-4">
              Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte
              Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige
              von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet
              werden.
            </p>
            <p className="mb-4">
              Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter,
              von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der Website (z. B.
              Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von
              Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der
              Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch
              fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von
              Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung
              ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG); die
              Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mb-4">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies
              nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie
              das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von
              Cookies kann die Funktionalität dieser Website eingeschränkt sein.
            </p>
            <p>
              Welche Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dieser Datenschutzerklärung
              entnehmen.
            </p>

            <h3 className="text-base md:text-lg font-medium mb-2">Kontaktformular</h3>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mb-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
              mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an
              der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
              widerrufbar.
            </p>
            <p>
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
              auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
              (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere
              Aufbewahrungsfristen – bleiben unberührt.
            </p>

            <h3 className="text-base md:text-lg font-medium mb-2">Anfrage per E-Mail, Telefon oder Telefax</h3>
            <p className="mb-4">
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus
              hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
              gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mb-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
              mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an
              der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
              widerrufbar.
            </p>
            <p>
              Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung
              auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
              (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen –
              insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
            </p>

            <h3 className="text-base md:text-lg font-medium mb-2">Gravatar</h3>
            <p className="mb-4">
              Wir haben Gravatar auf dieser Website eingebunden. Anbieter ist die Automattic Inc., 60 29th Street #343,
              San Francisco, CA 94110, USA (nachfolgend Gravatar).
            </p>
            <p className="mb-4">
              Gravatar ist ein Tool, das es ermöglicht, persönliche Bilder (Avatare) für die Nutzer unserer Website
              bereitzustellen. Die Avatare dienen als visuelle Repräsentationen der Nutzer und werden überall dort
              angezeigt, wo ein Nutzer mit der Plattform interagiert (z. B. in Foren oder Chats). Wenn ein Nutzer mit
              der Plattform interagiert, wird sein Avatar basierend auf der mit seiner E-Mail-Adresse verknüpften
              Auswahl angezeigt. Dies verleiht der Online-Präsenz der Nutzer eine persönliche Note und erleichtert die
              Identifizierung, da das gewählte Bild den Nutzern zugeordnet wird, wenn sie online aktiv sind.
            </p>
            <p className="mb-4">
              Wenn Sie auf unserer Website kommentieren bzw. interagieren und dabei Gravatar aktiviert ist, wird der
              Hash der E-Mail-Adresse des Nutzers, der Gravatar nutzt (wird als ID genutzt) von Gravatar verarbeitet.
            </p>
            <p className="mb-4">
              Die Verwendung von Gravatar erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat
              ein berechtigtes Interesse an einer ansprechenden Darstellung seiner Foren. Sofern eine entsprechende
              Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit.
              a DSGVO und § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mb-4">
              Weitere Details entnehmen Sie der Datenschutzerklärung des Anbieters unter{" "}
              <a
                href="https://automattic.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://automattic.com/privacy/
              </a>
              .
            </p>
            <p>
              Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework" (DPF). Der DPF
              ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer
              Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF
              zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen
              hierzu erhalten Sie vom Anbieter unter folgendem Link:{" "}
              <a
                href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000CbqcAAC&status=Active"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000CbqcAAC&status=Active
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">5. Soziale Medien</h2>
            <h3 className="text-base md:text-lg font-medium mb-2">Social-Media-Elemente mit Shariff</h3>
            <p className="mb-4">
              Auf dieser Website werden Elemente von sozialen Medien verwendet (z. B. Facebook, Instagram, LinkedIn,
              Tumblr).
            </p>
            <p className="mb-4">
              Die Social-Media-Elemente können Sie in der Regel anhand der jeweiligen Social-Media-Logos erkennen. Um
              den Datenschutz auf dieser Website zu gewährleisten, verwenden wir diese Elemente nur zusammen mit der
              sogenannten „Shariff"-Lösung. Diese Anwendung verhindert, dass die auf dieser Website integrierten
              Social-Media-Elemente Ihre personenbezogenen Daten schon beim ersten Betreten der Seite an den jeweiligen
              Anbieter übertragen.
            </p>
            <p className="mb-4">
              Erst wenn Sie das jeweilige Social-Media-Element durch Anklicken der zugehörigen Schaltfläche aktivieren,
              wird eine direkte Verbindung zum Server des Anbieters hergestellt (Einwilligung). Sobald Sie das
              Social-Media-Element aktivieren, erhält der jeweilige Anbieter die Information, dass Sie mit Ihrer
              IP-Adresse diese Website besucht haben. Wenn Sie gleichzeitig in Ihrem jeweiligen Social-Media-Account (z.
              B. Facebook) eingeloggt sind, kann der jeweilige Anbieter den Besuch dieser Website Ihrem Benutzerkonto
              zuordnen.
            </p>
            <p className="mb-4">
              Das Aktivieren des Plugins stellt eine Einwilligung im Sinne des Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs.
              1 TTDSG dar. Diese Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
            </p>
            <p>
              Der Einsatz des Dienstes erfolgt, um die gesetzlich vorgeschriebenen Einwilligungen für den Einsatz
              bestimmter Technologien einzuholen. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. c DSGVO.
            </p>

            <h3 className="text-base md:text-lg font-medium mb-2">Facebook</h3>
            <p className="mb-4">
              Auf dieser Website sind Elemente des sozialen Netzwerks Facebook integriert. Anbieter dieses Dienstes ist
              die Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. Die erfassten Daten werden
              nach Aussage von Facebook jedoch auch in die USA und in andere Drittländer übertragen.
            </p>
            <p className="mb-4">
              Eine Übersicht über die Facebook Social-Media-Elemente finden Sie hier:{" "}
              <a
                href="https://developers.facebook.com/docs/plugins/?locale=de_DE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://developers.facebook.com/docs/plugins/?locale=de_DE
              </a>
              .
            </p>
            <p className="mb-4">
              Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgerät und dem
              Facebook-Server hergestellt. Facebook erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse diese
              Website besucht haben. Wenn Sie den Facebook „Like-Button" anklicken, während Sie in Ihrem
              Facebook-Account eingeloggt sind, können Sie die Inhalte dieser Website auf Ihrem Facebook-Profil
              verlinken. Dadurch kann Facebook den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf
              hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren
              Nutzung durch Facebook erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von
              Facebook unter:{" "}
              <a
                href="https://de-de.facebook.com/privacy/explanation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://de-de.facebook.com/privacy/explanation
              </a>
              .
            </p>
            <p className="mb-4">
              Soweit eine Einwilligung (Consent) eingeholt wurde, erfolgt der Einsatz des o. g. Dienstes auf Grundlage
              von Art. 6 Abs. 1 lit. a DSGVO und § 25 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Soweit keine
              Einwilligung eingeholt wurde, erfolgt die Verwendung des Dienstes auf Grundlage unseres berechtigten
              Interesses an einer möglichst umfassenden Sichtbarkeit in den Sozialen Medien.
            </p>
            <p className="mb-4">
              Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an
              Facebook weitergeleitet werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand Canal Square,
              Grand Canal Harbour, Dublin 2, Irland gemeinsam für diese Datenverarbeitung verantwortlich (Art. 26
              DSGVO). Die gemeinsame Verantwortlichkeit beschränkt sich dabei ausschließlich auf die Erfassung der Daten
              und deren Weitergabe an Facebook. Die nach der Weiterleitung erfolgende Verarbeitung durch Facebook ist
              nicht Teil der gemeinsamen Verantwortung. Die uns gemeinsam obliegenden Verpflichtungen wurden in einer
              Vereinbarung über gemeinsame Verarbeitung festgehalten. Den Wortlaut der Vereinbarung finden Sie unter:{" "}
              <a
                href="https://www.facebook.com/legal/controller_addendum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://www.facebook.com/legal/controller_addendum
              </a>
              . Laut dieser Vereinbarung sind wir für die Erteilung der Datenschutzinformationen beim Einsatz des
              Facebook-Tools und für die datenschutzrechtlich sichere Implementierung des Tools auf unserer Website
              verantwortlich. Für die Datensicherheit der Facebook-Produkte ist Facebook verantwortlich.
              Betroffenenrechte (z. B. Auskunftsersuchen) hinsichtlich der bei Facebook verarbeiteten Daten können Sie
              direkt bei Facebook geltend machen. Wenn Sie die Betroffenenrechte bei uns geltend machen, sind wir
              verpflichtet, diese an Facebook weiterzuleiten.
            </p>
            <p className="mb-4">
              Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details
              finden Sie hier:{" "}
              <a
                href="https://www.facebook.com/legal/EU_data_transfer_addendum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://www.facebook.com/legal/EU_data_transfer_addendum
              </a>
              ,{" "}
              <a
                href="https://de-de.facebook.com/help/566994660333381"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://de-de.facebook.com/help/566994660333381
              </a>{" "}
              und{" "}
              <a
                href="https://www.facebook.com/policy.php"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://www.facebook.com/policy.php
              </a>
              .
            </p>
            <p>
              Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework" (DPF). Der DPF
              ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer
              Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF
              zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen
              hierzu erhalten Sie vom Anbieter unter folgendem Link:{" "}
              <a
                href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnywAAC&status=Active"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnywAAC&status=Active
              </a>
            </p>

            <h3 className="text-base md:text-lg font-medium mb-2">Instagram</h3>
            <p className="mb-4">
              Auf dieser Website sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden angeboten
              durch die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
            </p>
            <p className="mb-4">
              Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgerät und dem
              Instagram-Server hergestellt. Instagram erhält dadurch Informationen über den Besuch dieser Website durch
              Sie.
            </p>
            <p className="mb-4">
              Wenn Sie in Ihrem Instagram-Account eingeloggt sind, können Sie durch Anklicken des Instagram-Buttons die
              Inhalte dieser Website mit Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den Besuch dieser
              Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine
              Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Instagram erhalten.
            </p>
            <p className="mb-4">
              Soweit eine Einwilligung (Consent) eingeholt wurde, erfolgt der Einsatz des o. g. Dienstes auf Grundlage
              von Art. 6 Abs. 1 lit. a DSGVO und § 25 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Soweit keine
              Einwilligung eingeholt wurde, erfolgt die Verwendung des Dienstes auf Grundlage unseres berechtigten
              Interesses an einer möglichst umfassenden Sichtbarkeit in den Sozialen Medien.
            </p>
            <p className="mb-4">
              Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an
              Facebook bzw. Instagram weitergeleitet werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand
              Canal Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam für diese Datenverarbeitung verantwortlich
              (Art. 26 DSGVO). Die gemeinsame Verantwortlichkeit beschränkt sich dabei ausschließlich auf die Erfassung
              der Daten und deren Weitergabe an Facebook bzw. Instagram. Die nach der Weiterleitung erfolgende
              Verarbeitung durch Facebook bzw. Instagram ist nicht Teil der gemeinsamen Verantwortung. Die uns gemeinsam
              obliegenden Verpflichtungen wurden in einer Vereinbarung über gemeinsame Verarbeitung festgehalten. Den
              Wortlaut der Vereinbarung finden Sie unter:{" "}
              <a
                href="https://www.facebook.com/legal/controller_addendum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://www.facebook.com/legal/controller_addendum
              </a>
              . Laut dieser Vereinbarung sind wir für die Erteilung der Datenschutzinformationen beim Einsatz des
              Facebook- bzw. Instagram-Tools und für die datenschutzrechtlich sichere Implementierung des Tools auf
              unserer Website verantwortlich. Für die Datensicherheit der Facebook bzw. Instagram-Produkte ist Facebook
              verantwortlich. Betroffenenrechte (z. B. Auskunftsersuchen) hinsichtlich der bei Facebook bzw. Instagram
              verarbeiteten Daten können Sie direkt bei Facebook geltend machen. Wenn Sie die Betroffenenrechte bei uns
              geltend machen, sind wir verpflichtet, diese an Facebook weiterzuleiten.
            </p>
            <p className="mb-4">
              Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details
              finden Sie hier:{" "}
              <a
                href="https://www.facebook.com/legal/EU_data_transfer_addendum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://www.facebook.com/legal/EU_data_transfer_addendum
              </a>
              ,{" "}
              <a
                href="https://privacycenter.instagram.com/policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://privacycenter.instagram.com/policy/
              </a>{" "}
              und{" "}
              <a
                href="https://de-de.facebook.com/help/566994660333381"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://de-de.facebook.com/help/566994660333381
              </a>
              .
            </p>
            <p className="mb-4">
              Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Instagram:{" "}
              <a
                href="https://privacycenter.instagram.com/policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://privacycenter.instagram.com/policy/
              </a>
              .
            </p>
            <p>
              Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework" (DPF). Der DPF
              ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer
              Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF
              zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen
              hierzu erhalten Sie vom Anbieter unter folgendem Link:{" "}
              <a
                href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnywAAC&status=Active"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnywAAC&status=Active
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">6. Analyse-Tools und Werbung</h2>
            <h3 className="text-base md:text-lg font-medium mb-2">WP Statistics</h3>
            <p className="mb-4">
              Diese Website nutzt das Analysetool WP Statistics, um Besucherzugriffe statistisch auszuwerten. Anbieter
              ist Veronalabs, Tatari 64, 10134, Tallinn, Estland (
              <a
                href="https://veronalabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://veronalabs.com
              </a>
              ).
            </p>
            <p className="mb-4">
              Mit WP Statistics können wir die Nutzung unserer Website analysieren. WP Statistics erfasst dabei u. a.
              Logdateien (IP-Adresse, Referrer, verwendete Browser, Herkunft des Nutzers, verwendete Suchmaschine) und
              Aktionen, die die Websitebesucher auf der Seite getätigt haben (z. B. Klicks und Ansichten).
            </p>
            <p className="mb-4">
              Die mit WP Statistics erfassten Daten werden ausschließlich auf unserem eigenen Server gespeichert.
            </p>
            <p className="mb-4">
              Die Nutzung dieses Analyse-Tools erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein
              berechtigtes Interesse an der anonymisierten Analyse des Nutzerverhaltens, um sowohl unser Webangebot als
              auch unsere Werbung zu optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die
              Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die
              Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B.
              Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <h4 className="font-medium mb-2">IP-Anonymisierung</h4>
            <p>
              Wir verwenden WP Statistics mit anonymisierter IP. Ihre IP-Adresse wird dabei gekürzt, sodass diese Ihnen
              nicht mehr direkt zugeordnet werden kann.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">7. Newsletter</h2>
            <h3 className="text-base md:text-lg font-medium mb-2">Newsletterdaten</h3>
            <p className="mb-4">
              Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine
              E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der
              angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten
              werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich für den
              Versand der angeforderten Informationen und geben diese nicht an Dritte weiter.
            </p>
            <p className="mb-4">
              Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich auf
              Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der
              Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen,
              etwa über den „Austragen"-Link im Newsletter. Die Rechtmäßigkeit der bereits erfolgten
              Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
            </p>
            <p className="mb-4">
              Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer
              Austragung aus dem Newsletter bei uns bzw. dem Newsletterdiensteanbieter gespeichert und nach der
              Abbestellung des Newsletters oder nach Zweckfortfall aus der Newsletterverteilerliste gelöscht. Wir
              behalten uns vor, E-Mail-Adressen aus unserem Newsletterverteiler nach eigenem Ermessen im Rahmen unseres
              berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO zu löschen oder zu sperren.
            </p>
            <p className="mb-4">Daten, die zu anderen Zwecken bei uns gespeichert wurden, bleiben hiervon unberührt.</p>
            <p>
              Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre E-Mail-Adresse bei uns bzw. dem
              Newsletterdiensteanbieter ggf. in einer Blacklist gespeichert, sofern dies zur Verhinderung künftiger
              Mailings erforderlich ist. Die Daten aus der Blacklist werden nur für diesen Zweck verwendet und nicht mit
              anderen Daten zusammengeführt. Dies dient sowohl Ihrem Interesse als auch unserem Interesse an der
              Einhaltung der gesetzlichen Vorgaben beim Versand von Newslettern (berechtigtes Interesse im Sinne des
              Art. 6 Abs. 1 lit. f DSGVO). Die Speicherung in der Blacklist ist zeitlich nicht befristet. Sie können der
              Speicherung widersprechen, sofern Ihre Interessen unser berechtigtes Interesse überwiegen.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">8. Plugins und Tools</h2>
            <h3 className="text-base md:text-lg font-medium mb-2">Google Fonts (lokales Hosting)</h3>
            <p className="mb-4">
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google
              bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google
              findet dabei nicht statt.
            </p>
            <p>
              Weitere Informationen zu Google Fonts finden Sie unter{" "}
              <a
                href="https://developers.google.com/fonts/faq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://developers.google.com/fonts/faq
              </a>{" "}
              und in der Datenschutzerklärung von Google:{" "}
              <a
                href="https://policies.google.com/privacy?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://policies.google.com/privacy?hl=de
              </a>
              .
            </p>

            <h3 className="text-base md:text-lg font-medium mb-2 mt-4">Google Maps</h3>
            <p className="mb-4">
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google"), Gordon
              House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="mb-4">
              Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese
              Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
              Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung. Wenn Google Maps aktiviert ist,
              kann Google zum Zwecke der einheitlichen Darstellung der Schriftarten Google Fonts verwenden. Beim Aufruf
              von Google Maps lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten
              korrekt anzuzeigen.
            </p>
            <p className="mb-4">
              Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote
              und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein
              berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung
              abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und
              § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen
              im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist
              jederzeit widerrufbar.
            </p>
            <p className="mb-4">
              Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details
              finden Sie hier:{" "}
              <a
                href="https://privacy.google.com/businesses/gdprcontrollerterms/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://privacy.google.com/businesses/gdprcontrollerterms/
              </a>{" "}
              und{" "}
              <a
                href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://privacy.google.com/businesses/gdprcontrollerterms/sccs/
              </a>
              .
            </p>
            <p className="mb-4">
              Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google:{" "}
              <a
                href="https://policies.google.com/privacy?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://policies.google.com/privacy?hl=de
              </a>
              .
            </p>
            <p>
              Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework" (DPF). Der DPF
              ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer
              Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF
              zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen
              hierzu erhalten Sie vom Anbieter unter folgendem Link:{" "}
              <a
                href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active
              </a>
            </p>

            <h3 className="text-base md:text-lg font-medium mb-2 mt-4">Wordfence</h3>
            <p className="mb-4">
              Wir haben Wordfence auf dieser Website eingebunden. Anbieter ist Defiant Inc., Defiant, Inc., 800 5th Ave
              Ste 4100, Seattle, WA 98104, USA (nachfolgend „Wordfence").
            </p>
            <p className="mb-4">
              Wordfence dient dem Schutz unserer Website vor unerwünschten Zugriffen oder bösartigen Cyberattacken. Zu
              diesem Zweck stellt unsere Website eine dauerhafte Verbindung zu den Servern von Wordfence her, damit
              Wordfence seine Datenbanken mit den auf unserer Website getätigten Zugriffen abgleichen und ggf.
              blockieren kann.
            </p>
            <p className="mb-4">
              Die Verwendung von Wordfence erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber
              hat ein berechtigtes Interesse an einem möglichst effektiven Schutz seiner Website vor Cyberattacken.
              Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
              Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung
              von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im
              Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mb-4">
              Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details
              finden Sie hier:{" "}
              <a
                href="https://www.wordfence.com/help/general-data-protection-regulation/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://www.wordfence.com/help/general-data-protection-regulation/
              </a>
              .
            </p>
            <h4 className="font-medium mb-2">Auftragsverarbeitung</h4>
            <p>
              Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes
              geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der
              gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen
              und unter Einhaltung der DSGVO verarbeitet.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Quelle:{" "}
              <a
                href="https://www.e-recht24.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://www.e-recht24.de
              </a>
            </p>
          </section>
        </div>

        <div className="mt-8 md:mt-12">
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:text-accent transition-colors text-sm md:text-base"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </main>
  )
}
