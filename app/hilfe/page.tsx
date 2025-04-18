import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, MessageSquare, FileText, Video, BookOpen, LifeBuoy } from "lucide-react"
import type { ReactNode } from "react"

interface QuickLinkCardProps {
  icon: ReactNode
  title: string
  description: string
  link: string
}

function QuickLinkCard({ icon, title, description, link }: QuickLinkCardProps) {
  return (
    <Link
      href={link}
      className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center mb-2">
        {icon}
        <h3 className="ml-3 text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </Link>
  )
}

export default function HelpCenterPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Hilfe-Center</h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Finden Sie Antworten auf Ihre Fragen und lernen Sie, wie Sie das Beste aus Elumalab herausholen.
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
                description="Lernen Sie mit Schritt-für-Schritt-Videos"
                link="/webinare"
              />
              <QuickLinkCard
                icon={<BookOpen className="h-8 w-8 text-yellow-400" />}
                title="Wissensdatenbank"
                description="Artikel zu häufigen Fragen und Themen"
                link="/hilfe/wissensdatenbank"
              />
              <QuickLinkCard
                icon={<LifeBuoy className="h-8 w-8 text-green-500" />}
                title="Support kontaktieren"
                description="Direkter Kontakt zu unserem Support-Team"
                link="/kontakt"
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
                          Elumalab ist eine smarte Messaging-Plattform, die alle Ihre Kommunikationskanäle (WhatsApp,
                          Instagram, Facebook, etc.) in einem einheitlichen Posteingang zusammenführt. So können Sie
                          effizienter mit Ihren Kunden kommunizieren und Ihre Kundenzufriedenheit steigern.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger>Wie funktioniert die kostenlose Testphase?</AccordionTrigger>
                        <AccordionContent>
                          Sie können Elumalab 14 Tage lang kostenlos mit allen Funktionen des Business-Pakets testen.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Technische Fragen</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Welche Integrationen bietet Elumalab?</AccordionTrigger>
                        <AccordionContent>
                          Elumalab lässt sich nahtlos in Ihre bestehenden Systeme integrieren, darunter CRM-,
                          E-Commerce- und Marketing-Plattformen. Eine vollständige Liste der Integrationen finden Sie in
                          unserer Dokumentation.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger>Wie sicher sind meine Daten?</AccordionTrigger>
                        <AccordionContent>
                          Wir nehmen den Schutz Ihrer Daten sehr ernst. Elumalab verwendet modernste
                          Sicherheitsmaßnahmen, um Ihre Daten zu schützen.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="guides" className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Anleitungen</h2>
                <p>Hier finden Sie detaillierte Anleitungen zur Verwendung von Elumalab.</p>
              </TabsContent>

              <TabsContent value="troubleshooting" className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Problemlösungen</h2>
                <p>Hier finden Sie Lösungen für häufige Probleme.</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Brauchen Sie weitere Hilfe?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Kontaktieren Sie unser Support-Team für persönliche Unterstützung.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-yellow-300 hover:from-pink-600 hover:to-yellow-400"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Support kontaktieren
          </Button>
        </div>
      </section>
    </>
  )
}
