"use client"

import type React from "react"

import { useRef, useState } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Calendar, Mail, MessageSquare, Phone, BrainCircuit, Sparkles } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormState({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

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
    <section id="contact" ref={ref} className="relative w-full bg-gradient-to-b from-background to-background/95 py-24">
      <div className="absolute inset-0 ai-grid-bg" />

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
                  KI-Beratung anfragen
                </span>
              </h2>
              <p className="mt-4 text-xl text-gray-300">Lassen Sie uns gemeinsam Ihre KI-Strategie entwickeln</p>
            </div>

            <p className="text-white">
              Wir freuen uns darauf, von Ihnen zu hören und Ihnen zu zeigen, wie unsere KI-Lösungen und
              Prompt-Engineering-Expertise Ihr Unternehmen auf die nächste Stufe heben können. Kontaktieren Sie uns für
              eine unverbindliche Beratung oder buchen Sie direkt einen Termin für eine Demo.
            </p>

            {/* AI Services Highlight */}
            {/*
            <div className="mt-8 rounded-lg border border-primary/20 bg-card/30 p-4 backdrop-blur-sm">
              <h3 className="mb-3 text-lg font-semibold text-primary">{t("services-overview")}</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <BrainCircuit className="mr-2 mt-1 h-4 w-4 text-primary" />
                  <span className="text-sm text-white">{t("strategic-consulting")}</span>
                </li>
                <li className="flex items-start">
                  <Bot className="mr-2 mt-1 h-4 w-4 text-primary" />
                  <span className="text-sm text-white">{t("professional-prompt")}</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="mr-2 mt-1 h-4 w-4 text-primary" />
                  <span className="text-sm text-white">{t("custom-ai-solutions")}</span>
                </li>
              </ul>
            </div>
            */}

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">info@recruiting-sg.de</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Telefon</p>
                  <a href="tel:+4917660772445" className="font-medium hover:text-primary transition-colors">
                    +49 176 6077 2445
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Chat</p>
                  <p className="font-medium">Live-Chat</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="https://meetings.hubspot.com/r-serrano"
                className="group inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
              >
                <Calendar className="mr-2 h-5 w-5" />
                KI-Beratung buchen
              </Link>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="service-card ai-card">
              <h3 className="text-xl font-semibold mb-4 text-primary">Kontaktformular</h3>
              <p className="text-sm text-white mb-6">Senden Sie uns eine Nachricht</p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      placeholder="Ihr Name"
                      className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm text-white placeholder:text-gray-400 backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Ihre Email"
                      className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm text-white placeholder:text-gray-400 backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Firma
                  </label>
                  <input
                    id="company"
                    placeholder="Ihre Firma"
                    className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm text-white placeholder:text-gray-400 backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    value={formState.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Betreff
                  </label>
                  <input
                    id="subject"
                    placeholder="Betreff"
                    className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm text-white placeholder:text-gray-400 backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    placeholder="Ihre Nachricht"
                    rows={4}
                    className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm text-white placeholder:text-gray-400 backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full overflow-hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      Senden...
                      <span className="loading-dots ml-2">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <BrainCircuit className="mr-2 h-4 w-4" />
                      KI-Beratung anfragen
                    </span>
                  )}
                  <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-primary-foreground/30 opacity-0 transition-opacity group-hover:opacity-100"></span>
                </button>

                {submitSuccess && (
                  <div className="mt-4 rounded-md bg-primary/10 p-3 text-center text-sm text-primary">
                    <Sparkles className="mr-1 inline-block h-4 w-4" />
                    Vielen Dank!
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
