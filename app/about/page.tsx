"use client"

import Link from "next/link"
import { ArrowRight, Users, Target, Star } from "lucide-react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import StarBorder from "../components/StarBorder"
import { useState, useEffect } from "react"

export default function AboutPage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      content:
        "ModeAI transformed our operations completely. Their soulful approach to automation made the difference.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      content: "The custom AI agents they built for us are incredibly intelligent and intuitive. Exceptional work!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      content: "Finally, automation that enhances our team rather than replacing them. Highly recommended!",
      rating: 5,
    },
  ]

  const stats = [
    { number: 150, suffix: "+", label: "Projects Completed" },
    { number: 98, suffix: "%", label: "Client Satisfaction" },
    { number: 50, suffix: "+", label: "AI Agents Deployed" },
    { number: 24, suffix: "/7", label: "Support Available" },
  ]

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Simple animated counter for stats
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0))
  useEffect(() => {
    if (statsInView) {
      const intervals: NodeJS.Timeout[] = []
      stats.forEach((stat, i) => {
        let current = 0
        const increment = Math.ceil(stat.number / 40)
        intervals[i] = setInterval(() => {
          current += increment
          if (current >= stat.number) {
            current = stat.number
            clearInterval(intervals[i])
          }
          setAnimatedStats((prev) => {
            const copy = [...prev]
            copy[i] = current
            return copy
          })
        }, 20)
      })
      return () => intervals.forEach(clearInterval)
    }
  }, [statsInView])

  return (
    <div className="bg-gradient-to-b from-primary-bg via-primary-secondary to-primary-bg">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(166,134,209,0.1),transparent_70%)]"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-heading-bold text-text-primary mb-8 leading-tight">
            Our Story: Empowering Businesses with
            <br />
            <span className="gradient-text">Intelligent Automation</span>
          </h1>
          <p className="text-xl text-text-muted font-body-regular max-w-3xl mx-auto leading-relaxed">
            About ModeAI: Pioneering the Future of Automated Business. Our journey began as Dusk AI, driven by a passion
            for leveraging artificial intelligence to solve complex business challenges. Our rebranding to ModeAI
            signifies our evolution – a commitment to actively establish and activate your business's optimal operating
            mode.
          </p>
        </div>
      </section>

      {/* Our Passionate Team Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(166,134,209,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-heading-bold text-text-primary">
                From <span className="gradient-text">Dusk AI to ModeAI</span>: A New Dawn
              </h2>
              <p className="text-lg text-text-muted font-body-regular leading-relaxed">
                Our journey began as Dusk AI, driven by a passion for leveraging artificial intelligence to solve
                complex business challenges. As the landscape of AI for business rapidly evolved, we recognized the need
                for a more focused, comprehensive, and proactive approach to business automation.
              </p>
              <p className="text-lg text-text-muted font-body-regular leading-relaxed">
                Our rebranding to ModeAI signifies this evolution – a commitment to not just illuminate problems, but to
                actively establish and activate your business's optimal operating mode through intelligent, integrated
                solutions. ModeAI represents a new dawn in automation consultancy, where advanced AI meets practical
                business needs.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <Users className="text-neon-pink" size={24} />
                <span className="text-text-primary font-heading-medium">20+ Expert Team Members</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-primary rounded-2xl p-1">
                <div className="bg-primary-secondary rounded-2xl p-8 h-80 flex items-center justify-center shadow-indigo-card overflow-hidden">
                  <Image
                    src="/images/ai-consulting.webp"
                    alt="Our passionate team working together on AI solutions"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg object-cover w-full h-full"
                    quality={90}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-text-muted justify-center mt-8">
            <span className="font-body-regular font-semibold">Contact:</span>
            <span className="font-body-regular">🇮🇳 70835-89845, 🇦🇪 054 303 9984, 🇨🇦 (780) 908-2320</span>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,46,197,0.03),transparent_70%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-primary rounded-2xl p-1">
                <div className="bg-primary-bg rounded-2xl p-8 h-80 flex items-center justify-center shadow-indigo-card overflow-hidden">
                  <Image
                    src="/images/ai-technology.webp"
                    alt="Vision of future business automation and AI integration"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg object-cover w-full h-full"
                    quality={90}
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold font-sora text-text-primary">
                Our Mission, Vision, and <span className="gradient-text">Values</span>
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold font-poppins text-text-primary mb-2">Mission</h3>
                  <p className="text-lg text-text-muted font-inter leading-relaxed">
                    To empower modern businesses, entrepreneurs, and startups to achieve their fullest potential by
                    designing and implementing cutting-edge, AI-driven automation solutions that optimize workflows,
                    boost efficiency, and accelerate growth.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-poppins text-text-primary mb-2">Vision</h3>
                  <p className="text-lg text-text-muted font-inter leading-relaxed">
                    To be the leading AI automation agency, redefining how businesses operate by seamlessly integrating
                    intelligent systems into every facet of their enterprise, establishing new benchmarks for business
                    efficiency.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-poppins text-text-primary mb-2">Values</h3>
                  <ul className="space-y-2 text-lg text-text-muted font-inter">
                    <li>
                      <strong>Innovation:</strong> Constantly exploring and implementing the latest advancements in AI
                      workflows and automation technology.
                    </li>
                    <li>
                      <strong>Client-Centricity:</strong> Building lasting partnerships by deeply understanding client
                      needs and delivering tailored, impactful automation systems.
                    </li>
                    <li>
                      <strong>Excellence:</strong> Committing to the highest standards in every automation consultancy
                      project, ensuring robust and reliable solutions.
                    </li>
                    <li>
                      <strong>Integrity:</strong> Operating with transparency, honesty, and a steadfast commitment to
                      ethical AI practices.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <Target className="text-neon-pink" size={24} />
                <span className="text-text-primary font-semibold font-poppins">
                  Transforming Business Operations Globally
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative" ref={statsRef}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(166,134,209,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-sora text-text-primary mb-6">
              Our <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-lg text-text-muted font-inter max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-gradient mb-2">
                  {animatedStats[i]}{stat.suffix}
                </div>
                <div className="text-lg text-text-muted font-inter">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,46,197,0.03),transparent_70%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-sora text-text-primary mb-6">
              Client <span className="gradient-text">Reviews</span>
            </h2>
            <p className="text-lg text-text-muted font-inter max-w-2xl mx-auto">
              Hear what our clients say about their experience working with ModeAI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card-strong border border-white/10 rounded-2xl p-8 card-3d hover:shadow-card-glow transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-bright-yellow fill-current" size={20} />
                  ))}
                </div>
                <p className="text-text-muted font-inter mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-border-gray pt-4">
                  <div className="font-semibold font-poppins text-text-primary">{testimonial.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,46,197,0.08),transparent_70%)]"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading-bold text-text-primary mb-8">
            Ready to <span className="gradient-text">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-text-muted font-body-regular mb-8 max-w-2xl mx-auto">
            Let's discuss how our soulful automation approach can revolutionize your operations.
          </p>
          <StarBorder
            as={Link}
            href="/contact"
            className="font-heading-semibold hover:shadow-primary-glow transition-all duration-300 inline-flex items-center text-lg rounded-full"
            color="#A686D1"
            speed="2.5s"
          >
            Schedule Your Consultation
            <ArrowRight className="ml-3" size={24} />
          </StarBorder>
        </div>
      </section>
    </div>
  )
}
