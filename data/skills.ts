import type { SkillCategory } from '@/types'

export const skillCategories: Record<string, SkillCategory> = {
  coreWeb: {
    title: 'Core Web',
    accent: 'sky',
    skills: [
      { name: 'React.js', years: '6+' },
      { name: 'Next.js', years: '4+' },
      { name: 'TypeScript', years: '4+' },
      { name: 'TailwindCSS', years: '3+' },
      { name: 'Shadcn UI', years: '2+' },
      { name: 'Zustand', years: '2+' },
      { name: 'react-konva', years: '1+' },
    ],
  },
  backendData: {
    title: 'Backend & Data',
    accent: 'emerald',
    skills: [
      { name: 'Node.js', years: '4+' },
      { name: 'Express.js', years: '4+' },
      { name: 'FastAPI', years: '2+' },
      { name: 'Python', years: '3+' },
      { name: 'PostgreSQL', years: '3+' },
      { name: 'MySQL', years: '4+' },
      { name: 'Redis', years: '2+' },
      { name: 'Prisma', years: '3+' },
      { name: 'Supabase', years: '1+' },
    ],
  },
  productSystems: {
    title: 'Product Systems',
    accent: 'violet',
    skills: [
      { name: 'REST APIs', years: '5+' },
      { name: 'Better Auth', years: '1+' },
      { name: 'BullMQ Pro', years: '1+' },
      { name: 'Celery', years: '2+' },
      { name: 'SSE / WebSockets', years: '2+' },
      { name: 'Docker', years: '3+' },
      { name: 'Vercel', years: '3+' },
      { name: 'GitHub Actions', years: '3+' },
    ],
  },
  appliedAI: {
    title: 'Applied AI & Geospatial',
    accent: 'amber',
    skills: [
      { name: 'YOLOv8', years: '1+' },
      { name: 'ONNX Runtime', years: '1+' },
      { name: 'OpenCV', years: '1+' },
      { name: 'Google Gemini SDK', years: '1+' },
      { name: 'AI Pipelines', years: '2+' },
      { name: 'MapLibreGL', years: '1+' },
      { name: 'PyProj', years: '1+' },
    ],
  },
  mobileDesktop: {
    title: 'Mobile & Desktop',
    accent: 'rose',
    skills: [
      { name: 'React Native', years: '2+' },
      { name: 'Expo', years: '2+' },
      { name: 'Electron', years: '1+' },
    ],
  },
  testingDelivery: {
    title: 'Testing & Delivery',
    accent: 'slate',
    skills: [
      { name: 'Vitest', years: '1+' },
      { name: 'pytest', years: '2+' },
      { name: 'Playwright', years: '1+' },
      { name: 'Git/GitHub', years: '5+' },
      { name: 'Bunny CDN', years: '1+' },
    ],
  },
}
