import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import CookieConsent from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Headhunting & Recruiting zum Festpreis – Deutschlandweit | Lacar Associate",
  description:
    "Personalvermittlung & Executive Search zum Festpreis – Deutschlandweit aus Wiesbaden. Engineering, IT, Finance & Kaufmännisch in Berlin, Hamburg, München, Frankfurt, Köln, NRW & ganz Deutschland.",
  alternates: {
    canonical: "https://lacar-associate.de",
  },
  openGraph: {
    title: "Headhunting & Recruiting zum Festpreis – Deutschlandweit | Lacar Associate",
    description:
      "Personalvermittlung & Executive Search zum Festpreis – Deutschlandweit aus Wiesbaden. Engineering, IT, Finance & Kaufmännisch in Berlin, Hamburg, München, Frankfurt, Köln, NRW & ganz Deutschland.",
    url: "https://lacar-associate.de",
    siteName: "Lacar Associate",
    images: [{ url: "https://lacar-associate.de/og-image.jpg" }],
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Headhunting & Recruiting zum Festpreis – Deutschlandweit | Lacar Associate",
    description:
      "Personalvermittlung & Executive Search zum Festpreis – Deutschlandweit aus Wiesbaden. Engineering, IT, Finance & Kaufmännisch in Berlin, Hamburg, München, Frankfurt, Köln, NRW & ganz Deutschland.",
    images: ["https://lacar-associate.de/og-image.jpg"],
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lacar Associate",
    url: "https://lacar-associate.de",
    sameAs: ["https://www.linkedin.com/company/lacar-associate/", "https://www.xing.com/companies/lacar-associate"],
    knowsAbout: ["Engineering Recruiting", "IT Recruiting", "Finance Recruiting", "Kaufmännisches Recruiting"],
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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <CookieConsent />
      </body>
    </html>
  )
}
