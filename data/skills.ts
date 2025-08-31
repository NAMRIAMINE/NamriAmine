// app/data/skills.ts
import type { SkillCategory } from '@/types'

export const skillCategories: Record<string, SkillCategory> = {
  frontend: {
    title: 'Frontend Development',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React.js', level: 95, years: '5+' },
      { name: 'Next.js', level: 90, years: '3+' },
      { name: 'TypeScript', level: 85, years: '3+' },
      { name: 'TailwindCSS', level: 90, years: '3+' },
      { name: 'Shadcn UI', level: 85, years: '2+' },
      { name: 'Zustand', level: 80, years: '2+' },
    ],
  },
  backend: {
    title: 'Backend Development',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 85, years: '3+' },
      { name: 'Express.js', level: 80, years: '3+' },
      { name: 'REST APIs', level: 90, years: '4+' },
      { name: 'Socket.IO', level: 75, years: '2+' },
      { name: 'Auth.js', level: 80, years: '2+' },
      { name: 'JWT', level: 85, years: '3+' },
    ],
  },
  database: {
    title: 'Databases & ORMs',
    color: 'from-purple-500 to-violet-500',
    skills: [
      { name: 'MySQL', level: 85, years: '3+' },
      { name: 'PostgreSQL', level: 75, years: '2+' },
      { name: 'MongoDB', level: 80, years: '2+' },
      { name: 'Prisma', level: 85, years: '2+' },
      { name: 'Firebase', level: 75, years: '2+' },
      { name: 'Supabase', level: 70, years: '1+' },
    ],
  },
  tools: {
    title: 'Tools & Platforms',
    color: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'Git/GitHub', level: 90, years: '4+' },
      { name: 'VS Code/Cursor', level: 95, years: '5+' },
      { name: 'Vercel', level: 85, years: '3+' },
      { name: 'Docker', level: 70, years: '1+' },
      { name: 'Turbopack', level: 75, years: '1+' },
      { name: 'Biome', level: 80, years: '1+' },
    ],
  },
}
