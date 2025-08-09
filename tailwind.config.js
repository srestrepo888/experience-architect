/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // COHESIVE COLOR SYSTEM - Warm Neutrals, No Pure White
      colors: {
        // Background System
        background: {
          primary: "var(--color-background-primary)",
          secondary: "var(--color-background-secondary)",
          tertiary: "var(--color-background-tertiary)",
          card: "var(--color-background-card)",
          muted: "var(--color-background-muted)",
        },
        
        // Foreground System - Deep Charcoal for Text
        foreground: {
          primary: "var(--color-foreground-primary)",
          secondary: "var(--color-foreground-secondary)",
          muted: "var(--color-foreground-muted)",
          subtle: "var(--color-foreground-subtle)",
        },
        
        // Primary/Secondary System
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-foreground)",
        },
        
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-secondary-foreground)",
        },
        
        // Muted System for Layers
        muted: {
          DEFAULT: "var(--color-muted)",
          foreground: "var(--color-muted-foreground)",
        },
        
        // Border System
        border: {
          DEFAULT: "var(--color-border)",
          subtle: "var(--color-border-subtle)",
          accent: "var(--color-border-accent)",
        },
        
        // Accent System - Subtle, Meaningful
        accent: {
          gold: "var(--color-accent-gold)",
          bronze: "var(--color-accent-bronze)",
          copper: "var(--color-accent-copper)",
        },
        
        // Legacy brand colors mapped to new system
        brand: {
          creme_rose_bg: "var(--color-background-primary)",
          night_deep_bg: "var(--color-foreground-primary)",
          charcoal_soft_text: "var(--color-foreground-primary)",
          moonstone_light_text: "var(--color-background-primary)",
          graphite_medium_text: "var(--color-foreground-secondary)",
          moonstone_medium_text: "var(--color-foreground-muted)",
        }
      },

      // TYPOGRAPHIC HIERARCHY WITH INTENT
      fontFamily: {
        // Display/Headings: Cormorant Garamond; Body/UI: Inter
        display: ["Cormorant Garamond", "serif"],
        body: ["Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        elegant: ["Cormorant Garamond", "serif"],
        
        // Legacy font mappings
        "luxury-display": ["Cormorant Garamond", "serif"],
        "luxury-serif": ["Cormorant Garamond", "serif"],
        "luxury-sans": ["Inter", "sans-serif"],
        "luxury-elegant": ["Cormorant Garamond", "serif"],
      },

      // SPATIAL RHYTHM AND STRUCTURE - 8px Grid
      spacing: {
        "4xs": "var(--spacing-4xs)",
        "3xs": "var(--spacing-3xs)",
        "2xs": "var(--spacing-2xs)",
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        "2xl": "var(--spacing-2xl)",
        "3xl": "var(--spacing-3xl)",
        "4xl": "var(--spacing-4xl)",
      },

      // Predictable Containers
      maxWidth: {
        "content": "65ch",
        "wide": "75ch",
        "narrow": "45ch",
      },

      // SUBTLE, MEANINGFUL MOTION
      animation: {
        "fade-in": "fadeIn var(--duration-normal) var(--ease-primary)",
        "slide-in": "slideIn var(--duration-normal) var(--ease-primary)",
        "scale-in": "scaleIn var(--duration-normal) var(--ease-primary)",
      },

      // TEXTURE AND MATERIALITY
      boxShadow: {
        subtle: "var(--shadow-subtle)",
        soft: "var(--shadow-soft)",
        medium: "var(--shadow-medium)",
        strong: "var(--shadow-strong)",
      },

      // PERFORMANCE AND POLISH
      aspectRatio: {
        "square": "1 / 1",
        "portrait": "3 / 4",
        "landscape": "16 / 9",
        "hero": "21 / 9",
      },

      // TOUCH-FIRST ERGONOMICS
      minHeight: {
        "touch-target": "var(--touch-target)",
      },

      // ACCESSIBILITY
      ringOffsetWidth: {
        "focus": "2px",
      },

      // CUSTOM UTILITIES
      backdropBlur: {
        "subtle": "4px",
        "soft": "8px",
        "medium": "12px",
      },

      // BACKGROUND IMAGES
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    // Custom plugin for design system utilities
    function({ addUtilities, theme }) {
      const newUtilities = {
        // Typography utilities
        ".text-display": {
          fontFamily: theme("fontFamily.display"),
          fontWeight: "300",
          letterSpacing: "-0.02em",
        },
        ".text-body": {
          fontFamily: theme("fontFamily.body"),
          fontWeight: "400",
          lineHeight: "1.7",
        },
        ".text-ui": {
          fontFamily: theme("fontFamily.sans"),
          fontWeight: "500",
          letterSpacing: "0.02em",
        },
        
        // Spacing utilities
        ".space-xs": { marginBottom: theme("spacing.xs") },
        ".space-sm": { marginBottom: theme("spacing.sm") },
        ".space-md": { marginBottom: theme("spacing.md") },
        ".space-lg": { marginBottom: theme("spacing.lg") },
        ".space-xl": { marginBottom: theme("spacing.xl") },
        ".space-2xl": { marginBottom: theme("spacing.2xl") },
        
        // Container utilities
        ".container": {
          width: "100%",
          maxWidth: theme("maxWidth.content"),
          margin: "0 auto",
          padding: `0 ${theme("spacing.xs")}`,
        },
        ".container-wide": {
          maxWidth: theme("maxWidth.wide"),
        },
        ".container-full": {
          maxWidth: "none",
        },
        ".container-narrow": {
          maxWidth: theme("maxWidth.narrow"),
        },
        
        // Section utilities
        ".section": {
          padding: `${theme("spacing.xl")} ${theme("spacing.xs")}`,
        },
        
        // Grid system
        ".grid-system": {
          display: "grid",
          gap: theme("spacing.md"),
        },
        
        // Focus utilities
        ".focus-ring": {
          outline: "none",
          boxShadow: "var(--focus-ring)",
        },
        
        // Screen reader only
        ".sr-only": {
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: "0",
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: "0",
        },
      }
      
      addUtilities(newUtilities, {
        respectPrefix: false,
        respectImportant: false,
      })
    },
  ],
} 