import React from 'react'
import { cn } from '@/lib/utils'

interface BodyMediumProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elegant' | 'body'
}

interface QuoteProps {
  children: React.ReactNode
  variant?: 'default' | 'large' | 'elegant'
  attribution?: string
  className?: string
}

export function BodyMedium({ children, className, variant = 'default' }: BodyMediumProps) {
  const variantClasses = {
    default: 'text-fluid-base font-body font-normal leading-relaxed',
    elegant: 'text-fluid-base font-elegant font-light leading-relaxed',
    body: 'text-fluid-base font-sans font-normal leading-relaxed'
  }

  return (
    <p className={cn(
      'text-foreground',
      variantClasses[variant],
      className
    )}>
      {children}
    </p>
  )
}

export function Quote({ 
  children, 
  variant = 'default', 
  attribution,
  className 
}: QuoteProps) {
  const variantClasses = {
    default: 'text-fluid-lg font-elegant font-light italic',
    large: 'text-fluid-xl md:text-fluid-2xl font-elegant font-light italic',
    elegant: 'text-fluid-lg font-display font-light italic'
  }

  return (
    <blockquote className={cn(
      'text-muted-foreground leading-relaxed',
      variantClasses[variant],
      className
    )}>
      "{children}"
      {attribution && (
        <footer className="mt-4 text-sm font-body font-normal not-italic text-foreground">
          — {attribution}
        </footer>
      )}
    </blockquote>
  )
}

interface HeadingSmallProps {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
  variant?: 'default' | 'elegant' | 'display'
}

interface CaptionProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elegant'
}

interface OverlineProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elegant'
}

export function HeadingSmall({ children, as = 'h3', className, variant = 'default' }: HeadingSmallProps) {
  const Component = as
  
  const variantClasses = {
    default: 'text-fluid-lg font-display font-light text-foreground leading-tight',
    elegant: 'text-fluid-lg font-elegant font-light text-foreground leading-tight',
    display: 'text-fluid-lg font-display font-light text-foreground leading-tight'
  }

  return (
    <Component className={cn(
      variantClasses[variant],
      className
    )}>
      {children}
    </Component>
  )
}

export function Caption({ children, className, variant = 'default' }: CaptionProps) {
  const variantClasses = {
    default: 'text-sm font-body font-normal text-muted-foreground leading-relaxed',
    elegant: 'text-sm font-elegant font-light text-muted-foreground leading-relaxed'
  }

  return (
    <p className={cn(
      variantClasses[variant],
      className
    )}>
      {children}
    </p>
  )
}

export function Overline({ children, className, variant = 'default' }: OverlineProps) {
  const variantClasses = {
    default: 'text-xs font-body font-medium text-muted-foreground uppercase tracking-wider',
    elegant: 'text-xs font-elegant font-light text-muted-foreground uppercase tracking-widest'
  }

  return (
    <p className={cn(
      variantClasses[variant],
      className
    )}>
      {children}
    </p>
  )
}

// New sophisticated typography components
interface HeadingLargeProps {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3'
  className?: string
  variant?: 'display' | 'elegant' | 'serif'
}

export function HeadingLarge({ children, as = 'h2', className, variant = 'display' }: HeadingLargeProps) {
  const Component = as
  
  const variantClasses = {
    display: 'text-fluid-3xl md:text-fluid-4xl font-display font-light text-foreground leading-tight',
    elegant: 'text-fluid-3xl md:text-fluid-4xl font-elegant font-light text-foreground leading-tight',
    serif: 'text-fluid-3xl md:text-fluid-4xl font-serif font-light text-foreground leading-tight'
  }

  return (
    <Component className={cn(
      variantClasses[variant],
      className
    )}>
      {children}
    </Component>
  )
}

interface HeadingHeroProps {
  children: React.ReactNode
  className?: string
  variant?: 'display' | 'elegant'
}

export function HeadingHero({ children, className, variant = 'display' }: HeadingHeroProps) {
  const variantClasses = {
    display: 'text-fluid-4xl md:text-fluid-5xl font-display font-light text-foreground leading-tight',
    elegant: 'text-fluid-4xl md:text-fluid-5xl font-elegant font-light text-foreground leading-tight'
  }

  return (
    <h1 className={cn(
      variantClasses[variant],
      className
    )}>
      {children}
    </h1>
  )
}

interface BodyLargeProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elegant'
}

export function BodyLarge({ children, className, variant = 'default' }: BodyLargeProps) {
  const variantClasses = {
    default: 'text-fluid-lg font-body font-normal leading-relaxed',
    elegant: 'text-fluid-lg font-elegant font-light leading-relaxed'
  }

  return (
    <p className={cn(
      'text-foreground',
      variantClasses[variant],
      className
    )}>
      {children}
    </p>
  )
}

interface BodySmallProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elegant'
}

export function BodySmall({ children, className, variant = 'default' }: BodySmallProps) {
  const variantClasses = {
    default: 'text-fluid-sm font-body font-normal leading-relaxed',
    elegant: 'text-fluid-sm font-elegant font-light leading-relaxed'
  }

  return (
    <p className={cn(
      'text-foreground',
      variantClasses[variant],
      className
    )}>
      {children}
    </p>
  )
} 