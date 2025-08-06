// lib/design-system.ts
// THE SINGLE SOURCE OF TRUTH FOR ALL DESIGN TOKENS
// Enhanced with sophisticated layout and spacing system

// Based on 8px grid system with golden ratio for visual harmony
export const DESIGN_SYSTEM = {
  spacing: {
    // Micro spacing for fine-tuned control
    "4xs": "2px",
    "3xs": "4px",
    "2xs": "6px",
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "64px",
    "4xl": "96px",
    "5xl": "128px",
    "6xl": "160px",
    "7xl": "192px",
    // Special spacing for dramatic effects
    dramatic: "48px md:64px lg:96px",
    hero: "64px md:96px lg:128px",
  },
  containers: {
    // Refined container system with better proportions
    content: "max-w-[1200px] mx-auto",
    wide: "max-w-[1400px] mx-auto",
    full: "max-w-none",
    narrow: "max-w-[800px] mx-auto",
    // Special containers for different content types
    text: "max-w-[65ch] mx-auto", // Optimal reading width
    card: "max-w-[400px] mx-auto",
  },
  padding: {
    // Enhanced padding system with better responsive behavior
    mobile: "px-4 sm:px-6",
    tablet: "px-6 md:px-8",
    desktop: "px-8 lg:px-12 xl:px-16",
    // Special padding for different contexts
    section: "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16",
    card: "px-6 md:px-8 lg:px-10",
    hero: "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20",
  },
  sections: {
    spacing: {
      // Refined section spacing with better visual hierarchy
      compact: "py-8 md:py-12",
      normal: "py-12 md:py-16 lg:py-20",
      spacious: "py-16 md:py-24 lg:py-32",
      hero: "pt-20 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24",
      // Special section types
      showcase: "py-20 md:py-32 lg:py-40",
      contact: "py-16 md:py-24 lg:py-32",
    },
    headerMargin: "mb-8 md:mb-12 lg:mb-16",
    contentMargin: "mb-12 md:mb-16 lg:mb-20",
  },
  typography: {
    // Enhanced typography spacing
    paragraphSpacing: "space-y-6 md:space-y-8",
    headingSpacing: "mb-4 md:mb-6 lg:mb-8",
    sectionSpacing: "mb-12 md:mb-16 lg:mb-20",
    // Line height optimization
    lineHeight: {
      tight: "leading-tight",
      normal: "leading-relaxed",
      loose: "leading-loose",
    },
  },
  grid: {
    // Sophisticated grid system
    gap: {
      xs: "gap-4 md:gap-6",
      sm: "gap-6 md:gap-8",
      md: "gap-8 md:gap-12",
      lg: "gap-12 md:gap-16",
      xl: "gap-16 md:gap-24",
      dramatic: "gap-8 md:gap-12 lg:gap-16 xl:gap-24",
    },
    columns: {
      auto: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      wide: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
      narrow: "grid-cols-1 lg:grid-cols-2",
    },
  },
  layout: {
    // Advanced layout utilities
    stack: {
      xs: "space-y-2",
      sm: "space-y-4",
      md: "space-y-6",
      lg: "space-y-8",
      xl: "space-y-12",
      dramatic: "space-y-8 md:space-y-12 lg:space-y-16",
    },
    cluster: {
      xs: "flex flex-wrap gap-2",
      sm: "flex flex-wrap gap-4",
      md: "flex flex-wrap gap-6",
      lg: "flex flex-wrap gap-8",
    },
    center: "flex items-center justify-center",
    between: "flex items-center justify-between",
    start: "flex items-center justify-start",
    end: "flex items-center justify-end",
  },
  margins: {
    // Sophisticated margin system
    auto: "mx-auto",
    section: "mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16",
    content: "mx-4 sm:mx-6 md:mx-auto max-w-[1200px]",
    // Vertical margins
    top: {
      xs: "mt-4",
      sm: "mt-6",
      md: "mt-8",
      lg: "mt-12",
      xl: "mt-16",
      dramatic: "mt-12 md:mt-16 lg:mt-20",
    },
    bottom: {
      xs: "mb-4",
      sm: "mb-6",
      md: "mb-8",
      lg: "mb-12",
      xl: "mb-16",
      dramatic: "mb-12 md:mb-16 lg:mb-20",
    },
  },
  animation: {
    fadeIn: {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
    slideUp: {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  },
  // Visual hierarchy system
  hierarchy: {
    // Z-index system for layering
    zIndex: {
      base: "z-0",
      content: "z-10",
      overlay: "z-20",
      modal: "z-30",
      tooltip: "z-40",
      navigation: "z-50",
    },
    // Shadow system for depth
    shadow: {
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
      "2xl": "shadow-2xl",
      inner: "shadow-inner",
    },
  },
} as const 