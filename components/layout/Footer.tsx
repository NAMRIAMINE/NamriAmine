'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { personalInfo } from '@/data/personal'

const SOCIAL_LINKS = [
  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/namriamine', label: 'GitHub' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
] as const

export function Footer() {
  return (
    <footer className="bg-[#f8fbff] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="flex items-center gap-3">
            <div
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-600 text-sm font-semibold text-white"
            >
              NA
            </div>
            <div>
              <h3 className="font-semibold text-slate-950">{personalInfo.name}</h3>
              <p className="text-sm text-slate-500">{personalInfo.title}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1], delay: 0.06 }}
          className="flex flex-col gap-4 sm:items-end"
        >
          <div className="flex gap-2">
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.includes('http') ? '_blank' : undefined}
                rel={link.href.includes('http') ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-500 ring-1 ring-slate-200 transition-colors duration-300 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                <link.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400">
            Built with Next.js 15, React 19, TypeScript, and Tailwind CSS. © 2026{' '}
            {personalInfo.name}.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
