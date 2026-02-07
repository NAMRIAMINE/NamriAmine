// app/components/layout/ScrollProgress.tsx
'use client'

import { useEffect, useRef } from 'react'

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let rafId = 0

    const updateScrollProgress = () => {
      rafId = requestAnimationFrame(() => {
        if (!barRef.current) return
        const scrollPx = document.documentElement.scrollTop
        const winHeightPx =
          document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = (scrollPx / winHeightPx) * 100
        barRef.current.style.transform = `scaleX(${scrolled / 100})`
      })
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    updateScrollProgress()

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="fixed top-16 left-0 right-0 h-1 bg-muted/20 z-50">
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left transition-transform duration-100 ease-out"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  )
}
