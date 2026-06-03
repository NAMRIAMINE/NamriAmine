'use client'

import { Menu } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
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
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      aria-label="Primary"
      className="fixed inset-x-0 top-3 z-50 px-3 sm:px-6"
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full bg-white/88 px-2.5 shadow-[0_18px_55px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/80 backdrop-blur-md">
        <motion.button
          type="button"
          className="flex min-w-0 items-center gap-2 rounded-full py-1 pl-1 pr-3 text-left transition-colors duration-300 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          onClick={() => scrollToSection('home')}
          aria-label="Go to top"
        >
          <div className="h-10 w-10 overflow-hidden rounded-full ring-1 ring-slate-200">
            <Image
              src="/pdp.webp"
              alt="Namri Amine"
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="hidden min-w-0 sm:block">
            <span className="block truncate text-sm font-semibold text-slate-950">
              {personalInfo.name}
            </span>
            <span className="block truncate text-[11px] text-slate-500">{personalInfo.title}</span>
          </span>
        </motion.button>

        <div className="hidden items-center gap-1 md:flex">
          {navigationSections.map((section) => (
            <Button
              key={section.id}
              variant="ghost"
              onClick={() => handleNavClick(section.id)}
              className={`relative h-9 rounded-full px-3 text-xs font-medium capitalize transition-colors duration-300 ${
                activeSection === section.id
                  ? 'text-slate-950'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
              aria-current={activeSection === section.id ? 'page' : undefined}
            >
              {activeSection === section.id && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute inset-0 rounded-full bg-sky-50 ring-1 ring-sky-100"
                  transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                />
              )}
              <span className="relative z-10">{section.label}</span>
            </Button>
          ))}
        </div>

        <Sheet open={isMobileMenuOpen} onOpenChange={toggleMobileMenu}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full md:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <div className="flex flex-col space-y-3 pt-6">
              {navigationSections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                >
                  <Button
                    variant="ghost"
                    onClick={() => handleNavClick(section.id)}
                    className={`w-full justify-start rounded-2xl ${
                      activeSection === section.id ? 'bg-sky-50 text-sky-700' : 'text-slate-700'
                    }`}
                  >
                    <section.icon className="mr-2 h-4 w-4" />
                    {section.label}
                  </Button>
                </motion.div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  )
}
