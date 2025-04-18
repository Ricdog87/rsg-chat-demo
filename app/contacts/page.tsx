"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Plus,
  Filter,
  MoreHorizontal,
  MessageSquare,
  Phone,
  Mail,
  Instagram,
  Facebook,
  ChevronDown,
  UserPlus,
  Upload,
  Download,
  Trash2,
} from "lucide-react"
import { useRouter } from "next/navigation"

// Mock data for contacts
const mockContacts = [
  {
    id: 1,
    name: "Maria Schmidt",
    email: "maria.schmidt@example.com",
    phone: "+49 123 4567890",
    channel: "WhatsApp",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "Aktiv",
    tags: ["Stammkunde", "VIP"],
    lastContact: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(), // 2 days ago
  },
  {
    id: 2,
    name: "Thomas Weber",
    email: "thomas.weber@example.com",
    phone: "+49 123 4567891",
    channel: "Instagram",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "Aktiv",
    tags: ["Neukunde"],
    lastContact: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(), // 5 days ago
  },
  {
    id: 3,
    name: "Laura Müller",
    email: "laura.mueller@example.com",
    phone: "+49 123 4567892",
    channel: "WhatsApp",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "Inaktiv",
    tags: ["Stammkunde"],
    lastContact: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString(), // 30 days ago
  },
  {
    id: 4,
    name: "Michael Schneider",
    email: "michael.schneider@example.com",
    phone: "+49 123 4567893",
    channel: "Facebook",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "Aktiv",
    tags: ["Geschäftskunde", "VIP"],
    lastContact: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(), // 7 days ago
  },
  {
    id: 5,
    name: "Sophie Wagner",
    email: "sophie.wagner@example.com",
    phone: "+49 123 4567894",
    channel: "Email",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "Aktiv",
    tags: ["Neukunde"],
    lastContact: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1).toISOString(), // 1 day ago
  },
  {
    id: 6,
    name: "Felix Bauer",
    email: "felix.bauer@example.com",
    phone: "+49 123 4567895",
    channel: "WhatsApp",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "Aktiv",
    tags: ["Stammkunde"],
    lastContact: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(), // 3 days ago
  },
  {
    id: 7,
    name: "Anna Hoffmann",
    email: "anna.hoffmann@example.com",
    phone: "+49 123 4567896",
    channel: "Instagram",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "Inaktiv",
    tags: ["Stammkunde"],
    lastContact: new Date(Date.now() - 1000 * 60 * 60 * 24 * 45).toISOString(), // 45 days ago
  },
  {
    id: 8,
    name: "David Fischer",
    email: "david.fischer@example.com",
    phone: "+49 123 4567897",
    channel: "WhatsApp",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "Aktiv",
    tags: ["Geschäftskunde"],
    lastContact: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(), // 10 days ago
  },
]

// Mock data for groups
const mockGroups = [
  {
    id: 1,
    name: "VIP Kunden",
    count: 12,
    description: "Unsere wichtigsten Kunden mit hohem Umsatz",
  },
  {
    id: 2,
    name: "Neukunden",
    count: 28,
    description: "Kunden, die in den letzten 30 Tagen hinzugefügt wurden",
  },
  {
    id: 3,
    name: "Inaktive Kunden",
    count: 45,
    description: "Kunden ohne Aktivität in den letzten 90 Tagen",
  },
  {
    id: 4,
    name: "Newsletter-Abonnenten",
    count: 156,
    description: "Kunden, die unseren Newsletter abonniert haben",
  },
]

