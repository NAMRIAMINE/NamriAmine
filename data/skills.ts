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
      { name: 'Python', level: 85, years: '2+' },
      { name: 'FastAPI', level: 85, years: '1+' },
      { name: 'Node.js', level: 85, years: '3+' },
      { name: 'Express.js', level: 80, years: '3+' },
      { name: 'REST APIs', level: 90, years: '4+' },
      { name: 'Socket.IO', level: 75, years: '2+' },
    ],
  },
  ai: {
    title: 'AI & Machine Learning',
    color: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'OpenAI API', level: 85, years: '1+' },
      { name: 'RAG Pipelines', level: 85, years: '1+' },
      { name: 'Vector Databases', level: 80, years: '1+' },
      { name: 'Embeddings', level: 85, years: '1+' },
      { name: 'Prompt Engineering', level: 85, years: '1+' },
      { name: 'LangChain', level: 75, years: '1+' },
    ],
  },
  database: {
    title: 'Databases & ORMs',
    color: 'from-purple-500 to-violet-500',
    skills: [
      { name: 'PostgreSQL', level: 85, years: '2+' },
      { name: 'pgvector', level: 80, years: '1+' },
      { name: 'MySQL', level: 85, years: '3+' },
      { name: 'MongoDB', level: 80, years: '2+' },
      { name: 'Redis', level: 80, years: '2+' },
      { name: 'Prisma', level: 85, years: '2+' },
    ],
  },
  devops: {
    title: 'DevOps & Monitoring',
    color: 'from-red-500 to-pink-500',
    skills: [
      { name: 'Docker', level: 85, years: '2+' },
      { name: 'GitHub Actions', level: 85, years: '2+' },
      { name: 'Prometheus', level: 80, years: '1+' },
      { name: 'Grafana', level: 80, years: '1+' },
      { name: 'OpenTelemetry', level: 75, years: '1+' },
      { name: 'Celery', level: 80, years: '1+' },
    ],
  },
  tools: {
    title: 'Tools & Platforms',
    color: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'Git/GitHub', level: 90, years: '4+' },
      { name: 'VS Code/Cursor', level: 95, years: '5+' },
      { name: 'Vercel', level: 85, years: '3+' },
      { name: 'Poetry', level: 80, years: '1+' },
      { name: 'pytest', level: 85, years: '1+' },
      { name: 'Postman', level: 85, years: '3+' },
    ],
  },
}
