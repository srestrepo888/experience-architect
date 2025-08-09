import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { DESIGN_SYSTEM } from "@/lib/design-system"

// Card variants following design system principles
const cardVariants = {
  default: {
    background: "var(--color-background-card)",
    border: "1px solid var(--color-border)",
    shadow: "var(--shadow-soft)",
    hover: {
      shadow: "var(--shadow-medium)",
      transform: "translateY(-2px)",
    },
  },
  elevated: {
    background: "var(--color-background-card)",
    border: "1px solid var(--color-border-subtle)",
    shadow: "var(--shadow-medium)",
    hover: {
      shadow: "var(--shadow-strong)",
      transform: "translateY(-4px)",
    },
  },
  subtle: {
    background: "var(--color-background-secondary)",
    border: "1px solid var(--color-border-subtle)",
    shadow: "var(--shadow-subtle)",
    hover: {
      shadow: "var(--shadow-soft)",
      transform: "translateY(-1px)",
    },
  },
  accent: {
    background: "var(--color-background-primary)",
    border: "1px solid var(--color-accent-gold)",
    shadow: "var(--shadow-soft)",
    hover: {
      shadow: "var(--shadow-medium)",
      transform: "translateY(-2px)",
      borderColor: "var(--color-accent-bronze)",
    },
  },
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof cardVariants
  children: React.ReactNode
  className?: string
  interactive?: boolean
  loading?: boolean
}

function Card({
  variant = "default",
  children,
  className = "",
  interactive = false,
  loading = false,
  ...props
}: CardProps) {
  const variantStyle = cardVariants[variant]

  const CardComponent = interactive ? motion.div : "div"

  return (
    <CardComponent
      className={cn(
        "relative overflow-hidden",
        "transition-all duration-normal",
        interactive && "cursor-pointer",
        loading && "animate-pulse",
        className
      )}
      style={{
        background: variantStyle.background,
        border: variantStyle.border,
        borderRadius: DESIGN_SYSTEM.components.card.borderRadius,
        padding: DESIGN_SYSTEM.components.card.padding,
        boxShadow: variantStyle.shadow,
        fontFamily: DESIGN_SYSTEM.typography.fonts.body,
      }}
      whileHover={interactive ? variantStyle.hover : undefined}
      transition={{
        duration: DESIGN_SYSTEM.motion.duration.normal,
        ease: DESIGN_SYSTEM.motion.ease.primary,
      }}
      {...props}
    >
      {/* Loading skeleton */}
      {loading && (
        <div className="space-y-4">
          <div className="h-4 bg-foreground-muted/10 rounded animate-pulse" />
          <div className="h-4 bg-foreground-muted/10 rounded w-3/4 animate-pulse" />
          <div className="h-4 bg-foreground-muted/10 rounded w-1/2 animate-pulse" />
        </div>
      )}

      {/* Content */}
      {!loading && children}

      {/* Subtle overlay for interactive cards */}
      {interactive && (
        <motion.div
          className="absolute inset-0 bg-foreground-primary/0 pointer-events-none"
          whileHover={{ backgroundColor: "rgba(28, 28, 28, 0.02)" }}
          transition={{ duration: 0.2 }}
        />
      )}
    </CardComponent>
  )
}

// Card Header Component
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

function CardHeader({ children, className = "", ...props }: CardHeaderProps) {
  return (
    <div
      className={cn("space-y-2", className)}
      style={{
        fontFamily: DESIGN_SYSTEM.typography.fonts.display,
      }}
      {...props}
    >
      {children}
    </div>
  )
}

// Card Content Component
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

function CardContent({ children, className = "", ...props }: CardContentProps) {
  return (
    <div
      className={cn("space-y-4", className)}
      style={{
        fontFamily: DESIGN_SYSTEM.typography.fonts.body,
        lineHeight: DESIGN_SYSTEM.typography.components.body.lineHeight,
      }}
      {...props}
    >
      {children}
    </div>
  )
}

// Card Footer Component
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

function CardFooter({ children, className = "", ...props }: CardFooterProps) {
  return (
    <div
      className={cn("flex items-center justify-between pt-4 border-t border-border-subtle", className)}
      style={{
        fontFamily: DESIGN_SYSTEM.typography.fonts.sans,
      }}
      {...props}
    >
      {children}
    </div>
  )
}

// Card Image Component
interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  className?: string
  aspectRatio?: "square" | "portrait" | "landscape" | "hero"
}

function CardImage({ 
  src, 
  alt, 
  className = "", 
  aspectRatio = "landscape",
  ...props 
}: CardImageProps) {
  const aspectRatioClasses = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[16/9]",
    hero: "aspect-[21/9]",
  }

  return (
    <div className={cn("relative overflow-hidden", aspectRatioClasses[aspectRatio])}>
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-transform duration-normal",
          "hover:scale-105",
          className
        )}
        loading="lazy"
        style={{
          fontFamily: DESIGN_SYSTEM.typography.fonts.body,
        }}
        {...props}
      />
    </div>
  )
}

// Export all components
export { Card, CardHeader, CardContent, CardFooter, CardImage, cardVariants }
