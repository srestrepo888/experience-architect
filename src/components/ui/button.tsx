import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { DESIGN_SYSTEM } from "@/lib/design-system"
import { UIMedium } from "@/components/typography"

// Button variants following design system principles
const buttonVariants = {
  primary: {
    background: "var(--color-background-primary)",
    color: "var(--color-foreground-primary)",
    border: "1px solid var(--color-border)",
    hover: {
      background: "var(--color-background-secondary)",
      borderColor: "var(--color-border-accent)",
      transform: "translateY(-1px)",
      boxShadow: "var(--shadow-soft)",
    },
  },
  secondary: {
    background: "var(--color-background-secondary)",
    color: "var(--color-foreground-primary)",
    border: "1px solid var(--color-border-subtle)",
    hover: {
      background: "var(--color-background-tertiary)",
      borderColor: "var(--color-border)",
      transform: "translateY(-1px)",
      boxShadow: "var(--shadow-subtle)",
    },
  },
  accent: {
    background: "var(--color-accent-gold)",
    color: "var(--color-background-primary)",
    border: "1px solid var(--color-accent-gold)",
    hover: {
      background: "var(--color-accent-bronze)",
      borderColor: "var(--color-accent-bronze)",
      transform: "translateY(-1px)",
      boxShadow: "var(--shadow-medium)",
    },
  },
  ghost: {
    background: "transparent",
    color: "var(--color-foreground-primary)",
    border: "1px solid transparent",
    hover: {
      background: "var(--color-background-muted)",
      borderColor: "var(--color-border-subtle)",
      transform: "translateY(-1px)",
    },
  },
}

const buttonSizes = {
  sm: {
    padding: "8px 16px",
    fontSize: "12px",
    minHeight: "36px",
  },
  md: {
    padding: "12px 24px",
    fontSize: "14px",
    minHeight: "44px",
  },
  lg: {
    padding: "16px 32px",
    fontSize: "16px",
    minHeight: "52px",
  },
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants
  size?: keyof typeof buttonSizes
  children: React.ReactNode
  className?: string
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
}

function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  loading = false,
  icon,
  iconPosition = "left",
  disabled,
  ...props
}: ButtonProps) {
  const variantStyle = buttonVariants[variant]
  const sizeStyle = buttonSizes[size]
  const isDisabled = disabled || loading

  return (
    <motion.button
      className={cn(
        "relative inline-flex items-center justify-center font-medium tracking-wide",
        "border-radius-8 transition-all duration-normal",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
        "select-none touch-manipulation",
        className
      )}
      style={{
        padding: sizeStyle.padding,
        fontSize: sizeStyle.fontSize,
        minHeight: sizeStyle.minHeight,
        background: variantStyle.background,
        color: variantStyle.color,
        border: variantStyle.border,
        fontFamily: DESIGN_SYSTEM.typography.fonts.sans,
        fontWeight: DESIGN_SYSTEM.typography.components.ui.fontWeight,
        letterSpacing: DESIGN_SYSTEM.typography.components.ui.letterSpacing,
        lineHeight: DESIGN_SYSTEM.typography.components.ui.lineHeight,
        borderRadius: DESIGN_SYSTEM.components.button.borderRadius,
      }}
      whileHover={!isDisabled ? variantStyle.hover : undefined}
      whileTap={!isDisabled ? { scale: 0.98 } : undefined}
      transition={{
        duration: DESIGN_SYSTEM.motion.duration.normal,
        ease: DESIGN_SYSTEM.motion.ease.primary,
      }}
      disabled={isDisabled}
      {...props}
    >
      {/* Loading state */}
      {loading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}

      {/* Content */}
      <motion.div
        className={cn(
          "flex items-center gap-2",
          loading && "opacity-0"
        )}
        initial={false}
        animate={{ opacity: loading ? 0 : 1 }}
      >
        {/* Left icon */}
        {icon && iconPosition === "left" && (
          <motion.div
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.2 }}
          >
            {icon}
          </motion.div>
        )}

        {/* Text content */}
        <UIMedium as="span" className="whitespace-nowrap">
          {children}
        </UIMedium>

        {/* Right icon */}
        {icon && iconPosition === "right" && (
          <motion.div
            initial={{ opacity: 0, x: 4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.2 }}
          >
            {icon}
          </motion.div>
        )}
      </motion.div>

      {/* Focus ring for accessibility */}
      <div
        className={cn(
          "absolute inset-0 rounded-8 pointer-events-none",
          "focus-visible:ring-2 focus-visible:ring-foreground-primary focus-visible:ring-offset-2"
        )}
        style={{
          borderRadius: DESIGN_SYSTEM.components.button.borderRadius,
        }}
      />
    </motion.button>
  )
}

// Export components and variants
export { Button, buttonVariants, buttonSizes }
export default Button
