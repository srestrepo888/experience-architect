import { motion } from "framer-motion"
import CinematicHero from "@/components/CinematicHero"
import AnimatedExperience from "@/components/AnimatedExperience"
import MasterpieceProjectsShowcase from "@/components/MasterpieceProjectsShowcase"
import DetailedServicesSection from "@/components/DetailedServicesSection"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"
import { DESIGN_SYSTEM } from "@/lib/design-system"

// CONTENT CLARITY AND NARRATIVE FLOW
// Each page section has a single intent: Introduce, Support, Prove, Invite

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background-primary">
      {/* SECTION 1: INTRODUCE - Cinematic Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: DESIGN_SYSTEM.motion.ease.primary }}
      >
        <CinematicHero />
      </motion.section>

      {/* SECTION 2: SUPPORT - Experience & Services */}
      <motion.section
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: DESIGN_SYSTEM.motion.ease.primary }}
      >
        <div className="container">
          {/* Experience Section - Supporting the introduction */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: DESIGN_SYSTEM.motion.ease.primary }}
            className="space-xl"
          >
            <AnimatedExperience />
          </motion.div>

          {/* Services Section - Supporting the value proposition */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.4, duration: 0.8, ease: DESIGN_SYSTEM.motion.ease.primary }}
            className="space-xl"
          >
            <DetailedServicesSection />
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 3: PROVE - Portfolio Showcase */}
      <motion.section
        className="section bg-background-secondary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: DESIGN_SYSTEM.motion.ease.primary }}
      >
        <div className="container-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: DESIGN_SYSTEM.motion.ease.primary }}
          >
            <MasterpieceProjectsShowcase />
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 4: INVITE - Contact & Call to Action */}
      <motion.section
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: DESIGN_SYSTEM.motion.ease.primary }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: DESIGN_SYSTEM.motion.ease.primary }}
            className="space-xl"
          >
            <ContactForm />
          </motion.div>
        </div>
      </motion.section>

      {/* Footer - Supporting the complete experience */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: DESIGN_SYSTEM.motion.ease.primary }}
      >
        <Footer />
      </motion.footer>
    </div>
  )
} 