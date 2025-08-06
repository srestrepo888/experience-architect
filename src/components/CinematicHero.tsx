import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import ElegantTexture from "@/components/ui/ElegantTexture"



// Elegant geometric shapes for architectural feel
const GeometricAccents = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Subtle geometric lines */}
    <motion.div
      className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-brand-charcoal_soft_text/10 to-transparent dark:via-brand-moonstone_light_text/10"
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
    />
    <motion.div
      className="absolute top-3/4 right-0 w-32 h-px bg-gradient-to-l from-transparent via-brand-charcoal_soft_text/10 to-transparent dark:via-brand-moonstone_light_text/10"
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
    />
    
    {/* Architectural corner accents */}
    <motion.div
      className="absolute top-8 left-8 w-16 h-16 border-l border-t border-brand-charcoal_soft_text/10 dark:border-brand-moonstone_light_text/10"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
    />
    <motion.div
      className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-brand-charcoal_soft_text/10 dark:border-brand-moonstone_light_text/10"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
    />
  </div>
)

export default function CinematicHero() {
  const targetRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  // Sophisticated scroll transforms
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0])
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <motion.section
      ref={targetRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-brand-creme_rose_bg via-brand-creme_rose_bg/95 to-brand-creme_rose_bg/90 dark:from-brand-night_deep_bg dark:via-brand-night_subtle_bg dark:to-brand-night_deep_bg"
      style={{
        opacity: heroOpacity,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Sophisticated Background Layers */}
      <div className="absolute inset-0">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-creme_rose_bg via-brand-creme_rose_bg/95 to-brand-creme_rose_bg/90 dark:from-brand-night_deep_bg dark:via-brand-night_subtle_bg dark:to-brand-night_deep_bg" />
        
        {/* Elegant texture pattern */}
        <div className="absolute inset-0 text-brand-charcoal_soft_text/8 dark:text-brand-moonstone_light_text/8">
          <ElegantTexture animated={true} opacity={0.04} />
        </div>
        
        {/* Subtle radial gradient for depth */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-brand-charcoal_soft_text/5 dark:to-brand-moonstone_light_text/5" />
      </div>

      {/* Geometric Accents */}
      <GeometricAccents />

      {/* Main Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8"
        style={{
          y: contentY,
          scale: titleScale,
        }}
      >
        <AnimatePresence>
          {isLoaded && (
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Main Title */}
              <motion.h1
                className="font-display text-[clamp(4rem,12vw,12rem)] leading-[0.85] font-light text-brand-charcoal_soft_text dark:text-brand-moonstone_light_text tracking-tight"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              >
                Experience
              </motion.h1>
              
              {/* Subtitle with elegant spacing */}
              <motion.h2
                className="font-elegant text-[clamp(1.5rem,4vw,4rem)] leading-none font-light tracking-[0.15em] uppercase text-brand-graphite_medium_text dark:text-brand-moonstone_medium_text mt-[-0.1em]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                Architect
              </motion.h2>
              
              {/* Sophisticated decorative line */}
              <motion.div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-brand-graphite_medium_text dark:via-brand-moonstone_medium_text to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Elegant subtitle text */}
        <motion.p
          className="mt-16 max-w-2xl font-body text-lg md:text-xl text-brand-graphite_medium_text dark:text-brand-moonstone_medium_text font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
        >
          Crafting digital experiences with architectural precision and human-centered design
        </motion.p>
      </motion.div>

      {/* Sophisticated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
      >
        <motion.span 
          className="font-body text-xs uppercase tracking-[0.2em] text-brand-graphite_medium_text/60 dark:text-brand-moonstone_medium_text/60 mb-3"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll
        </motion.span>
        <motion.div
          className="relative h-12 w-px"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-graphite_medium_text dark:from-brand-moonstone_medium_text to-transparent"
            animate={{ 
              scaleY: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2.4
            }}
          />
        </motion.div>
      </motion.div>

      {/* Subtle floating elements for architectural feel */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-brand-charcoal_soft_text/20 dark:bg-brand-moonstone_light_text/20 rounded-full"
          animate={{ 
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-brand-graphite_medium_text/30 dark:bg-brand-moonstone_medium_text/30 rounded-full"
          animate={{ 
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </motion.section>
  )
}
