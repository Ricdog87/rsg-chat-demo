"use client"

import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"

export function CTASection() {
  const { startDemoSession } = useAuth()

  return (
    <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Bereit, Ihre Kundenkommunikation zu revolutionieren?
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Testen Sie Elumalab kostenlos und erleben Sie, wie einfach moderne Kundenkommunikation sein kann.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90" onClick={() => startDemoSession()}>
              Kostenlos starten
            </Button>
            <Button size="lg" variant="outline">
              Demo vereinbaren
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
