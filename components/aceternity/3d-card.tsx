'use client'

import type React from 'react'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined)

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const rectRef = useRef<DOMRect | null>(null)
  const rafRef = useRef<number>(0)
  const [isMouseEntered, setIsMouseEntered] = useState(false)

  const isTiltDisabled = () => {
    if (typeof window === 'undefined') return true
    return (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(pointer: coarse)').matches
    )
  }

  useEffect(() => {
    const updateRect = () => {
      if (containerRef.current) {
        rectRef.current = containerRef.current.getBoundingClientRect()
      }
    }
    window.addEventListener('resize', updateRect, { passive: true })
    return () => {
      window.removeEventListener('resize', updateRect)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const handlePointerEnter = () => {
    if (isTiltDisabled()) return
    if (containerRef.current) {
      rectRef.current = containerRef.current.getBoundingClientRect()
    }
    setIsMouseEntered(true)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current || !rectRef.current || isTiltDisabled()) return
    const { clientX, clientY } = e
    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      if (!containerRef.current || !rectRef.current) return
      const { left, top, width, height } = rectRef.current
      const x = (clientX - left - width / 2) / 25
      const y = (clientY - top - height / 2) / 25
      containerRef.current.style.transition = 'none'
      containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`
    })
  }

  const handlePointerLeave = () => {
    if (!containerRef.current) return
    setIsMouseEntered(false)
    cancelAnimationFrame(rafRef.current)
    containerRef.current.style.transition = 'transform 0.5s ease'
    containerRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)'
  }

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn('py-20 flex items-center justify-center', containerClassName)}
        style={{ perspective: '1000px' }}
      >
        <div
          ref={containerRef}
          onPointerEnter={handlePointerEnter}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          className={cn(
            'flex items-center justify-center relative will-change-transform',
            className,
          )}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  )
}

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]',
        className,
      )}
    >
      {children}
    </div>
  )
}

export const CardItem = ({
  as: Tag = 'div',
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  translateX?: number | string
  translateY?: number | string
  translateZ?: number | string
  rotateX?: number | string
  rotateY?: number | string
  rotateZ?: number | string
  [key: string]: unknown
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isMouseEntered] = useMouseEnter()

  useEffect(() => {
    if (!ref.current) return
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`
    }
  }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ])

  return (
    <Tag ref={ref} className={cn('w-fit transition duration-200 ease-linear', className)} {...rest}>
      {children}
    </Tag>
  )
}

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext)
  if (context === undefined) {
    throw new Error('useMouseEnter must be used within a MouseEnterProvider')
  }
  return context
}
