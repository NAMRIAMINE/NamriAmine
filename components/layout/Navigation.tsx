// app/components/layout/Navigation.tsx
'use client'

import { Menu, Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import { useEffect } from 'react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { personalInfo } from '@/data/personal'
import { useActiveSection } from '@/hooks/useActiveSection'
import { navigationSections } from '@/lib/constants'
import { scrollToSection } from '@/lib/utils'
import { usePortfolioStore } from '@/store/usePortfolioStore'
export function Navigation() {
  const { darkMode, activeSection, isMobileMenuOpen, toggleDarkMode, toggleMobileMenu } =
    usePortfolioStore()

  useActiveSection()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    if (isMobileMenuOpen) toggleMobileMenu()
  }

  return (
    <nav
      aria-label="Primary"
      className="fixed top-0 w-full z-50 h-16 backdrop-blur-md bg-background/80 border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-4 h-full">
        <div className="flex h-full justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold">
                <Image src="/pdp.png" alt="Logo" width={100} height={100} />
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-xl font-bold">{personalInfo.name}</h1>
              <p className="text-xs text-muted-foreground">Full Stack Developer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navigationSections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                onClick={() => handleNavClick(section.id)}
                className={`capitalize transition-all duration-300 ${
                  activeSection === section.id
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                aria-current={activeSection === section.id ? 'page' : undefined}
              >
                {section.label}
              </Button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={toggleMobileMenu}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 pt-6">
                  {navigationSections.map((section) => (
                    <Button
                      key={section.id}
                      variant="ghost"
                      onClick={() => handleNavClick(section.id)}
                      className={`justify-start ${
                        activeSection === section.id ? 'bg-primary/10 text-primary' : ''
                      }`}
                    >
                      <section.icon className="w-4 h-4 mr-2" />
                      {section.label}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
