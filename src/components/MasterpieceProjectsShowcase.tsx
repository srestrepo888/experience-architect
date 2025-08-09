import React from "react"

export default function MasterpieceProjectsShowcase() {
  return (
    <section className="py-20 bg-background-primary">
      <div className="container">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-light text-foreground-primary">
            Masterpiece Projects
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
            A curated selection of projects that showcase architectural thinking applied to digital experiences
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="card">
              <div className="h-48 bg-background-muted rounded-lg mb-4"></div>
              <h3 className="text-xl font-display text-foreground-primary mb-2">Healthcare Platform</h3>
              <p className="text-foreground-secondary">Digital transformation for patient care</p>
            </div>
            <div className="card">
              <div className="h-48 bg-background-muted rounded-lg mb-4"></div>
              <h3 className="text-xl font-display text-foreground-primary mb-2">Retail Experience</h3>
              <p className="text-foreground-secondary">Omnichannel commerce ecosystem</p>
            </div>
            <div className="card">
              <div className="h-48 bg-background-muted rounded-lg mb-4"></div>
              <h3 className="text-xl font-display text-foreground-primary mb-2">Financial Services</h3>
              <p className="text-foreground-secondary">Digital banking transformation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
