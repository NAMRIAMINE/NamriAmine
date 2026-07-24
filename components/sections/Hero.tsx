'use client'

import { DownloadSimple } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import type { ElementType } from 'react'
import {
  SiFastapi,
  SiGooglegemini,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from 'react-icons/si'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data/personal'
import { scrollToSection } from '@/lib/utils'

type OrbitIconDef = { Icon: ElementType; label: string; color: string }

const INNER_ICONS: OrbitIconDef[] = [
  { Icon: SiNextdotjs, label: 'Next.js', color: '#0f172a' },
  { Icon: SiReact, label: 'React', color: '#61dafb' },
  { Icon: SiTypescript, label: 'TypeScript', color: '#3178c6' },
  { Icon: SiFastapi, label: 'FastAPI', color: '#009688' },
]

const OUTER_ICONS: OrbitIconDef[] = [
  { Icon: SiPython, label: 'Python', color: '#3776ab' },
  { Icon: SiNodedotjs, label: 'Node.js', color: '#339933' },
  { Icon: SiPostgresql, label: 'PostgreSQL', color: '#336791' },
  { Icon: SiGooglegemini, label: 'Gemini', color: '#4285f4' },
]

// Layout constants (px) — scaled up so image dominates, icons read clearly
const CONTAINER = 392
const OUTER_RING = 342
const INNER_RING = 252
const PROFILE = 196
const ICON_HALF = 25

function OrbitRing({
  icons,
  ringSize,
  duration,
  reverse = false,
  initialAngle = -Math.PI / 2,
  reducedMotion = false,
}: {
  icons: OrbitIconDef[]
  ringSize: number
  duration: number
  reverse?: boolean
  initialAngle?: number
  reducedMotion?: boolean
}) {
  const r = ringSize / 2
  const offset = (CONTAINER - ringSize) / 2

  return (
    <motion.div
      aria-hidden="true"
      data-orbit-ring
      className="absolute rounded-full border border-slate-200/60"
      style={{ width: ringSize, height: ringSize, top: offset, left: offset }}
      animate={{ rotate: reducedMotion ? 0 : reverse ? -360 : 360 }}
      transition={reducedMotion ? { duration: 0 } : { repeat: Infinity, duration, ease: 'linear' }}
    >
      {icons.map(({ Icon, label, color }, i) => {
        const angle = (i / icons.length) * 2 * Math.PI + initialAngle
        const cx = r + r * Math.cos(angle) - ICON_HALF
        const cy = r + r * Math.sin(angle) - ICON_HALF
        return (
          <motion.div
            key={label}
            className="absolute"
            style={{ left: cx, top: cy }}
            animate={{ rotate: reducedMotion ? 0 : reverse ? 360 : -360 }}
            transition={
              reducedMotion ? { duration: 0 } : { repeat: Infinity, duration, ease: 'linear' }
            }
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-white/80 bg-white/90 shadow-[0_8px_24px_rgba(15,23,42,0.10)] backdrop-blur-md"
              title={label}
            >
              <Icon style={{ color }} className="h-5 w-5" aria-hidden />
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export function Hero() {
  const reducedMotion = useReducedMotion()
  const profileOffset = (CONTAINER - PROFILE) / 2 // 108 px

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#edf1f7] pb-14 pt-20 scroll-mt-16 md:pb-[4.5rem] md:pt-24 lg:flex lg:min-h-[100dvh] lg:items-center lg:pb-20"
    >
      {/* Depth gradient — neutral slate left, teal accent right */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(ellipse_55%_45%_at_18%_15%,rgba(148,163,184,0.18),transparent),radial-gradient(ellipse_38%_32%_at_78%_22%,rgba(20,184,166,0.16),transparent)]"
      />

      <div aria-hidden="true" className="hero-noise pointer-events-none absolute inset-0 z-0" />

      <div className="page-shell relative z-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1.36fr)_minmax(340px,0.64fr)] lg:gap-8">
        {/* Left: editorial copy */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="min-w-0"
        >
          <p className="text-sm font-medium text-slate-500">{personalInfo.title}</p>

          {/* Mobile-only avatar */}
          <div className="mt-5 flex items-center gap-3 lg:hidden">
            <div className="h-12 w-12 overflow-hidden rounded-full ring-2 ring-teal-300/60">
              <Image
                src="/profile-thumb.webp"
                alt="Namri Amine"
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-sm font-medium text-slate-600">{personalInfo.location}</span>
          </div>

          <h1 className="font-display mt-4 max-w-[18ch] text-[clamp(2.15rem,3.75vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.024em] text-slate-950 sm:max-w-6xl">
            {personalInfo.name} builds full-stack systems for SaaS, APIs, and AI workflows.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 md:mt-6">
            Based in {personalInfo.location}, shipping product platforms across interfaces, APIs,
            data workflows, media pipelines, background jobs, and applied AI.
          </p>

          <div className="mt-7 flex flex-row flex-wrap items-center gap-3 md:mt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="rounded-full bg-slate-950 px-5 text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)] transition-colors duration-300 hover:bg-slate-800"
            >
              View Work
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="rounded-full border-slate-300 bg-white/78 px-5 text-slate-900 transition-colors duration-300 hover:border-teal-300 hover:bg-white"
            >
              Contact
            </Button>

            <Link
              href="/Namri_Amine_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full px-2 text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              <DownloadSimple className="h-4 w-4" weight="bold" />
              Download Resume
            </Link>
          </div>

          <div className="mt-8 max-w-xl border-t border-slate-200/80 pt-5 text-sm leading-7 text-slate-500">
            <span className="font-medium text-slate-700">
              {personalInfo.experience.company} contract: {personalInfo.experience.period}.
            </span>{' '}
            Available for global remote full-time and contract product work.
          </div>
        </motion.div>

        {/* Right: solar-system orbit */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.32, 0.72, 0, 1], delay: 0.08 }}
          className="relative hidden lg:flex lg:flex-col lg:items-center lg:gap-5"
        >
          {/* Ambient teal glow */}
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-200/30 blur-3xl"
          />

          {/* Orbit stage */}
          <div data-hero-orbit className="relative" style={{ width: CONTAINER, height: CONTAINER }}>
            {/* Outer ring — counter-clockwise, slow */}
            <OrbitRing
              icons={OUTER_ICONS}
              ringSize={OUTER_RING}
              duration={30}
              reverse
              initialAngle={-Math.PI / 2}
              reducedMotion={Boolean(reducedMotion)}
            />

            {/* Inner ring — clockwise, faster, 45° offset */}
            <OrbitRing
              icons={INNER_ICONS}
              ringSize={INNER_RING}
              duration={18}
              initialAngle={-Math.PI / 4}
              reducedMotion={Boolean(reducedMotion)}
            />

            {/* Profile circle */}
            <div
              className="absolute overflow-hidden rounded-full ring-2 ring-teal-400/50 ring-offset-2 ring-offset-[#edf1f7]"
              style={{ width: PROFILE, height: PROFILE, top: profileOffset, left: profileOffset }}
            >
              <Image
                src="/profile.webp"
                alt="Namri Amine"
                fill
                priority
                sizes="196px"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Name badge below orbit */}
          <div className="flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-4 py-2 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-teal-400" aria-hidden="true" />
            <span className="text-sm font-semibold text-slate-950">{personalInfo.name}</span>
            <span className="text-xs text-slate-500">Full-Stack Dev</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
