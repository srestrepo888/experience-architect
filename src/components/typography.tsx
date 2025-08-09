import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { DESIGN_SYSTEM } from "@/lib/design-system"

// TYPOGRAPHIC HIERARCHY WITH INTENT
// Display/Headings: Cormorant Garamond; Body/UI: Inter
// Fluid scale, tight tracking on displays, generous line-height on body

// Typography Component Base
interface TypographyProps {
  children: React.ReactNode
  className?: string
  as?: any
  [key: string]: any
}

// Display Typography - Cormorant Garamond with tight tracking
export function DisplayLarge({ 
  children, 
  className = "",
  as: Component = "h1",
  ...props 
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-display font-light tracking-tight leading-[1.1]",
        "text-[clamp(4rem,8vw,6rem)]",
        "text-foreground-primary",
        className
      )}
      style={{
        fontFamily: DESIGN_SYSTEM.typography.fonts.display,
        fontWeight: DESIGN_SYSTEM.typography.components.display.fontWeight,
        letterSpacing: DESIGN_SYSTEM.typography.components.display.letterSpacing,
        lineHeight: DESIGN_SYSTEM.typography.components.display.lineHeight,
      }}
      {...props}
    >
      {children}
    </Component>
  )
}

export function DisplayMedium({ 
  children, 
  className = "",
  as: Component = "h2",
  ...props 
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-display font-light tracking-tight leading-[1.2]",
        "text-[clamp(3rem,6vw,4.5rem)]",
        "text-foreground-primary",
        className
      )}
      style={{
        fontFamily: DESIGN_SYSTEM.typography.fonts.display,
        fontWeight: DESIGN_SYSTEM.typography.components.display.fontWeight,
        letterSpacing: DESIGN_SYSTEM.typography.components.display.letterSpacing,
        lineHeight: DESIGN_SYSTEM.typography.components.display.lineHeight,
      }}
      {...props}
    >
      {children}
    </Component>
  )
}

export function DisplaySmall({ 
  children, 
  className = "",
  as: Component = "h3",
  ...props 
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-display font-light tracking-tight leading-[1.2]",
        "text-[clamp(2rem,4vw,3rem)]",
        "text-foreground-primary",
        className
      )}
      style={{
        fontFamily: DESIGN_SYSTEM.typography.fonts.display,
        fontWeight: DESIGN_SYSTEM.typography.components.display.fontWeight,
        letterSpacing: DESIGN_SYSTEM.typography.components.display.letterSpacing,
        lineHeight: DESIGN_SYSTEM.typography.components.display.lineHeight,
      }}
      {...props}
    >
      {children}
    </Component>
  )
}

// Heading Typography - Cormorant Garamond with refined tracking
export function HeadingLarge({ 
  children, 
  className = "",
  as: Component = "h2",
  ...props 
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-display font-normal tracking-tight leading-[1.2]",
        "text-[clamp(1.5rem,3vw,2rem)]",
        "text-foreground-primary",
        className
      )}
      style={{
        fontFamily: DESIGN_SYSTEM.typography.fonts.display,
        fontWeight: DESIGN_SYSTEM.typography.components.heading.fontWeight,
        letterSpacing: DESIGN_SYSTEM.typography.components.heading.letterSpacing,
        lineHeight: DESIGN_SYSTEM.typography.components.heading.lineHeight,
      }}
      {...props}
    >
      {children}
    </Component>
  )
}

export function HeadingMedium({ 
  children, 
  className = "",
  as: Component = "h3",
  ...props 
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-display font-normal tracking-tight leading-[1.3]",
        "text-[clamp(1.25rem,2.5vw,1.5rem)]",
        "text-foreground-primary",
        className
      )}
      style={{
        fontFamily: DESIGN_SYSTEM.typography.fonts.display,
        fontWeight: DESIGN_SYSTEM.typography.components.heading.fontWeight,
        letterSpacing: DESIGN_SYSTEM.typography.components.heading.letterSpacing,
        lineHeight: DESIGN_SYSTEM.typography.components.heading.lineHeight,
      }}
      {...props}
    >
      {children}
    </Component>
  )
}

