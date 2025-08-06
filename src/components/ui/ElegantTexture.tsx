import { motion } from "framer-motion"

interface ElegantTextureProps {
  className?: string
  opacity?: number
  animated?: boolean
}

export default function ElegantTexture({ 
  className = "", 
  opacity = 0.03,
  animated = false 
}: ElegantTextureProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ opacity }}
      >
        <defs>
          {/* Wavy lines pattern */}
          <pattern id="wavyLines" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <motion.path
              d="M 0 10 Q 5 5, 10 10 Q 15 15, 20 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.15"
              strokeLinecap="round"
              initial={animated ? { pathLength: 0 } : {}}
              animate={animated ? { pathLength: 1 } : {}}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M 0 15 Q 5 10, 10 15 Q 15 20, 20 15"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.1"
              strokeLinecap="round"
              initial={animated ? { pathLength: 0 } : {}}
              animate={animated ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
            />
          </pattern>

          {/* Geometric network pattern */}
          <pattern id="geometricNetwork" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <motion.path
              d="M 5 5 L 15 5 L 15 15 L 5 15 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.08"
              strokeLinecap="round"
              initial={animated ? { pathLength: 0 } : {}}
              animate={animated ? { pathLength: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M 15 5 L 25 5 L 25 15 L 15 15"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.08"
              strokeLinecap="round"
              initial={animated ? { pathLength: 0 } : {}}
              animate={animated ? { pathLength: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
            />
            <motion.path
              d="M 5 15 L 15 15 L 15 25 L 5 25"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.08"
              strokeLinecap="round"
              initial={animated ? { pathLength: 0 } : {}}
              animate={animated ? { pathLength: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
            />
            <motion.path
              d="M 15 15 L 25 15 L 25 25 L 15 25"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.08"
              strokeLinecap="round"
              initial={animated ? { pathLength: 0 } : {}}
              animate={animated ? { pathLength: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
            />
            
            {/* Diagonal connections */}
            <motion.path
              d="M 5 5 L 25 25"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.05"
              strokeLinecap="round"
              initial={animated ? { pathLength: 0 } : {}}
              animate={animated ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
            />
            <motion.path
              d="M 25 5 L 5 25"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.05"
              strokeLinecap="round"
              initial={animated ? { pathLength: 0 } : {}}
              animate={animated ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
            />
          </pattern>

          {/* Subtle dots pattern */}
          <pattern id="subtleDots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <motion.circle
              cx="20"
              cy="20"
              r="0.3"
              fill="currentColor"
              initial={animated ? { scale: 0, opacity: 0 } : {}}
              animate={animated ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            />
          </pattern>
        </defs>

        {/* Apply patterns with different rotations and positions */}
        <rect width="100" height="100" fill="url(#wavyLines)" />
        <rect width="100" height="100" fill="url(#geometricNetwork)" />
        <rect width="100" height="100" fill="url(#subtleDots)" />
        
        {/* Additional rotated wavy lines for more organic feel */}
        <g transform="rotate(45, 50, 50)">
          <rect width="100" height="100" fill="url(#wavyLines)" opacity="0.5" />
        </g>
        
        {/* Corner geometric accents */}
        <g transform="translate(0, 0)">
          <rect width="30" height="30" fill="url(#geometricNetwork)" opacity="0.7" />
        </g>
        <g transform="translate(70, 70)">
          <rect width="30" height="30" fill="url(#geometricNetwork)" opacity="0.7" />
        </g>
      </svg>
    </div>
  )
} 