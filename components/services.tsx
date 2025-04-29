"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Workflow, Cog, MessageSquare, ArrowRight, BrainCircuit, Code, Database, Sparkles } from "lucide-react"

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const services = [
    {
      icon: BrainCircuit,
      title: "KI-Strategie",
      description:
        "Entwicklung maßgeschneiderter KI-Strategien, die auf Ihre spezifischen Geschäftsziele zugeschnitten sind.",
      image: "/images/ai-agent-service.jpg",
      tools: ["GPT-4", "Claude 3", "Gemini", "Anthropic", "LangChain"],
    },
    {
      icon: Code,
      title: "Prompt Engineering",
      description: "Optimierung von Prompts für maximale Effizienz und Genauigkeit in KI-Anwendungen.",
      image: "/images/workflow-service.jpg",
      tools: ["Prompt-Optimierung", "Chain-of-Thought", "Few-Shot Learning", "RAG"],
    },
    {
      icon: Workflow,
      title: "KI-Workflows",
      description: "Automatisierung von Geschäftsprozessen durch intelligente KI-gesteuerte Workflows.",
      image: "/images/workflow-service.jpg",
      tools: ["n8n", "Zapier", "Make", "Custom Integrations"],
    },
    {
      icon: Cog,
      title: "Prozessautomatisierung",
      description: "Automatisierung wiederholender Aufgaben zur Steigerung der Effizienz und Reduzierung von Fehlern.",
      image: "/images/automation-service.jpg",
      tools: ["RPA", "Prozessanalyse", "Workflow-Optimierung"],
    },
    {
      icon: MessageSquare,
      title: "KI-Chatbots",
      description: "Entwicklung intelligenter Chatbots für verbesserte Kundeninteraktion und Support.",
      image: "/images/chatbot-service.jpg",
      tools: ["GPT-4", "Claude", "Dialogflow", "Custom Training"],
    },
    {
      icon: Database,
      title: "Datenanalyse",
      description: "Analyse großer Datenmengen zur Gewinnung wertvoller Erkenntnisse und fundierter Entscheidungen.",
      image: "/images/dashboard-service.jpg",
      tools: ["Predictive Analytics", "Machine Learning", "Data Visualization"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="services"
      ref={ref}
      className="relative w-full bg-gradient-to-b from-background/95 to-background py-24"
    >
      <div className="absolute inset-0 ai-grid-bg" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container relative space-y-16"
      >
        <motion.div variants={itemVariants} className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">Unsere KI-Dienstleistungen</h2>
          <p className="section-description">
            Wir bieten eine breite Palette an KI-gestützten Dienstleistungen, die Ihnen helfen, Ihre Geschäftsprozesse
            zu optimieren und Ihre Ziele zu erreichen. Unsere Expertise in Prompt Engineering und KI-Implementierung
            macht uns zum idealen Partner für Ihre digitale Transformation.
          </p>
        </motion.div>

        {/* Featured Service */}
        <motion.div variants={itemVariants} className="mx-auto max-w-4xl">
          <div className="ai-card overflow-hidden rounded-xl border border-primary/20 bg-card/30 p-6 backdrop-blur-sm">
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="flex-1 space-y-4">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <Sparkles className="mr-1 h-3 w-3" /> Premium Service
                </div>
                <h3 className="text-2xl font-bold">KI-Transformation</h3>
                <p className="text-white">
                  Wir begleiten Sie auf Ihrem Weg zur erfolgreichen Integration von KI in Ihr Unternehmen.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-tag">Strategieentwicklung</span>
                  <span className="tech-tag">Implementierung</span>
                  <span className="tech-tag">Training</span>
                  <span className="tech-tag">Optimierung</span>
                </div>
                <Link
                  href="#contact"
                  className="more-link"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Starten Sie Ihre Transformation <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="relative flex h-40 w-full flex-none items-center justify-center overflow-hidden rounded-lg md:h-auto md:w-1/3">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>
                <BrainCircuit className="h-16 w-16 text-primary" />
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl"></div>
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl"></div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants} custom={index} className="group">
              <div className="service-card h-full flex flex-col">
                <div className="service-icon">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-primary">{service.title}</h3>
                <p className="mb-4 text-sm text-white">{service.description}</p>

                <div className="mt-auto">
                  <div>
                    <h4 className="text-sm font-medium text-primary">Tools & Technologien</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {service.tools.map((tool) => (
                        <span key={tool} className="tech-tag">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="#contact"
                    className="more-link"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Mehr erfahren <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div variants={itemVariants} className="mx-auto max-w-4xl pt-12">
          <h3 className="mb-8 text-center text-2xl font-bold">Implementierungsprozess</h3>
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/10"></div>
            <div className="space-y-12">
              {[
                {
                  number: "01",
                  title: "Analyse & Strategie",
                  description:
                    "Wir analysieren Ihre Geschäftsprozesse und entwickeln eine maßgeschneiderte KI-Strategie.",
                },
                {
                  number: "02",
                  title: "Konzeption & Design",
                  description: "Wir konzipieren und designen die optimale KI-Lösung für Ihre Anforderungen.",
                },
                {
                  number: "03",
                  title: "Entwicklung & Integration",
                  description: "Wir entwickeln und integrieren die KI-Lösung in Ihre bestehende IT-Infrastruktur.",
                },
                {
                  number: "04",
                  title: "Testing & Optimierung",
                  description:
                    "Wir testen und optimieren die KI-Lösung, um maximale Leistung und Genauigkeit zu gewährleisten.",
                },
                {
                  number: "05",
                  title: "Training & Support",
                  description:
                    "Wir schulen Ihre Mitarbeiter und bieten umfassenden Support, um den erfolgreichen Einsatz der KI-Lösung sicherzustellen.",
                },
              ].map((step, index) => (
                <div key={step.number} className="relative pl-12 md:pl-0">
                  {/* Number circle - positioned with more space from text */}
                  <div
                    className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2 ${
                      index % 2 === 0 ? "md:translate-x-[-4rem]" : "md:translate-x-[4rem]"
                    }`}
                  >
                    <span className="text-sm font-bold text-primary">{step.number}</span>
                  </div>

                  {/* Content - with increased spacing from number */}
                  <div
                    className={`md:w-[45%] ${
                      index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8 md:text-right"
                    }`}
                  >
                    <h4 className="text-lg font-semibold text-primary">{step.title}</h4>
                    <p className="mt-2 text-sm text-white">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
