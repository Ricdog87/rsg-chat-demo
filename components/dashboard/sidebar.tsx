"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Inbox,
  MessageSquare,
  Users,
  BarChart2,
  Zap,
  Settings,
  HelpCircle,
  Star,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react"

export function DashboardSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  const mainNavItems = [
    { name: "Inbox", href: "/dashboard", icon: Inbox },
    { name: "Team Chat", href: "/dashboard/team-chat", icon: MessageSquare },
    { name: "Campaigns", href: "/dashboard/campaigns", icon: Zap },
    { name: "Automations", href: "/dashboard/automations", icon: Zap },
    { name: "Contacts", href: "/dashboard/contacts", icon: Users },
    { name: "Ratings", href: "/dashboard/ratings", icon: Star },
    { name: "Analytics", href: "/dashboard/analytics", icon: BarChart2 },
  ]

  const bottomNavItems = [
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
    { name: "Help", href: "/dashboard/help", icon: HelpCircle },
  ]

  return (
    <aside className={`bg-white border-r transition-all duration-300 ease-in-out ${collapsed ? "w-16" : "w-64"}`}>
      <div className="flex flex-col h-full">
        <div className="h-16 flex items-center px-4 border-b">
          {!collapsed && (
            <Link href="/dashboard" className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center text-white font-bold text-lg mr-2">
                E
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
                Elumalab
              </span>
            </Link>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={`${collapsed ? "mx-auto" : "ml-auto"} p-1 rounded-md hover:bg-gray-100`}
          >
            {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-2">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-pink-50 text-pink-600"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                } ${collapsed ? "justify-center" : ""}`}
              >
                <item.icon className={`h-5 w-5 flex-shrink-0 ${collapsed ? "" : "mr-3"}`} />
                {!collapsed && <span>{item.name}</span>}
                {!collapsed && item.name === "Inbox" && (
                  <span className="ml-auto bg-pink-100 text-pink-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                    3
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {!collapsed && (
            <div className="mt-6 px-4">
              <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500">
                <Plus className="h-4 w-4 mr-2" />
                New Chat
              </button>
            </div>
          )}
        </div>

        <div className="border-t py-4">
          <nav className="space-y-1 px-2">
            {bottomNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-pink-50 text-pink-600"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                } ${collapsed ? "justify-center" : ""}`}
              >
                <item.icon className={`h-5 w-5 flex-shrink-0 ${collapsed ? "" : "mr-3"}`} />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  )
}
