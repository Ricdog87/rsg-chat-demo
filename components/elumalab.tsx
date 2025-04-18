"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Check, MessageSquare, Users, BarChart, Zap, Globe, Smartphone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Elumalab() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { t } = useLanguage()

  const features = [
    t("unified-inbox"),
    t("team-collaboration"),
    t("detailed-analytics"),
    t("ai-automations"),
    t("multi-channel"),
    t("mobile-app"),
  ]

  const detailedFeatures = [
    {
      icon: MessageSquare,
      title: t("unified-inbox"),
      description: t("unified-inbox-desc"),
    },
    {
      icon: Users,
      title: t("team-collaboration"),
      description: t("team-collaboration-desc"),
    },
    {
      icon: BarChart,
      title: t("detailed-analytics"),
      description: t("detailed-analytics-desc"),
    },
    {
      icon: Zap,
      title: t("ai-automations"),
      description: t("ai-automations-desc"),
    },
    {
      icon: Globe,
      title: t("multi-channel"),
      description: t("multi-channel-desc"),
    },
    {
      icon: Smartphone,
      title: t("mobile-app"),
      description: t("mobile-app-desc"),
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
      id="elumalab"
      ref={ref}
      className="relative w-full bg-gradient-to-b from-background to-background/95 py-24"
    >
      <div className="absolute inset-0 bg-grid-small-white/[0.05] bg-[size:30px_30px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container relative"
      >
        <div className="grid gap-12 sm:grid-cols-1 lg:grid-cols-2 lg:gap-16">
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  {t("elumalab-title")}
                </span>
              </h2>
              <p className="mt-4 text-xl text-gray-300">{t("elumalab-subtitle")}</p>
            </div>

            <p className="text-white">{t("elumalab-description")}</p>

            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {detailedFeatures.map((feature) => (
                <div key={feature.title} className="service-card p-4">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <feature.icon className="h-4 w-4" />
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-primary">{feature.title}</h3>
                  <p className="text-xs text-white">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="#contact"
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {t("request-demo")}
              </Link>
              <Link
                href="https://app.elumalab.com/"
                target="_blank"
                className="flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {t("more-about-elumalab")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border/50 shadow-xl">
              <Image src="/images/elumalab-dashboard.png" alt="Elumalab Dashboard" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
