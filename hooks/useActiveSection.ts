// app/hooks/useActiveSection.ts
'use client'

import { useEffect } from 'react'
import { usePortfolioStore } from '@/store/usePortfolioStore'

const sections = ['home', 'about', 'projects', 'skills', 'contact']
const SCROLL_DETECTION_OFFSET = 100
const SCROLL_TOP_THRESHOLD = 400

export function useActiveSection() {
  const { setActiveSection, setShowScrollTop } = usePortfolioStore()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + SCROLL_DETECTION_OFFSET
      setShowScrollTop(window.scrollY > SCROLL_TOP_THRESHOLD)

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [setActiveSection, setShowScrollTop])
}
