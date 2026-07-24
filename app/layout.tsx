import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/app/globals.css'
import { Analytics } from '@vercel/analytics/next'
import Link from 'next/link'
import { ThemeProvider } from '@/components/theme/theme-provider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const shouldRenderAnalytics = process.env.VERCEL === '1'

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://namri-amine.vercel.app'),
  title:
    'Namri Amine - Senior JavaScript Full-Stack Developer | Next.js, React, TypeScript, Node.js, FastAPI',
  description:
    'Senior JavaScript Full-Stack Developer with 6+ years building production SaaS platforms, APIs, data workflows, and AI-enabled product systems. Next.js, React, TypeScript, Node.js, FastAPI, PostgreSQL, Redis. Based in Casablanca, Morocco.',
  keywords:
    'Senior Full Stack Developer, JavaScript Developer, Next.js, React, TypeScript, Node.js, FastAPI, SaaS Platforms, REST APIs, AI Workflows, GenAI Integration, Casablanca, Morocco, Remote Developer',
  authors: [{ name: 'Namri Amine', url: 'https://linkedin.com/in/namriamine' }],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Namri Amine - Senior JavaScript Full-Stack Developer',
    description:
      'Building production SaaS platforms, APIs, data workflows, and AI-enabled product systems with Next.js, React, TypeScript, Node.js, and FastAPI.',
    url: '/',
    siteName: 'Namri Amine Portfolio',
    images: ['/opengraph-image'],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Namri Amine - Senior JavaScript Full-Stack Developer',
    description:
      'Building production SaaS platforms, APIs, data workflows, and AI-enabled product systems with Next.js, React, TypeScript, Node.js, and FastAPI.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden bg-[var(--page-bg)] font-sans antialiased`}
      >
        <Link
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-teal-600 focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </Link>
        <ThemeProvider>
          <div className="min-h-dvh w-full bg-transparent">{children}</div>
        </ThemeProvider>
        {shouldRenderAnalytics && <Analytics />}
      </body>
    </html>
  )
}
