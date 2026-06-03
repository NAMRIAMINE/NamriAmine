'use client'

import { Brain, Code2, Monitor, Server, ShieldCheck, Terminal } from 'lucide-react'
import { motion } from 'motion/react'
import { skillCategories } from '@/data/skills'

const CATEGORY_META = {
  coreWeb: {
    icon: Code2,
    summary: 'Interfaces, routing, state, component systems, and responsive product UI.',
  },
  backendData: {
    icon: Server,
    summary: 'APIs, services, relational data, caching, ORMs, and backend integration.',
  },
  productSystems: {
    icon: ShieldCheck,
    summary: 'Auth, queues, realtime updates, deployment, and product infrastructure.',
  },
  appliedAI: {
    icon: Brain,
    summary: 'Computer vision, Gemini workflows, map interfaces, and geospatial processing.',
  },
  mobileDesktop: {
    icon: Monitor,
    summary: 'React Native, Expo, and Electron work where the product extends beyond web.',
  },
  testingDelivery: {
    icon: Terminal,
    summary: 'Automated checks, browser QA, CI workflows, version control, and release hygiene.',
  },
} as const

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
          className="max-w-3xl"
        >
          <h2 className="text-4xl font-semibold leading-none tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
            Built around the stack a product needs.
          </h2>
          <p className="mt-5 max-w-[58ch] text-base leading-7 text-slate-600 sm:text-lg">
            The core is JavaScript and TypeScript. The specialty layers are there when the product
            needs AI, maps, media, realtime work, or deployment discipline.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1], delay: 0.08 }}
          className="mt-10 flex flex-wrap gap-2"
        >
          {STACK_STRIP.map((item) => (
            <span
              key={item}
              className="rounded-full bg-white px-3.5 py-2 text-sm font-medium text-slate-800 shadow-[0_1px_0_rgba(15,23,42,0.05)] ring-1 ring-slate-200/80"
            >
              {item}
            </span>
          ))}
        </motion.div>

        <div className="mt-14 overflow-hidden rounded-[2rem] bg-white/75 shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80">
          {categories.map(([key, category], index) => {
            const meta = CATEGORY_META[key as keyof typeof CATEGORY_META]
            const Icon = meta?.icon ?? Code2
            const primarySkills = category.skills.slice(0, 5)
            const secondarySkills = category.skills.slice(5)

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="grid gap-5 border-b border-slate-100 px-5 py-6 last:border-b-0 sm:px-7 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-950">{category.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">{meta?.summary}</p>
                  </div>
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap gap-2">
                    {primarySkills.map((skill) => (
                      <span
                        key={skill.name}
                        className="rounded-full bg-sky-50 px-3 py-1.5 text-xs font-medium text-sky-800 ring-1 ring-sky-100"
                        title={`${skill.years} experience`}
                      >
                        {skill.name}
                        <span className="ml-1 font-mono text-[10px] text-sky-500">
                          {skill.years}
                        </span>
                      </span>
                    ))}
                  </div>
                  {secondarySkills.length > 0 && (
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {secondarySkills.map((skill) => skill.name).join(' · ')}
                    </p>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
