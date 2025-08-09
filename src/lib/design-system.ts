// DESIGN SYSTEM - SINGLE SOURCE OF TRUTH
// Implementing cohesive color system with warm neutrals, no pure white
// Deep charcoal for text, subtle tints for layers

export const DESIGN_SYSTEM = {
  // COHESIVE COLOR SYSTEM - Warm Neutrals, No Pure White
  colors: {
    // Background System - Warm, Sophisticated
    background: {
      primary: "#FDFBF7", // Warm cream - no pure white
      secondary: "#F8F6F2", // Subtle beige tint
      tertiary: "#F5F2EF", // Deeper warm tone
      card: "rgba(253, 251, 247, 0.95)", // Translucent card surface
      muted: "#F0EDE8", // Subtle muted background
    },
    
    // Foreground System - Deep Charcoal for Text
    foreground: {
      primary: "#1C1C1C", // Deep charcoal for primary text
      secondary: "#2A2A2A", // Slightly lighter for secondary
      muted: "#4A4A4A", // Muted text for less emphasis
      subtle: "#6B6B6B", // Very subtle text
    },
    
    // Primary/Secondary System
    primary: {
      DEFAULT: "#1C1C1C", // Deep charcoal
      foreground: "#FDFBF7", // Warm cream
    },
    
    secondary: {
      DEFAULT: "#2A2A2A", // Sophisticated graphite
      foreground: "#F8F6F2", // Subtle beige
    },
    
    // Muted System for Layers
    muted: {
      DEFAULT: "#F0EDE8", // Subtle muted background
      foreground: "#4A4A4A", // Muted text
    },
    
    // Border System
    border: {
      DEFAULT: "#E5E0D8", // Warm border color
      subtle: "#EDEAE5", // Very subtle border
      accent: "#D4C8B8", // Accent border
    },
    
    // Accent System - Subtle, Meaningful
    accent: {
      gold: "#D4AF37", // Sophisticated gold
      bronze: "#CD7F32", // Warm bronze
      copper: "#B87333", // Rich copper
    },
    
    // Legacy brand colors mapped to new system
    brand: {
      creme_rose_bg: "#FDFBF7", // Maps to background.primary
      night_deep_bg: "#1C1C1C", // Maps to foreground.primary
      charcoal_soft_text: "#1C1C1C", // Maps to foreground.primary
      moonstone_light_text: "#FDFBF7", // Maps to background.primary
      graphite_medium_text: "#2A2A2A", // Maps to foreground.secondary
      moonstone_medium_text: "#4A4A4A", // Maps to foreground.muted
    }
  },

  // TYPOGRAPHIC HIERARCHY WITH INTENT
  typography: {
    // Font Families - Cormorant Garamond for Display/Headings, Inter for Body/UI
    fonts: {
      display: "Cormorant Garamond, serif", // Display/Headings
      body: "Inter, sans-serif", // Body/UI
      elegant: "Cormorant Garamond, serif", // Elegant variants
      sans: "Inter, sans-serif", // UI elements
    },
    
    // Fluid Scale System
    scale: {
      xs: "clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)",
      sm: "clamp(0.875rem, 0.8rem + 0.375vw, 1rem)",
      base: "clamp(1rem, 0.9rem + 0.5vw, 1.125rem)",
      lg: "clamp(1.125rem, 1rem + 0.625vw, 1.25rem)",
      xl: "clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)",
      "2xl": "clamp(1.5rem, 1.3rem + 1vw, 2rem)",
      "3xl": "clamp(2rem, 1.7rem + 1.5vw, 3rem)",
      "4xl": "clamp(3rem, 2.5rem + 2.5vw, 4.5rem)",
      "5xl": "clamp(4.5rem, 3.5rem + 5vw, 6rem)",
    },
    
    // Typography Components
    components: {
      display: {
        fontFamily: "Cormorant Garamond, serif",
        fontWeight: "300",
        letterSpacing: "-0.02em", // Tight tracking on displays
        lineHeight: "1.1",
      },
      heading: {
        fontFamily: "Cormorant Garamond, serif",
        fontWeight: "400",
        letterSpacing: "-0.01em",
        lineHeight: "1.2",
      },
      body: {
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        letterSpacing: "0.01em",
        lineHeight: "1.7", // Generous line-height on body
      },
      ui: {
        fontFamily: "Inter, sans-serif",
        fontWeight: "500",
        letterSpacing: "0.02em",
        lineHeight: "1.5",
      }
    },
    
    // Readable Copy Measures
    measures: {
      narrow: "45ch", // Short text
      readable: "65ch", // Optimal reading width
      wide: "75ch", // Wide content
    }
  },

  // SPATIAL RHYTHM AND STRUCTURE - 8px Grid
  spacing: {
    // 8px Grid System
    "4xs": "4px",   // 0.5 * 8px
    "3xs": "8px",   // 1 * 8px
    "2xs": "12px",  // 1.5 * 8px
    xs: "16px",     // 2 * 8px
    sm: "24px",     // 3 * 8px
    md: "32px",     // 4 * 8px
    lg: "48px",     // 6 * 8px
    xl: "64px",     // 8 * 8px
    "2xl": "96px",  // 12 * 8px
    "3xl": "128px", // 16 * 8px
    "4xl": "160px", // 20 * 8px
  },

  // Predictable Containers
  containers: {
    content: "max-w-[65ch] mx-auto", // Readable content width
    wide: "max-w-[75ch] mx-auto",    // Wide content
    full: "max-w-none",              // Full width
    narrow: "max-w-[45ch] mx-auto",  // Narrow content
  },

  // Section Scaffolding
  sections: {
    padding: {
      mobile: "py-16 px-4",      // Mobile padding
      tablet: "py-24 px-6",      // Tablet padding
      desktop: "py-32 px-8",     // Desktop padding
      hero: "py-40 px-4 md:px-8", // Hero section padding
    },
    spacing: {
      compact: "space-y-16",     // Compact sections
      normal: "space-y-24",      // Normal sections
      spacious: "space-y-32",    // Spacious sections
      hero: "space-y-40",        // Hero spacing
    }
  },

  // COMPONENT CONSISTENCY VIA TOKENS
  components: {
    // Button System
    button: {
      padding: {
        sm: "8px 16px",
        md: "12px 24px",
        lg: "16px 32px",
      },
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: "500",
      letterSpacing: "0.02em",
    },
    
    // Card System
    card: {
      padding: "24px",
      borderRadius: "12px",
      shadow: "0 4px 16px rgba(28, 28, 28, 0.06)",
      border: "1px solid #E5E0D8",
    },
    
    // Input System
    input: {
      padding: "12px 16px",
      borderRadius: "8px",
      border: "1px solid #E5E0D8",
      fontSize: "16px",
    }
  },

  // SUBTLE, MEANINGFUL MOTION
  motion: {
    // Easing Curves
    ease: {
      primary: [0.22, 1, 0.36, 1], // Primary ease curve
      secondary: [0.25, 0.46, 0.45, 0.94], // Secondary ease
      bounce: [0.68, -0.55, 0.265, 1.55], // Bounce ease
    },
    
    // Duration System
    duration: {
      fast: "240ms",
      normal: "400ms",
      slow: "600ms",
    },
    
    // Animation Variants
    variants: {
      fadeIn: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
      },
      slideIn: {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
      },
      scaleIn: {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
      }
    }
  },

  // TEXTURE AND MATERIALITY
  shadows: {
    subtle: "0 2px 8px rgba(28, 28, 28, 0.04)",
    soft: "0 4px 16px rgba(28, 28, 28, 0.06)",
    medium: "0 8px 32px rgba(28, 28, 28, 0.08)",
    strong: "0 16px 64px rgba(28, 28, 28, 0.12)",
  },

  // ACCESSIBILITY STANDARDS
  accessibility: {
    // Focus States
    focus: {
      ring: "0 0 0 2px #1C1C1C, 0 0 0 4px #FDFBF7",
      offset: "2px",
    },
    
    // Contrast Ratios (WCAG AA)
    contrast: {
      normal: "4.5:1",
      large: "3:1",
    },
    
    // Touch Targets
    touchTarget: "44px",
  },

  // PERFORMANCE AND POLISH
  performance: {
    // Image Loading
    images: {
      aspectRatios: {
        square: "1/1",
        portrait: "3/4",
        landscape: "16/9",
        hero: "21/9",
      },
      loading: "lazy",
      display: "swap",
    },
    
    // Layout Stability
    layout: {
      minHeight: "200px",
      aspectRatio: "16/9",
    }
  },

  // TOUCH-FIRST ERGONOMICS
  touch: {
    // Minimum Touch Targets
    minTarget: "44px",
    
    // Comfortable Spacing
    spacing: {
      touch: "8px",
      comfortable: "16px",
      generous: "24px",
    },
    
    // Breakpoints
    breakpoints: {
      mobile: "320px",
      tablet: "768px",
      desktop: "1024px",
      wide: "1280px",
    }
  }
} as const

// Utility function to get design tokens
export function getDesignToken(category: keyof typeof DESIGN_SYSTEM, token: string) {
  return DESIGN_SYSTEM[category][token as keyof typeof DESIGN_SYSTEM[typeof category]]
}

// CSS Variable generation
export function generateCSSVariables() {
  const variables: Record<string, string> = {}
  
  // Color variables
  Object.entries(DESIGN_SYSTEM.colors).forEach(([category, values]) => {
    if (typeof values === 'object' && values !== null) {
      Object.entries(values).forEach(([key, value]) => {
        variables[`--color-${category}-${key}`] = value
      })
    }
  })
  
  return variables
} 