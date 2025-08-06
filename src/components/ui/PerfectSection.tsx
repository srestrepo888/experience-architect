import React from 'react'
import { cn } from '@/lib/utils'
import { DESIGN_SYSTEM } from '@/lib/design-system'
import { motion } from 'framer-motion'

interface PerfectSectionProps {
  children: React.ReactNode
  id?: string
  spacing?: keyof typeof DESIGN_SYSTEM.sections.spacing
  container?: keyof typeof DESIGN_SYSTEM.containers
  background?: 'none' | 'subtle' | 'muted' | 'gradient' | 'pattern'
  className?: string
  padding?: keyof typeof DESIGN_SYSTEM.padding
}

interface PerfectSectionHeaderProps {
  overline?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  spacing?: 'compact' | 'normal' | 'spacious'
}

export function PerfectSection({ 
  children, 
  id, 
  spacing = 'normal', 
  container = 'content',
  background = 'none',
  className,
  padding = 'section'
}: PerfectSectionProps) {
  const spacingClasses = DESIGN_SYSTEM.sections.spacing[spacing]
  const containerClasses = DESIGN_SYSTEM.containers[container]
  const paddingClasses = DESIGN_SYSTEM.padding[padding]
  
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
        spacingClasses,
        backgroundClasses[background],
        className
      )}
    >
      <div className={cn(
        'relative z-10',
        paddingClasses,
        containerClasses
      )}>
        {children}
      </div>
      
      {/* Enhanced background effects */}
      {background === 'pattern' && (
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat'
          }}
          />
        </div>
      )}
    </section>
  )
}

export function PerfectSectionHeader({ 
  overline, 
  title, 
  subtitle, 
  align = 'left',
  className,
  spacing = 'normal'
}: PerfectSectionHeaderProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  }

  const spacingClasses = {
    compact: DESIGN_SYSTEM.sections.headerMargin,
    normal: DESIGN_SYSTEM.sections.headerMargin,
    spacious: DESIGN_SYSTEM.sections.contentMargin
  }

  return (
    <div className={cn(
      spacingClasses[spacing],
      alignClasses[align],
      align === 'center' && 'max-w-4xl',
      className
    )}>
      {overline && (
        <motion.p 
          className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {overline}
        </motion.p>
      )}
      <motion.h2 
        className="text-fluid-3xl md:text-fluid-4xl lg:text-fluid-5xl font-serif font-medium text-foreground mb-6 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          className="text-fluid-lg md:text-fluid-xl text-muted-foreground max-w-3xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
} 