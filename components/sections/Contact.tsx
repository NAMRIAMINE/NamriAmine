import { ArrowUpRight, GithubLogo, LinkedinLogo, Phone } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { personalInfo } from '@/data/personal'

const SECONDARY_LINKS = [
  { label: 'Download Resume', href: '/Namri_Amine_English.pdf', download: true },
  { label: 'CV en français', href: '/Namri_Amine_CV_FR.pdf', download: true },
  { label: 'LinkedIn', href: personalInfo.linkedin, external: true },
  { label: 'GitHub', href: 'https://github.com/namriamine', external: true },
  { label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
] as const

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-white py-20 lg:py-24">
      <div className="page-shell">
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-9 text-white shadow-[0_30px_70px_-40px_rgba(15,23,42,0.55)] sm:px-10 lg:px-14 lg:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(45,212,191,0.2),transparent_36%)]"
          />
          <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">
                <span className="h-2 w-2 rounded-full bg-teal-400" aria-hidden="true" />
                Open to opportunities
              </p>
              <h2 className="font-display mt-5 max-w-[13ch] text-[clamp(2.5rem,4.5vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
                Tell me what you&apos;re building.
              </h2>
              <p className="mt-6 max-w-[52ch] text-base leading-7 text-slate-300">
                I&apos;m based in {personalInfo.location} and open to global remote full-time roles
                and focused contract work.
              </p>
            </div>

            <div className="border-t border-white/20 pt-8 lg:col-span-5 lg:flex lg:flex-col lg:justify-end lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="text-sm font-medium text-slate-400">Start with an email</p>
              <Link
                href={`mailto:${personalInfo.email}`}
                className="group mt-3 inline-flex max-w-full items-center gap-2 border-b border-teal-300/50 pb-1 text-[clamp(1.1rem,1.7vw,1.5rem)] font-semibold leading-tight tracking-[-0.035em] text-white transition-colors hover:text-teal-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
              >
                <span className="min-w-0 break-all">{personalInfo.email}</span>
                <ArrowUpRight
                  className="hidden h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 sm:block"
                  weight="bold"
                />
              </Link>
              <p className="mt-5 max-w-[38ch] text-sm leading-6 text-slate-400">
                A short note about the role or project is enough to start a conversation.
              </p>
            </div>
          </div>

          <div className="relative mt-12 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-white/20 pt-6 lg:mt-14">
            {SECONDARY_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                download={'download' in item ? true : undefined}
                target={'external' in item || 'download' in item ? '_blank' : undefined}
                rel={'external' in item || 'download' in item ? 'noopener noreferrer' : undefined}
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
              >
                {item.label === 'LinkedIn' && <LinkedinLogo className="h-4 w-4" weight="duotone" />}
                {item.label === 'GitHub' && <GithubLogo className="h-4 w-4" weight="duotone" />}
                {item.label === personalInfo.phone && (
                  <Phone className="h-4 w-4" weight="duotone" />
                )}
                {item.label}
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  weight="bold"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
