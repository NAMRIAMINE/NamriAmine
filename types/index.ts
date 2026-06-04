export type ProjectPresentation = 'flagship' | 'secondary' | 'archive'

export type SkillAccent = 'sky' | 'emerald' | 'violet' | 'amber' | 'rose' | 'slate'

export interface Project {
  id: string
  title: string
  year: string
  description: string
  tech: string[]
  features: string[]
  status: 'Production' | 'Production Ready' | 'In Development' | 'Live'
  category: string
  presentation: ProjectPresentation
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
  accent: SkillAccent
}
