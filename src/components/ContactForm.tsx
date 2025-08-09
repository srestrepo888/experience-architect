import React from "react"

export default function ContactForm() {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-light text-foreground-primary">
            Let's Create Together
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
            Ready to transform your vision into a sophisticated digital experience? Let's start a conversation.
          </p>
          
          <div className="max-w-2xl mx-auto mt-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground-primary mb-2">Name</label>
                  <input 
                    type="text" 
                    className="input w-full"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground-primary mb-2">Email</label>
                  <input 
                    type="email" 
                    className="input w-full"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground-primary mb-2">Message</label>
                <textarea 
                  className="input w-full h-32 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn bg-foreground-primary text-background-primary hover:bg-foreground-secondary transition-all duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
