'use client'

import { useGSAP } from '@gsap/react'
import { ArrowUpRight } from '@phosphor-icons/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { useRef } from 'react'
import { personalInfo } from '@/data/personal'
import { projects } from '@/data/projects'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const ABOUT_COPY = `Senior JavaScript Full-Stack Developer with ${personalInfo.experience.years} years building production platforms across React interfaces, Node and FastAPI services, data layers, queues, media workflows, and applied AI. I move from product intent to shipped architecture without dropping the hard parts.`
const ABOUT_WORDS = ABOUT_COPY.split(' ').reduce<Array<{ id: string; word: string }>>(
  (acc, word) => {
    const previous = acc[acc.length - 1]
    const offset = previous ? Number(previous.id.split('-').at(-1)) + previous.word.length + 1 : 0

    acc.push({ id: `${word}-${offset}`, word })
    return acc
  },
  [],
)

const DETAIL_CARDS = [
  {
    label: personalInfo.experience.current ? 'Current role' : 'Recent role',
    value: `${personalInfo.experience.company} · ${personalInfo.experience.position}`,
    body: `Shipping product systems since ${personalInfo.experience.startDate}.`,
  },
  {
    label: 'Location and availability',
    value: `${personalInfo.location}`,
    body: personalInfo.availability,
  },
  {
    label: 'Languages',
    value: personalInfo.languages.map((language) => language.name).join(' · '),
    body: 'Working across distributed teams, client communication, and product delivery.',
  },
] as const

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const copyRef = useRef<HTMLParagraphElement>(null)
  const wordRefs = useRef<Array<HTMLSpanElement | null>>([])

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const words = wordRefs.current.filter(Boolean)
      if (words.length > 0) {
        gsap.set(words, { opacity: 0.16 })
        gsap.to(words, {
          opacity: 1,
          stagger: 0.06,
          ease: 'none',
          scrollTrigger: {
            trigger: copyRef.current,
            start: 'top 76%',
            end: 'bottom 40%',
            scrub: true,
          },
        })
      }

      const mediaQuery = gsap.matchMedia()
      mediaQuery.add('(min-width: 1024px)', () => {
        if (!sectionRef.current || !headerRef.current) return

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top+=112',
          end: 'bottom bottom-=112',
          pin: headerRef.current,
          pinSpacing: false,
        })
      })

      return () => mediaQuery.revert()
    },
    { scope: sectionRef },
  )

  return (
    <section
      id="about"
      ref={sectionRef}
      className="scroll-mt-24 bg-[#f4f8fc] px-4 py-32 sm:px-6 lg:px-8 lg:py-40"
    >
      <div className="page-shell grid gap-12 lg:grid-cols-[minmax(320px,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <div ref={headerRef} className="space-y-8 lg:pr-10">
          <div>
            <h2 className="font-display max-w-[11ch] text-[clamp(2.8rem,5vw,5rem)] leading-[0.92] tracking-[-0.06em] text-slate-950">
              End to end, not just the pleasant parts.
            </h2>
          </div>

          <p className="max-w-[26rem] text-base leading-7 text-slate-600">
            Product thinking, system design, frontend execution, backend delivery, and applied
            problem solving in one working loop.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition-colors duration-300 hover:border-teal-300 hover:text-teal-700"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4" weight="bold" />
            </Link>
            <Link
              href="https://github.com/namriamine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition-colors duration-300 hover:border-teal-300 hover:text-teal-700"
            >
              GitHub
              <ArrowUpRight className="h-4 w-4" weight="bold" />
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2.4rem] border border-white/80 bg-white/78 p-7 shadow-[0_28px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-9">
            <p
              ref={copyRef}
              className="font-display text-[clamp(1.8rem,3.5vw,3.15rem)] leading-[1.08] tracking-[-0.045em] text-slate-950"
            >
              {ABOUT_WORDS.map(({ id, word }, index) => (
                <span
                  key={id}
                  ref={(node) => {
                    wordRefs.current[index] = node
                  }}
                  className="mr-[0.3em] inline-block"
                >
                  {word}
                </span>
              ))}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {DETAIL_CARDS.map((card) => (
              <article
                key={card.label}
                className="rounded-[2rem] border border-white/80 bg-white/78 p-5 shadow-[0_20px_70px_rgba(15,23,42,0.06)] backdrop-blur-xl"
              >
                <p className="text-xs font-medium uppercase text-slate-400">{card.label}</p>
                <p className="mt-4 text-lg font-semibold leading-7 text-slate-950">{card.value}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{card.body}</p>
              </article>
            ))}
          </div>

          <div className="rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(204,251,241,0.5),rgba(255,255,255,0.92))] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)]">
            <p className="text-xs font-medium uppercase text-slate-400">Recent systems</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {projects.map((project) => (
                <span
                  key={project.id}
                  className="rounded-full border border-white/70 bg-white px-3 py-1.5 text-sm font-medium text-slate-800 shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
                >
                  {project.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
