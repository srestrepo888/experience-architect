"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
// import Link from "next/link" // Removed for React
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { EnhancedButton } from "@/components/ui/EnhancedButton"

interface NavItem {
  href: string
  label: string
  description?: string
  external?: boolean
  children?: NavItem[]
}

interface EnhancedNavigationProps {
  logo?: string
  logoHref?: string
  navItems?: NavItem[]
  ctaButton?: {
    label: string
    href: string
    external?: boolean
  }
  className?: string
}

const defaultNavItems: NavItem[] = [
  {
    href: "#about",
    label: "About",
    description: "Learn about my background and approach",
  },
  {
    href: "#projects",
    label: "Projects",
    description: "Explore my featured work and case studies",
  },
  {
    href: "#experience",
    label: "Experience",
    description: "Professional journey and expertise",
  },
  {
    href: "#services",
    label: "Services",
    description: "How I can help transform your business",
  },
  {
    href: "#contact",
    label: "Contact",
    description: "Let's discuss your next project",
  },
]

export default function EnhancedNavigation({
  logo = "silvana.",
  // logoHref = "/", // Removed unused parameter
  navItems = defaultNavItems,
  ctaButton = {
    label: "Get In Touch",
    href: "#contact",
  },
  className,
}: EnhancedNavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle smooth scrolling for anchor links
  const handleNavClick = (href: string, external?: boolean) => {
    if (!external && href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }

  // Close mobile menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false)
        setActiveDropdown(null)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <>
      <motion.nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          isScrolled ? "backdrop-perfect shadow-soft border-b border-border" : "bg-transparent",
          className,
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Perfect Typography System */}
            <a
              href="https://silvana.mmm.page/human-perspective"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.div
                className="font-serif text-2xl md:text-3xl font-extralight text-foreground transition-colors duration-200 group-hover:text-foreground/80 text-sophisticated tracking-[-0.02em]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                {logo}
              </motion.div>
            </a>

            {/* Desktop Navigation - Perfect Typography & Contrast */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    // Dropdown Menu - Enhanced Performance
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="flex items-center gap-2 py-3 px-2 text-foreground/70 hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <span className="font-sans text-base font-light tracking-[0.005em] text-sophisticated">
                          {item.label}
                        </span>
                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-full left-0 mt-3 w-72 bg-card/95 backdrop-blur-xl rounded-xl shadow-strong border border-border/50 py-3 z-50"
                          >
                            {item.children.map((child) => (
                              <a
                                key={child.label}
                                href={child.href}
                                className="block px-5 py-4 hover:bg-muted/60 transition-colors duration-150 focus-visible:outline-none focus-visible:bg-muted/60"
                                onClick={() => handleNavClick(child.href, child.external)}
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <div className="font-sans text-base font-medium text-foreground text-sophisticated tracking-[-0.01em]">
                                      {child.label}
                                    </div>
                                    {child.description && (
                                      <div className="font-sans text-sm font-light text-foreground/60 mt-1 tracking-[0.005em]">
                                        {child.description}
                                      </div>
                                    )}
                                  </div>
                                  {child.external && <ArrowUpRight className="w-4 h-4 text-foreground/40" />}
                                </div>
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    // Regular Link - Perfect Typography & Performance
                    <a
                      href={item.href}
                      className="relative py-3 px-2 text-foreground/70 hover:text-foreground transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-md"
                      onClick={() => handleNavClick(item.href, item.external)}
                      {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      <span className="font-sans text-base font-light tracking-[0.005em] text-sophisticated flex items-center gap-2">
                        {item.label}
                        {item.external && <ArrowUpRight className="w-4 h-4" />}
                      </span>
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button & Mobile Menu Toggle - Enhanced Contrast */}
            <div className="flex items-center gap-4">
              {/* Desktop CTA - Perfect Typography */}
              <div className="hidden md:block">
                <EnhancedButton
                  href={ctaButton.href}
                  external={ctaButton.external}
                  variant="primary"
                  size="md"
                  icon="external"
                  className="font-sans text-sm font-medium tracking-[0.01em]"
                >
                  {ctaButton.label}
                </EnhancedButton>
              </div>

              {/* Mobile Menu Toggle - Enhanced Performance */}
              <button
                className="lg:hidden p-3 rounded-xl text-foreground/70 hover:text-foreground hover:bg-muted/50 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Perfect Implementation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-card shadow-dramatic z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="font-serif text-2xl font-light text-foreground text-sophisticated">{logo}</div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <a
                        href={item.href}
                        className="block p-4 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
                        onClick={() => handleNavClick(item.href, item.external)}
                        {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-sans text-base font-medium text-sophisticated">{item.label}</div>
                            {item.description && (
                              <div className="font-sans text-sm font-light text-muted-foreground mt-1">
                                {item.description}
                              </div>
                            )}
                          </div>
                          {item.external && <ArrowUpRight className="w-5 h-5 text-muted-foreground" />}
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="mt-8 pt-8 border-t border-border"
                >
                  <EnhancedButton
                    href={ctaButton.href}
                    external={ctaButton.external}
                    variant="primary"
                    size="lg"
                    icon="external"
                    className="w-full"
                  >
                    {ctaButton.label}
                  </EnhancedButton>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