export function HeadingSmall({ 
  children, 
  className = "",
  as: Component = "h4",
  ...props 
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-display font-normal tracking-tight leading-[1.3]",
        "text-[clamp(1.125rem,2vw,1.25rem)]",
        "text-foreground-primary",
        className
      )}
      style={{
        fontFamily: DESIGN_SYSTEM.typography.fonts.display,
        fontWeight: DESIGN_SYSTEM.typography.components.heading.fontWeight,
        letterSpacing: DESIGN_SYSTEM.typography.components.heading.letterSpacing,
        lineHeight: DESIGN_SYSTEM.typography.components.heading.lineHeight,
      }}
      {...props}
    >
      {children}
    </Component>
  )
}

// Body Typography - Inter with generous line-height
export function BodyLarge({ 
  children, 
  className = "",
  as: Component = "p",
  ...props 
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-body font-normal leading-[1.7]",
        "text-[clamp(1.125rem,1.5vw,1.25rem)]",
        "text-foreground-primary",
        "max-w-[65ch]", // Optimal reading width
        className
      )}
      style={{
        fontFamily: DESIGN_SYSTEM.typography.fonts.body,
        fontWeight: DESIGN_SYSTEM.typography.components.body.fontWeight,
        letterSpacing: DESIGN_SYSTEM.typography.components.body.letterSpacing,
        lineHeight: DESIGN_SYSTEM.typography.components.body.lineHeight,
      }}
      {...props}
    >
      {children}
    </Component>
  )
}

export function BodyMedium({ 
  children, 
  className = "",
  as: Component = "p",
  ...props 
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-body font-normal leading-[1.7]",
        "text-[clamp(1rem,1.25vw,1.125rem)]",
        "text-foreground-primary",
        "max-w-[65ch]", // Optimal reading width
        className
      )}
      style={{
        fontFamily: DESIGN_SYSTEM.typography.fonts.body,
        fontWeight: DESIGN_SYSTEM.typography.components.body.fontWeight,
        letterSpacing: DESIGN_SYSTEM.typography.components.body.letterSpacing,
        lineHeight: DESIGN_SYSTEM.typography.components.body.lineHeight,
      }}
      {...props}
    >
      {children}
    </Component>
  )
}

export function BodySmall({ 
  children, 
  className = "",
  as: Component = "p",
  ...props 
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-body font-normal leading-[1.6]",
        "text-[clamp(0.875rem,1vw,1rem)]",
        "text-foreground-secondary",
        "max-w-[65ch]", // Optimal reading width
        className
      )}
      style={{
        fontFamily: DESIGN_SYSTEM.typography.fonts.body,
        fontWeight: DESIGN_SYSTEM.typography.components.body.fontWeight,
        letterSpacing: DESIGN_SYSTEM.typography.components.body.letterSpacing,
        lineHeight: DESIGN_SYSTEM.typography.components.body.lineHeight,
      }}
      {...props}
    >
      {children}
    </Component>
  )
}

// UI Typography - Inter with refined spacing
export function UILarge({ 
  children, 
  className = "",
  as: Component = "span",
  ...props 
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-sans font-medium tracking-wide leading-[1.5]",
        "text-[clamp(1rem,1.25vw,1.125rem)]",
        "text-foreground-primary",
        className
      )}
      style={{
        fontFamily: DESIGN_SYSTEM.typography.fonts.sans,
        fontWeight: DESIGN_SYSTEM.typography.components.ui.fontWeight,
        letterSpacing: DESIGN_SYSTEM.typography.components.ui.letterSpacing,
        lineHeight: DESIGN_SYSTEM.typography.components.ui.lineHeight,
      }}
      {...props}
    >
      {children}
    </Component>
  )
}

export function UIMedium({ 
  children, 
  className = "",
  as: Component = "span",
  ...props 
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-sans font-medium tracking-wide leading-[1.5]",
        "text-[clamp(0.875rem,1vw,1rem)]",
        "text-foreground-primary",
        className
      )}
      style={{
        fontFamily: DESIGN_SYSTEM.typography.fonts.sans,
        fontWeight: DESIGN_SYSTEM.typography.components.ui.fontWeight,
        letterSpacing: DESIGN_SYSTEM.typography.components.ui.letterSpacing,
        lineHeight: DESIGN_SYSTEM.typography.components.ui.lineHeight,
      }}
      {...props}
    >
      {children}
    </Component>
  )
}

