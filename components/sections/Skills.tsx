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

const CATEGORY_LAYOUT = {
  coreWeb: {
    span: 'lg:col-span-7',
    summary: 'Interface systems, composable UX, and modern frontend delivery.',
    shell:
      'bg-[linear-gradient(180deg,rgba(204,251,241,0.62),rgba(255,255,255,0.94))] ring-teal-100/80',
  },
  backendData: {
    span: 'lg:col-span-5',
    summary: 'APIs, services, relational data, caching, and backend control surfaces.',
    shell:
      'bg-[linear-gradient(180deg,rgba(209,250,229,0.62),rgba(255,255,255,0.94))] ring-emerald-100/80',
  },
  productSystems: {
    span: 'lg:col-span-4',
    summary: 'Auth, queues, infrastructure hooks, and production workflow plumbing.',
    shell:
      'bg-[linear-gradient(180deg,rgba(237,233,254,0.64),rgba(255,255,255,0.94))] ring-violet-100/80',
  },
  appliedAI: {
    span: 'lg:col-span-4',
    summary: 'Computer vision, model runtime work, geospatial tooling, and AI-assisted flows.',
    shell:
      'bg-[linear-gradient(180deg,rgba(254,243,199,0.66),rgba(255,255,255,0.94))] ring-amber-100/80',
  },
  mobileDesktop: {
    span: 'lg:col-span-4',
    summary: 'Mobile and desktop delivery when the product needs another surface.',
    shell:
      'bg-[linear-gradient(180deg,rgba(255,228,230,0.72),rgba(255,255,255,0.94))] ring-rose-100/80',
  },
  testingDelivery: {
    span: 'lg:col-span-12',
    summary:
      'Validation, release discipline, and delivery infrastructure that keeps work shippable.',
    shell:
      'bg-[linear-gradient(180deg,rgba(241,245,249,0.94),rgba(255,255,255,0.98))] ring-slate-200/80',
  },
} as const

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

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const duplicated = [
    ...items.map((item) => ({ id: `${item}-lead`, label: item })),
    ...items.map((item) => ({ id: `${item}-trail`, label: item })),
  ]

  return (
    <div className="overflow-hidden rounded-full border border-white/80 bg-white/72 px-4 py-3 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
      <div className={`flex w-max gap-3 ${reverse ? 'marquee-track-reverse' : 'marquee-track'}`}>
        {duplicated.map((item) => (
          <span
            key={item.id}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-4 py-2 text-sm font-medium text-slate-700"
          >
            <TechIcon name={item.label} className="h-4 w-4 text-teal-600" />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}

function SkillPill({ name, years }: { name: string; years: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-[0_12px_34px_rgba(15,23,42,0.04)]"
      title={`${years} experience`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950/4 text-teal-600">
        <TechIcon name={name} className="h-4 w-4" />
      </span>
      <span>{name}</span>
      <span className="font-mono text-[11px] text-slate-500">{years}</span>
    </span>
  )
}

export function Skills() {
  const categories = Object.entries(skillCategories) as Array<
    [keyof typeof CATEGORY_LAYOUT, (typeof skillCategories)[string]]
  >

  return (
    <section id="skills" className="scroll-mt-24 bg-[#f4f8fc] px-4 py-32 sm:px-6 lg:px-8 lg:py-40">
      <div className="page-shell">
        <div className="max-w-3xl">
          <h2 className="font-display max-w-[12ch] text-[clamp(2.8rem,5vw,5rem)] leading-[0.92] tracking-[-0.06em] text-slate-950">
            Every layer of the stack, covered.
          </h2>
          <p className="mt-6 max-w-[60ch] text-lg leading-8 text-slate-600">
            From React interfaces and Node services to computer vision pipelines and mobile delivery.
            Six categories, one working loop.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          <MarqueeRow items={MARQUEE_ITEMS} />
          <MarqueeRow items={[...MARQUEE_ITEMS].reverse()} reverse />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:grid-flow-dense">
          {categories.map(([key, category]) => {
            const layout = CATEGORY_LAYOUT[key]
            const isWide = key === 'testingDelivery'

            return (
              <article
                key={key}
                className={`${layout.span} rounded-[2.2rem] p-5 shadow-[0_26px_80px_rgba(15,23,42,0.06)] ring-1 backdrop-blur-xl ${layout.shell}`}
              >
                <div
                  className={isWide ? 'grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]' : 'space-y-6'}
                >
                  <div>
                    <p className="text-xs font-medium uppercase text-slate-400">
                      {category.title}
                    </p>
                    <h3 className="font-display mt-4 text-[1.75rem] leading-[0.94] tracking-[-0.04em] text-slate-950">
                      {layout.summary}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <SkillPill key={skill.name} name={skill.name} years={skill.years} />
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
