"use client";

import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Calendar,
  User,
  Clock,
  MessageSquare,
  TrendingUp,
  Search,
  Wrench,
  Rocket,
  CheckCircle,
  XCircle,
} from "lucide-react";
import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
  memo,
} from "react";
import StarBorder from "./components/StarBorder";
import WhyChooseModeAI from "./components/WhyChooseModeAI";
import Threads from "./components/Threads";
import SpotlightText from "./components/SpotlightText";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  motion,
  Variants,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

const threadsColor: [number, number, number] = [0.4, 0.2, 0.9];

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

const sectionTitleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.3,
    },
  },
};

// Scroll Progress Indicator Component
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-purple via-pink-500 to-cyan-400 z-50 origin-left"
      style={{ scaleX }}
    />
  );
};

// Enhanced Floating Particles Component (Optimized)
const FloatingParticles = ({ count = 8 }: { count?: number }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 2,
        duration: Math.random() * 15 + 20,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.3 + 0.2,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-accent-purple/30 via-pink-500/30 to-cyan-400/30 blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            willChange: "transform, opacity",
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 15, 0],
            opacity: [
              particle.opacity * 0.5,
              particle.opacity,
              particle.opacity * 0.5,
            ],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1],
          }}
        />
      ))}
    </div>
  );
};

// Enhanced Magnetic Button with Glow Effect
const MagneticButton = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.4;
    const y = (clientY - (top + height / 2)) * 0.4;
    setPosition({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{
        x: position.x,
        y: position.y,
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
        scale: {
          duration: 0.2,
          ease: "easeOut",
        },
      }}
      className={className}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
};

// Cursor Glow Trail Component
const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        transform: "translate(-50%, -50%)",
        width: "200px",
        height: "200px",
        background:
          "radial-gradient(circle, rgba(166, 134, 209, 0.3) 0%, rgba(156, 77, 255, 0.2) 40%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(40px)",
        willChange: "transform",
      }}
      animate={{
        opacity: isVisible ? 0.25 : 0,
        scale: isVisible ? 1 : 0.8,
      }}
      transition={{
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
      }}
    />
  );
};

