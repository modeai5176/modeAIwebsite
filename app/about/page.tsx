"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  Rocket,
  Bot,
  Globe,
  Puzzle,
  Earth,
  Settings,
  Clock,
  Sparkles,
  Heart,
  Shield,
  TrendingUp,
  Star,
  Brain,
  Users,
} from "lucide-react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import StarBorder from "../components/StarBorder";

// Animated Counter Component
function AnimatedCounter({ end, suffix }: { end: number; suffix: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const stepTime = 16; // roughly 60fps
    const totalSteps = Math.ceil(duration / stepTime);
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setValue(end);
      } else {
        setValue(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <div
      ref={ref}
      className="text-4xl md:text-5xl font-heading-bold text-gradient mb-2"
    >
      {value}
      {suffix}
    </div>
  );
}

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

export default function AboutPage() {
  const heroRef = useRef(null);
  const evolutionRef = useRef(null);
  const missionRef = useRef(null);
  const impactRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const evolutionInView = useInView(evolutionRef, {
    once: true,
    margin: "-100px",
  });
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const impactInView = useInView(impactRef, { once: true, margin: "-100px" });
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    margin: "-100px",
  });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const evolutionStats = [
    {
      icon: Brain,
      number: 20,
      suffix: "+",
      label: "AI Specialists",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Rocket,
      number: 50,
      suffix: "+",
      label: "Projects Completed",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      number: 3,
      suffix: "",
      label: "Countries (India, UAE, Canada)",
      color: "from-green-500 to-teal-500",
    },
  ];

  const values = [
    {
      icon: Sparkles,
      title: "Innovation",
      description:
        "Advancing the frontier of AI through creativity and experimentation.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "Transparent partnerships built on honesty and accountability.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Heart,
      title: "Client-Centricity",
      description:
        "Every solution starts with understanding your unique goals.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description:
        "Delivering measurable outcomes with precision and consistency.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const globalStats = [
    {
      icon: Puzzle,
      number: 150,
      suffix: "+",
      label: "Projects Completed",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Settings,
      number: 98,
      suffix: "%",
      label: "Client Satisfaction",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Bot,
      number: 50,
      suffix: "+",
      label: "AI Agents Deployed",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Clock,
      number: 24,
      suffix: "/7",
      label: "Support Available",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      content:
        "ModeAI transformed how we handle customer service — our efficiency skyrocketed.",
      initials: "SJ",
    },
    {
      name: "Michael Chen",
      content:
        "Their automation saved our sales team hours every week. Highly recommend ModeAI.",
      initials: "MC",
    },
    {
      name: "Emily Rodriguez",
      content:
        "Our onboarding workflows are now 100% automated — game changer.",
      initials: "ER",
    },
  ];

  // Animated counter for evolution stats
  const [animatedEvolutionStats, setAnimatedEvolutionStats] = useState(
    evolutionStats.map(() => 0)
  );

  useEffect(() => {
    if (evolutionInView) {
      const intervals: NodeJS.Timeout[] = [];
      evolutionStats.forEach((stat, i) => {
        let current = 0;
        const increment = Math.ceil(stat.number / 40);
        intervals[i] = setInterval(() => {
          current += increment;
          if (current >= stat.number) {
            current = stat.number;
            clearInterval(intervals[i]);
          }
          setAnimatedEvolutionStats((prev) => {
            const copy = [...prev];
            copy[i] = current;
            return copy;
          });
        }, 20);
      });
      return () => intervals.forEach(clearInterval);
    }
  }, [evolutionInView, evolutionStats]);

  return (
    <div className="bg-gradient-to-b from-primary-bg via-primary-secondary to-primary-bg">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="py-20 relative overflow-hidden min-h-screen flex items-center"
      >
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(166,134,209,0.12),transparent_70%)]"
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
              Our Story: Empowering Businesses with{" "}
              <span className="gradient-text">Intelligent Automation</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-text-muted font-body-regular max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              ModeAI builds human-centered AI systems that simplify operations,
              boost performance, and empower teams to focus on what truly
              matters — growth and innovation.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-lg text-text-muted font-body-regular max-w-3xl mx-auto leading-relaxed"
            >
              ModeAI began with a passion for leveraging AI to solve real
              business problems. What started as Dusk AI has evolved into ModeAI
              — a full-service automation partner helping global businesses
              unlock productivity through intelligent systems that work around
              the clock.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* From Dusk AI to ModeAI — The Evolution */}
      <section ref={evolutionRef} className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(166,134,209,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate={evolutionInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-heading-bold text-text-primary mb-12 text-center"
            >
              From Dusk AI to ModeAI: The Evolution of a{" "}
              <span className="gradient-text">Vision</span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-lg text-text-muted font-body-regular leading-relaxed">
                  Our journey began as Dusk AI, built from the belief that
                  technology should enhance human potential — not replace it.
                </p>
                <p className="text-lg text-text-muted font-body-regular leading-relaxed">
                  As businesses faced growing challenges, we evolved into
                  ModeAI, an agency dedicated to building AI tools that adapt to
                  your operations, not the other way around.
                </p>
                <p className="text-lg text-text-muted font-body-regular leading-relaxed">
                  This rebranding represents more than a name change — it's a
                  renewed commitment to shaping the future of business
                  automation with intelligence, empathy, and innovation.
                </p>
              </motion.div>

              {/* Image Frame with Gradient Border */}
              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                className="relative group"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl p-1 bg-gradient-to-r from-accent-purple via-pink-500 to-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <div className="bg-primary-secondary rounded-2xl p-8 h-80 flex items-center justify-center shadow-indigo-card overflow-hidden">
                    <Image
                      src="/images/ai-consulting.webp"
                      alt="ModeAI evolution and innovation"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg object-cover w-full h-full"
                      quality={90}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Key Stat Highlights */}
            <motion.div
              initial="hidden"
              animate={evolutionInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {evolutionStats.map((stat, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  className="glass-card-strong border border-white/10 rounded-2xl p-6 text-center hover:shadow-card-glow transition-all duration-500 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <stat.icon size={32} className="text-white" />
                  </motion.div>
                  <div className="text-4xl md:text-5xl font-heading-bold text-gradient mb-2">
                    {animatedEvolutionStats[index]}
                    {stat.suffix}
                  </div>
                  <div className="text-lg text-text-muted font-body-regular">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, and Values Section */}
      <section ref={missionRef} className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,46,197,0.03),transparent_70%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-heading-bold text-text-primary mb-8"
            >
              Our Mission, Vision, and{" "}
              <span className="gradient-text">Values</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-5xl mx-auto space-y-12 mb-16"
          >
            {/* Mission */}
            <motion.div variants={fadeInUp} className="text-center">
              <h3 className="text-2xl font-heading-semibold text-text-primary mb-4">
                Mission
              </h3>
              <p className="text-lg text-text-muted font-body-regular leading-relaxed max-w-3xl mx-auto">
                To empower modern businesses to achieve more through AI-driven
                automation that saves time, reduces costs, and unlocks
                scalability.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-2xl font-heading-semibold text-text-primary mb-4">
                Vision
              </h3>
              <p className="text-lg text-text-muted font-body-regular leading-relaxed max-w-3xl mx-auto">
                To redefine how companies operate by integrating intelligent
                automation into every core process.
              </p>
            </motion.div>
          </motion.div>

          {/* Values Cards */}
          <motion.div
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card-strong border border-white/10 rounded-2xl p-6 hover:shadow-card-glow transition-all duration-500 group cursor-pointer relative overflow-hidden"
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

                <div className="relative z-[2] text-center">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <value.icon size={32} className="text-white" />
                  </motion.div>
                  <h3 className="text-xl font-heading-semibold text-text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-muted font-body-regular leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section ref={impactRef} className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(166,134,209,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate={impactInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-heading-bold text-text-primary mb-6"
            >
              Our Global <span className="gradient-text">Impact</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-lg text-text-muted font-body-regular max-w-2xl mx-auto"
            >
              Delivering measurable outcomes through intelligent automation.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={impactInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {globalStats.map((stat, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card-strong border border-white/10 rounded-2xl p-6 text-center hover:shadow-card-glow transition-all duration-500 group relative overflow-hidden"
                style={{ willChange: "transform" }}
              >
                {/* Subtle glowing border */}
                <motion.div
                  className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{
                    background: `linear-gradient(135deg, rgba(166, 134, 209, 0.3), rgba(156, 77, 255, 0.3), rgba(255, 46, 197, 0.3))`,
                    filter: "blur(8px)",
                  }}
                />
                <div className="absolute inset-0 rounded-2xl border border-white/10"></div>

                <div className="relative z-[2]">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <stat.icon size={24} className="text-white" />
                  </motion.div>
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  <div className="text-base text-text-muted font-body-regular">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-primary-bg to-blue-900/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,46,197,0.03),transparent_70%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-heading-bold text-text-primary mb-6"
            >
              What Our <span className="gradient-text">Clients Say</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-lg text-text-muted font-body-regular max-w-2xl mx-auto"
            >
              Real businesses. Real results.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02, rotateY: 2 }}
                className="glass-card-strong border border-white/10 rounded-2xl p-8 hover:shadow-card-glow transition-all duration-500 group relative overflow-hidden"
                style={{ willChange: "transform" }}
              >
                {/* Soft border glow on hover */}
                <motion.div
                  className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{
                    background: `linear-gradient(135deg, rgba(166, 134, 209, 0.3), rgba(156, 77, 255, 0.3), rgba(255, 46, 197, 0.3))`,
                    filter: "blur(8px)",
                  }}
                />
                <div className="absolute inset-0 rounded-2xl border border-white/10"></div>

                <div className="relative z-[2] text-center">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-purple to-pink-500 rounded-full flex items-center justify-center text-white font-heading-semibold text-lg">
                      {testimonial.initials}
                    </div>
                  </div>
                  <p className="text-text-muted font-body-regular mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 fill-current"
                        size={16}
                      />
                    ))}
                  </div>
                  <div className="font-heading-semibold text-text-primary">
                    — {testimonial.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Closing CTA Banner */}
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(166,134,209,0.08),transparent_70%)]"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-heading-bold text-text-primary mb-8"
            >
              Ready to Build Your{" "}
              <span className="gradient-text">AI Advantage?</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl text-text-muted font-body-regular mb-8 max-w-2xl mx-auto"
            >
              Let's discuss how ModeAI can help you automate smarter, scale
              faster, and transform your business.
            </motion.p>
            <motion.div variants={fadeInUp} transition={{ delay: 0.4 }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <StarBorder
                  as={Link}
                  href="/contact"
                  className="font-heading-semibold hover:shadow-primary-glow transition-all duration-300 inline-flex items-center text-lg relative group px-10 py-5"
                  color="#A686D1"
                  speed="2.5s"
                >
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent-purple/20 via-pink-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></span>
                  Book a Consultation
                  <ArrowRight className="ml-3" size={24} />
                </StarBorder>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
