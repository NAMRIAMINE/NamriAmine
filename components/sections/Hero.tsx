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
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden scroll-mt-24"
    >
      {/* <BackgroundBeams className="opacity-60 dark:opacity-40" /> */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          {/* Profile Avatar */}
          <div className="relative">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <Image src="/pdp.png" alt="avatar" width={160} height={160} />
              </div>
            </div>
            {/* <div className="w-40 h-40 top-0 left-80 absolute bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-30 animate-pulse dark:opacity-50" /> */}
          </div>

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

            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences with{' '}
              <span className="text-blue-500 font-semibold">React</span>,{' '}
              <span className="text-green-500 font-semibold">Next.js</span>, and{' '}
              <span className="text-purple-500 font-semibold">TypeScript</span>
            </p>

            <p className="text-lg text-muted-foreground">
              5+ years building scalable applications for agriculture & industry
            </p>
          </div>

          {/* Status Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <MapPin className="w-4 h-4 text-blue-500" />
              {personalInfo.location}
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <Globe className="w-4 h-4 text-green-500" />
              {personalInfo.availability}
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              Open to Opportunities
            </Badge>
          </div>

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
