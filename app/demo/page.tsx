"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, ChevronRight, Calendar, MessageSquare, BarChart3, Users } from "lucide-react"
import { useState } from "react"

export default function DemoPage() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayVideo = () => {
    setIsPlaying(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-yellow-300 flex items-center justify-center text-white font-bold text-xl mr-2">
                  E
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-yellow-300 text-transparent bg-clip-text">
                  Eluma
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="text-gray-700 hover:text-pink-500 transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-pink-500 transition-colors">
                Preise
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-pink-500 transition-colors">
                Über uns
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-pink-500 transition-colors">
                Kontakt
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-700 hover:text-pink-500 transition-colors">
                Login
              </Link>
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-pink-500 to-yellow-300 hover:from-pink-600 hover:to-yellow-400">
                  Kostenlos starten
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Erlebe Eluma in Aktion</h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Sieh dir an, wie Eluma deine Kundenkommunikation revolutionieren kann. Wähle eine Demo oder vereinbare eine
            persönliche Präsentation.
          </p>
        </div>
      </header>

      {/* USP Video Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Eluma in 60 Sekunden</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
                Erfahre, wie Eluma alle deine Messaging-Kanäle vereint und deine Kundenkommunikation auf das nächste
                Level hebt.
              </p>
            </div>

            <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl mb-16">
              {!isPlaying ? (
                <>
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <Button
                      onClick={handlePlayVideo}
                      size="lg"
                      className="bg-pink-500 hover:bg-pink-600 text-white rounded-full w-20 h-20 flex items-center justify-center"
                    >
                      <Play className="h-10 w-10" />
                    </Button>
                  </div>
                  <Image
                    src="/placeholder.svg?height=600&width=1200"
                    alt="Eluma Video Thumbnail"
                    width={1200}
                    height={600}
                    className="w-full h-full object-cover opacity-50"
                  />
                </>
              ) : (
                <div className="w-full h-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Eluma Platform Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Alle Kanäle vereint</h3>
                <p className="text-gray-600">
                  WhatsApp, Instagram, Facebook und mehr - alles in einem einheitlichen Posteingang.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Team-Kollaboration</h3>
                <p className="text-gray-600">
                  Arbeite nahtlos mit deinem Team zusammen und verteile Aufgaben effizient.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Datengestützte Insights</h3>
                <p className="text-gray-600">Verstehe deine Kunden besser mit umfassenden Analysen und Berichten.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Videos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-12">
                <TabsTrigger value="overview">Überblick</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="integrations">Integrationen</TabsTrigger>
                <TabsTrigger value="use-cases">Anwendungsfälle</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Eluma im Überblick</h2>
                    <p className="text-lg text-gray-600 mb-6">
                      Dieses Video gibt dir einen umfassenden Überblick über die Eluma-Plattform und zeigt, wie du alle
                      deine Messaging-Kanäle in einem einheitlichen Posteingang verwalten kannst.
                    </p>
                    <p className="text-lg text-gray-600 mb-8">
                      Erfahre, wie Eluma dir hilft, effizienter zu kommunizieren, dein Team zu koordinieren und die
                      Kundenzufriedenheit zu steigern.
                    </p>
                    <Link href="/signup">
                      <Button className="bg-gradient-to-r from-pink-500 to-yellow-300 hover:from-pink-600 hover:to-yellow-400">
                        Kostenlos testen
                      </Button>
                    </Link>
                  </div>
                  <div className="bg-gray-900 rounded-xl overflow-hidden relative aspect-video">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        size="lg"
                        className="bg-white text-pink-500 hover:bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center"
                      >
                        <Play className="h-8 w-8" />
                      </Button>
                    </div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Eluma Überblick"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover opacity-50"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="features">
                <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">Feature-Demos</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <DemoVideoCard
                    title="Einheitlicher Posteingang"
                    description="Sieh, wie du alle Nachrichten von verschiedenen Kanälen an einem Ort verwalten kannst."
                    duration="3:45"
                  />

                  <DemoVideoCard
                    title="Team-Kollaboration"
                    description="Erfahre, wie du mit deinem Team nahtlos zusammenarbeiten und Aufgaben effizient verteilen kannst."
                    duration="4:20"
                  />

                  <DemoVideoCard
                    title="Automatisierungen & Chatbots"
                    description="Entdecke, wie du Zeit sparst mit intelligenten Automatisierungen und einfach zu erstellenden Chatbots."
                    duration="5:15"
                  />

                  <DemoVideoCard
                    title="Analysen & Berichte"
                    description="Sieh, wie du mit detaillierten Analysen bessere Entscheidungen für deine Kundenkommunikation treffen kannst."
                    duration="3:30"
                  />
                </div>
              </TabsContent>

              <TabsContent value="integrations">
                <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">Integrations-Demos</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <DemoVideoCard
                    title="CRM-Integration"
                    description="Sieh, wie Eluma mit deinem CRM-System zusammenarbeitet für eine 360-Grad-Sicht auf deine Kunden."
                    duration="4:10"
                    small
                  />

                  <DemoVideoCard
                    title="E-Commerce-Integration"
                    description="Erfahre, wie du deinen Online-Shop mit Eluma verbindest für nahtlosen Kundensupport."
                    duration="3:55"
                    small
                  />

                  <DemoVideoCard
                    title="Marketing-Tool-Integration"
                    description="Entdecke, wie Eluma mit deinen Marketing-Tools zusammenarbeitet für konsistente Kommunikation."
                    duration="4:30"
                    small
                  />

                  <DemoVideoCard
                    title="Zapier-Integration"
                    description="Sieh, wie du Eluma mit über 3.000 Apps verbinden kannst, ohne eine Zeile Code zu schreiben."
                    duration="3:45"
                    small
                  />

                  <DemoVideoCard
                    title="API-Nutzung"
                    description="Erfahre, wie du die Eluma-API für individuelle Integrationen nutzen kannst."
                    duration="5:20"
                    small
                  />

                  <DemoVideoCard
                    title="Datenexport & -import"
                    description="Sieh, wie einfach du Daten in und aus Eluma übertragen kannst."
                    duration="3:15"
                    small
                  />
                </div>
              </TabsContent>

              <TabsContent value="use-cases">
                <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">Anwendungsfälle</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <DemoVideoCard
                    title="Einzelhandel & E-Commerce"
                    description="Sieh, wie Einzelhändler und Online-Shops Eluma nutzen, um Kundenanfragen zu beantworten und Verkäufe zu steigern."
                    duration="6:15"
                  />

                  <DemoVideoCard
                    title="Dienstleistungsunternehmen"
                    description="Erfahre, wie Dienstleister mit Eluma ihre Kundenkommunikation optimieren und Termine verwalten."
                    duration="5:45"
                  />

                  <DemoVideoCard
                    title="Gastronomie & Hotellerie"
                    description="Entdecke, wie Restaurants und Hotels Eluma nutzen, um Reservierungen zu verwalten und Gästefeedback zu sammeln."
                    duration="4:50"
                  />

                  <DemoVideoCard
                    title="Gesundheitswesen"
                    description="Sieh, wie Gesundheitsdienstleister mit Eluma sicher mit Patienten kommunizieren und Termine koordinieren."
                    duration="5:30"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">Persönliche Live-Demo</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Möchtest du Eluma in Aktion sehen? Vereinbare eine persönliche Demo mit einem unserer Produktexperten, der
              dir alle Funktionen zeigt und deine Fragen beantwortet.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Termin wählen</h3>
                  <p className="text-gray-600 mb-4 text-center">
                    Wähle einen Termin, der dir passt. Demos dauern ca. 30 Minuten.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Anforderungen besprechen</h3>
                  <p className="text-gray-600 mb-4 text-center">
                    Teile uns deine spezifischen Anforderungen mit, damit wir die Demo anpassen können.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <Play className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Demo erleben</h3>
                  <p className="text-gray-600 mb-4 text-center">
                    Erlebe Eluma live und stelle alle Fragen, die du hast.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-yellow-300 hover:from-pink-600 hover:to-yellow-400 px-8 py-6 text-xl"
              >
                Demo vereinbaren
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800">Was unsere Kunden sagen</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Kundenfoto"
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-bold">Maria Schmidt</p>
                      <p className="text-sm text-gray-500">Boutique Bella</p>
                    </div>
                  </div>
                  <p className="italic text-gray-600 mb-4">
                    "Nach der Demo war ich sofort überzeugt. Die Benutzeroberfläche ist intuitiv und die Funktionen
                    genau das, was wir für unsere Kundenkommunikation brauchen."
                  </p>
                  <div className="flex items-center text-yellow-400">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Kundenfoto"
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-bold">Thomas Weber</p>
                      <p className="text-sm text-gray-500">Café Sonnenschein</p>
                    </div>
                  </div>
                  <p className="italic text-gray-600 mb-4">
                    "Die Live-Demo hat uns gezeigt, wie wir mit Eluma Zeit sparen können. Besonders beeindruckt hat uns
                    die einfache Integration mit unserem bestehenden System."
                  </p>
                  <div className="flex items-center text-yellow-400">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Kundenfoto"
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-bold">Laura Müller</p>
                      <p className="text-sm text-gray-500">Fitness Studio Vital</p>
                    </div>
                  </div>
                  <p className="italic text-gray-600 mb-4">
                    "Der Produktexperte in der Demo hat genau verstanden, was wir brauchen. Die Lösung wurde perfekt auf
                    unsere Anforderungen zugeschnitten."
                  </p>
                  <div className="flex items-center text-yellow-400">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Häufig gestellte Fragen zur Demo</h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Wie lange dauert eine Demo?</h3>
                  <p className="text-gray-600">
                    Eine typische Demo dauert etwa 30 Minuten, kann aber je nach deinen Fragen und Anforderungen
                    variieren. Wir nehmen uns die Zeit, die du brauchst.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Muss ich mich vorbereiten?</h3>
                  <p className="text-gray-600">
                    Keine spezielle Vorbereitung nötig. Es hilft aber, wenn du dir vorher überlegst, welche Aspekte von
                    Eluma dich besonders interessieren, damit wir die Demo darauf ausrichten können.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Kann ich mehrere Kollegen zur Demo einladen?</h3>
                  <p className="text-gray-600">
                    Absolut! Du kannst so viele Teammitglieder einladen, wie du möchtest. Gib uns einfach Bescheid,
                    damit wir genügend Zeit einplanen können.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Wie läuft die Demo technisch ab?</h3>
                  <p className="text-gray-600">
                    Wir nutzen Zoom oder Microsoft Teams für die Demo. Du erhältst nach der Terminbuchung einen Link,
                    über den du teilnehmen kannst. Du brauchst nur einen Browser und eine stabile Internetverbindung.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Bereit, Eluma in Aktion zu sehen?</h2>
          <p className="text-xl mb-10 text-white max-w-3xl mx-auto">
            Vereinbare jetzt eine persönliche Demo oder starte direkt mit deiner kostenlosen Testphase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-pink-500 hover:bg-gray-100 px-8 py-6 text-xl font-bold">
              Demo vereinbaren
            </Button>
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-pink-600 text-white hover:bg-pink-700 px-8 py-6 text-xl font-bold border-2 border-white"
              >
                Kostenlos testen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <Link href="/" className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-yellow-300 flex items-center justify-center text-white font-bold text-xl mr-2">
                  E
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-yellow-300 text-transparent bg-clip-text">
                  Eluma
                </span>
              </Link>
              <p className="text-gray-400 max-w-md">
                Die smarte Messaging-Plattform für dein Business. Verbinde alle deine Messaging-Kanäle und steigere
                deine Effizienz.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Produkt</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/features" className="text-gray-400 hover:text-pink-400">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="text-gray-400 hover:text-pink-400">
                      Preise
                    </Link>
                  </li>
                  <li>
                    <Link href="/integrations" className="text-gray-400 hover:text-pink-400">
                      Integrationen
                    </Link>
                  </li>
                  <li>
                    <Link href="/integrations" className="text-gray-400 hover:text-pink-400">
                      Integrationen
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Ressourcen</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/blog" className="text-gray-400 hover:text-pink-400">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs" className="text-gray-400 hover:text-pink-400">
                      Dokumentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/help" className="text-gray-400 hover:text-pink-400">
                      Hilfe-Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-gray-400 hover:text-pink-400">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Unternehmen</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-pink-400">
                      Über uns
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-gray-400 hover:text-pink-400">
                      Karriere
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-pink-400">
                      Kontakt
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-gray-400 hover:text-pink-400">
                      Datenschutz
                    </Link>
                  </li>
                  <li>
                    <Link href="/impressum" className="text-gray-400 hover:text-pink-400">
                      Impressum
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Eluma. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function DemoVideoCard({ title, description, duration, small = false }) {
  return (
    <Card className="hover:shadow-lg transition-shadow h-full">
      <CardContent className="p-0">
        <div className="relative aspect-video">
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <Button className="bg-white text-pink-500 hover:bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Play className="h-6 w-6" />
            </Button>
          </div>
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
            {duration}
          </div>
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt={title}
            width={400}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className={`font-bold text-gray-800 mb-2 ${small ? "text-lg" : "text-xl"}`}>{title}</h3>
          <p className="text-gray-600 mb-2">{description}</p>
          <div className="flex items-center text-pink-500 font-medium">
            <span>Ansehen</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

