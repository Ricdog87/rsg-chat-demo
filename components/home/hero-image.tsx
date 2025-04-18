"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function HeroImage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-orange-400/10 rounded-2xl transform translate-x-2 translate-y-2"></div>
      <div
        className={`relative transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-8"}`}
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <Image
            src="/images/hero-dashboard.png"
            alt="Elumalab dashboard"
            width={800}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}