const HomePage = memo(function HomePage() {
  const isMobile = useIsMobile();

  // Section refs for scroll animations
  const heroRef = useRef<HTMLElement>(null);
  const painSolutionRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const caseStudyRef = useRef<HTMLElement>(null);
  const howItWorksRef = useRef<HTMLElement>(null);
  const finalCtaRef = useRef<HTMLElement>(null);

  // Scroll progress for parallax (using window scroll)
  const { scrollYProgress } = useScroll();
  const heroSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroSectionRef,
    offset: ["start start", "end start"],
  });

  // Enhanced parallax transforms for hero section
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const heroBackgroundY = useTransform(heroScrollProgress, [0, 1], [0, 200]);
  const heroBackgroundScale = useTransform(
    heroScrollProgress,
    [0, 1],
    [1, 1.1]
  );

  // Mouse-based parallax tilt for hero
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroSectionRef.current) return;
      const rect = heroSectionRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);
      setMousePosition({ x: x * 10, y: y * 10 });
    };

    const heroSection = heroSectionRef.current;
    if (heroSection) {
      heroSection.addEventListener("mousemove", handleMouseMove);
      return () =>
        heroSection.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  // Parallax transforms for section backgrounds
  const painSolutionRefForParallax = useRef<HTMLElement>(null);
  const servicesRefForParallax = useRef<HTMLElement>(null);
  const caseStudyRefForParallax = useRef<HTMLElement>(null);
  const howItWorksRefForParallax = useRef<HTMLElement>(null);
  const finalCtaRefForParallax = useRef<HTMLElement>(null);

  // Intersection observers for scroll-triggered animations
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const painSolutionInView = useInView(painSolutionRef, {
    once: true,
    margin: "-100px",
  });
  const servicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const caseStudyInView = useInView(caseStudyRef, {
    once: true,
    margin: "-100px",
  });
  const howItWorksInView = useInView(howItWorksRef, {
    once: true,
    margin: "-100px",
  });
  const finalCtaInView = useInView(finalCtaRef, {
    once: true,
    margin: "-100px",
  });

  // Smooth scroll to section
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  // Service snapshot tiles data
  const serviceTiles = useMemo(
    () => [
      {
        icon: MessageSquare,
        title: "AI Chatbots",
        description:
          "Answer instantly, book appointments, and close more deals",
        color: "from-purple-500 to-pink-500",
        href: "/services",
      },
      {
        icon: TrendingUp,
        title: "Lead Generation Automation",
        description: "Qualify and follow up without lifting a finger",
        color: "from-blue-500 to-cyan-500",
        href: "/services",
      },
      {
        icon: Brain,
        title: "Custom AI Agents",
        description: "From sales to onboarding — built for your workflow",
        color: "from-green-500 to-teal-500",
        href: "/services",
      },
    ],
    []
  );

  // Trusted logos (placeholder - you can replace with actual logos)
  const trustedLogos = useMemo(
    () => [
      { name: "Company 1", logo: "A" },
      { name: "Company 2", logo: "B" },
      { name: "Company 3", logo: "C" },
      { name: "Company 4", logo: "D" },
      { name: "Company 5", logo: "E" },
      { name: "Company 6", logo: "F" },
    ],
    []
  );

  // How it works steps
  const howItWorksSteps = useMemo(
    () => [
      {
        icon: Search,
        title: "Discover",
        description: "We learn your workflow",
        color: "from-purple-500 to-pink-500",
      },
      {
        icon: Wrench,
        title: "Build",
        description: "We create and integrate AI tools",
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: Rocket,
        title: "Scale",
        description: "You grow without extra effort",
        color: "from-green-500 to-teal-500",
      },
    ],
    []
  );

  return (
    <div className="bg-gradient-to-b from-primary-bg via-primary-secondary to-primary-bg">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Cursor Glow Trail */}
      <CursorGlow />

      {/* Hero Section */}
      <section
        ref={(node) => {
          heroRef.current = node;
          heroSectionRef.current = node;
        }}
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        {/* Enhanced Floating Particles */}
        <FloatingParticles count={isMobile ? 6 : 8} />

        {/* Enhanced Background Layers with Parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            y: heroBackgroundY,
            scale: heroBackgroundScale,
            rotateX: mousePosition.y,
            rotateY: mousePosition.x,
            willChange: "transform",
          }}
        >
          <Threads
            color={threadsColor}
            amplitude={isMobile ? 0.24 : 0.7}
            distance={0.15}
            enableMouseInteraction={false}
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(156,77,255,0.12),transparent_70%)] z-[1]"
          style={{
            y: useTransform(heroScrollProgress, [0, 1], [0, 100]),
            willChange: "transform",
          }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(166,134,209,0.08),transparent_60%)] z-[1]"
          style={{
            y: useTransform(heroScrollProgress, [0, 1], [0, -100]),
            willChange: "transform",
          }}
        ></motion.div>

        {/* Content with Parallax */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container mx-auto px-6 relative z-10"
        >
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center"
          >
            {/* Main Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-heading-bold text-text-primary mb-6 leading-tight relative"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span className="gradient-text">AI</span> That Works for Your
              Business <span className="gradient-text">— 24/7</span>
              {/* Gentle gradient line under heading */}
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-400 to-cyan-400 rounded-full opacity-40"
                initial={{ scaleX: 0 }}
                animate={heroInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-white/70 font-body-regular max-w-3xl mx-auto mb-12 leading-relaxed"
              style={{ lineHeight: "1.6" }}
            >
              ModeAI builds custom chatbots, AI agents, and automations to save
              time, capture leads, and grow revenue.
            </motion.p>

            {/* Buttons with Enhanced Magnetic Effect and Staggered Entrance */}
            <motion.div
              variants={buttonVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <motion.div variants={fadeInUp} transition={{ delay: 0.3 }}>
                <MagneticButton>
                  <StarBorder
                    as={Link}
                    href="/contact"
                    className="font-heading-semibold hover:shadow-primary-glow transition-all duration-300 inline-flex items-center text-lg whitespace-nowrap relative group px-8 py-4"
                    style={{ willChange: "transform, box-shadow" }}
                  >
                    <motion.span
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent-purple/30 via-pink-500/30 to-cyan-400/30 blur-xl"
                      animate={{
                        opacity: [0, 0.6, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{ willChange: "opacity, transform" }}
                    />
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent-purple/20 via-pink-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></span>
                    Book a Demo
                    <ArrowRight className="ml-2" size={20} />
                  </StarBorder>
                </MagneticButton>
              </motion.div>
              <motion.div variants={fadeInUp} transition={{ delay: 0.4 }}>
                <MagneticButton>
                  <motion.button
                    onClick={() => scrollToSection("case-study")}
                    className="font-heading-semibold border-2 border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-white transition-all duration-300 inline-flex items-center text-lg whitespace-nowrap px-8 py-4 rounded-full relative group"
                    style={{ willChange: "transform" }}
                  >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-purple/10 via-pink-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></span>
                    See It in Action
                    <ArrowRight className="ml-2" size={20} />
                  </motion.button>
                </MagneticButton>
              </motion.div>
            </motion.div>

            {/* Trusted by Section */}
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
              className="mt-20"
            >
              <p className="text-xs md:text-sm text-white/50 font-body-regular mb-8 uppercase tracking-wider">
                Trusted by businesses like
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {trustedLogos.map((company, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      heroInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-2xl md:text-3xl font-heading-bold text-white/40 hover:text-white/80 transition-all duration-300 grayscale hover:grayscale-0"
                    whileHover={{ scale: 1.1 }}
                  >
                    {company.logo}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Divider with Glow */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="h-1 w-full bg-gradient-to-r from-primary-secondary via-primary-bg to-primary-secondary opacity-80 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
      </motion.div>

      {/* Pain–Solution Strip */}
      <section
        ref={(node) => {
          painSolutionRef.current = node;
          painSolutionRefForParallax.current = node;
        }}
        id="pain-solution"
        className="py-28 md:py-32 relative overflow-hidden"
      >
        <FloatingParticles count={isMobile ? 6 : 8} />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(166,134,209,0.05),transparent_70%)]"
          style={{
            y: useTransform(
              useScroll({
                target: painSolutionRefForParallax,
                offset: ["start end", "end start"],
              }).scrollYProgress,
              [0, 1],
              [0, -50]
            ),
            willChange: "transform",
          }}
        ></motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate={painSolutionInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="glass-card-strong border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Animated Gradient Glow Border */}
            <motion.div
              className="absolute -inset-[1px] rounded-3xl opacity-50"
              style={{
                background: `linear-gradient(135deg, rgba(166, 134, 209, 0.3), rgba(156, 77, 255, 0.3), rgba(255, 46, 197, 0.3), rgba(166, 134, 209, 0.3))`,
                backgroundSize: "200% 200%",
                filter: "blur(8px)",
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
            <div className="absolute inset-0 rounded-3xl border border-white/10"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
              {/* Left: Pain Point */}
              <motion.div variants={fadeInUp}>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-heading-bold text-text-primary mb-8 leading-tight"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Every Missed Call is{" "}
                  <span className="gradient-text">Lost Revenue</span>
                </h2>
              </motion.div>

              {/* Right: Pain Points */}
              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="space-y-5"
              >
                <div className="flex items-start gap-4">
                  <XCircle
                    className="text-red-400 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <p
                    className="text-lg text-white/70 font-body-regular leading-relaxed"
                    style={{ lineHeight: "1.6" }}
                  >
                    Staff tied up with repetitive questions
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <XCircle
                    className="text-red-400 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <p
                    className="text-lg text-white/70 font-body-regular leading-relaxed"
                    style={{ lineHeight: "1.6" }}
                  >
                    Leads slipping through cracks
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <XCircle
                    className="text-red-400 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <p
                    className="text-lg text-white/70 font-body-regular leading-relaxed"
                    style={{ lineHeight: "1.6" }}
                  >
                    Customers waiting too long for answers
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Solution Statement */}
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="mt-12 pt-10 border-t border-white/10 relative z-10"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <CheckCircle
                    className="text-green-400 flex-shrink-0 mt-1"
                    size={28}
                  />
                </motion.div>
                <p
                  className="text-xl md:text-2xl font-heading-semibold text-text-primary leading-relaxed"
                  style={{ lineHeight: "1.5" }}
                >
                  ModeAI handles your routine conversations{" "}
                  <span className="gradient-text">automatically</span> — so you
                  never miss an opportunity.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="h-1 w-full bg-gradient-to-r from-primary-bg via-primary-secondary to-primary-bg opacity-80 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
      </motion.div>

      {/* Service Snapshot Tiles */}
      <section
        ref={(node) => {
          servicesRef.current = node;
          servicesRefForParallax.current = node;
        }}
        id="services"
        className="py-28 md:py-32 relative overflow-hidden"
      >
        <FloatingParticles count={isMobile ? 6 : 8} />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(166,134,209,0.05),transparent_70%)]"
          style={{
            y: useTransform(
              useScroll({
                target: servicesRefForParallax,
                offset: ["start end", "end start"],
              }).scrollYProgress,
              [0, 1],
              [0, -80]
            ),
            willChange: "transform",
          }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(156,77,255,0.03),transparent_70%)]"
          style={{
            y: useTransform(
              useScroll({
                target: servicesRefForParallax,
                offset: ["start end", "end start"],
              }).scrollYProgress,
              [0, 1],
              [0, 80]
            ),
            willChange: "transform",
          }}
        ></motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {serviceTiles.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card-strong rounded-2xl p-8 hover:shadow-card-glow transition-all duration-500 group cursor-pointer relative overflow-hidden"
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

                <Link href={service.href} className="relative z-[2] block">
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
                  <h3
                    className="text-2xl font-heading-semibold text-text-primary mb-4"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    <span className="gradient-text">{service.title}</span>
                  </h3>
                  <p
                    className="text-white/70 font-body-regular leading-relaxed"
                    style={{ lineHeight: "1.6" }}
                  >
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="h-1 w-full bg-gradient-to-r from-primary-secondary via-primary-bg to-primary-secondary opacity-80 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
      </motion.div>

      {/* Mini Case Study Highlight */}
      <section
        ref={(node) => {
          caseStudyRef.current = node;
          caseStudyRefForParallax.current = node;
        }}
        id="case-study"
        className="py-28 md:py-32 relative overflow-hidden"
      >
        <FloatingParticles count={isMobile ? 6 : 8} />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(166,134,209,0.05),transparent_70%)]"
          style={{
            y: useTransform(
              useScroll({
                target: caseStudyRefForParallax,
                offset: ["start end", "end start"],
              }).scrollYProgress,
              [0, 1],
              [0, -60]
            ),
            willChange: "transform",
          }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(156,77,255,0.03),transparent_70%)]"
          style={{
            y: useTransform(
              useScroll({
                target: caseStudyRefForParallax,
                offset: ["start end", "end start"],
              }).scrollYProgress,
              [0, 1],
              [0, 60]
            ),
            willChange: "transform",
          }}
        ></motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate={caseStudyInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="glass-card-strong border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group"
            >
              {/* Animated Gradient Glow Border */}
              <motion.div
                className="absolute -inset-[1px] rounded-3xl opacity-50"
                style={{
                  background: `linear-gradient(135deg, rgba(166, 134, 209, 0.3), rgba(156, 77, 255, 0.3), rgba(255, 46, 197, 0.3), rgba(166, 134, 209, 0.3))`,
                  backgroundSize: "200% 200%",
                  filter: "blur(8px)",
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
              <div className="absolute inset-0 rounded-3xl border border-white/10"></div>

              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <motion.h2
                  variants={sectionTitleVariants}
                  className="text-4xl md:text-5xl lg:text-6xl font-heading-bold text-text-primary mb-6 leading-tight"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  <span className="gradient-text">32% More Booked Calls</span>{" "}
                  in 30 Days
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl text-white/70 font-body-regular leading-relaxed mb-10"
                  style={{ lineHeight: "1.6" }}
                >
                  A client saw dramatic growth in booked appointments after
                  implementing ModeAI's chatbot system — automating inquiries
                  24/7 and qualifying leads seamlessly.
                </motion.p>
                <motion.div variants={buttonVariants}>
                  <MagneticButton>
                    <StarBorder
                      as={Link}
                      href="/services"
                      className="font-heading-semibold hover:shadow-primary-glow transition-all duration-300 inline-flex items-center relative group"
                    >
                      <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent-purple/20 via-pink-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></span>
                      See How We Did It
                      <ArrowRight className="ml-2" size={20} />
                    </StarBorder>
                  </MagneticButton>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="h-1 w-full bg-gradient-to-r from-primary-bg via-primary-secondary to-primary-bg opacity-80 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
      </motion.div>

      {/* 3-Step "How It Works" Section */}
      <section
        ref={(node) => {
          howItWorksRef.current = node;
          howItWorksRefForParallax.current = node;
        }}
        id="how-it-works"
        className="py-28 md:py-32 relative overflow-hidden"
      >
        <FloatingParticles count={isMobile ? 6 : 8} />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(166,134,209,0.05),transparent_70%)]"
          style={{
            y: useTransform(
              useScroll({
                target: howItWorksRefForParallax,
                offset: ["start end", "end start"],
              }).scrollYProgress,
              [0, 1],
              [0, -70]
            ),
            willChange: "transform",
          }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(156,77,255,0.03),transparent_70%)]"
          style={{
            y: useTransform(
              useScroll({
                target: howItWorksRefForParallax,
                offset: ["start end", "end start"],
              }).scrollYProgress,
              [0, 1],
              [0, 70]
            ),
            willChange: "transform",
          }}
        ></motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate={howItWorksInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={sectionTitleVariants}>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-heading-bold text-text-primary mb-8"
                style={{ letterSpacing: "-0.02em" }}
              >
                How It <span className="gradient-text">Works</span>
              </h2>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={howItWorksInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative pt-6">
              {/* Enhanced Connecting Lines with Animated Dots - Desktop Only */}
              <div className="hidden md:block absolute top-24 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-accent-purple/20 via-pink-500/30 to-cyan-400/20">
                <motion.div
                  className="absolute top-1/2 left-0 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full -translate-y-1/2"
                  initial={{ scale: 0 }}
                  animate={howItWorksInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 w-3 h-3 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2"
                  initial={{ scale: 0 }}
                  animate={howItWorksInView ? { scale: 1 } : {}}
                  transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
                />
                <motion.div
                  className="absolute top-1/2 right-0 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full -translate-y-1/2"
                  initial={{ scale: 0 }}
                  animate={howItWorksInView ? { scale: 1 } : {}}
                  transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                />
              </div>

              {howItWorksSteps.map((step, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  className="relative z-10"
                >
                  {/* Step Number Badge - Positioned relative to parent container */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-accent-purple to-pink-500 rounded-full flex items-center justify-center text-white font-heading-bold text-lg shadow-lg z-20">
                    {index + 1}
                  </div>

                  <div className="glass-card-strong border border-white/10 rounded-2xl p-8 pt-12 text-center group hover:shadow-card-glow transition-all duration-500 relative overflow-hidden">
                    {/* Animated Gradient Glow Border */}
                    <motion.div
                      className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                      style={{
                        background: `linear-gradient(135deg, rgba(166, 134, 209, 0.4), rgba(156, 77, 255, 0.4), rgba(255, 46, 197, 0.4), rgba(166, 134, 209, 0.4))`,
                        backgroundSize: "200% 200%",
                        filter: "blur(8px)",
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

                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-[2] shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <step.icon size={32} className="text-white" />
                    </motion.div>
                    <h3
                      className="text-2xl font-heading-semibold text-text-primary mb-4 relative z-[2]"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-white/70 font-body-regular leading-relaxed relative z-[2]"
                      style={{ lineHeight: "1.6" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Below Steps */}
            <motion.div
              initial="hidden"
              animate={howItWorksInView ? "visible" : "hidden"}
              variants={buttonVariants}
              className="text-center mt-12"
            >
              <MagneticButton>
                <StarBorder
                  as={Link}
                  href="/contact"
                  className="font-heading-semibold hover:shadow-primary-glow transition-all duration-300 inline-flex items-center relative group px-8 py-4"
                >
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent-purple/20 via-pink-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></span>
                  Start Your Free AI Audit
                  <ArrowRight className="ml-2" size={20} />
                </StarBorder>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="h-1 w-full bg-gradient-to-r from-primary-secondary via-primary-bg to-primary-secondary opacity-80 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
      </motion.div>

      {/* Closing Banner / Final CTA */}
      <section
        ref={(node) => {
          finalCtaRef.current = node;
          finalCtaRefForParallax.current = node;
        }}
        className="py-32 md:py-40 relative overflow-hidden"
      >
        <FloatingParticles count={isMobile ? 8 : 10} />
        {/* Enhanced Background Layers with Parallax and Radial Glow */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(156,77,255,0.15),transparent_70%)]"
          style={{
            y: useTransform(
              useScroll({
                target: finalCtaRefForParallax,
                offset: ["start end", "end start"],
              }).scrollYProgress,
              [0, 1],
              [0, -100]
            ),
            willChange: "transform",
          }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(166,134,209,0.08),transparent_70%)]"
          style={{
            y: useTransform(
              useScroll({
                target: finalCtaRefForParallax,
                offset: ["start end", "end start"],
              }).scrollYProgress,
              [0, 1],
              [0, 100]
            ),
            willChange: "transform",
          }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,46,197,0.05),transparent_70%)]"
          style={{
            y: useTransform(
              useScroll({
                target: finalCtaRefForParallax,
                offset: ["start end", "end start"],
              }).scrollYProgress,
              [0, 1],
              [0, -50]
            ),
            willChange: "transform",
          }}
        ></motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate={finalCtaInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h2
              variants={sectionTitleVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-heading-bold text-text-primary mb-8 max-w-4xl mx-auto leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Your business could be booking more clients{" "}
              <span className="gradient-text">by next week.</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 font-body-regular mb-12 max-w-2xl mx-auto"
              style={{ lineHeight: "1.6" }}
            >
              Join hundreds of businesses automating workflows with ModeAI.
            </motion.p>
            <motion.div variants={buttonVariants} className="mb-6">
              <MagneticButton>
                <StarBorder
                  as={Link}
                  href="/contact"
                  className="font-heading-semibold hover:shadow-primary-glow transition-all duration-300 inline-flex items-center text-lg relative group px-10 py-5"
                >
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent-purple/20 via-pink-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></span>
                  Book a Demo
                  <ArrowRight className="ml-3" size={24} />
                </StarBorder>
              </MagneticButton>
            </motion.div>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-sm text-white/50 font-body-regular"
            >
              No code. No hassle. Just results.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
});

export default HomePage;
