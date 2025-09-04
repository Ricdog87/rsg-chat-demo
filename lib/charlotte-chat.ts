import { WebsiteContentExtractor } from "./website-content"

export interface ChatMessage {
  id: string
  text: string
  sender: "user" | "charlotte"
  timestamp: Date
  sources?: string[]
}

export class CharlotteChatSystem {
  private static instance: CharlotteChatSystem
  private contentExtractor: WebsiteContentExtractor
  private chatHistory: ChatMessage[] = []

  constructor() {
    this.contentExtractor = WebsiteContentExtractor.getInstance()
  }

  static getInstance(): CharlotteChatSystem {
    if (!CharlotteChatSystem.instance) {
      CharlotteChatSystem.instance = new CharlotteChatSystem()
    }
    return CharlotteChatSystem.instance
  }

  async initialize(): Promise<void> {
    this.contentExtractor.loadFromStorage()
    this.loadChatHistory()

    // Ensure content is available
    if (this.contentExtractor.getContent().length === 0) {
      await this.contentExtractor.extractContent()
    }
  }

  async processMessage(userMessage: string): Promise<ChatMessage> {
    const response = await this.generateResponse(userMessage)

    const charlotteMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      text: response.text,
      sender: "charlotte",
      timestamp: new Date(),
      sources: response.sources,
    }

    this.chatHistory.push(charlotteMessage)
    this.saveChatHistory()