export function UISmall({ 
  children, 
  className = "",
  as: Component = "span",
  ...props 
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-sans font-medium tracking-wide leading-[1.4]",
        "text-[clamp(0.75rem,0.875vw,0.875rem)]",
        "text-foreground-secondary",
        className
      )}
      style={{
        fontFamily: DESIGN_SYSTEM.typography.fonts.sans,
        fontWeight: DESIGN_SYSTEM.typography.components.ui.fontWeight,
        letterSpacing: DESIGN_SYSTEM.typography.components.ui.letterSpacing,
        lineHeight: DESIGN_SYSTEM.typography.components.ui.lineHeight,
      }}
      {...props}
    >
      {children}
    </Component>
  )
}

// Accent Typography Components
export function Overline({ 
  children, 
  className = "",
  as: Component = "span",
  ...props 
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-sans font-medium tracking-[0.2em] uppercase leading-[1.4]",
        "text-[clamp(0.75rem,0.875vw,0.875rem)]",
        "text-foreground-muted",
        className
      )}
      style={{
        fontFamily: DESIGN_SYSTEM.typography.fonts.sans,
        fontWeight: DESIGN_SYSTEM.typography.components.ui.fontWeight,
        letterSpacing: "0.2em",
        lineHeight: "1.4",
      }}
      {...props}
    >
      {children}
    </Component>
  )
}

export function Caption({ 
  children, 
  className = "",
  as: Component = "span",
  ...props 
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-body font-normal leading-[1.5]",
        "text-[clamp(0.75rem,0.875vw,0.875rem)]",
        "text-foreground-muted",
        className
      )}
      style={{
        fontFamily: DESIGN_SYSTEM.typography.fonts.body,
        fontWeight: DESIGN_SYSTEM.typography.components.body.fontWeight,
        letterSpacing: DESIGN_SYSTEM.typography.components.body.letterSpacing,
        lineHeight: "1.5",
      }}
      {...props}
    >
      {children}
    </Component>
  )
}

// Quote Component with Attribution
export function Quote({ 
  children, 
  attribution,
  className = "",
  as: Component = "blockquote",
  ...props 
}: TypographyProps & { attribution?: string }) {
  return (
    <Component
      className={cn(
        "relative",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "font-display font-light italic leading-[1.6]",
          "text-[clamp(1.25rem,2vw,1.5rem)]",
          "text-foreground-primary",
          "mb-6",
          "max-w-[65ch]"
        )}
        style={{
          fontFamily: DESIGN_SYSTEM.typography.fonts.display,
          fontWeight: "300",
          letterSpacing: "-0.01em",
          lineHeight: "1.6",
        }}
      >
        "{children}"
      </div>
      {attribution && (
        <div
          className={cn(
            "font-sans font-medium tracking-wide leading-[1.4]",
            "text-[clamp(0.875rem,1vw,1rem)]",
            "text-foreground-muted"
          )}
          style={{
            fontFamily: DESIGN_SYSTEM.typography.fonts.sans,
            fontWeight: "500",
            letterSpacing: "0.02em",
            lineHeight: "1.4",
          }}
        >
          — {attribution}
        </div>
      )}
    </Component>
  )
}

// Animated Typography Components
export function AnimatedText({ 
  children, 
  variant = "fadeIn",
  className = "",
  delay = 0,
  ...props 
}: TypographyProps & { 
  variant?: keyof typeof DESIGN_SYSTEM.motion.variants
  delay?: number 
}) {
  const motionVariant = DESIGN_SYSTEM.motion.variants[variant]
  
  return (
    <motion.div
      className={className}
      initial={motionVariant.initial}
      whileInView={{ ...motionVariant.animate }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        ...motionVariant.transition,
        delay: delay 
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggeredText({ 
  children, 
  className = "",
  staggerDelay = 0.1,
  ...props 
}: TypographyProps & { staggerDelay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ 
        delay: staggerDelay, 
        duration: 0.4, 
        ease: DESIGN_SYSTEM.motion.ease.primary 
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Legacy exports for compatibility
export { DisplayLarge as Heading1 }
export { DisplayMedium as Heading2 }
export { DisplaySmall as Heading3 }
export { HeadingLarge as Heading4 }
export { HeadingMedium as Heading5 }
export { HeadingSmall as Heading6 }
export { BodyLarge as Body1 }
export { BodyMedium as Body2 }
export { BodySmall as Body3 } 