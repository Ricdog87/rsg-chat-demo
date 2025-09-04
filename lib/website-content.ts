export interface WebsiteContent {
  title: string
  description: string
  content: string
  url: string
  lastUpdated: Date
  keywords: string[]
  sections: ContentSection[]
}

export interface ContentSection {
  heading: string
  content: string
  type: "hero" | "service" | "process" | "cta" | "general"
}

export class WebsiteContentExtractor {
  private static instance: WebsiteContentExtractor
  private contentCache: Map<string, WebsiteContent> = new Map()
  private isExtracting = false

  static getInstance(): WebsiteContentExtractor {
    if (!WebsiteContentExtractor.instance) {
      WebsiteContentExtractor.instance = new WebsiteContentExtractor()
    }
    return WebsiteContentExtractor.instance
  }

  async extractContent(): Promise<void> {
    if (this.isExtracting) return
    this.isExtracting = true

    try {
      const pages = [
        { url: "/", title: "Startseite" },
        { url: "/personalvermittlung", title: "Personalvermittlung" },
        { url: "/schulungen", title: "Schulungen" },
        { url: "/outplacement", title: "Outplacement" },
        { url: "/freelancer", title: "Freelancer" },
        { url: "/kontakt", title: "Kontakt" },
        { url: "/branchen", title: "Branchen" },
      ]

      for (const page of pages) {
        try {
          const content = await this.scrapePage(page.url)
          if (content) {
            this.contentCache.set(page.url, content)
          }
        } catch (error) {
          console.error(`[v0] Error extracting content from ${page.url}:`, error)
          // Fallback to predefined content
          const fallbackContent = this.getPredefinedContent(page.url)
          this.contentCache.set(page.url, fallbackContent)
        }
      }

      // Store in localStorage for persistence
      this.saveToStorage()
    } finally {
      this.isExtracting = false
    }
  }

  private async scrapePage(url: string): Promise<WebsiteContent | null> {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      const html = await response.text()
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, "text/html")

