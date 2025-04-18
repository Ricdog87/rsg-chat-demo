import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2 } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation - Same as in page.tsx */}
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
              <Link href="/pricing" className="text-pink-500 font-medium">
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transparente Preise für jede Unternehmensgröße
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Wähle das passende Paket für dein Business und skaliere flexibel mit deinen Anforderungen. Alle Pläne
            beinhalten unseren erstklassigen Support.
          </p>
        </div>
      </header>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="monthly" className="w-full max-w-4xl mx-auto mb-12">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-[400px] grid-cols-2">
                <TabsTrigger value="monthly">Monatlich</TabsTrigger>
                <TabsTrigger value="yearly">
                  Jährlich{" "}
                  <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">20% Rabatt</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="monthly">
              <div className="grid md:grid-cols-3 gap-8">
                <PricingCard
                  title="Starter"
                  price="29"
                  description="Perfekt für kleine Unternehmen und Einzelpersonen."
                  features={[
                    "1 WhatsApp Business Nummer",
                    "Bis zu 500 Nachrichten/Monat",
                    "1 Teammitglied",
                    "Grundlegende Automatisierungen",
                    "E-Mail Support",
                  ]}
                  buttonText="Kostenlos testen"
                  buttonLink="/signup"
                  popular={false}
                />

                <PricingCard
                  title="Business"
                  price="79"
                  description="Ideal für wachsende Unternehmen mit mehreren Mitarbeitern."
                  features={[
                    "3 WhatsApp Business Nummern",
                    "Bis zu 2.000 Nachrichten/Monat",
                    "5 Teammitglieder",
                    "Erweiterte Automatisierungen",
                    "Kundenprofile",
                    "Prioritäts-Support",
                    "Onboarding-Unterstützung",
                  ]}
                  buttonText="Kostenlos testen"
                  buttonLink="/signup"
                  popular={true}
                />

                <PricingCard
                  title="Enterprise"
                  price="199"
                  description="Für große Unternehmen mit hohem Nachrichtenvolumen."
                  features={[
                    "Unbegrenzte WhatsApp Nummern",
                    "Unbegrenzte Nachrichten",
                    "Unbegrenzte Teammitglieder",
                    "Premium Automatisierungen",
                    "API-Zugang",
                    "Dedizierter Account Manager",
                    "24/7 Support",
                    "Individuelles Onboarding",
                  ]}
                  buttonText="Kontakt aufnehmen"
                  buttonLink="/contact"
                  popular={false}
                />
              </div>
            </TabsContent>

            <TabsContent value="yearly">
              <div className="grid md:grid-cols-3 gap-8">
                <PricingCard
                  title="Starter"
                  price="23"
                  description="Perfekt für kleine Unternehmen und Einzelpersonen."
                  features={[
                    "1 WhatsApp Business Nummer",
                    "Bis zu 500 Nachrichten/Monat",
                    "1 Teammitglied",
                    "Grundlegende Automatisierungen",
                    "E-Mail Support",
                  ]}
                  buttonText="Kostenlos testen"
                  buttonLink="/signup"
                  popular={false}
                  period="pro Monat, jährlich abgerechnet"
                />

                <PricingCard
                  title="Business"
                  price="63"
                  description="Ideal für wachsende Unternehmen mit mehreren Mitarbeitern."
                  features={[
                    "3 WhatsApp Business Nummern",
                    "Bis zu 2.000 Nachrichten/Monat",
                    "5 Teammitglieder",
                    "Erweiterte Automatisierungen",
                    "Kundenprofile",
                    "Prioritäts-Support",
                    "Onboarding-Unterstützung",
                  ]}
                  buttonText="Kostenlos testen"
                  buttonLink="/signup"
                  popular={true}
                  period="pro Monat, jährlich abgerechnet"
                />

                <PricingCard
                  title="Enterprise"
                  price="159"
                  description="Für große Unternehmen mit hohem Nachrichtenvolumen."
                  features={[
                    "Unbegrenzte WhatsApp Nummern",
                    "Unbegrenzte Nachrichten",
                    "Unbegrenzte Teammitglieder",
                    "Premium Automatisierungen",
                    "API-Zugang",
                    "Dedizierter Account Manager",
                    "24/7 Support",
                    "Individuelles Onboarding",
                  ]}
                  buttonText="Kontakt aufnehmen"
                  buttonLink="/contact"
                  popular={false}
                  period="pro Monat, jährlich abgerechnet"
                />
              </div>
            </TabsContent>
          </Tabs>

          {/* Add-ons */}
          <div className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Erweitere dein Paket mit Add-ons</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Zusätzliche Teammitglieder</CardTitle>
                  <CardDescription>Erweitere dein Team nach Bedarf</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-2">
                    €15<span className="text-lg font-normal text-gray-500">/Monat pro Mitglied</span>
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Voller Zugriff auf alle Funktionen</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Individuelle Berechtigungen einstellbar</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Hinzufügen
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Zusätzliche Nachrichten</CardTitle>
                  <CardDescription>Mehr Kapazität für deine Kommunikation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-2">
                    €25<span className="text-lg font-normal text-gray-500">/1.000 Nachrichten</span>
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Automatische Aufstockung möglich</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Übertragung in den nächsten Monat</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Hinzufügen
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Custom Plan */}
          <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-pink-500 to-yellow-300 p-8 rounded-xl text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Brauchst du einen individuellen Plan?</h2>
            <p className="text-xl mb-8">
              Wir erstellen dir gerne ein maßgeschneidertes Angebot, das perfekt zu deinen Anforderungen passt.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-pink-500 hover:bg-gray-100">
                Kontaktiere uns
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Häufig gestellte Fragen</h2>

          <div className="space-y-6">
            <FaqItem
              question="Wie funktioniert die kostenlose Testphase?"
              answer="Du kannst Eluma 14 Tage lang kostenlos mit allen Funktionen des Business-Pakets testen. Keine Kreditkarte erforderlich. Nach Ablauf der Testphase kannst du dich für ein Paket entscheiden oder dein Konto wird automatisch auf die kostenlose Version herabgestuft."
            />

            <FaqItem
              question="Kann ich mein Paket jederzeit wechseln?"
              answer="Ja, du kannst jederzeit zu einem höheren Paket upgraden. Ein Downgrade ist zum Ende deiner aktuellen Abrechnungsperiode möglich. Alle Änderungen werden sofort wirksam und die Kosten anteilig berechnet."
            />

            <FaqItem
              question="Wie funktioniert das Onboarding?"
              answer="Nach der Registrierung bekommst du Zugang zu unserem Onboarding-Programm. Bei Business- und Enterprise-Paketen erhältst du persönliche Unterstützung durch einen unserer Experten, der dir bei der Einrichtung hilft und dich durch alle Funktionen führt. Für das Starter-Paket bieten wir umfassende Dokumentation und Video-Tutorials."
            />

            <FaqItem
              question="Gibt es versteckte Kosten?"
              answer="Nein, bei Eluma gibt es keine versteckten Kosten. Alle Preise sind transparent und beinhalten alle genannten Funktionen. Zusätzliche Kosten entstehen nur, wenn du aktiv Add-ons wie zusätzliche Teammitglieder oder Nachrichtenkontingente hinzufügst."
            />

            <FaqItem
              question="Wie funktioniert die Wartung während der Nutzung?"
              answer="Wir bieten kontinuierliche Wartung und Updates für alle Pakete. Unser System wird regelmäßig aktualisiert, um Sicherheit und Leistung zu gewährleisten. Bei technischen Problemen steht dir unser Support-Team zur Verfügung, wobei die Reaktionszeiten je nach Paket variieren."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-800">
            Bereit, deine Kundenkommunikation zu revolutionieren?
          </h2>
          <p className="text-xl mb-10 text-gray-700 max-w-3xl mx-auto">
            Starte jetzt mit Eluma und erlebe den Unterschied. Keine Kreditkarte für die Testphase erforderlich.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-yellow-300 hover:from-pink-600 hover:to-yellow-400 text-white px-8 py-6 text-xl"
              >
                14 Tage kostenlos testen
              </Button>
            </Link>
            <Link href="/demo">
              <Button
                size="lg"
                className="bg-white text-pink-500 hover:bg-gray-100 border-2 border-pink-500 font-bold px-8 py-6 text-xl"
              >
                Demo ansehen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - Same as in page.tsx */}
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

function PricingCard({ title, price, description, features, buttonText, buttonLink, popular, period = "pro Monat" }) {
  return (
    <Card className={`relative ${popular ? "border-pink-500 shadow-xl" : "border-gray-200"}`}>
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-500 to-yellow-300 text-white px-4 py-1 rounded-full text-sm font-medium">
          Beliebteste Wahl
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <span className="text-5xl font-bold">€{price}</span>
          <span className="text-gray-500 ml-2">{period}</span>
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href={buttonLink} className="w-full">
          <Button
            className={`w-full ${popular ? "bg-gradient-to-r from-pink-500 to-yellow-300 hover:from-pink-600 hover:to-yellow-400" : ""}`}
            variant={popular ? "default" : "outline"}
          >
            {buttonText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

function FaqItem({ question, answer }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-3">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  )
}

