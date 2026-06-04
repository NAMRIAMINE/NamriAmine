'use client'

import { CheckCircle, Clock, Zap } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { projects } from '@/data/projects'
import type { Project } from '@/types'

const FLAGSHIP_TECH_LIMIT = 8
const FLAGSHIP_SCOPE_LIMIT = 5
const SUPPORTING_TECH_LIMIT = 6

const getStatusIcon = (status: Project['status']) => {
  switch (status) {
    case 'Production':
    case 'Production Ready':
      return CheckCircle
    case 'In Development':
      return Clock
    default:
      return Zap
  }
}

function StatusPill({ status }: { status: Project['status'] }) {
  const Icon = getStatusIcon(status)

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1.5 text-xs font-medium text-sky-800 ring-1 ring-sky-100">
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {status}
    </span>
  )
}

function ImageFrame({
  project,
  priority = false,
  compact = false,
  sizes,
}: {
  project: Project
  priority?: boolean
  compact?: boolean
  sizes?: string
}) {
  const imageLoadingProps = priority ? { priority: true } : { loading: 'lazy' as const }
  const resolvedSizes =
    sizes ??
    (compact ? '(max-width: 1024px) calc(100vw - 3rem), 320px' : '(max-width: 1024px) 100vw, 55vw')

  return (
    <div className="rounded-[2rem] bg-sky-50 p-2 ring-1 ring-sky-100">
      <div
        className={`relative overflow-hidden rounded-[1.5rem] bg-white p-3 ring-1 ring-slate-200/80 ${
          compact ? 'aspect-[16/9]' : 'min-h-[260px] sm:min-h-[340px] lg:min-h-[430px]'
        }`}
      >
        <div className="absolute left-5 top-4 z-10 flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-sky-400" />
        </div>
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes={resolvedSizes}
            {...imageLoadingProps}
            className="object-contain p-6 pt-10"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm text-slate-400">No preview</span>
          </div>
        )}
      </div>
    </div>
  )
}

