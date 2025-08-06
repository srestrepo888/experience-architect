import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import ElegantTexture from './ElegantTexture'

interface GradientBackgroundProps {
  children: React.ReactNode
  className?: string
  variant?: 'subtle' | 'elegant' | 'dramatic' | 'warm' | 'cool'
  animated?: boolean
}

export function GradientBackground({ 
  children, 
  className, 
  variant = 'subtle',
  animated = false 
}: GradientBackgroundProps) {
  const gradients = {
    subtle: 'bg-gradient-to-br from-background via-background/95 to-muted/30',
    elegant: 'bg-gradient-to-br from-background via-card/50 to-muted/20',
    dramatic: 'bg-gradient-to-br from-background via-foreground/5 to-foreground/10',
    warm: 'bg-gradient-to-br from-background via-orange-50/20 to-amber-50/10',
    cool: 'bg-gradient-to-br from-background via-blue-50/20 to-indigo-50/10'
  }

  const animatedGradients = {
    subtle: 'bg-gradient-to-br from-background via-background/95 to-muted/30 animate-gradient',
    elegant: 'bg-gradient-to-br from-background via-card/50 to-muted/20 animate-gradient',
    dramatic: 'bg-gradient-to-br from-background via-foreground/5 to-foreground/10 animate-gradient',
    warm: 'bg-gradient-to-br from-background via-orange-50/20 to-amber-50/10 animate-gradient',
    cool: 'bg-gradient-to-br from-background via-blue-50/20 to-indigo-50/10 animate-gradient'
  }

  return (
    <motion.div
      className={cn(
        animated ? animatedGradients[variant] : gradients[variant],
        'relative overflow-hidden',
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

interface GlowEffectProps {
  children: React.ReactNode
  className?: string
  color?: 'primary' | 'secondary' | 'accent' | 'custom'
  intensity?: 'soft' | 'medium' | 'strong'
  customColor?: string
  animated?: boolean
}

export function GlowEffect({ 
  children, 
  className, 
  color = 'primary',
  intensity = 'medium',
  customColor,
  animated = false 
}: GlowEffectProps) {
  const glowColors = {
    primary: 'shadow-primary/20',
    secondary: 'shadow-secondary/20',
    accent: 'shadow-accent/20',
    custom: customColor ? `shadow-[${customColor}]` : 'shadow-primary/20'
  }

  const intensities = {
    soft: 'shadow-lg',
    medium: 'shadow-xl',
    strong: 'shadow-2xl'
  }

  const animatedClasses = animated ? 'animate-pulse' : ''

  return (
    <motion.div
      className={cn(
        intensities[intensity],
        glowColors[color],
        animatedClasses,
        'transition-all duration-500',
        className
      )}
      whileHover={animated ? { scale: 1.02 } : {}}
    >
      {children}
    </motion.div>
  )
}

interface GlassEffectProps {
  children: React.ReactNode
  className?: string
  blur?: 'sm' | 'md' | 'lg' | 'xl'
  opacity?: 'light' | 'medium' | 'heavy'
  border?: boolean
}

export function GlassEffect({ 
  children, 
  className, 
  blur = 'md',
  opacity = 'medium',
  border = true 
}: GlassEffectProps) {
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl'
  }

  const opacityClasses = {
    light: 'bg-background/20',
    medium: 'bg-background/40',
    heavy: 'bg-background/60'
  }

  return (
    <div
      className={cn(
        blurClasses[blur],
        opacityClasses[opacity],
        border && 'border border-border/20',
        'rounded-lg',
        className
      )}
    >
      {children}
    </div>
  )
}

interface NoiseTextureProps {
  className?: string
  opacity?: number
  animated?: boolean
}

export function NoiseTexture({ 
  className, 
  opacity = 0.03,
  animated = false 
}: NoiseTextureProps) {
  const noisePattern = `data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E`

  return (
    <motion.div
      className={cn(
        'absolute inset-0 pointer-events-none',
        animated && 'animate-subtle-float',
        className
      )}
      style={{
        backgroundImage: `url("${noisePattern}")`,
        opacity,
        mixBlendMode: 'multiply'
      }}
    />
  )
}

interface ColorAccentProps {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error'
  position?: 'left' | 'right' | 'top' | 'bottom'
  size?: 'sm' | 'md' | 'lg'
}

export function ColorAccent({ 
  children, 
  className, 
  variant = 'primary',
  position = 'left',
  size = 'md' 
}: ColorAccentProps) {
  const colors = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500'
  }

  const positions = {
    left: 'border-l-4',
    right: 'border-r-4',
    top: 'border-t-4',
    bottom: 'border-b-4'
  }

  const sizes = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6'
  }

  return (
    <div
      className={cn(
        colors[variant],
        positions[position],
        sizes[size],
        'rounded-lg',
        className
      )}
    >
      {children}
    </div>
  )
}

interface ShimmerEffectProps {
  children: React.ReactNode
  className?: string
  duration?: number
}

export function ShimmerEffect({ 
  children, 
  className, 
  duration = 2 
}: ShimmerEffectProps) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      {children}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}

