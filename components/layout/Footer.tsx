import { EnvelopeSimple, GithubLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { personalInfo } from '@/data/personal'

const SOCIAL_LINKS = [
  { icon: LinkedinLogo, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: GithubLogo, href: 'https://github.com/namriamine', label: 'GitHub' },
  { icon: EnvelopeSimple, href: `mailto:${personalInfo.email}`, label: 'Email' },
] as const

export function Footer() {
  return (
    <footer className="bg-[#f4f8fc] pb-10 pt-4">
      <div className="page-shell flex flex-col gap-6 border-t border-slate-200/80 pt-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold tracking-[-0.025em] text-slate-950">
            {personalInfo.name}
          </p>
          <p className="mt-2 max-w-[44ch] text-sm leading-6 text-slate-600">
            Built with Next.js 15, React 19, Tailwind CSS, and a custom light-only design system
            focused on product storytelling.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <div className="flex gap-2">
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.includes('http') ? '_blank' : undefined}
                rel={link.href.includes('http') ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors duration-300 hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                <link.icon className="h-4 w-4" weight="duotone" />
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400">© 2026 {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
