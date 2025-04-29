"use client"

import type React from "react"

import { useRef, useState } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Calendar, Mail, MessageSquare, Phone, BrainCircuit, Bot, Sparkles } from "lucide-react"
import { useLanguage } from "@/app/contexts/language-context"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { t } = useLanguage()
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
                  {t("contact-title")}
                </span>
              </h2>
              <p className="mt-4 text-xl text-gray-300">{t("contact-subtitle")}</p>
            </div>

            <p className="text-white">{t("contact-description")}</p>

            {/* AI Services Highlight */}
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

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{t("email")}</p>
                  <p className="font-medium">info@recruiting-sg.de</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{t("phone")}</p>
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
                  <p className="text-sm text-gray-400">{t("chat")}</p>
                  <p className="font-medium">{t("live-chat")}</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="https://meetings.hubspot.com/r-serrano"
                className="group inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
              >
                <Calendar className="mr-2 h-5 w-5" />
                {t("book-ai-consultation")}
              </Link>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="service-card ai-card">
              <h3 className="text-xl font-semibold mb-4 text-primary">{t("contact-form")}</h3>
              <p className="text-sm text-white mb-6">{t("contact-form-desc")}</p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      {t("name")}
                    </label>
                    <input
                      id="name"
                      placeholder={t("your-name")}
                      className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm text-white placeholder:text-gray-400 backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      {t("email")}
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder={t("your-email")}
                      className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm text-white placeholder:text-gray-400 backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    {t("company")}
                  </label>
                  <input
                    id="company"
                    placeholder={t("your-company")}
                    className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm text-white placeholder:text-gray-400 backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    value={formState.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    {t("subject")}
                  </label>
                  <input
                    id="subject"
                    placeholder={t("subject-placeholder")}
                    className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm text-white placeholder:text-gray-400 backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {t("message")}
                  </label>
                  <textarea
                    id="message"
                    placeholder={t("message-placeholder")}
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
                      {t("sending")}
                      <span className="loading-dots ml-2">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <BrainCircuit className="mr-2 h-4 w-4" />
                      {t("request-ai-consultation")}
                    </span>
                  )}
                  <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-primary-foreground/30 opacity-0 transition-opacity group-hover:opacity-100"></span>
                </button>

                {submitSuccess && (
                  <div className="mt-4 rounded-md bg-primary/10 p-3 text-center text-sm text-primary">
                    <Sparkles className="mr-1 inline-block h-4 w-4" />
                    {t("thank-you")}
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
