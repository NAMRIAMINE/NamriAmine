// app/components/sections/Skills.tsx
'use client'

import { Code, Database, Server, Terminal } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { skillCategories } from '@/data/skills'
import { cn } from '@/lib/utils'

const categoryIcons = {
  frontend: Code,
  backend: Server,
  database: Database,
  tools: Terminal,
}

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical{' '}
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Expertise across the modern web development stack
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([key, category]) => {
            const IconComponent = categoryIcons[key as keyof typeof categoryIcons]

            return (
              <Card
                key={key}
                className="bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
              >
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
                  {category.skills.map((skill, _i) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">{skill.years}</span>
                          <span className="text-sm">{skill.level}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={cn(
                            'h-full rounded-full bg-gradient-to-r transition-all duration-1000',
                            category.color,
                          )}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
