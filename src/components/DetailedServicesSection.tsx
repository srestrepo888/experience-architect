"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Palette, Zap, Users, Target, Lightbulb, MapIcon as Sitemap } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Users,
    title: "Transformation Leadership",
    description:
      "I guide organizations by tuning into their cultural frequencies. Change happens when strategy harmonizes with the collective heartbeat of teams and communities.",
    case: "Une-Millicom Telecommunications-Merger & Adquisitions New Markets",
  },
  {
    icon: Zap,
    title: "Scale Experience Systems",
    description:
      "I cultivate spaces with distinct energetic signatures—environments that spark breakthrough thinking. The right atmosphere transforms potential into reality, whether for megaprojects or intimate startups.",
    case: "Kayanee-PIF Company-Phygital System",
  },
  {
    icon: Target,
    title: "Strategic Design",
    description:
      "My approach to Strategic Design architectures converts ecosystems complexity into structured implementation roadmaps with measurable ROI.",
    case: "Centre for the Fourth Industrial Revolution (C4IR)",
  },
  {
    icon: Palette,
    title: "Experience Orchestration",
    description:
      "I compose service symphonies where every interaction contributes to the emotional arc. Thousands of moments, one cohesive feeling that stays with people long after.",
    case: "Nomade Tulum Digital Hospitality",
  },
  {
    icon: Lightbulb,
    title: "Product Strategy Evolution",
    description:
      "I infuse products with soul—designing not just what they do, but how they make people feel. Each feature carries intention, creating atmospheres where users naturally thrive.",
    case: "Johnson & Johnson CHiME Care",
  },
  {
    icon: Sitemap,
    title: "Intelligence Amplification Design",
    description:
      "I choreograph the dance between human intuition and machine precision. Creating spaces where both energies complement rather than compete, amplifying our collective wisdom.",
    case: "Augoor-Globant X",
  },
]

export default function DetailedServicesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mt-12 md:mt-16 lg:mt-20">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Card className="h-full flex flex-col group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6 md:p-8 lg:p-10 flex flex-col flex-grow">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              <h3 className="text-xl font-semibold mb-4 text-card-foreground">{service.title}</h3>

              <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{service.description}</p>

              <div className="mt-auto">
                <div className="mb-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Featured Business Case
                  </p>
                  <p className="text-sm text-card-foreground mt-1">{service.case}</p>
                </div>

                <div className="pt-6 border-t border-border">
                  <button className="flex items-center gap-2 text-sm font-medium text-card-foreground hover:text-muted-foreground transition-colors group">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
