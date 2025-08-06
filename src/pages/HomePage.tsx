import CinematicHero from '@/components/CinematicHero'
import MasterpieceProjectsShowcase from '@/components/MasterpieceProjectsShowcase'
import { PerfectSection, PerfectSectionHeader } from '@/components/ui/PerfectSection'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import EnhancedNavigation from '@/components/EnhancedNavigation'
import DetailedServicesSection from '@/components/DetailedServicesSection'
import AnimatedExperience from '@/components/AnimatedExperience'
import { PerfectGrid } from '@/components/ui/PerfectGrid'
import { Quote, BodyLarge } from '@/components/typography'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/ui/AdvancedAnimations'
import { EnhancedButton } from '@/components/ui/EnhancedButton'
import { PortraitImage } from '@/components/ui/PerfectImageContainer'
import { ElegantBackground } from '@/components/ui/VisualEffects'
import { DESIGN_SYSTEM } from '@/lib/design-system'
import { cn } from '@/lib/utils'

export default function HomePage() {
  return (
    <>
      <EnhancedNavigation />
      <main>
        <CinematicHero />

        {/* About Section - Enhanced Layout */}
        <ElegantBackground variant="elegant" textureOpacity={0.03} animated={true}>
          <PerfectSection 
            id="about" 
            spacing="spacious" 
            container="content"
            background="none"
            padding="hero"
          >
          <FadeInUp delay={0.2}>
            <PerfectSectionHeader
              overline="01 — About"
              title="Experience Architect"
              subtitle="I believe the most compelling stories begin with curiosity—a spark that has carried me across continents blending diverse perspectives from anthropology to business, from innovation to experience design."
              align="center"
              spacing="spacious"
            />
          </FadeInUp>
          <PerfectGrid 
            cols={2} 
            gap="dramatic" 
            className="items-center"
            align="center"
          >
            <div>
              <StaggerContainer staggerDelay={0.2}>
                <StaggerItem>
                  <BodyLarge variant="elegant">
                    At my core, I am an architect of invisible systems, adept at listening to unspoken and designing
                    experiences that touch the human soul. I have embarked on projects ranging from wellness movements to
                    creating AI-driven platforms that empower developers worldwide.
                  </BodyLarge>
                </StaggerItem>
                <StaggerItem>
                  <Quote variant="elegant" className="my-10">
                    Each endeavour brings me closer to my mission: connecting strategic business goals with the essence of
                    the human perspective.
                  </Quote>
                </StaggerItem>
                <StaggerItem>
                  <BodyLarge variant="elegant" className="mb-10">
                    Welcome to my world—where strategy meets soul, and design becomes the universal language of possibility!
                  </BodyLarge>
                </StaggerItem>
              </StaggerContainer>
              <EnhancedButton
                href="https://silvanarestrepoportfolio.vercel.app/"
                external={true}
                variant="secondary"
                size="lg"
                icon="download"
              >
                Download CV
              </EnhancedButton>
            </div>
            <div className="relative">
              <div
                className="relative"
                style={{
                  maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
                }}
              >
                <PortraitImage
                  src="/silvana-portrait-transparent.png"
                  alt="A portrait of Silvana Restrepo with a transparent background."
                  hover={false}
                  rounded="none"
                  objectFit="contain"
                  className="w-full max-w-md mx-auto"
                />
              </div>
              <div className={cn(
                DESIGN_SYSTEM.margins.top.lg,
                "text-center"
              )}>
                <Quote variant="elegant" attribution="Silvana" className="mx-auto">
                  "The art of my craft lies in listening to the unspoken, seeing the invisible, and touching the
                  intangible essence of human desire."
                </Quote>
              </div>
            </div>
          </PerfectGrid>
        </PerfectSection>
        </ElegantBackground>

        {/* Masterpiece Projects Showcase - Enhanced Layout */}
        <PerfectSection 
          id="projects" 
          spacing="showcase" 
          container="full" 
          background="pattern"
          padding="section"
        >
          <div className={DESIGN_SYSTEM.padding.section}>
            <PerfectSectionHeader
              overline="02 — Selected Works"
              title="Crafting Digital Masterpieces"
              subtitle="A curated selection of projects that demonstrate a commitment to design excellence, strategic thinking, and impactful user experiences."
              align="center"
              spacing="spacious"
            />
          </div>
          <MasterpieceProjectsShowcase />
        </PerfectSection>

        {/* Experience Section - Enhanced Layout */}
        <PerfectSection 
          id="experience" 
          spacing="spacious" 
          container="content"
          background="gradient"
          padding="section"
        >
          <PerfectSectionHeader
            overline="03 — Journey"
            title="Professional Experience"
            subtitle="With over a decade of experience across diverse industries, I've developed a unique perspective on design and strategy. My career journey has equipped me with the skills to navigate complex challenges and deliver impactful solutions."
            align="center"
            spacing="spacious"
          />
          <AnimatedExperience />
        </PerfectSection>

        {/* Services Section - Enhanced Layout */}
        <PerfectSection 
          id="services" 
          spacing="spacious" 
          container="full" 
          background="subtle"
          padding="section"
        >
          <div className={DESIGN_SYSTEM.padding.section}>
            <PerfectSectionHeader
              overline="04 — Services"
              title="Design Excellence"
              subtitle="Meticulously architected solutions addressing demanding market realities and evolving client's needs."
              align="center"
              spacing="spacious"
            />
            <DetailedServicesSection />
          </div>
        </PerfectSection>

        {/* Contact Section - Enhanced Layout */}
        <PerfectSection 
          id="contact" 
          spacing="contact" 
          container="narrow"
          background="gradient"
          padding="section"
        >
          <PerfectSectionHeader
            align="center"
            overline="05 — Contact"
            title="Let's Create Together"
            subtitle="Have a project in mind? I'd love to hear about it. Let's connect and build something exceptional."
            spacing="spacious"
          />
          <div className={cn(
            DESIGN_SYSTEM.margins.top.xl,
            "max-w-2xl mx-auto"
          )}>
            <ContactForm />
          </div>
        </PerfectSection>
      </main>
      <Footer />
    </>
  )
} 