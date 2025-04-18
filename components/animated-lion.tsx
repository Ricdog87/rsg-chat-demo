"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"

export function AnimatedLion() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Calculate mouse position as percentage of screen
      mouseX.set((clientX / innerWidth - 0.5) * 20) // Limit movement to 20px
      mouseY.set((clientY / innerHeight - 0.5) * 20) // Limit movement to 20px
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  // Transform values for parallax effect
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0])
  const translateX = useTransform(springX, (x) => x)
  const translateY = useTransform(springY, (y) => y)

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 h-full w-full"
        style={{
          scale,
          opacity,
          x: translateX,
          y: translateY,
        }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/0 via-background/20 to-background" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />

        {/* Lion image with digital overlay effect */}
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src="/images/lion-background.png"
            alt="Lion Background"
            fill
            priority
            className="object-cover opacity-30"
          />

          {/* Digital overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent mix-blend-overlay" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(4, 217, 178, 0.1) 1px, transparent 1px), 
                               linear-gradient(to bottom, rgba(4, 217, 178, 0.1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}
