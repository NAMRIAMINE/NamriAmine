'use client'

import type { LucideIcon } from 'lucide-react'
import {
  Brain,
  Code,
  Database,
  Map as MapIcon,
  Monitor,
  Server,
  Settings,
  Terminal,
} from 'lucide-react'
import { motion } from 'motion/react'
import type { IconType } from 'react-icons'
import { FaPaw } from 'react-icons/fa'
import {
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGithubactions,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRadixui,
  SiReact,
  SiRedis,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { skillCategories } from '@/data/skills'

type SkillIcon = IconType | LucideIcon

const categoryConfig: Record<string, { icon: LucideIcon; accent: string; chipAccent: string }> = {
  frontend: {
    icon: Code,
    accent: 'text-sky-600',
    chipAccent: 'bg-sky-50 text-sky-700 border-sky-200',
  },
  backend: {
    icon: Server,
    accent: 'text-emerald-600',
    chipAccent: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  ai: {
    icon: Brain,
    accent: 'text-indigo-600',
    chipAccent: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
  database: {
    icon: Database,
    accent: 'text-violet-600',
    chipAccent: 'bg-violet-50 text-violet-700 border-violet-200',
  },
  devops: {
    icon: Settings,
    accent: 'text-rose-600',
    chipAccent: 'bg-rose-50 text-rose-700 border-rose-200',
  },
  tools: {
    icon: Terminal,
    accent: 'text-amber-600',
    chipAccent: 'bg-amber-50 text-amber-700 border-amber-200',
  },
}

const normalizeKey = (name: string) =>
  name
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[./&-]/g, '')

const skillIconMap: Record<string, SkillIcon> = {
  reactjs: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwindcss: SiTailwindcss,
  maplibregl: MapIcon,
  reactkonva: Code,
  reactnative: SiReact,
  expo: Code,
  electron: Monitor,
  shadcnui: SiRadixui,
  zustand: FaPaw,
  python: SiPython,
  fastapi: SiFastapi,
  nodejs: SiNodedotjs,
  expressjs: SiExpress,
  restapis: TbApi,
  betterauth: Settings,
  yolov8: Brain,
  onnxruntime: Brain,
  opencv: Brain,
  googlegeminisdk: Brain,
  aipipelines: Brain,
  pyproj: MapIcon,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  redis: SiRedis,
  prisma: SiPrisma,
  supabase: SiSupabase,
  bullmqpro: Settings,
  docker: SiDocker,
  githubactions: SiGithubactions,
  bunnycdn: Settings,
  ssewebsockets: TbApi,
  celery: Settings,
  gitgithub: SiGit,
  vercel: SiVercel,
  vitest: Settings,
  pytest: Settings,
  playwright: Settings,
}

const getSkillIcon = (name: string) => {
  const Icon = skillIconMap[normalizeKey(name)] || Code
  return <Icon size={14} />
}

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Technical <span className="text-emerald-600">Skills</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Expertise across the modern full-stack development spectrum
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {Object.entries(skillCategories).map(([key, category], index) => {
            const cfg = categoryConfig[key] ?? {
              icon: Code,
              accent: 'text-slate-600',
              chipAccent: 'bg-slate-100 text-slate-700 border-slate-200',
            }
            const IconComponent = cfg.icon

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow duration-300"
              >
                {/* Category header */}
                <div className="flex items-center gap-2.5 mb-5">
                  <IconComponent className={`w-5 h-5 ${cfg.accent}`} />
                  <h3 className="font-semibold text-slate-800">{category.title}</h3>
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg border ${cfg.chipAccent}`}
                      title={`${skill.years} experience`}
                    >
                      <span className="opacity-70">{getSkillIcon(skill.name)}</span>
                      {skill.name}
                      <span className="opacity-60 text-[10px] font-mono">{skill.years}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
