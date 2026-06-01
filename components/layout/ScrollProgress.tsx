'use client'

import { useEffect, useRef } from 'react'

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        ticking = false
        if (!barRef.current) return
        const scrollTop = document.documentElement.scrollTop
        const maxScroll =
          document.documentElement.scrollHeight - document.documentElement.clientHeight
        if (maxScroll <= 0) {
          barRef.current.style.transform = 'scaleX(1)'
          return
        }
        const progress = Math.min(1, Math.max(0, scrollTop / maxScroll))
        barRef.current.style.transform = `scaleX(${progress})`
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-16 left-0 right-0 h-1 bg-muted/20 z-50">
      <div
        ref={barRef}
        className="h-full bg-sky-500 origin-left will-change-transform"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  )
}
