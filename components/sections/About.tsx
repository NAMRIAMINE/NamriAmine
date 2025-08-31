// app/components/sections/About.tsx
'use client'

import { Calendar, Globe, Layers, MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { personalInfo } from '@/data/personal'

export function About() {
  const stats = [
    {
      label: 'Years Experience',
      value: personalInfo.experience.years,
      icon: Calendar,
    },
    { label: 'Major Projects', value: '15+', icon: Layers },
    { label: 'Technologies', value: '20+', icon: Globe },
    { label: 'Languages', value: '3', icon: MapPin },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-muted/30 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Passionate about creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">{personalInfo.title}</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Experienced Full Stack Developer specializing in JavaScript and TypeScript with
              expertise in modern frameworks. Building scalable, performant web applications since
              2022.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Strong background in precision agriculture, industrial inspection, and web platform
              development with a proven track record of delivering quality solutions.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 py-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm">
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {/* Current Position */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  Current Position
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-primary mb-1">{personalInfo.experience.position}</p>
                <p className="text-muted-foreground mb-4">
                  {personalInfo.experience.company} • {personalInfo.experience.startDate} - Present
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Dr Turbine', 'Filahi', 'Web Solutions'].map((project) => (
                    <Badge key={project} variant="secondary">
                      {project}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {personalInfo.languages.map((lang) => (
                    <div key={lang.name} className="flex justify-between items-center">
                      <span>{lang.name}</span>
                      <Badge variant="outline">{lang.level}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
