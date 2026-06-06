'use client'

import { useGSAP } from '@gsap/react'
import { ArrowUpRight, CheckCircle, Clock, GithubLogo, Lightning } from '@phosphor-icons/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { personalInfo } from '@/data/personal'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'
import type { Project } from '@/types'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const PRESENTATION_STYLES = {
  flagship: {
    frame: 'bg-[linear-gradient(180deg,#ddf2ff_0%,#edf8ff_100%)]',
    shell: 'bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(15,23,42,0.88))]',
  },
  secondary: {
    frame: 'bg-[linear-gradient(180deg,#edf4ff_0%,#f6f9ff_100%)]',
    shell: 'bg-[linear-gradient(180deg,rgba(15,23,42,0.94),rgba(30,41,59,0.84))]',
  },
  archive: {
    frame: 'bg-[linear-gradient(180deg,#f5f8fb_0%,#ffffff_100%)]',
    shell: 'bg-[linear-gradient(180deg,rgba(30,41,59,0.92),rgba(51,65,85,0.82))]',
  },
} as const

const TECH_LIMIT = 5
const FEATURE_LIMIT = 4

const getStatusIcon = (status: Project['status']) => {
  switch (status) {
    case 'Production':
    case 'Production Ready':
      return CheckCircle
    case 'In Development':
      return Clock
    default:
      return Lightning
  }
}

function StatusPill({ status }: { status: Project['status'] }) {
  const Icon = getStatusIcon(status)

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/88 backdrop-blur-md">
      <Icon className="h-3.5 w-3.5" aria-hidden="true" weight="fill" />
      {status}
    </span>
  )
}

function ProjectLinks({ project }: { project: Project }) {
  const publicLinks = [
    project.liveUrl ? { label: 'Live product', href: project.liveUrl, icon: ArrowUpRight } : null,
    project.githubUrl ? { label: 'Repository', href: project.githubUrl, icon: GithubLogo } : null,
  ].filter(Boolean) as Array<{
    label: string
    href: string
    icon: typeof ArrowUpRight | typeof GithubLogo
  }>

  const walkthroughHref = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    `Walkthrough request - ${project.title}`,
  )}`

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      {publicLinks.map((link) => (
        <Link
          key={`${project.id}-${link.label}`}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-4 text-sm font-medium text-slate-950 transition-colors duration-300 hover:bg-teal-100"
        >
          <link.icon className="h-4 w-4" weight="bold" />
          {link.label}
        </Link>
      ))}
      <Link
        href={walkthroughHref}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-4 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10"
      >
        <ArrowUpRight className="h-4 w-4" weight="bold" />
        Request walkthrough
      </Link>
    </div>
  )
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id ?? '')

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const cards = gsap.utils.toArray<HTMLElement>('[data-project-card]')

      cards.forEach((card) => {
        const visual = card.querySelector<HTMLElement>('[data-project-visual]')
        if (!visual) return

        gsap.fromTo(
          visual,
          {
            scale: 0.88,
            opacity: 0.5,
            filter: 'brightness(0.8)',
          },
          {
            scale: 1,
            opacity: 1,
            filter: 'brightness(1)',
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
              end: 'bottom 34%',
              scrub: true,
            },
          },
        )
      })
    },
    { scope: sectionRef },
  )

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="scroll-mt-24 overflow-x-hidden bg-white px-4 py-32 sm:px-6 lg:px-8 lg:py-40"
    >
      <div className="page-shell">
        <div className="max-w-3xl">
          <h2 className="font-display max-w-[12ch] text-[clamp(2.8rem,5vw,5rem)] leading-[0.92] tracking-[-0.06em] text-slate-950">
            Selected work that carries product weight.
          </h2>
          <p className="mt-6 max-w-[62ch] text-lg leading-8 text-slate-600">
            Four systems, four different delivery conditions. Hover or focus a case to open the full
            brief on large screens.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-3 lg:min-h-[720px] lg:flex-row">
          {projects.map((project) => {
            const isActive = activeProjectId === project.id
            const styles = PRESENTATION_STYLES[project.presentation]

            return (
              <article
                key={project.id}
                data-project-presentation={project.presentation}
                data-project-card
                onMouseEnter={() => setActiveProjectId(project.id)}
                onFocusCapture={() => setActiveProjectId(project.id)}
                className={cn(
                  'group relative min-h-[560px] overflow-hidden rounded-[2.35rem] border border-white/85 p-3 shadow-[0_30px_90px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/60 lg:min-h-[720px] lg:flex-1 lg:transition-[flex-grow,transform] lg:duration-700 lg:ease-out',
                  styles.frame,
                  isActive ? 'lg:flex-[2.15]' : 'lg:flex-[0.9]',
                )}
              >
                <div
                  data-project-visual
                  className="absolute inset-3 overflow-hidden rounded-[1.95rem] border border-white/10"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.18),rgba(255,255,255,0)_42%)]" />
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 34vw"
                      className="object-contain p-6 pt-20 transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  )}
                </div>

                <div
                  className={cn(
                    'relative flex h-full flex-col justify-between overflow-hidden rounded-[1.95rem] p-6 text-white lg:p-8',
                    styles.shell,
                  )}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.12),rgba(15,23,42,0.68)_36%,rgba(15,23,42,0.94))]" />
                  <div className="relative">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <StatusPill status={project.status} />
                        <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/78 backdrop-blur-md">
                          {project.year}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveProjectId(project.id)}
                        className="inline-flex h-9 items-center rounded-full border border-white/14 bg-white/10 px-3 text-xs font-medium uppercase text-white/74 transition-colors duration-300 hover:bg-white/16"
                      >
                        Open case
                      </button>
                    </div>

                    <h3 className="font-display mt-6 max-w-[11ch] text-[2rem] leading-[0.92] tracking-[-0.05em] text-white sm:text-[2.6rem]">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm font-medium uppercase text-white/56">
                      {project.category}
                    </p>
                  </div>

                  <div className="relative mt-10">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, TECH_LIMIT).map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs font-medium text-white/78 backdrop-blur-md"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div
                      className={cn(
                        'mt-5 space-y-6',
                        !isActive &&
                          'lg:max-h-0 lg:translate-y-4 lg:overflow-hidden lg:opacity-0 lg:pointer-events-none',
                        isActive && 'lg:max-h-[420px] lg:translate-y-0 lg:opacity-100',
                      )}
                    >
                      <p className="max-w-[52ch] text-base leading-7 text-white/76">
                        {project.description}
                      </p>

                      <div className="grid gap-5 md:grid-cols-2">
                        <div>
                          <p className="text-xs font-medium uppercase text-white/42">Scope</p>
                          <div className="mt-3 space-y-2">
                            {(project.scope ?? project.features)
                              .slice(0, FEATURE_LIMIT)
                              .map((item) => (
                                <p
                                  key={`${project.id}-scope-${item}`}
                                  className="text-sm leading-6 text-white/74"
                                >
                                  {item}
                                </p>
                              ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-medium uppercase text-white/42">Outcome</p>
                          <p className="mt-3 text-sm leading-6 text-white/74">
                            {project.outcome ?? project.features.slice(0, FEATURE_LIMIT).join(', ')}
                          </p>
                        </div>
                      </div>

                      <ProjectLinks project={project} />
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
