'use client'

import { Brain, Code, Database, Devices, Stack, TestTube } from '@phosphor-icons/react'
import { motion } from 'motion/react'
import { skillCategories } from '@/data/skills'
import type { SkillAccent } from '@/types'

const CATEGORY_META = {
  coreWeb: {
    icon: Code,
    summary: 'Interfaces, routing, state, component systems, and responsive product UI.',
  },
  backendData: {
    icon: Database,
    summary: 'APIs, services, relational data, caching, ORMs, and backend integration.',
  },
  productSystems: {
    icon: Stack,
    summary: 'Auth, queues, realtime updates, deployment, and product infrastructure.',
  },
  appliedAI: {
    icon: Brain,
    summary: 'Computer vision, Gemini workflows, map interfaces, and geospatial processing.',
  },
  mobileDesktop: {
    icon: Devices,
    summary: 'React Native, Expo, and Electron work where the product extends beyond web.',
  },
  testingDelivery: {
    icon: TestTube,
    summary: 'Automated checks, browser QA, CI workflows, version control, and release hygiene.',
  },
} as const

const ACCENTS = {
  sky: {
    card: 'bg-sky-50/70 ring-sky-100',
    icon: 'bg-white text-sky-700 ring-sky-100',
    chip: 'bg-white text-sky-800 ring-sky-100',
    years: 'text-sky-500',
    dot: 'bg-sky-500',
  },
  emerald: {
    card: 'bg-emerald-50/70 ring-emerald-100',
    icon: 'bg-white text-emerald-700 ring-emerald-100',
    chip: 'bg-white text-emerald-800 ring-emerald-100',
    years: 'text-emerald-500',
    dot: 'bg-emerald-500',
  },
  violet: {
    card: 'bg-violet-50/70 ring-violet-100',
    icon: 'bg-white text-violet-700 ring-violet-100',
    chip: 'bg-white text-violet-800 ring-violet-100',
    years: 'text-violet-500',
    dot: 'bg-violet-500',
  },
  amber: {
    card: 'bg-amber-50/70 ring-amber-100',
    icon: 'bg-white text-amber-700 ring-amber-100',
    chip: 'bg-white text-amber-900 ring-amber-100',
    years: 'text-amber-600',
    dot: 'bg-amber-500',
  },
  rose: {
    card: 'bg-rose-50/70 ring-rose-100',
    icon: 'bg-white text-rose-700 ring-rose-100',
    chip: 'bg-white text-rose-800 ring-rose-100',
    years: 'text-rose-500',
    dot: 'bg-rose-500',
  },
  slate: {
    card: 'bg-slate-50/90 ring-slate-200',
    icon: 'bg-white text-slate-700 ring-slate-200',
    chip: 'bg-white text-slate-800 ring-slate-200',
    years: 'text-slate-500',
    dot: 'bg-slate-500',
  },
} satisfies Record<
  SkillAccent,
  { card: string; icon: string; chip: string; years: string; dot: string }
>

const STACK_STRIP = ['React', 'Next.js', 'TypeScript', 'Node.js', 'FastAPI', 'PostgreSQL']

export function Skills() {
  const categories = Object.entries(skillCategories)

  return (
    <section id="skills" className="scroll-mt-24 bg-[#f8fbff] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
          className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end"
        >
          <div>
            <p className="text-sm font-medium text-sky-700">Capability map</p>
            <h2 className="mt-4 max-w-[17ch] text-4xl font-semibold leading-none tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
              Built around the stack a product needs.
            </h2>
          </div>
          <div>
            <p className="max-w-[62ch] text-base leading-7 text-slate-600 sm:text-lg">
              The core is JavaScript and TypeScript. The specialty layers are there when the product
              needs AI, maps, media, realtime work, or deployment discipline.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {STACK_STRIP.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white px-3.5 py-2 text-sm font-medium text-slate-800 shadow-[0_1px_0_rgba(15,23,42,0.05)] ring-1 ring-slate-200/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map(([key, category], index) => {
            const meta = CATEGORY_META[key as keyof typeof CATEGORY_META]
            const Icon = meta?.icon ?? Code
            const accent = ACCENTS[category.accent]
            const primarySkills = category.skills.slice(0, 5)
            const secondarySkills = category.skills.slice(5)

            return (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42, delay: index * 0.04, ease: [0.32, 0.72, 0, 1] }}
                className={`rounded-[2rem] p-5 ring-1 ${accent.card}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 ${accent.icon}`}
                  >
                    <Icon size={22} weight="duotone" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-950">{category.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">{meta?.summary}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {primarySkills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium ring-1 ${accent.chip}`}
                      title={`${skill.years} experience`}
                    >
                      {skill.name}
                      <span className={`ml-1 font-mono text-[10px] ${accent.years}`}>
                        {skill.years}
                      </span>
                    </span>
                  ))}
                </div>

                {secondarySkills.length > 0 && (
                  <div className="mt-4 flex gap-2">
                    <span
                      aria-hidden="true"
                      className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`}
                    />
                    <p className="text-sm leading-6 text-slate-500">
                      {secondarySkills.map((skill) => skill.name).join(' · ')}
                    </p>
                  </div>
                )}
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
