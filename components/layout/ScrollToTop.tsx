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
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-2xl transition-all duration-300 hover:scale-110"
    >
      <ArrowUp className="w-5 h-5" />
    </Button>
  )
}
