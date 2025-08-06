import React, { useState } from "react"
import { motion } from "framer-motion"
import { AdvancedButton } from "@/components/ui/AdvancedButton"
import { SophisticatedInput } from "@/components/ui/SophisticatedInput"
import { HeadingSmall, BodyMedium } from "@/components/typography"
import { Loader2, CheckCircle, AlertTriangle } from "lucide-react"

interface FormState {
  message: string
  status: "idle" | "loading" | "success" | "error"
}

const initialState: FormState = {
  message: "",
  status: "idle",
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormState({ ...formState, status: "loading" })

    // Simulate form submission (replace with actual email service)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
      setFormState({ message: "Message sent successfully!", status: "success" })
      setFormData({ name: "", email: "", message: "" })
    } catch {
      setFormState({ message: "Failed to send message. Please try again.", status: "error" })
    }
  }



  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <motion.div
        className="text-center mb-8 md:mb-12 lg:mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <HeadingSmall as="h3" className="mb-2 text-foreground">
          Send a Message
        </HeadingSmall>
        <BodyMedium className="text-muted-foreground max-w-md mx-auto">
          Have a project in mind or just want to say hi? Fill out the form below and I&apos;ll get back to you.
        </BodyMedium>
      </motion.div>

      {/* Status Message */}
      {formState.status !== "idle" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
            formState.status === "success" 
              ? "bg-green-50 border border-green-200 text-green-800" 
              : formState.status === "error"
              ? "bg-red-50 border border-red-200 text-red-800"
              : "bg-blue-50 border border-blue-200 text-blue-800"
          }`}
        >
          {formState.status === "loading" && <Loader2 className="w-5 h-5 animate-spin" />}
          {formState.status === "success" && <CheckCircle className="w-5 h-5" />}
          {formState.status === "error" && <AlertTriangle className="w-5 h-5" />}
          <span className="text-sm font-medium">{formState.message}</span>
        </motion.div>
      )}

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6 md:space-y-8"
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <SophisticatedInput
            label="Full Name"
            type="text"
            value={formData.name}
            onChange={(value) => setFormData(prev => ({ ...prev, name: value }))}
            required
            placeholder="Your Name"
            variant="elegant"
            size="lg"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SophisticatedInput
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={(value) => setFormData(prev => ({ ...prev, email: value }))}
            required
            placeholder="you@example.com"
            variant="elegant"
            size="lg"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SophisticatedInput
            label="Message"
            type="textarea"
            value={formData.message}
            onChange={(value) => setFormData(prev => ({ ...prev, message: value }))}
            required
            rows={6}
            placeholder="Tell me about your project or just say hello..."
            variant="elegant"
            size="lg"
          />
        </motion.div>
        <motion.div variants={itemVariants} className="pt-4">
          <AdvancedButton
            onClick={() => {}} // Form submission is handled by onSubmit
            disabled={formState.status === "loading"}
            loading={formState.status === "loading"}
            variant="elegant"
            size="lg"
            fullWidth
            className="w-full"
          >
            {formState.status === "loading" ? "Sending..." : "Send Message"}
          </AdvancedButton>
        </motion.div>
      </motion.form>
    </div>
  )
}