interface FloatingParticlesProps {
  count?: number
  className?: string
  color?: string
  size?: 'sm' | 'md' | 'lg'
}

export function FloatingParticles({ 
  count = 20, 
  className, 
  color = 'hsl(var(--foreground))',
  size = 'md' 
}: FloatingParticlesProps) {
  const sizes = {
    sm: 'w-1 h-1',
    md: 'w-2 h-2',
    lg: 'w-3 h-3'
  }

  return (
    <div className={cn('absolute inset-0 pointer-events-none overflow-hidden', className)}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className={cn(
            sizes[size],
            'absolute rounded-full opacity-20',
            'bg-current'
          )}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            color
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

interface TextGradientProps {
  children: React.ReactNode
  className?: string
  gradient?: 'primary' | 'elegant' | 'dramatic' | 'custom'
  customGradient?: string
}

export function TextGradient({ 
  children, 
  className, 
  gradient = 'primary',
  customGradient 
}: TextGradientProps) {
  const gradients = {
    primary: 'bg-gradient-to-r from-foreground to-foreground/70',
    elegant: 'bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60',
    dramatic: 'bg-gradient-to-r from-foreground via-accent to-foreground',
    custom: customGradient || 'bg-gradient-to-r from-foreground to-foreground/70'
  }

  return (
    <span
      className={cn(
        gradients[gradient],
        'bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </span>
  )
}

interface ElegantBackgroundProps {
  children: React.ReactNode
  className?: string
  variant?: 'subtle' | 'elegant' | 'dramatic'
  textureOpacity?: number
  animated?: boolean
}

export function ElegantBackground({ 
  children, 
  className, 
  variant = 'elegant',
  textureOpacity = 0.04,
  animated = false 
}: ElegantBackgroundProps) {
  const variants = {
    subtle: 'bg-gradient-to-br from-brand-creme_rose_bg via-brand-creme_rose_bg/98 to-brand-creme_rose_bg/95 dark:from-brand-night_deep_bg dark:via-brand-night_subtle_bg dark:to-brand-night_deep_bg',
    elegant: 'bg-gradient-to-br from-brand-creme_rose_bg via-brand-creme_rose_bg/95 to-brand-creme_rose_bg/90 dark:from-brand-night_deep_bg dark:via-brand-night_subtle_bg dark:to-brand-night_deep_bg',
    dramatic: 'bg-gradient-to-br from-brand-creme_rose_bg via-brand-creme_rose_bg/90 to-brand-creme_rose_bg/85 dark:from-brand-night_deep_bg dark:via-brand-night_subtle_bg dark:to-brand-night_deep_bg'
  }

  return (
    <motion.div
      className={cn(
        variants[variant],
        'relative overflow-hidden',
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Elegant texture overlay */}
      <div className="absolute inset-0 text-brand-charcoal_soft_text/8 dark:text-brand-moonstone_light_text/8">
        <ElegantTexture animated={animated} opacity={textureOpacity} />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
} 