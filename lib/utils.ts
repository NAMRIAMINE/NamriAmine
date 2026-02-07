import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const SCROLL_OFFSET = 80

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    const elementPosition = element.offsetTop - SCROLL_OFFSET
    window.scrollTo({ top: elementPosition, behavior: 'smooth' })
  }
}
