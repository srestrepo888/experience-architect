import React from "react"

export default function Footer() {
  return (
    <footer className="bg-background-primary border-t border-border py-12">
      <div className="container">
        <div className="text-center space-y-6">
          <div>
            <h3 className="text-2xl font-display font-light text-foreground-primary mb-2">
              Silvana
            </h3>
            <p className="text-foreground-secondary">
              Experience Architect
            </p>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a href="#" className="text-foreground-muted hover:text-foreground-primary transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-foreground-muted hover:text-foreground-primary transition-colors">
              Twitter
            </a>
            <a href="#" className="text-foreground-muted hover:text-foreground-primary transition-colors">
              Dribbble
            </a>
          </div>
          
          <div className="text-sm text-foreground-muted">
            © 2024 Silvana. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
