import { Suspense } from "react"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { ActivityChart } from "@/components/dashboard/activity-chart"
import { RecentConversations } from "@/components/dashboard/recent-conversations"
import { ChannelDistribution } from "@/components/dashboard/channel-distribution"
import { TeamPerformance } from "@/components/dashboard/team-performance"
import { TopRequests } from "@/components/dashboard/top-requests"
import { DemoBanner } from "@/components/dashboard/demo-banner"
import { DemoChat } from "@/components/dashboard/demo-chat"
import { WorkflowAutomation } from "@/components/dashboard/workflow-automation"
import { CompanyLogoUpload } from "@/components/dashboard/company-logo-upload"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"

function LoadingStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {Array(4)
        .fill(null)
        .map((_, i) => (
          <Skeleton key={i} className="h-[140px] w-full" />
        ))}
    </div>
  )
}

function LoadingChart() {
  return <Skeleton className="h-[350px] w-full" />
}

export default function DemoDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Elumalab Demo</h1>
        <p className="text-muted-foreground">
          Willkommen bei Elumalab. Erkunden Sie alle Funktionen in dieser interaktiven Demo.
        </p>
      </div>

      <DemoBanner />

      <Tabs defaultValue="dashboard">
        <TabsList className="mb-4">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="chat">Chat</TabsTrigger>
          <TabsTrigger value="automation">Automatisierung</TabsTrigger>
          <TabsTrigger value="settings">Einstellungen</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          <Suspense fallback={<LoadingStats />}>
            <StatsCards />
          </Suspense>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <Suspense fallback={<LoadingChart />}>
              <ActivityChart />
            </Suspense>
            <Suspense fallback={<LoadingChart />}>
              <RecentConversations />
            </Suspense>
            <Suspense fallback={<LoadingChart />}>
              <ChannelDistribution />
            </Suspense>
            <Suspense fallback={<LoadingChart />}>
              <TeamPerformance />
            </Suspense>
            <Suspense fallback={<LoadingChart />}>
              <TopRequests />
            </Suspense>
          </div>
        </TabsContent>

        <TabsContent value="chat">
          <DemoChat />
        </TabsContent>

        <TabsContent value="automation">
          <WorkflowAutomation />
        </TabsContent>

        <TabsContent value="settings">
          <CompanyLogoUpload />
        </TabsContent>
      </Tabs>
    </div>
  )
}