      return this.extractContentFromDOM(doc, url)
    } catch (error) {
      console.error(`[v0] Failed to scrape ${url}:`, error)
      // Return predefined content as fallback
      return this.getPredefinedContent(url)
    }
  }

  private extractContentFromDOM(doc: Document, url: string): WebsiteContent {
    const title = doc.querySelector("h1")?.textContent || doc.title || "RSG"
    const description = doc.querySelector('meta[name="description"]')?.getAttribute("content") || ""

    const sections: ContentSection[] = []
    let fullContent = ""

    // Extract hero sections
    const heroSections = doc.querySelectorAll('section:first-of-type, .hero-section, [class*="hero"]')
    heroSections.forEach((section) => {
      const heading = section.querySelector("h1, h2")?.textContent || ""
      const content = this.extractTextFromElement(section)
      if (heading && content) {
        sections.push({ heading, content, type: "hero" })
        fullContent += `${heading}\n${content}\n\n`
      }
    })

    // Extract service sections
    const serviceSections = doc.querySelectorAll("h2, h3")
    serviceSections.forEach((heading) => {
      const headingText = heading.textContent || ""
      if (
        headingText.toLowerCase().includes("service") ||
        headingText.toLowerCase().includes("angebot") ||
        headingText.toLowerCase().includes("bereich")
      ) {
        const section = heading.closest("section") || heading.parentElement
        if (section) {
          const content = this.extractTextFromElement(section)
          sections.push({ heading: headingText, content, type: "service" })
          fullContent += `${headingText}\n${content}\n\n`
        }
      }
    })

    // Extract process sections
    const processSections = doc.querySelectorAll('[class*="process"], [class*="schritt"]')
    processSections.forEach((section) => {
      const heading = section.querySelector("h2, h3")?.textContent || "Prozess"
      const content = this.extractTextFromElement(section)
      if (content) {
        sections.push({ heading, content, type: "process" })
        fullContent += `${heading}\n${content}\n\n`
      }
    })

    // Extract all other text content
    const mainContent = doc.querySelector("main")
    if (mainContent) {
      const additionalContent = this.extractTextFromElement(mainContent)
      fullContent += additionalContent
    }

    // Extract keywords from content
    const keywords = this.extractKeywords(fullContent)

    return {
      title,
      description,
      content: fullContent.trim(),
      url,
      lastUpdated: new Date(),
      keywords,
      sections,
    }
  }

  private extractTextFromElement(element: Element): string {
    const clone = element.cloneNode(true) as Element

    // Remove script and style elements
    clone.querySelectorAll("script, style, nav, footer").forEach((el) => el.remove())

    // Get text content and clean it up
    let text = clone.textContent || ""

    // Clean up whitespace and normalize
    text = text.replace(/\s+/g, " ").trim()

    return text
  }

  private extractKeywords(content: string): string[] {
    const commonKeywords = [
      "personalvermittlung",
      "recruiting",
      "headhunting",
      "executive search",
      "engineering",
      "it",
      "finance",
      "kaufmännisch",
      "berlin",
      "hamburg",
      "münchen",
      "frankfurt",
      "köln",
      "wiesbaden",
      "nrw",
      "festpreis",
      "transparent",
      "deutschlandweit",
      "bundesweit",
      "schulung",
      "training",
      "outplacement",
      "freelancer",
    ]

    const foundKeywords: string[] = []
    const lowerContent = content.toLowerCase()

    commonKeywords.forEach((keyword) => {
      if (lowerContent.includes(keyword)) {
        foundKeywords.push(keyword)
      }
    })

    return foundKeywords
  }

  private getPredefinedContent(url: string): WebsiteContent {
    const contentMap: Record<string, WebsiteContent> = {
      "/": {
        title: "RSG - Ihr Partner für Personalvermittlung",
        description: "Headhunting & Recruiting zum Festpreis – Deutschlandweit aus Wiesbaden",
        content:
          "RSG ist Ihr vertrauensvoller Partner für Personalvermittlung in Deutschland. Wir sind spezialisiert auf die Bereiche Engineering, IT, Finance und Kaufmännisch. Von unserem Standort in Wiesbaden aus betreuen wir Kunden deutschlandweit in Berlin, Hamburg, München, Frankfurt, Köln und NRW. Transparente Kosten zum Festpreis ohne versteckte Gebühren.",
        url,
        lastUpdated: new Date(),
        keywords: ["personalvermittlung", "recruiting", "wiesbaden", "deutschlandweit", "engineering", "it", "finance"],
        sections: [
          {
            heading: "Personalvermittlung zum Festpreis",
            content: "Transparente Kosten ohne Erfolgsprovision",
            type: "hero",
          },
          { heading: "Unsere Bereiche", content: "Engineering, IT, Finance und Kaufmännisch", type: "service" },
        ],
      },
      "/personalvermittlung": {
        title: "Headhunting & Recruiting zum Festpreis – Deutschlandweit",
        description: "Personalvermittlung & Executive Search für Unternehmen. Festpreis, transparent & schnell",
        content:
          "Headhunting Deutschland – wir besetzen Fach- und Führungspositionen in Berlin, Hamburg, München, Frankfurt, Köln, Wiesbaden & NRW mit einem transparenten Fixpreis von 9.999 €. Transparente Kosten ohne Erfolgsprovision. Executive Search & Direktansprache bundesweit. Schnelle Ergebnisse: erste Profile in 7–14 Tagen. Unser 4-Schritte-Prozess: Bedarfsanalyse, Kandidatensuche, Vorauswahl, Vermittlung.",
        url,
        lastUpdated: new Date(),
        keywords: ["headhunting", "personalvermittlung", "festpreis", "executive search", "deutschlandweit"],
        sections: [
          {
            heading: "Personalvermittlung zum Fixpreis",
            content: "9.999 € Fixpreis, keine versteckten Kosten",
            type: "hero",
          },
          {
            heading: "Unser Prozess",
            content: "4-Schritte: Bedarfsanalyse, Kandidatensuche, Vorauswahl, Vermittlung",
            type: "process",
          },
        ],
      },
      "/schulungen": {
        title: "Recruiting-Schulungen bundesweit",
        description: "Praxisnahe Trainings für bessere Ergebnisse im Executive Search",
        content:
          "Recruiting-Schulungen mit Fokus auf Headhunting Deutschland: Berlin, Hamburg, München, Frankfurt, Köln, Wiesbaden & NRW. Direkter Transfer in die Praxis für Personalvermittlung zum Fixpreis und Executive Search. Unsere Schulungsangebote: Sourcing-Strategien, Direktansprache, Recruiting-Prozessoptimierung. Praxisnahe Inhalte von erfahrenen Recruitern.",
        url,
        lastUpdated: new Date(),
        keywords: ["schulungen", "training", "recruiting", "sourcing", "direktansprache"],
        sections: [
          { heading: "Recruiting Schulungen", content: "Praxisnahe Trainings für bessere Ergebnisse", type: "hero" },
          {
            heading: "Schulungsangebote",
            content: "Sourcing-Strategien, Direktansprache, Prozessoptimierung",
            type: "service",
          },
        ],
      },
      "/outplacement": {
        title: "Outplacement Services – deutschlandweit",
        description: "Professionelle Unterstützung bei beruflichen Veränderungen",
        content:
          "Outplacement Services deutschlandweit in Berlin, Hamburg, München, Frankfurt, Köln, Wiesbaden & NRW. Professionelle Begleitung in der Übergangsphase. Individuelle Karriereberatung und Potenzialanalyse. Optimierung der Bewerbungsunterlagen. Vorbereitung auf Vorstellungsgespräche. Unser 4-Schritte-Prozess: Standortbestimmung, Bewerbungsoptimierung, Interviewtraining, Jobsuche & Netzwerken.",
        url,
        lastUpdated: new Date(),
        keywords: ["outplacement", "karriereberatung", "bewerbung", "jobsuche"],
        sections: [
          {
            heading: "Outplacement Services",
            content: "Professionelle Unterstützung bei beruflichen Veränderungen",
            type: "hero",
          },
          {
            heading: "Unser Prozess",
            content: "Standortbestimmung, Bewerbungsoptimierung, Interviewtraining, Jobsuche",
            type: "process",
          },
        ],
      },
      "/freelancer": {
        title: "Freelancer-Recruiting – bundesweit",
        description: "Qualifizierte Freelancer schnell verfügbar",
        content:
          "Freelancer-Recruiting bundesweit in Berlin, Hamburg, München, Frankfurt, Köln, Wiesbaden & NRW. Schnelle Verfügbarkeit von Spezialisten. Flexible Einsatzmodelle und Vertragslaufzeiten. Unsere Bereiche: IT & Entwicklung (Softwareentwickler, DevOps-Spezialisten, IT-Projektmanager), Management & Beratung (Interim Manager, Unternehmensberater, Change Manager), Marketing & Kreation (Marketing-Spezialisten, Content Creator, UX/UI Designer).",
        url,
        lastUpdated: new Date(),
        keywords: ["freelancer", "interim", "it", "management", "marketing", "flexible"],
        sections: [
          { heading: "Freelancer Recruiting", content: "Qualifizierte Freelancer schnell verfügbar", type: "hero" },
          {
            heading: "Unsere Bereiche",
            content: "IT & Entwicklung, Management & Beratung, Marketing & Kreation",
            type: "service",
          },
        ],
      },
      "/kontakt": {
        title: "Kontakt – Headhunting & Recruiting",
        description: "Kontakt für Headhunting & Recruiting zum Festpreis – Deutschlandweit aus Wiesbaden",
        content:
          "RSG Wiesbaden - Headhunting & Recruiting deutschlandweit aus Wiesbaden. Wir rekrutieren für Engineering, IT, Finance & Kaufmännisch in Berlin, Hamburg, München, Frankfurt, Köln, Wiesbaden & NRW. Transparent zum Festpreis. Telefon: +49 611 341 779 70. Nehmen Sie Kontakt mit uns auf für eine unverbindliche Beratung.",
        url,
        lastUpdated: new Date(),
        keywords: ["kontakt", "wiesbaden", "telefon", "beratung"],
        sections: [
          { heading: "Kontakt", content: "Headhunting & Recruiting deutschlandweit aus Wiesbaden", type: "hero" },
          { heading: "Kontaktdaten", content: "Telefon: +49 611 341 779 70", type: "general" },
        ],
      },
      "/branchen": {
        title: "Recruiting Branchen – Engineering, IT, Finance & Kaufmännisch",
        description: "Deutschlandweite Personalvermittlung aus Wiesbaden für alle Branchen",
        content:
          "Recruiting für Engineering, IT, Finance & Kaufmännisch deutschlandweit aus Wiesbaden. Engineering: Maschinenbau, Elektrotechnik, Mechatronik, Qualitätsmanagement, Produktion. IT: Softwareentwicklung, DevOps, Cloud, Data Engineering, BI & Analytics. Finance: Controlling & FP&A, Rechnungswesen, Internal Audit, Tax & Treasury. Kaufmännisch: Sales, Einkauf, HR, Administration. Transparente Personalvermittlung zum Festpreis in Berlin, Hamburg, München, Frankfurt, Köln & NRW.",
        url,
        lastUpdated: new Date(),
        keywords: ["branchen", "engineering", "it", "finance", "kaufmännisch", "maschinenbau", "software"],
        sections: [
          { heading: "Engineering Recruiting", content: "Maschinenbau, Elektrotechnik, Mechatronik", type: "service" },
          { heading: "IT Recruiting", content: "Software, Data & Cloud", type: "service" },
          { heading: "Finance Recruiting", content: "Controlling, Rechnungswesen, Audit", type: "service" },
          { heading: "Kaufmännisches Recruiting", content: "Sales, Einkauf, HR", type: "service" },
        ],
      },
    }

    return (
      contentMap[url] || {
        title: "RSG",
        description: "Personalvermittlung",
        content: "Allgemeine Informationen über RSG Personalvermittlung.",
        url,
        lastUpdated: new Date(),
        keywords: ["personalvermittlung"],
        sections: [],
      }
    )
  }

  getContent(url?: string): WebsiteContent[] {
    if (url) {
      const content = this.contentCache.get(url)
      return content ? [content] : []
    }
    return Array.from(this.contentCache.values())
  }

  searchContent(query: string): WebsiteContent[] {
    const results: WebsiteContent[] = []
    const searchTerm = query.toLowerCase()

    for (const content of this.contentCache.values()) {
      let score = 0

      // Check title (highest priority)
      if (content.title.toLowerCase().includes(searchTerm)) score += 10

      // Check keywords (high priority)
      if (content.keywords.some((keyword) => keyword.includes(searchTerm))) score += 8

      // Check description (medium priority)
      if (content.description.toLowerCase().includes(searchTerm)) score += 5

      // Check sections (medium priority)
      for (const section of content.sections) {
        if (section.heading.toLowerCase().includes(searchTerm)) score += 6
        if (section.content.toLowerCase().includes(searchTerm)) score += 3
      }

      // Check full content (low priority)
      if (content.content.toLowerCase().includes(searchTerm)) score += 2

      if (score > 0) {
        results.push({ ...content, score } as WebsiteContent & { score: number })
      }
    }

    // Sort by relevance score
    return results.sort((a, b) => ((b as any).score || 0) - ((a as any).score || 0))
  }

  private saveToStorage(): void {
    try {
      const data = Array.from(this.contentCache.entries())
      localStorage.setItem("charlotte-content-cache", JSON.stringify(data))
      localStorage.setItem("charlotte-content-timestamp", new Date().toISOString())
    } catch (error) {
      console.error("[v0] Failed to save content to storage:", error)
    }
  }

  loadFromStorage(): void {
    try {
      const data = localStorage.getItem("charlotte-content-cache")
      const timestamp = localStorage.getItem("charlotte-content-timestamp")

      if (data && timestamp) {
        const lastUpdate = new Date(timestamp)
        const now = new Date()
        const hoursSinceUpdate = (now.getTime() - lastUpdate.getTime()) / (1000 * 60 * 60)

        // Refresh content if older than 24 hours
        if (hoursSinceUpdate < 24) {
          const entries = JSON.parse(data)
          this.contentCache = new Map(entries)
        } else {
          // Content is stale, trigger refresh
          this.extractContent()
        }
      } else {
        // No cached content, extract fresh
        this.extractContent()
      }
    } catch (error) {
      console.error("[v0] Failed to load content from storage:", error)
      // Fallback to fresh extraction
      this.extractContent()
    }
  }

  getContentSuggestions(query: string): string[] {
    const searchResults = this.searchContent(query)
    const suggestions: string[] = []

    searchResults.slice(0, 3).forEach((content) => {
      // Add relevant sections
      content.sections.forEach((section) => {
        if (
          section.heading.toLowerCase().includes(query.toLowerCase()) ||
          section.content.toLowerCase().includes(query.toLowerCase())
        ) {
          suggestions.push(`${section.heading}: ${section.content.substring(0, 200)}...`)
        }
      })
    })

    return suggestions
  }
}
