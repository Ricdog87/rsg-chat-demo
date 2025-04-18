"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function PublicNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  // Check if we're on a dashboard page
  const isDashboardPage = pathname?.startsWith("/dashboard")

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Don't show the navbar on dashboard pages
  if (isDashboardPage) return null

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { name: "Produkt", href: "/funktionen" },
    { name: "Branchen", href: "/branchen" },
    { name: "Kunden", href: "/kunden" },
    { name: "Preise", href: "/preise" },
    {
      name: "Ressourcen",
      href: "#",
      dropdown: [
        { name: "Blog", href: "/blog" },
        { name: "Hilfe-Center", href: "/hilfe" },
        { name: "API Dokumentation", href: "/dokumentation" },
      ],
    },
    { name: "Über uns", href: "/ueber-uns" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center text-white font-bold text-xl mr-2">
              E
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
              Elumalab
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) =>
              link.dropdown ? (
                <div key={index} className="relative group">
                  <button className="px-3 py-2 rounded-md text-gray-700 hover:text-pink-600 flex items-center">
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {link.dropdown.map((dropdownItem, idx) => (
                        <Link
                          key={idx}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={index}
                  href={link.href}
                  className={`px-3 py-2 rounded-md ${
                    pathname === link.href ? "text-pink-600 font-medium" : "text-gray-700 hover:text-pink-600"
                  }`}
                >
                  {link.name}
                </Link>
              ),
            )}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="font-medium">
                Anmelden
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline" className="font-medium">
                Vertrieb kontaktieren
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white font-medium">
                Kostenlos testen
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-pink-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) =>
                link.dropdown ? (
                  <div key={index} className="space-y-2">
                    <div className="px-3 py-2 font-medium text-gray-700">{link.name}</div>
                    <div className="pl-6 space-y-2">
                      {link.dropdown.map((dropdownItem, idx) => (
                        <Link
                          key={idx}
                          href={dropdownItem.href}
                          className="block px-3 py-2 text-gray-600 hover:text-pink-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={index}
                    href={link.href}
                    className={`px-3 py-2 ${
                      pathname === link.href ? "text-pink-600 font-medium" : "text-gray-700 hover:text-pink-600"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ),
              )}

              {/* Mobile Auth Buttons */}
              <div className="pt-4 space-y-2">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full font-medium">
                    Anmelden
                  </Button>
                </Link>
                <Link href="/demo" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full font-medium">
                    Vertrieb kontaktieren
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white font-medium">
                    Kostenlos testen
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
