import React from "react"

export default function DetailedServicesSection() {
  return (
    <section className="py-20 bg-background-primary">
      <div className="container">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-light text-foreground-primary">
            Services
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
            Comprehensive digital architecture services tailored to your vision
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="card">
              <h3 className="text-xl font-display text-foreground-primary mb-4">Experience Design</h3>
              <p className="text-foreground-secondary mb-4">Creating intuitive user journeys that delight and engage</p>
              <ul className="text-sm text-foreground-muted space-y-2">
                <li>• User Research & Testing</li>
                <li>• Information Architecture</li>
                <li>• Interaction Design</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-display text-foreground-primary mb-4">Digital Strategy</h3>
              <p className="text-foreground-secondary mb-4">Strategic planning for digital transformation initiatives</p>
              <ul className="text-sm text-foreground-muted space-y-2">
                <li>• Digital Roadmapping</li>
                <li>• Technology Assessment</li>
                <li>• Change Management</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-display text-foreground-primary mb-4">Creative Direction</h3>
              <p className="text-foreground-secondary mb-4">Leading design vision and brand strategy</p>
              <ul className="text-sm text-foreground-muted space-y-2">
                <li>• Brand Identity Design</li>
                <li>• Visual Design Systems</li>
                <li>• Creative Leadership</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
