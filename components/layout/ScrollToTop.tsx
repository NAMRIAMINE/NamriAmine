// app/components/layout/ScrollToTop.tsx
'use client'

import { ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePortfolioStore } from '@/store/usePortfolioStore'

export function ScrollToTop() {
  const { showScrollTop } = usePortfolioStore()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!showScrollTop) return null

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-50 bg-sky-600 hover:bg-sky-700 text-white shadow-md transition-colors duration-200"
    >
      <ArrowUp className="w-5 h-5" />
    </Button>
  )
}
