'use client'

import { ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePortfolioStore } from '@/store/usePortfolioStore'

export function ScrollToTop() {
  const { showScrollTop } = usePortfolioStore()

  const scrollToTop = () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduced ? 'instant' : 'smooth' })
  }

  if (!showScrollTop) return null

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-sky-600 text-white shadow-[0_18px_45px_rgba(2,132,199,0.22)] transition-colors duration-300 hover:bg-sky-700 sm:bottom-8 sm:right-8"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  )
}
