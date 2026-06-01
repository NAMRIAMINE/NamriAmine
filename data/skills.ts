// app/data/skills.ts
import type { SkillCategory } from '@/types'

export const skillCategories: Record<string, SkillCategory> = {
  frontend: {
    title: 'Frontend Development',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React.js', level: 95, years: '6+' },
      { name: 'Next.js', level: 92, years: '4+' },
      { name: 'TypeScript', level: 88, years: '4+' },
      { name: 'TailwindCSS', level: 90, years: '3+' },
      { name: 'MapLibreGL', level: 80, years: '1+' },
      { name: 'react-konva', level: 78, years: '1+' },
      { name: 'React Native', level: 78, years: '2+' },
      { name: 'Expo', level: 75, years: '2+' },
      { name: 'Electron', level: 72, years: '1+' },
    ],
  },
  backend: {
    title: 'Backend Development',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'FastAPI', level: 88, years: '2+' },
      { name: 'Node.js', level: 85, years: '4+' },
      { name: 'Express.js', level: 82, years: '4+' },
      { name: 'Python', level: 85, years: '3+' },
      { name: 'Celery', level: 80, years: '2+' },
      { name: 'Better Auth', level: 78, years: '1+' },
    ],
  },
  ai: {
    title: 'AI & Computer Vision',
    color: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'YOLOv8', level: 82, years: '1+' },
      { name: 'ONNX Runtime', level: 78, years: '1+' },
      { name: 'OpenCV', level: 80, years: '1+' },
      { name: 'Google Gemini SDK', level: 82, years: '1+' },
      { name: 'AI Pipelines', level: 85, years: '2+' },
      { name: 'PyProj', level: 75, years: '1+' },
    ],
  },
  database: {
    title: 'Databases & ORMs',
    color: 'from-purple-500 to-violet-500',
    skills: [
      { name: 'PostgreSQL', level: 85, years: '3+' },
      { name: 'MySQL', level: 85, years: '4+' },
      { name: 'Redis', level: 82, years: '2+' },
      { name: 'Prisma', level: 85, years: '3+' },
      { name: 'Supabase', level: 80, years: '1+' },
      { name: 'BullMQ Pro', level: 78, years: '1+' },
    ],
  },
  devops: {
    title: 'DevOps & Infrastructure',
    color: 'from-red-500 to-pink-500',
    skills: [
      { name: 'Docker', level: 85, years: '3+' },
      { name: 'GitHub Actions', level: 85, years: '3+' },
      { name: 'Bunny CDN', level: 75, years: '1+' },
      { name: 'Vercel', level: 85, years: '3+' },
      { name: 'SSE / WebSockets', level: 80, years: '2+' },
      { name: 'REST APIs', level: 92, years: '5+' },
    ],
  },
  tools: {
    title: 'Testing & Tools',
    color: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'Vitest', level: 80, years: '1+' },
      { name: 'pytest', level: 82, years: '2+' },
      { name: 'Playwright', level: 75, years: '1+' },
      { name: 'Git/GitHub', level: 92, years: '5+' },
      { name: 'Shadcn UI', level: 85, years: '2+' },
      { name: 'Zustand', level: 82, years: '2+' },
    ],
  },
}
