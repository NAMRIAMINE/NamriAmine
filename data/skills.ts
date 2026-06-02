// app/data/skills.ts
import type { SkillCategory } from '@/types'

export const skillCategories: Record<string, SkillCategory> = {
  coreWeb: {
    title: 'Core Web',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React.js', level: 95, years: '6+' },
      { name: 'Next.js', level: 92, years: '4+' },
      { name: 'TypeScript', level: 88, years: '4+' },
      { name: 'TailwindCSS', level: 90, years: '3+' },
      { name: 'Shadcn UI', level: 85, years: '2+' },
      { name: 'Zustand', level: 82, years: '2+' },
      { name: 'react-konva', level: 78, years: '1+' },
    ],
  },
  backendData: {
    title: 'Backend & Data',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 85, years: '4+' },
      { name: 'Express.js', level: 82, years: '4+' },
      { name: 'FastAPI', level: 88, years: '2+' },
      { name: 'Python', level: 85, years: '3+' },
      { name: 'PostgreSQL', level: 85, years: '3+' },
      { name: 'MySQL', level: 85, years: '4+' },
      { name: 'Redis', level: 82, years: '2+' },
      { name: 'Prisma', level: 85, years: '3+' },
      { name: 'Supabase', level: 80, years: '1+' },
    ],
  },
  productSystems: {
    title: 'Product Systems',
    color: 'from-purple-500 to-violet-500',
    skills: [
      { name: 'REST APIs', level: 92, years: '5+' },
      { name: 'Better Auth', level: 78, years: '1+' },
      { name: 'BullMQ Pro', level: 78, years: '1+' },
      { name: 'Celery', level: 80, years: '2+' },
      { name: 'SSE / WebSockets', level: 80, years: '2+' },
      { name: 'Docker', level: 85, years: '3+' },
      { name: 'Vercel', level: 85, years: '3+' },
      { name: 'GitHub Actions', level: 85, years: '3+' },
    ],
  },
  appliedAI: {
    title: 'Applied AI & Geospatial',
    color: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'YOLOv8', level: 82, years: '1+' },
      { name: 'ONNX Runtime', level: 78, years: '1+' },
      { name: 'OpenCV', level: 80, years: '1+' },
      { name: 'Google Gemini SDK', level: 82, years: '1+' },
      { name: 'AI Pipelines', level: 85, years: '2+' },
      { name: 'MapLibreGL', level: 80, years: '1+' },
      { name: 'PyProj', level: 75, years: '1+' },
    ],
  },
  mobileDesktop: {
    title: 'Mobile & Desktop',
    color: 'from-rose-500 to-pink-500',
    skills: [
      { name: 'React Native', level: 78, years: '2+' },
      { name: 'Expo', level: 75, years: '2+' },
      { name: 'Electron', level: 72, years: '1+' },
    ],
  },
  testingDelivery: {
    title: 'Testing & Delivery',
    color: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'Vitest', level: 80, years: '1+' },
      { name: 'pytest', level: 82, years: '2+' },
      { name: 'Playwright', level: 75, years: '1+' },
      { name: 'Git/GitHub', level: 92, years: '5+' },
      { name: 'Bunny CDN', level: 75, years: '1+' },
    ],
  },
}
