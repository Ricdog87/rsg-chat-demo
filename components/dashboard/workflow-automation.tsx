"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { RefreshCw, Plus } from "lucide-react"

// Demo-Workflows
const DEMO_WORKFLOWS = [
  {
    id: "workflow-1",
    name: "Automatische Begrüßung",
    description: "Sendet eine Begrüßungsnachricht an neue Kunden",
    active: true,
  },
  {
    id: "workflow-2",
    name: "Ticket-Eskalation",
    description: "Eskaliert unbeantwortete Tickets nach 24 Stunden",
    active: false,
  },
  {
    id: "workflow-3",
    name: "Feedback-Anfrage",
    description: "Sendet nach Abschluss eines Tickets eine Feedback-Anfrage",
    active: true,
  },
]

export function WorkflowAutomation() {
  const [workflows, setWorkflows] = useState(DEMO_WORKFLOWS)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleToggleWorkflow = (id: string) => {
    setWorkflows(
      workflows.map((workflow) => (workflow.id === id ? { ...workflow, active: !workflow.active } : workflow)),
    )
  }

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setIsRefreshing(false)
    }, 1000)
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-1">
          <CardTitle>Workflow-Automatisierung</CardTitle>
          <CardDescription>Automatisieren Sie wiederkehrende Aufgaben</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={handleRefresh} disabled={isRefreshing}>
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
            <span className="sr-only">Aktualisieren</span>
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Neu
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {workflows.map((workflow) => (
            <div
              key={workflow.id}
              className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 transition-colors"
            >
              <div className="space-y-0.5">
                <h3 className="font-medium">{workflow.name}</h3>
                <p className="text-sm text-muted-foreground">{workflow.description}</p>
              </div>
              <Switch checked={workflow.active} onCheckedChange={() => handleToggleWorkflow(workflow.id)} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
