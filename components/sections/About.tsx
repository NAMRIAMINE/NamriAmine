'use client'

import { Calendar, Globe, Layers, MapPin } from 'lucide-react'
import { motion } from 'motion/react'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { Badge } from '@/components/ui/badge'
import { personalInfo } from '@/data/personal'
import { projects } from '@/data/projects'

export function About() {
  const stats = [
    { label: 'Years Experience', value: personalInfo.experience.years, icon: Calendar },
    { label: 'Major Projects', value: '15+', icon: Layers },
    { label: 'Technologies', value: '20+', icon: Globe },
    { label: 'Languages', value: '3', icon: MapPin },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <SectionWrapper className="mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-3"
          >
            About <span className="text-sky-600">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-500 text-lg"
          >
            AI creative automation · industrial drone inspection · geospatial SaaS · precision
            agriculture
          </motion.p>
        </SectionWrapper>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900">{personalInfo.title}</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Senior Full-Stack Developer with 6+ years building production systems across AI
              creative automation, industrial drone inspection, precision agriculture, and
              geospatial SaaS. Full stack ownership from Next.js/TypeScript frontends to FastAPI
              backends with YOLOv8 CV pipelines and MapLibreGL geospatial interfaces.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed">
              Currently at Talio shipping Creaboost — a Gemini-powered creative platform. Previously
              built Indus Inspection, an end-to-end drone inspection platform for towers, pylons,
              wind, and solar assets.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 py-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.07 }}
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-white border border-slate-200"
                >
                  <stat.icon className="w-5 h-5 mb-2 text-sky-600" />
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-5"
          >
            {/* Current Position */}
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-2 mb-4">
                <div
                  aria-hidden="true"
                  className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"
                />
                <h4 className="font-semibold text-slate-800">Current Position</h4>
              </div>
              <p className="font-semibold text-sky-600 mb-1">{personalInfo.experience.position}</p>
              <p className="text-slate-500 text-sm mb-4">
                {personalInfo.experience.company} · {personalInfo.experience.startDate} – Present
              </p>
              <div className="flex flex-wrap gap-2">
                {projects.slice(0, 3).map((project) => (
                  <Badge
                    key={project.id}
                    variant="secondary"
                    className="bg-slate-100 text-slate-700 border-0"
                  >
                    {project.title}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h4 className="font-semibold text-slate-800 mb-4">Languages</h4>
              <div className="space-y-3">
                {personalInfo.languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.07 }}
                    className="flex justify-between items-center"
                  >
                    <span className="text-slate-700">{lang.name}</span>
                    <Badge variant="outline" className="text-xs border-slate-200 text-slate-600">
                      {lang.level}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
