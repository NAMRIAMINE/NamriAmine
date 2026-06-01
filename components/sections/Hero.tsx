'use client'

import { ChevronRight, Download, Globe, Mail, MapPin, Zap } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data/personal'
import { scrollToSection } from '@/lib/utils'

const STATUS_BADGES = [
  { icon: MapPin, text: personalInfo.location, color: 'text-sky-600' },
  { icon: Globe, text: personalInfo.availability, color: 'text-emerald-600' },
  { icon: Zap, text: 'Open to Opportunities', color: 'text-amber-500' },
] as const

const DOMAIN_CHIPS = [
  { label: 'Industrial AI', color: 'bg-sky-50 text-sky-700 border border-sky-200' },
  { label: 'Geospatial SaaS', color: 'bg-emerald-50 text-emerald-700 border border-emerald-200' },
  { label: 'Computer Vision', color: 'bg-indigo-50 text-indigo-700 border border-indigo-200' },
  { label: 'AI Automation', color: 'bg-amber-50 text-amber-700 border border-amber-200' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden scroll-mt-16 pt-16 pb-16 bg-white"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        <div className="space-y-6">
          {/* Profile Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div className="w-24 h-24 mx-auto rounded-full ring-4 ring-sky-100 ring-offset-4 ring-offset-white shadow-md overflow-hidden">
              <Image
                src="/pdp.png"
                alt="Namri Amine - Senior Full-Stack Developer"
                width={96}
                height={96}
                priority
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Main Title */}
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-slate-900"
            >
              Senior Full-Stack <span className="text-sky-600">Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
            >
              Shipping complex <span className="text-sky-600 font-semibold">AI</span>,{' '}
              <span className="text-emerald-600 font-semibold">geospatial</span>, and{' '}
              <span className="text-indigo-600 font-semibold">industrial inspection</span> platforms
              end to end. 6+ years: Next.js, FastAPI, YOLOv8.
            </motion.p>
          </div>

          {/* Domain chips */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.28 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {DOMAIN_CHIPS.map((chip) => (
              <span
                key={chip.label}
                className={`text-xs font-medium px-3 py-1.5 rounded-full ${chip.color}`}
              >
                {chip.label}
              </span>
            ))}
          </motion.div>

          {/* Status Badges */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.34 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {STATUS_BADGES.map((badge) => (
              <Badge
                key={badge.text}
                variant="secondary"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-600 border border-slate-200 font-normal text-xs"
              >
                <badge.icon className={`w-3.5 h-3.5 ${badge.color}`} />
                {badge.text}
              </Badge>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.42 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="group bg-sky-600 hover:bg-sky-700 text-white shadow-sm transition-colors duration-200"
            >
              View My Work
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border border-slate-300 text-slate-700 hover:border-sky-600 hover:text-sky-600 transition-colors duration-200"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
