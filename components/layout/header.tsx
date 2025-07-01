"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/common/logo"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "الرئيسية", href: "/" },
    { name: "الأطباء", href: "/search?type=doctors" },
    { name: "المستشفيات", href: "/search?type=hospitals" },
    { name: "المحافظات", href: "/governorates" },
    { name: "المدونة", href: "/blog" },
    { name: "من نحن", href: "/about" },
    { name: "اتصل بنا", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-primary font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-slate-600 hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Phone className="h-4 w-4 text-blue-500" />
              <span>19199</span>
            </div>

            <Button variant="gradient" size="sm" className="font-medium">
              احجز موعدك
            </Button>

            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-700">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white">
            <nav className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-slate-700 hover:text-primary hover:bg-slate-50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t border-slate-200 mt-4">
                <Button variant="gradient" className="w-full font-medium">
                  احجز موعدك
                </Button>
                <div className="flex items-center justify-center gap-2 mt-3 text-sm text-slate-600">
                  <Phone className="h-4 w-4 text-blue-500" />
                  <span>اتصل بنا: 19199</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
