import React from 'react'
import { cn } from '@/lib/utils'
import { DESIGN_SYSTEM } from '@/lib/design-system'

interface PerfectGridProps {
  children: React.ReactNode
  cols?: 1 | 2 | 3 | 4
  gap?: keyof typeof DESIGN_SYSTEM.grid.gap
  className?: string
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around'
}

export function PerfectGrid({ 
  children, 
  cols = 1, 
  gap = 'md',
  className,
  align = 'stretch',
  justify = 'start'
}: PerfectGridProps) {
  const gapClasses = DESIGN_SYSTEM.grid.gap[gap]
  
  const gridColsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch'
  }

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around'
  }

  return (
    <div className={cn(
      'grid',
      gridColsClasses[cols],
      gapClasses,
      alignClasses[align],
      justifyClasses[justify],
      className
    )}>
      {children}
    </div>
  )
} 