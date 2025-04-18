"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  MessageSquare,
  Users,
  BarChart3,
  Zap,
  Clock,
  Shield,
  Smartphone,
  Globe,
  Headphones,
} from "lucide-react"
import { PageLayout } from "@/components/page-layout"
import { motion } from "framer-motion"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function FeaturesPageClient() {
  return (
    <PageLayout>
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Features</h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Entdecke alle Funktionen, die Elumalab zu deinem unverzichtbaren Tool für Kundenkommunikation machen.
          </p>
        </div>
      </header>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Alles, was du für erfolgreiche Kundenkommunikation brauchst
            </h2>
            <p className="text-xl text-gray-600">
              Elumalab vereint alle wichtigen Funktionen in einer intuitiven Plattform, damit du dich auf das
              Wesentliche konzentrieren kannst: deine Kunden.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <FeatureCard
              icon={<MessageSquare className="h-7 w-7 text-pink-500" />}
              title="Einheitlicher Posteingang"
              description="Alle Nachrichten von WhatsApp, Instagram, Facebook und mehr an einem Ort. Nie wieder zwischen Apps wechseln."
            />

            <FeatureCard
              icon={<Users className="h-7 w-7 text-orange-500" />}
              title="Team-Kollaboration"
              description="Weise Konversationen zu, hinterlasse interne Notizen und arbeite nahtlos mit deinem Team zusammen."
            />

            <FeatureCard
              icon={<BarChart3 className="h-7 w-7 text-yellow-500" />}
              title="Umfassende Analysen"
              description="Verfolge wichtige Metriken wie Antwortzeit, Konversionsrate und Kundenzufriedenheit in Echtzeit."
            />

            <FeatureCard
              icon={<Zap className="h-7 w-7 text-green-500" />}
              title="KI-gestützte Automatisierung"
              description="Spare Zeit mit intelligenten Automatisierungen, Chatbots und vordefinierten Antworten."
            />

            <FeatureCard
              icon={<Clock className="h-7 w-7 text-blue-500" />}
              title="Zeitplanung"
              description="Plane Nachrichten im Voraus und stelle sicher, dass du deine Kunden zur richtigen Zeit erreichst."
            />

            <FeatureCard
              icon={<Shield className="h-7 w-7 text-purple-500" />}
              title="DSGVO-konform"
              description="Alle Daten werden sicher und DSGVO-konform gespeichert. Deine Kundendaten sind bei uns in guten Händen."
            />

            <FeatureCard
              icon={<Smartphone className="h-7 w-7 text-red-500" />}
              title="Mobile App"
              description="Bleibe auch unterwegs mit deinen Kunden verbunden. Unsere mobile App bietet alle Funktionen der Desktop-Version."
            />

            <FeatureCard
              icon={<Globe className="h-7 w-7 text-indigo-500" />}
              title="Mehrsprachiger Support"
              description="Kommuniziere mit Kunden in ihrer Sprache. Elumalab unterstützt automatische Übersetzungen in über 50 Sprachen."
            />

            <FeatureCard
              icon={<Headphones className="h-7 w-7 text-teal-500" />}
              title="Premium Support"
              description="Unser Expertenteam steht dir bei Fragen zur Seite. Erhalte schnelle und kompetente Hilfe, wann immer du sie brauchst."
            />
          </motion.div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Einheitlicher Posteingang für alle Kanäle
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Mit Elumalab hast du alle Kundengespräche an einem Ort. Egal ob WhatsApp, Instagram, Facebook oder
                E-Mail – du behältst stets den Überblick.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Keine verpassten Nachrichten mehr, keine Verwirrung darüber, welcher Kunde auf welchem Kanal geschrieben
                hat. Alles ist übersichtlich organisiert und leicht zugänglich.
              </p>
              <motion.div
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <FeaturePoint text="Alle Messaging-Kanäle in einem Dashboard" />
                <FeaturePoint text="Nahtloser Wechsel zwischen verschiedenen Plattformen" />
                <FeaturePoint text="Vollständiger Konversationsverlauf für jeden Kunden" />
                <FeaturePoint text="Intelligente Sortierung und Filterung von Nachrichten" />
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-yellow-300 rounded-2xl blur opacity-20"></div>
              <Image
                src="/images/elumalab-dashboard.png"
                alt="Einheitlicher Posteingang"
                width={600}
                height={400}
                className="rounded-xl relative z-10 transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              className="order-2 md:order-1 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-yellow-300 rounded-2xl blur opacity-20"></div>
              <Image
                src="/images/luna-dashboard.png"
                alt="Team-Kollaboration"
                width={600}
                height={400}
                className="rounded-xl relative z-10 transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              className="order-1 md:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Nahtlose Team-Kollaboration</h2>
              <p className="text-lg text-gray-600 mb-6">
                Arbeite effizient mit deinem Team zusammen. Weise Konversationen zu, hinterlasse interne Notizen und
                stelle sicher, dass jede Kundenanfrage optimal bearbeitet wird.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Mit Elumalab behält jeder im Team den Überblick darüber, wer an welcher Konversation arbeitet, was
                bereits besprochen wurde und welche Schritte als Nächstes anstehen.
              </p>
              <motion.div
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <FeaturePoint text="Zuweisung von Konversationen an Teammitglieder" />
                <FeaturePoint text="Interne Notizen, die nur für dein Team sichtbar sind" />
                <FeaturePoint text="Echtzeit-Benachrichtigungen über neue Nachrichten" />
                <FeaturePoint text="Detaillierte Leistungsanalysen für jedes Teammitglied" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
              Bereit, deine Kundenkommunikation zu revolutionieren?
            </h2>
            <p className="text-xl mb-10 text-white">
              Starte jetzt mit Elumalab und erlebe, wie einfach und effizient moderne Kundenkommunikation sein kann.
              Keine Kreditkarte erforderlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  14 Tage kostenlos testen
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Demo ansehen
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transform hover:-translate-y-2 transition-all duration-300"
      variants={fadeIn}
      whileHover={{ y: -8 }}
    >
      <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

function FeaturePoint({ text }) {
  return (
    <motion.div
      className="flex items-start"
      variants={fadeIn}
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
      <p className="text-gray-700">{text}</p>
    </motion.div>
  )
}
