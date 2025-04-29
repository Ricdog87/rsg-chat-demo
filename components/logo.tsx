"use client"

import type React from "react"
import { useLanguage } from "@/app/contexts/language-context"

export function Logo({ className, ...props }: React.ComponentProps<"div">) {
  const { t } = useLanguage()

  return (
    <div className={`flex items-center ${className || ""}`} {...props}>
      <div className="flex flex-col">
        <div className="text-lg font-bold text-primary">RSG AI Consulting</div>
        <div className="text-xs text-gray-400">{t("brand-of-rsg")}</div>
      </div>
    </div>
  )
}
