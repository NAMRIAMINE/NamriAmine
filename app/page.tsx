// app/page.tsx

import dynamic from 'next/dynamic'
import Script from 'next/script'
import { Footer } from '@/components/layout/Footer'
import { Navigation } from '@/components/layout/Navigation'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { About } from '@/components/sections/About'
import { Hero } from '@/components/sections/Hero'

const Projects = dynamic(() =>
  import('@/components/sections/Projects').then((mod) => ({ default: mod.Projects })),
)
const Skills = dynamic(() =>
  import('@/components/sections/Skills').then((mod) => ({ default: mod.Skills })),
)
const Contact = dynamic(() =>
  import('@/components/sections/Contact').then((mod) => ({ default: mod.Contact })),
)

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <ScrollProgress />
      <main id="main-content" className="pt-16">
        <Script id="ld-json-person" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Namri Amine',
            url: process.env.NEXT_PUBLIC_SITE_URL || 'https://namri-amine.vercel.app',
            jobTitle: 'Full Stack Developer',
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
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
