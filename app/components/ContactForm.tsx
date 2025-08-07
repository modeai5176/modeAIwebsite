"use client"

import { useState } from "react"
import { ArrowRight, Phone, Mail, MessageCircle, Calendar, CheckCircle } from "lucide-react"
import StarBorder from "./StarBorder"

interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  businessType: string
  message: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    businessType: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          businessType: "",
          message: ""
        })
      } else {
        console.error("Form submission error:", result.error)
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="glass-card-strong border border-white/10 rounded-3xl p-8 md:p-12 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-vivid-green to-soft-green rounded-full flex items-center justify-center mb-6 mx-auto">
          <CheckCircle className="text-white" size={32} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
        <p className="text-text-muted text-lg mb-6">
          We've received your request and will contact you within 24 hours to schedule your free AI strategy call.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-text-muted">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+1-780-908-2320</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>hello@mode-ai.co</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="glass-card-strong border border-white/10 rounded-3xl p-8 md:p-12">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-neon-pink to-bright-aqua rounded-full flex items-center justify-center mb-6 mx-auto">
          <Calendar className="text-white" size={32} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Book Your Free AI Strategy Call
        </h2>
        <p className="text-text-muted text-lg">
          Get a personalized automation audit and discover how AI can transform your business
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-bright-aqua transition-colors duration-300"
              placeholder="Your full name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-bright-aqua transition-colors duration-300"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-bright-aqua transition-colors duration-300"
              placeholder="+1 (555) 123-4567"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-bright-aqua transition-colors duration-300"
              placeholder="Your company name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="businessType" className="block text-sm font-medium text-white mb-2">
            Business Type *
          </label>
          <select
            id="businessType"
            name="businessType"
            value={formData.businessType}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-bright-aqua transition-colors duration-300"
          >
            <option value="">Select your business type</option>
            <option value="law-firm">Law Firm</option>
            <option value="healthcare-clinic">Healthcare Clinic</option>
            <option value="real-estate">Real Estate</option>
            <option value="consulting">Consulting/Coaching</option>
            <option value="financial-services">Financial Services</option>
            <option value="ecommerce">E-commerce</option>
            <option value="saas">SaaS/Tech</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
            Tell us about your current challenges
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-bright-aqua transition-colors duration-300 resize-none"
            placeholder="What are your biggest pain points with missed calls, lead capture, or manual processes?"
          />
        </div>

        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <div className="flex items-start gap-3">
            <CheckCircle className="text-vivid-green mt-1 flex-shrink-0" size={20} />
            <div className="text-sm text-text-muted">
              <p className="font-medium text-white mb-1">What's included in your free strategy call:</p>
              <ul className="space-y-1">
                <li>• 30-minute personalized automation audit</li>
                <li>• Custom automation recommendations</li>
                <li>• ROI projections for your business</li>
                <li>• Implementation timeline</li>
              </ul>
            </div>
          </div>
        </div>

        <StarBorder
          as="button"
          type="submit"
          disabled={isSubmitting}
          className="font-heading-semibold hover:shadow-primary-glow transition-all duration-300 inline-flex items-center w-full justify-center py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Scheduling Your Call...
            </>
          ) : (
            <>
              <Calendar className="mr-2" size={20} />
              Book My Free Strategy Call
              <ArrowRight className="ml-2" size={20} />
            </>
          )}
        </StarBorder>

        <p className="text-xs text-text-muted text-center">
          By submitting this form, you agree to receive communications from Mode AI. We respect your privacy and will never share your information.
        </p>
      </form>
    </div>
  )
}

export default ContactForm 