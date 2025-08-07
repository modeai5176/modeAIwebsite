"use client"

import Link from "next/link"
import { ArrowRight, Phone, MessageCircle, Clock, Users, CheckCircle, Star, Download, Calendar, Zap, Shield, TrendingUp, BookOpen, ChevronDown, ChevronUp } from "lucide-react"
import { useEffect, useState, useCallback, useMemo, useRef, memo } from "react"
import { motion, Variants } from "framer-motion"
import StarBorder from "../components/StarBorder"
import SpotlightText from "../components/SpotlightText"
import ContactForm from "../components/ContactForm"
import CountUp from "../components/CountUp"
import { useIsMobile } from "@/hooks/use-mobile"



const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      delay: i * 0.15,
    },
  }),
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Problem Card Component
const ProblemCard = ({ problem, index }: { problem: any; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 1000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex-shrink-0 w-80 h-96 perspective-1000"
    >
      <motion.div
        className={`relative w-full h-full cursor-pointer transform-style-preserve-3d transition-transform duration-700 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={handleFlip}
        whileHover={{ 
          scale: 1.05,
          boxShadow: `0 0 30px ${problem.glowColor}`,
        }}
      >
        {/* Front Side */}
        <div className={`absolute inset-0 backface-hidden glass-card-strong border ${problem.borderColor}/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center group hover:border-${problem.borderColor} transition-all duration-300`}>
          {/* Animated Icon */}
          <motion.div
            className="text-6xl mb-6"
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {problem.icon}
          </motion.div>

          <h3 className="text-2xl font-bold text-white mb-4 font-body">{problem.title}</h3>
          
          {/* Neon Border on Hover */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-neon-pink/50 transition-all duration-300" />
          
          {/* Hover Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-neon-pink text-sm font-body-regular">Hover to flip</span>
          </div>
        </div>

        {/* Back Side */}
        <div className={`absolute inset-0 backface-hidden rotate-y-180 glass-card-strong border ${problem.borderColor}/30 rounded-2xl p-8 flex flex-col justify-center text-center`}>
          {/* Cost Impact */}
          <div className="mb-6">
            <p className="text-sm text-text-muted mb-2 font-body-regular">MONTHLY COST</p>
            <div className="text-4xl font-bold text-neon-pink font-body">
              <CountUp
                end={problem.cost}
                duration={1.5}
                separator=","
                prefix="$"
                suffix="+"
              />
            </div>
          </div>

          {/* Client Quote */}
          <div className="mb-6">
            <p className="text-white font-medium font-body-regular italic mb-4">
              "{problem.quote}"
            </p>
            <p className="text-text-muted text-sm font-body-regular">
              — {problem.client}
            </p>
          </div>

          {/* Flip Back Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <span className="text-neon-pink text-sm font-body-regular">Click to flip back</span>
          </div>
        </div>

        {/* Confetti Effect */}
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-neon-pink rounded-full"
                initial={{ 
                  x: '50%', 
                  y: '50%', 
                  opacity: 1,
                  scale: 0
                }}
                animate={{ 
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                  opacity: 0,
                  scale: 1
                }}
                transition={{ 
                  duration: 1,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

// Solution Tabs Component
const SolutionTabs = ({ setShowContactForm }: { setShowContactForm: (show: boolean) => void }) => {
  const [activeTab, setActiveTab] = useState(0)

  const solutions = [
    {
      id: 0,
      name: "AI Voice Agents",
      icon: "🤖",
      color: "from-neon-pink to-bright-aqua",
      bgColor: "from-neon-pink/10 to-bright-aqua/10",
      borderColor: "border-neon-pink/30",
      keyBenefit: "Never Miss Another Call",
      howItWorks: "AI answers calls 24/7, qualifies leads, and books appointments automatically",
      testimonial: "Our missed calls dropped from 40% to 2% in the first month.",
      client: "Sarah Johnson, Real Estate Broker",
      animation: "phone-pickup"
    },
    {
      id: 1,
      name: "CRM Automation",
      icon: "⚡",
      color: "from-vivid-blue to-soft-cyan",
      bgColor: "from-vivid-blue/10 to-soft-cyan/10",
      borderColor: "border-vivid-blue/30",
      keyBenefit: "Zero Manual Data Entry",
      howItWorks: "Automatically creates contacts, logs interactions, and updates deal stages",
      testimonial: "We save 15 hours weekly on CRM work alone.",
      client: "Mike Chen, Law Firm Partner",
      animation: "crm-filling"
    },
    {
      id: 2,
      name: "AI Chatbots",
      icon: "💬",
      color: "from-vivid-green to-soft-green",
      bgColor: "from-vivid-green/10 to-soft-green/10",
      borderColor: "border-vivid-green/30",
      keyBenefit: "Instant Response 24/7",
      howItWorks: "Intelligent chatbots handle inquiries across web, SMS, and WhatsApp",
      testimonial: "Response time went from 4 hours to 30 seconds.",
      client: "Lisa Rodriguez, Healthcare Clinic",
      animation: "chatbot-expand"
    },
    {
      id: 3,
      name: "Workflow Automation",
      icon: "🔄",
      color: "from-soft-purple to-soft-blue",
      bgColor: "from-soft-purple/10 to-soft-blue/10",
      borderColor: "border-soft-purple/30",
      keyBenefit: "Eliminate Repetitive Tasks",
      howItWorks: "Custom workflows automate follow-ups, reminders, and admin processes",
      testimonial: "Our team productivity increased by 300%.",
      client: "David Kim, Consulting CEO",
      animation: "workflow-flow"
    },
    {
      id: 4,
      name: "Analytics Dashboard",
      icon: "📊",
      color: "from-bright-yellow to-soft-orange",
      bgColor: "from-bright-yellow/10 to-soft-orange/10",
      borderColor: "border-bright-yellow/30",
      keyBenefit: "Real-Time Performance Insights",
      howItWorks: "Live dashboards show conversion rates, ROI, and optimization opportunities",
      testimonial: "We can now track every dollar of marketing spend.",
      client: "Amanda Foster, SaaS Founder",
      animation: "dashboard-pulse"
    }
  ]

  const activeSolution = solutions[activeTab]

  return (
    <div className="max-w-7xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {solutions.map((solution, index) => (
          <motion.button
            key={solution.id}
            onClick={() => setActiveTab(index)}
            className={`relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 font-body ${
              activeTab === index
                ? `bg-gradient-to-r ${solution.color} text-white shadow-lg scale-105`
                : 'bg-white/5 text-text-muted hover:bg-white/10 hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">{solution.icon}</span>
            {solution.name}
            
            {/* Active Indicator */}
            {activeTab === index && (
              <motion.div
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"
                layoutId="activeTab"
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Main Content Area */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`glass-card-strong border ${activeSolution.borderColor} rounded-3xl p-8 relative overflow-hidden`}
      >
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${activeSolution.bgColor} opacity-50`} />
        
        {/* Holographic Reflection */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Animation */}
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-9xl lg:text-[12rem] mb-8">
              {activeSolution.icon}
            </div>
            
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-body text-center">
              {activeSolution.name}
            </h3>
            
            {/* Animated SVG based on solution type */}
            <div className="w-full h-32 flex items-center justify-center">
              <SolutionAnimation type={activeSolution.animation} />
            </div>
          </div>

          {/* Right Side - Summary Card */}
          <div className="space-y-6">
            {/* Key Benefit */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-2 font-body">Key Benefit</h4>
              <p className="text-bright-aqua font-bold text-xl font-body">{activeSolution.keyBenefit}</p>
            </div>

            {/* How It Works */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-2 font-body">How It Works</h4>
              <p className="text-text-muted font-body-regular">{activeSolution.howItWorks}</p>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-white/10 to-transparent rounded-2xl p-6 border border-white/20">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-neon-pink to-bright-aqua rounded-full flex items-center justify-center text-white font-bold text-sm">
                  "
                </div>
                <div>
                  <p className="text-white font-medium italic font-body-regular mb-2">
                    {activeSolution.testimonial}
                  </p>
                  <p className="text-text-muted text-sm font-body-regular">
                    — {activeSolution.client}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <StarBorder
              as="button"
              onClick={() => setShowContactForm(true)}
              className="font-heading-semibold hover:shadow-primary-glow transition-all duration-300 inline-flex items-center w-full justify-center py-4 text-lg"
            >
              Deploy {activeSolution.name}
              <ArrowRight className="ml-2" size={24} />
            </StarBorder>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// Solution Animation Component
const SolutionAnimation = ({ type }: { type: string }) => {
  const animations = {
    'phone-pickup': (
      <motion.div
        className="w-24 h-24 bg-gradient-to-r from-neon-pink to-bright-aqua rounded-full flex items-center justify-center"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Phone className="text-white" size={32} />
      </motion.div>
    ),
    'crm-filling': (
      <motion.div
        className="w-24 h-24 bg-gradient-to-r from-vivid-blue to-soft-cyan rounded-full flex items-center justify-center"
        animate={{ 
          scale: [1, 1.1, 1],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <TrendingUp className="text-white" size={32} />
      </motion.div>
    ),
    'chatbot-expand': (
      <motion.div
        className="w-24 h-24 bg-gradient-to-r from-vivid-green to-soft-green rounded-full flex items-center justify-center"
        animate={{ 
          scale: [1, 1.3, 1],
          borderRadius: ["50%", "30%", "50%"]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <MessageCircle className="text-white" size={32} />
      </motion.div>
    ),
    'workflow-flow': (
      <motion.div
        className="w-24 h-24 bg-gradient-to-r from-soft-purple to-soft-blue rounded-full flex items-center justify-center"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Zap className="text-white" size={32} />
      </motion.div>
    ),
    'dashboard-pulse': (
      <motion.div
        className="w-24 h-24 bg-gradient-to-r from-bright-yellow to-soft-orange rounded-full flex items-center justify-center"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Shield className="text-white" size={32} />
      </motion.div>
    )
  }

  return animations[type as keyof typeof animations] || animations['phone-pickup']
}

const AICallerLanding = memo(function AICallerLanding() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleFAQ = useCallback((index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }, [expandedFAQ])

  const problemPoints = useMemo(() => [
    "Missed calls = lost revenue opportunities",
    "Manual CRM work eating up hours daily",
    "Slow response times losing qualified leads",
    "Repetitive admin tasks blocking growth",
    "No visibility into call ROI and performance"
  ], [])

  const solutionMapping = useMemo(() => [
    { problem: "Missed calls", solution: "AI Voice Agents", icon: Phone, color: "from-neon-pink to-bright-aqua" },
    { problem: "Manual CRM work", solution: "CRM Automations", icon: Zap, color: "from-vivid-blue to-soft-cyan" },
    { problem: "Slow responses", solution: "AI Chatbots (web/SMS/WhatsApp)", icon: MessageCircle, color: "from-vivid-green to-soft-green" },
    { problem: "Repetitive admin", solution: "24/7 automation", icon: Clock, color: "from-soft-orange to-soft-red" },
    { problem: "Untracked ROI", solution: "Real-time analytics", icon: TrendingUp, color: "from-soft-purple to-soft-blue" }
  ], [])

  const useCases = useMemo(() => [
    {
      title: "Law Firms",
      description: "Capture leads 24/7, qualify prospects, and book consultations automatically",
      icon: "⚖️",
      gradient: "from-soft-purple to-soft-blue"
    },
    {
      title: "Luxury Clinics",
      description: "Handle patient inquiries, book appointments, and provide instant responses",
      icon: "🏥",
      gradient: "from-neon-pink to-bright-aqua"
    },
    {
      title: "Real Estate Teams",
      description: "Qualify buyers, schedule viewings, and follow up with prospects automatically",
      icon: "🏠",
      gradient: "from-vivid-green to-soft-green"
    },
    {
      title: "Consultants/Coaches",
      description: "Book discovery calls, qualify clients, and manage your calendar intelligently",
      icon: "💼",
      gradient: "from-vivid-blue to-soft-cyan"
    }
  ], [])

  const testimonials = useMemo(() => [
    {
      quote: "Reduced missed calls by 80% and doubled consult bookings in 30 days",
      company: "RealEdge Realty",
      author: "Sarah Johnson",
      role: "Managing Partner"
    },
    {
      quote: "Eliminated receptionist costs and increased bookings via chatbot by 150%",
      company: "Peak Wellness Clinic",
      author: "Dr. Michael Chen",
      role: "Founder"
    }
  ], [])

  const faqs = useMemo(() => [
    {
      question: "What automations are needed for my business?",
      answer: "We analyze your current workflow and identify 15-25 high-impact automations. Common ones include lead qualification, appointment booking, follow-up sequences, and CRM data entry. Most businesses see 40-80% fewer missed leads within 30 days."
    },
    {
      question: "How does CRM integration work?",
      answer: "We integrate with your existing CRM (HubSpot, Salesforce, Pipedrive, etc.) through our API. The AI agent automatically creates contacts, logs interactions, and updates deal stages. No manual data entry required."
    },
    {
      question: "What results can I expect?",
      answer: "Typical results: 40-80% fewer missed leads, 2-3x ROI within 60 days, 24/7 lead capture, and 90% reduction in manual admin tasks. We provide monthly reports with detailed analytics."
    },
    {
      question: "How secure is my data?",
      answer: "Enterprise-grade security with SOC 2 compliance, end-to-end encryption, and GDPR compliance. Your data never leaves our secure infrastructure and we provide detailed security documentation."
    }
  ], [])

  return (
    <div className="bg-gradient-to-b from-primary-bg via-primary-secondary to-primary-bg min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/landingbg.png')",
            }}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary-bg/80 via-primary-bg/60 to-primary-bg/80"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Trust Badges */}
            <div className="flex justify-center items-center gap-6 mb-8 flex-wrap">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Star className="text-yellow-400" size={16} />
                <span className="text-sm font-medium text-white">Clutch 5.0</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Users className="text-bright-aqua" size={16} />
                <span className="text-sm font-medium text-white">50+ businesses</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <MessageCircle className="text-neon-pink" size={16} />
                <span className="text-sm font-medium text-white">500k+ conversations</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6 font-body">
              Stop Losing Clients to{" "}
              <span className="gradient-text">Missed Calls</span>
              <br />
              & Slow Responses
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-4xl mx-auto leading-relaxed font-body-regular">
              Mode AI gives high-ticket businesses AI voice agents, CRM workflows, and chatbots that capture leads, qualify them instantly, and book meetings—even at 3 AM.
            </p>

            {/* Primary CTA */}
            <div className="mb-8">
              <StarBorder
                as="button"
                onClick={() => setShowContactForm(true)}
                className="font-heading-semibold hover:shadow-primary-glow transition-all duration-300 inline-flex items-center text-lg px-8 py-4"
              >
                Book Your Free AI Strategy Call
                <ArrowRight className="ml-2" size={24} />
              </StarBorder>
            </div>

            {/* Secondary CTA */}
            <div>
              <button
                onClick={() => {
                  const solutionSection = document.getElementById('solution-section')
                  solutionSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-bright-aqua hover:text-neon-pink transition-colors duration-300 font-medium inline-flex items-center"
              >
                See How It Works
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

            {/* Problem Section - Interactive Horizontal Scroller */}
      <section className="py-20 relative overflow-hidden">
        {/* Pulsing Background Glow */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-red-500/10 via-transparent to-transparent"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-neon-pink rounded-full animate-pulse"></div>
              <span className="text-neon-pink font-semibold text-sm font-body">REVENUE LEAKS</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight font-body">
              Your Business is{" "}
              <span className="gradient-text">BLEEDING MONEY</span>
            </h2>
            <p className="text-xl md:text-2xl text-text-muted max-w-4xl mx-auto leading-relaxed mb-8 font-body-regular">
              Hover over each problem to see the real cost and impact
            </p>
          </motion.div>

          {/* Interactive Horizontal Scroller */}
          <div className="relative mb-16">
            <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
              {[
                {
                  title: "Missed Revenue",
                  icon: "📞",
                  cost: 2500,
                  quote: "We lost $15,000 last month from missed calls. Our competitors are eating our lunch.",
                  client: "Sarah Johnson, Real Estate Broker",
                  color: "from-red-500 to-neon-pink",
                  borderColor: "border-red-500",
                  glowColor: "shadow-red-500/50"
                },
                {
                  title: "Manual Work",
                  icon: "⚙️",
                  cost: 1800,
                  quote: "My team spends 6 hours daily on repetitive tasks. We could be closing deals instead.",
                  client: "Mike Chen, Law Firm Partner",
                  color: "from-orange-500 to-yellow-500",
                  borderColor: "border-orange-500",
                  glowColor: "shadow-orange-500/50"
                },
                {
                  title: "Slow Response",
                  icon: "⏰",
                  cost: 2200,
                  quote: "By the time we respond, the lead is already gone. Speed is everything in our business.",
                  client: "Lisa Rodriguez, Healthcare Clinic Owner",
                  color: "from-blue-500 to-cyan-500",
                  borderColor: "border-blue-500",
                  glowColor: "shadow-blue-500/50"
                },
                {
                  title: "Admin Overhead",
                  icon: "📋",
                  cost: 1500,
                  quote: "We're drowning in paperwork. Our admin costs are killing our profit margins.",
                  client: "David Kim, Consulting Firm CEO",
                  color: "from-purple-500 to-pink-500",
                  borderColor: "border-purple-500",
                  glowColor: "shadow-purple-500/50"
                },
                {
                  title: "No Visibility",
                  icon: "👁️",
                  cost: 2000,
                  quote: "We have no idea where our leads are coming from or why they're not converting.",
                  client: "Amanda Foster, SaaS Founder",
                  color: "from-green-500 to-emerald-500",
                  borderColor: "border-green-500",
                  glowColor: "shadow-green-500/50"
                }
              ].map((problem, index) => (
                <ProblemCard key={index} problem={problem} index={index} />
              ))}
            </div>
          </div>

          {/* Animated Progress Bar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="glass-card-strong border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 font-body text-center">REVENUE LEAK PROGRESS</h3>
              
              <div className="space-y-6">
                {[
                  { name: "Missed Revenue", percentage: 85, amount: 2500 },
                  { name: "Manual Work", percentage: 70, amount: 1800 },
                  { name: "Slow Response", percentage: 90, amount: 2200 },
                  { name: "Admin Overhead", percentage: 60, amount: 1500 },
                  { name: "No Visibility", percentage: 75, amount: 2000 }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium font-body">{item.name}</span>
                      <span className="text-neon-pink font-bold font-body">${item.amount}/month</span>
                    </div>
                    <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-500 via-neon-pink to-bright-aqua rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        transition={{ duration: 2, delay: index * 0.2 }}
                      />
                      {/* Liquid Animation */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Impact */}
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-sm text-text-muted mb-2 font-body-regular">TOTAL MONTHLY IMPACT</p>
                <div className="text-4xl font-bold text-white font-body">
                  <CountUp
                    end={10000}
                    duration={3}
                    separator=","
                    prefix="$"
                    suffix="+"
                  />
                </div>
                <p className="text-text-muted font-body-regular">lost revenue</p>
              </div>
            </div>
          </motion.div>

          {/* Urgency CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <div className="glass-card-strong border border-red-500/30 rounded-2xl p-8 max-w-4xl mx-auto bg-gradient-to-r from-red-500/10 to-neon-pink/10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-500 font-semibold font-body">URGENT ACTION REQUIRED</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-body">
                Stop the Revenue Bleeding NOW
              </h3>
              <p className="text-lg text-text-muted mb-6 font-body-regular">
                Every second you wait, another potential client calls your competitor.
              </p>
              <StarBorder
                as="button"
                onClick={() => setShowContactForm(true)}
                className="font-heading-semibold hover:shadow-primary-glow transition-all duration-300 inline-flex items-center text-lg px-8 py-4 bg-gradient-to-r from-red-500 to-neon-pink"
              >
                EMERGENCY FIX - Book Now
                <ArrowRight className="ml-2" size={24} />
              </StarBorder>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section - AI Control Center */}
      <section id="solution-section" className="py-20 relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-neon-pink/5 via-transparent to-transparent"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Floating Holographic Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-neon-pink/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-bright-aqua rounded-full animate-pulse"></div>
              <span className="text-bright-aqua font-semibold text-sm font-body">AI CONTROL CENTER</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight font-body">
              Your{" "}
              <span className="gradient-text">AI Arsenal</span>
            </h2>
            <p className="text-xl md:text-2xl text-text-muted max-w-4xl mx-auto leading-relaxed font-body-regular">
              Deploy intelligent solutions that work 24/7 to capture, qualify, and convert your leads
            </p>
          </motion.div>

          {/* Tabbed Interface */}
          <SolutionTabs setShowContactForm={setShowContactForm} />
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-body">
              Proven for{" "}
              <span className="gradient-text">High-Ticket</span> Businesses
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="glass-card-strong border border-white/10 rounded-2xl p-8 text-center group hover:shadow-card-glow transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${useCase.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto text-3xl`}>
                  {useCase.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-body">{useCase.title}</h3>
                <p className="text-text-muted mb-6 font-body-regular">{useCase.description}</p>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="text-bright-aqua hover:text-neon-pink transition-colors duration-300 font-medium inline-flex items-center"
                >
                  See Use Case: {useCase.title}
                  <ArrowRight className="ml-2" size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-body">
              Real{" "}
              <span className="gradient-text">Results</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="glass-card-strong border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" size={16} />
                  ))}
                </div>
                <p className="text-white text-lg mb-6 italic font-body-regular">"{testimonial.quote}"</p>
                <div>
                  <p className="text-bright-aqua font-semibold font-body">{testimonial.author}</p>
                  <p className="text-text-muted text-sm font-body-regular">{testimonial.role}</p>
                  <p className="text-white font-medium font-body">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Strip */}
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold text-bright-aqua">80%</div>
              <div className="text-text-muted text-sm">Fewer missed calls</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-pink">2x</div>
              <div className="text-text-muted text-sm">More bookings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-vivid-green">90%</div>
              <div className="text-text-muted text-sm">Less admin work</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-vivid-blue">24/7</div>
              <div className="text-text-muted text-sm">Lead capture</div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-body">
              Why Choose{" "}
              <span className="gradient-text">Mode AI</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {[
              { title: "Custom-trained automations", icon: Zap, color: "from-neon-pink to-bright-aqua" },
              { title: "72-h onboarding", icon: Clock, color: "from-vivid-blue to-soft-cyan" },
              { title: "Plug-and-play CRM integrations", icon: Shield, color: "from-vivid-green to-soft-green" },
              { title: "Dedicated support", icon: Users, color: "from-soft-purple to-soft-blue" }
            ].map((advantage, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="glass-card-strong border border-white/10 rounded-2xl p-6 text-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${advantage.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  <advantage.icon className="text-white" size={24} />
                </div>
                <h3 className="text-white font-semibold font-body">{advantage.title}</h3>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <StarBorder
              as="button"
              onClick={() => setShowContactForm(true)}
              className="font-heading-semibold hover:shadow-primary-glow transition-all duration-300 inline-flex items-center"
            >
              Book Your Free AI Audit (few slots available)
              <ArrowRight className="ml-2" size={20} />
            </StarBorder>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="glass-card-strong border border-white/10 rounded-3xl p-8 md:p-12 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-bright-yellow to-soft-orange rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <BookOpen className="text-white" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-body">
                Download: "21 Automations Worth $10K/Month"
              </h2>
              <p className="text-text-muted text-lg mb-8 font-body-regular">
                Get instant access to our proven automation playbook + 5-minute site audit
              </p>

              <div className="max-w-md mx-auto space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-bright-aqua"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-bright-aqua"
                />
                <StarBorder
                  as="button"
                  onClick={() => setShowContactForm(true)}
                  className="font-heading-semibold hover:shadow-primary-glow transition-all duration-300 inline-flex items-center w-full justify-center py-3"
                >
                  <Download className="mr-2" size={20} />
                  Download Instantly
                </StarBorder>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="glass-card-strong border border-neon-pink/30 rounded-2xl p-6 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 bg-neon-pink rounded-full animate-pulse"></div>
              <span className="text-neon-pink font-semibold">LIMITED AVAILABILITY</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-body">
              We're onboarding only 5 new clients per month
            </h3>
            <StarBorder
              as="button"
              onClick={() => setShowContactForm(true)}
              className="font-heading-semibold hover:shadow-primary-glow transition-all duration-300 inline-flex items-center"
            >
              Request Your Strategy Call Now
              <ArrowRight className="ml-2" size={20} />
            </StarBorder>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-body">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="glass-card-strong border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                >
                  <span className="text-white font-semibold font-body">{faq.question}</span>
                  {expandedFAQ === index ? (
                    <ChevronUp className="text-text-muted" size={20} />
                  ) : (
                    <ChevronDown className="text-text-muted" size={20} />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-text-muted leading-relaxed font-body-regular">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Footer CTA */}
      {isScrolled && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 left-6 right-6 z-50"
        >
          <div className="max-w-md mx-auto">
            <StarBorder
              as="button"
              onClick={() => setShowContactForm(true)}
              className="font-heading-semibold hover:shadow-primary-glow transition-all duration-300 inline-flex items-center w-full justify-center py-4 text-lg"
            >
              <Calendar className="mr-2" size={20} />
              Book Your Free Strategy Call
            </StarBorder>
          </div>
        </motion.div>
      )}

      {/* Contact Form Modal */}
      {showContactForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowContactForm(false)
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <button
                onClick={() => setShowContactForm(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
              >
                <span className="text-xl">×</span>
              </button>
              <ContactForm />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
})

export default AICallerLanding 