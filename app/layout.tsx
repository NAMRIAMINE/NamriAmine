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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0b12' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://namri-amine.vercel.app'),
  title:
    'Namri Amine - Senior Full-Stack Developer | AI Platforms, Geospatial SaaS, Next.js, FastAPI',
  description:
    'Senior Full-Stack Developer with 6+ years shipping AI pipelines, geospatial SaaS, and industrial inspection platforms. Next.js, TypeScript, FastAPI, YOLOv8, MapLibreGL. Based in Casablanca, Morocco.',
  keywords:
    'Senior Full Stack Developer, AI Platforms, Geospatial SaaS, Industrial Inspection, Next.js, FastAPI, TypeScript, React, YOLOv8, Computer Vision, Casablanca, Morocco, Remote Developer',
  authors: [{ name: 'Namri Amine', url: 'https://linkedin.com/in/namriamine' }],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Namri Amine - Senior Full-Stack Developer',
    description:
      'Shipping AI, geospatial, and industrial inspection platforms with Next.js, TypeScript, and FastAPI.',
    url: '/',
    siteName: 'Namri Amine Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Namri Amine - Senior Full-Stack Developer',
    description:
      'Shipping AI, geospatial, and industrial inspection platforms with Next.js, TypeScript, and FastAPI.',
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Link
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </Link>
        <div className="min-h-dvh w-full relative bg-white dark:bg-[#020617]">
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 block dark:hidden"
            style={{
              background: 'radial-gradient(125% 125% at 50% 10%, #fff 40%, #475569 100%)',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 hidden dark:block"
            style={{
              backgroundImage:
                'radial-gradient(circle 500px at 50% 300px, rgba(16,185,129,0.35), transparent)',
            }}
          />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative z-10">{children}</div>
          </ThemeProvider>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
