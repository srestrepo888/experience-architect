import React from "react"

export default function CinematicHero() {
  return (
    <section className="min-h-screen bg-background-primary flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-foreground-primary/2" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-accent-gold/1 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-accent-bronze/1 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center">
        <div className="space-y-8">
          {/* Overline */}
          <div className="text-sm font-medium text-foreground-muted tracking-widest uppercase">
            Experience Architect
          </div>
          
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-display font-light tracking-tight leading-[0.9] text-foreground-primary">
            Silvana
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
            Crafting sophisticated digital experiences that blend architectural precision with creative vision
          </p>
          
          {/* CTA Button */}
          <div className="pt-8">
            <button className="btn bg-foreground-primary text-background-primary hover:bg-foreground-secondary transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
