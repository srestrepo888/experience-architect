import React from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SophisticatedCardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elegant' | 'glass' | 'minimal'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  interactive?: boolean
  onClick?: () => void
  href?: string
  image?: string
  imageAlt?: string
  overlay?: React.ReactNode
  badge?: React.ReactNode
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  border?: boolean
  shadow?: 'none' | 'soft' | 'medium' | 'strong' | 'dramatic'
}

export function SophisticatedCard({
  children,
  className,
  variant = 'default',
  size = 'md',
  interactive = true,
  onClick,
  href,
  image,
  imageAlt,
  overlay,
  badge,
  padding = 'md',
  border = true,
  shadow = 'soft'
}: SophisticatedCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["8deg", "-8deg"])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-8deg", "8deg"])
  const springConfig = { damping: 20, stiffness: 200 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => {
    if (!interactive) return
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseXFromCenter = event.clientX - centerX
    const mouseYFromCenter = event.clientY - centerY
    mouseX.set(mouseXFromCenter / (rect.width / 2))
    mouseY.set(mouseYFromCenter / (rect.height / 2))
  }

  const handleMouseLeave = () => {
    if (!interactive) return
    mouseX.set(0)
    mouseY.set(0)
  }

  const variantClasses = {
    default: 'bg-card text-card-foreground border border-border/50',
    elegant: 'bg-gradient-to-br from-card via-card/95 to-card/90 text-card-foreground border border-border/30',
    glass: 'bg-card/20 backdrop-blur-xl text-card-foreground border border-border/20',
    minimal: 'bg-transparent text-foreground border border-border/10'
  }

  const sizeClasses = {
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-3xl'
  }

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  }

  const shadowClasses = {
    none: '',
    soft: 'shadow-soft',
    medium: 'shadow-medium',
    strong: 'shadow-strong',
    dramatic: 'shadow-dramatic'
  }

  const baseClasses = cn(
    'relative overflow-hidden transition-all duration-700 ease-out group',
    'transform-gpu perspective-1000',
    variantClasses[variant],
    sizeClasses[size],
    paddingClasses[padding],
    shadowClasses[shadow],
    border && 'border',
    !border && 'border-0',
    interactive && 'cursor-pointer',
    className
  )

  const content = (
    <>
      {/* Badge */}
      {badge && (
        <motion.div
          className="absolute top-4 right-4 z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          {badge}
        </motion.div>
      )}

      {/* Image */}
      {image && (
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={image}
            alt={imageAlt || ''}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </motion.div>
      )}

      {/* Overlay */}
      {overlay && (
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute bottom-0 left-0 right-0 p-6">
            {overlay}
          </div>
        </motion.div>
      )}

      {/* Content */}
      <motion.div
        className="relative z-10"
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(30px)"
        }}
      >
        {children}
      </motion.div>

      {/* Sophisticated hover effects */}
      {interactive && (
        <>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-100"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-white/3 via-white/8 to-white/3 opacity-0 group-hover:opacity-100"
            initial={{ y: '-100%' }}
            whileHover={{ y: '100%' }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </>
      )}

      {/* Border glow effect */}
      {interactive && (
        <motion.div
          className="absolute inset-0 rounded-inherit border border-white/10 opacity-0 group-hover:opacity-100"
          initial={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          rotateX: springRotateX,
          rotateY: springRotateY
        }}
        whileHover={{ 
          scale: 1.02,
          y: -4
        }}
        whileTap={{ 
          scale: 0.98,
          y: -2
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.div
      className={baseClasses}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX: springRotateX,
        rotateY: springRotateY
      }}
      whileHover={interactive ? { 
        scale: 1.02,
        y: -4
      } : {}}
      whileTap={interactive ? { 
        scale: 0.98,
        y: -2
      } : {}}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {content}
    </motion.div>
  )
} 