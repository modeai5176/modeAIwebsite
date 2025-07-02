"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight } from "lucide-react"
import SplashCursor from "../components/SplashCursor"
import StarBorder from "../components/StarBorder"
import Link from "next/link"
import { motion, useInView, Variants } from "framer-motion"
import styles from "./ProcessSection.module.css"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const result = await res.json()
      if (result.success) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          message: "",
        })
        setTimeout(() => setIsSubmitted(false), 3000)
      } else {
        alert('Failed to send message: ' + (result.error || 'Unknown error'))
      }
    } catch (error) {
      alert('Failed to send message: ' + (error instanceof Error ? error.message : 'Unknown error'))
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 70835-89845", "+971 054 303 9984", "+1 (780) 908-2320"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["admin@mode-ai.co"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      title: "Based In",
      details: ["India, UAE, Canada"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM"],
      color: "from-orange-500 to-red-500",
    },
  ]

  const services = [
    "Custom AI Agents",
    "Business Process Automation",
    "Data Intelligence Solutions",
    "AI Security & Compliance",
    "Digital Transformation",
    "AI Consulting & Strategy",
  ]

  return (
    <div className="bg-gradient-to-b from-primary-bg via-primary-secondary to-primary-bg">
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(156,77,255,0.1),transparent_70%)]"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-7xl font-bold font-sora text-text-primary mb-8 leading-tight">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-text-muted font-inter max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with soulful automation? Let's discuss how our AI solutions can drive
              growth and efficiency for your organization.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(166,134,209,0.05),transparent_70%)]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="glass-card-strong border border-white/10 rounded-2xl p-8">
                <h2 className="text-3xl font-bold font-sora text-text-primary mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-text-primary font-semibold font-poppins mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-primary-bg border border-border-gray rounded-xl text-text-primary font-inter focus:outline-none focus:border-accent-purple transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-text-primary font-semibold font-poppins mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-primary-bg border border-border-gray rounded-xl text-text-primary font-inter focus:outline-none focus:border-accent-purple transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-text-primary font-semibold font-poppins mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-primary-bg border border-border-gray rounded-xl text-text-primary font-inter focus:outline-none focus:border-accent-purple transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-text-primary font-semibold font-poppins mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-primary-bg border border-border-gray rounded-xl text-text-primary font-inter focus:outline-none focus:border-accent-purple transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-text-primary font-semibold font-poppins mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-primary-bg border border-border-gray rounded-xl text-text-primary font-inter focus:outline-none focus:border-accent-purple transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-text-primary font-semibold font-poppins mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-primary-bg border border-border-gray rounded-xl text-text-primary font-inter focus:outline-none focus:border-accent-purple transition-colors duration-300 resize-vertical"
                    />
                  </div>

                  <div className="flex justify-center">
                  <StarBorder
                    as="button"
                    type="submit"
                    disabled={isSubmitted}
                      className="font-bold font-poppins hover:shadow-primary-glow transition-all duration-300 inline-flex items-center text-lg whitespace-nowrap px-8 py-4 disabled:opacity-60"
                    color="#A686D1"
                    speed="2.5s"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="mr-2" size={20} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Send Message
                      </>
                    )}
                  </StarBorder>
                  </div>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold font-sora text-text-primary mb-6">Contact Information</h2>
                  <p className="text-text-muted font-inter leading-relaxed mb-8">
                    We're here to help you transform your business with AI. Reach out to us through any of the channels
                    below, and our team will get back to you within 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="glass-card-strong border border-white/10 rounded-2xl p-6 card-3d hover:shadow-card-glow transition-all duration-300"
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mb-4`}
                      >
                        <info.icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold font-poppins text-text-primary mb-3">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-text-muted font-inter">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,46,197,0.03),transparent_70%)]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-sora text-text-primary mb-6">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-lg text-text-muted font-inter max-w-2xl mx-auto">
                Quick answers to common questions about our services and process.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "How long does it take to implement an AI solution?",
                  answer:
                    "Implementation timelines vary based on project complexity, but typically range from 4-12 weeks. We provide detailed project timelines during our initial consultation.",
                },
                {
                  question: "Do you provide ongoing support after implementation?",
                  answer:
                    "Yes, we offer comprehensive support packages including monitoring, maintenance, updates, and training to ensure your AI solutions continue to deliver value.",
                },
                {
                  question: "Can you integrate with our existing systems?",
                  answer:
                    "Absolutely. Our solutions are designed to seamlessly integrate with your existing infrastructure, minimizing disruption to your current operations.",
                },
                {
                  question: "What industries do you serve?",
                  answer:
                    "We work with businesses across various industries including healthcare, finance, manufacturing, retail, and professional services. Our solutions are customized for each sector's unique needs.",
                },
                {
                  question: "How do you ensure data security and privacy?",
                  answer:
                    "We implement enterprise-grade security measures, comply with industry standards, and follow strict data privacy protocols to protect your sensitive information.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="glass-card-strong border border-white/10 rounded-2xl p-6 hover:shadow-card-glow transition-all duration-300"
                >
                  <h3 className="text-xl font-bold font-poppins text-text-primary mb-3">{faq.question}</h3>
                  <p className="text-text-muted font-inter leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(156,77,255,0.15),transparent_70%)]"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold font-sora text-text-primary mb-8">
              Ready to <span className="gradient-text">Get Started</span>?
            </h2>
            <p className="text-xl text-text-muted font-inter mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your AI automation needs and discover how we can help transform
              your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+9170835-89845"
                className="metallic-fluid-btn bg-gradient-purple text-white px-10 py-5 rounded-full font-bold font-poppins hover:shadow-purple-glow transition-all duration-300 glow-effect inline-flex items-center text-lg"
              >
                <Phone className="mr-3" size={24} />
                Call Now
              </a>
              <a
                href="mailto:admin@mode-ai.co"
                className="border border-accent-purple text-accent-purple px-10 py-5 rounded-full font-bold font-poppins hover:bg-accent-purple hover:text-white transition-all duration-300 inline-flex items-center text-lg"
              >
                <Mail className="mr-3" size={24} />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
