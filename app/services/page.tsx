"use client"

import Link from "next/link"
import {
  ArrowRight,
  Brain,
  Cog,
  Zap,
  Database,
  Shield,
  Rocket,
  CheckCircle,
  Globe,
  TrendingUp,
  Mail,
} from "lucide-react"
import StarBorder from "../components/StarBorder"

export default function ServicesPage() {
  const services = [
    {
      icon: Cog,
      title: "Business Process Automation (BPA)",
      description: "Streamlining and optimizing your core workflows for maximum productivity with automation.",
      features: [
        "Workflow Optimization",
        "Process Streamlining",
        "Task Automation",
        "Quality Assurance Systems",
        "Performance Analytics",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "CRM Automation",
      description:
        "Transforming customer relationship management with intelligent tools that automate sales pipelines and lead nurturing.",
      features: [
        "Sales Pipeline Automation",
        "Lead Nurturing Systems",
        "Customer Service Automation",
        "Contact Management",
        "Sales Analytics",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Brain,
      title: "AI Workflows & Custom AI Development",
      description:
        "Crafting bespoke AI workflows tailored to your unique business needs, from data analysis to decision support.",
      features: [
        "Custom AI Solutions",
        "Data Analysis Automation",
        "Decision Support Systems",
        "Machine Learning Integration",
        "Intelligent Process Design",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Custom API Integrations",
      description:
        "Connecting disparate systems and applications for seamless data exchange and real-time operational synergy.",
      features: [
        "System Integration",
        "Real-time Data Exchange",
        "Third-party Connections",
        "Workflow Synchronization",
        "Data Flow Optimization",
      ],
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "AI Agents",
      description:
        "Deploying intelligent AI agents for enhanced customer service, lead qualification, and internal support.",
      features: [
        "24/7 Customer Support",
        "Lead Qualification",
        "FAQ Automation",
        "Internal Support Systems",
        "Multi-platform Deployment",
      ],
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Rocket,
      title: "Website Automation",
      description:
        "Automating key website functions like form submissions, appointment scheduling, and personalized user experiences.",
      features: [
        "Form Automation",
        "Appointment Scheduling",
        "User Experience Personalization",
        "Lead Capture Optimization",
        "Conversion Rate Enhancement",
      ],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Creating modern, responsive websites that drive conversions and provide exceptional user experiences.",
      features: [
        "Responsive Web Design",
        "E-commerce Development",
        "Performance Optimization",
        "Mobile-First Approach",
        "SEO-Ready Architecture",
      ],
      color: "from-teal-500 to-green-500",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing and SEO",
      description:
        "Comprehensive digital marketing strategies and SEO optimization to boost your online visibility and drive growth.",
      features: [
        "Search Engine Optimization",
        "Content Marketing Strategy",
        "Social Media Management",
        "Pay-Per-Click Advertising",
        "Analytics & Reporting",
      ],
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Mail,
      title: "Automated Email Marketing and SMS Marketing",
      description: "Intelligent email and SMS marketing automation to nurture leads and maintain customer engagement.",
      features: [
        "Email Campaign Automation",
        "SMS Marketing Campaigns",
        "Lead Nurturing Sequences",
        "Personalization & Segmentation",
        "Performance Tracking",
      ],
      color: "from-violet-500 to-purple-500",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We dive deep into your business processes to understand your unique challenges and opportunities.",
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Develop a comprehensive AI strategy tailored to your business goals and technical requirements.",
    },
    {
      step: "03",
      title: "Design & Development",
      description: "Create custom AI solutions with human-centric design principles and cutting-edge technology.",
    },
    {
      step: "04",
      title: "Implementation & Integration",
      description: "Seamlessly integrate AI solutions into your existing systems with minimal disruption.",
    },
    {
      step: "05",
      title: "Training & Support",
      description: "Comprehensive training for your team and ongoing support to ensure long-term success.",
    },
  ]

  return (
    <div className="bg-gradient-to-b from-primary-bg via-primary-secondary to-primary-bg">
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(156,77,255,0.1),transparent_70%)]"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-7xl font-heading-bold text-text-primary mb-8 leading-tight" style={{fontFamily: 'var(--font-heading)', fontWeight: 700}}>
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-text-muted font-body-regular max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>
              Comprehensive AI solutions designed to transform your business operations and unlock new possibilities.
              From custom AI agents to complete digital transformation, we've got you covered.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(166,134,209,0.05),transparent_70%)]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="glass-card-strong border border-white/10 rounded-2xl p-8 card-3d hover:shadow-card-glow transition-all duration-300 group"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4" style={{fontFamily: 'var(--font-heading)', fontWeight: 600}}>{service.title}</h3>
                  <p className="text-text-muted mb-6 leading-relaxed" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-text-muted" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>
                        <CheckCircle size={16} className="text-accent-purple mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,46,197,0.03),transparent_70%)]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6" style={{fontFamily: 'var(--font-heading)', fontWeight: 600}}>
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="text-lg text-text-muted max-w-2xl mx-auto" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>
                A proven methodology that ensures successful AI implementation and maximum business impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-purple w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg" style={{fontFamily: 'var(--font-heading)', fontWeight: 700}}>{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-4" style={{fontFamily: 'var(--font-heading)', fontWeight: 600}}>{step.title}</h3>
                  <p className="text-text-muted leading-relaxed" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>{step.description}</p>
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
              Ready to Get <span className="gradient-text">Started</span>?
            </h2>
            <p className="text-xl text-text-muted font-inter mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <StarBorder
                as={Link}
                href="/contact"
                className="font-bold font-poppins hover:shadow-primary-glow transition-all duration-300 inline-flex items-center text-lg rounded-full"
                color="#A686D1"
                speed="2.5s"
              >
                Schedule Consultation
                <ArrowRight className="ml-3" size={24} />
              </StarBorder>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
