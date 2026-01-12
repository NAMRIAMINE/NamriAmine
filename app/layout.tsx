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
  title: 'Namri Amine - Full Stack Developer | React, Next.js, TypeScript',
  description:
    'Experienced Full Stack Developer with 5+ years in React, Next.js, TypeScript, and Node.js. Building scalable applications for agriculture, industry, and web platforms. Based in Casablanca, Morocco.',
  keywords:
    'Full Stack Developer, React Developer, Next.js Developer, TypeScript, Node.js, JavaScript, Casablanca, Morocco, Remote Developer',
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
    title: 'Namri Amine - Full Stack Developer',
    description: 'Building scalable applications with React, Next.js, TypeScript, and Node.js',
    url: '/',
    siteName: 'Namri Amine Portfolio',
    type: 'website',
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
            className="pointer-events-none fixed inset-0 z-0 block dark:hidden"
            style={{
              background: 'radial-gradient(125% 125% at 50% 10%, #fff 40%, #475569 100%)',
            }}
          />
          <div
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
            <div id="main-content" tabIndex={-1} className="relative z-10">
              {children}
            </div>
          </ThemeProvider>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
