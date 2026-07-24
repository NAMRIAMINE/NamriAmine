import {
  ArrowsClockwise,
  ArrowsLeftRight,
  CirclesThreePlus,
  Code,
  Devices,
  GlobeHemisphereWest,
  PlugsConnected,
  Robot,
  Stack,
} from '@phosphor-icons/react/dist/ssr'
import type { ElementType } from 'react'
import {
  SiBetterauth,
  SiBunnydotnet,
  SiCelery,
  SiDocker,
  SiElectron,
  SiExpo,
  SiExpress,
  SiFastapi,
  SiGithub,
  SiGithubactions,
  SiGooglegemini,
  SiMaplibre,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOnnx,
  SiOpencv,
  SiPostgresql,
  SiPrisma,
  SiPytest,
  SiPython,
  SiReact,
  SiRedis,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVitest,
  SiYolo,
} from 'react-icons/si'
import { skillCategories } from '@/data/skills'

const CATEGORY_SUMMARIES: Record<string, string> = {
  coreWeb: 'Interfaces, state, component systems, and responsive product delivery.',
  backendData: 'APIs, relational data, caching, services, and integration boundaries.',
  productSystems: 'Auth, queues, realtime updates, deployment, and production infrastructure.',
  appliedAI: 'Computer vision, model runtimes, map interfaces, and geospatial processing.',
  mobileDesktop: 'Mobile and desktop surfaces when the product extends beyond the browser.',
  testingDelivery: 'Automated validation and release practices that keep product work shippable.',
}

const TECH_ICONS: Record<string, ElementType<{ className?: string; 'aria-hidden'?: boolean }>> = {
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  TypeScript: SiTypescript,
  TailwindCSS: SiTailwindcss,
  'Shadcn UI': SiShadcnui,
  Zustand: CirclesThreePlus,
  'react-konva': Code,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  FastAPI: SiFastapi,
  Python: SiPython,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Redis: SiRedis,
  Prisma: SiPrisma,
  Supabase: SiSupabase,
  'REST APIs': PlugsConnected,
  'Better Auth': SiBetterauth,
  'BullMQ Pro': ArrowsClockwise,
  Celery: SiCelery,
  'SSE / WebSockets': ArrowsLeftRight,
  Docker: SiDocker,
  Vercel: SiVercel,
  'GitHub Actions': SiGithubactions,
  YOLOv8: SiYolo,
  'ONNX Runtime': SiOnnx,
  OpenCV: SiOpencv,
  'Google Gemini SDK': SiGooglegemini,
  'AI Pipelines': Robot,
  MapLibreGL: SiMaplibre,
  PyProj: GlobeHemisphereWest,
  'React Native': Devices,
  Expo: SiExpo,
  Electron: SiElectron,
  Vitest: SiVitest,
  pytest: SiPytest,
  Playwright: Code,
  'Git/GitHub': SiGithub,
  'Bunny CDN': SiBunnydotnet,
}

const MARQUEE_ITEMS = [
  'React.js',
  'Next.js',
  'TypeScript',
  'Node.js',
  'FastAPI',
  'PostgreSQL',
  'Google Gemini SDK',
  'MapLibreGL',
]

function TechIcon({ name, className = 'h-4 w-4' }: { name: string; className?: string }) {
  const Icon = TECH_ICONS[name] ?? Stack
  return <Icon className={className} aria-hidden />
}

function TechnologyRail() {
  const items = [
    ...MARQUEE_ITEMS.map((item) => ({ id: `${item}-lead`, label: item, hidden: false })),
    ...MARQUEE_ITEMS.map((item) => ({ id: `${item}-trail`, label: item, hidden: true })),
  ]

  return (
    <section
      className="mt-12 overflow-hidden border-y border-slate-200 py-4"
      aria-label="Primary technologies"
    >
      <div className="marquee-track flex w-max gap-9 pr-9">
        {items.map((item) => (
          <span
            key={item.id}
            aria-hidden={item.hidden || undefined}
            className="inline-flex items-center gap-2.5 whitespace-nowrap text-sm font-semibold text-slate-700"
          >
            <TechIcon name={item.label} className="h-5 w-5 text-teal-600" />
            {item.label}
          </span>
        ))}
      </div>
    </section>
  )
}

export function Skills() {
  const categories = Object.entries(skillCategories)

  return (
    <section id="skills" className="section-space scroll-mt-24 bg-white">
      <div className="page-shell">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="font-display text-[clamp(2.35rem,4vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-slate-950 lg:col-span-8">
            Broad enough to own the product, deep where it matters.
          </h2>
          <p className="max-w-[48ch] text-lg leading-8 text-slate-600 lg:col-span-4">
            JavaScript product engineering first, with backend, infrastructure, AI integrations,
            mobile, and desktop capabilities available when the product requires them.
          </p>
        </div>

        <TechnologyRail />

        <div className="mt-14 grid lg:grid-cols-2 lg:gap-x-14">
          {categories.map(([key, category]) => (
            <article key={key} className="border-t border-slate-200 py-8 lg:py-10">
              <div className="grid gap-5 sm:grid-cols-[190px_minmax(0,1fr)]">
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">{category.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{CATEGORY_SUMMARIES[key]}</p>
                </div>
                <ul className="flex flex-wrap content-start gap-x-5 gap-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-700"
                      title={`${skill.years} experience`}
                    >
                      <TechIcon name={skill.name} className="h-4 w-4 text-teal-600" />
                      <span>{skill.name}</span>
                      <span className="font-mono text-[11px] text-slate-400">{skill.years}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
