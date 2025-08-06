import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Calendar, MapPin, Building2, ChevronLeft, ChevronRight } from 'lucide-react'
import { Project } from '@/lib/projects'
import { HeadingLarge, BodyLarge, Quote, Overline } from '@/components/typography'
import { AdvancedButton } from '@/components/ui/AdvancedButton'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/ui/AdvancedAnimations'
import { GradientBackground, NoiseTexture } from '@/components/ui/VisualEffects'

interface ProjectDetailModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
  onNextProject: () => void
  onPrevProject: () => void
  hasNext: boolean
  hasPrev: boolean
}

export default function ProjectDetailModal({
  project,
  isOpen,
  onClose,
  onNextProject,
  onPrevProject,
  hasNext,
  hasPrev
}: ProjectDetailModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    setCurrentImageIndex(0)
  }, [project?.slug])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!project) return null

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.galleryImages.length)
  }

  const goToPrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.galleryImages.length) % project.galleryImages.length)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-7xl max-h-[90vh] bg-background rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Scrollable Content */}
            <div className="h-full overflow-y-auto">
              {/* Hero Section */}
              <div className="relative min-h-[60vh] flex items-center">
                <GradientBackground variant="elegant" className="absolute inset-0">
                  <NoiseTexture opacity={0.02} />
                </GradientBackground>

                <div className="relative z-10 w-full px-8 py-16 md:px-12 lg:px-16">
                  <StaggerContainer staggerDelay={0.1}>
                    <StaggerItem>
                      <Overline variant="elegant" className="mb-4">
                        {project.year} • {project.industry}
                      </Overline>
                    </StaggerItem>
                    
                    <StaggerItem>
                      <HeadingLarge as="h1" variant="display" className="mb-6">
                        {project.title}
                      </HeadingLarge>
                    </StaggerItem>
                    
                    <StaggerItem>
                      <BodyLarge variant="elegant" className="mb-8 max-w-3xl">
                        {project.subtitle}
                      </BodyLarge>
                    </StaggerItem>

                    <StaggerItem>
                      <div className="flex flex-wrap gap-6 mb-8">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Building2 className="w-4 h-4" />
                          <span className="font-light">{project.client}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="font-light">{project.year}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span className="font-light">{project.location}</span>
                        </div>
                      </div>
                    </StaggerItem>

                    <StaggerItem>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.services.map((service, index) => (
                          <motion.span
                            key={service}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="px-4 py-2 bg-foreground/5 border border-foreground/10 rounded-full text-sm font-light"
                          >
                            {service}
                          </motion.span>
                        ))}
                      </div>
                    </StaggerItem>
                  </StaggerContainer>
                </div>
              </div>

              {/* Project Content */}
              <div className="px-8 py-16 md:px-12 lg:px-16">
                <div className="max-w-4xl mx-auto">
                  <StaggerContainer staggerDelay={0.2}>
                    <StaggerItem>
                      <div className="mb-12">
                        <HeadingLarge as="h2" variant="elegant" className="mb-6">
                          Context
                        </HeadingLarge>
                        <BodyLarge variant="elegant" className="leading-relaxed">
                          {project.context.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="mb-4">
                              {paragraph}
                            </p>
                          ))}
                        </BodyLarge>
                      </div>
                    </StaggerItem>

                    <StaggerItem>
                      <div className="mb-12">
                        <HeadingLarge as="h2" variant="elegant" className="mb-6">
                          Scope
                        </HeadingLarge>
                        <BodyLarge variant="elegant" className="leading-relaxed">
                          {project.scope.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="mb-4">
                              {paragraph}
                            </p>
                          ))}
                        </BodyLarge>
                      </div>
                    </StaggerItem>

                    <StaggerItem>
                      <div className="mb-12">
                        <HeadingLarge as="h2" variant="elegant" className="mb-6">
                          Impact
                        </HeadingLarge>
                        <BodyLarge variant="elegant" className="leading-relaxed">
                          {project.impact.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="mb-4">
                              {paragraph}
                            </p>
                          ))}
                        </BodyLarge>
                      </div>
                    </StaggerItem>
                  </StaggerContainer>
                </div>
              </div>

              {/* Gallery Section */}
              {project.galleryImages.length > 0 && (
                <div className="px-8 py-16 md:px-12 lg:px-16 bg-muted/20">
                  <div className="max-w-6xl mx-auto">
                    <FadeInUp>
                      <HeadingLarge as="h2" variant="elegant" className="text-center mb-12">
                        Project Gallery
                      </HeadingLarge>
                    </FadeInUp>

                    <div className="relative">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImageIndex}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.5 }}
                          className="relative aspect-video rounded-2xl overflow-hidden"
                        >
                          <img
                            src={project.galleryImages[currentImageIndex].src}
                            alt={project.galleryImages[currentImageIndex].alt}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        </motion.div>
                      </AnimatePresence>

                      {/* Navigation Controls */}
                      {project.galleryImages.length > 1 && (
                        <>
                          <motion.button
                            onClick={goToPrevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ChevronLeft className="w-6 h-6 text-foreground" />
                          </motion.button>

                          <motion.button
                            onClick={goToNextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ChevronRight className="w-6 h-6 text-foreground" />
                          </motion.button>

                          {/* Image Counter */}
                          <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                            {currentImageIndex + 1} / {project.galleryImages.length}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Testimonial Section */}
              {project.testimonial && (
                <div className="px-8 py-16 md:px-12 lg:px-16">
                  <div className="max-w-4xl mx-auto text-center">
                    <FadeInUp>
                      <Quote variant="elegant" attribution={`${project.testimonial.author}, ${project.testimonial.role}`}>
                        {project.testimonial.quote}
                      </Quote>
                    </FadeInUp>
                  </div>
                </div>
              )}

              {/* Navigation Section */}
              <div className="px-8 py-16 md:px-12 lg:px-16 border-t border-border/50">
                <div className="max-w-4xl mx-auto">
                  <div className="flex flex-col sm:flex-row gap-6 justify-between items-center">
                    <div className="flex items-center gap-4">
                      <AdvancedButton
                        onClick={onPrevProject}
                        variant="outline"
                        size="lg"
                        icon={<ChevronLeft className="w-4 h-4" />}
                        iconPosition="left"
                        disabled={!hasPrev}
                      >
                        Previous Project
                      </AdvancedButton>
                    </div>

                    <div className="flex items-center gap-4">
                      {project.webpage && (
                        <AdvancedButton
                          href={project.webpage}
                          variant="elegant"
                          size="lg"
                          icon={<ExternalLink className="w-4 h-4" />}
                          iconPosition="right"
                        >
                          Visit Live Site
                        </AdvancedButton>
                      )}
                      
                      <AdvancedButton
                        onClick={onNextProject}
                        variant="primary"
                        size="lg"
                        icon={<ChevronRight className="w-4 h-4" />}
                        iconPosition="right"
                        disabled={!hasNext}
                      >
                        Next Project
                      </AdvancedButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 