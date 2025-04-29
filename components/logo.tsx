"use client"

import type React from "react"

export function Logo({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={`flex items-center ${className || ""}`} {...props}>
      <div className="flex flex-col">
        <div className="text-lg font-bold text-primary">RSG AI Consulting</div>
        <div className="text-xs text-gray-400">Brand of RSG</div>
      </div>
    </div>
  )
}
