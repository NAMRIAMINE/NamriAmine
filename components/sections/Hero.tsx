'use client'

import { ArrowUpRight, DownloadSimple } from '@phosphor-icons/react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data/personal'
import { projects } from '@/data/projects'
import { scrollToSection } from '@/lib/utils'

function HeroVisualCard({
  title,
  caption,
  image,
  priority = false,
  compact = false,
}: {
  title: string
  caption: string
  image?: string
  priority?: boolean
  compact?: boolean
}) {
  return (
    <article className="group rounded-[2rem] border border-white/80 bg-white/78 p-3 shadow-[0_30px_90px_rgba(15,23,42,0.1)] backdrop-blur-xl">
      <div
        className={`relative overflow-hidden rounded-[1.6rem] bg-[radial-gradient(circle_at_top,rgba(94,234,212,0.26),rgba(255,255,255,0)_55%),linear-gradient(180deg,rgba(241,245,249,0.9),rgba(255,255,255,0.98))] ${
          compact ? 'min-h-[220px]' : 'min-h-[440px]'
        }`}
      >
        <div className="absolute left-5 top-5 z-10 flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-teal-400" />
        </div>
        {image && (
          <Image
            src={image}
            alt={`${title} screenshot`}
            fill
            priority={priority}
            sizes={compact ? '(max-width: 1024px) 100vw, 22vw' : '(max-width: 1024px) 100vw, 38vw'}
            className="object-contain p-6 pt-14 transition-transform duration-700 ease-out group-hover:scale-105"
          />
        )}
        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-slate-950/78 via-slate-950/26 to-transparent px-5 pb-5 pt-16 text-white">
          <p className="text-sm font-semibold">{title}</p>
          <p className="mt-1 max-w-[28ch] text-sm leading-6 text-white/74">{caption}</p>
        </div>
      </div>
    </article>
  )
}

export function Hero() {
  const [leadProject, supportProject] = projects

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-4 pb-20 pt-28 scroll-mt-16 sm:px-6 md:pb-28 md:pt-32 lg:px-8 lg:pb-36 lg:pt-40"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_20%_18%,rgba(45,212,191,0.22),rgba(255,255,255,0)_38%),radial-gradient(circle_at_82%_14%,rgba(94,234,212,0.2),rgba(255,255,255,0)_26%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-40 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.8),rgba(255,255,255,0)_70%)] blur-3xl"
      />

      <div className="page-shell grid items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(430px,0.95fr)] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="min-w-0"
        >
          <p className="text-sm font-medium uppercase text-slate-500">
            {personalInfo.title}
          </p>

          <h1 className="font-display mt-6 max-w-6xl text-[clamp(3.25rem,7vw,7rem)] leading-[0.9] tracking-[-0.08em] text-slate-950">
            {personalInfo.name} builds
            <span className="mx-3 inline-flex h-[0.88em] w-[1.95em] overflow-hidden rounded-full border border-white/90 align-[-0.1em] shadow-[0_14px_40px_rgba(15,23,42,0.14)]">
              <Image
                src={leadProject?.image ?? '/indus-inspection.webp'}
                alt=""
                width={180}
                height={90}
                aria-hidden="true"
                className="h-full w-full object-cover"
              />
            </span>
            full-stack systems for SaaS, AI, and field operations.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            Based in {personalInfo.location}, shipping product platforms across interface, APIs,
            data workflows, media pipelines, and applied AI when the product needs real depth.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="rounded-full bg-slate-950 px-5 text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)] transition-colors duration-300 hover:bg-slate-800"
            >
              View Work
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="rounded-full border-slate-300 bg-white/78 px-5 text-slate-900 transition-colors duration-300 hover:border-teal-300 hover:bg-white"
            >
              Contact
            </Button>

            <Link
              href="/Namri_Amine_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full px-2 text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              <DownloadSimple className="h-4 w-4" weight="bold" />
              Download Resume
            </Link>
          </div>

          <div className="mt-10 max-w-2xl border-t border-slate-200/80 pt-6 text-sm leading-7 text-slate-500">
            <span className="font-medium text-slate-700">
              Currently shipping {supportProject?.title ?? 'Creaboost'} at{' '}
              {personalInfo.experience.company}.
            </span>{' '}
            Available for remote contract and full-time product work.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.32, 0.72, 0, 1], delay: 0.08 }}
          className="relative"
        >
          <div
            aria-hidden="true"
            className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-teal-200/40 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -right-8 bottom-6 h-40 w-40 rounded-full bg-teal-200/30 blur-3xl"
          />
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(210px,0.64fr)]">
            <HeroVisualCard
              title={leadProject?.title ?? 'Indus Inspection'}
              caption="Industrial inspection platform with AI review, mapping, and client-ready export flows."
              image={leadProject?.image}
              priority
            />
            <div className="grid gap-4">
              <HeroVisualCard
                title={supportProject?.title ?? 'Creaboost'}
                caption="AI creative automation with media processing, campaign workflows, and ops-grade delivery."
                image={supportProject?.image}
                compact
              />
              <div className="rounded-[2rem] border border-white/80 bg-white/74 p-5 shadow-[0_30px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl">
                <div className="rounded-[1.6rem] bg-[linear-gradient(180deg,rgba(15,23,42,0.94),rgba(15,23,42,0.78))] p-6 text-white">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                    Delivery range
                  </p>
                  <div className="mt-4 space-y-4">
                    <div>
                      <p className="text-2xl font-semibold">Interfaces to infrastructure</p>
                      <p className="mt-2 text-sm leading-6 text-white/72">
                        React, Next.js, Node.js, FastAPI, queues, and production-ready data layers.
                      </p>
                    </div>
                    <Link
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-teal-300 transition-colors duration-300 hover:text-white"
                    >
                      LinkedIn
                      <ArrowUpRight className="h-4 w-4" weight="bold" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
