"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useRef } from "react";
import { Calendar, User, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";

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

const blogPosts = {
  "1": {
    id: 1,
    title:
      "Transform Your Enterprise: How AI Automation Empowers Modern Businesses",
    metaTitle:
      "AI Business Automation: Empower Your Enterprise with ModeAI Solutions",
    metaDescription:
      "Discover how AI automation revolutionizes business operations. Learn to boost productivity, cut costs, and scale your business with intelligent AI workflows and process optimization from ModeAI.",
    author: "ModeAI Team",
    date: "December 15, 2024",
    readTime: "8 min read",
    image: "/images/hero-ai-automation.webp",
    category: "AI Automation",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-xl text-white mb-8 leading-relaxed font-body-regular">In today's dynamic business environment, efficiency and scalability are not just buzzwords – they are necessities for survival and growth. Many businesses, entrepreneurs, and startups still grapple with time-consuming manual processes, operational bottlenecks, and untapped potential. This is where AI automation steps in, revolutionizing how modern businesses operate. At ModeAI, we believe the future is intelligently automated, and we are here to guide you through this transformative journey.</p>
        
        <p class="mb-6 text-white font-body-regular">AI for business is no longer a luxury; it's a strategic imperative. It's about leveraging intelligent AI-powered systems to streamline every facet of your operations, from customer service to financial management, ensuring your enterprise operates in its most optimal mode.</p>

        <h2 class="text-3xl font-heading-bold text-text-primary mt-12 mb-6" style="letter-spacing: -0.02em">Why AI Automation is No Longer Optional for Modern Businesses</h2>
        
        <p class="mb-6 text-white font-body-regular">The shift towards automated business is undeniable. Companies that embrace AI workflows gain a significant competitive edge, while those that don't risk being left behind. Why the urgency?</p>
        
        <ul class="space-y-4 mb-8 text-white font-body-regular" style="line-height: 1.6">
          <li><strong class="text-accent-purple font-heading-semibold">Unprecedented Efficiency Demands:</strong> Customers expect instant responses and seamless experiences. AI automation enables this speed and precision.</li>
          <li><strong class="text-accent-purple font-heading-semibold">Optimizing Scarce Resources:</strong> Free up your most valuable asset – your human talent – from repetitive tasks. Allow your team to focus on strategic thinking, innovation, and complex problem-solving that genuinely drives growth.</li>
          <li><strong class="text-accent-purple font-heading-semibold">Data-Driven Decision Making:</strong> Automated systems collect and process vast amounts of data, providing real-time insights that empower smarter, faster business decisions.</li>
          <li><strong class="text-accent-purple font-heading-semibold">Scalability for Growth:</strong> Process optimization through AI allows your business to handle increased volume and demand without a proportional increase in overhead, making scaling operations effortless.</li>
        </ul>

        <h2 class="text-3xl font-heading-bold text-text-primary mt-12 mb-6" style="letter-spacing: -0.02em">Key Areas Where AI Transforms Business Operations</h2>
        
        <p class="mb-6 text-white font-body-regular">AI automation is versatile, impacting virtually every department. Here's how intelligent AI workflows from ModeAI can fundamentally automate your business:</p>

        <h3 class="text-2xl font-heading-semibold text-text-primary mt-8 mb-4">Streamlining Core Workflows & Business Process Automation (BPA)</h3>
        <p class="mb-6 text-white font-body-regular">From lead qualification and sales pipeline management to project assignments and reporting, business process automation reduces manual steps, ensuring consistency and accuracy. Imagine your sales team spending more time closing deals and less time on data entry thanks to <a href="/services" class="text-accent-purple hover:text-accent-hover transition-colors duration-300">CRM automation</a>.</p>

        <h3 class="text-2xl font-heading-semibold text-text-primary mt-8 mb-4">Enhancing Customer Relations with AI Assistants</h3>
        <p class="mb-6 text-white font-body-regular">AI chat assistants can handle a vast array of customer service inquiries, provide instant FAQ responses, and even qualify leads 24/7. This improves customer satisfaction, reduces response times, and significantly lightens the load on your support team, leading to increased business efficiency.</p>

        <h3 class="text-2xl font-heading-semibold text-text-primary mt-8 mb-4">Optimizing Online Presence with Intelligent Digital Marketing</h3>
        <p class="mb-6 text-white font-body-regular">AI for business extends to your online visibility. AI-driven tools can optimize SEO strategies, personalize digital marketing campaigns, analyze market trends, and even assist in content creation, leading to more effective lead generation and increased conversion rates.</p>

        <h3 class="text-2xl font-heading-semibold text-text-primary mt-8 mb-4">Smart Website Functionality & Conversions</h3>
        <p class="mb-6 text-white font-body-regular">Automate website interactions like form submissions, appointment scheduling with embedded smart calendars, and personalized user follow-ups. This ensures no lead falls through the cracks and that your website becomes a truly intelligent, automated sales and service hub.</p>

        <h3 class="text-2xl font-heading-semibold text-text-primary mt-8 mb-4">Seamless Integrations via Custom APIs</h3>
        <p class="mb-6 text-white font-body-regular">The true power of AI automation lies in seamless connectivity. ModeAI excels in <a href="/services" class="text-accent-purple hover:text-accent-hover transition-colors duration-300">custom API integrations</a>, allowing disparate software systems to communicate and exchange data in real-time. This eliminates data silos, automates data flow, and creates a cohesive, AI-powered business ecosystem.</p>

        <h2 class="text-3xl font-heading-bold text-text-primary mt-12 mb-6" style="letter-spacing: -0.02em">The Tangible Benefits: Beyond Just Automation</h2>
        
        <p class="mb-6 text-white font-body-regular">Implementing AI automation with ModeAI isn't merely about cutting down tasks; it's about achieving operational excellence and unlocking exponential growth:</p>
        
        <ul class="space-y-4 mb-8 text-white font-body-regular" style="line-height: 1.6">
          <li><strong class="text-accent-purple font-heading-semibold">Significant Time Savings:</strong> Reclaim countless hours per week, allowing your team to focus on innovation and high-value tasks.</li>
          <li><strong class="text-accent-purple font-heading-semibold">Drastic Cost Reduction:</strong> Minimize operational overhead, reduce errors, and optimize resource allocation.</li>
          <li><strong class="text-accent-purple font-heading-semibold">Boosted Productivity & Output:</strong> Empower your workforce to achieve more with less effort, accelerating task completion.</li>
          <li><strong class="text-accent-purple font-heading-semibold">Enhanced Scalability:</strong> Your AI automation systems can effortlessly handle increased demand, allowing your business to scale operations without bottlenecks.</li>
          <li><strong class="text-accent-purple font-heading-semibold">Reduced Human Error:</strong> Automation ensures precision and consistency in repetitive tasks, leading to higher quality outputs.</li>
          <li><strong class="text-accent-purple font-heading-semibold">Competitive Advantage:</strong> Stay ahead by adopting cutting-edge AI-driven business growth strategies that position you as an industry leader.</li>
        </ul>

        <h2 class="text-3xl font-heading-bold text-text-primary mt-12 mb-6" style="letter-spacing: -0.02em">Partnering with ModeAI for Your Automation Journey</h2>
        
        <p class="mb-6 text-white font-body-regular">Choosing ModeAI means opting for a partner dedicated to your success. Our <a href="/services" class="text-accent-purple hover:text-accent-hover transition-colors duration-300">automation consultancy</a> approach is tailored, understanding your unique business needs before crafting bespoke AI workflows. We don't just implement; we strategize, integrate, and support, ensuring a seamless digital transformation.</p>
        
        <p class="mb-6 text-white font-body-regular">From initial process optimization to custom AI solution development and ongoing maintenance, ModeAI is your trusted AI automation agency. We help you shift from reactive problem-solving to proactive, intelligent growth.</p>

        <h2 class="text-3xl font-heading-bold text-text-primary mt-12 mb-6" style="letter-spacing: -0.02em">Conclusion: Embrace Your Intelligent Automated Future</h2>
        
        <p class="mb-6 text-white font-body-regular">The future of business is here, and it's automated. Don't let manual processes and operational inefficiencies hinder your potential. By embracing AI automation, you can unlock new levels of productivity, achieve unparalleled business efficiency, and position your enterprise for sustainable AI-powered business growth.</p>
        
        <p class="mb-8 text-white font-body-regular">It's time to automate your business and step into its optimal operating mode.</p>
      </div>
    `,
  },
  "2": {
    id: 2,
    title:
      "Why Choose ModeAI: Your Partner in Intelligent Business Transformation",
    metaTitle: "ModeAI | AI Business Automation & Consultancy for Growth",
    metaDescription:
      "Discover why ModeAI is your trusted partner for AI automation. We optimize workflows, boost productivity, cut costs, and scale your business with intelligent AI solutions. Book your free consultation today!",
    author: "ModeAI Team",
    date: "December 12, 2024",
    readTime: "6 min read",
    image: "/images/business-growth.webp",
    category: "Business Growth",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-xl text-white mb-8 leading-relaxed font-body-regular">In today's fast-paced business landscape, standing still means falling behind. Manual processes, operational bottlenecks, and outdated systems are no longer just inefficiencies—they're liabilities. At ModeAI, we empower modern businesses, entrepreneurs, and startups to not just adapt, but to thrive. We specialize in AI-driven automation solutions and expert automation consultancy, transforming how you operate to unlock unprecedented levels of productivity and growth. Choose ModeAI to elevate your business into its optimal, intelligent operating mode.</p>

        <h2 class="text-3xl font-heading-bold text-text-primary mt-12 mb-6" style="letter-spacing: -0.02em">Unlock Unrivaled Efficiency and Growth with ModeAI</h2>
        
        <p class="mb-6 text-white font-body-regular">Discover the tangible advantages of integrating AI workflows and business automation into your operations with ModeAI:</p>
        
        <ul class="space-y-6 mb-8 text-white font-body-regular" style="line-height: 1.6">
          <li><strong class="text-accent-purple font-heading-semibold">Save Valuable Time:</strong> Automate repetitive and time-consuming tasks, freeing up your team to focus on strategic initiatives and core business activities.</li>
          <li><strong class="text-accent-purple font-heading-semibold">Significantly Cut Costs:</strong> Reduce operational overhead by minimizing manual labor, decreasing errors, and optimizing resource allocation through intelligent AI-powered systems.</li>
          <li><strong class="text-accent-purple font-heading-semibold">Boost Productivity & Output:</strong> Empower your workforce with seamless <a href="/services" class="text-accent-purple hover:text-accent-hover transition-colors duration-300">AI workflows</a> that enhance efficiency, accelerate task completion, and improve overall output.</li>
          <li><strong class="text-accent-purple font-heading-semibold">Eliminate Bottlenecks & Delays:</strong> Identify and resolve operational chokepoints with process optimization expertise, ensuring smooth and uninterrupted business flow.</li>
          <li><strong class="text-accent-purple font-heading-semibold">Increase Revenue & Profitability:</strong> Leverage AI for business to optimize sales funnels, enhance customer engagement, and scale operations without proportional cost increases, directly impacting your bottom line.</li>
          <li><strong class="text-accent-purple font-heading-semibold">Reduce Manual Tasks & Human Error:</strong> Minimize tedious data entry, routine follow-ups, and other mundane activities, leading to higher accuracy and improved employee satisfaction.</li>
          <li><strong class="text-accent-purple font-heading-semibold">Scale Operations Seamlessly:</strong> Our <a href="/services" class="text-accent-purple hover:text-accent-hover transition-colors duration-300">automation consultancy</a> helps you build scalable AI automation systems that grow with your business, effortlessly handling increased demand.</li>
          <li><strong class="text-accent-purple font-heading-semibold">Gain Competitive Advantage:</strong> Stay ahead of the curve by adopting advanced AI-powered business growth strategies that your competitors are just beginning to consider.</li>
        </ul>

        <h2 class="text-3xl font-heading-bold text-text-primary mt-12 mb-6" style="letter-spacing: -0.02em">Why ModeAI is Different</h2>
        
        <p class="mb-6 text-white font-body-regular">Unlike generic automation tools, ModeAI provides:</p>
        
        <ul class="space-y-4 mb-8 text-white font-body-regular" style="line-height: 1.6">
          <li><strong class="text-accent-purple font-heading-semibold">Tailored Solutions:</strong> Every business is unique, and so are our automation strategies. We craft bespoke AI workflows that align with your specific needs and goals.</li>
          <li><strong class="text-accent-purple font-heading-semibold">Expert Consultation:</strong> Our team doesn't just implement technology; we provide strategic guidance to ensure your automation journey delivers maximum ROI.</li>
          <li><strong class="text-accent-purple font-heading-semibold">Comprehensive Integration:</strong> From CRM automation to custom API integrations, we ensure all your systems work together seamlessly.</li>
          <li><strong class="text-accent-purple font-heading-semibold">Ongoing Support:</strong> We're not just a vendor; we're your long-term partner in digital transformation and business growth.</li>
        </ul>

        <h2 class="text-3xl font-heading-bold text-text-primary mt-12 mb-6" style="letter-spacing: -0.02em">Ready to Transform Your Business?</h2>
        
        <p class="mb-6 text-white font-body-regular">Don't let manual processes hold your business back. Join the growing number of successful companies that have chosen ModeAI to automate their operations and accelerate their growth.</p>
        
        <p class="mb-8 text-white font-body-regular">The question isn't whether you can afford to invest in AI automation—it's whether you can afford not to. Your competitors are already exploring these technologies. Stay ahead of the curve with ModeAI.</p>
      </div>
    `,
  },
  "3": {
    id: 3,
    title: "From Dusk AI to ModeAI: A New Dawn for Business Efficiency",
    metaTitle:
      "About ModeAI | Your Partner in AI-Driven Business Automation & Consultancy",
    metaDescription:
      "Learn about ModeAI's journey from Dusk AI, our mission to revolutionize business through AI automation, and our expertise in CRM, AI workflows, and custom solutions.",
    author: "ModeAI Team",
    date: "December 10, 2024",
    readTime: "5 min read",
    image: "/images/digital-transformation.webp",
    category: "Company Story",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-xl text-white mb-8 leading-relaxed font-body-regular">Our journey began as Dusk AI, driven by a passion for leveraging artificial intelligence to solve complex business challenges. As the landscape of AI for business rapidly evolved, we recognized the need for a more focused, comprehensive, and proactive approach to business automation. Our rebranding to ModeAI signifies this evolution – a commitment to not just illuminate problems, but to actively establish and activate your business's optimal operating mode through intelligent, integrated solutions.</p>

        <p class="mb-6 text-white font-body-regular">ModeAI represents a new dawn in automation consultancy, where advanced AI meets practical business needs, empowering entrepreneurs and startups to achieve unprecedented levels of productivity and scalability. We are dedicated to guiding you through the complexities of digital transformation, ensuring your operations are not just efficient, but future-proof.</p>

        <h2 class="text-3xl font-heading-bold text-text-primary mt-12 mb-6" style="letter-spacing: -0.02em">Our Mission, Vision, and Values</h2>
        
        <p class="mb-6 text-white font-body-regular">At ModeAI, our core principles drive every solution we build and every consultation we provide:</p>

        <h3 class="text-2xl font-heading-semibold text-text-primary mt-8 mb-4">Mission</h3>
        <p class="mb-6 text-white font-body-regular">To empower modern businesses, entrepreneurs, and startups to achieve their fullest potential by designing and implementing cutting-edge, AI-driven automation solutions that optimize workflows, boost efficiency, and accelerate growth.</p>

        <h3 class="text-2xl font-heading-semibold text-text-primary mt-8 mb-4">Vision</h3>
        <p class="mb-6 text-white font-body-regular">To be the leading <a href="/services" class="text-accent-purple hover:text-accent-hover transition-colors duration-300">AI automation agency</a>, redefining how businesses operate by seamlessly integrating intelligent systems into every facet of their enterprise, establishing new benchmarks for business efficiency.</p>

        <h3 class="text-2xl font-heading-semibold text-text-primary mt-8 mb-4">Values</h3>
        <ul class="space-y-4 mb-8 text-white font-body-regular" style="line-height: 1.6">
          <li><strong class="text-accent-purple font-heading-semibold">Innovation:</strong> Constantly exploring and implementing the latest advancements in AI workflows and automation technology.</li>
          <li><strong class="text-accent-purple font-heading-semibold">Client-Centricity:</strong> Building lasting partnerships by deeply understanding client needs and delivering tailored, impactful automation systems.</li>
          <li><strong class="text-accent-purple font-heading-semibold">Excellence:</strong> Committing to the highest standards in every automation consultancy project, ensuring robust and reliable solutions.</li>
          <li><strong class="text-accent-purple font-heading-semibold">Integrity:</strong> Operating with transparency, honesty, and a steadfast commitment to ethical AI practices.</li>
        </ul>

        <h2 class="text-3xl font-heading-bold text-text-primary mt-12 mb-6" style="letter-spacing: -0.02em">Our Core Expertise: Building Your Intelligent Business Systems</h2>
        
        <p class="mb-6 text-white font-body-regular">Our team at ModeAI possesses deep expertise across a spectrum of AI-driven automation solutions, meticulously designed to automate your business and supercharge your operations:</p>
        
        <ul class="space-y-6 mb-8 text-white font-body-regular" style="line-height: 1.6">
          <li><strong class="text-accent-purple font-heading-semibold">Business Process Automation (BPA):</strong> Streamlining and optimizing your core workflows for maximum productivity with automation.</li>
          <li><strong class="text-accent-purple font-heading-semibold">CRM Automation:</strong> Transforming customer relationship management with intelligent tools that automate sales pipelines, lead nurturing, and service interactions.</li>
          <li><strong class="text-accent-purple font-heading-semibold">AI Workflows & Custom AI Development:</strong> Crafting bespoke <a href="/services" class="text-accent-purple hover:text-accent-hover transition-colors duration-300">AI workflows</a> tailored to your unique business needs, from data analysis to decision support.</li>
          <li><strong class="text-accent-purple font-heading-semibold">Custom API Integrations:</strong> Connecting disparate systems and applications for seamless data exchange and real-time operational synergy.</li>
          <li><strong class="text-accent-purple font-heading-semibold">AI Chat Assistants:</strong> Deploying intelligent conversational agents for enhanced customer service, lead qualification, and internal support.</li>
          <li><strong class="text-accent-purple font-heading-semibold">Website Automation:</strong> Automating key website functions like form submissions, appointment scheduling, and personalized user experiences to increase business efficiency.</li>
        </ul>

        <h2 class="text-3xl font-heading-bold text-text-primary mt-12 mb-6" style="letter-spacing: -0.02em">The Evolution Continues</h2>
        
        <p class="mb-6 text-white font-body-regular">From Dusk AI to ModeAI, our evolution reflects our commitment to staying at the forefront of AI innovation. We've learned that successful automation isn't just about implementing technology—it's about understanding business processes, identifying optimization opportunities, and creating solutions that truly transform how organizations operate.</p>
        
        <p class="mb-6 text-white font-body-regular">Today, ModeAI stands as a beacon for businesses ready to embrace the future. We're not just service providers; we're transformation partners, dedicated to helping you achieve your optimal operating mode through intelligent automation.</p>
        
        <p class="mb-8 text-white font-body-regular">The dawn of intelligent business automation is here. Let ModeAI guide you into this new era of unprecedented efficiency and growth.</p>
      </div>
    `,
  },
};

export default function BlogPost() {
  const params = useParams();
  const id = params.id as string;
  const post = blogPosts[id as keyof typeof blogPosts];

  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const relatedRef = useRef<HTMLElement>(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const contentInView = useInView(contentRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });
  const relatedInView = useInView(relatedRef, { once: true, margin: "-100px" });

  if (!post) {
    return (
      <div className="bg-gradient-to-b from-primary-bg via-primary-secondary to-primary-bg min-h-screen pt-20">
        <div className="container mx-auto px-6 py-20 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-heading-bold text-text-primary mb-4"
          >
            Post Not Found
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-text-muted mb-8 font-body-regular"
          >
            The blog post you're looking for doesn't exist.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center bg-gradient-to-r from-accent-purple to-pink-500 text-white px-8 py-4 rounded-full font-heading-semibold hover:shadow-purple-glow transition-all duration-300"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Blog
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-primary-bg via-primary-secondary to-primary-bg">
      <div className="pt-20">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="py-20 md:py-32 relative overflow-hidden"
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
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                variants={staggerContainer}
              >
                {/* Back to Blog */}
                <motion.div variants={fadeInUp} className="mb-8">
                  <Link
                    href="/blog"
                    className="inline-flex items-center text-accent-purple font-heading-semibold hover:text-accent-hover transition-colors duration-300 group"
                  >
                    <ArrowLeft
                      className="mr-2 group-hover:-translate-x-1 transition-transform duration-300"
                      size={20}
                    />
                    Back to Blog
                  </Link>
                </motion.div>

                {/* Category Badge */}
                <motion.div
                  variants={fadeInUp}
                  transition={{ delay: 0.1 }}
                  className="mb-6"
                >
                  <span className="bg-gradient-to-r from-accent-purple to-pink-500 text-white px-4 py-2 rounded-full text-sm font-heading-semibold uppercase tracking-wide">
                    {post.category}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                  variants={fadeInUp}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-heading-bold text-text-primary mb-6 leading-tight"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {post.title}
                </motion.h1>

                {/* Meta Information */}
                <motion.div
                  variants={fadeInUp}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap items-center text-white/70 text-sm mb-8 space-x-6 font-body-regular"
                >
                  <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    {post.readTime}
                  </div>
                </motion.div>

                {/* Featured Image */}
                <motion.div
                  variants={fadeInUp}
                  transition={{ delay: 0.4 }}
                  className="relative w-full aspect-[16/9] overflow-hidden rounded-xl"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
                    className="object-cover object-center"
                    priority
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section ref={contentRef} className="py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(166,134,209,0.03),transparent_70%)]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="prose prose-lg max-w-none"
                style={{ lineHeight: "1.6" }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section ref={ctaRef} className="py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(156,77,255,0.04),transparent_70%)]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial="hidden"
                animate={ctaInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="glass-card-strong border border-white/10 rounded-2xl p-8 md:p-12 text-center"
              >
                <motion.h3
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-heading-bold text-text-primary mb-4"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Ready to Transform Your Business Operations?
                </motion.h3>
                <motion.p
                  variants={fadeInUp}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-white/70 font-body-regular mb-8 max-w-2xl mx-auto"
                  style={{ lineHeight: "1.6" }}
                >
                  Don't let manual processes hold your business back. Let's
                  build your intelligent automation system today.
                </motion.p>
                <motion.div variants={fadeInUp} transition={{ delay: 0.4 }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-gradient-to-r from-accent-purple to-pink-500 text-white px-8 py-4 rounded-full font-heading-semibold hover:shadow-purple-glow transition-all duration-300 relative overflow-hidden group"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 via-pink-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></span>
                      <span className="relative z-10">
                        Book Your Free Automation Consultation Today!
                      </span>
                      <ArrowRight className="ml-2 relative z-10" size={20} />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section ref={relatedRef} className="py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,46,197,0.03),transparent_70%)]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial="hidden"
                animate={relatedInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="text-center mb-12"
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl md:text-4xl font-heading-bold text-text-primary mb-4"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Related Articles
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-white/70 font-body-regular max-w-2xl mx-auto"
                  style={{ lineHeight: "1.6" }}
                >
                  Continue exploring insights and strategies for AI automation
                  and business growth.
                </motion.p>
              </motion.div>
              <motion.div
                initial="hidden"
                animate={relatedInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {Object.values(blogPosts)
                  .filter((relatedPost) => relatedPost.id !== post.id)
                  .slice(0, 2)
                  .map((relatedPost, index) => (
                    <motion.div
                      key={relatedPost.id}
                      variants={cardVariants}
                      custom={index}
                      whileHover={{ y: -6, scale: 1.02 }}
                    >
                      <Link
                        href={`/blog/${relatedPost.id}`}
                        className="glass-card-strong border border-white/10 rounded-xl overflow-hidden hover:shadow-card-glow transition-all duration-500 group relative flex flex-col block"
                      >
                        <motion.div
                          className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                          style={{
                            background: `linear-gradient(135deg, rgba(166, 134, 209, 0.15), rgba(156, 77, 255, 0.15), rgba(255, 46, 197, 0.15))`,
                            filter: "blur(10px)",
                          }}
                        />
                        <div className="relative w-full aspect-[16/9] overflow-hidden">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            quality={90}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="absolute top-4 left-4 z-10">
                            <span className="bg-gradient-to-r from-accent-purple to-pink-500 text-white px-3 py-1 rounded-full text-xs font-heading-semibold uppercase tracking-wide">
                              {relatedPost.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <h3
                            className="text-xl md:text-2xl font-heading-semibold text-text-primary mb-3 leading-tight group-hover:text-accent-purple transition-colors duration-300"
                            style={{ lineHeight: "1.4" }}
                          >
                            {relatedPost.title}
                          </h3>
                          <div className="flex items-center text-white/60 text-xs space-x-4 font-body-regular pt-4 mt-auto border-t border-white/10">
                            <div className="flex items-center">
                              <Calendar size={12} className="mr-1.5" />
                              {relatedPost.date}
                            </div>
                            <div className="flex items-center">
                              <Clock size={12} className="mr-1.5" />
                              {relatedPost.readTime}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
