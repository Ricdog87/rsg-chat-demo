"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Zap, RefreshCw, Users, Database } from "lucide-react"
import { useLanguage } from "@/app/contexts/language-context"

export function ConnectRecruit() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const { t } = useLanguage()

  const features = [
    {
      icon: Zap,
      title: t("automated-workflows"),
      description: t("automated-workflows-desc"),
    },
    {
      icon: RefreshCw,
      title: t("seamless-integration"),
      description: t("seamless-integration-desc"),
    },
    {
      icon: Users,
      title: t("candidate-engagement"),
      description: t("candidate-engagement-desc"),
    },
    {
      icon: Database,
      title: t("data-driven"),
      description: t("data-driven-desc"),
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
      id="connect-recruit"
      ref={ref}
      className="relative w-full bg-gradient-to-b from-background/95 to-background py-24"
    >
      <div className="absolute inset-0 bg-grid-small-white/[0.05] bg-[size:30px_30px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container relative"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  {t("connect-recruit-title")}
                </span>
              </h2>
              <p className="mt-4 text-xl text-gray-300">{t("connect-recruit-subtitle")}</p>
            </div>

            <p className="text-white">{t("connect-recruit-description")}</p>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="service-card">
                  <div className="service-icon">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-semibold text-primary">{feature.title}</h3>
                  <p className="text-sm text-white">{feature.description}</p>
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
                href="#"
                className="flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {t("more-about-connect")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Image added below the buttons */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border/50 shadow-xl mt-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bildschirmfoto%202025-04-08%20um%2018.45.44-1lSWLdfTSnuily4UWKUvmwHPDttzc2.png"
                alt="Connect Recruit AI Flow Dashboard with Candidate Pipeline and Project Overview"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            {/* This div is intentionally left empty as requested */}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
