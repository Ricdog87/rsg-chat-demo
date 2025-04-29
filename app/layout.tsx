import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Analytics } from "@/components/analytics"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { LanguageProvider } from "@/app/contexts/language-context"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "RSG AI Consulting | KI-Lösungen & Prompt Engineering",
  description:
    "RSG AI Consulting ist ein innovatives Beratungsunternehmen, das sich auf KI-Lösungen, Prompt Engineering und AI-Implementierung für Unternehmen spezialisiert hat.",
  keywords: [
    "KI-Lösungen",
    "Prompt Engineering",
    "AI-Implementierung",
    "Künstliche Intelligenz",
    "KI-Beratung",
    "KI-Strategie",
    "Chatbot-Entwicklung",
    "Workflow-Automatisierung",
    "GPT-4",
    "Claude",
    "Gemini",
    "LangChain",
  ],
  authors: [{ name: "RSG AI Consulting" }],
  creator: "RSG AI Consulting",
  publisher: "RSG AI Consulting",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://recruiting-sg.de",
    title: "RSG AI Consulting | KI-Lösungen & Prompt Engineering",
    description:
      "Maßgeschneiderte KI-Lösungen und Prompt Engineering für Unternehmen. Optimieren Sie Ihre Geschäftsprozesse mit künstlicher Intelligenz.",
    siteName: "RSG AI Consulting",
  },
  twitter: {
    card: "summary_large_image",
    title: "RSG AI Consulting | KI-Lösungen & Prompt Engineering",
    description:
      "Maßgeschneiderte KI-Lösungen und Prompt Engineering für Unternehmen. Optimieren Sie Ihre Geschäftsprozesse mit künstlicher Intelligenz.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://recruiting-sg.de" />
        <meta name="theme-color" content="#04d9b2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "RSG AI Consulting",
              url: "https://recruiting-sg.de",
              logo: "https://recruiting-sg.de/images/RSG-logo.jpeg",
              description:
                "RSG AI Consulting ist ein innovatives Beratungsunternehmen, das sich auf KI-Lösungen, Prompt Engineering und AI-Implementierung für Unternehmen spezialisiert hat.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Am Heiligenhaus 9",
                addressLocality: "Wiesbaden",
                postalCode: "65207",
                addressCountry: "DE",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+49-176-6077-2445",
                contactType: "customer service",
                email: "info@recruiting-sg.de",
              },
              sameAs: [
                "https://www.linkedin.com/company/105505351",
                "https://www.instagram.com/recruiting_solutions_group/",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Header />
            <Suspense fallback={<div className="min-h-screen"></div>}>{children}</Suspense>
            <Footer />
            <Analytics />
            <TailwindIndicator />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
