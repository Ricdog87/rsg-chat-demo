"use client"

import { CardFooter } from "@/components/ui/card"

import { Label } from "@/components/ui/label"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  MessageSquare,
  Users,
  BarChart3,
  Settings,
  Search,
  Send,
  Smile,
  Paperclip,
  Phone,
  Video,
  Bell,
  LogOut,
  Loader2,
  RefreshCw,
  PlusCircle,
  Zap,
  Bot,
  FileText,
  Home,
  PieChart,
  Sliders,
  HelpCircle,
  User,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Dashboard() {
  const [activeView, setActiveView] = useState("chat")
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // Simuliere Ladezeit
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-pink-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">Dashboard wird geladen...</h2>
          <p className="text-gray-600 mt-2">Einen Moment bitte</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-6">
        <div className="mb-8">
          <Link href="/">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-yellow-300 flex items-center justify-center text-white font-bold text-xl">
              E
            </div>
          </Link>
        </div>

        <nav className="flex flex-col items-center space-y-6 flex-1">
          <NavItem
            icon={<Home />}
            active={activeView === "dashboard"}
            onClick={() => setActiveView("dashboard")}
            tooltip="Dashboard"
          />
          <NavItem
            icon={<MessageSquare />}
            active={activeView === "chat"}
            onClick={() => setActiveView("chat")}
            tooltip="Nachrichten"
          />
          <NavItem
            icon={<Users />}
            active={activeView === "contacts"}
            onClick={() => setActiveView("contacts")}
            tooltip="Kontakte"
          />
          <NavItem
            icon={<BarChart3 />}
            active={activeView === "analytics"}
            onClick={() => setActiveView("analytics")}
            tooltip="Analysen"
          />
          <NavItem
            icon={<Zap />}
            active={activeView === "automation"}
            onClick={() => setActiveView("automation")}
            tooltip="Automatisierung"
          />
          <NavItem
            icon={<Settings />}
            active={activeView === "settings"}
            onClick={() => setActiveView("settings")}
            tooltip="Einstellungen"
          />
        </nav>

        <div className="mt-auto">
          <Button variant="ghost" size="icon" className="text-gray-500" onClick={() => router.push("/")}>
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      {activeView === "dashboard" && <DashboardView />}
      {activeView === "chat" && <ChatView />}
      {activeView === "analytics" && <AnalyticsView />}
      {activeView === "automation" && <AutomationView />}
      {activeView === "settings" && <SettingsView />}
      {activeView === "contacts" && <ContactsView />}
    </div>
  )
}

