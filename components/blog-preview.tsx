"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"

const blogPosts = [
  {
    title: "Die Zukunft der KI im Recruiting",
    description:
      "Wie künstliche Intelligenz den Rekrutierungsprozess revolutioniert und welche Vorteile sich daraus ergeben.",
    date: "15. März 2023",
    image: "/images/blog-ai-trends.png",
    url: "/blog/ki-im-recruiting",
  },
  {
    title: "Effektive Kundenkommunikation mit Elumalab",
    description: "Wie Sie mit einer zentralen Kommunikationsplattform Ihre Kundenbeziehungen verbessern können.",
    date: "22. April 2023",
    image: "/images/blog-communication.png",
    url: "/blog/kundenkommunikation",
  },
  {
    title: "Automatisierte Workflows für mehr Effizienz",
    description: "Wie Sie mit automatisierten Workflows Zeit sparen und Ihre Produktivität steigern können.",
    date: "10. Mai 2023",
    image: "/images/blog-automation.png",
    url: "/blog/automatisierte-workflows",
  },
]

export function BlogPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    <section id="blog" ref={ref} className="relative w-full bg-gradient-to-b from-background/95 to-background py-24">
      <div className="absolute inset-0 bg-grid-small-white/[0.05] bg-[size:30px_30px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container relative space-y-16"
      >
        <motion.div variants={itemVariants} className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">Blog & Insights</h2>
          <p className="section-description">
            Erfahren Sie mehr über die neuesten Trends und Entwicklungen im Bereich KI und Geschäftsprozessoptimierung.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div key={post.title} variants={itemVariants} custom={index} className="group">
              <div className="service-card h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden rounded-t-lg -mx-6 -mt-6 mb-4">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="mr-2 h-4 w-4" />
                  {post.date}
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{post.description}</p>

                <div className="mt-auto">
                  <Link href={post.url} className="more-link">
                    Weiterlesen
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="flex justify-center">
          <Link
            href="/blog"
            className="rounded-md border border-input bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Alle Beiträge anzeigen
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
