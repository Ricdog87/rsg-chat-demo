import type React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { PublicNavbar } from "@/components/public-navbar"
import HomePageClient from "./home-page-client"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Elumalab - Intelligente Kundenkommunikation",
  description:
    "Elumalab verbindet alle Ihre Kommunikationskanäle in einer einzigen Plattform für nahtlosen Kundenservice und effiziente Kundenkommunikation.",
  keywords:
    "Kundenkommunikation, Kundenservice, Omnichannel, Chatbot, KI, Kundenbetreuung, Messaging, WhatsApp Business",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <PublicNavbar />
      <HomePageClient />
      <Footer />
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function FeatureListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start">
      <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
      <span>{children}</span>
    </li>
  )
}

function TestimonialCard({
  quote,
  author,
  position,
  image,
}: {
  quote: string
  author: string
  position: string
  image: string
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={author}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm text-gray-600">{position}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">"{quote}"</p>
    </div>
  )
}
