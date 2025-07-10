"use client"

import Link from "next/link"
import { ExternalLink, ArrowUpRight, Globe, Zap, Users, TrendingUp, Award, Target, CheckCircle, Clock, Smartphone, Search } from "lucide-react"
import { useMemo } from "react"

export default function HiddenPortfolioPage() {
  // Real client projects data
  const realProjects = useMemo(
    () => [
      {
        id: "quality-marketing",
        title: "Quality Marketing",
        industry: "Marketing Agency",
        description: "Transformed their online presence into a lead-generating machine that attracts more clients and grows their business.",
        image: "/images/QUALITY.webp",
        tags: ["Website Design", "Lead Generation", "Business Growth", "Professional Branding"],
        website: "https://www.qualitymarketing.in/",
        highlights: [
          "Created a stunning, professional website that makes them stand out from competitors and builds instant trust with potential clients",
          "Set up automatic systems that capture leads and turn website visitors into paying customers without any manual work",
          "Built smooth, engaging animations that keep visitors on the site longer and guide them toward contacting the business",
          "Provided detailed reports showing exactly how many leads the website generates and which pages convert best"
        ],
        metrics: [
          { label: "PageSpeed Score", value: "96/100" },
          { label: "Lead Increase", value: "+40%" },
          { label: "Site Performance", value: "2.1s Load Time" }
        ]
      },
      {
        id: "pilot-training",
        title: "Pilot Training Academy",
        industry: "Education",
        description: "Boosted their student enrollment by creating urgency and making it easier for people to find and join their courses.",
        image: "/images/PILOT.webp",
        tags: ["Student Enrollment", "Business Automation", "Online Visibility", "Course Management"],
        website: "https://pilottrainingacademy.in/",
        highlights: [
          "Added live seat counters that create urgency and push students to enroll quickly before batches fill up",
          "Automated their entire inquiry process so they never miss a potential student and can focus on teaching instead of paperwork",
          "Made it super easy for them to update course information and schedules without needing any technical knowledge",
          "Got them ranking at the top of Google searches so more aspiring pilots can find their academy"
        ],
        metrics: [
          { label: "PageSpeed Score", value: "97/100" },
          { label: "Enrollment Rate", value: "+35%" },
          { label: "Admin Time Saved", value: "3 Hours/Day" }
        ]
      },
      {
        id: "conscious-kilo",
        title: "The Conscious Kilo",
        industry: "Fitness & Wellness",
        description: "Building a complete fitness business platform that turns visitors into paying customers and helps them scale their wellness brand.",
        image: "/images/CONSCIOUS KILO.webp",
        tags: ["Brand Building", "Online Sales", "Customer Engagement", "Business Scaling"],
        website: "#",
        status: "Ongoing Project",
        highlights: [
          "Created a powerful brand identity and website that positions them as the go-to fitness experts and attracts their ideal customers",
          "Built a fast, professional site with high-quality videos that load instantly and keep visitors engaged without any lag",
          "Set up complete online sales system so they can sell fitness programs, accept payments, and manage customers automatically",
          "Made it easy for them to add new content, blog posts, and fitness tips to keep customers engaged and coming back"
        ],
        metrics: [
          { label: "PageSpeed Score", value: "95/100" },
          { label: "Video Load Time", value: "1.8s" },
          { label: "Conversion Rate", value: "+28%" }
        ]
      }
    ],
    []
  )

  // Sample projects data for cold outreach demonstrations
  const sampleProjects = useMemo(
    () => [
      {
        id: "fremont-dental",
        title: "Fremont Village Dental Centre",
        industry: "Healthcare",
        description: "Transformed their outdated website into a modern, trustworthy platform that attracts more patients and grows their practice.",
        image: "/images/FREMONT.webp",
        tags: ["Patient Growth", "Professional Image", "Easy Booking", "Local Visibility"],
        website: "https://sample11-fremont-dental-website.vercel.app/",
        highlights: [
          "Gave them a stunning, professional website that makes patients trust them instantly and choose them over competitors",
          "Set up easy online booking so patients can schedule appointments 24/7 without calling, reducing missed opportunities",
          "Made sure they show up first when people search for dentists in their area, bringing in more local patients",
          "Provided clear reports showing how many new patients the website brings in and which services are most popular"
        ],
        metrics: [
          { label: "Patient Trust", value: "Increased" },
          { label: "Booking Convenience", value: "24/7 Available" },
          { label: "Local Visibility", value: "Top Results" }
        ]
      },
      {
        id: "al-madfoon",
        title: "Al Madfoon Restaurant",
        industry: "Restaurant",
        description: "Transformed their basic website into a premium dining experience that attracts more customers and increases reservations.",
        image: "/images/MADFOON.webp",
        tags: ["Premium Branding", "Easy Reservations", "Customer Communication", "Bilingual Support"],
        website: "https://al-madfoon.vercel.app/",
        highlights: [
          "Created a beautiful, appetizing website that makes their restaurant look high-end and draws in more diners",
          "Set up smart reservation system that manages tables automatically and sends confirmation messages to customers",
          "Connected WhatsApp directly to their website so customers can ask questions and place orders instantly",
          "Built the site in both Arabic and English to welcome all customers and expand their reach in the community"
        ],
        metrics: [
          { label: "Restaurant Appeal", value: "Premium Look" },
          { label: "Reservation Ease", value: "Automated" },
          { label: "Customer Reach", value: "Bilingual" }
        ]
      },
      {
        id: "harbourview-chiro",
        title: "Harbourview Chiropractic",
        industry: "Healthcare",
        description: "Transformed their outdated clinic website into a modern, fast-loading platform that attracts more patients and builds trust.",
        image: "/images/HARBOURVIEW.webp",
        tags: ["Patient Trust", "Fast Loading", "Easy Management", "More Bookings"],
        website: "https://harbourview-ca.vercel.app/",
        highlights: [
          "Created a professional, trustworthy website that makes patients feel confident choosing their clinic over competitors",
          "Made it super easy for them to add health tips, blog posts, and updates without needing any technical help",
          "Tested different ways to get patients to book appointments and found the best approach that converts more visitors",
          "Built an incredibly fast website that loads instantly and keeps patients engaged instead of leaving for competitors"
        ],
        metrics: [
          { label: "Patient Trust", value: "Greatly Increased" },
          { label: "Site Speed", value: "Lightning Fast" },
          { label: "Content Updates", value: "Super Easy" }
        ]
      }
    ],
    []
  )

  return (
    <div className="bg-gradient-to-b from-primary-bg via-primary-secondary to-primary-bg min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(166,134,209,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(41,255,227,0.05),transparent_50%)]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-text-primary mb-8 leading-tight" style={{fontFamily: 'var(--font-heading)', fontWeight: 700}}>
              Our Work Speaks{" "}
              <span className="gradient-text">Globally</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>
              A curated look at the modern, conversion-focused websites we design for ambitious brands worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Real Client Projects Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">


          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {realProjects.map((project, index) => (
              <div key={project.id} className="group" style={{animationDelay: `${index * 0.1}s`}}>
                {project.website !== "#" ? (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <div className="glass-card-strong border border-white/10 rounded-2xl overflow-hidden hover:shadow-card-glow hover:scale-105 transition-all duration-500 h-full cursor-pointer">
                      {/* Project Image */}
                      <div className="relative h-56 bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Status Badge */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-4 py-2 bg-black text-white text-xs font-bold rounded-full backdrop-blur-sm shadow-lg border border-white/20">
                            {project.status || "LIVE CLIENT"}
                          </span>
                        </div>

                        {/* Visit Link */}
                        <div className="absolute top-4 right-4 z-10">
                          <div className="flex items-center justify-center w-10 h-10 bg-accent-purple/20 backdrop-blur-sm rounded-full group-hover:bg-accent-purple/40 transition-colors duration-300">
                            <ExternalLink className="text-white" size={16} />
                          </div>
                        </div>

                        {/* Gradient Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent"></div>
                        
                        {/* Industry Label */}
                        <div className="absolute bottom-4 left-4">
                          <span className="text-white text-sm font-medium">
                            {project.industry}
                          </span>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        {/* Project Title */}
                        <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-purple transition-colors duration-300" style={{fontFamily: 'var(--font-heading)', fontWeight: 600}}>
                          {project.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-text-muted text-sm leading-relaxed mb-6" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>
                          {project.description}
                        </p>

                        {/* Key Highlights */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2" style={{fontFamily: 'var(--font-heading)', fontWeight: 500}}>
                            <Target size={14} className="text-accent-purple" />
                            Key Achievements
                          </h4>
                          <div className="space-y-2">
                            {project.highlights.slice(0, 2).map((highlight, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-accent-purple rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-text-muted leading-relaxed" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technology Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.slice(0, 3).map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-accent-purple/10 text-accent-purple text-xs rounded-full border border-accent-purple/20"
                              style={{fontFamily: 'var(--font-heading)', fontWeight: 500}}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Results Grid */}
                        <div className="space-y-3">
                          {project.metrics.map((metric, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-gradient-to-r from-white/5 to-white/10 rounded-xl border border-white/10 hover:border-accent-purple/30 transition-all duration-300">
                              <div className="text-sm text-text-muted">{metric.label}</div>
                              <div className="text-sm font-bold text-text-primary">{metric.value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="glass-card-strong border border-white/10 rounded-2xl overflow-hidden hover:shadow-card-glow hover:scale-105 transition-all duration-500 h-full">
                    {/* Project Image */}
                    <div className="relative h-56 bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-4 py-2 bg-black text-white text-xs font-bold rounded-full backdrop-blur-sm shadow-lg border border-white/20">
                          {project.status || "LIVE CLIENT"}
                        </span>
                      </div>

                      {/* Gradient Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent"></div>
                      
                      {/* Industry Label */}
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white text-sm font-medium">
                          {project.industry}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      {/* Project Title */}
                      <h3 className="text-xl font-bold font-poppins text-text-primary mb-3 group-hover:text-accent-purple transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-text-muted font-inter text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Key Highlights */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                          <Target size={14} className="text-accent-purple" />
                          Key Achievements
                        </h4>
                        <div className="space-y-2">
                          {project.highlights.slice(0, 2).map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-accent-purple rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-text-muted leading-relaxed">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                                                          className="px-3 py-1 bg-accent-purple/10 text-accent-purple text-xs rounded-full border border-accent-purple/20"
                              style={{fontFamily: 'var(--font-heading)', fontWeight: 500}}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Results Grid */}
                      <div className="space-y-3">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 bg-gradient-to-r from-white/5 to-white/10 rounded-xl border border-white/10 hover:border-accent-purple/30 transition-all duration-300">
                            <div className="text-sm text-text-muted">{metric.label}</div>
                            <div className="text-sm font-bold text-text-primary">{metric.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Projects Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-text-primary mb-6" style={{fontFamily: 'var(--font-heading)', fontWeight: 600}}>
              Sample <span className="gradient-text">Showcases</span>
            </h2>
            <p className="text-lg text-text-muted max-w-3xl mx-auto leading-relaxed mb-6" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>
              Demonstration websites showcasing our technical capabilities and design approach.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-text-muted/10 border border-text-muted/20 rounded-full">
              <div className="w-2 h-2 bg-text-muted rounded-full mr-2"></div>
              <span className="text-text-muted text-sm" style={{fontFamily: 'var(--font-body)', fontWeight: 500}}>
                Demo Projects for Capability Presentation
              </span>
            </div>
          </div>

          {/* Sample Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {sampleProjects.map((project, index) => (
              <div key={project.id} className="group" style={{animationDelay: `${index * 0.1}s`}}>
                {project.website ? (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <div className="glass-card-strong border border-white/10 rounded-2xl overflow-hidden hover:shadow-card-glow hover:scale-105 transition-all duration-500 h-full cursor-pointer">
                      {/* Project Image */}
                      <div className="relative h-56 bg-gradient-to-br from-gray-500/10 to-gray-600/10 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Sample Badge */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-4 py-2 bg-black text-white text-xs font-bold rounded-full backdrop-blur-sm shadow-lg border border-white/20">
                            DEMO PROJECT
                          </span>
                        </div>

                        {/* Visit Link */}
                        <div className="absolute top-4 right-4 z-10">
                          <div className="flex items-center justify-center w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full group-hover:bg-black/80 transition-colors duration-300">
                            <ExternalLink className="text-white" size={16} />
                          </div>
                        </div>

                        {/* Gradient Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent"></div>
                        
                        {/* Industry Label */}
                        <div className="absolute bottom-4 left-4">
                          <span className="text-white text-sm font-medium">
                            {project.industry}
                          </span>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        {/* Project Title */}
                        <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-purple transition-colors duration-300" style={{fontFamily: 'var(--font-heading)', fontWeight: 600}}>
                          {project.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-text-muted text-sm leading-relaxed mb-6" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>
                          {project.description}
                        </p>

                        {/* Key Features */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2" style={{fontFamily: 'var(--font-heading)', fontWeight: 500}}>
                            <Target size={14} className="text-accent-purple" />
                            Key Features
                          </h4>
                          <div className="space-y-2">
                            {project.highlights.slice(0, 2).map((highlight, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-accent-purple rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-text-muted leading-relaxed" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technology Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.slice(0, 3).map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-accent-purple/10 text-accent-purple text-xs rounded-full border border-accent-purple/20"
                              style={{fontFamily: 'var(--font-heading)', fontWeight: 500}}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Results Grid */}
                        <div className="space-y-3">
                          {project.metrics.map((metric, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-gradient-to-r from-white/5 to-white/10 rounded-xl border border-white/10 hover:border-accent-purple/30 transition-all duration-300">
                              <div className="text-sm text-text-muted">{metric.label}</div>
                              <div className="text-sm font-bold text-text-primary">{metric.value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="glass-card-strong border border-white/10 rounded-2xl overflow-hidden hover:shadow-card-glow hover:scale-105 transition-all duration-500 h-full">
                    {/* Project Image */}
                    <div className="relative h-56 bg-gradient-to-br from-gray-500/10 to-gray-600/10 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Sample Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-4 py-2 bg-black text-white text-xs font-bold rounded-full backdrop-blur-sm shadow-lg border border-white/20">
                          DEMO PROJECT
                        </span>
                      </div>

                      {/* Gradient Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent"></div>
                      
                      {/* Industry Label */}
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white text-sm font-medium">
                          {project.industry}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      {/* Project Title */}
                      <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-purple transition-colors duration-300" style={{fontFamily: 'var(--font-heading)', fontWeight: 600}}>
                        {project.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-text-muted text-sm leading-relaxed mb-6" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>
                        {project.description}
                      </p>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2" style={{fontFamily: 'var(--font-heading)', fontWeight: 500}}>
                          <Target size={14} className="text-accent-purple" />
                          Key Features
                        </h4>
                        <div className="space-y-2">
                          {project.highlights.slice(0, 2).map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-accent-purple rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-text-muted leading-relaxed" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-accent-purple/10 text-accent-purple text-xs rounded-full border border-accent-purple/20"
                            style={{fontFamily: 'var(--font-heading)', fontWeight: 500}}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Results Grid */}
                      <div className="space-y-3">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 bg-gradient-to-r from-white/5 to-white/10 rounded-xl border border-white/10 hover:border-accent-purple/30 transition-all duration-300">
                            <div className="text-sm text-text-muted">{metric.label}</div>
                            <div className="text-sm font-bold text-text-primary">{metric.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 text-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-text-primary mb-6" style={{fontFamily: 'var(--font-heading)', fontWeight: 700}}>
              Want your next website to{" "}
              <span className="gradient-text">stand here?</span>
            </h2>
            <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>
              Join the ambitious brands that trust us to create their digital presence.
            </p>
            
            <div className="inline-block">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-pink text-white font-bold rounded-2xl hover:shadow-lg transition-all duration-300 group"
                style={{fontFamily: 'var(--font-heading)', fontWeight: 600}}
              >
                Let's Talk
                <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 