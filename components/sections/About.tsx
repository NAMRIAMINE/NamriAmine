import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { personalInfo } from '@/data/personal'

const WAYS_OF_WORKING = [
  {
    number: '01',
    title: 'Make complex work feel clear',
    description:
      'Turn maps, media libraries, inspection reviews, and multi-step workflows into interfaces people can actually use.',
  },
  {
    number: '02',
    title: 'Build what supports the interface',
    description:
      'Connect APIs, data models, authentication, background jobs, and integrations around the real product workflow.',
  },
  {
    number: '03',
    title: 'Stay through delivery',
    description:
      'Work through testing, migrations, performance, and deployment so a feature is useful beyond the first demo.',
  },
] as const

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-[#f1f5f5] py-20 lg:py-24">
      <div className="page-shell">
        <div className="grid gap-7 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
              About / Approach
            </p>
            <h2 className="font-display max-w-[15ch] text-[clamp(2.35rem,4vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-slate-950">
              I started at the interface. I stayed for the whole system.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-9">
            <p className="font-display max-w-[41ch] text-[clamp(1.25rem,1.9vw,1.7rem)] font-medium leading-[1.4] tracking-[-0.02em] text-slate-800">
              My work grew from an image-analysis prototype embedded in DR STONE&apos;s marketing
              site into production agriculture, inspection, and AI media platforms.
            </p>
            <p className="mt-5 max-w-[65ch] text-base leading-7 text-slate-600">
              With {personalInfo.experience.years} years of experience, I&apos;ve worked across
              React and Next.js interfaces, services, data, and deployment. I like owning the
              connections between them as much as the screens people see.
            </p>
            <p className="mt-6 text-sm font-medium text-slate-600">
              {personalInfo.experience.company} contract: {personalInfo.experience.period}
            </p>
          </div>
        </div>

        <div className="mt-12 grid border-t border-slate-300/80 lg:mt-14 lg:grid-cols-3">
          {WAYS_OF_WORKING.map((item) => (
            <article
              key={item.number}
              className="border-b border-slate-300/80 py-7 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <span className="font-mono text-xs font-medium text-teal-700">{item.number}</span>
              <h3 className="font-display mt-4 text-xl font-semibold tracking-[-0.025em] text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 max-w-[38ch] text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
          <Link
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate-800 transition-colors hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600"
          >
            LinkedIn
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              weight="bold"
            />
          </Link>
          <Link
            href="https://github.com/namriamine"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate-800 transition-colors hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600"
          >
            GitHub
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              weight="bold"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
