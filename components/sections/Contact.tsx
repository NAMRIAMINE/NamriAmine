import { ArrowUpRight, GithubLogo, LinkedinLogo, Phone } from '@phosphor-icons/react/dist/ssr'
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
    <section id="contact" className="section-space scroll-mt-24 bg-[#e7f3f0]">
      <div className="page-shell border-y border-teal-800/20 py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="font-display text-[clamp(2.75rem,5vw,5rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-slate-950">
              Let&apos;s build the next serious product.
            </h2>
            <p className="mt-7 max-w-[56ch] text-lg leading-8 text-slate-600">
              I work with product teams that need frontend judgment, backend depth, and ownership
              across the space between them.
            </p>
          </div>

          <div className="lg:col-span-5 lg:pt-3">
            <p className="text-sm font-semibold text-slate-500">Direct email</p>
            <Link
              href={`mailto:${personalInfo.email}`}
              className="mt-3 block break-all text-[clamp(1.55rem,3vw,2.7rem)] font-semibold leading-tight tracking-[-0.025em] text-slate-950 transition-colors duration-300 hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600"
            >
              {personalInfo.email}
            </Link>
            <p className="mt-5 max-w-[42ch] text-base leading-7 text-slate-600">
              Based in {personalInfo.location}. Remote contract and full-time roles are both in
              scope.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-slate-950 px-5 text-white transition-colors duration-300 hover:bg-teal-700"
              >
                <Link href={`mailto:${personalInfo.email}`}>Email me</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-teal-900/20 bg-transparent px-5 text-slate-900 transition-colors duration-300 hover:border-teal-700 hover:bg-white/60 hover:text-teal-800"
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
          </div>
        </div>

        <div className="mt-14 grid border-t border-teal-800/20 sm:grid-cols-3">
          {CONTACT_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex min-h-24 items-center justify-between gap-4 border-b border-teal-800/20 py-5 text-slate-800 transition-colors duration-300 hover:text-teal-800 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600"
              aria-label={`${item.label}: ${item.value}`}
            >
              <span className="flex min-w-0 items-center gap-3">
                <item.icon className="h-5 w-5 shrink-0 text-teal-700" weight="duotone" />
                <span className="min-w-0">
                  <span className="block text-sm font-semibold">{item.label}</span>
                  <span className="mt-1 block truncate text-sm text-slate-500">{item.value}</span>
                </span>
              </span>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                weight="bold"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