function NavItem({ icon, active = false, onClick, tooltip }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={onClick}
            className={`p-3 rounded-xl ${active ? "bg-gradient-to-r from-pink-500 to-orange-400 text-white" : "text-gray-500 hover:bg-gray-100"}`}
          >
            {icon}
          </button>
        </TooltipTrigger>
        <TooltipContent side="right">{tooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

function DashboardView() {
  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Aktualisieren
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Letzte 7 Tage
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button className="bg-gradient-to-r from-pink-500 to-yellow-300 hover:from-pink-600 hover:to-yellow-400">
            <PlusCircle className="h-4 w-4 mr-2" />
            Neuer Bericht
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Konversationen gesamt</p>
                <h3 className="text-3xl font-bold mt-1">1,294</h3>
                <p className="text-sm text-green-600 mt-1">+12% im Vergleich zum Vormonat</p>
              </div>
              <div className="bg-pink-100 p-2 rounded-lg">
                <MessageSquare className="h-6 w-6 text-pink-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Kundenzufriedenheit</p>
                <h3 className="text-3xl font-bold mt-1">93%</h3>
                <p className="text-sm text-green-600 mt-1">+5% im Vergleich zum Vormonat</p>
              </div>
              <div className="bg-green-100 p-2 rounded-lg">
                <Smile className="h-6 w-6 text-green-500" />
              </div>
            </div>
            <Progress value={93} className="h-2 mt-4" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Reaktionszeit</p>
                <h3 className="text-3xl font-bold mt-1">12m</h3>
                <p className="text-sm text-amber-600 mt-1">+3m im Vergleich zum Vormonat</p>
              </div>
              <div className="bg-amber-100 p-2 rounded-lg">
                <Clock className="h-6 w-6 text-amber-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Aktive Benutzer</p>
                <h3 className="text-3xl font-bold mt-1">8/10</h3>
                <p className="text-sm text-gray-500 mt-1">Pro Plan</p>
              </div>
              <div className="bg-blue-100 p-2 rounded-lg">
                <Users className="h-6 w-6 text-blue-500" />
              </div>
            </div>
            <Progress value={80} className="h-2 mt-4" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Nachrichtenvolumen</CardTitle>
            <CardDescription>Erhaltene Nachrichten über alle Kanäle</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <Image
              src="/images/eluma-dashboard.png"
              alt="Nachrichtenvolumen Chart"
              width={600}
              height={300}
              className="w-full h-auto"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Kanalverteilung</CardTitle>
            <CardDescription>Nachrichtenvolumen nach Kanal</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span>WhatsApp</span>
                  </div>
                  <span className="text-sm font-medium">65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                    <span>Instagram</span>
                  </div>
                  <span className="text-sm font-medium">20%</span>
                </div>
                <Progress value={20} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <span>Facebook</span>
                  </div>
                  <span className="text-sm font-medium">10%</span>
                </div>
                <Progress value={10} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-gray-500 mr-2"></div>
                    <span>E-Mail</span>
                  </div>
                  <span className="text-sm font-medium">5%</span>
                </div>
                <Progress value={5} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Aktuelle Konversationen</CardTitle>
            <CardDescription>Letzte Kundeninteraktionen</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-100">
              {[
                { name: "Maria Schmidt", message: "Wann habt ihr geöffnet?", time: "14:32", channel: "WhatsApp" },
                {
                  name: "Thomas Weber",
                  message: "Danke für die schnelle Antwort!",
                  time: "12:05",
                  channel: "WhatsApp",
                },
                {
                  name: "Laura Müller",
                  message: "Ich hätte Interesse an eurem Angebot.",
                  time: "Gestern",
                  channel: "Instagram",
                },
                {
                  name: "Michael Bauer",
                  message: "Ist das Produkt noch verfügbar?",
                  time: "Gestern",
                  channel: "Facebook",
                },
                {
                  name: "Sophie Klein",
                  message: "Können Sie mir mehr Informationen schicken?",
                  time: "Montag",
                  channel: "E-Mail",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center p-4 hover:bg-gray-50">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarFallback className="bg-pink-100 text-pink-800">
                      {item.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium truncate">{item.name}</h3>
                      <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{item.time}</span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">{item.message}</p>
                  </div>
                  <Badge variant="outline" className="ml-2 bg-green-50 text-green-700 border-green-200">
                    {item.channel}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Team Performance</CardTitle>
            <CardDescription>Reaktionszeiten nach Teammitglied</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {[
                { name: "Anna Meyer", role: "Support Agent", time: "8m", performance: 95 },
                { name: "Max Schulz", role: "Support Agent", time: "12m", performance: 85 },
                { name: "Julia Becker", role: "Support Agent", time: "15m", performance: 75 },
                { name: "David Krause", role: "Support Agent", time: "18m", performance: 65 },
              ].map((member, index) => (
                <div key={index} className="flex items-center">
                  <Avatar className="h-8 w-8 mr-3">
                    <AvatarFallback className="bg-pink-100 text-pink-800">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-medium">{member.name}</h4>
                      <span className="text-xs font-medium">{member.time}</span>
                    </div>
                    <Progress value={member.performance} className="h-1 mt-1" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function ChatView() {
  const [message, setMessage] = useState("")
  const [newMessage, setNewMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hallo! Ich interessiere mich für eure Produkte. Wann habt ihr geöffnet?",
      sender: "customer",
      time: "14:30",
    },
    {
      id: 2,
      text: "Hallo Maria! Wir haben Montag bis Freitag von 9 bis 18 Uhr geöffnet. Am Wochenende von 10 bis 16 Uhr.",
      sender: "agent",
      time: "14:31",
    },
    {
      id: 3,
      text: "Super, danke! Und habt ihr das neue Modell XYZ auf Lager?",
      sender: "customer",
      time: "14:32",
    },
    {
      id: 4,
      text: "Ich würde es gerne heute noch anschauen kommen.",
      sender: "customer",
      time: "14:32",
    },
    {
      id: 5,
      text: "Könnt ihr mir bitte Bescheid geben?",
      sender: "customer",
      time: "14:33",
    },
  ])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!message.trim()) return

    // Füge die Nachricht des Agenten hinzu
    const newAgentMessage = {
      id: messages.length + 1,
      text: message,
      sender: "agent",
      time: new Date().toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages([...messages, newAgentMessage])
    setMessage("")

    // Simuliere eine Antwort vom Kunden nach einer kurzen Verzögerung
    setTimeout(() => {
      const responses = [
        "Vielen Dank für die Information!",
        "Das klingt super, ich komme heute vorbei.",
        "Perfekt, dann bis später!",
        "Haben Sie auch andere Modelle auf Lager?",
        "Kann ich das Produkt auch online bestellen?",
      ]

      const randomResponse = responses[Math.floor(Math.random() * responses.length)]

      const customerReply = {
        id: messages.length + 2,
        text: randomResponse,
        sender: "customer",
        time: new Date().toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }),
      }

      setMessages((prev) => [...prev, customerReply])
      setNewMessage(randomResponse)
    }, 3000)
  }

  return (
    <div className="flex-1 flex">
      {/* Chat List */}
      <div className="w-80 bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="font-bold text-lg">Nachrichten</h2>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="text-gray-500 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-pink-500 rounded-full"></span>
            </Button>
            <Avatar className="h-8 w-8 ml-2">
              <AvatarImage
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=32&h=32&auto=format&fit=crop"
                alt="User"
              />
              <AvatarFallback className="bg-pink-100 text-pink-800">JD</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input placeholder="Suche Konversationen..." className="pl-10" />
          </div>
        </div>

        <Tabs defaultValue="all">
          <div className="px-4 pt-4">
            <TabsList className="w-full">
              <TabsTrigger value="all" className="flex-1">
                Alle
              </TabsTrigger>
              <TabsTrigger value="unread" className="flex-1">
                Ungelesen
              </TabsTrigger>
              <TabsTrigger value="assigned" className="flex-1">
                Zugewiesen
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="divide-y divide-gray-100">
              <ChatItem
                name="Maria Schmidt"
                message={newMessage || "Könnt ihr mir bitte Bescheid geben?"}
                time="14:33"
                unread={newMessage ? 1 : 3}
                active
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=40&h=40&auto=format&fit=crop"
              />
              <ChatItem
                name="Thomas Weber"
                message="Danke für die schnelle Antwort!"
                time="12:05"
                image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=40&h=40&auto=format&fit=crop"
              />
              <ChatItem
                name="Laura Müller"
                message="Ich hätte Interesse an eurem Angebot."
                time="Gestern"
                unread={1}
                image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=40&h=40&auto=format&fit=crop"
              />
              <ChatItem
                name="Michael Bauer"
                message="Ist das Produkt noch verfügbar?"
                time="Gestern"
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=40&h=40&auto=format&fit=crop"
              />
              <ChatItem
                name="Sophie Klein"
                message="Können Sie mir mehr Informationen schicken?"
                time="Montag"
                image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=40&h=40&auto=format&fit=crop"
              />
            </div>
          </TabsContent>

          <TabsContent value="unread" className="mt-0">
            <div className="divide-y divide-gray-100">
              <ChatItem
                name="Maria Schmidt"
                message={newMessage || "Könnt ihr mir bitte Bescheid geben?"}
                time="14:33"
                unread={newMessage ? 1 : 3}
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=40&h=40&auto=format&fit=crop"
              />
              <ChatItem
                name="Laura Müller"
                message="Ich hätte Interesse an eurem Angebot."
                time="Gestern"
                unread={1}
                image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=40&h=40&auto=format&fit=crop"
              />
            </div>
          </TabsContent>

          <TabsContent value="assigned" className="mt-0">
            <div className="divide-y divide-gray-100">
              <ChatItem
                name="Thomas Weber"
                message="Danke für die schnelle Antwort!"
                time="12:05"
                assigned="Du"
                image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=40&h=40&auto=format&fit=crop"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white p-4 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=40&h=40&auto=format&fit=crop"
                alt="Maria Schmidt"
              />
              <AvatarFallback className="bg-pink-100 text-pink-800">MS</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold">Maria Schmidt</h2>
              <div className="flex items-center text-sm text-gray-500">
                <Badge variant="outline" className="mr-2 bg-green-50 text-green-700 border-green-200">
                  WhatsApp
                </Badge>
                <span>Online</span>
              </div>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button variant="ghost" size="icon">
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-br from-pink-50 to-yellow-50">
          <div className="flex justify-center">
            <span className="text-xs bg-white px-3 py-1 rounded-full text-gray-500">Heute, 14:30</span>
          </div>

          {messages.map((msg) => (
            <div key={msg.id} className={`flex justify-${msg.sender === "customer" ? "start" : "end"}`}>
              <div
                className={`${
                  msg.sender === "customer" ? "bg-white" : "bg-gradient-to-r from-pink-500 to-orange-400 text-white"
                } rounded-lg p-3 max-w-[80%] shadow-sm`}
              >
                <p>{msg.text}</p>
                <span className={`text-xs ${msg.sender === "customer" ? "text-gray-500" : "text-white/80"} mt-1 block`}>
                  {msg.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-white p-4 border-t border-gray-200">
          <form onSubmit={handleSendMessage} className="space-y-3">
            <div className="flex items-center">
              <Button type="button" variant="ghost" size="icon" className="text-gray-500">
                <Paperclip className="h-5 w-5" />
              </Button>
              <Input
                placeholder="Schreibe eine Nachricht..."
                className="mx-2"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button type="button" variant="ghost" size="icon" className="text-gray-500">
                <Smile className="h-5 w-5" />
              </Button>
              <Button type="submit" size="icon" className="bg-gradient-to-r from-pink-500 to-orange-400 ml-2">
                <Send className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center text-xs text-gray-500">
              <div className="flex-1">
                <Button variant="ghost" size="sm" className="text-xs h-auto py-1">
                  Schnellantworten
                </Button>
              </div>
              <div>
                Automatische Übersetzung: <span className="font-medium">Deutsch</span>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Customer Info Panel */}
      <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto">
        <div className="p-6 text-center border-b border-gray-200">
          <Avatar className="h-20 w-20 mx-auto mb-4">
            <AvatarImage
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=80&h=80&auto=format&fit=crop"
              alt="Maria Schmidt"
            />
            <AvatarFallback className="bg-pink-100 text-pink-800 text-2xl">MS</AvatarFallback>
          </Avatar>
          <h2 className="font-bold text-xl">Maria Schmidt</h2>
          <p className="text-gray-500">Kunde seit Mai 2023</p>
        </div>

        <div className="p-4">
          <Card className="mb-4">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Kontaktinformationen</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <div className="space-y-2">
                <div>
                  <span className="text-gray-500">Telefon:</span>
                  <span className="block">+49 123 4567890</span>
                </div>
                <div>
                  <span className="text-gray-500">E-Mail:</span>
                  <span className="block">maria.schmidt@example.com</span>
                </div>
                <div>
                  <span className="text-gray-500">Adresse:</span>
                  <span className="block">Musterstraße 123, 12345 Berlin</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Letzte Bestellungen</CardTitle>
            </CardHeader>
            <CardContent className="text-sm p-0">
              <div className="divide-y divide-gray-100">
                <div className="p-3">
                  <div className="font-medium">#12345</div>
                  <div className="text-gray-500">3 Produkte • 129,99 €</div>
                  <div className="text-xs text-gray-400">15. April 2023</div>
                </div>
                <div className="p-3">
                  <div className="font-medium">#12289</div>
                  <div className="text-gray-500">1 Produkt • 49,99 €</div>
                  <div className="text-xs text-gray-400">2. März 2023</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Notizen</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-yellow-50 p-3 rounded-md text-sm">
                <p>Kunde bevorzugt Kontakt über WhatsApp. Interessiert an neuen Produkten der XYZ-Serie.</p>
                <div className="text-xs text-gray-500 mt-2">Hinzugefügt am 10. Mai 2023</div>
              </div>
              <Button variant="ghost" size="sm" className="w-full mt-3 text-pink-500">
                Notiz hinzufügen
              </Button>
            </CardContent>
          </Card>

          <div className="mt-4">
            <Button variant="outline" size="sm" className="w-full">
              Kundenprofil bearbeiten
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function AnalyticsView() {
  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Analysen</h1>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Aktualisieren
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Letzte 30 Tage
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button className="bg-gradient-to-r from-pink-500 to-yellow-300 hover:from-pink-600 hover:to-yellow-400">
            <PlusCircle className="h-4 w-4 mr-2" />
            Bericht exportieren
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Gesamtnachrichten</p>
                <h3 className="text-3xl font-bold mt-1">8,432</h3>
                <p className="text-sm text-green-600 mt-1">+18% im Vergleich zum Vormonat</p>
              </div>
              <div className="bg-pink-100 p-2 rounded-lg">
                <MessageSquare className="h-6 w-6 text-pink-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Durchschnittliche Reaktionszeit</p>
                <h3 className="text-3xl font-bold mt-1">12m</h3>
                <p className="text-sm text-amber-600 mt-1">+3m im Vergleich zum Vormonat</p>
              </div>
              <div className="bg-amber-100 p-2 rounded-lg">
                <Clock className="h-6 w-6 text-amber-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Konversionsrate</p>
                <h3 className="text-3xl font-bold mt-1">24%</h3>
                <p className="text-sm text-green-600 mt-1">+2% im Vergleich zum Vormonat</p>
              </div>
              <div className="bg-green-100 p-2 rounded-lg">
                <PieChart className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Nachrichtenvolumen</CardTitle>
            <CardDescription>Erhaltene Nachrichten über alle Kanäle</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <Image
              src="/images/eluma-dashboard.png"
              alt="Nachrichtenvolumen Chart"
              width={600}
              height={300}
              className="w-full h-auto"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Reaktionszeit</CardTitle>
            <CardDescription>Durchschnittliche Zeit bis zur ersten Antwort (Minuten)</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <Image
              src="/images/eluma-dashboard.png"
              alt="Reaktionszeit Chart"
              width={600}
              height={300}
              className="w-full h-auto"
            />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Kanalverteilung</CardTitle>
            <CardDescription>Nachrichtenvolumen nach Kanal</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span>WhatsApp</span>
                  </div>
                  <span className="text-sm font-medium">65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                    <span>Instagram</span>
                  </div>
                  <span className="text-sm font-medium">20%</span>
                </div>
                <Progress value={20} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <span>Facebook</span>
                  </div>
                  <span className="text-sm font-medium">10%</span>
                </div>
                <Progress value={10} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-gray-500 mr-2"></div>
                    <span>E-Mail</span>
                  </div>
                  <span className="text-sm font-medium">5%</span>
                </div>
                <Progress value={5} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Häufige Anfragen</CardTitle>
            <CardDescription>Top Themen nach Häufigkeit</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span>Produktverfügbarkeit</span>
                  <span className="text-sm font-medium">35%</span>
                </div>
                <Progress value={35} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <span>Öffnungszeiten</span>
                  <span className="text-sm font-medium">25%</span>
                </div>
                <Progress value={25} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <span>Preisanfragen</span>
                  <span className="text-sm font-medium">20%</span>
                </div>
                <Progress value={20} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <span>Lieferzeiten</span>
                  <span className="text-sm font-medium">15%</span>
                </div>
                <Progress value={15} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <span>Sonstiges</span>
                  <span className="text-sm font-medium">5%</span>
                </div>
                <Progress value={5} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Team Performance</CardTitle>
            <CardDescription>Reaktionszeiten nach Teammitglied</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {[
                { name: "Anna Meyer", role: "Support Agent", time: "8m", performance: 95 },
                { name: "Max Schulz", role: "Support Agent", time: "12m", performance: 85 },
                { name: "Julia Becker", role: "Support Agent", time: "15m", performance: 75 },
                { name: "David Krause", role: "Support Agent", time: "18m", performance: 65 },
              ].map((member, index) => (
                <div key={index} className="flex items-center">
                  <Avatar className="h-8 w-8 mr-3">
                    <AvatarFallback className="bg-pink-100 text-pink-800">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-medium">{member.name}</h4>
                      <span className="text-xs font-medium">{member.time}</span>
                    </div>
                    <Progress value={member.performance} className="h-1 mt-1" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function AutomationView() {
  const [showNewAutomationDialog, setShowNewAutomationDialog] = useState(false)

  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Automatisierungen</h1>
        <div className="flex items-center space-x-4">
          <Dialog open={showNewAutomationDialog} onOpenChange={setShowNewAutomationDialog}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-pink-500 to-yellow-300 hover:from-pink-600 hover:to-yellow-400">
                <PlusCircle className="h-4 w-4 mr-2" />
                Neue Automatisierung
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Neue Automatisierung erstellen</DialogTitle>
                <DialogDescription>
                  Erstelle eine Automatisierung, um wiederkehrende Aufgaben zu automatisieren.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" placeholder="Automatisierungsname" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="trigger" className="text-right">
                    Auslöser
                  </Label>
                  <Select defaultValue="message_received">
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Auslöser wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="message_received">Nachricht erhalten</SelectItem>
                      <SelectItem value="new_customer">Neuer Kunde</SelectItem>
                      <SelectItem value="keyword">Schlüsselwort erkannt</SelectItem>
                      <SelectItem value="time_based">Zeitbasiert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="action" className="text-right">
                    Aktion
                  </Label>
                  <Select defaultValue="send_message">
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Aktion wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="send_message">Nachricht senden</SelectItem>
                      <SelectItem value="assign_agent">Agent zuweisen</SelectItem>
                      <SelectItem value="add_tag">Tag hinzufügen</SelectItem>
                      <SelectItem value="create_task">Aufgabe erstellen</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="message" className="text-right">
                    Nachricht
                  </Label>
                  <Input id="message" placeholder="Nachrichtentext" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowNewAutomationDialog(false)}>
                  Abbrechen
                </Button>
                <Button
                  className="bg-gradient-to-r from-pink-500 to-yellow-300 hover:from-pink-600 hover:to-yellow-400"
                  onClick={() => setShowNewAutomationDialog(false)}
                >
                  Erstellen
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Workflow-Builder</CardTitle>
            <CardDescription>Erstelle komplexe Automatisierungen mit unserem visuellen Builder</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
              <Zap className="h-10 w-10 text-gray-400 mb-2" />
              <p className="text-gray-500 text-center mb-2">Erstelle visuelle Workflows für deine Automatisierungen</p>
              <Button variant="outline" size="sm">
                Workflow-Builder öffnen
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Chatbot-Builder</CardTitle>
            <CardDescription>Erstelle KI-gestützte Chatbots ohne Programmierkenntnisse</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
              <Bot className="h-10 w-10 text-gray-400 mb-2" />
              <p className="text-gray-500 text-center mb-2">
                Erstelle Chatbots, die Kundenanfragen automatisch beantworten
              </p>
              <Button variant="outline" size="sm">
                Chatbot-Builder öffnen
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-xl font-bold mb-4">Aktive Automatisierungen</h2>
      <div className="grid grid-cols-1 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-pink-100 p-2 rounded-lg mr-4">
                  <MessageSquare className="h-5 w-5 text-pink-500" />
                </div>
                <div>
                  <h3 className="font-medium">Willkommensnachricht</h3>
                  <p className="text-sm text-gray-500">Sendet eine Begrüßungsnachricht an neue Kunden</p>
                </div>
              </div>
              <div className="flex items-center">
                <Badge className="mr-2 bg-green-100 text-green-700 border-green-200">Aktiv</Badge>
                <Button variant="ghost" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-orange-100 p-2 rounded-lg mr-4">
                  <Clock className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-medium">Öffnungszeiten-Antwort</h3>
                  <p className="text-sm text-gray-500">Antwortet automatisch auf Fragen zu Öffnungszeiten</p>
                </div>
              </div>
              <div className="flex items-center">
                <Badge className="mr-2 bg-green-100 text-green-700 border-green-200">Aktiv</Badge>
                <Button variant="ghost" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <Users className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-medium">Ticket-Zuweisung</h3>
                  <p className="text-sm text-gray-500">Weist Nachrichten automatisch dem richtigen Teammitglied zu</p>
                </div>
              </div>
              <div className="flex items-center">
                <Badge className="mr-2 bg-green-100 text-green-700 border-green-200">Aktiv</Badge>
                <Button variant="ghost" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-purple-100 p-2 rounded-lg mr-4">
                  <FileText className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-medium">Bestellbestätigung</h3>
                  <p className="text-sm text-gray-500">Sendet automatisch Bestellbestätigungen</p>
                </div>
              </div>
              <div className="flex items-center">
                <Badge className="mr-2 bg-amber-100 text-amber-700 border-amber-200">Pausiert</Badge>
                <Button variant="ghost" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-xl font-bold mb-4">Vorlagen</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center p-4">
              <MessageSquare className="h-8 w-8 text-pink-500 mb-2" />
              <h3 className="font-medium mb-1">Willkommensnachricht</h3>
              <p className="text-sm text-gray-500">Begrüße neue Kunden automatisch</p>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center p-4">
              <Bot className="h-8 w-8 text-orange-500 mb-2" />
              <h3 className="font-medium mb-1">FAQ-Chatbot</h3>
              <p className="text-sm text-gray-500">Beantworte häufig gestellte Fragen</p>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center p-4">
              <Calendar className="h-8 w-8 text-blue-500 mb-2" />
              <h3 className="font-medium mb-1">Terminbuchung</h3>
              <p className="text-sm text-gray-500">Automatisiere die Terminbuchung</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function SettingsView() {
  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Einstellungen</h1>
        <Button className="bg-gradient-to-r from-pink-500 to-yellow-300 hover:from-pink-600 hover:to-yellow-400">
          Änderungen speichern
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-4">
              <nav className="space-y-1">
                <NavLink icon={<User />} label="Profil" active />
                <NavLink icon={<Users />} label="Team" />
                <NavLink icon={<MessageSquare />} label="Kanäle" />
                <NavLink icon={<Sliders />} label="Präferenzen" />
                <NavLink icon={<Bell />} label="Benachrichtigungen" />
                <NavLink icon={<Lock />} label="Sicherheit" />
                <NavLink icon={<CreditCard />} label="Abrechnung" />
                <NavLink icon={<HelpCircle />} label="Hilfe & Support" />
              </nav>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Profileinstellungen</CardTitle>
              <CardDescription>Verwalte deine persönlichen Informationen und Kontoeinstellungen</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=80&h=80&auto=format&fit=crop" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm">
                      Bild ändern
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-500">
                      Entfernen
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Vorname</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nachname</Label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail-Adresse</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefonnummer</Label>
                  <Input id="phone" type="tel" defaultValue="+49 123 4567890" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="language">Sprache</Label>
                  <Select defaultValue="de">
                    <SelectTrigger>
                      <SelectValue placeholder="Sprache wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="de">Deutsch</SelectItem>
                      <SelectItem value="en">Englisch</SelectItem>
                      <SelectItem value="fr">Französisch</SelectItem>
                      <SelectItem value="es">Spanisch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timezone">Zeitzone</Label>
                  <Select defaultValue="europe_berlin">
                    <SelectTrigger>
                      <SelectValue placeholder="Zeitzone wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="europe_berlin">Europe/Berlin</SelectItem>
                      <SelectItem value="europe_london">Europe/London</SelectItem>
                      <SelectItem value="america_new_york">America/New York</SelectItem>
                      <SelectItem value="asia_tokyo">Asia/Tokyo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-4">Benachrichtigungseinstellungen</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">E-Mail-Benachrichtigungen</p>
                      <p className="text-sm text-gray-500">Erhalte Benachrichtigungen per E-Mail</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Desktop-Benachrichtigungen</p>
                      <p className="text-sm text-gray-500">Erhalte Benachrichtigungen im Browser</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Neue Nachricht</p>
                      <p className="text-sm text-gray-500">Benachrichtigung bei neuen Nachrichten</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Abbrechen</Button>
              <Button className="bg-gradient-to-r from-pink-500 to-yellow-300 hover:from-pink-600 hover:to-yellow-400">
                Speichern
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

function ContactsView() {
  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Kontakte</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Kontakte suchen..." className="pl-10 w-64" />
          </div>
          <Button className="bg-gradient-to-r from-pink-500 to-yellow-300 hover:from-pink-600 hover:to-yellow-400">
            <PlusCircle className="h-4 w-4 mr-2" />
            Kontakt hinzufügen
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-medium">Name</th>
                  <th className="text-left p-4 font-medium">Kontaktinformationen</th>
                  <th className="text-left p-4 font-medium">Kanal</th>
                  <th className="text-left p-4 font-medium">Letzte Interaktion</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Aktionen</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Maria Schmidt",
                    email: "maria.schmidt@example.com",
                    phone: "+49 123 4567890",
                    channel: "WhatsApp",
                    lastInteraction: "Heute, 14:33",
                    status: "Aktiv",
                  },
                  {
                    name: "Thomas Weber",
                    email: "thomas.weber@example.com",
                    phone: "+49 123 9876543",
                    channel: "WhatsApp",
                    lastInteraction: "Heute, 12:05",
                    status: "Aktiv",
                  },
                  {
                    name: "Laura Müller",
                    email: "laura.mueller@example.com",
                    phone: "+49 123 4567123",
                    channel: "Instagram",
                    lastInteraction: "Gestern",
                    status: "Aktiv",
                  },
                  {
                    name: "Michael Bauer",
                    email: "michael.bauer@example.com",
                    phone: "+49 123 4567456",
                    channel: "Facebook",
                    lastInteraction: "Gestern",
                    status: "Aktiv",
                  },
                  {
                    name: "Sophie Klein",
                    email: "sophie.klein@example.com",
                    phone: "+49 123 4567789",
                    channel: "E-Mail",
                    lastInteraction: "Montag",
                    status: "Inaktiv",
                  },
                ].map((contact, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-3">
                          <AvatarFallback className="bg-pink-100 text-pink-800">
                            {contact.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{contact.name}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm">
                        <p>{contact.email}</p>
                        <p>{contact.phone}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge
                        variant="outline"
                        className={`
                        ${contact.channel === "WhatsApp" ? "bg-green-50 text-green-700 border-green-200" : ""}
                        ${contact.channel === "Instagram" ? "bg-purple-50 text-purple-700 border-purple-200" : ""}
                        ${contact.channel === "Facebook" ? "bg-blue-50 text-blue-700 border-blue-200" : ""}
                        ${contact.channel === "E-Mail" ? "bg-gray-50 text-gray-700 border-gray-200" : ""}
                      `}
                      >
                        {contact.channel}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <span className="text-sm">{contact.lastInteraction}</span>
                    </td>
                    <td className="p-4">
                      <Badge
                        className={`
                        ${contact.status === "Aktiv" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}
                      `}
                      >
                        {contact.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-500">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ChatItem({ name, message, time, unread, assigned, active = false, image }) {
  return (
    <div className={`p-4 hover:bg-gray-50 cursor-pointer ${active ? "bg-pink-50" : ""}`}>
      <div className="flex items-start">
        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="bg-pink-100 text-pink-800">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <h3 className="font-medium truncate">{name}</h3>
            <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{time}</span>
          </div>
          <p className="text-sm text-gray-500 truncate">{message}</p>
          {assigned && (
            <Badge variant="outline" className="mt-1 text-xs bg-purple-50 text-purple-700 border-purple-200">
              {assigned}
            </Badge>
          )}
        </div>
        {unread && <Badge className="ml-2 bg-gradient-to-r from-pink-500 to-orange-400">{unread}</Badge>}
      </div>
    </div>
  )
}

function NavLink({ icon, label, active = false }) {
  return (
    <div
      className={`flex items-center space-x-3 px-3 py-2 rounded-md cursor-pointer ${
        active ? "bg-pink-50 text-pink-500" : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </div>
  )
}

function Calendar({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}

function Clock({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function Lock({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function CreditCard({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}

function Trash({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}

function ChevronDown({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function Switch({ defaultChecked = false }) {
  const [checked, setChecked] = useState(defaultChecked)

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        checked ? "bg-pink-500" : "bg-gray-200"
      }`}
      onClick={() => setChecked(!checked)}
    >
      <span
        className={`pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  )
}

