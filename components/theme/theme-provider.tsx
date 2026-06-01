'use client'

import { MotionConfig } from 'motion/react'
import type * as React from 'react'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
