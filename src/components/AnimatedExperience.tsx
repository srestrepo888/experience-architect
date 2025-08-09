import React from "react"

export default function AnimatedExperience() {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-light text-foreground-primary">
            Experience & Expertise
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
            With over a decade of experience in digital architecture, I specialize in creating sophisticated user experiences that balance form and function.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="card">
              <h3 className="text-xl font-display text-foreground-primary mb-4">User Experience Design</h3>
              <p className="text-foreground-secondary">Creating intuitive, accessible, and delightful user journeys</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-display text-foreground-primary mb-4">Digital Architecture</h3>
              <p className="text-foreground-secondary">Building scalable, maintainable digital systems</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-display text-foreground-primary mb-4">Creative Direction</h3>
              <p className="text-foreground-secondary">Leading design vision and brand strategy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
