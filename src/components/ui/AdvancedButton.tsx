import React from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AdvancedButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'elegant' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  onClick?: () => void
  disabled?: boolean
  href?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  loading?: boolean
  fullWidth?: boolean
}

export function AdvancedButton({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  disabled = false,
  href,
  icon,
  iconPosition = 'right',
  loading = false,
  fullWidth = false
}: AdvancedButtonProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"])
  const springConfig = { damping: 15, stiffness: 150 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseXFromCenter = event.clientX - centerX
    const mouseYFromCenter = event.clientY - centerY
    mouseX.set(mouseXFromCenter / (rect.width / 2))
    mouseY.set(mouseYFromCenter / (rect.height / 2))
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const variantClasses = {
    primary: 'bg-foreground text-background hover:bg-foreground/90 shadow-elegant hover:shadow-dramatic',
    secondary: 'bg-muted text-foreground hover:bg-muted/80 shadow-soft hover:shadow-medium',
    elegant: 'bg-gradient-to-r from-foreground/10 to-foreground/5 text-foreground hover:from-foreground/20 hover:to-foreground/10 border border-foreground/20 shadow-soft hover:shadow-medium',
    ghost: 'bg-transparent text-foreground hover:bg-muted/50 shadow-none hover:shadow-soft',
    outline: 'bg-transparent text-foreground border-2 border-foreground/30 hover:bg-foreground/5 hover:border-foreground/50 shadow-soft hover:shadow-medium'
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm font-light',
    md: 'px-6 py-3 text-base font-light',
    lg: 'px-8 py-4 text-lg font-light',
    xl: 'px-10 py-5 text-xl font-light'
  }

  const baseClasses = cn(
    'relative inline-flex items-center justify-center gap-3 font-elegant rounded-lg transition-all duration-500 ease-out overflow-hidden group',
    'transform-gpu perspective-1000',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  )

  const content = (
    <>
      {loading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-5 h-5 border-2 border-foreground/20 border-t-foreground rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}
      
      <motion.div
        className="relative z-10 flex items-center gap-3"
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(20px)"
        }}
      >
        {icon && iconPosition === 'left' && (
          <motion.div
            className="flex-shrink-0"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {icon}
          </motion.div>
        )}
        
        <motion.span
          initial={{ y: 0 }}
          whileHover={{ y: -1 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>
        
        {icon && iconPosition === 'right' && (
          <motion.div
            className="flex-shrink-0"
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {icon}
          </motion.div>
        )}
      </motion.div>

      {/* Sophisticated background effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent"
        initial={{ y: '-100%' }}
        whileHover={{ y: '100%' }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
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
          y: -2
        }}
        whileTap={{ 
          scale: 0.98,
          y: 0
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={baseClasses}
      onClick={onClick}
      disabled={disabled || loading}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX: springRotateX,
        rotateY: springRotateY
      }}
      whileHover={{ 
        scale: 1.02,
        y: -2
      }}
      whileTap={{ 
        scale: 0.98,
        y: 0
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {content}
    </motion.button>
  )
} 