'use client'
import { Calendar, CheckCircle, Clock, Zap } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/data/projects'

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

const accentDots: Record<string, string> = {
  'indus-inspection': 'bg-sky-500',
  creaboost: 'bg-violet-500',
  'dr-turbine': 'bg-indigo-500',
  filahi: 'bg-emerald-500',
}

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Featured <span className="text-sky-600">Projects</span>
          </h2>
          <p className="text-slate-500 text-lg">
            End-to-end platforms shipped across AI, geospatial, and industrial domains
          </p>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Info */}
                <div
                  className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${getStatusStyle(project.status)}`}
                    >
                      {getStatusIcon(project.status)}
                      {project.status}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <Calendar className="w-3.5 h-3.5" />
                      {project.year}
                    </span>
                    <span className="text-xs text-slate-400">·</span>
                    <span className="text-xs text-slate-500">{project.category}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{project.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-y-2 gap-x-4">
                      {project.features.map((feature) => (
                        <div key={`${project.id}-${feature}`} className="flex items-start gap-2">
                          <div
                            aria-hidden="true"
                            className={`w-1.5 h-1.5 mt-1.5 rounded-full shrink-0 ${accentDots[project.id] ?? 'bg-slate-400'}`}
                          />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                      Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-slate-100 text-slate-700 border-0 font-normal"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Screenshot */}
                <div
                  className={`relative bg-slate-50 flex items-center justify-center min-h-[280px] sm:min-h-[320px] ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  {project.image ? (
                    <div className="absolute inset-0">
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        loading="lazy"
                        className="object-cover object-center"
                      />
                    </div>
                  ) : (
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto rounded-xl bg-slate-200 flex items-center justify-center text-slate-500 text-xl font-bold mb-3">
                        {project.title
                          .split(' ')
                          .map((w) => w[0])
                          .join('')}
                      </div>
                      <span className="text-slate-400 text-sm">Preview unavailable</span>
                    </div>
                  )}
                  {/* Year overlay */}
                  <span className="absolute top-3 right-3 text-xs font-mono font-medium bg-white/90 text-slate-600 px-2 py-1 rounded-md shadow-sm border border-slate-200">
                    {project.year}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
