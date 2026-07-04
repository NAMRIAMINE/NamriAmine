import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { personalInfo } from '@/data/personal'

const CREDENTIALS = [
  {
    value: personalInfo.experience.years,
    label: 'Years building production software',
  },
  {
    value: personalInfo.experience.company,
    label: 'Current product team',
  },
  {
    value: 'JS / TS',
    label: 'Primary delivery stack',
  },
] as const

export function About() {
  return (
    <section id="about" className="section-space scroll-mt-24 bg-[#edf2f4]">
      <div className="page-shell grid gap-12 border-t border-slate-300/80 pt-12 lg:grid-cols-12 lg:gap-16 lg:pt-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <h2 className="font-display max-w-[12ch] text-[clamp(2.75rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-slate-950">
              End to end, including the hard parts.
            </h2>
            <p className="mt-6 max-w-[34rem] text-base leading-7 text-slate-600">
              Product thinking, system design, frontend execution, backend delivery, and applied
              problem solving in one working loop.
            </p>
            <div className="mt-8 flex flex-wrap gap-5">
              <Link
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-800 transition-colors hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600"
              >
                LinkedIn
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  weight="bold"
                />
              </Link>
              <Link
                href="https://github.com/namriamine"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-800 transition-colors hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600"
              >
                GitHub
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  weight="bold"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <p className="font-display max-w-[27ch] text-[clamp(1.9rem,3.2vw,3.25rem)] font-medium leading-[1.12] tracking-[-0.03em] text-slate-900">
            I build production platforms across React interfaces, Node and FastAPI services, data
            layers, queues, media workflows, and applied AI. I move from product intent to shipped
            architecture without dropping reliability, accessibility, or delivery detail.
          </p>

          <dl className="mt-14 grid border-y border-slate-300/80 sm:grid-cols-3">
            {CREDENTIALS.map((credential) => (
              <div
                key={credential.label}
                className="border-b border-slate-300/80 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
              >
                <dt className="text-sm leading-6 text-slate-500">{credential.label}</dt>
                <dd className="font-display mt-2 text-3xl font-semibold tracking-[-0.025em] text-slate-950">
                  {credential.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 grid gap-8 border-l-2 border-teal-500 pl-6 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:pl-8">
            <div>
              <p className="text-sm font-semibold text-slate-500">Current role</p>
              <p className="mt-2 text-xl font-semibold text-slate-950">
                {personalInfo.experience.position}
              </p>
              <p className="mt-1 text-base text-slate-600">
                {personalInfo.experience.company}, since {personalInfo.experience.startDate}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500">Working model</p>
              <p className="mt-2 text-base leading-7 text-slate-700">
                Based in {personalInfo.location}. {personalInfo.availability}. Working in Arabic,
                English, and French across distributed product and client teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
