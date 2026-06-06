'use client'

import { ArrowUpRight, GithubLogo, LinkedinLogo, Phone } from '@phosphor-icons/react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data/personal'

const CONTACT_LINKS = [
  {
    icon: LinkedinLogo,
    label: 'LinkedIn',
    value: '/in/namriamine',
    href: personalInfo.linkedin,
  },
  {
    icon: GithubLogo,
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
    <section id="contact" className="scroll-mt-24 bg-white px-4 py-32 sm:px-6 lg:px-8 lg:py-40">
      <div className="page-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="rounded-[2.8rem] border border-white/80 bg-[linear-gradient(135deg,rgba(204,251,241,0.86),rgba(255,255,255,0.94)_48%,rgba(153,246,228,0.82))] p-3 shadow-[0_32px_100px_rgba(15,23,42,0.12)]"
        >
          <div className="grid gap-10 rounded-[2.2rem] border border-white/70 bg-white/76 p-7 backdrop-blur-2xl sm:p-9 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:p-12">
            <div>
              <h2 className="font-display max-w-[8ch] text-[clamp(3rem,6vw,5.8rem)] leading-[0.9] tracking-[-0.07em] text-slate-950">
                Ready for the next build.
              </h2>
              <p className="mt-6 max-w-[54ch] text-lg leading-8 text-slate-600">
                I join ambitious product teams that need frontend taste, backend depth, and someone
                comfortable owning the handoff between both.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-slate-950 px-5 text-white transition-colors duration-300 hover:bg-slate-800"
                >
                  <Link href={`mailto:${personalInfo.email}`}>Email me</Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-slate-300 bg-white px-5 text-slate-900 transition-colors duration-300 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700"
                >
                  <Link
                    href="/Namri_Amine_Resume.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Resume
                  </Link>
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700">
                  {personalInfo.availability}
                </span>
                {personalInfo.languages.map((language) => (
                  <span
                    key={language.name}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {language.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-[1.8rem] border border-white/80 bg-slate-950 p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.16)]">
                <p className="text-xs font-medium uppercase text-white/52">Direct email</p>
                <Link
                  href={`mailto:${personalInfo.email}`}
                  className="mt-4 block text-[clamp(1.5rem,3vw,2.2rem)] font-semibold leading-tight text-white transition-colors duration-300 hover:text-teal-300"
                >
                  {personalInfo.email}
                </Link>
                <p className="mt-4 text-sm leading-6 text-white/68">
                  Based in {personalInfo.location}. Remote contract and full-time roles are both in
                  scope.
                </p>
              </div>

              {CONTACT_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between gap-3 rounded-[1.6rem] border border-white/80 bg-white px-5 py-4 text-slate-800 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition-colors duration-300 hover:bg-teal-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
                  aria-label={`${item.label}: ${item.value}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/4 text-teal-600">
                      <item.icon className="h-5 w-5" weight="duotone" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase text-slate-400">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-sm font-medium text-slate-800">
                        {item.value}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px"
                    weight="bold"
                  />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
