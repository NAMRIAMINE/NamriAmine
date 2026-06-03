export interface Project {
  id: string
  title: string
  year: string
  description: string
  tech: string[]
  features: string[]
  status: 'Production' | 'Production Ready' | 'In Development' | 'Live'
  category: string
  liveUrl?: string
  githubUrl?: string
  image?: string
  role?: string
  scope?: string[]
  outcome?: string
}

export interface SkillItem {
  name: string
  years: string
}

export interface SkillCategory {
  title: string
  skills: SkillItem[]
  color: string
}
