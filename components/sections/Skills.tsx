// app/components/sections/Skills.tsx
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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { skillCategories } from '@/data/skills'
import { cn } from '@/lib/utils'

type SkillIcon = IconType | LucideIcon

const categoryIcons = {
  frontend: Code,
  backend: Server,
  database: Database,
  ai: Brain,
  devops: Settings,
  tools: Terminal,
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
  return <Icon size={16} className="text-muted-foreground" />
}

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-emerald-500">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Expertise across the modern web development stack
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([key, category], index) => {
            const IconComponent = categoryIcons[key as keyof typeof categoryIcons] || Code

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div
                        className={cn('p-2 rounded-lg bg-gradient-to-r text-white', category.color)}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.05 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium flex items-center gap-2">
                            {getSkillIcon(skill.name)}
                            {skill.name}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">{skill.years}</span>
                            <span className="text-sm">{skill.level}%</span>
                          </div>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={cn('h-full rounded-full bg-gradient-to-r', category.color)}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: skillIndex * 0.1,
                              ease: 'easeOut',
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