function FlagshipCase({
  project,
  index,
  variant,
}: {
  project: Project
  index: number
  variant: 'platform' | 'workflow'
}) {
  const scope = (project.scope ?? project.features).slice(0, FLAGSHIP_SCOPE_LIMIT)
  const tech = project.tech.slice(0, FLAGSHIP_TECH_LIMIT)
  const isWorkflow = variant === 'workflow'

  return (
    <motion.article
      data-project-presentation="flagship"
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: index * 0.06 }}
      className="overflow-hidden rounded-[2.25rem] bg-white shadow-[0_28px_90px_rgba(15,23,42,0.1)] ring-1 ring-slate-200/80"
    >
      <div
        className={`grid gap-0 ${isWorkflow ? 'lg:grid-cols-[1.08fr_0.92fr]' : 'lg:grid-cols-[0.86fr_1.14fr]'}`}
      >
        <div className={`p-6 sm:p-8 lg:p-10 ${isWorkflow ? 'lg:order-2' : ''}`}>
          <div className="flex flex-wrap items-center gap-2">
            <StatusPill status={project.status} />
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-500">
              {project.year}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-500">
              {project.category}
            </span>
          </div>

          <div className="mt-8">
            <h3 className="text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">
              {project.title}
            </h3>
            {project.role && (
              <p className="mt-3 max-w-[52ch] text-sm font-medium leading-6 text-slate-500">
                {project.role}
              </p>
            )}
          </div>

          {project.outcome && (
            <div className="mt-7 rounded-3xl bg-[#f8fbff] p-5 ring-1 ring-slate-200/80">
              <p className="text-sm font-medium leading-7 text-slate-700">{project.outcome}</p>
            </div>
          )}

          <div className="mt-7 grid gap-5">
            <div>
              <p className="mb-3 text-xs font-semibold tracking-[0.12em] text-slate-400">Scope</p>
              <div className="grid gap-2">
                {scope.map((item) => (
                  <div key={`${project.id}-scope-${item}`} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"
                    />
                    <span className="text-sm leading-6 text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold tracking-[0.12em] text-slate-400">Stack</p>
              <div className="flex flex-wrap gap-2">
                {tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-slate-200/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`bg-[#f8fbff] p-4 sm:p-6 lg:p-8 ${isWorkflow ? 'lg:order-1' : ''}`}>
          <ImageFrame project={project} priority={index === 0} />
        </div>
      </div>
    </motion.article>
  )
}

function SecondaryCase({ project }: { project: Project }) {
  const tech = project.tech.slice(0, SUPPORTING_TECH_LIMIT)

  return (
    <motion.article
      data-project-presentation="secondary"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
      className="rounded-[2.25rem] bg-[#f8fbff] p-4 ring-1 ring-slate-200/80 sm:p-6 lg:p-8"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <StatusPill status={project.status} />
            <span className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-500 ring-1 ring-slate-200/70">
              {project.year}
            </span>
            <span className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-500 ring-1 ring-slate-200/70">
              Secondary case study
            </span>
          </div>

          <h3 className="mt-7 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-3 text-sm font-medium leading-6 text-slate-500">{project.category}</p>
          {project.outcome && (
            <p className="mt-5 max-w-[58ch] text-base leading-7 text-slate-600">
              {project.outcome}
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-slate-200/70"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <ImageFrame project={project} compact />
      </div>
    </motion.article>
  )
}

function ArchiveCase({ project }: { project: Project }) {
  const tech = project.tech.slice(0, 5)

  return (
    <motion.article
      data-project-presentation="archive"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
      className="grid gap-6 rounded-2xl bg-white p-5 ring-1 ring-slate-200/50 sm:p-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-center"
    >
      <ImageFrame project={project} compact />
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <StatusPill status={project.status} />
          <span className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-500 ring-1 ring-slate-200/70">
            {project.year}
          </span>
          <span className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-500 ring-1 ring-slate-200/70">
            {project.category}
          </span>
        </div>
        <h4 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-2xl">
          {project.title}
        </h4>
        {project.outcome && (
          <p className="mt-3 max-w-[58ch] text-sm leading-6 text-slate-600">{project.outcome}</p>
        )}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-slate-200/70"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  const flagship = projects.filter((project) => project.presentation === 'flagship')
  const secondary = projects.find((project) => project.presentation === 'secondary')
  const archive = projects.filter((project) => project.presentation === 'archive')

  return (
    <section
      id="projects"
      className="scroll-mt-24 overflow-x-hidden bg-white px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
          className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-end"
        >
          <h2 className="max-w-[18ch] text-4xl font-semibold leading-none tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
            Work proof across product systems.
          </h2>
          <p className="max-w-[62ch] text-base leading-7 text-slate-600 sm:text-lg">
            Selected platforms where I owned the path from user experience to APIs, data, background
            jobs, AI workflows, geospatial interfaces, and exports.
          </p>
        </motion.div>

        <div className="mt-14 space-y-10">
          {flagship.map((project, index) => (
            <FlagshipCase
              key={project.id}
              project={project}
              index={index}
              variant={index === 0 ? 'platform' : 'workflow'}
            />
          ))}
        </div>

        {secondary && (
          <div className="mt-12">
            <SecondaryCase project={secondary} />
          </div>
        )}

        {archive.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
            className="mt-12 border-t border-slate-100 pt-12"
          >
            <div>
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-slate-500">
                Earlier product systems
              </h3>
              <p className="mt-2 max-w-[62ch] text-sm leading-6 text-slate-400">
                Older work stays visible as range proof, but the hierarchy stays focused on the
                current and strongest platforms.
              </p>
            </div>

            <div className="mt-7 grid gap-4">
              {archive.map((project) => (
                <ArchiveCase key={project.id} project={project} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
