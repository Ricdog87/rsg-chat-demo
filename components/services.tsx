"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Workflow, Cog, MessageSquare, ArrowRight, BrainCircuit, Code, Database, Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const { t } = useLanguage()

  const services = [
    {
      icon: BrainCircuit,
      title: t("ai-strategy"),
      description: t("ai-strategy-desc"),
      image: "/images/ai-agent-service.jpg",
      tools: ["GPT-4", "Claude 3", "Gemini", "Anthropic", "LangChain"],
    },
    {
      icon: Code,
      title: t("prompt-engineering-service"),
      description: t("prompt-engineering-service-desc"),
      image: "/images/workflow-service.jpg",
      tools: ["Prompt-Optimierung", "Chain-of-Thought", "Few-Shot Learning", "RAG"],
    },
    {
      icon: Workflow,
      title: t("ai-workflows"),
      description: t("ai-workflows-desc"),
      image: "/images/workflow-service.jpg",
      tools: ["n8n", "Zapier", "Make", "Custom Integrations"],
    },
    {
      icon: Cog,
      title: t("process-automation"),
      description: t("process-automation-desc"),
      image: "/images/automation-service.jpg",
      tools: ["RPA", "Prozessanalyse", "Workflow-Optimierung"],
    },
    {
      icon: MessageSquare,
      title: t("ai-chatbots"),
      description: t("ai-chatbots-desc"),
      image: "/images/chatbot-service.jpg",
      tools: ["GPT-4", "Claude", "Dialogflow", "Custom Training"],
    },
    {
      icon: Database,
      title: t("data-analysis"),
      description: t("data-analysis-desc"),
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
          <h2 className="section-title">{t("services-title")}</h2>
          <p className="section-description">{t("services-description")}</p>
        </motion.div>

        {/* Featured Service */}
        <motion.div variants={itemVariants} className="mx-auto max-w-4xl">
          <div className="ai-card overflow-hidden rounded-xl border border-primary/20 bg-card/30 p-6 backdrop-blur-sm">
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="flex-1 space-y-4">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <Sparkles className="mr-1 h-3 w-3" /> {t("premium-service")}
                </div>
                <h3 className="text-2xl font-bold">{t("ai-transformation")}</h3>
                <p className="text-white">{t("ai-transformation-desc")}</p>
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
                  {t("start-transformation")} <ArrowRight className="ml-1 h-4 w-4" />
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
                    <h4 className="text-sm font-medium text-primary">{t("tools-technologies")}</h4>
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
                    {t("learn-more")} <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div variants={itemVariants} className="mx-auto max-w-4xl pt-12">
          <h3 className="mb-8 text-center text-2xl font-bold">{t("implementation-process")}</h3>
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/10"></div>
            <div className="space-y-12">
              {[
                {
                  number: "01",
                  title: "analysis-strategy",
                  description: "analysis-strategy-desc",
                },
                {
                  number: "02",
                  title: "conception-design",
                  description: "conception-design-desc",
                },
                {
                  number: "03",
                  title: "development-integration",
                  description: "development-integration-desc",
                },
                {
                  number: "04",
                  title: "testing-optimization",
                  description: "testing-optimization-desc",
                },
                {
                  number: "05",
                  title: "training-support",
                  description: "training-support-desc",
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
                    <h4 className="text-lg font-semibold text-primary">{t(step.title)}</h4>
                    <p className="mt-2 text-sm text-white">{t(step.description)}</p>
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
