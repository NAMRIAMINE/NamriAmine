'use client'

import { Calendar, Globe2, Layers3, MapPin } from 'lucide-react'
import { motion } from 'motion/react'
import { personalInfo } from '@/data/personal'
import { projects } from '@/data/projects'

const STATS = [
  {
    label: 'Years building production software',
    value: personalInfo.experience.years,
    icon: Calendar,
  },
  { label: 'Major product systems delivered', value: '15+', icon: Layers3 },
  { label: 'Primary delivery stack', value: 'JS/TS', icon: Globe2 },
  { label: 'Based in Casablanca, working remote', value: 'MA', icon: MapPin },
] as const

const OPERATING_MODEL = [
  'Translate product requirements into frontend, backend, data, and deployment scope.',
  'Own user-facing workflows, API contracts, auth, queues, media handling, and reporting.',
  'Integrate advanced domains like AI, computer vision, maps, and industrial inspection when needed.',
] as const

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-[#f8fbff] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
          >
            <h2 className="max-w-[9ch] text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
              Product engineer, full stack by default.
            </h2>
            <p className="mt-6 max-w-[56ch] text-base leading-7 text-slate-600 sm:text-lg">
              Full-stack product engineering across SaaS, automation, geospatial, AI, mobile, and
              desktop workflows.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1], delay: 0.08 }}
            className="space-y-8"
          >
            <div className="space-y-5 border-y border-slate-200 py-8">
              <p className="text-lg leading-8 text-slate-700">
                Senior JavaScript Full-Stack Developer with 6+ years building production platforms
                end to end: Next.js/React interfaces, Node.js/FastAPI services,
                PostgreSQL/MySQL/Redis data layers, auth, queues, REST APIs, and responsive UX.
              </p>
              <p className="text-lg leading-8 text-slate-700">
                Currently at Talio shipping Creaboost. Previously built Indus Inspection, a drone
                inspection system with AI defect review, geospatial positioning, and PDF/ZIP export
                pipelines.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-4 rounded-3xl bg-white/70 p-4 shadow-[0_1px_0_rgba(15,23,42,0.05)] ring-1 ring-slate-200/80"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                    <stat.icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-mono text-lg font-semibold leading-none text-slate-950">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="rounded-[2rem] bg-sky-50/80 p-6 text-slate-950 shadow-[0_24px_70px_rgba(2,132,199,0.08)] ring-1 ring-sky-100">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-950">
                    {personalInfo.experience.company}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {personalInfo.experience.position} since {personalInfo.experience.startDate}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {projects.slice(0, 2).map((project) => (
                    <span
                      key={project.id}
                      className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-sky-100"
                    >
                      {project.title}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {OPERATING_MODEL.map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
