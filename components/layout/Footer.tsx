'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data/personal'

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/namriamine', label: 'GitHub' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ]

  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <div
            aria-hidden="true"
            className="w-10 h-10 mx-auto rounded-full bg-sky-600 flex items-center justify-center text-white font-bold text-sm mb-3"
          >
            NA
          </div>
          <h3 className="text-lg font-bold text-slate-900">{personalInfo.name}</h3>
          <p className="text-slate-500 text-sm">{personalInfo.title}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-1 mb-5"
        >
          {socialLinks.map((link) => (
            <Button
              key={link.label}
              variant="ghost"
              size="icon"
              asChild
              className="text-slate-500 hover:text-slate-900"
            >
              <Link
                href={link.href}
                target={link.href.includes('http') ? '_blank' : undefined}
                rel={link.href.includes('http') ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </Link>
            </Button>
          ))}
        </motion.div>

        <p className="text-slate-400 text-xs">
          Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
        </p>
        <p className="text-slate-400 text-xs mt-1">
          © 2026 {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
