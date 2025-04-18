"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "de" | "en"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize with browser language or default to German
  const [language, setLanguage] = useState<Language>("de")

  // Load language preference from localStorage on client side
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && (savedLanguage === "de" || savedLanguage === "en")) {
        setLanguage(savedLanguage)
      } else {
        // Try to detect browser language
        const browserLang = navigator.language.split("-")[0]
        if (browserLang === "en") {
          setLanguage("en")
        }
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error)
    }
  }, [])

  // Save language preference to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem("language", language)
      // Update HTML lang attribute
      document.documentElement.lang = language
    } catch (error) {
      console.error("Error writing to localStorage:", error)
    }
  }, [language])

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Translations dictionary
const translations: Record<Language, Record<string, string>> = {
  de: {
    // Navigation
    home: "Home",
    about: "Über uns",
    services: "Dienstleistungen",
    "connect-recruit": "Connect Recruit",
    elumalab: "Elumalab",
    "roi-calculator": "KI-ROI Kalkulator",
    contact: "Kontakt",
    "book-consultation": "Beratung buchen",

    // Hero Section
    "hero-tag": "KI-GESTÜTZTE LÖSUNGEN FÜR UNTERNEHMEN",
    "hero-title-1": "KI-Lösungen für die",
    "hero-title-2": "Zukunft Ihres Unternehmens",
    "hero-description":
      "Wir entwickeln maßgeschneiderte KI-Lösungen und Prompt-Engineering-Strategien, die Ihr Unternehmen auf die nächste Stufe heben. Unsere Expertise macht uns zum idealen Partner für Ihre digitale Transformation.",
    "request-ai-consultation": "KI-Beratung anfragen",
    "our-ai-solutions": "Unsere KI-Lösungen",

    // AI Features
    "prompt-engineering": "Prompt Engineering",
    "prompt-engineering-desc": "Optimierte Prompts für maximale KI-Leistung",
    "ai-integration": "KI-Integration",
    "ai-integration-desc": "Nahtlose Einbindung in bestehende Systeme",
    "custom-solutions": "Maßgeschneiderte Lösungen",
    "custom-solutions-desc": "Individuell auf Ihre Anforderungen zugeschnitten",

    // About Section
    "about-title": "Über uns",
    "about-description":
      "RSG AI Consulting ist ein innovatives Beratungsunternehmen, das sich auf KI-Lösungen und Prompt Engineering für Marketing, Vertrieb und Recruiting spezialisiert hat. Wir helfen Unternehmen, die transformative Kraft der künstlichen Intelligenz strategisch zu nutzen.",

    // About Features
    "ai-expertise": "KI-Expertise",
    "ai-expertise-desc":
      "Wir sind Spezialisten für künstliche Intelligenz und deren strategische Integration in Geschäftsprozesse.",
    "prompt-engineering-feature": "Prompt Engineering",
    "prompt-engineering-feature-desc":
      "Wir entwickeln optimierte Prompts, die das volle Potenzial von KI-Modellen für Ihre Anwendungsfälle ausschöpfen.",
    "innovative-solutions": "Innovative Lösungen",
    "innovative-solutions-desc":
      "Wir entwickeln maßgeschneiderte KI-Lösungen, die Ihr Unternehmen auf die nächste Stufe heben.",
    "measurable-results": "Messbare Ergebnisse",
    "measurable-results-desc":
      "Wir liefern datengestützte, messbare Ergebnisse, die Ihren ROI maximieren und Ihre Geschäftsziele unterstützen.",

    // Mission
    "our-mission": "Unsere Mission",
    "mission-text-1":
      "Wir glauben, dass künstliche Intelligenz das Potenzial hat, Unternehmen grundlegend zu transformieren. Unsere Mission ist es, diese Technologie zugänglich und nutzbar zu machen, indem wir maßgeschneiderte Lösungen entwickeln, die auf die spezifischen Bedürfnisse unserer Kunden zugeschnitten sind.",
    "mission-text-2":
      "Als Experten im Prompt Engineering verstehen wir, wie man KI-Modelle optimal anspricht und steuert, um präzise, relevante und wertvolle Ergebnisse zu erzielen. Wir schließen die Lücke zwischen komplexer KI-Technologie und praktischen Geschäftsanwendungen.",
    technologies: "Technologien & KI-Modelle",
    "prompt-example": "Prompt Engineering Beispiel:",
    "optimized-prompt": "// Optimierter Prompt für präzise Antworten",
    "ai-analysis": "KI-Analyse läuft",

    // Services Section
    "services-title": "Unsere KI-Dienstleistungen",
    "services-description":
      "Wir bieten eine breite Palette an KI-gestützten Dienstleistungen, die Ihnen helfen, Ihre Geschäftsprozesse zu optimieren und Ihre Ziele zu erreichen. Unsere Expertise in Prompt Engineering und KI-Implementierung macht uns zum idealen Partner für Ihre digitale Transformation.",
    "premium-service": "Premium-Dienstleistung",
    "ai-transformation": "KI-Transformation für Unternehmen",
    "ai-transformation-desc":
      "Unser ganzheitlicher Ansatz zur KI-Transformation umfasst Strategie, Implementierung, Training und kontinuierliche Optimierung. Wir begleiten Sie auf dem gesamten Weg zu einem KI-gestützten Unternehmen.",
    "start-transformation": "Transformation starten",
    "learn-more": "Mehr erfahren",
    "tools-technologies": "Tools & Technologien:",

    // Service Items
    "ai-strategy": "KI-Strategie & Implementierung",
    "ai-strategy-desc":
      "Wir entwickeln maßgeschneiderte KI-Strategien und implementieren fortschrittliche KI-Lösungen, die Ihre Geschäftsprozesse revolutionieren.",
    "prompt-engineering-service": "Prompt Engineering",
    "prompt-engineering-service-desc":
      "Wir optimieren Ihre KI-Prompts für maximale Effizienz und Präzision, um das volle Potenzial von Large Language Models auszuschöpfen.",
    "ai-workflows": "KI-gestützte Workflows",
    "ai-workflows-desc":
      "Wir automatisieren komplexe Geschäftsprozesse mit KI-gestützten Workflows, die Ihre Effizienz steigern und Kosten senken.",
    "process-automation": "Digitale Prozessautomatisierung",
    "process-automation-desc":
      "Wir automatisieren wiederkehrende Aufgaben mit KI, um Ihre Mitarbeiter zu entlasten und die Produktivität zu steigern.",
    "ai-chatbots": "KI-Chatbots & Assistenten",
    "ai-chatbots-desc":
      "Wir entwickeln intelligente Chatbots und KI-Assistenten, die Ihren Kundenservice revolutionieren und 24/7 verfügbar sind.",
    "data-analysis": "Datenanalyse & KI-Insights",
    "data-analysis-desc":
      "Wir nutzen KI, um Ihre Daten zu analysieren und wertvolle Erkenntnisse zu gewinnen, die Ihre Entscheidungsfindung verbessern.",

    // Implementation Process
    "implementation-process": "Unser KI-Implementierungsprozess",
    "analysis-strategy": "Analyse & Strategie",
    "analysis-strategy-desc": "Wir analysieren Ihre Anforderungen und entwickeln eine maßgeschneiderte KI-Strategie.",
    "conception-design": "Konzeption & Design",
    "conception-design-desc":
      "Wir konzipieren die optimale Lösung und erstellen detaillierte Designs und Prompt-Strukturen.",
    "development-integration": "Entwicklung & Integration",
    "development-integration-desc": "Wir entwickeln und integrieren die KI-Lösung in Ihre bestehenden Systeme.",
    "testing-optimization": "Testing & Optimierung",
    "testing-optimization-desc": "Wir testen und optimieren die Lösung für maximale Leistung und Genauigkeit.",
    "training-support": "Schulung & Support",
    "training-support-desc": "Wir schulen Ihr Team und bieten kontinuierlichen Support für Ihre KI-Lösung.",

    // Elumalab Section
    "elumalab-title": "Elumalab",
    "elumalab-subtitle": "Die All-in-One Kommunikationsplattform",
    "elumalab-description":
      "Elumalab ist eine innovative Kommunikationsplattform, die alle deine Kundennachrichten an einem Ort vereint. Verwalte Nachrichten von WhatsApp, Instagram, Facebook und mehr in einem einheitlichen Posteingang. Mit intelligenten Automatisierungen, Team-Kollaborationsfunktionen und umfassenden Analysen optimierst du deine Kundenkommunikation und steigerst die Effizienz deines Teams.",
    "request-demo": "Demo anfragen",
    "more-about-elumalab": "Mehr über Elumalab",

    // Elumalab Features
    "unified-inbox": "Einheitlicher Posteingang",
    "unified-inbox-desc": "Alle Nachrichten von WhatsApp, Instagram, Facebook und mehr an einem Ort verwalten.",
    "team-collaboration": "Team-Kollaboration",
    "team-collaboration-desc": "Weise Konversationen zu, hinterlasse interne Notizen und vermeide Doppelarbeit.",
    "detailed-analytics": "Detaillierte Analysen",
    "detailed-analytics-desc": "Verstehe deine Kunden besser mit umfassenden Berichten und Statistiken.",
    "ai-automations": "KI-gestützte Automatisierungen",
    "ai-automations-desc": "Spare Zeit mit intelligenten Automatisierungen und Chatbots.",
    "multi-channel": "Multi-Kanal-Support",
    "multi-channel-desc": "Verbinde WhatsApp, Instagram, Facebook, E-Mail und mehr in einer einzigen Plattform.",
    "mobile-app": "Mobile App",
    "mobile-app-desc": "Bleibe auch unterwegs mit der Eluma-App für iOS und Android mit deinen Kunden in Kontakt.",

    // Connect Recruit Section
    "connect-recruit-title": "Connect Recruit AI Flow",
    "connect-recruit-subtitle": "Automatisierte Recruiting-Workflows für Ihr Unternehmen",
    "connect-recruit-description":
      "Connect Recruit AI Flow ist unsere leistungsstarke No-Code-Plattform, die es Ihnen ermöglicht, komplexe Recruiting-Workflows zu automatisieren und alle Ihre HR-Tools nahtlos zu integrieren. Sparen Sie wertvolle Zeit, eliminieren Sie manuelle Aufgaben und optimieren Sie Ihren gesamten Recruiting-Prozess mit intelligenten, KI-gesteuerten Workflows.",
    "more-about-connect": "Mehr über Connect Recruit",

    // Connect Recruit Features
    "automated-workflows": "Automatisierte Workflows",
    "automated-workflows-desc":
      "Verbinden Sie Ihre Recruiting-Tools und automatisieren Sie komplexe Prozesse ohne Programmierung.",
    "seamless-integration": "Nahtlose Integration",
    "seamless-integration-desc":
      "Integrieren Sie alle Ihre bestehenden HR-Tools und -Plattformen in einem zentralen System.",
    "candidate-engagement": "Kandidaten-Engagement",
    "candidate-engagement-desc":
      "Personalisierte Kommunikation und Follow-ups mit Kandidaten zu jedem Zeitpunkt des Prozesses.",
    "data-driven": "Datengesteuerte Entscheidungen",
    "data-driven-desc": "Umfassende Analysen und Berichte für bessere Recruiting-Entscheidungen.",

    // Contact Section
    "contact-title": "KI-Beratung anfragen",
    "contact-subtitle": "Lassen Sie uns gemeinsam Ihre KI-Strategie entwickeln",
    "contact-description":
      "Wir freuen uns darauf, von Ihnen zu hören und Ihnen zu zeigen, wie unsere KI-Lösungen und Prompt-Engineering-Expertise Ihr Unternehmen auf die nächste Stufe heben können. Kontaktieren Sie uns für eine unverbindliche Beratung oder buchen Sie direkt einen Termin für eine Demo.",
    "services-overview": "Unsere KI-Dienstleistungen im Überblick:",
    "strategic-consulting": "Strategische KI-Beratung und Implementierung",
    "professional-prompt": "Professionelles Prompt Engineering für optimale KI-Ergebnisse",
    "custom-ai-solutions": "Entwicklung maßgeschneiderter KI-Lösungen für Ihr Unternehmen",
    email: "E-Mail",
    phone: "Telefon",
    chat: "Chat",
    "live-chat": "Live-Chat auf unserer Website",
    "book-ai-consultation": "KI-Beratung buchen",

    // Contact Form
    "contact-form": "Kontaktformular",
    "contact-form-desc":
      "Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen mit einer maßgeschneiderten KI-Lösungsstrategie.",
    name: "Name",
    "your-name": "Ihr Name",
    "your-email": "ihre.email@beispiel.de",
    company: "Unternehmen",
    "your-company": "Ihr Unternehmen",
    subject: "Betreff",
    "subject-placeholder": "KI-Beratung / Prompt Engineering / etc.",
    message: "Nachricht",
    "message-placeholder": "Beschreiben Sie Ihr Projekt oder Ihre Anforderungen...",
    sending: "Wird gesendet",
    "thank-you": "Vielen Dank für Ihre Anfrage! Wir melden uns innerhalb von 24 Stunden bei Ihnen.",

    // ROI Calculator
    "roi-calculator-title": "KI-ROI Kalkulator",
    "roi-calculator-description":
      "Berechnen Sie, wie viel Ihr Unternehmen durch den Einsatz von KI-Lösungen und Automatisierung sparen kann. Unser Kalkulator berücksichtigt Personalkosten, Zeitersparnis, Fehlerreduzierung und mehr.",
    input: "Eingabe",
    results: "Ergebnisse",
    "calculator-intro":
      "Berechnen Sie, wie viel Ihr Unternehmen durch den Einsatz von KI-Lösungen und Automatisierung sparen kann.",

    // Calculator Inputs
    employees: "Anzahl der Mitarbeiter",
    "employees-tooltip": "Die Gesamtzahl der Mitarbeiter, deren Arbeit durch KI unterstützt werden könnte.",
    "avg-salary": "Durchschnittliches Jahresgehalt (€)",
    "avg-salary-tooltip": "Das durchschnittliche Brutto-Jahresgehalt inkl. Arbeitgeberkosten pro Mitarbeiter.",
    "work-hours": "Arbeitsstunden pro Woche",
    "work-hours-tooltip": "Die durchschnittliche Anzahl der Arbeitsstunden pro Woche pro Mitarbeiter.",
    "automation-potential": "Automatisierungspotenzial (%)",
    "automation-potential-tooltip":
      "Der Prozentsatz der Arbeitszeit, der durch KI und Automatisierung optimiert werden könnte.",
    "implementation-cost": "Implementierungskosten (€)",
    "implementation-cost-tooltip": "Die einmaligen Kosten für die Implementierung der KI-Lösung.",
    "maintenance-cost": "Monatliche Wartungskosten (€)",
    "maintenance-cost-tooltip": "Die laufenden monatlichen Kosten für Wartung, Lizenzen und Support der KI-Lösung.",
    "error-reduction": "Fehlerreduzierungsrate (%)",
    "error-reduction-tooltip": "Der Prozentsatz, um den Fehler durch den Einsatz von KI reduziert werden können.",
    "show-results": "Ergebnisse anzeigen",

    // Calculator Results
    "annual-savings": "Jährliche Einsparungen",
    "annual-savings-desc": "pro Jahr nach vollständiger Implementierung",
    roi: "ROI",
    "roi-desc": "Return on Investment",
    "payback-period": "Amortisationszeit",
    "payback-period-desc": "bis zur Kostendeckung",
    months: "Monate",
    "detailed-analysis": "Detaillierte Analyse",
    "time-savings": "Zeitersparnis",
    "hours-per-week": "Stunden pro Woche",
    "hours-per-year": "Stunden pro Jahr",
    "cost-savings": "Kosteneinsparungen",
    "through-time-savings": "durch Zeitersparnis",
    "through-error-reduction": "durch Fehlerreduzierung",
    "investment-return": "Investition und Rendite",
    "implementation-costs": "Implementierungskosten:",
    "annual-maintenance": "Jährliche Wartungskosten:",
    "first-year-savings": "Einsparungen im ersten Jahr:",
    "second-year-savings": "Einsparungen ab dem zweiten Jahr:",
    "adjust-parameters": "Parameter anpassen",
    "save-results": "Ergebnisse speichern",

    // Additional Benefits
    "additional-benefits": "Zusätzliche Vorteile der KI-Implementierung",
    productivity: "Höhere Mitarbeiterproduktivität",
    "productivity-desc":
      "Mitarbeiter können sich auf wertschöpfende Tätigkeiten konzentrieren, während KI Routineaufgaben übernimmt.",
    satisfaction: "Verbesserte Mitarbeiterzufriedenheit",
    "satisfaction-desc": "Reduzierung monotoner Aufgaben führt zu höherer Zufriedenheit und geringerer Fluktuation.",
    "decision-making": "Schnellere Entscheidungsfindung",
    "decision-making-desc": "KI-gestützte Analysen ermöglichen schnellere und datenbasierte Entscheidungen.",
    "competitive-advantage": "Wettbewerbsvorteil",
    "competitive-advantage-desc": "Frühe Adopter von KI-Technologien sichern sich langfristige Wettbewerbsvorteile.",

    // Calculator Page
    "how-it-works": "Wie der KI-ROI Kalkulator funktioniert",
    "calculator-explanation":
      "Unser KI-ROI Kalkulator hilft Ihnen, die potenziellen Einsparungen und den Return on Investment (ROI) zu berechnen, die durch die Implementierung von KI-Lösungen in Ihrem Unternehmen erzielt werden können. Der Kalkulator berücksichtigt verschiedene Faktoren:",
    "time-savings-factor": "Zeitersparnis durch Automatisierung",
    "time-savings-explanation":
      "KI kann repetitive und zeitaufwändige Aufgaben automatisieren, wodurch Ihre Mitarbeiter mehr Zeit für wertschöpfende Tätigkeiten haben. Der Kalkulator berücksichtigt das Automatisierungspotenzial in Ihrem Unternehmen und berechnet die daraus resultierenden Einsparungen.",
    "error-reduction-factor": "Fehlerreduzierung",
    "error-reduction-explanation":
      "KI-Systeme können die Fehlerrate in Prozessen erheblich reduzieren. Der Kalkulator berücksichtigt die Kosten, die durch Fehler entstehen, und berechnet die Einsparungen durch eine verbesserte Genauigkeit.",
    "investment-costs": "Investitionskosten",
    "investment-costs-explanation":
      "Der Kalkulator berücksichtigt sowohl die einmaligen Implementierungskosten als auch die laufenden Wartungskosten der KI-Lösung, um einen realistischen ROI zu berechnen.",
    amortization: "Amortisationszeit",
    "amortization-explanation":
      "Der Kalkulator berechnet, wie schnell sich Ihre Investition in KI-Lösungen amortisiert, basierend auf den jährlichen Einsparungen und den Implementierungs- und Wartungskosten.",
    "ready-to-start": "Bereit, Ihre KI-Reise zu beginnen?",
    "expert-help":
      "Unsere Experten helfen Ihnen, die richtigen KI-Lösungen für Ihr Unternehmen zu identifizieren und zu implementieren. Kontaktieren Sie uns für eine unverbindliche Beratung.",
    "get-in-touch": "Kontakt aufnehmen",
    "book-consultation-appointment": "Beratungstermin buchen",

    // Footer
    company: "Unternehmen",
    legal: "Rechtliches",
    imprint: "Impressum",
    privacy: "Datenschutz",
    terms: "AGB",
    "follow-us": "Folgen Sie uns",
    "all-rights-reserved": "Alle Rechte vorbehalten.",
    "brand-of-rsg": "Eine Marke der RSG Recruiting Solutions Group GmbH",
    "brand-of-rsg-full": "Eine Marke der RSG Recruiting Solutions Group GmbH.",
    "footer-brand-description":
      "RSG AI Consulting ist eine Marke der RSG Recruiting Solutions Group GmbH und bietet innovative KI-Lösungen und Prompt Engineering für Marketing, Vertrieb und Recruiting.",

    // Language Selector
    language: "Sprache",
    german: "Deutsch",
    english: "Englisch",
  },
  en: {
    // Navigation
    home: "Home",
    about: "About Us",
    services: "Services",
    "connect-recruit": "Connect Recruit",
    elumalab: "Elumalab",
    "roi-calculator": "AI ROI Calculator",
    contact: "Contact",
    "book-consultation": "Book Consultation",

    // Hero Section
    "hero-tag": "AI-POWERED SOLUTIONS FOR BUSINESSES",
    "hero-title-1": "AI Solutions for the",
    "hero-title-2": "Future of Your Business",
    "hero-description":
      "We develop customized AI solutions and prompt engineering strategies that take your business to the next level. Our expertise makes us the ideal partner for your digital transformation.",
    "request-ai-consultation": "Request AI Consultation",
    "our-ai-solutions": "Our AI Solutions",

    // AI Features
    "prompt-engineering": "Prompt Engineering",
    "prompt-engineering-desc": "Optimized prompts for maximum AI performance",
    "ai-integration": "AI Integration",
    "ai-integration-desc": "Seamless integration into existing systems",
    "custom-solutions": "Custom Solutions",
    "custom-solutions-desc": "Tailored to your specific requirements",

    // About Section
    "about-title": "About Us",
    "about-description":
      "RSG AI Consulting is an innovative consulting company specializing in AI solutions and prompt engineering for marketing, sales, and recruiting. We help companies strategically leverage the transformative power of artificial intelligence.",

    // About Features
    "ai-expertise": "AI Expertise",
    "ai-expertise-desc":
      "We are specialists in artificial intelligence and its strategic integration into business processes.",
    "prompt-engineering-feature": "Prompt Engineering",
    "prompt-engineering-feature-desc":
      "We develop optimized prompts that harness the full potential of AI models for your use cases.",
    "innovative-solutions": "Innovative Solutions",
    "innovative-solutions-desc": "We develop customized AI solutions that take your business to the next level.",
    "measurable-results": "Measurable Results",
    "measurable-results-desc":
      "We deliver data-driven, measurable results that maximize your ROI and support your business goals.",

    // Mission
    "our-mission": "Our Mission",
    "mission-text-1":
      "We believe that artificial intelligence has the potential to fundamentally transform businesses. Our mission is to make this technology accessible and usable by developing customized solutions tailored to the specific needs of our clients.",
    "mission-text-2":
      "As experts in prompt engineering, we understand how to optimally address and control AI models to achieve precise, relevant, and valuable results. We bridge the gap between complex AI technology and practical business applications.",
    technologies: "Technologies & AI Models",
    "prompt-example": "Prompt Engineering Example:",
    "optimized-prompt": "// Optimized prompt for precise answers",
    "ai-analysis": "AI Analysis Running",

    // Services Section
    "services-title": "Our AI Services",
    "services-description":
      "We offer a wide range of AI-powered services that help you optimize your business processes and achieve your goals. Our expertise in prompt engineering and AI implementation makes us the ideal partner for your digital transformation.",
    "premium-service": "Premium Service",
    "ai-transformation": "AI Transformation for Businesses",
    "ai-transformation-desc":
      "Our holistic approach to AI transformation includes strategy, implementation, training, and continuous optimization. We accompany you on the entire journey to becoming an AI-powered company.",
    "start-transformation": "Start Transformation",
    "learn-more": "Learn More",
    "tools-technologies": "Tools & Technologies:",

    // Service Items
    "ai-strategy": "AI Strategy & Implementation",
    "ai-strategy-desc":
      "We develop customized AI strategies and implement advanced AI solutions that revolutionize your business processes.",
    "prompt-engineering-service": "Prompt Engineering",
    "prompt-engineering-service-desc":
      "We optimize your AI prompts for maximum efficiency and precision to harness the full potential of Large Language Models.",
    "ai-workflows": "AI-Powered Workflows",
    "ai-workflows-desc":
      "We automate complex business processes with AI-powered workflows that increase your efficiency and reduce costs.",
    "process-automation": "Digital Process Automation",
    "process-automation-desc":
      "We automate repetitive tasks with AI to relieve your employees and increase productivity.",
    "ai-chatbots": "AI Chatbots & Assistants",
    "ai-chatbots-desc":
      "We develop intelligent chatbots and AI assistants that revolutionize your customer service and are available 24/7.",
    "data-analysis": "Data Analysis & AI Insights",
    "data-analysis-desc":
      "We use AI to analyze your data and gain valuable insights that improve your decision-making.",

    // Implementation Process
    "implementation-process": "Our AI Implementation Process",
    "analysis-strategy": "Analysis & Strategy",
    "analysis-strategy-desc": "We analyze your requirements and develop a customized AI strategy.",
    "conception-design": "Conception & Design",
    "conception-design-desc": "We conceive the optimal solution and create detailed designs and prompt structures.",
    "development-integration": "Development & Integration",
    "development-integration-desc": "We develop and integrate the AI solution into your existing systems.",
    "testing-optimization": "Testing & Optimization",
    "testing-optimization-desc": "We test and optimize the solution for maximum performance and accuracy.",
    "training-support": "Training & Support",
    "training-support-desc": "We train your team and provide continuous support for your AI solution.",

    // Elumalab Section
    "elumalab-title": "Elumalab",
    "elumalab-subtitle": "The All-in-One Communication Platform",
    "elumalab-description":
      "Elumalab is an innovative communication platform that unifies all your customer messages in one place. Manage messages from WhatsApp, Instagram, Facebook, and more in a unified inbox. With intelligent automations, team collaboration features, and comprehensive analytics, you optimize your customer communication and increase your team's efficiency.",
    "request-demo": "Request Demo",
    "more-about-elumalab": "More About Elumalab",

    // Elumalab Features
    "unified-inbox": "Unified Inbox",
    "unified-inbox-desc": "Manage all messages from WhatsApp, Instagram, Facebook, and more in one place.",
    "team-collaboration": "Team Collaboration",
    "team-collaboration-desc": "Assign conversations, leave internal notes, and avoid duplicate work.",
    "detailed-analytics": "Detailed Analytics",
    "detailed-analytics-desc": "Understand your customers better with comprehensive reports and statistics.",
    "ai-automations": "AI-Powered Automations",
    "ai-automations-desc": "Save time with intelligent automations and chatbots.",
    "multi-channel": "Multi-Channel Support",
    "multi-channel-desc": "Connect WhatsApp, Instagram, Facebook, email, and more in a single platform.",
    "mobile-app": "Mobile App",
    "mobile-app-desc": "Stay in touch with your customers on the go with the Eluma app for iOS and Android.",

    // Connect Recruit Section
    "connect-recruit-title": "Connect Recruit AI Flow",
    "connect-recruit-subtitle": "Automated Recruiting Workflows for Your Business",
    "connect-recruit-description":
      "Connect Recruit AI Flow is our powerful no-code platform that enables you to automate complex recruiting workflows and seamlessly integrate all your HR tools. Save valuable time, eliminate manual tasks, and optimize your entire recruiting process with intelligent, AI-driven workflows.",
    "more-about-connect": "More About Connect Recruit",

    // Connect Recruit Features
    "automated-workflows": "Automated Workflows",
    "automated-workflows-desc": "Connect your recruiting tools and automate complex processes without programming.",
    "seamless-integration": "Seamless Integration",
    "seamless-integration-desc": "Integrate all your existing HR tools and platforms in one central system.",
    "candidate-engagement": "Candidate Engagement",
    "candidate-engagement-desc":
      "Personalized communication and follow-ups with candidates at every stage of the process.",
    "data-driven": "Data-Driven Decisions",
    "data-driven-desc": "Comprehensive analytics and reports for better recruiting decisions.",

    // Contact Section
    "contact-title": "Request AI Consultation",
    "contact-subtitle": "Let's develop your AI strategy together",
    "contact-description":
      "We look forward to hearing from you and showing you how our AI solutions and prompt engineering expertise can take your business to the next level. Contact us for a non-binding consultation or book an appointment for a demo directly.",
    "services-overview": "Overview of our AI services:",
    "strategic-consulting": "Strategic AI consulting and implementation",
    "professional-prompt": "Professional prompt engineering for optimal AI results",
    "custom-ai-solutions": "Development of customized AI solutions for your business",
    email: "Email",
    phone: "Phone",
    chat: "Chat",
    "live-chat": "Live chat on our website",
    "book-ai-consultation": "Book AI Consultation",

    // Contact Form
    "contact-form": "Contact Form",
    "contact-form-desc":
      "Fill out the form and we will get back to you within 24 hours with a customized AI solution strategy.",
    name: "Name",
    "your-name": "Your Name",
    "your-email": "your.email@example.com",
    company: "Company",
    "your-company": "Your Company",
    subject: "Subject",
    "subject-placeholder": "AI Consultation / Prompt Engineering / etc.",
    message: "Message",
    "message-placeholder": "Describe your project or requirements...",
    sending: "Sending",
    "thank-you": "Thank you for your inquiry! We will get back to you within 24 hours.",

    // ROI Calculator
    "roi-calculator-title": "AI ROI Calculator",
    "roi-calculator-description":
      "Calculate how much your company can save by implementing AI solutions and automation. Our calculator takes into account personnel costs, time savings, error reduction, and more.",
    input: "Input",
    results: "Results",
    "calculator-intro": "Calculate how much your company can save by implementing AI solutions and automation.",

    // Calculator Inputs
    employees: "Number of Employees",
    "employees-tooltip": "The total number of employees whose work could be supported by AI.",
    "avg-salary": "Average Annual Salary (€)",
    "avg-salary-tooltip": "The average gross annual salary including employer costs per employee.",
    "work-hours": "Work Hours per Week",
    "work-hours-tooltip": "The average number of work hours per week per employee.",
    "automation-potential": "Automation Potential (%)",
    "automation-potential-tooltip": "The percentage of work time that could be optimized through AI and automation.",
    "implementation-cost": "Implementation Costs (€)",
    "implementation-cost-tooltip": "The one-time costs for implementing the AI solution.",
    "maintenance-cost": "Monthly Maintenance Costs (€)",
    "maintenance-cost-tooltip": "The ongoing monthly costs for maintenance, licenses, and support of the AI solution.",
    "error-reduction": "Error Reduction Rate (%)",
    "error-reduction-tooltip": "The percentage by which errors can be reduced through the use of AI.",
    "show-results": "Show Results",

    // Calculator Results
    "annual-savings": "Annual Savings",
    "annual-savings-desc": "per year after full implementation",
    roi: "ROI",
    "roi-desc": "Return on Investment",
    "payback-period": "Payback Period",
    "payback-period-desc": "until cost recovery",
    months: "months",
    "detailed-analysis": "Detailed Analysis",
    "time-savings": "Time Savings",
    "hours-per-week": "hours per week",
    "hours-per-year": "hours per year",
    "cost-savings": "Cost Savings",
    "through-time-savings": "through time savings",
    "through-error-reduction": "through error reduction",
    "investment-return": "Investment and Return",
    "implementation-costs": "Implementation costs:",
    "annual-maintenance": "Annual maintenance costs:",
    "first-year-savings": "First year savings:",
    "second-year-savings": "Savings from the second year:",
    "adjust-parameters": "Adjust Parameters",
    "save-results": "Save Results",

    // Additional Benefits
    "additional-benefits": "Additional Benefits of AI Implementation",
    productivity: "Higher Employee Productivity",
    "productivity-desc": "Employees can focus on value-adding activities while AI handles routine tasks.",
    satisfaction: "Improved Employee Satisfaction",
    "satisfaction-desc": "Reduction of monotonous tasks leads to higher satisfaction and lower turnover.",
    "decision-making": "Faster Decision Making",
    "decision-making-desc": "AI-powered analytics enable faster and data-driven decisions.",
    "competitive-advantage": "Competitive Advantage",
    "competitive-advantage-desc": "Early adopters of AI technologies secure long-term competitive advantages.",

    // Calculator Page
    "how-it-works": "How the AI ROI Calculator Works",
    "calculator-explanation":
      "Our AI ROI Calculator helps you calculate the potential savings and return on investment (ROI) that can be achieved by implementing AI solutions in your company. The calculator takes into account various factors:",
    "time-savings-factor": "Time Savings through Automation",
    "time-savings-explanation":
      "AI can automate repetitive and time-consuming tasks, giving your employees more time for value-adding activities. The calculator considers the automation potential in your company and calculates the resulting savings.",
    "error-reduction-factor": "Error Reduction",
    "error-reduction-explanation":
      "AI systems can significantly reduce the error rate in processes. The calculator considers the costs incurred by errors and calculates the savings through improved accuracy.",
    "investment-costs": "Investment Costs",
    "investment-costs-explanation":
      "The calculator takes into account both the one-time implementation costs and the ongoing maintenance costs of the AI solution to calculate a realistic ROI.",
    amortization: "Amortization Period",
    "amortization-explanation":
      "The calculator determines how quickly your investment in AI solutions will pay off, based on annual savings and implementation and maintenance costs.",
    "ready-to-start": "Ready to Start Your AI Journey?",
    "expert-help":
      "Our experts help you identify and implement the right AI solutions for your business. Contact us for a non-binding consultation.",
    "get-in-touch": "Get in Touch",
    "book-consultation-appointment": "Book Consultation Appointment",
    "brand-of-rsg": "A brand of RSG Recruiting Solutions Group GmbH",
    "brand-of-rsg-full": "A brand of RSG Recruiting Solutions Group GmbH.",
    "footer-brand-description":
      "RSG AI Consulting is a brand of RSG Recruiting Solutions Group GmbH offering innovative AI solutions and prompt engineering for marketing, sales, and recruiting.",

    // Footer
    company: "Company",
    legal: "Legal",
    imprint: "Imprint",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    "follow-us": "Follow Us",
    "all-rights-reserved": "All rights reserved.",

    // Language Selector
    language: "Language",
    german: "German",
    english: "English",
  },
}
