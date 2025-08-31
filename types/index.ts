// app/types/index.ts
export interface Project {
  id: string
  title: string
  year: string
  description: string
  tech: string[]
  features: string[]
  status: 'Production' | 'In Development' | 'Live'
  gradient: string
  category: string
  liveUrl?: string
  githubUrl?: string
  image?: string
}

export interface SkillItem {
  name: string
  level: number
  years: string
}

export interface SkillCategory {
  title: string
  skills: SkillItem[]
  color: string
}
