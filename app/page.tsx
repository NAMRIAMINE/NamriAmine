// app/page.tsx

import Script from 'next/script'
import { Footer } from '@/components/layout/Footer'
import { Navigation } from '@/components/layout/Navigation'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
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
            knowsAbout: ['React', 'Next.js', 'TypeScript', 'Node.js', 'TailwindCSS'],
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