export default function ContactsPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [contacts, setContacts] = useState(mockContacts)
  const [groups, setGroups] = useState(mockGroups)
  const [searchTerm, setSearchTerm] = useState("")
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    channel: "WhatsApp",
  })

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would save the contact to your database
    const newContact = {
      id: contacts.length + 1,
      ...formData,
      avatar: "/placeholder.svg?height=40&width=40",
      status: "Aktiv",
      tags: ["Neukunde"],
      lastContact: new Date().toISOString(),
    }
    setContacts([newContact, ...contacts])
    setShowForm(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      channel: "WhatsApp",
    })
  }

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone.includes(searchTerm),
  )

  const formatDate = (isoString) => {
    const date = new Date(isoString)
    return new Intl.DateTimeFormat("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date)
  }

  const getChannelIcon = (channel) => {
    switch (channel) {
      case "WhatsApp":
        return <MessageSquare className="h-4 w-4 text-green-500" />
      case "Instagram":
        return <Instagram className="h-4 w-4 text-purple-500" />
      case "Facebook":
        return <Facebook className="h-4 w-4 text-blue-500" />
      case "Email":
        return <Mail className="h-4 w-4 text-pink-500" />
      default:
        return <MessageSquare className="h-4 w-4 text-gray-500" />
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Daten werden geladen...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Kontakte</h1>
          <p className="text-gray-600">Verwalte deine Kundenkontakte und Gruppen</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <Button onClick={() => setShowForm(!showForm)}>
            <Plus className="h-5 w-5 mr-2" />
            Neuer Kontakt
          </Button>
        </div>
      </div>

      {showForm && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Neuen Kontakt erstellen</CardTitle>
            <CardDescription>Füge einen neuen Kontakt zu deiner Datenbank hinzu</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Vor- und Nachname"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    E-Mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@beispiel.de"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Telefon
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+49 123 4567890"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="channel" className="text-sm font-medium">
                    Bevorzugter Kanal
                  </label>
                  <select
                    id="channel"
                    name="channel"
                    value={formData.channel}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Email">E-Mail</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Abbrechen
                </Button>
                <Button type="submit">Kontakt speichern</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="contacts" className="space-y-6">
        <TabsList>
          <TabsTrigger value="contacts">Kontakte</TabsTrigger>
          <TabsTrigger value="groups">Gruppen</TabsTrigger>
        </TabsList>

        <TabsContent value="contacts" className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Suche nach Namen, E-Mail oder Telefonnummer..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filter
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon">
                  <Upload className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-6 font-medium text-gray-500">Name</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-500">Kontakt</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-500">Kanal</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-500">Status</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-500">Tags</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-500">Letzter Kontakt</th>
                      <th className="text-right py-4 px-6 font-medium text-gray-500">Aktionen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredContacts.map((contact) => (
                      <tr key={contact.id} className="border-b hover:bg-gray-50">
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                            <Image
                              src={contact.avatar || "/placeholder.svg"}
                              alt={contact.name}
                              width={40}
                              height={40}
                              className="rounded-full mr-3"
                            />
                            <span className="font-medium text-gray-900">{contact.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="space-y-1">
                            <div className="flex items-center text-sm text-gray-600">
                              <Mail className="h-4 w-4 mr-2 text-gray-400" />
                              {contact.email}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Phone className="h-4 w-4 mr-2 text-gray-400" />
                              {contact.phone}
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                            {getChannelIcon(contact.channel)}
                            <span className="ml-2 text-gray-600">{contact.channel}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              contact.status === "Aktiv" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {contact.status}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex flex-wrap gap-1">
                            {contact.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-4 px-6 text-gray-600">{formatDate(contact.lastContact)}</td>
                        <td className="py-4 px-6 text-right">
                          <div className="flex justify-end space-x-2">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MessageSquare className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
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
        </TabsContent>

        <TabsContent value="groups" className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input placeholder="Gruppe suchen..." className="pl-10" />
            </div>
            <Button>
              <Plus className="h-5 w-5 mr-2" />
              Neue Gruppe
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group) => (
              <Card key={group.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle>{group.name}</CardTitle>
                  <CardDescription>{group.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex -space-x-2 mr-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-medium">
                          {group.count > 3 ? `+${group.count - 3}` : ""}
                        </div>
                        {Array.from({ length: Math.min(3, group.count) }).map((_, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs"
                          >
                            {i + 1}
                          </div>
                        ))}
                      </div>
                      <span className="text-gray-600">{group.count} Kontakte</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <UserPlus className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
