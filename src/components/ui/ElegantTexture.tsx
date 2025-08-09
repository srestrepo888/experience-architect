import { motion } from "framer-motion"

interface ElegantTextureProps {
  className?: string
  opacity?: number
  animated?: boolean
  variant?: 'subtle' | 'elegant' | 'dramatic' | 'luxury' | 'premium'
}

export default function ElegantTexture({ 
  className = "", 
  opacity = 0.15,
  animated = false,
  variant = 'elegant'
}: ElegantTextureProps) {
  const opacityMultiplier = {
    subtle: 0.6,
    elegant: 1.0,
    dramatic: 1.4,
    luxury: 1.8,
    premium: 2.2
  }[variant]

  const colorVariants = {
    subtle: {
      primary: "text-neutral-charcoal/20",
      secondary: "text-neutral-graphite/15",
      accent: "text-neutral-slate/12",
      depth: "text-neutral-charcoal/10"
    },
    elegant: {
      primary: "text-neutral-charcoal/25",
      secondary: "text-neutral-graphite/20",
      accent: "text-neutral-slate/15",
      depth: "text-neutral-charcoal/12"
    },
    dramatic: {
      primary: "text-neutral-charcoal/30",
      secondary: "text-neutral-graphite/25",
      accent: "text-neutral-slate/20",
      depth: "text-neutral-charcoal/15"
    },
    luxury: {
      primary: "text-neutral-charcoal/35",
      secondary: "text-neutral-graphite/30",
      accent: "text-neutral-slate/25",
      depth: "text-neutral-charcoal/18"
    },
    premium: {
      primary: "text-neutral-charcoal/40",
      secondary: "text-neutral-graphite/35",
      accent: "text-neutral-slate/30",
      depth: "text-neutral-charcoal/20"
    }
  }

  const colors = colorVariants[variant]

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ opacity: opacity * opacityMultiplier }}
      >
        <defs>
          {/* Luxury Primary Pattern - Sophisticated Flowing Lines */}
          <pattern id="luxuryPrimary" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <motion.path
              d="M 0 40 Q 20 30, 40 40 Q 60 50, 80 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.12"
              strokeLinecap="round"
              className={colors.primary}
              initial={animated ? { pathLength: 0, opacity: 0 } : {}}
              animate={animated ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            <motion.path
              d="M 0 60 Q 16 50, 32 60 Q 48 70, 64 60 Q 80 50, 80 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.08"
              strokeLinecap="round"
              className={colors.secondary}
              initial={animated ? { pathLength: 0, opacity: 0 } : {}}
              animate={animated ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M 0 20 Q 24 12, 48 20 Q 72 28, 80 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.06"
              strokeLinecap="round"
              className={colors.accent}
              initial={animated ? { pathLength: 0, opacity: 0 } : {}}
              animate={animated ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
            />
          </pattern>

          {/* Luxury Secondary Pattern - Complex Layered Networks */}
          <pattern id="luxurySecondary" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <motion.path
              d="M 0 60 Q 30 45, 60 60 Q 90 75, 120 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.10"
              strokeLinecap="round"
              className={colors.primary}
              initial={animated ? { pathLength: 0, opacity: 0 } : {}}
              animate={animated ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 4, delay: 0.2, ease: "easeInOut" }}
            />
            <motion.path
              d="M 0 90 Q 20 75, 40 90 Q 60 105, 80 90 Q 100 75, 120 90"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.08"
              strokeLinecap="round"
              className={colors.secondary}
              initial={animated ? { pathLength: 0, opacity: 0 } : {}}
              animate={animated ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 4, delay: 0.8, ease: "easeInOut" }}
            />
            <motion.path
              d="M 0 30 Q 36 18, 72 30 Q 108 42, 120 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.06"
              strokeLinecap="round"
              className={colors.accent}
              initial={animated ? { pathLength: 0, opacity: 0 } : {}}
              animate={animated ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 4, delay: 1.4, ease: "easeInOut" }}
            />
          </pattern>

          {/* Luxury Tertiary Pattern - Sophisticated Swirls */}
          <pattern id="luxuryTertiary" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
            <motion.path
              d="M 0 80 Q 40 60, 80 80 Q 120 100, 160 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.12"
              strokeLinecap="round"
              className={colors.primary}
              initial={animated ? { pathLength: 0, opacity: 0 } : {}}
              animate={animated ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 5, delay: 0.3, ease: "easeInOut" }}
            />
            <motion.path
              d="M 0 120 Q 32 100, 64 120 Q 96 140, 128 120 Q 160 100, 160 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.08"
              strokeLinecap="round"
              className={colors.secondary}
              initial={animated ? { pathLength: 0, opacity: 0 } : {}}
              animate={animated ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 5, delay: 1.2, ease: "easeInOut" }}
            />
            <motion.path
              d="M 0 40 Q 48 24, 96 40 Q 144 56, 160 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.06"
              strokeLinecap="round"
              className={colors.accent}
              initial={animated ? { pathLength: 0, opacity: 0 } : {}}
              animate={animated ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 5, delay: 2.1, ease: "easeInOut" }}
            />
          </pattern>

          {/* Luxury Depth Pattern - Sophisticated Elements */}
          <pattern id="luxuryDepth" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <motion.circle
              cx="40"
              cy="40"
              r="0.3"
              fill="currentColor"
              className={colors.depth}
              initial={animated ? { scale: 0, opacity: 0 } : {}}
              animate={animated ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 2.5, ease: "easeOut" }}
            />
            <motion.circle
              cx="120"
              cy="60"
              r="0.25"
              fill="currentColor"
              className={colors.accent}
              initial={animated ? { scale: 0, opacity: 0 } : {}}
              animate={animated ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 2.8, ease: "easeOut" }}
            />
            <motion.circle
              cx="80"
              cy="120"
              r="0.35"
              fill="currentColor"
              className={colors.secondary}
              initial={animated ? { scale: 0, opacity: 0 } : {}}
              animate={animated ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 3.1, ease: "easeOut" }}
            />
            <motion.circle
              cx="160"
              cy="140"
              r="0.2"
              fill="currentColor"
              className={colors.primary}
              initial={animated ? { scale: 0, opacity: 0 } : {}}
              animate={animated ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 3.4, ease: "easeOut" }}
            />
          </pattern>

          {/* Luxury Accent Pattern - Premium Highlights */}
          <pattern id="luxuryAccent" x="0" y="0" width="240" height="240" patternUnits="userSpaceOnUse">
            <motion.path
              d="M 0 120 Q 60 90, 120 120 Q 180 150, 240 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.08"
              strokeLinecap="round"
              className={colors.primary}
              initial={animated ? { pathLength: 0, opacity: 0 } : {}}
              animate={animated ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 6, delay: 0.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M 0 180 Q 40 150, 80 180 Q 120 210, 160 180 Q 200 150, 240 180"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.06"
              strokeLinecap="round"
              className={colors.secondary}
              initial={animated ? { pathLength: 0, opacity: 0 } : {}}
              animate={animated ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 6, delay: 1.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M 0 60 Q 72 36, 144 60 Q 216 84, 240 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.04"
              strokeLinecap="round"
              className={colors.accent}
              initial={animated ? { pathLength: 0, opacity: 0 } : {}}
              animate={animated ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 6, delay: 2.5, ease: "easeInOut" }}
            />
          </pattern>
        </defs>

        {/* Apply Luxury Patterns with Sophisticated Layering */}
        <rect width="100" height="100" fill="url(#luxuryPrimary)" opacity="0.8" />
        <rect width="100" height="100" fill="url(#luxurySecondary)" opacity="0.6" />
        <rect width="100" height="100" fill="url(#luxuryTertiary)" opacity="0.5" />
        <rect width="100" height="100" fill="url(#luxuryDepth)" opacity="0.4" />
        <rect width="100" height="100" fill="url(#luxuryAccent)" opacity="0.3" />
        
        {/* Sophisticated Rotated Patterns for Luxury Depth */}
        <g transform="rotate(45, 50, 50)">
          <rect width="100" height="100" fill="url(#luxuryPrimary)" opacity="0.3" />
        </g>
        
        <g transform="rotate(-30, 50, 50)">
          <rect width="100" height="100" fill="url(#luxurySecondary)" opacity="0.25" />
        </g>
        
        <g transform="rotate(60, 50, 50)">
          <rect width="100" height="100" fill="url(#luxuryTertiary)" opacity="0.2" />
        </g>
        
        <g transform="rotate(-15, 50, 50)">
          <rect width="100" height="100" fill="url(#luxuryAccent)" opacity="0.15" />
        </g>
        
        {/* Luxury Radial Gradient Overlay for Sophisticated Depth */}
        <defs>
          <radialGradient id="luxuryOverlay" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.03" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.01" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
          </radialGradient>
        </defs>
        <rect width="100" height="100" fill="url(#luxuryOverlay)" />
      </svg>
    </div>
  )
} 