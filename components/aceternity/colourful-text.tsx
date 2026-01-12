'use client'
import { motion } from 'motion/react'
import React from 'react'

const BASE_COLORS = [
  'rgb(59, 130, 246)', // blue-500
  'rgb(147, 51, 234)', // purple-600
  'rgb(236, 72, 153)', // pink-500
  'rgb(34, 197, 94)', // green-500
  'rgb(251, 146, 60)', // orange-400
  'rgb(168, 85, 247)', // purple-500
  'rgb(14, 165, 233)', // sky-500
  'rgb(239, 68, 68)', // red-500
  'rgb(99, 102, 241)', // indigo-500
  'rgb(20, 184, 166)', // teal-500
]

export function ColourfulText({ text }: { text: string }) {
  const [currentColors, setCurrentColors] = React.useState(BASE_COLORS)
  const [count, setCount] = React.useState(0)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    // Use a deterministic shuffle on mount to avoid hydration mismatch
    const initialShuffle = [...BASE_COLORS].sort((a, b) => {
      // Use a deterministic seed based on text length
      const seed = text.length
      return (a.charCodeAt(0) + seed) % 2 === 0 ? 1 : -1
    })
    setCurrentColors(initialShuffle)
  }, [text])

  React.useEffect(() => {
    if (!mounted) return

    const interval = setInterval(() => {
      const shuffled = [...BASE_COLORS].sort(() => Math.random() - 0.5)
      setCurrentColors(shuffled)
      setCount((prev) => prev + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [mounted])

  const chars = React.useMemo(() => text.split(''), [text])

  if (!mounted) {
    // Return a static version during SSR to avoid hydration mismatch
    return (
      <span className="inline-block whitespace-pre font-sans tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        {text}
      </span>
    )
  }

  let position = -1
  return chars.map((char) => (
    <motion.span
      key={`${char}-${count}-${++position}`}
      initial={{
        y: 0,
        color: BASE_COLORS[position % BASE_COLORS.length],
      }}
      animate={{
        color: currentColors[position % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ['blur(0px)', `blur(5px)`, 'blur(0px)'],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: position * 0.05,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ))
}