    return charlotteMessage
  }

  private async generateResponse(userInput: string): Promise<{ text: string; sources: string[] }> {
    const input = userInput.toLowerCase()
    const sources: string[] = []

    const relevantContent = this.contentExtractor.searchContent(userInput)

    // Service-specific responses
    if (input.includes("personalvermittlung") || input.includes("recruiting") || input.includes("headhunting")) {
      const personalContent = relevantContent.find((c) => c.url === "/personalvermittlung")
      sources.push("/personalvermittlung")

      return {
        text: `Wir sind spezialisiert auf Personalvermittlung zum Festpreis von 9.999 € - deutschlandweit von Wiesbaden aus. Unsere Expertise liegt in Engineering, IT, Finance und Kaufmännisch. Wir arbeiten in Berlin, Hamburg, München, Frankfurt, Köln und NRW. ${personalContent ? "Erste qualifizierte Profile erhalten Sie bereits in 7-14 Tagen." : ""} Möchten Sie mehr über unseren transparenten Prozess erfahren?`,
        sources,
      }
    }

    if (input.includes("kontakt") || input.includes("termin") || input.includes("beratung")) {
      sources.push("/kontakt")
      return {
        text: "Gerne können Sie einen Beratungstermin mit uns vereinbaren! Rufen Sie uns an unter +49 611 341 779 70 oder nutzen Sie unser Kontaktformular. Unser Team aus Wiesbaden meldet sich schnellstmöglich bei Ihnen. Wir beraten Sie gerne zu Ihren Recruiting-Anforderungen.",
        sources,
      }
    }

    if (input.includes("standort") || input.includes("wiesbaden") || input.includes("wo")) {
      sources.push("/kontakt")
      return {
        text: "Unser Hauptsitz befindet sich in Wiesbaden. Von hier aus betreuen wir Kunden deutschlandweit - besonders stark sind wir in Berlin, Hamburg, München, Frankfurt, Köln und NRW. Durch unser Netzwerk können wir bundesweit qualifizierte Kandidaten in den Bereichen Engineering, IT, Finance und Kaufmännisch vermitteln.",
        sources,
      }
    }

    if (input.includes("schulung") || input.includes("training") || input.includes("weiterbildung")) {
      const schulungContent = relevantContent.find((c) => c.url === "/schulungen")
      sources.push("/schulungen")

      return {
        text: `Wir bieten professionelle Recruiting-Schulungen an: Sourcing-Strategien, Direktansprache und Prozessoptimierung. ${schulungContent ? "Unsere Trainings sind praxisnah und von erfahrenen Recruitern entwickelt." : ""} Diese helfen dabei, Ihre Recruiting-Ergebnisse nachhaltig zu verbessern. Interessiert an einem Training für Ihr Team?`,
        sources,
      }
    }

    if (input.includes("outplacement") || input.includes("karriere") || input.includes("jobwechsel")) {
      const outplacementContent = relevantContent.find((c) => c.url === "/outplacement")
      sources.push("/outplacement")

      return {
        text: `Unser Outplacement-Service unterstützt sowohl Unternehmen als auch Mitarbeiter bei beruflichen Veränderungen. ${outplacementContent ? "Wir bieten individuelle Karriereberatung, Bewerbungsoptimierung und Interviewtraining." : ""} Professionell und einfühlsam begleiten wir Sie durch den gesamten Prozess.`,
        sources,
      }
    }

    if (input.includes("freelancer") || input.includes("interim") || input.includes("projekt")) {
      const freelancerContent = relevantContent.find((c) => c.url === "/freelancer")
      sources.push("/freelancer")

      return {
        text: `Wir vermitteln qualifizierte Freelancer in drei Hauptbereichen: IT & Entwicklung, Management & Beratung sowie Marketing & Kreation. ${freelancerContent ? "Schnelle Verfügbarkeit und flexible Einsatzmodelle sind unsere Stärken." : ""} Benötigen Sie kurzfristig Spezialisten für ein Projekt?`,
        sources,
      }
    }

    if (
      input.includes("branchen") ||
      input.includes("engineering") ||
      input.includes("it") ||
      input.includes("finance") ||
      input.includes("kaufmännisch")
    ) {
      const branchenContent = relevantContent.find((c) => c.url === "/branchen")
      sources.push("/branchen")

      let specificInfo = ""
      if (input.includes("engineering")) {
        specificInfo =
          "Im Engineering-Bereich rekrutieren wir für Maschinenbau, Elektrotechnik, Mechatronik, Qualitätsmanagement und Produktion."
      } else if (input.includes("it")) {
        specificInfo =
          "Im IT-Bereich sind wir stark in Softwareentwicklung, DevOps, Cloud, Data Engineering und Analytics."
      } else if (input.includes("finance")) {
        specificInfo =
          "Im Finance-Bereich besetzen wir Positionen in Controlling, FP&A, Rechnungswesen und Internal Audit."
      } else if (input.includes("kaufmännisch")) {
        specificInfo = "Kaufmännisch rekrutieren wir für Sales, Einkauf, HR und Administration."
      }

      return {
        text: `Wir sind spezialisiert auf vier Hauptbranchen: Engineering, IT, Finance und Kaufmännisch. ${specificInfo} ${branchenContent ? "Deutschlandweit von Wiesbaden aus, mit besonderer Stärke in den Großstädten." : ""} In welchem Bereich kann ich Ihnen weiterhelfen?`,
        sources,
      }
    }

    if (input.includes("kosten") || input.includes("preis") || input.includes("festpreis")) {
      sources.push("/personalvermittlung")
      return {
        text: "Unser Personalvermittlungsservice kostet 9.999 € als Festpreis - ohne versteckte Kosten oder Erfolgsprovision. Das macht unsere Zusammenarbeit transparent und planbar. Sie zahlen nur einmal, unabhängig davon, wie lange die Suche dauert oder wie viele Kandidaten wir Ihnen präsentieren.",
        sources,
      }
    }

    if (relevantContent.length > 0) {
      const topContent = relevantContent[0]
      sources.push(topContent.url)

      // Extract relevant section
      const relevantSection = topContent.sections.find(
        (section) => section.content.toLowerCase().includes(input) || section.heading.toLowerCase().includes(input),
      )

      if (relevantSection) {
        return {
          text: `${relevantSection.content} Möchten Sie mehr Details dazu erfahren oder haben Sie spezifische Fragen?`,
          sources,
        }
      }

      return {
        text: `Basierend auf Ihrer Anfrage kann ich Ihnen folgende Information geben: ${topContent.description} Für detailliertere Informationen empfehle ich Ihnen, direkt Kontakt mit unserem Team aufzunehmen.`,
        sources,
      }
    }

    // Default response
    return {
      text: "Das ist eine interessante Frage! Für detaillierte Informationen zu unseren Services - Personalvermittlung, Schulungen, Outplacement oder Freelancer-Vermittlung - empfehle ich Ihnen, direkt Kontakt mit unserem Team aufzunehmen. Wir beraten Sie gerne persönlich unter +49 611 341 779 70.",
      sources: ["/kontakt"],
    }
  }

  getChatHistory(): ChatMessage[] {
    return this.chatHistory
  }

  private saveChatHistory(): void {
    try {
      localStorage.setItem("charlotte-chat-history", JSON.stringify(this.chatHistory))
    } catch (error) {
      console.error("[v0] Failed to save chat history:", error)
    }
  }

  private loadChatHistory(): void {
    try {
      const data = localStorage.getItem("charlotte-chat-history")
      if (data) {
        this.chatHistory = JSON.parse(data)
      }
    } catch (error) {
      console.error("[v0] Failed to load chat history:", error)
    }
  }

  clearHistory(): void {
    this.chatHistory = []
    localStorage.removeItem("charlotte-chat-history")
  }
}
