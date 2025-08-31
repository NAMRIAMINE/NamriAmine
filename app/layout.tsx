import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/app/globals.css'
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
