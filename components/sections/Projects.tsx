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

const TECH_LIMIT = 6
const SCOPE_LIMIT = 4

function Status({ project }: { project: Project }) {
  const Icon =
    project.status === 'In Development'
      ? Clock
      : project.status === 'Production' || project.status === 'Production Ready'
        ? CheckCircle
        : Lightning

  return (
    <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-600">
      <Icon className="h-4 w-4 text-teal-600" weight="fill" aria-hidden="true" />
      {project.status}
    </span>
  )
}

function ProjectActions({ project }: { project: Project }) {
  const walkthroughHref = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    `Walkthrough request - ${project.title}`,
  )}`

  return (
    <div className="flex flex-wrap gap-3">
      {project.liveUrl && (
        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex h-11 items-center gap-2 rounded-full bg-slate-950 px-5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
        >
          Live product
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            weight="bold"
          />
        </Link>
      )}
      {project.githubUrl && (
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center gap-2 rounded-full border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-800 transition-colors duration-300 hover:border-teal-400 hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
        >
          <GithubLogo className="h-4 w-4" weight="bold" />
          Repository
        </Link>
      )}
      <Link
        href={walkthroughHref}
        className="inline-flex h-11 items-center gap-2 px-1 text-sm font-semibold text-slate-600 transition-colors duration-300 hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
      >
        Request walkthrough
        <ArrowUpRight className="h-4 w-4" weight="bold" />
      </Link>
    </div>
  )
}

function ProjectImage({
  project,
  priority = false,
  eager = false,
  sizes,
}: {
  project: Project
  priority?: boolean
  eager?: boolean
  sizes: string
}) {
  return (
    <div
      data-project-image
      className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[#e9f0f3] ring-1 ring-slate-200/80"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-10 flex h-10 items-center gap-1.5 border-b border-white/70 bg-white/62 px-4"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
      </div>
      {project.image && (
        <Image
          src={project.image}
          alt={`${project.title} product interface`}
          fill
          priority={priority}
          loading={priority ? undefined : eager ? 'eager' : 'lazy'}
          sizes={sizes}
          className="object-contain px-4 pb-4 pt-12 sm:px-7 sm:pb-7 sm:pt-14"
        />
      )}
    </div>
  )
}

function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-slate-200 pb-5">
      <Status project={project} />
      <span className="text-sm text-slate-500">{project.year}</span>
      <span className="text-sm text-slate-500">{project.category}</span>
    </div>
  )
}

function FlagshipCase({ project, reverse }: { project: Project; reverse: boolean }) {
  return (
    <article
      data-project-presentation="flagship"
      className="border-t border-slate-200 py-14 first:border-t-0 first:pt-0 lg:py-20"
    >
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <div className={reverse ? 'lg:order-2 lg:col-span-7' : 'lg:col-span-7'}>
          <ProjectImage
            project={project}
            priority={project.id === 'indus-inspection'}
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
        </div>

        <div className={reverse ? 'lg:order-1 lg:col-span-5' : 'lg:col-span-5'}>
          <ProjectMeta project={project} />
          <h3 className="font-display mt-7 text-[clamp(2.5rem,5vw,4.6rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-slate-950">
            {project.title}
          </h3>
          <p className="mt-5 text-lg leading-8 text-slate-600">{project.description}</p>

          {project.role && (
            <div className="mt-7 border-l-2 border-teal-500 pl-4">
              <p className="text-xs font-semibold text-slate-500">Role</p>
              <p className="mt-1 text-sm leading-6 text-slate-800">{project.role}</p>
            </div>
          )}

          <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div>
              <p className="text-xs font-semibold text-slate-500">Selected scope</p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                {(project.scope ?? project.features).slice(0, SCOPE_LIMIT).map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500">Outcome</p>
              <p className="mt-3 text-sm leading-6 text-slate-700">{project.outcome}</p>
            </div>
          </div>

          <p className="mt-7 text-sm leading-7 text-slate-500">
            {project.tech.slice(0, TECH_LIMIT).join(' · ')}
          </p>
          <div className="mt-8">
            <ProjectActions project={project} />
          </div>
        </div>
      </div>
    </article>
  )
}

function SupportingCase({ project }: { project: Project }) {
  return (
    <article
      data-project-presentation={project.presentation}
      data-project-tier="supporting"
      className="flex h-full flex-col border-t border-slate-200 pt-8"
    >
      <ProjectImage project={project} eager sizes="(max-width: 1024px) 100vw, 44vw" />
      <div className="flex flex-1 flex-col pt-7">
        <ProjectMeta project={project} />
        <h3 className="font-display mt-6 text-[clamp(2.25rem,4vw,3.5rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-slate-950">
          {project.title}
        </h3>
        <p className="mt-4 text-base leading-7 text-slate-600">{project.description}</p>
        {project.role && (
          <p className="mt-5 border-l-2 border-teal-500 pl-4 text-sm leading-6 text-slate-700">
            {project.role}
          </p>
        )}
        <p className="mt-6 text-sm leading-7 text-slate-500">
          {project.tech.slice(0, TECH_LIMIT).join(' · ')}
        </p>
        <div className="mt-auto pt-7">
          <ProjectActions project={project} />
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  const flagshipProjects = projects.filter((project) => project.presentation === 'flagship')
  const supportingProjects = projects.filter((project) => project.presentation !== 'flagship')

  return (
    <section id="projects" className="section-space scroll-mt-24 overflow-x-hidden bg-white">
      <div className="page-shell">
        <div className="grid gap-6 border-b border-slate-200 pb-12 lg:grid-cols-12 lg:items-end">
          <h2 className="font-display text-[clamp(2.75rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-slate-950 lg:col-span-8">
            Work built for real operating conditions.
          </h2>
          <p className="max-w-[48ch] text-lg leading-8 text-slate-600 lg:col-span-4">
            Product ownership from interface and APIs through background jobs, data, deployment, and
            the specialist workflows each system required.
          </p>
        </div>

        <div className="pt-14 lg:pt-20">
          {flagshipProjects.map((project, index) => (
            <FlagshipCase key={project.id} project={project} reverse={index % 2 === 1} />
          ))}
        </div>

        {supportingProjects.length > 0 && (
          <div className="mt-16 border-t border-slate-200 pt-10 lg:mt-20 lg:pt-12">
            <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
              <h3 className="font-display text-3xl font-semibold tracking-[-0.03em] text-slate-950 lg:col-span-7 lg:text-4xl">
                Additional systems
              </h3>
              <p className="max-w-[48ch] text-base leading-7 text-slate-600 lg:col-span-5">
                Earlier and adjacent product work showing the same full-stack delivery range across
                industrial and agriculture domains.
              </p>
            </div>
            <div data-supporting-projects className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-10">
              {supportingProjects.map((project) => (
                <SupportingCase key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
