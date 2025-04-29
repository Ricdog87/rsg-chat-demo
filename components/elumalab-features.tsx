"use client"

import { MessageSquare, Users, BarChart, Zap, Globe, Smartphone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const detailedFeatures = [
  {
    icon: MessageSquare,
    title: "Einheitlicher Posteingang",
    description: "Alle Nachrichten von WhatsApp, Instagram, Facebook und mehr an einem Ort verwalten.",
  },
  {
    icon: Users,
    title: "Team-Kollaboration",
    description: "Weise Konversationen zu, hinterlasse interne Notizen und vermeide Doppelarbeit.",
  },
  {
    icon: BarChart,
    title: "Detaillierte Analysen",
    description: "Verstehe deine Kunden besser mit umfassenden Berichten und Statistiken.",
  },
  {
    icon: Zap,
    title: "KI-gestützte Automatisierungen",
    description: "Spare Zeit mit intelligenten Automatisierungen und Chatbots.",
  },
  {
    icon: Globe,
    title: "Multi-Kanal-Support",
    description: "Verbinde WhatsApp, Instagram, Facebook, E-Mail und mehr in einer einzigen Plattform.",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Bleibe auch unterwegs mit der Eluma-App für iOS und Android mit deinen Kunden in Kontakt.",
  },
]

export function ElumalabFeatures() {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {detailedFeatures.map((feature) => (
        <Card key={feature.title} className="border-border/50 bg-background/50">
          <CardContent className="p-4 sm:p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <feature.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 font-semibold">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
