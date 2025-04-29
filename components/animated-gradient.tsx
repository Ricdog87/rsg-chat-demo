"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function AnimatedGradient() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.15, 0])

  return (
    <motion.div ref={ref} className="absolute inset-0 z-0 overflow-hidden" style={{ opacity: backgroundOpacity }}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-background" />

      <div className="absolute -inset-[10%] opacity-30">
        <div
          className="absolute -inset-[10%] animate-pulse opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(4, 217, 178, 0.2) 0%, transparent 40%)",
            top: "50%",
            left: "0%",
          }}
        />
        <div
          className="absolute -inset-[10%] animate-pulse opacity-30 animation-delay-1000"
          style={{
            background: "radial-gradient(circle, rgba(4, 217, 178, 0.2) 0%, transparent 40%)",
            top: "0%",
            right: "0%",
          }}
        />
        <div
          className="absolute -inset-[10%] animate-pulse opacity-30 animation-delay-2000"
          style={{
            background: "radial-gradient(circle, rgba(4, 217, 178, 0.2) 0%, transparent 40%)",
            bottom: "0%",
            right: "20%",
          }}
        />
        <div
          className="absolute -inset-[10%] animate-pulse opacity-30 animation-delay-3000"
          style={{
            background: "radial-gradient(circle, rgba(4, 217, 178, 0.2) 0%, transparent 40%)",
            bottom: "30%",
            left: "30%",
          }}
        />
      </div>

      {/* Digital circuit pattern */}
      <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] bg-repeat opacity-5" />
    </motion.div>
  )
}
