import React from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FadeInUpProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function FadeInUp({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  className
}: FadeInUpProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  )
}

interface ScaleInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function ScaleIn({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  className
}: ScaleInProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  )
}

interface SlideInLeftProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function SlideInLeft({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  className
}: SlideInLeftProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: -60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  )
}

interface SlideInRightProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function SlideInRight({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  className
}: SlideInRightProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxSectionProps {
  children: React.ReactNode
  speed?: number
  className?: string
  offset?: number
}

export function ParallaxSection({ 
  children, 
  speed = 0.5, 
  className,
  offset = 0 
}: ParallaxSectionProps) {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [offset, offset - 200 * speed])
  const springY = useSpring(y, { damping: 20, stiffness: 100 })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y: springY }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: React.ReactNode
  staggerDelay?: number
  className?: string
}

export function StaggerContainer({ 
  children, 
  staggerDelay = 0.1, 
  className
}: StaggerContainerProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: React.ReactNode
  className?: string
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  duration?: number
  delay?: number
}

export function FloatingElement({ 
  children, 
  className, 
  duration = 3, 
  delay = 0 
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-10, 10, -10]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

interface PulseElementProps {
  children: React.ReactNode
  className?: string
  duration?: number
  delay?: number
}

export function PulseElement({ 
  children, 
  className, 
  duration = 2, 
  delay = 0 
}: PulseElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.05, 1]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

interface RevealTextProps {
  children: string
  className?: string
  delay?: number
  duration?: number
}

export function RevealText({ 
  children, 
  className, 
  delay = 0, 
  duration = 0.8
}: RevealTextProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className={cn("overflow-hidden", className)}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: "0%" } : { y: "100%" }}
        transition={{
          duration,
          delay: delay + 0.2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

interface ScrollProgressProps {
  className?: string
  color?: string
  height?: number
}

export function ScrollProgress({ 
  className, 
  color = "hsl(var(--foreground))", 
  height = 2 
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className={cn("fixed top-0 left-0 right-0 z-50 origin-left", className)}
      style={{
        scaleX,
        height,
        backgroundColor: color
      }}
    />
  )
}

interface MagneticElementProps {
  children: React.ReactNode
  className?: string
  strength?: number
}

export function MagneticElement({ 
  children, 
  className, 
  strength = 0.3 
}: MagneticElementProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    
    setPosition({
      x: mouseX * strength,
      y: mouseY * strength
    })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={position}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  )
} 