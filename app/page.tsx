import dynamic from 'next/dynamic'
import Script from 'next/script'
import { Footer } from '@/components/layout/Footer'
import { Navigation } from '@/components/layout/Navigation'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { About } from '@/components/sections/About'
import { Hero } from '@/components/sections/Hero'

function SectionFallback({ id, tone = 'tint' }: { id: string; tone?: 'plain' | 'tint' }) {
  const sectionTone = tone === 'plain' ? 'bg-white' : 'bg-[#f4f8fc]'
  const blockTone = tone === 'plain' ? 'bg-slate-100/85' : 'bg-white/85'

  return (
    <section id={id} aria-hidden="true" className={`${sectionTone} section-space`}>
      <div className="page-shell animate-pulse">
        <div className={`h-4 w-36 rounded-full ${blockTone}`} />
        <div className={`mt-6 h-14 max-w-4xl rounded-[2rem] ${blockTone}`} />
        <div className={`mt-4 h-24 max-w-3xl rounded-[2rem] ${blockTone}`} />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {['primary', 'secondary', 'tertiary'].map((slot) => (
            <div key={`${id}-${slot}`} className={`h-72 rounded-[2.25rem] ${blockTone}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

const Projects = dynamic(
  () => import('@/components/sections/Projects').then((mod) => ({ default: mod.Projects })),
  { loading: () => <SectionFallback id="projects-loading" tone="plain" /> },
)
const Skills = dynamic(
  () => import('@/components/sections/Skills').then((mod) => ({ default: mod.Skills })),
  { loading: () => <SectionFallback id="skills-loading" /> },
)
const Contact = dynamic(
  () => import('@/components/sections/Contact').then((mod) => ({ default: mod.Contact })),
  { loading: () => <SectionFallback id="contact-loading" tone="plain" /> },
)

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <ScrollProgress />
      <main id="main-content" tabIndex={-1} className="w-full max-w-full overflow-x-hidden">
        <Script id="ld-json-person" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Namri Amine',
            url: process.env.NEXT_PUBLIC_SITE_URL || 'https://namri-amine.vercel.app',
            jobTitle: 'Senior Full-Stack Developer',
            sameAs: ['https://linkedin.com/in/namriamine', 'https://github.com/namriamine'],
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Casablanca',
              addressCountry: 'MA',
            },
            knowsAbout: [
              'React',
              'Next.js',
              'TypeScript',
              'Node.js',
              'TailwindCSS',
              'Python',
              'FastAPI',
              'AI Pipelines',
              'Computer Vision',
              'Geospatial SaaS',
              'Industrial Inspection',
            ],
          })}
        </Script>
        <Script id="ld-json-website" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Namri Amine Portfolio',
            url: process.env.NEXT_PUBLIC_SITE_URL || 'https://namri-amine.vercel.app',
          })}
        </Script>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
