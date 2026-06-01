'use client'

import { useEffect } from 'react'
import { usePortfolioStore } from '@/store/usePortfolioStore'

const sections = ['home', 'about', 'projects', 'skills', 'contact']
const SCROLL_TOP_THRESHOLD = 400

export function useActiveSection() {
  const { setActiveSection, setShowScrollTop } = usePortfolioStore()

  useEffect(() => {
    const ratios = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio)
        }
        let best = ''
        let bestRatio = 0
        for (const id of sections) {
          const ratio = ratios.get(id) ?? 0
          if (ratio > bestRatio) {
            bestRatio = ratio
            best = id
          }
        }
        if (best) setActiveSection(best)
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: Array.from({ length: 21 }, (_, i) => i / 20),
      },
    )

    for (const id of sections) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    let rafId = 0
    const handleScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        setShowScrollTop(window.scrollY > SCROLL_TOP_THRESHOLD)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [setActiveSection, setShowScrollTop])
}
