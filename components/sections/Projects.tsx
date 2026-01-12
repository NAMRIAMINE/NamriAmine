// app/components/sections/Projects.tsx
'use client'
import { Calendar, CheckCircle, Clock, Zap } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { CardBody, CardContainer, CardItem } from '@/components/aceternity/3d-card'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'

export function Projects() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Production':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'Production Ready':
        return <CheckCircle className="w-4 h-4 text-emerald-500" />
      case 'In Development':
        return <Clock className="w-4 h-4 text-blue-500" />
      default:
        return <Zap className="w-4 h-4 text-purple-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production':
        return 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300'
      case 'Production Ready':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-800/20 dark:text-emerald-300'
      case 'In Development':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300'
      default:
        return 'bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-300'
    }
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Innovative solutions that make a difference
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-card/50 backdrop-blur-sm">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* Project Info */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <CardHeader className="p-0 pb-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <CardTitle className="text-3xl mb-2">{project.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {project.year}
                          </CardDescription>
                        </div>
                        <Badge className={getStatusColor(project.status)}>
                          {getStatusIcon(project.status)}
                          <span className="ml-1">{project.status}</span>
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                      {/* Features */}
                      <div>
                        <h4 className="font-semibold mb-3">Key Features</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.features.map((feature) => (
                            <div
                              key={`${project.id}-feature-${feature}`}
                              className="flex items-center gap-2"
                            >
                              <div
                                className={cn(
                                  'w-2 h-2 rounded-full bg-gradient-to-r',
                                  project.gradient,
                                )}
                              />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="font-semibold mb-3">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                  {/* Project Preview */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <CardContainer
                      containerClassName="py-0 w-full min-h-[24rem] flex justify-center"
                      className="inter-var w-full"
                    >
                      <CardBody className="relative w-full sm:w-[28rem] h-[24rem] rounded-xl border bg-card/50 backdrop-blur-sm dark:border-white/10 border-black/10">
                        <CardItem
                          translateZ={40}
                          className={cn(
                            'absolute inset-0 w-full rounded-xl p-[5px] bg-gradient-to-br',
                            project.gradient,
                          )}
                        >
                          <div className="w-full h-full rounded-[10px] bg-background flex items-center justify-center">
                            {project.image ? (
                              <Image
                                src={project.image || ''}
                                alt={project.title}
                                width={1000}
                                height={1000}
                                loading="lazy"
                                className="w-full h-full object-cover rounded-xl group-hover/card:shadow-xl"
                              />
                            ) : (
                              <div className="text-center">
                                <div
                                  className={cn(
                                    'w-20 h-20 mx-auto rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 bg-gradient-to-r',
                                    project.gradient,
                                  )}
                                >
                                  {project.title
                                    .split(' ')
                                    .map((word) => word[0])
                                    .join('')}
                                </div>
                              </div>
                            )}
                          </div>
                        </CardItem>

                        <CardItem translateZ={80} className="absolute top-4 left-4">
                          <span
                            className={cn(
                              'px-2 py-1 rounded-md text-xs font-medium text-white bg-gradient-to-r',
                              project.gradient,
                            )}
                          >
                            {project.year}
                          </span>
                        </CardItem>
                      </CardBody>
                    </CardContainer>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
