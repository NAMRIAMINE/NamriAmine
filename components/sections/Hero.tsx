// app/components/sections/Hero.tsx
'use client'

import { ChevronRight, Download, Globe, Mail, MapPin, Zap } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data/personal'
import { scrollToSection } from '@/lib/utils'
import { ColourfulText } from '../aceternity/colourful-text'

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden scroll-mt-24 py-20 sm:py-24"
    >
      {/* <BackgroundBeams className="opacity-60 dark:opacity-40" /> */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          {/* Profile Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <motion.div
              animate={{
                boxShadow: ['0 0 0 0 rgba(59, 130, 246, 0.4)', '0 0 0 20px rgba(59, 130, 246, 0)'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl"
            >
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                <Image
                  src="/pdp.png"
                  alt="avatar"
                  width={160}
                  height={160}
                  priority
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Main Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-4xl sm:text-6xl md:text-8xl font-bold leading-tight break-words"
            >
              <span className="inline text-foreground">Full Stack</span>{' '}
              <ColourfulText text="Developer" />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            >
              Crafting exceptional digital experiences with{' '}
              <span className="text-blue-500 font-semibold">React</span>,{' '}
              <span className="text-green-500 font-semibold">Next.js</span>, and{' '}
              <span className="text-purple-500 font-semibold">TypeScript</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground"
            >
              5+ years building scalable applications for agriculture & industry
            </motion.p>
          </div>

          {/* Status Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { icon: MapPin, text: personalInfo.location, color: 'text-blue-500' },
              { icon: Globe, text: personalInfo.availability, color: 'text-green-500' },
              { icon: Zap, text: 'Open to Opportunities', color: 'text-yellow-500' },
            ].map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
                  <badge.icon className={`w-4 h-4 ${badge.color}`} />
                  {badge.text}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              <Link href="/Resume.pdf" download target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
