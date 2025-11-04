"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  ArrowRight,
  Brain,
  MessageSquare,
  Filter,
  Workflow,
  CheckCircle,
} from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import StarBorder from "../components/StarBorder";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.1,
    },
  }),
};

export default function ServicesPage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const whyChooseRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const servicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const whyChooseInView = useInView(whyChooseRef, {
    once: true,
    margin: "-100px",
  });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const services = [
    {
      icon: MessageSquare,
      title: "AI Chatbots",
      description:
        "Instantly respond to customer questions, book appointments, and qualify leads 24/7.",
      benefits: [
        "Cut response time to zero",
        "Handle 80% of routine queries",
        "Convert up to 40% more visitors",
      ],
      cta: "See Demo",
      ctaHref: "/contact",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Filter,
      title: "Lead Generation Automation",
      description:
        "Capture, qualify, and follow up automatically — while you focus on running your business.",
      benefits: [
        "Never forget to follow up",
        "Identify hot leads instantly",
        "Save hours of manual work",
      ],
      cta: "Book Strategy Call",
      ctaHref: "/contact",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Brain,
      title: "Custom AI Agents",
      description:
        "From sales assistants to onboarding specialists — built for your exact workflow.",
      benefits: [
        "Fully tailored solutions",
        "Integrates with your tools",
        "Scales as you grow",
      ],
      cta: "Get a Quote",
      ctaHref: "/contact",
      color: "from-green-500 to-teal-500",
    },
  ];

  const whyChoosePoints = [
    {
      icon: Brain,
      title: "Tailored to Your Workflow",
      description: "Every AI is built for your business, not off-the-shelf.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Workflow,
      title: "Seamless Integration",
      description: "Connects to your tools with zero disruption.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: CheckCircle,
      title: "Continuous Optimization",
      description: "We track, learn, and improve your AI over time.",
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-primary-bg via-primary-secondary to-primary-bg">
      <div className="pt-20">
        {/* Header Section */}
        <section ref={heroRef} className="py-20 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(156,77,255,0.12),transparent_70%)]"
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-7xl font-heading-bold text-text-primary mb-8 leading-tight"
              >
                What We <span className="gradient-text">Build for You</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-text-muted font-body-regular max-w-3xl mx-auto leading-relaxed"
              >
                AI tools custom-made for your business goals.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section ref={servicesRef} className="py-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(166,134,209,0.05),transparent_70%)]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card-strong border border-white/10 rounded-2xl p-8 hover:shadow-card-glow transition-all duration-500 group cursor-pointer relative overflow-hidden"
                  style={{ willChange: "transform" }}
                >
                  {/* Animated Gradient Glow Border */}
                  <motion.div
                    className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    style={{
                      background: `linear-gradient(135deg, rgba(166, 134, 209, 0.4), rgba(156, 77, 255, 0.4), rgba(255, 46, 197, 0.4), rgba(166, 134, 209, 0.4))`,
                      backgroundSize: "200% 200%",
                      filter: "blur(8px)",
                      willChange: "opacity, background-position",
                    }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <div className="absolute inset-0 rounded-2xl border border-white/10"></div>

                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-[1]"></div>

                  <div className="relative z-[2]">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <service.icon size={32} className="text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-heading-semibold text-text-primary mb-4">
                      {service.title}
                    </h3>
                    <p className="text-text-muted font-body-regular leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className="flex items-center text-text-muted font-body-regular"
                        >
                          <CheckCircle
                            size={16}
                            className="text-accent-purple mr-3 flex-shrink-0"
                          />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <StarBorder
                        as={Link}
                        href={service.ctaHref}
                        className="font-heading-semibold hover:shadow-primary-glow transition-all duration-300 inline-flex items-center text-base relative group w-full justify-center"
                      >
                        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent-purple/20 via-pink-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></span>
                        {service.cta}
                        <ArrowRight className="ml-2" size={18} />
                      </StarBorder>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose ModeAI Section */}
        <section ref={whyChooseRef} className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1228] to-[#0b0814]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(166,134,209,0.05),transparent_70%)]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial="hidden"
              animate={whyChooseInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-heading-bold text-text-primary mb-6"
              >
                Why Businesses{" "}
                <span className="gradient-text">Choose ModeAI</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-text-muted font-body-regular max-w-3xl mx-auto leading-relaxed"
              >
                More than just automation — we build intelligent systems that
                drive growth.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={whyChooseInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              {whyChoosePoints.map((point, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className={`w-16 h-16 bg-gradient-to-r ${point.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <point.icon size={32} className="text-white" />
                  </motion.div>
                  <h3 className="text-xl font-heading-semibold text-text-primary mb-4">
                    {point.title}
                  </h3>
                  <p className="text-text-muted font-body-regular leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Banner */}
        <section ref={ctaRef} className="py-20 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(156,77,255,0.15),transparent_70%)]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(166,134,209,0.08),transparent_70%)]"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-heading-bold text-text-primary mb-8 max-w-3xl mx-auto leading-tight"
              >
                Start saving hours and booking more clients{" "}
                <span className="gradient-text">today.</span>
              </motion.h2>
              <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <StarBorder
                    as={Link}
                    href="/contact"
                    className="font-heading-semibold hover:shadow-primary-glow transition-all duration-300 inline-flex items-center text-lg relative group px-10 py-5"
                  >
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent-purple/20 via-pink-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></span>
                    Book a Demo
                    <ArrowRight className="ml-3" size={24} />
                  </StarBorder>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
