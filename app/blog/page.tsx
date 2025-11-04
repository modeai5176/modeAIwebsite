"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Calendar, User, ArrowRight, Clock, TrendingUp } from "lucide-react";
import Image from "next/image";
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

export default function BlogPage() {
  const heroRef = useRef<HTMLElement>(null);
  const featuredRef = useRef<HTMLElement>(null);
  const categoryRef = useRef<HTMLElement>(null);
  const blogRef = useRef<HTMLElement>(null);
  const caseStudyRef = useRef<HTMLElement>(null);
  const newsletterRef = useRef<HTMLElement>(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const featuredInView = useInView(featuredRef, {
    once: true,
    margin: "-100px",
  });
  const categoryInView = useInView(categoryRef, {
    once: true,
    margin: "-100px",
  });
  const blogInView = useInView(blogRef, { once: true, margin: "-100px" });
  const caseStudyInView = useInView(caseStudyRef, {
    once: true,
    margin: "-100px",
  });
  const newsletterInView = useInView(newsletterRef, {
    once: true,
    margin: "-100px",
  });

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const featuredPost = {
    id: 1,
    title: "How AI Automation Empowers Modern Enterprises",
    subtitle:
      "Discover how ModeAI's custom automation agents streamline workflows, reduce costs, and unlock business scalability.",
    excerpt:
      "In today's dynamic business environment, efficiency and scalability are not just buzzwords – they are necessities for survival and growth. Discover how AI automation revolutionizes business operations, boosts productivity, cuts costs, and scales your business with intelligent workflows.",
    author: "ModeAI Team",
    date: "December 15, 2024",
    readTime: "8 min read",
    image: "/images/hero-ai-automation.webp",
    category: "AI Automation",
  };

  const blogPosts = [
    {
      id: 2,
      title:
        "Why Choose ModeAI: Your Partner in Intelligent Business Transformation",
      excerpt:
        "In today's fast-paced business landscape, standing still means falling behind. Learn why ModeAI is your trusted partner for AI automation, helping you optimize workflows, boost productivity, and scale your business.",
      author: "ModeAI Team",
      date: "December 12, 2024",
      readTime: "6 min read",
      image: "/images/business-growth.webp",
      category: "Business Growth",
    },
    {
      id: 3,
      title: "From Dusk AI to ModeAI: A New Dawn for Business Efficiency",
      excerpt:
        "Our journey began as Dusk AI, driven by a passion for leveraging artificial intelligence to solve complex business challenges. Learn about our evolution and commitment to intelligent automation.",
      author: "ModeAI Team",
      date: "December 10, 2024",
      readTime: "5 min read",
      image: "/images/digital-transformation.webp",
      category: "Company Story",
    },
    {
      id: 4,
      title: "Key Areas Where AI Transforms Business Operations",
      excerpt:
        "AI automation is versatile, impacting virtually every department. Discover how intelligent AI workflows can fundamentally automate your business across all operations.",
      author: "ModeAI Team",
      date: "December 8, 2024",
      readTime: "7 min read",
      image: "/images/ai-workflow.webp",
      category: "Process Optimization",
    },
    {
      id: 5,
      title: "The Tangible Benefits: Beyond Just Automation",
      excerpt:
        "Implementing AI automation isn't merely about cutting down tasks; it's about achieving operational excellence and unlocking exponential growth for your business.",
      author: "ModeAI Team",
      date: "December 5, 2024",
      readTime: "6 min read",
      image: "/images/data-analytics.webp",
      category: "Business Benefits",
    },
    {
      id: 6,
      title: "Partnering with ModeAI for Your Automation Journey",
      excerpt:
        "Choosing ModeAI means opting for a partner dedicated to your success. Our automation consultancy approach is tailored, understanding your unique business needs.",
      author: "ModeAI Team",
      date: "December 3, 2024",
      readTime: "5 min read",
      image: "/images/ai-dashboard.webp",
      category: "Partnership",
    },
  ];

  const categories = [
    "All",
    "AI Automation",
    "Business Strategy",
    "Technical Guides",
    "AI Innovation",
    "Success Stories",
  ];

  const caseStudies = [
    {
      id: 1,
      title: "32% More Booked Calls in 30 Days",
      company: "Sales-Focused Enterprise",
      challenge: "Manual lead follow-up was slow and inconsistent.",
      solution: "ModeAI's AI Agents automated outreach and qualification.",
      result: "32% increase in booked calls, 24/7 lead engagement.",
      metric: "32%",
      metricLabel: "More Booked Calls",
    },
    {
      id: 2,
      title: "Saved 280+ Staff Hours per Month",
      company: "Customer Service Organization",
      challenge: "Support team overwhelmed with repetitive inquiries.",
      solution: "Intelligent chatbots handled 80% of routine questions.",
      result: "280+ hours saved monthly, faster response times.",
      metric: "280+",
      metricLabel: "Hours Saved",
    },
    {
      id: 3,
      title: "95% Faster Response Time",
      company: "E-commerce Platform",
      challenge: "Customer inquiries took hours to respond.",
      solution: "AI chatbots provide instant answers 24/7.",
      result: "Response time reduced from hours to seconds.",
      metric: "95%",
      metricLabel: "Faster Response",
    },
  ];

  const scrollToCaseStudies = () => {
    if (caseStudyRef.current) {
      caseStudyRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <div className="bg-gradient-to-b from-primary-bg via-primary-secondary to-primary-bg">
      <div className="pt-20">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="py-32 md:py-40 relative overflow-hidden min-h-[70vh] flex items-center"
        >
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(156,77,255,0.08),transparent_70%)]"
            animate={{
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ filter: "blur(60px)" }}
          ></motion.div>
          <div className="container mx-auto px-6 text-center relative z-10 max-w-5xl">
            <motion.div
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-heading-bold text-text-primary mb-6 leading-[1.1] tracking-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                Insights That Power{" "}
                <span className="gradient-text">Intelligent Businesses</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-white/70 font-body-regular max-w-3xl mx-auto mb-12 leading-relaxed"
                style={{ lineHeight: "1.6" }}
              >
                Explore ModeAI's latest insights, case studies, and thought
                leadership on AI automation and intelligent workflows. Learn how
                businesses scale smarter with ModeAI.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.button
                  onClick={handleSubscribe}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(166, 134, 209, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="font-heading-semibold bg-gradient-to-r from-accent-purple to-pink-500 text-white px-8 py-4 rounded-full transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 via-pink-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></span>
                  <span className="relative z-10">Subscribe for Updates</span>
                </motion.button>
                <motion.button
                  onClick={scrollToCaseStudies}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="font-heading-semibold border-2 border-accent-purple/50 text-accent-purple hover:border-accent-purple hover:bg-accent-purple/10 transition-all duration-300 inline-flex items-center text-lg whitespace-nowrap px-8 py-4 rounded-full relative group"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-purple/5 via-pink-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></span>
                  <span className="relative z-10">Explore Case Studies</span>
                  <ArrowRight className="ml-2 relative z-10" size={20} />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Post - Full-Width Showcase */}
        <section ref={featuredRef} className="py-28 md:py-32 relative">
          <div className="container mx-auto px-6 relative z-10 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={featuredInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              className="glass-card-strong border border-white/10 rounded-xl overflow-hidden hover:shadow-card-glow transition-all duration-500 relative group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-[500px]">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-l-xl lg:rounded-r-none"
                    priority
                    quality={90}
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-gradient-to-r from-accent-purple to-pink-500 text-white px-4 py-1.5 rounded-full text-xs font-heading-semibold uppercase tracking-wide">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="relative p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-primary-bg via-primary-secondary to-transparent">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/5 via-transparent to-pink-500/5 opacity-50"></div>
                  <div className="relative z-10 space-y-6">
                    <h3
                      className="text-3xl md:text-4xl lg:text-5xl font-heading-bold text-text-primary leading-tight"
                      style={{ letterSpacing: "-0.02em", lineHeight: "1.2" }}
                    >
                      {featuredPost.title}
                    </h3>
                    <p
                      className="text-lg text-white/70 font-body-regular leading-relaxed"
                      style={{ lineHeight: "1.6" }}
                    >
                      {featuredPost.subtitle}
                    </p>
                    <div className="flex items-center text-white/60 text-sm space-x-6 font-body-regular pt-4 border-t border-white/10">
                      <div className="flex items-center">
                        <User size={16} className="mr-2" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <motion.div whileHover={{ x: 5 }} className="pt-2">
                      <Link
                        href={`/blog/${featuredPost.id}`}
                        className="inline-flex items-center text-accent-purple font-heading-semibold hover:text-accent-hover transition-colors duration-300"
                        aria-label={`Read full article: ${featuredPost.title}`}
                      >
                        Read Full Article
                        <ArrowRight className="ml-2" size={20} />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter - Smooth & Minimal */}
        <section ref={categoryRef} className="py-16 md:py-20 relative">
          <div className="container mx-auto px-6 relative z-10 max-w-5xl">
            <motion.div
              initial="hidden"
              animate={categoryInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="flex flex-wrap justify-center gap-4 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  variants={cardVariants}
                  custom={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-heading-semibold text-sm transition-all duration-300 relative ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-accent-purple to-pink-500 text-white shadow-lg shadow-purple-500/30"
                      : "border border-accent-purple/20 text-white/70 hover:text-white hover:border-accent-purple/40 bg-transparent"
                  }`}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Filter by ${category}`}
                >
                  <span className="relative z-10 whitespace-nowrap">
                    {category}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section ref={blogRef} className="py-28 md:py-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(166,134,209,0.03),transparent_70%)]"></div>
          <div className="container mx-auto px-6 relative z-10 max-w-7xl">
            <motion.div
              initial="hidden"
              animate={blogInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  variants={cardVariants}
                  custom={index}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="glass-card-strong border border-white/10 rounded-xl overflow-hidden hover:shadow-card-glow transition-all duration-500 group relative"
                  style={{ willChange: "transform" }}
                >
                  <motion.div
                    className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    style={{
                      background: `linear-gradient(135deg, rgba(166, 134, 209, 0.15), rgba(156, 77, 255, 0.15), rgba(255, 46, 197, 0.15))`,
                      filter: "blur(10px)",
                    }}
                  />
                  <div className="relative h-48 overflow-hidden aspect-video">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      quality={90}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-accent-purple to-pink-500 text-white px-3 py-1 rounded-full text-xs font-heading-semibold uppercase tracking-wide">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6" style={{ lineHeight: "1.6" }}>
                    <h3
                      className="text-xl md:text-2xl font-heading-semibold text-text-primary mb-3 leading-tight group-hover:text-accent-purple transition-colors duration-300"
                      style={{ lineHeight: "1.4" }}
                    >
                      {post.title}
                    </h3>
                    <p
                      className="text-sm text-white/70 mb-5 leading-relaxed font-body-regular"
                      style={{ lineHeight: "1.6" }}
                    >
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-white/60 text-xs space-x-4 font-body-regular pt-4 border-t border-white/10">
                      <div className="flex items-center">
                        <div className="w-5 h-5 bg-gradient-to-r from-accent-purple to-pink-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold mr-2">
                          M
                        </div>
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={12} className="mr-1.5" />
                        {post.date}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Load More Button */}
            <motion.div
              initial="hidden"
              animate={blogInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              className="text-center mt-12"
            >
              <motion.button
                className="bg-gradient-to-r from-accent-purple to-pink-500 text-white px-8 py-4 rounded-full font-heading-semibold hover:shadow-purple-glow transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Load more articles"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 via-pink-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></span>
                <span className="relative z-10">Load More Articles</span>
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Case Study Highlight Section */}
        <section ref={caseStudyRef} className="py-28 md:py-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(156,77,255,0.04),transparent_70%)]"></div>
          <div className="container mx-auto px-6 relative z-10 max-w-6xl">
            <motion.div
              initial="hidden"
              animate={caseStudyInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-heading-bold text-text-primary mb-6"
                style={{ letterSpacing: "-0.02em" }}
              >
                In Action: Real Results from{" "}
                <span className="gradient-text">AI Automation</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-lg text-text-muted/70 font-body-regular max-w-2xl mx-auto"
                style={{ lineHeight: "1.6" }}
              >
                Discover how ModeAI helped modern businesses achieve measurable
                success with AI-driven solutions.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={caseStudyInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  variants={cardVariants}
                  custom={index}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="glass-card-strong border border-white/10 rounded-2xl p-8 hover:shadow-card-glow transition-all duration-500 group relative overflow-hidden"
                  style={{ willChange: "transform" }}
                >
                  <motion.div
                    className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    style={{
                      background: `linear-gradient(135deg, rgba(166, 134, 209, 0.15), rgba(156, 77, 255, 0.15), rgba(255, 46, 197, 0.15))`,
                      filter: "blur(10px)",
                    }}
                  />
                  <div className="relative z-[2]">
                    <div className="mb-6">
                      <div
                        className="text-5xl md:text-6xl lg:text-7xl font-heading-bold text-gradient mb-2"
                        style={{ letterSpacing: "-0.03em" }}
                      >
                        {study.metric}
                      </div>
                      <div className="text-sm text-white/60 font-body-regular uppercase tracking-wide">
                        {study.metricLabel}
                      </div>
                    </div>
                    <h3
                      className="text-2xl font-heading-semibold text-text-primary mb-6 leading-tight"
                      style={{ lineHeight: "1.3" }}
                    >
                      {study.title}
                    </h3>
                    <div
                      className="space-y-4 mb-6"
                      style={{ lineHeight: "1.6" }}
                    >
                      <div>
                        <p className="text-white/70 font-body-regular text-sm">
                          <span className="text-text-primary font-medium">
                            Challenge:{" "}
                          </span>
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <p className="text-white/70 font-body-regular text-sm">
                          <span className="text-text-primary font-medium">
                            Solution:{" "}
                          </span>
                          {study.solution}
                        </p>
                      </div>
                      <div>
                        <p className="text-white/70 font-body-regular text-sm">
                          <span className="text-text-primary font-medium">
                            Result:{" "}
                          </span>
                          {study.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              animate={caseStudyInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <StarBorder
                  as={Link}
                  href="/contact"
                  className="font-heading-semibold hover:shadow-primary-glow transition-all duration-300 inline-flex items-center text-lg px-10 py-5"
                  color="#A686D1"
                  speed="2.5s"
                >
                  See More Case Studies
                  <ArrowRight className="ml-3" size={24} />
                </StarBorder>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section
          ref={newsletterRef}
          className="py-28 md:py-32 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(156,77,255,0.08),transparent_70%)]"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ filter: "blur(80px)" }}
          ></motion.div>
          <div className="container mx-auto px-6 text-center relative z-10 max-w-2xl">
            <motion.div
              initial="hidden"
              animate={newsletterInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-heading-bold text-text-primary mb-4 relative"
                style={{ letterSpacing: "-0.02em" }}
              >
                Stay Ahead with <span className="gradient-text">ModeAI</span>
                <motion.div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-accent-purple to-pink-500 rounded-full opacity-30"
                  initial={{ scaleX: 0 }}
                  animate={newsletterInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.3, duration: 0.6 }}
                />
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-lg text-white/70 font-body-regular mb-10 max-w-xl mx-auto"
                style={{ lineHeight: "1.6" }}
              >
                Join 5,000+ professionals learning how AI automation transforms
                modern businesses.
              </motion.p>
              <motion.form
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                onSubmit={handleSubscribe}
                className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4 items-center"
              >
                <motion.input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 w-full px-0 py-4 bg-transparent border-0 border-b-2 border-white/20 text-text-primary font-body-regular focus:outline-none focus:border-accent-purple transition-all duration-300 placeholder:text-text-muted/40"
                  whileFocus={{ scale: 1.02 }}
                  aria-label="Email address for newsletter subscription"
                />
                <motion.button
                  type="submit"
                  className="bg-gradient-to-r from-accent-purple to-pink-500 text-white px-8 py-4 rounded-full font-heading-semibold hover:shadow-purple-glow transition-all duration-300 relative overflow-hidden group whitespace-nowrap"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(166, 134, 209, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Subscribe to newsletter"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 via-pink-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></span>
                  <span className="relative z-10">Subscribe</span>
                </motion.button>
              </motion.form>
              {subscribed && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 text-green-400 font-body-regular flex items-center justify-center gap-2"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-xl"
                  >
                    ✓
                  </motion.span>
                  <span>Successfully subscribed! Check your email.</span>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
