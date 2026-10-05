import {
  ArrowUpRight,
  CheckCircle,
  Clock,
  GithubLogo,
  Lightning,
} from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'
import { personalInfo } from '@/data/personal'
import { projects } from '@/data/projects'
import type { Project } from '@/types'

const TECH_LIMIT = 5
const FEATURE_LIMIT = 2

function Status({ project }: { project: Project }) {
  const Icon =
    project.status === 'In Development' || project.status === 'Pre-production'
      ? Clock
      : project.status === 'Production' || project.status === 'Production Ready'
        ? CheckCircle
        : Lightning

  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700">
      <Icon className="h-3.5 w-3.5 text-teal-700" weight="fill" aria-hidden="true" />
      {project.status}
    </span>
  )
}

function ProjectActions({ project }: { project: Project }) {
  const walkthroughHref = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    `Walkthrough request - ${project.title}`,
  )}`

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
      {project.liveUrl && (
        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate-950 transition-colors hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600"
        >
          Live product
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            weight="bold"
          />
        </Link>
      )}
      {project.githubUrl && (
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-950 transition-colors hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600"
        >
          <GithubLogo className="h-4 w-4" weight="bold" />
          Repository
        </Link>
      )}
      <Link
        href={walkthroughHref}
        className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 transition-colors hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600"
      >
        Request walkthrough
        <ArrowUpRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          weight="bold"
        />
      </Link>
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      data-project-presentation={project.presentation}
      data-project-tier={project.presentation === 'flagship' ? 'featured' : 'supporting'}
      className="group flex min-w-0 flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_8px_30px_-20px_rgba(15,23,42,0.28)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_50px_-28px_rgba(15,23,42,0.3)]"
    >
      <div
        data-project-image
        className="relative aspect-[16/9] overflow-hidden border-b border-slate-200 bg-[#e8f0f1]"
      >
        {project.image && (
          <Image
            src={project.image}
            alt={`${project.title} product interface`}
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 44vw"
            className="object-contain transition-transform duration-500 group-hover:scale-[1.025]"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-5 sm:px-8 sm:pb-8 sm:pt-6">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
            {project.category}
          </span>
          <Status project={project} />
        </div>

        <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-display text-[clamp(1.75rem,2.4vw,2.25rem)] font-semibold leading-tight tracking-[-0.035em] text-slate-950">
            {project.title}
          </h3>
          <span className="text-xs font-medium text-slate-500">{project.year}</span>
        </div>
        <p className="mt-3 text-[0.95rem] leading-7 text-slate-600">{project.description}</p>

        {project.role && (
          <p className="mt-5 border-l-2 border-teal-500 pl-3 text-sm font-medium leading-6 text-slate-800">
            {project.role}
          </p>
        )}

        <div className="mt-6 border-t border-slate-100 pt-5">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
            Selected contributions
          </p>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-700">
            {project.features.slice(0, FEATURE_LIMIT).map((feature) => (
              <li key={feature} className="flex gap-2.5">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {project.outcome && (
          <div className="mt-6 rounded-xl border border-teal-100 bg-[#f1f8f6] px-4 py-3.5">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-teal-800">
              Outcome
            </p>
            <p className="mt-1.5 text-sm leading-6 text-slate-700">{project.outcome}</p>
          </div>
        )}

        <ul className="mt-6 flex flex-wrap gap-1.5" aria-label={`${project.title} technologies`}>
          {project.tech.slice(0, TECH_LIMIT).map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
            >
              {tech}
            </li>
          ))}
          {project.tech.length > TECH_LIMIT && (
            <li className="px-1 py-1 text-xs font-medium text-slate-500">
              +{project.tech.length - TECH_LIMIT} more
            </li>
          )}
        </ul>

        <div className="mt-auto border-t border-slate-100 pt-6">
          <ProjectActions project={project} />
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  const featuredProjects = projects.filter((project) => project.presentation === 'flagship')
  const supportingProjects = projects.filter((project) => project.presentation !== 'flagship')

  return (
    <section id="projects" className="scroll-mt-24 overflow-x-hidden bg-white py-20 lg:py-24">
      <div className="page-shell">
        <div className="grid gap-5 border-b border-slate-200 pb-9 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
              Selected work
            </p>
            <h2 className="font-display max-w-[16ch] text-[clamp(2.35rem,4vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-slate-950">
              Work built for real operating conditions.
            </h2>
          </div>
          <p className="max-w-[48ch] text-base leading-7 text-slate-600 lg:col-span-4">
            Production products and focused systems across industrial inspection, creative
            automation, and agriculture.
          </p>
        </div>

        <div className="mb-6 mt-10 flex items-center gap-4">
          <h3 className="font-display text-xl font-semibold tracking-[-0.025em] text-slate-950">
            Featured projects
          </h3>
          <span className="h-px flex-1 bg-slate-200" aria-hidden="true" />
          <span className="text-xs font-medium text-slate-500">01 / 02</span>
        </div>
        <div data-featured-projects className="grid gap-6 lg:grid-cols-2 lg:gap-7">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {supportingProjects.length > 0 && (
          <div className="mt-14">
            <div className="mb-6 flex items-center gap-4">
              <h3 className="font-display text-xl font-semibold tracking-[-0.025em] text-slate-950">
                Additional systems
              </h3>
              <span className="h-px flex-1 bg-slate-200" aria-hidden="true" />
              <span className="text-xs font-medium text-slate-500">03 / 04</span>
            </div>
            <div data-supporting-projects className="grid gap-6 lg:grid-cols-2 lg:gap-7">
              {supportingProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index + featuredProjects.length}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
