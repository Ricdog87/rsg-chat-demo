"use client"

import { useState } from "react"

type ToastProps = {
  message: string
  type: "success" | "error" | "info" | "warning"
  duration?: number
}

export function useToast() {
  const [toast, setToast] = useState<ToastProps | null>(null)

  const showToast = ({ message, type, duration = 3000 }: ToastProps) => {
    setToast({ message, type, duration })

    setTimeout(() => {
      setToast(null)
    }, duration)
  }

  return { toast, showToast }
}
