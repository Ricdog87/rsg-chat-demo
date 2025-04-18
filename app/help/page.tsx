import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, MessageSquare, FileText, Video, BookOpen, LifeBuoy, ChevronRight } from "lucide-react"
import type { ReactNode } from "react"

export default function HelpCenterPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Hilfe-Center</h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Finde Antworten auf deine Fragen und lerne, wie du das Beste aus Elumalab herausholst.
          </p>
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input type="text" placeholder="Suche nach Hilfeartikeln..." className="pl-10 py-6 text-lg bg-white" />
            <Button className="absolute right-1.5 top-1.5 bg-gradient-to-r from-pink-500 to-yellow-300 hover:from-pink-600 hover:to-yellow-400">
              Suchen
            </Button>
          </div>
        </div>
      </header>

      {/* Quick Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <QuickLinkCard
                icon={<FileText className="h-8 w-8 text-pink-500" />}
                title="Dokumentation"
                description="Ausführliche Anleitungen und Referenzen"
                link="/docs"
              />
              <QuickLinkCard
                icon={<Video className="h-8 w-8 text-orange-400" />}
                title="Video-Tutorials"
                description="Lerne mit Schritt-für-Schritt-Videos"
                link="/webinars"
              />
              <QuickLinkCard
                icon={<BookOpen className="h-8 w-8 text-yellow-400" />}
                title="Wissensdatenbank"
                description="Artikel zu häufigen Fragen und Themen"
                link="/help/knowledge-base"
              />
              <QuickLinkCard
                icon={<LifeBuoy className="h-8 w-8 text-green-500" />}
                title="Support kontaktieren"
                description="Direkter Kontakt zu unserem Support-Team"
                link="/contact"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="faq" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="faq">Häufige Fragen</TabsTrigger>
                <TabsTrigger value="guides">Anleitungen</TabsTrigger>
                <TabsTrigger value="troubleshooting">Problemlösungen</TabsTrigger>
              </TabsList>

              <TabsContent value="faq" className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Häufig gestellte Fragen</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Allgemeine Fragen</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Was ist Elumalab?</AccordionTrigger>
                        <AccordionContent>
                          Elumalab ist eine smarte Messaging-Plattform, die alle deine Kommunikationskanäle (WhatsApp,
                          Instagram, Facebook, etc.) in einem einheitlichen Posteingang zusammenführt. So kannst du
                          effizienter mit deinen Kunden kommunizieren und deine Kundenzufriedenheit steigern.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger>Wie funktioniert die kostenlose Testphase?</AccordionTrigger>
                        <AccordionContent>
                          Du kannst Elumalab 14 Tage lang kostenlos mit allen Funktionen des Business-Pakets testen.
                          Keine Kreditkarte erforderlich. Nach Ablauf der Testphase kannst du dich für ein Paket
                          entscheiden oder dein Konto wird automatisch auf die kostenlose Version herabgestuft.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger>Welche Messaging-Kanäle werden unterstützt?</AccordionTrigger>
                        <AccordionContent>
                          Elumalab unterstützt aktuell WhatsApp Business API, Instagram Direct, Facebook Messenger,
                          Telegram, E-Mail und Webchat. Wir arbeiten kontinuierlich daran, weitere Kanäle zu
                          integrieren.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger>Kann ich mein Paket jederzeit wechseln?</AccordionTrigger>
                        <AccordionContent>
                          Ja, du kannst jederzeit zu einem höheren Paket upgraden. Ein Downgrade ist zum Ende deiner
                          aktuellen Abrechnungsperiode möglich. Alle Änderungen werden sofort wirksam und die Kosten
                          anteilig berechnet.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Technische Fragen</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-5">
                        <AccordionTrigger>Wie verbinde ich WhatsApp Business mit Elumalab?</AccordionTrigger>
                        <AccordionContent>
                          Um WhatsApp Business mit Elumalab zu verbinden, benötigst du einen WhatsApp Business
                          API-Zugang. In deinem Elumalab-Dashboard findest du unter "Einstellungen" &gt; "Kanäle" eine
                          Schritt-für-Schritt-Anleitung zur Verbindung.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-6">
                        <AccordionTrigger>Ist Elumalab DSGVO-konform?</AccordionTrigger>
                        <AccordionContent>
                          Ja, Elumalab ist vollständig DSGVO-konform. Wir speichern alle Daten auf Servern in der EU und
                          haben umfassende Maßnahmen zum Schutz personenbezogener Daten implementiert. Detaillierte
                          Informationen findest du in unserer Datenschutzerklärung.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-7">
                        <AccordionTrigger>Kann ich Elumalab mit meinem CRM-System verbinden?</AccordionTrigger>
                        <AccordionContent>
                          Ja, Elumalab bietet Integrationen mit gängigen CRM-Systemen wie Salesforce, HubSpot und mehr.
                          Zudem stellen wir eine API zur Verfügung, mit der du individuelle Integrationen entwickeln
                          kannst.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-8">
                        <AccordionTrigger>Wie funktionieren die Automatisierungen?</AccordionTrigger>
                        <AccordionContent>
                          Mit Elumalab kannst du verschiedene Automatisierungen einrichten, wie z.B. automatische
                          Antworten, Chatbots und Workflow-Automatisierungen. Diese werden über einen visuellen Editor
                          konfiguriert, der keine Programmierkenntnisse erfordert.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Link href="/help/faq">
                    <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50">
                      Alle FAQs anzeigen
                    </Button>
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="guides" className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Anleitungen</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <GuideCard
                    title="Erste Schritte mit Elumalab"
                    description="Lerne, wie du dein Elumalab-Konto einrichtest und mit der Nutzung beginnst."
                    category="Einführung"
                    readTime="5 Min."
                  />

                  <GuideCard
                    title="WhatsApp Business API einrichten"
                    description="Schritt-für-Schritt-Anleitung zur Einrichtung der WhatsApp Business API."
                    category="Integration"
                    readTime="10 Min."
                  />

                  <GuideCard
                    title="Team-Mitglieder verwalten"
                    description="Erfahre, wie du Teammitglieder einlädst und Berechtigungen verwaltest."
                    category="Administration"
                    readTime="7 Min."
                  />

                  <GuideCard
                    title="Chatbots erstellen"
                    description="Lerne, wie du einfache Chatbots ohne Programmierkenntnisse erstellst."
                    category="Automatisierung"
                    readTime="15 Min."
                  />

                  <GuideCard
                    title="Berichte und Analysen nutzen"
                    description="Verstehe, wie du die Analyse-Tools von Elumalab für bessere Entscheidungen nutzt."
                    category="Reporting"
                    readTime="8 Min."
                  />

                  <GuideCard
                    title="Vorlagen für Schnellantworten erstellen"
                    description="Spare Zeit mit vordefinierten Antworten für häufige Fragen."
                    category="Effizienz"
                    readTime="6 Min."
                  />
                </div>

                <div className="mt-8 text-center">
                  <Link href="/help/guides">
                    <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50">
                      Alle Anleitungen anzeigen
                    </Button>
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="troubleshooting" className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Problemlösungen</h2>

                <div className="space-y-6">
                  <TroubleshootingItem
                    title="Verbindungsprobleme mit WhatsApp"
                    description="Lösungen für häufige Probleme bei der Verbindung mit WhatsApp Business API."
                  />

                  <TroubleshootingItem
                    title="Nachrichten werden nicht zugestellt"
                    description="Prüfe diese Punkte, wenn Nachrichten nicht bei deinen Kunden ankommen."
                  />

                  <TroubleshootingItem
                    title="Probleme beim Einladen von Teammitgliedern"
                    description="Fehlerbehebung bei der Einladung und Verwaltung von Teammitgliedern."
                  />

                  <TroubleshootingItem
                    title="Automatisierungen funktionieren nicht wie erwartet"
                    description="Tipps zur Fehlerbehebung bei Automatisierungen und Chatbots."
                  />

                  <TroubleshootingItem
                    title="Probleme mit der Benutzeroberfläche"
                    description="Lösungen für Darstellungsprobleme und Browserkompatibilität."
                  />

                  <TroubleshootingItem
                    title="Fehler bei der Integration mit anderen Systemen"
                    description="Behebung von Problemen bei der Verbindung mit CRM und anderen Tools."
                  />
                </div>

                <div className="mt-8 text-center">
                  <Link href="/help/troubleshooting">
                    <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50">
                      Alle Problemlösungen anzeigen
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Noch Fragen?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Unser Support-Team steht dir bei Fragen und Problemen zur Seite. Wir sind Montag bis Freitag von 9 bis 18
              Uhr für dich da.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-6 flex flex-col items-center">
                  <MessageSquare className="h-12 w-12 text-pink-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Live-Chat</h3>
                  <p className="text-gray-600 mb-4 text-center">
                    Chatte direkt mit unserem Support-Team für schnelle Hilfe.
                  </p>
                  <Button className="bg-gradient-to-r from-pink-500 to-yellow-300 hover:from-pink-600 hover:to-yellow-400 w-full">
                    Chat starten
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex flex-col items-center">
                  <FileText className="h-12 w-12 text-orange-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Support-Ticket</h3>
                  <p className="text-gray-600 mb-4 text-center">Erstelle ein Ticket für komplexere Anfragen.</p>
                  <Link href="/contact" className="w-full">
                    <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50 w-full">
                      Ticket erstellen
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

interface QuickLinkCardProps {
  icon: ReactNode
  title: string
  description: string
  link: string
}

function QuickLinkCard({ icon, title, description, link }: QuickLinkCardProps) {
  return (
    <Link href={link}>
      <Card className="hover:shadow-lg transition-shadow h-full">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

interface GuideCardProps {
  title: string
  description: string
  category: string
  readTime: string
}

function GuideCard({ title, description, category, readTime }: GuideCardProps) {
  return (
    <Link href="#">
      <Card className="hover:shadow-lg transition-shadow h-full">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-pink-500">{category}</span>
            <span className="text-sm text-gray-500">{readTime} Lesezeit</span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center text-pink-500 font-medium">
            <span>Weiterlesen</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

interface TroubleshootingItemProps {
  title: string
  description: string
}

function TroubleshootingItem({ title, description }: TroubleshootingItemProps) {
  return (
    <Link href="#">
      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center text-pink-500 font-medium">
            <span>Lösung anzeigen</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
