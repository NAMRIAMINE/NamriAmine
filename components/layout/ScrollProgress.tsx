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
    <div className="fixed left-0 right-0 top-0 z-50 h-px bg-transparent">
      <div
        ref={barRef}
        className="h-full origin-left bg-[linear-gradient(90deg,#0f172a_0%,#0d9488_55%,#2dd4bf_100%)] shadow-[0_0_18px_rgba(45,212,191,0.6)] will-change-transform"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  )
}
