'use client'

import { ArrowUpRight, Github, Linkedin, Phone } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data/personal'

const CONTACT_LINKS = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/namriamine',
    href: personalInfo.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/namriamine',
    href: 'https://github.com/namriamine',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
] as const

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="rounded-[2.25rem] bg-sky-100/70 p-2 shadow-[0_28px_80px_rgba(2,132,199,0.12)]"
        >
          <div className="grid gap-8 rounded-[1.75rem] bg-white p-6 text-slate-950 ring-1 ring-sky-100 sm:p-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:p-10">
            <div>
              <p className="text-sm font-medium text-sky-700">
                Available for contract and full-time
              </p>
              <h2 className="mt-5 max-w-[10ch] text-4xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Let&apos;s build the next platform.
              </h2>
              <p className="mt-6 max-w-[54ch] text-base leading-7 text-slate-600 sm:text-lg">
                I can join as a senior full-stack developer for SaaS, product systems, AI workflows,
                geospatial interfaces, or client delivery missions.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="group rounded-full bg-sky-600 px-5 pr-2 text-white shadow-[0_18px_45px_rgba(2,132,199,0.2)] transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-sky-700 active:translate-y-px"
                >
                  <Link href={`mailto:${personalInfo.email}`}>
                    Email me
                    <span className="ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:translate-x-0.5">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-slate-300 bg-white px-5 text-slate-800 transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 active:translate-y-px"
                >
                  <Link
                    href="/Namri_Amine_Resume.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume PDF
                  </Link>
                </Button>
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-[#f8fbff] p-4 ring-1 ring-slate-200/80">
              <div className="rounded-[1.1rem] bg-white p-4 text-slate-950 ring-1 ring-slate-200/70">
                <p className="text-xs font-medium text-slate-400">Direct email</p>
                <Link
                  href={`mailto:${personalInfo.email}`}
                  className="mt-2 block truncate text-lg font-semibold text-slate-950 hover:text-sky-700"
                >
                  {personalInfo.email}
                </Link>
                <p className="mt-4 text-sm leading-6 text-slate-500">
                  Based in {personalInfo.location}. Remote contract and full-time roles are both in
                  scope.
                </p>
              </div>

              <div className="mt-3 space-y-2">
                {CONTACT_LINKS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3 text-slate-800 ring-1 ring-slate-200/80 transition-colors duration-300 hover:bg-sky-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <item.icon className="h-4 w-4 shrink-0 text-sky-600" aria-hidden="true" />
                      <span className="truncate text-sm font-medium">{item.value}</span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
