'use client'

import { CheckCircle, Clock, Zap } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/data/projects'

const FLAGSHIP_COUNT = 2
const FLAGSHIP_TECH_LIMIT = 8
const FLAGSHIP_SCOPE_LIMIT = 5
const SUPPORTING_TECH_LIMIT = 5

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Production':
      return <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
    case 'Production Ready':
      return <CheckCircle className="w-3.5 h-3.5 text-sky-600" />
    case 'In Development':
      return <Clock className="w-3.5 h-3.5 text-amber-500" />
    default:
      return <Zap className="w-3.5 h-3.5 text-indigo-500" />
  }
}

const getStatusStyle = (status: string) => {
  switch (status) {
    case 'Production':
      return 'bg-emerald-50 text-emerald-700 border border-emerald-200'
    case 'Production Ready':
      return 'bg-sky-50 text-sky-700 border border-sky-200'
    case 'In Development':
      return 'bg-amber-50 text-amber-700 border border-amber-200'
    default:
      return 'bg-indigo-50 text-indigo-700 border border-indigo-200'
  }
}

export function Projects() {
  const flagship = projects.slice(0, FLAGSHIP_COUNT)
  const supporting = projects.slice(FLAGSHIP_COUNT)

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24 bg-white overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Featured <span className="text-sky-600">Projects</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl">
            End-to-end platforms shipped across SaaS, AI, geospatial, and industrial domains
          </p>
        </motion.div>

        {/* Flagship case studies */}
        <div className="space-y-12">
          {flagship.map((project, index) => {
            const isAlt = index % 2 === 1
            const scope = (project.scope ?? project.features).slice(0, FLAGSHIP_SCOPE_LIMIT)
            const tech = project.tech.slice(0, FLAGSHIP_TECH_LIMIT)

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Content */}
                  <div
                    className={`p-7 sm:p-9 lg:p-10 flex flex-col justify-center ${isAlt ? 'lg:order-2' : ''}`}
                  >
                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${getStatusStyle(project.status)}`}
                      >
                        {getStatusIcon(project.status)}
                        {project.status}
                      </span>
                      <span className="text-xs text-slate-400">{project.year}</span>
                      <span className="text-xs text-slate-300">·</span>
                      <span className="text-xs text-slate-500">{project.category}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                      {project.title}
                    </h3>

                    {project.role && <p className="text-sm text-slate-400 mb-5">{project.role}</p>}

                    {/* Outcome callout */}
                    {project.outcome && (
                      <div className="mb-6 border-l-2 border-sky-500 pl-4 py-1.5 bg-sky-50 rounded-r-lg">
                        <p className="text-sm text-slate-700 leading-relaxed">{project.outcome}</p>
                      </div>
                    )}

                    {/* Scope */}
                    <div className="mb-5">
                      <p className="text-xs font-medium text-slate-400 mb-2.5">Scope</p>
                      <div className="space-y-1.5">
                        {scope.map((item) => (
                          <div
                            key={`${project.id}-scope-${item}`}
                            className="flex items-start gap-2"
                          >
                            <div
                              aria-hidden="true"
                              className="w-1.5 h-1.5 mt-1.5 rounded-full shrink-0 bg-slate-400"
                            />
                            <span className="text-sm text-slate-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stack */}
                    <div>
                      <p className="text-xs font-medium text-slate-400 mb-2.5">Stack</p>
                      <div className="flex flex-wrap gap-1.5">
                        {tech.map((t) => (
                          <Badge
                            key={t}
                            variant="secondary"
                            className="text-xs bg-slate-100 text-slate-700 border-0 font-normal"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Screenshot */}
                  <div
                    className={`relative bg-slate-50 min-h-[260px] sm:min-h-[300px] lg:min-h-[440px] ${isAlt ? 'lg:order-1' : ''}`}
                  >
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        loading="lazy"
                        className="object-cover object-center"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-slate-400 text-sm">No preview</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Supporting projects */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {supporting.map((project, index) => {
            const scope = (project.scope ?? project.features).slice(0, 4)
            const tech = project.tech.slice(0, SUPPORTING_TECH_LIMIT)

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                {/* Image */}
                {project.image && (
                  <div className="relative h-44 bg-slate-50">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                      className="object-cover object-center"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${getStatusStyle(project.status)}`}
                    >
                      {getStatusIcon(project.status)}
                      {project.status}
                    </span>
                    <span className="text-xs text-slate-400">{project.year}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">{project.title}</h3>
                  <p className="text-xs text-slate-400 mb-3">{project.category}</p>

                  {project.outcome && (
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">{project.outcome}</p>
                  )}

                  {/* Scope */}
                  <div className="mb-4 space-y-1.5">
                    {scope.map((item) => (
                      <div key={`${project.id}-scope-${item}`} className="flex items-start gap-2">
                        <div
                          aria-hidden="true"
                          className="w-1.5 h-1.5 mt-1.5 rounded-full shrink-0 bg-slate-300"
                        />
                        <span className="text-xs text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {tech.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="text-xs bg-slate-100 text-slate-600 border-0 font-normal"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
