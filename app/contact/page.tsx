"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ChevronDown,
  XCircle,
  ArrowRight,
} from "lucide-react";

import StarBorder from "../components/StarBorder";
import { motion, useInView, Variants } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phoneCode: "+1",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  // Animation refs
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const contactInfoRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const contactInfoInView = useInView(contactInfoRef, {
    once: true,
    margin: "-100px",
  });
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: `${formData.phoneCode}${formData.phone}`.replace(/\s+/g, ""),
          company: formData.company,
          service: formData.service,
          message: formData.message,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          phoneCode: "+1",
          phone: "",
          service: "",
          message: "",
        });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        setError(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const numbers = value.replace(/\D/g, "");
    // Format based on length
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6)
      return `${numbers.slice(0, 3)} ${numbers.slice(3)}`;
    return `${numbers.slice(0, 3)} ${numbers.slice(3, 6)} ${numbers.slice(
      6,
      10
    )}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({
      ...formData,
      phone: formatted,
    });
    if (error) setError(null);
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: [
        "🇮🇳 +91 70835 89845",
        "🇦🇪 +971 054 303 9984",
        "🇨🇦 +1 780 908 2320",
      ],
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
      details: ["Mon–Fri: 9 AM – 6 PM", "Sat: 10 AM – 2 PM"],
      color: "from-orange-500 to-red-500",
    },
  ];

  const services = [
    "Website Development",
    "Business Process Automation (BPA)",
    "CRM Automation",
    "AI Workflows & Custom AI Development",
    "Custom API Integrations",
    "AI Agents",
    "Website Automation",
    "Digital Marketing and SEO",
    "Automated Email Marketing and SMS Marketing",
  ];

  return (
    <div className="bg-gradient-to-b from-primary-bg via-primary-secondary to-primary-bg">
      <div className="pt-20">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="py-32 md:py-40 relative overflow-hidden min-h-[60vh] flex items-center"
        >
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(156,77,255,0.12),transparent_70%)]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ filter: "blur(60px)" }}
          ></motion.div>
          <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
            <motion.div
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-heading-bold text-text-primary mb-6 leading-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                Let's Build Something{" "}
                <span className="gradient-text">Intelligent Together</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-white/70 font-body-regular max-w-2xl mx-auto mb-10 leading-relaxed"
                style={{ lineHeight: "1.6" }}
              >
                Whether you're exploring AI for the first time or ready to
                automate your workflows, we'll help you design a smarter
                tomorrow.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.a
                  href="#contact-form"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(166, 134, 209, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="font-heading-semibold bg-gradient-to-r from-accent-purple to-pink-500 text-white px-8 py-4 rounded-full transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 via-pink-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></span>
                  <span className="relative z-10">Book a Consultation</span>
                </motion.a>
                <motion.a
                  href="#contact-info"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="font-heading-semibold border-2 border-accent-purple/50 text-accent-purple hover:border-accent-purple hover:bg-accent-purple/10 transition-all duration-300 inline-flex items-center text-lg whitespace-nowrap px-8 py-4 rounded-full relative group"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-purple/5 via-pink-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></span>
                  <span className="relative z-10">Talk to Our Team</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section id="contact-form" className="py-28 md:py-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(166,134,209,0.05),transparent_70%)]"></div>
          <div className="container mx-auto px-6 relative z-10 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                ref={formRef}
                initial="hidden"
                animate={formInView ? "visible" : "hidden"}
                variants={cardVariants}
                className="glass-card-strong border border-white/10 rounded-2xl p-8 lg:p-10"
              >
                <h2 className="text-3xl font-heading-bold text-text-primary mb-6">
                  Send Us a Message
                </h2>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3"
                  >
                    <XCircle className="text-red-500 flex-shrink-0" size={20} />
                    <p className="text-red-400 font-body-regular text-sm">
                      {error}
                    </p>
                  </motion.div>
                )}
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 0.2,
                      }}
                      className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="text-white" size={32} />
                    </motion.div>
                    <h3 className="text-2xl font-heading-bold text-text-primary mb-3">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-white/70 font-body-regular">
                      We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-text-primary font-heading-medium mb-2"
                      >
                        Full Name *
                      </label>
                      <motion.input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        whileFocus={{ scale: 1.01 }}
                        className="w-full px-4 py-3 bg-primary-bg border border-border-gray rounded-xl text-text-primary font-body-regular focus:outline-none focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-text-primary font-heading-medium mb-2"
                      >
                        Company Name
                      </label>
                      <motion.input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        whileFocus={{ scale: 1.01 }}
                        className="w-full px-4 py-3 bg-primary-bg border border-border-gray rounded-xl text-text-primary font-body-regular focus:outline-none focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-text-primary font-heading-medium mb-2"
                      >
                        Work Email *
                      </label>
                      <motion.input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        whileFocus={{ scale: 1.01 }}
                        className="w-full px-4 py-3 bg-primary-bg border border-border-gray rounded-xl text-text-primary font-body-regular focus:outline-none focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-text-primary font-heading-medium mb-2">
                        Phone Number
                      </label>
                      <motion.div
                        whileFocus={{ scale: 1.01 }}
                        className="w-full bg-primary-bg border border-border-gray rounded-xl text-text-primary focus-within:border-accent-purple focus-within:ring-2 focus-within:ring-accent-purple/20 transition-all duration-300 flex items-center"
                      >
                        <select
                          id="phoneCode"
                          name="phoneCode"
                          value={formData.phoneCode}
                          onChange={handleChange}
                          className="bg-transparent pl-1 pr-1 py-3 outline-none w-[3rem] md:w-[4.25rem] lg:w-[4.85rem] shrink-0 text-sm"
                        >
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+91">🇮🇳 +91</option>
                          <option value="+971">🇦🇪 +971</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+61">🇦🇺 +61</option>
                          <option value="+65">🇸🇬 +65</option>
                          <option value="+81">🇯🇵 +81</option>
                          <option value="+86">🇨🇳 +86</option>
                          <option value="+49">🇩🇪 +49</option>
                          <option value="+33">🇫🇷 +33</option>
                          <option value="+39">🇮🇹 +39</option>
                          <option value="+34">🇪🇸 +34</option>
                          <option value="+7">🇷🇺 +7</option>
                          <option value="+55">🇧🇷 +55</option>
                          <option value="+52">🇲🇽 +52</option>
                          <option value="+27">🇿🇦 +27</option>
                          <option value="+64">🇳🇿 +64</option>
                          <option value="+353">🇮🇪 +353</option>
                          <option value="+351">🇵🇹 +351</option>
                          <option value="+31">🇳🇱 +31</option>
                          <option value="+41">🇨🇭 +41</option>
                          <option value="+46">🇸🇪 +46</option>
                          <option value="+47">🇳🇴 +47</option>
                          <option value="+358">🇫🇮 +358</option>
                          <option value="+90">🇹🇷 +90</option>
                          <option value="+966">🇸🇦 +966</option>
                          <option value="+974">🇶🇦 +974</option>
                          <option value="+965">🇰🇼 +965</option>
                          <option value="+968">🇴🇲 +968</option>
                          <option value="+20">🇪🇬 +20</option>
                          <option value="+254">🇰🇪 +254</option>
                          <option value="+233">🇬🇭 +233</option>
                          <option value="+234">🇳🇬 +234</option>
                        </select>
                        <div className="h-6 border-l border-border-gray mx-0.5" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          required
                          placeholder="123 456 7890"
                          maxLength={12}
                          className="flex-1 bg-transparent px-3 py-3 outline-none"
                        />
                      </motion.div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-text-primary font-heading-medium mb-2"
                      >
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-primary-bg border border-border-gray rounded-xl text-text-primary font-body-regular focus:outline-none focus:border-accent-purple transition-colors duration-300"
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
                      <label
                        htmlFor="message"
                        className="block text-text-primary font-heading-medium mb-2"
                      >
                        Message *
                      </label>
                      <motion.textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        whileFocus={{ scale: 1.01 }}
                        className="w-full px-4 py-3 bg-primary-bg border border-border-gray rounded-xl text-text-primary font-body-regular focus:outline-none focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 transition-all duration-300 resize-vertical"
                      />
                    </div>

                    <div className="flex justify-center pt-2">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 0 20px rgba(166, 134, 209, 0.4)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="font-heading-semibold bg-gradient-to-r from-accent-purple to-pink-500 text-white px-10 py-4 rounded-full transition-all duration-300 relative overflow-hidden group disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 via-pink-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></span>
                        <span className="relative z-10 inline-flex items-center">
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2" size={20} />
                              Send Message
                            </>
                          )}
                        </span>
                      </motion.button>
                    </div>
                  </form>
                )}
              </motion.div>

              {/* Contact Information */}
              <motion.div
                id="contact-info"
                ref={contactInfoRef}
                initial="hidden"
                animate={contactInfoInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="space-y-8"
              >
                <motion.div variants={fadeInUp}>
                  <h2 className="text-3xl font-heading-bold text-text-primary mb-6">
                    Contact Information
                  </h2>
                  <p className="text-white/70 font-body-regular leading-relaxed mb-8">
                    We're here to help you transform your business with AI.
                    Reach out to us through any of the channels below, and our
                    team will get back to you within 24 hours.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      whileHover={{ y: -6, scale: 1.02 }}
                      className="glass-card-strong border border-white/10 rounded-2xl p-6 hover:shadow-card-glow transition-all duration-300 relative group overflow-hidden"
                    >
                      <motion.div
                        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                        style={{
                          background: `linear-gradient(135deg, rgba(166, 134, 209, 0.2), rgba(156, 77, 255, 0.2), rgba(255, 46, 197, 0.2))`,
                          filter: "blur(10px)",
                        }}
                      />
                      <motion.div
                        className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        <info.icon size={24} className="text-white" />
                      </motion.div>
                      <h3 className="text-xl font-heading-semibold text-text-primary mb-3">
                        {info.title}
                      </h3>
                      <div className="space-y-2">
                        {info.details.map((detail, detailIndex) => {
                          const isEmail = detail.includes("@");
                          const isPhone = detail.includes("+");
                          return (
                            <p
                              key={detailIndex}
                              className={`text-white/70 font-body-regular ${
                                isEmail || isPhone
                                  ? "hover:text-accent-purple transition-colors cursor-pointer"
                                  : ""
                              }`}
                              onClick={
                                isEmail
                                  ? () => window.open(`mailto:${detail}`)
                                  : isPhone
                                  ? () =>
                                      window.open(
                                        `tel:${detail.replace(/\D/g, "")}`
                                      )
                                  : undefined
                              }
                            >
                              {detail}
                            </p>
                          );
                        })}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={faqRef} className="py-28 md:py-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,46,197,0.03),transparent_70%)]"></div>
          <div className="container mx-auto px-6 relative z-10 max-w-4xl">
            <motion.div
              initial="hidden"
              animate={faqInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading-bold text-text-primary mb-4 relative">
                Have Questions? We've Got{" "}
                <span className="gradient-text">Answers</span>
                <motion.div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-accent-purple to-pink-500 rounded-full opacity-30"
                  initial={{ scaleX: 0 }}
                  animate={faqInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.3, duration: 0.6 }}
                />
              </h2>
              <p className="text-lg text-white/70 font-body-regular max-w-2xl mx-auto mt-6">
                Quick answers to common questions about our services and
                process.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={faqInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="max-w-4xl mx-auto space-y-6"
            >
              {[
                {
                  question:
                    "How long does it take to implement an AI solution?",
                  answer:
                    "Implementation timelines vary based on project complexity, but typically range from 4-12 weeks. We provide detailed project timelines during our initial consultation.",
                },
                {
                  question:
                    "Do you provide ongoing support after implementation?",
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
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className={`glass-card-strong border rounded-2xl overflow-hidden transition-all duration-300 ${
                    expandedFaq === index
                      ? "border-accent-purple/50 shadow-card-glow"
                      : "border-white/10 hover:shadow-card-glow"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-300"
                  >
                    <h3 className="text-xl font-heading-semibold text-text-primary pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                      transition={{
                        duration: 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <ChevronDown
                        className={`flex-shrink-0 transition-colors ${
                          expandedFaq === index
                            ? "text-accent-purple"
                            : "text-white/60"
                        }`}
                        size={24}
                      />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedFaq === index ? "auto" : 0,
                      opacity: expandedFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-white/70 font-body-regular leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Still have questions banner */}
            <motion.div
              initial="hidden"
              animate={faqInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              className="mt-12 text-center"
            >
              <p className="text-white/70 font-body-regular mb-4">
                Still have questions?
              </p>
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center text-accent-purple font-heading-semibold hover:text-accent-hover transition-colors duration-300"
              >
                Talk to Our Experts
                <ArrowRight className="ml-2" size={20} />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          ref={ctaRef}
          className="py-28 md:py-32 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(156,77,255,0.15),transparent_70%)]"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ filter: "blur(60px)" }}
          ></motion.div>
          <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
            <motion.h2
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-heading-bold text-text-primary mb-6"
              style={{ letterSpacing: "-0.02em" }}
            >
              Ready to{" "}
              <span className="gradient-text">Automate Your Business</span>?
            </motion.h2>
            <motion.p
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/70 font-body-regular mb-10 max-w-2xl mx-auto"
              style={{ lineHeight: "1.6" }}
            >
              Schedule a free consultation to see how ModeAI can help you scale
              smarter and work more efficiently.
            </motion.p>
            <motion.div
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(166, 134, 209, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                href="#contact-form"
                className="font-heading-semibold bg-gradient-to-r from-accent-purple to-pink-500 text-white px-10 py-5 rounded-full transition-all duration-300 relative overflow-hidden group inline-flex items-center text-lg"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 via-pink-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></span>
                <span className="relative z-10">Book a Demo</span>
              </motion.a>
              <motion.a
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/917083589845"
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading-semibold border-2 border-green-500/50 text-green-400 hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 inline-flex items-center text-lg whitespace-nowrap px-10 py-5 rounded-full relative group"
              >
                <span className="absolute inset-0 rounded-full bg-green-500/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></span>
                <span className="relative z-10">Contact via WhatsApp</span>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
