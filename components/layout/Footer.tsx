// app/components/layout/Footer.tsx
'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
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
    <footer className="py-12 px-4 bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold mb-4">
            NA
          </div>
          <h3 className="text-xl font-bold">{personalInfo.name}</h3>
          <p className="text-muted-foreground">{personalInfo.title}</p>
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          {socialLinks.map((link) => (
            <Button key={link.label} variant="ghost" size="icon" asChild>
              <Link
                href={link.href}
                target={link.href.includes('http') ? '_blank' : undefined}
                rel={link.href.includes('http') ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </Link>
            </Button>
          ))}
        </div>

        <p className="text-muted-foreground text-sm">
          Built with Next.js 15, React 19, TypeScript, and TailwindCSS
        </p>
        <p className="text-muted-foreground text-sm mt-2">
          © 2025 {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
