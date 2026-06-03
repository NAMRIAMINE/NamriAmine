'use client'

import {
  ArrowUpRight,
  Braces,
  ChevronRight,
  Database,
  Download,
  Mail,
  Workflow,
} from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data/personal'
import { scrollToSection } from '@/lib/utils'

const STACK_LAYERS = [
  { label: 'Interface', value: 'Next.js, React, TypeScript', icon: Braces },
  { label: 'Systems', value: 'Node/FastAPI, auth, queues', icon: Workflow },
  { label: 'Data', value: 'PostgreSQL, Redis, Prisma', icon: Database },
] as const

const PROOF_POINTS = [
  { value: '6+', label: 'years shipping software' },
  { value: '15+', label: 'product systems delivered' },
  { value: 'Web', label: 'SaaS, AI, maps, mobile' },
] as const

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-dvh items-center overflow-hidden bg-[#f8fbff] px-4 pb-16 pt-28 scroll-mt-16 sm:px-6 sm:pt-32 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-40 bg-[linear-gradient(180deg,rgba(2,132,199,0.12),rgba(248,251,255,0))]"
      />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(340px,440px)] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-medium tracking-[0.16em] text-slate-500 shadow-[0_1px_0_rgba(15,23,42,0.06)] ring-1 ring-slate-200/80">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" aria-hidden="true" />
            PRODUCT ENGINEERING
          </div>

          <h1 className="max-w-[11ch] text-[2.85rem] font-semibold leading-[0.96] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
            Senior JavaScript Full-Stack Developer
          </h1>

          <p className="mt-6 max-w-[48ch] text-base leading-7 text-slate-600 sm:text-lg">
            I build SaaS platforms end to end with React, TypeScript, APIs, data layers, queues, and
            advanced AI/geospatial workflows.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="group rounded-full bg-sky-600 px-5 pr-2 text-white shadow-[0_18px_45px_rgba(2,132,199,0.22)] transition-[background-color,box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-sky-700 hover:shadow-[0_18px_45px_rgba(2,132,199,0.28)] active:translate-y-px"
            >
              View Work
              <span className="ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5">
                <ChevronRight className="h-4 w-4" />
              </span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="rounded-full border-slate-300 bg-white/80 px-5 text-slate-800 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-[border-color,color,background-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 active:translate-y-px"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>

            <Link
              href="/Namri_Amine_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full px-3 text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 sm:justify-start"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Link>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1], delay: 0.12 }}
          className="relative"
          aria-label="Current engineering focus"
        >
          <div className="rounded-[2rem] bg-slate-900/5 p-2 shadow-[0_30px_90px_rgba(15,23,42,0.14)] ring-1 ring-slate-900/5">
            <div className="overflow-hidden rounded-[1.55rem] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] ring-1 ring-slate-200/80">
              <div className="border-b border-slate-100 px-5 py-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200">
                      <Image
                        src="/pdp.webp"
                        alt="Namri Amine"
                        width={44}
                        height={44}
                        priority
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-950">{personalInfo.name}</p>
                      <p className="text-xs text-slate-500">Currently at Talio</p>
                    </div>
                  </div>
                  <div className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-100">
                    Available
                  </div>
                </div>
              </div>

              <div className="space-y-4 p-5">
                <div className="rounded-3xl bg-sky-50 p-5 text-slate-950 ring-1 ring-sky-100">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-medium text-sky-700">Current focus</p>
                    <ArrowUpRight className="h-4 w-4 text-sky-600" />
                  </div>
                  <p className="mt-3 text-2xl font-semibold tracking-tight">
                    Full-stack product platforms
                  </p>
                  <p className="mt-3 max-w-[28ch] text-sm leading-6 text-slate-600">
                    SaaS delivery with advanced AI, media, geospatial, and inspection workflows when
                    the product demands it.
                  </p>
                </div>

                <div className="space-y-2.5">
                  {STACK_LAYERS.map((layer) => (
                    <div
                      key={layer.label}
                      className="flex items-center gap-3 rounded-2xl bg-slate-50 px-3.5 py-3 ring-1 ring-slate-200/70"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sky-700 shadow-[0_1px_0_rgba(15,23,42,0.04)] ring-1 ring-slate-200">
                        <layer.icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-medium text-slate-400">{layer.label}</p>
                        <p className="truncate text-sm font-medium text-slate-800">{layer.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 divide-x divide-slate-100 rounded-3xl bg-[#f8fbff] p-1 ring-1 ring-slate-200/70">
                  {PROOF_POINTS.map((point) => (
                    <div key={point.label} className="px-3 py-3 text-center">
                      <p className="font-mono text-sm font-semibold text-slate-950">
                        {point.value}
                      </p>
                      <p className="mt-1 text-[10px] leading-4 text-slate-500">{point.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
