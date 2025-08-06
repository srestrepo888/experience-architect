import React from 'react'
import { cn } from '@/lib/utils'
import { DESIGN_SYSTEM } from '@/lib/design-system'

// Layout utility components for sophisticated spacing and layout management

interface StackProps {
  children: React.ReactNode
  spacing?: keyof typeof DESIGN_SYSTEM.layout.stack
  className?: string
  align?: 'start' | 'center' | 'end' | 'stretch'
}

export function Stack({ 
  children, 
  spacing = 'md', 
  className,
  align = 'stretch'
}: StackProps) {
  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch'
  }

  return (
    <div className={cn(
      'flex flex-col',
      DESIGN_SYSTEM.layout.stack[spacing],
      alignClasses[align],
      className
    )}>
      {children}
    </div>
  )
}

interface ClusterProps {
  children: React.ReactNode
  spacing?: keyof typeof DESIGN_SYSTEM.layout.cluster
  className?: string
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around'
}

export function Cluster({ 
  children, 
  spacing = 'md', 
  className,
  align = 'center',
  justify = 'start'
}: ClusterProps) {
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
      DESIGN_SYSTEM.layout.cluster[spacing],
      alignClasses[align],
      justifyClasses[justify],
      className
    )}>
      {children}
    </div>
  )
}

interface ContainerProps {
  children: React.ReactNode
  size?: keyof typeof DESIGN_SYSTEM.containers
  padding?: keyof typeof DESIGN_SYSTEM.padding
  className?: string
  center?: boolean
}

export function Container({ 
  children, 
  size = 'content',
  padding = 'section',
  className,
  center = true
}: ContainerProps) {
  return (
    <div className={cn(
      DESIGN_SYSTEM.containers[size],
      DESIGN_SYSTEM.padding[padding],
      center && 'mx-auto',
      className
    )}>
      {children}
    </div>
  )
}

interface SpacerProps {
  size?: keyof typeof DESIGN_SYSTEM.margins.top
  axis?: 'horizontal' | 'vertical'
  className?: string
}

export function Spacer({ 
  size = 'md', 
  axis = 'vertical',
  className 
}: SpacerProps) {
  const sizeClasses = DESIGN_SYSTEM.margins.top[size]
  
  const axisClasses = {
    horizontal: 'w-full',
    vertical: 'h-full'
  }

  return (
    <div className={cn(
      axisClasses[axis],
      axis === 'vertical' ? sizeClasses : `ml-${sizeClasses.split('-')[1]}`,
      className
    )} />
  )
}

interface SectionProps {
  children: React.ReactNode
  spacing?: keyof typeof DESIGN_SYSTEM.sections.spacing
  background?: 'none' | 'subtle' | 'muted' | 'gradient' | 'pattern'
  className?: string
  id?: string
}

export function Section({ 
  children, 
  spacing = 'normal',
  background = 'none',
  className,
  id
}: SectionProps) {
  const backgroundClasses = {
    none: '',
    subtle: 'bg-secondary/30 backdrop-blur-sm',
    muted: 'bg-muted/50 backdrop-blur-sm',
    gradient: 'bg-gradient-to-br from-background via-secondary/20 to-background',
    pattern: 'bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]'
  }

  return (
    <section 
      id={id}
      className={cn(
        'relative overflow-hidden',
        DESIGN_SYSTEM.sections.spacing[spacing],
        backgroundClasses[background],
        className
      )}
    >
      {children}
    </section>
  )
} 