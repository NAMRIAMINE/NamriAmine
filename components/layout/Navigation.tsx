'use client'

import { ArrowUpRight, List } from '@phosphor-icons/react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { personalInfo } from '@/data/personal'
import { useActiveSection } from '@/hooks/useActiveSection'
import { navigationSections } from '@/lib/constants'
import { cn, scrollToSection } from '@/lib/utils'
import { usePortfolioStore } from '@/store/usePortfolioStore'

export function Navigation() {
  const { activeSection, isMobileMenuOpen, setMobileMenuOpen } = usePortfolioStore()

  useActiveSection()

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    if (isMobileMenuOpen) setMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -26, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
      aria-label="Primary"
      className="fixed inset-x-0 top-4 z-50 px-3 sm:px-6"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 rounded-full border border-white/80 bg-white/74 px-2.5 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-2xl">
        <motion.button
          type="button"
          className="flex min-w-0 items-center gap-3 rounded-full py-1 pl-1 pr-3 text-left transition-colors duration-300 hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          onClick={() => scrollToSection('home')}
          aria-label="Go to top"
        >
          <div className="h-10 w-10 overflow-hidden rounded-full ring-1 ring-slate-200/80">
            <Image
              src="/profile-thumb.webp"
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
            <span className="block truncate text-[11px] text-slate-500">Product systems</span>
          </span>
        </motion.button>

        <div className="hidden min-w-0 items-center gap-1 rounded-full border border-white/70 bg-white/70 p-1 md:flex">
          {navigationSections.map((section) => (
            <Button
              key={section.id}
              variant="ghost"
              onClick={() => handleNavClick(section.id)}
              aria-current={activeSection === section.id ? 'page' : undefined}
              className={cn(
                'relative h-10 rounded-full px-3.5 text-xs font-medium transition-colors duration-300',
                activeSection === section.id
                  ? 'text-slate-950'
                  : 'text-slate-500 hover:bg-white hover:text-slate-900',
              )}
            >
              {activeSection === section.id && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute inset-0 rounded-full bg-white shadow-[0_12px_34px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80"
                  transition={{ type: 'spring', stiffness: 430, damping: 36 }}
                />
              )}
              <span className="relative z-10">{section.label}</span>
            </Button>
          ))}
        </div>

        <div className="hidden items-center gap-2 xl:flex">
          <div className="rounded-full border border-white/80 bg-white/78 px-3 py-2 text-[11px] font-medium  text-slate-500">
            {personalInfo.availability}
          </div>
          <Button
            onClick={() => scrollToSection('contact')}
            className="rounded-full bg-slate-950 px-4 text-white transition-colors duration-300 hover:bg-slate-800"
          >
            Contact
            <ArrowUpRight className="ml-2 h-4 w-4" weight="bold" />
          </Button>
        </div>

        <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full md:hidden"
              aria-label="Open navigation menu"
            >
              <List className="h-5 w-5" weight="bold" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full max-w-none border-l-0 bg-[rgba(247,251,255,0.97)] px-0 py-0 sm:w-full sm:max-w-none"
          >
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <div className="flex min-h-full flex-col">
              <div className="border-b border-slate-200/70 px-5 py-5">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 overflow-hidden rounded-full ring-1 ring-slate-200/80">
                    <Image
                      src="/profile-thumb.webp"
                      alt="Namri Amine"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">{personalInfo.name}</p>
                    <p className="text-xs text-slate-500">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 px-5 pb-6 pt-8">
                <div className="rounded-[2rem] border border-white/80 bg-white/82 p-4 shadow-[0_30px_90px_rgba(15,23,42,0.08)]">
                  <div className="space-y-3">
                    {navigationSections.map((section, index) => (
                      <motion.div
                        key={section.id}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.32,
                          delay: index * 0.05,
                          ease: [0.32, 0.72, 0, 1],
                        }}
                      >
                        <Button
                          variant="ghost"
                          onClick={() => handleNavClick(section.id)}
                          className={cn(
                            'h-14 w-full justify-between rounded-[1.4rem] px-4 text-left',
                            activeSection === section.id
                              ? 'bg-slate-950 text-white'
                              : 'bg-[#f6f9fc] text-slate-800 hover:bg-slate-100',
                          )}
                        >
                          <span className="flex items-center gap-3">
                            <section.icon className="h-5 w-5" weight="duotone" />
                            <span className="text-base font-medium">{section.label}</span>
                          </span>
                          <span className="text-xs font-medium uppercase  text-current/70">
                            Open
                          </span>
                        </Button>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-[1.5rem] bg-[#f3f8fd] p-4 ring-1 ring-slate-200/70">
                    <p className="text-xs font-medium  text-slate-400">Availability</p>
                    <p className="mt-2 text-sm font-medium leading-6 text-slate-700">
                      {personalInfo.availability}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  )
}
