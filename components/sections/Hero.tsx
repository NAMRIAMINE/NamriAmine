'use client'

import { ChevronRight, Download, Mail } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data/personal'
import { scrollToSection } from '@/lib/utils'

const PANEL_SIGNALS = [
  { label: 'Currently at', value: 'Talio' },
  { label: 'Focus', value: 'Full-stack product platforms' },
  { label: 'Stack', value: 'Next.js, TypeScript, Node/FastAPI' },
  { label: 'Domains', value: 'AI, geospatial, inspection systems' },
  { label: 'Location', value: personalInfo.location },
] as const

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-[100dvh] flex items-center px-4 sm:px-6 lg:px-8 bg-white overflow-hidden scroll-mt-16 pt-20 pb-16"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1fr_300px] gap-10 xl:gap-16 items-center">
        {/* Left: Identity + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold leading-tight tracking-tighter text-slate-900">
            Senior JavaScript
            <br />
            Full-Stack <span className="text-sky-600">Developer</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-[42ch] leading-relaxed">
            6+ years building production platforms end to end. Next.js, TypeScript, Node/FastAPI,
            PostgreSQL. AI and geospatial workflows when the product needs them.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="group bg-sky-600 hover:bg-sky-700 text-white shadow-sm transition-colors duration-200"
            >
              View Work
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border border-slate-300 text-slate-700 hover:border-sky-600 hover:text-sky-600 transition-colors duration-200"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-slate-500 hover:text-slate-700 transition-colors duration-200"
            >
              <Link
                href="/Namri_Amine_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Right: Capability Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.18 }}
        >
          <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
            {/* Avatar + name */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full ring-2 ring-sky-100 ring-offset-2 overflow-hidden shrink-0">
                <Image
                  src="/pdp.webp"
                  alt="Namri Amine"
                  width={44}
                  height={44}
                  priority
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-slate-900 text-sm truncate">{personalInfo.name}</p>
                <p className="text-xs text-slate-500 truncate">
                  {personalInfo.experience.position}
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-5 space-y-3">
              {PANEL_SIGNALS.map(({ label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="text-[11px] text-slate-400 w-20 shrink-0 pt-px leading-relaxed">
                    {label}
                  </span>
                  <span className="text-xs text-slate-800 font-medium leading-relaxed">
                    {value}
                  </span>
                </div>
              ))}

              {/* Availability */}
              <div className="flex items-start gap-3">
                <span className="text-[11px] text-slate-400 w-20 shrink-0 pt-px leading-relaxed">
                  Available
                </span>
                <div className="flex items-start gap-1.5 pt-px">
                  <div
                    aria-hidden="true"
                    className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0 mt-0.5"
                  />
                  <span className="text-xs text-slate-800 font-medium leading-relaxed">
                    Remote contract and full-time
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
