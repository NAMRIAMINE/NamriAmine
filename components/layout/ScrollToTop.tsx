'use client'

import { ArrowUp } from '@phosphor-icons/react'
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
      className="fixed bottom-6 right-6 z-50 rounded-full border border-white/80 bg-white/86 text-slate-950 shadow-[0_22px_60px_rgba(15,23,42,0.14)] backdrop-blur-xl transition-[background-color,transform,color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-slate-950 hover:text-white active:translate-y-px sm:bottom-8 sm:right-8"
    >
      <ArrowUp className="h-5 w-5" weight="bold" />
    </Button>
  )
}
