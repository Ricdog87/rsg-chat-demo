"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Sparkles, Cpu, BrainCircuit, Bot } from "lucide-react"
// Update the import path
import { useLanguage } from "@/app/contexts/language-context"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const { t, language } = useLanguage()

  const [typedText, setTypedText] = useState("")
  const fullText = language === "de" ? "Zukunft Ihres Unternehmens" : "Future of Your Business"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [fullText])

  return (
    <div ref={ref} className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* Advanced background effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Zusätzlicher dunkler Overlay für besseren Textkontrast */}
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/20 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary/20"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Glow effects */}
        <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/3 h-64 w-64 rounded-full bg-primary/5 blur-[120px]" />

        {/* AI grid pattern overlay */}
        <div className="absolute inset-0 ai-grid-bg opacity-20" />

        {/* Digital circuit lines */}
        <svg className="absolute inset-0 h-full w-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,30 50,50 T100,50" stroke="rgba(4, 217, 178, 0.5)" fill="none" strokeWidth="0.2" />
          <path d="M0,30 Q35,50 70,30 T100,30" stroke="rgba(4, 217, 178, 0.3)" fill="none" strokeWidth="0.2" />
          <path d="M0,70 Q35,50 70,70 T100,70" stroke="rgba(4, 217, 178, 0.3)" fill="none" strokeWidth="0.2" />
        </svg>
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="container relative z-10 flex flex-col items-center justify-center space-y-10 text-center px-4 sm:px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center space-x-2 text-sm font-medium text-primary"
        >
          <Sparkles className="h-4 w-4" />
          <span>RSG AI CONSULTING</span>
          <Sparkles className="h-4 w-4" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="block text-shadow-sm">{t("hero-title-1")}</span>
          <span className="relative mt-2 block">
            <span className="relative z-10 inline-block min-h-[1.2em]">
              <span className="ai-text-gradient">{typedText}</span>
              <span className="animate-blink ml-1 inline-block h-[1em] w-[2px] bg-primary align-middle"></span>
            </span>
            <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary/70 to-primary-foreground/70 blur-2xl opacity-30" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl text-base font-medium text-white sm:text-lg md:text-xl leading-relaxed bg-background/30 backdrop-blur-sm px-4 py-3 rounded-lg border border-primary/20 shadow-sm"
          style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)" }}
        >
          {t("hero-description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        >
          <Link
            href="https://meetings.hubspot.com/r-serrano"
            className="group relative overflow-hidden rounded-md bg-primary px-6 py-3 text-sm font-medium text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            <span className="relative z-10 flex items-center">
              <BrainCircuit className="mr-2 h-5 w-5" />
              {t("request-ai-consultation")}
            </span>
            <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-primary-foreground/30 opacity-0 transition-opacity group-hover:opacity-100"></span>
          </Link>
          <Link
            href="#services"
            className="group relative overflow-hidden rounded-md border border-input bg-background/50 px-6 py-3 text-sm font-medium backdrop-blur-sm transition-all hover:bg-accent/50 hover:text-accent-foreground hover:shadow-lg"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <span className="relative z-10 flex items-center">
              <Cpu className="mr-2 h-5 w-5" />
              {t("our-ai-solutions")}
            </span>
            <span className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></span>
          </Link>
        </motion.div>

        {/* AI Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6"
        >
          <div className="ai-card rounded-lg p-4 text-center">
            <Bot className="mx-auto mb-2 h-6 w-6 text-primary" />
            <h3 className="text-sm font-medium text-primary">{t("prompt-engineering")}</h3>
            <p className="mt-1 text-xs text-white">{t("prompt-engineering-desc")}</p>
          </div>
          <div className="ai-card rounded-lg p-4 text-center">
            <Cpu className="mx-auto mb-2 h-6 w-6 text-primary" />
            <h3 className="text-sm font-medium text-primary">{t("ai-integration")}</h3>
            <p className="mt-1 text-xs text-white">{t("ai-integration-desc")}</p>
          </div>
          <div className="ai-card rounded-lg p-4 text-center">
            <BrainCircuit className="mx-auto mb-2 h-6 w-6 text-primary" />
            <h3 className="text-sm font-medium text-primary">{t("custom-solutions")}</h3>
            <p className="mt-1 text-xs text-white">{t("custom-solutions-desc")}</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <ArrowDown className="h-8 w-8 text-primary" />
      </motion.div>
    </div>
  )
}
