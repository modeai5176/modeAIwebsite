"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink, CheckCircle, TrendingUp, Users, DollarSign, Clock, Star, MessageCircle, Headphones, Workflow, Settings, FileText, Target, Zap, Award, Phone, Smartphone, Globe, Palette, ShoppingCart } from "lucide-react"
import { motion, Variants } from "framer-motion"
import { useMemo } from "react"

const cardVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

export default function PortfolioPage() {
  // Portfolio projects data - Replace with actual content from your PDFs
  const portfolioProjects = useMemo(
    () => [
      {
        id: "conscious-kilo",
        title: "Conscious Kilo",
        industry: "E-commerce & Cultural Fitness",
        description: "Indian fitness brand reconnecting modern audiences with traditional Hindu bodyweight workouts through premium e-commerce experience. Blending authentic cultural heritage with modern design to create a story-driven, culturally-rooted fitness platform.",
        challenge: "Creating a premium e-commerce experience that authentically represents traditional Indian fitness culture while appealing to modern audiences. Required balancing cultural authenticity with contemporary design, performance optimization, and seamless user experience across all devices.",
        solution: [
          "Complete Brand & Website Design - Modern minimal website with rich cultural cues inspired by Indian textures, colors, and typography",
          "Fully Functional E-Commerce - Secure checkout flow, simple cart experience, guest checkout, account area, INR-friendly payment gateways, inventory management",
          "Cultural Storytelling & Founder Narrative - Brand copy highlighting India's timeless Akhara workout lineage, Surya Namaskar roots, playful courtyard training, founder's note and heritage visuals",
          "SEO & Performance Ready - On-page SEO best practices, PageSpeed Insights 90+ scores, Google Analytics 4 + Search Console setup",
          "Premium Experience - Subtle red-orange-blue-purple palette from Indian cultural motifs, dynamic testimonials, login/my deck community area, mobile-first design with 60 FPS smoothness"
        ],
        results: [
          { icon: Zap, label: "PageSpeed Score", value: "90+" },
          { icon: Smartphone, label: "Mobile Performance", value: "60 FPS" },
          { icon: Globe, label: "SEO Optimization", value: "Complete" },
          { icon: Palette, label: "Cultural Design", value: "Authentic" },
          { icon: ShoppingCart, label: "E-commerce", value: "Full Stack" },
          { icon: Users, label: "User Experience", value: "Premium" },
        ],
        technologies: ["Website Design", "E-commerce Development", "Cultural Branding", "SEO Optimization", "Performance Optimization", "Mobile-First Design", "Payment Gateway Integration", "Inventory Management", "Google Analytics 4", "Search Console", "Parallax Animations", "Smooth Scroll", "Hover Effects", "Section Transitions", "INR Transactions"],
        image: "/images/ai-consulting.webp",
        status: "In Progress",
        duration: "Ongoing",
        team: "Web Designer, E-commerce Developer, Cultural Brand Specialist",
        keyAchievements: [
          "Designed modern minimal website with authentic Indian cultural cues and textures",
          "Built fully functional e-commerce with secure checkout and INR-friendly transactions",
          "Crafted cultural storytelling highlighting Akhara workout lineage and Surya Namaskar roots",
          "Achieved PageSpeed Insights 90+ scores on desktop and mobile",
          "Implemented complete SEO optimization with Google Analytics 4 and Search Console",
          "Created subtle cultural color palette (red-orange-blue-purple) from Indian motifs",
          "Developed mobile-first design maintaining 60 FPS smoothness on mid-range smartphones",
          "Integrated smooth scroll reveals, hover animations, and subtle parallax effects",
          "Built immersive product pages showing deck context and usage instructions",
          "Added dynamic testimonial sections and community login area for returning customers",
          "Structured clear pages: Home, The Deck, The Philosophy, Experience, About, Checkout & Account",
          "Embedded founder's note and heritage visuals for authentic human connection"
        ],
        website: "https://consciouskilo.com/"
      },
      {
        id: "pilot-training",
        title: "Pilot Training Academy",
        industry: "Aviation Training & Education",
        description: "Leading aviation training institute offering private and commercial pilot licenses. Developed comprehensive website with secure student portal, automation tools, and advanced SEO to attract students and provide seamless training management.",
        challenge: "Aviation training institute needed to attract new students, provide secure student login area for enrolled trainees, share real-time course updates and materials, and rank well for aviation training keywords in a competitive local market.",
        solution: [
          "High-Impact Website Design - Clean professional aviation-inspired design with multiple landing pages, photo galleries, subtle animations, hover states, parallax hero banners, scroll reveal sections",
          "Secure Student Portal & Content Hub - Fully secure login system with unique credentials, students can view training schedules, download PDFs/handbooks/checklists, access video lectures, receive push/email alerts, admin backend for instructors to upload files and send updates",
          "Smart Lead Generation Tools - Conversion-focused forms on every program page, WhatsApp integration for instant inquiry chat, auto-responder emails with brochures, CRM integration for lead tracking and nurturing",
          "Advanced SEO & Analytics Foundation - Full keyword mapping for local aviation terms, optimized meta titles/descriptions/image alt text/schema markup, Google Search Console submission with 100% index rate, Page 1 rankings for local keywords within 90 days, Google Analytics 4 integration, heatmaps for UX analysis",
          "Enhanced Features - FAQ and safety pages, Google Reviews widget, blog/news section, fully responsive mobile design, PageSpeed Insights 90+ scores"
        ],
        results: [
          { icon: Target, label: "SEO Rankings", value: "Page 1" },
          { icon: Zap, label: "PageSpeed Score", value: "90+" },
          { icon: Globe, label: "Index Rate", value: "100%" },
          { icon: Clock, label: "Ranking Time", value: "90 days" },
          { icon: Users, label: "Student Portal", value: "Secure" },
          { icon: MessageCircle, label: "Lead Generation", value: "Automated" },
        ],
        technologies: ["Website Design", "Student Portal Development", "Secure Login System", "Content Management", "SEO Optimization", "Google Analytics 4", "Search Console", "CRM Integration", "WhatsApp Integration", "Auto-responder Emails", "Heatmaps", "Parallax Animations", "Mobile-First Design", "Schema Markup", "Keyword Mapping"],
        image: "/images/digital-transformation.webp",
        status: "Completed",
        duration: "90 days",
        team: "Web Developer, SEO Specialist, Aviation Consultant",
        keyAchievements: [
          "Designed clean professional aviation-inspired website building trust with aspiring pilots",
          "Created multiple landing pages for different pilot training programs with clear CTAs",
          "Integrated photo galleries of real training sessions, aircraft, and simulators",
          "Developed fully secure student portal with unique credentials and content hub",
          "Built admin backend for instructors to upload files and send updates without coding",
          "Achieved Page 1 ranking for local aviation training keywords within 90 days",
          "Submitted sitemap with 100% index rate in Google Search Console within 3 weeks",
          "Integrated Google Analytics 4 with detailed funnel tracking and heatmaps",
          "Added conversion-focused forms with WhatsApp integration and auto-responders",
          "Connected forms to CRM for automatic lead tracking and nurturing",
          "Created FAQ and safety pages to boost trust and answer common questions",
          "Embedded Google Reviews widget and blog section for SEO and credibility",
          "Achieved PageSpeed Insights 90+ scores on desktop and mobile",
          "Made site fully responsive for students checking updates while traveling"
        ],
        website: "https://pilottrainingacademy.in/"
      },
      {
        id: "quality-marketing",
        title: "Quality Marketing Solutions",
        industry: "Digital Marketing Agency",
        description: "Digital marketing firm that needed a high-performance website and complete backend system to showcase their services, attract clients, and demonstrate their digital marketing capabilities through their own platform.",
        challenge: "Digital marketing firm required a comprehensive website and backend system that would serve as both their business platform and a showcase of their digital marketing expertise to attract new clients and demonstrate their capabilities.",
        solution: [
          "Fully Custom Website - Designed & developed bespoke multi-page website with modern UI, subtle animations (scroll reveals, hover interactions, parallax hero sections, animated buttons), dynamic content (testimonials carousel, interactive service sections, embedded client case studies)",
          "Powerful Backend - Built secure flexible backend CMS for easy updates to blogs, case studies & landing pages, integrated custom lead forms & quote request modules syncing to CRM & email",
          "SEO & Analytics Foundation - Fully optimized meta tags, keyword placements, structured data, page speed scoring 95+ on Google PageSpeed, 90%+ pages indexed in Google within 30 days, 1,200+ organic visitors/month within 3 months, Page 1 rankings for core branded & local keywords, 35-42% bounce rate, 8-12% conversion rate, Google Analytics 4 + Search Console with tracked funnels",
          "Advanced Marketing Infrastructure - Newsletter sign-ups connected to automated email sequences, Facebook & Google pixel tracking for remarketing, GDPR-ready cookie consent & security best practices (SSL, spam protection)",
          "Performance Optimization - Fully responsive across all devices, smooth animations, lightweight & speed-optimized with 90+ Lighthouse score"
        ],
        results: [
          { icon: Zap, label: "PageSpeed Score", value: "95+" },
          { icon: Globe, label: "Pages Indexed", value: "90%+" },
          { icon: Users, label: "Organic Traffic", value: "1,200+/month" },
          { icon: Target, label: "SEO Rankings", value: "Page 1" },
          { icon: TrendingUp, label: "Conversion Rate", value: "8-12%" },
          { icon: Clock, label: "Bounce Rate", value: "35-42%" },
        ],
        technologies: ["Website Design", "Backend Development", "CMS Integration", "SEO Optimization", "Google Analytics 4", "Search Console", "CRM Integration", "Email Automation", "Facebook Pixel", "Google Pixel", "GDPR Compliance", "SSL Security", "Parallax Animations", "Interactive Elements", "Lead Forms", "Chatbot Integration"],
        image: "/images/business-automation.webp",
        status: "Completed",
        duration: "3 months",
        team: "Full-Stack Developer, SEO Specialist, Marketing Consultant",
        keyAchievements: [
          "Designed & developed bespoke multi-page website with modern UI and subtle animations",
          "Built secure flexible backend CMS for easy content updates without coding",
          "Integrated custom lead forms & quote request modules syncing to CRM & email",
          "Achieved 95+ Google PageSpeed score with fully optimized performance",
          "Reached 90%+ page indexing in Google within 30 days of launch",
          "Generated 1,200+ organic visitors/month within 3 months",
          "Achieved Page 1 rankings for core branded and local keywords",
          "Maintained low bounce rate of 35-42% showing strong engagement",
          "Achieved 8-12% form + chatbot lead conversion rate for B2B agency",
          "Set up Google Analytics 4 + Search Console with detailed funnel tracking",
          "Connected newsletter sign-ups to automated email sequences and drip nurturing",
          "Embedded Facebook & Google pixel tracking for remarketing audiences",
          "Implemented GDPR-ready cookie consent and security best practices",
          "Made site fully responsive and tested across all major devices",
          "Created smooth animations and lightweight speed-optimized experience",
          "Provided Quality Marketing with a live high-converting website showcase"
        ],
        website: "https://www.qualitymarketing.in/"
      },
      {
        id: "amg-media",
        title: "AMG Media",
        industry: "White-Label Google Ads & Lead Generation",
        description: "Multimedia agency with strong Canadian client base operating as their invisible backend partner, running Google Ads and lead generation for their clients under AmgMedia's brand across multiple industries including real estate, healthcare clinics, legal services, and local contractors.",
        challenge: "AmgMedia had a strong client base and network in Canada but lacked an in-house technical ads team. They needed a white-label partner to deliver professional Google Ads management and lead generation services while maintaining their brand presence and client relationships.",
        solution: [
          "Google Ads Management - Fully restructured and optimized Google Ads accounts for multiple clients across various industries",
          "Multi-Channel Campaigns - Managed Search, Display & Call Ads tuned for high-intent local keywords",
          "Landing Page Development - Built conversion-optimized landing pages & lead forms with Google Tag Manager tracking",
          "Creative Optimization - Designed & A/B tested multiple ad copy sets, extensions, and bidding strategies",
          "Reporting & Analytics - Provided monthly white-label performance reports with clear ROI data",
          "Remarketing Campaigns - Ran remarketing campaigns to boost lead conversion at lower CPC",
          "Strategic Support - Delivered white-label branded dashboards, built reusable campaign frameworks, provided call tracking numbers, and gave account managers sales insights for upselling"
        ],
        results: [
          { icon: Target, label: "Search CTR", value: "5-7%" },
          { icon: DollarSign, label: "Cost per Lead", value: "CAD $10-25" },
          { icon: Users, label: "Leads/Month/Client", value: "80-200" },
          { icon: TrendingUp, label: "Landing Page Conv.", value: "12-20%" },
          { icon: Zap, label: "Ad Spend Efficiency", value: "30-40%" },
          { icon: Star, label: "ROAS", value: "4-7x" },
          { icon: Phone, label: "Call Ad Conversions", value: "30-40%" },
        ],
        technologies: ["Google Ads", "Search Campaigns", "Display Advertising", "Call Ads", "Landing Page Development", "Google Tag Manager", "A/B Testing", "Remarketing Campaigns", "White-Label Reporting", "Call Tracking", "Negative Keyword Management", "Bidding Strategies", "Ad Extensions", "Conversion Optimization"],
        image: "/images/ai-workflow.webp",
        status: "Completed",
        duration: "Ongoing Partnership",
        team: "Google Ads Specialist, Lead Generation Expert",
        keyAchievements: [
          "Achieved 5-7% Search Campaign CTR (well above Google's 2-4% average for local service niches)",
          "Generated 80-200 qualified leads/month per client across multiple industries",
          "Hit 12-20% landing page conversion rates for high-intent pages",
          "Cut wasted ad spend by 30-40% in first 45 days through better targeting & negative keyword management",
          "Delivered 4-7x ROAS for clients with short sales cycles (dental/clinic bookings, contractor callouts)",
          "Call-only ads drove 30-40% of all monthly conversions for local clients",
          "Delivered white-label branded dashboards & reports making AmgMedia look fully equipped",
          "Built reusable campaign frameworks for AmgMedia's sales team to pitch & close more clients",
          "Provided call tracking numbers to prove ad spend ROI on service calls",
          "Gave account managers sales insights for confident upselling of bigger budgets and services",
          "Maintained complete invisibility while delivering professional-grade results under AmgMedia's brand"
        ]
      },
      {
        id: "mist-marble",
        title: "Mist and Marble",
        industry: "E-commerce & Beauty",
        description: "Canadian startup selling natural skincare tools (Gua Sha stones & jade facial rollers) via direct-to-consumer model. Implemented comprehensive digital marketing funnel including social media advertising, influencer partnerships, email marketing automation, and Canada-specific localization strategies.",
        challenge: "New startup with zero brand awareness, limited budget, and need to establish trust in the competitive beauty market. Required building a complete customer base from scratch while competing with established brands in the natural skincare space.",
        solution: [
          "Social Media Ads - Launched Facebook & Instagram campaigns promoting Gua Sha and jade roller sets, targeting Canadian women 22-45 with clean beauty, self-care, and natural skincare interests",
          "UGC Content - Produced short UGC-style Reels and demo clips showing real users and before/after glow results",
          "Retargeting Funnels - Built sophisticated funnels for website visitors, Instagram engagers, and cart abandoners",
          "Influencer Partnerships - Partnered with 2-3 local micro-influencers to boost trust and repurpose their content as ads",
          "Email Marketing - Built list from scratch using website pop-ups with first-order incentives, created weekly skincare tips newsletters, set up automated abandoned cart recovery and post-purchase upsell flows, ran giveaway campaigns",
          "Canada-Specific Strategy - Focused ads on key urban wellness hubs, highlighted fast Canada-wide shipping, emphasized eco-friendly packaging and local pricing in CAD, incorporated bilingual captions for French-speaking regions"
        ],
        results: [
          { icon: TrendingUp, label: "ROAS", value: "3.8-4.5x" },
          { icon: Users, label: "Monthly Orders", value: "60-90" },
          { icon: DollarSign, label: "Avg Order Value", value: "CAD $45-65" },
          { icon: Target, label: "Site Visits/Month", value: "1,500-2,500" },
          { icon: Clock, label: "Cost Per Purchase", value: "CAD $10-15" },
          { icon: Star, label: "Email Open Rate", value: "38-45%" },
          { icon: MessageCircle, label: "Email CTR", value: "6-8%" },
          { icon: Users, label: "Instagram Growth", value: "20-25%" },
        ],
        technologies: ["Facebook Ads", "Instagram Ads", "Email Marketing Automation", "Influencer Marketing", "Retargeting Funnels", "UGC Content Creation", "Abandoned Cart Recovery", "Post-Purchase Upsells", "Canada-Specific Localization", "Bilingual Content", "Website Pop-ups", "Newsletter Automation", "Giveaway Campaigns", "Audience Targeting", "Creative Testing", "Budget Scaling"],
        image: "/images/business-growth.webp",
        status: "Completed",
        duration: "3-4 months",
        team: "Digital Marketing Specialist",
        keyAchievements: [
          "Built email list from 0 to 1,000+ engaged subscribers within 3-4 months",
          "Achieved 38-45% email open rates (well above industry average)",
          "Generated 1,500-2,500 qualified site visits/month directly from ads",
          "Recovered 8-12% of abandoned carts, turning them into new revenue",
          "Retargeting funnels accounted for 25-35% of total sales",
          "Increased Instagram followers by 20-25% organically via boosted content & influencer reposts",
          "Doubled Instagram engagement rates on Reels & carousel posts during campaign periods",
          "Email marketing contributed 10-15% of total monthly sales despite lean list size",
          "Ran giveaway campaign at CAD $0.50-0.70 per subscriber acquisition cost",
          "Click-through rates averaged 6-8% per email campaign",
          "Proved demand with startup-friendly budget scaling and creative testing",
          "Made brand feel Canadian & trustworthy, not just generic dropshipping"
        ]
      },
    ],
    [],
  )

  return (
    <div className="bg-gradient-to-b from-primary-bg via-primary-secondary to-primary-bg min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-16 relative">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-text-muted hover:text-accent-purple transition-colors duration-300 font-poppins"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold font-sora text-text-primary mb-8">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-text-muted font-inter max-w-3xl mx-auto leading-relaxed">
              Real-world AI automation solutions that have transformed businesses across diverse industries. 
              Each project showcases the power of intelligent automation in solving complex business challenges.
            </p>
          </div>

          {/* Our Latest Work Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-sora gradient-text drop-shadow-lg">
              Our Latest Work
            </h2>
          </div>
        </div>
      </div>

      {/* Portfolio Projects */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(166,134,209,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="visible"
                animate="visible"
                variants={cardVariants}
                className="glass-card-strong border border-white/10 rounded-2xl overflow-hidden hover:shadow-card-glow transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-accent-purple/20 to-accent-pink/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-30">🏢</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-semibold rounded-full border border-green-500/30">
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-accent-purple/20 text-accent-purple text-sm font-semibold rounded-full border border-accent-purple/30">
                      {project.industry}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-accent-purple font-semibold">{project.industry}</span>
                      <span className="text-sm text-text-muted">{project.duration}</span>
                    </div>
                    <h3 className="text-2xl font-bold font-poppins text-text-primary mb-3 group-hover:text-accent-purple transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-100 font-inter leading-relaxed">{project.description}</p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="mb-6 space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center">
                        <Target className="mr-2 text-accent-purple" size={16} />
                        Challenge:
                      </h4>
                      <p className="text-sm text-gray-100 font-inter">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center">
                        <Zap className="mr-2 text-accent-purple" size={16} />
                        Solution:
                      </h4>
                      <div className="space-y-2">
                        {Array.isArray(project.solution) ? (
                          project.solution.map((item, idx) => (
                            <div key={idx} className="flex items-start text-sm text-gray-100">
                              <div className="w-2 h-2 bg-accent-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="font-inter">{item}</span>
                            </div>
                          ))
                        ) : (
                          <p className="text-sm text-gray-100 font-inter">{project.solution}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <Award className="mr-2 text-accent-purple" size={16} />
                      Key Achievements:
                    </h4>
                    <div className="space-y-2">
                      {project.keyAchievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-100">
                          <CheckCircle className="mr-2 text-green-400" size={14} />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <TrendingUp className="mr-2 text-accent-purple" size={16} />
                      Results:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                          <result.icon className="mx-auto mb-1 text-accent-purple" size={20} />
                          <div className="text-lg font-bold text-text-primary">{result.value}</div>
                          <div className="text-xs text-text-muted">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <Settings className="mr-2 text-accent-purple" size={16} />
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-accent-purple/10 text-accent-purple text-sm rounded-full border border-accent-purple/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Team */}
                  <div className="text-sm text-text-muted font-inter">
                    <strong>Team:</strong> {project.team}
                  </div>

                  {/* Visit Website Button */}
                  {project.website && (
                    <div className="mt-6 flex justify-center">
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-accent-purple to-accent-pink text-white font-bold font-poppins rounded-xl hover:shadow-lg transition-all duration-300"
                      >
                        Visit Website
                        <ExternalLink className="ml-2" size={18} />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-sora text-text-primary mb-8">
            Ready to <span className="gradient-text">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-text-muted font-inter mb-12 max-w-3xl mx-auto">
            Join the companies that have already automated their way to success. 
            Let's discuss how AI automation can work for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-pink text-white font-bold font-poppins rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              Start Your Project
              <ExternalLink className="ml-2" size={20} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border border-accent-purple text-accent-purple font-bold font-poppins rounded-2xl hover:bg-accent-purple hover:text-white transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 