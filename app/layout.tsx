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
  themeColor: '#ffffff',
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50`}>
        <Link
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-sky-600 focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </Link>
        <ThemeProvider>
          <div className="min-h-dvh w-full">{children}</div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
