'use client'

import { Menu } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { personalInfo } from '@/data/personal'
import { useActiveSection } from '@/hooks/useActiveSection'
import { navigationSections } from '@/lib/constants'
import { scrollToSection } from '@/lib/utils'
import { usePortfolioStore } from '@/store/usePortfolioStore'

export function Navigation() {
  const { activeSection, isMobileMenuOpen, toggleMobileMenu } = usePortfolioStore()

  useActiveSection()

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    if (isMobileMenuOpen) toggleMobileMenu()
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      aria-label="Primary"
      className="fixed top-0 w-full z-50 h-16 backdrop-blur-md bg-white/90 border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex h-full justify-between items-center">
          {/* Logo */}
          <motion.button
            type="button"
            className="flex items-center space-x-3"
            onClick={() => scrollToSection('home')}
            aria-label="Go to top"
          >
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-sky-600 text-white font-bold">
                <Image src="/pdp.webp" alt="Namri Amine" width={100} height={100} />
              </AvatarFallback>
            </Avatar>
            <div>
              <span className="block text-xl font-bold text-slate-900">{personalInfo.name}</span>
              <span className="block text-xs text-slate-500">Senior Full-Stack Developer</span>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navigationSections.map((section) => (
              <motion.div key={section.id} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Button
                  variant="ghost"
                  onClick={() => handleNavClick(section.id)}
                  className={`capitalize transition-all duration-300 relative ${
                    activeSection === section.id
                      ? 'text-sky-600 font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  aria-current={activeSection === section.id ? 'page' : undefined}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={toggleMobileMenu}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="flex flex-col space-y-4 pt-6">
                {navigationSections.map((section) => (
                  <Button
                    key={section.id}
                    variant="ghost"
                    onClick={() => handleNavClick(section.id)}
                    className={`justify-start ${
                      activeSection === section.id ? 'bg-sky-50 text-sky-600' : ''
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
    </motion.nav>
  )
}
