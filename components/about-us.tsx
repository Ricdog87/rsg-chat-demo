"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Lightbulb, TrendingUp, Code, BrainCircuit, Bot } from "lucide-react"

const features = [
  {
    icon: BrainCircuit,
    title: "KI-Expertise",
    description:
      "Wir sind Spezialisten für künstliche Intelligenz und deren strategische Integration in Geschäftsprozesse.",
  },
  {
    icon: Code,
    title: "Prompt Engineering",
    description:
      "Wir entwickeln optimierte Prompts, die das volle Potenzial von KI-Modellen für Ihre Anwendungsfälle ausschöpfen.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Lösungen",
    description: "Wir entwickeln maßgeschneiderte KI-Lösungen, die Ihr Unternehmen auf die nächste Stufe heben.",
  },
  {
    icon: TrendingUp,
    title: "Messbare Ergebnisse",
    description:
      "Wir liefern datengestützte, messbare Ergebnisse, die Ihren ROI maximieren und Ihre Geschäftsziele unterstützen.",
  },
]

const technologies = [
  "GPT-4",
  "Claude 3",
  "Gemini",
  "Midjourney",
  "DALL-E",
  "Stable Diffusion",
  "LangChain",
  "HuggingFace",
  "OpenAI API",
  "Anthropic API",
]

export function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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

  // Dummy jobDescription for demonstration purposes.  Replace with actual data source.
  const jobDescription = "Software Engineer with 5 years of experience in React and Node.js."

  return (
    <section id="about" ref={ref} className="relative w-full bg-gradient-to-b from-background to-background/95 py-24">
      <div className="absolute inset-0 ai-grid-bg" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container relative space-y-16"
      >
        <motion.div variants={itemVariants} className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">Über uns</h2>
          <p className="section-description">
            RSG AI Consulting ist ein innovatives Beratungsunternehmen, das sich auf KI-Lösungen und Prompt Engineering
            für Marketing, Vertrieb und Recruiting spezialisiert hat. Wir helfen Unternehmen, die transformative Kraft
            der künstlichen Intelligenz strategisch zu nutzen.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div key={feature.title} variants={itemVariants} className="group" custom={index}>
              <div className="service-card ai-glow h-full">
                <div className="service-icon">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-primary">{feature.title}</h3>
                <p className="text-sm text-white">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-1 md:grid-cols-2 md:gap-16"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-primary">Unsere Mission</h3>
            <p className="text-white">
              Wir glauben, dass künstliche Intelligenz das Potenzial hat, Unternehmen grundlegend zu transformieren.
              Unsere Mission ist es, diese Technologie zugänglich und nutzbar zu machen, indem wir maßgeschneiderte
              Lösungen entwickeln, die auf die spezifischen Bedürfnisse unserer Kunden zugeschnitten sind.
            </p>
            <p className="text-white">
              Als Experten im Prompt Engineering verstehen wir, wie man KI-Modelle optimal anspricht und steuert, um
              präzise, relevante und wertvolle Ergebnisse zu erzielen. Wir schließen die Lücke zwischen komplexer
              KI-Technologie und praktischen Geschäftsanwendungen.
            </p>

            <div className="mt-6">
              <h4 className="mb-3 text-lg font-medium text-primary">Technologien & KI-Modelle</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Code example */}
            <div className="mt-6 rounded-lg border border-border/50 bg-card/30 p-4">
              <h4 className="mb-2 text-sm font-medium text-primary">Prompt Engineering Beispiel:</h4>
              <div className="code-block text-xs">
                <span className="code-line code-comment">// Optimierter Prompt für präzise Antworten</span>
                <span className="code-line">
                  <span className="code-keyword">const</span> <span className="code-function">optimizedPrompt</span> ={" "}
                  <span className="code-string">
                    `Als KI-Experte für Recruiting, analysiere die folgende Stellenbeschreibung und extrahiere die 5
                    wichtigsten Qualifikationen in Stichpunkten: ${jobDescription}`
                  </span>
                  ;
                </span>
              </div>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl md:aspect-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-30" />
            <Image
              src="/images/team-meeting-actual.jpg"
              alt="RSG AI Consulting Team Meeting"
              fill
              className="object-cover"
            />

            {/* Overlay with AI elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/70">
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center space-x-2">
                  <Bot className="h-5 w-5 text-primary" />
                  <div className="text-xs font-medium text-white">KI-Analyse läuft</div>
                </div>
                <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-background/30">
                  <div className="h-full w-2/3 animate-pulse rounded-full bg-primary"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
