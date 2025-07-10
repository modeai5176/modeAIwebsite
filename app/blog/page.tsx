"use client"

import Link from "next/link"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import Image from "next/image"

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "Transform Your Enterprise: How AI Automation Empowers Modern Businesses",
    excerpt:
      "In today's dynamic business environment, efficiency and scalability are not just buzzwords – they are necessities for survival and growth. Discover how AI automation revolutionizes business operations, boosts productivity, cuts costs, and scales your business with intelligent workflows.",
    author: "ModeAI Team",
    date: "December 15, 2024",
    readTime: "8 min read",
    image: "/images/hero-ai-automation.webp",
    category: "AI Automation",
  }

  const blogPosts = [
    {
      id: 2,
      title: "Why Choose ModeAI: Your Partner in Intelligent Business Transformation",
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
  ]

  const categories = [
    "All Posts",
    "AI Innovation",
    "Technical Guide",
    "Business Strategy",
    "Security & Privacy",
    "AI Ethics",
  ]

  return (
    <div className="bg-gradient-to-b from-primary-bg via-primary-secondary to-primary-bg">
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(156,77,255,0.1),transparent_70%)]"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-7xl font-heading-bold text-text-primary mb-8 leading-tight">
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-text-muted font-body-regular max-w-3xl mx-auto leading-relaxed">
              Insights, tutorials, and thought leadership on AI, automation, and the future of business technology. Stay
              updated with the latest trends and best practices in soulful automation.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(166,134,209,0.05),transparent_70%)]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="mb-12">
              <h2 className="text-3xl font-bold font-sora text-text-primary mb-2">Featured Article</h2>
              <div className="w-20 h-1 bg-gradient-purple rounded"></div>
            </div>

            <div className="glass-card-strong border border-white/10 rounded-2xl overflow-hidden card-3d hover:shadow-card-glow transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                    quality={90}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-purple text-white px-3 py-1 rounded-full text-sm font-semibold font-poppins">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold font-sora text-text-primary mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-text-muted font-inter mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-text-muted font-inter text-sm mb-6 space-x-6">
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
                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center text-accent-purple font-semibold font-poppins hover:text-accent-hover transition-colors duration-300"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-10 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,46,197,0.03),transparent_70%)]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-semibold font-poppins transition-all duration-300 ${
                    index === 0
                      ? "bg-gradient-purple text-white shadow-purple-glow"
                      : "bg-primary-bg text-text-muted hover:text-text-primary hover:bg-border-gray"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(166,134,209,0.05),transparent_70%)]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="glass-card-strong border border-white/10 rounded-2xl overflow-hidden card-3d hover:shadow-card-glow transition-all duration-300 group"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      quality={90}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-purple text-white px-3 py-1 rounded-full text-sm font-semibold font-poppins">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-sora text-text-primary mb-3 leading-tight group-hover:text-accent-purple transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-text-muted font-inter mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center text-text-muted font-inter text-sm mb-4 space-x-4">
                      <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-text-muted font-inter text-sm">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-accent-purple font-semibold font-poppins hover:text-accent-hover transition-colors duration-300"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-gradient-purple text-white px-8 py-4 rounded-full font-bold font-poppins hover:shadow-purple-glow transition-all duration-300 glow-effect">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(156,77,255,0.15),transparent_70%)]"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold font-sora text-text-primary mb-6">
              Stay <span className="gradient-text">Updated</span>
            </h2>
            <p className="text-xl text-text-muted font-inter mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest insights on AI, automation, and business transformation.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-primary-secondary border border-border-gray rounded-lg text-text-primary font-inter focus:outline-none focus:border-accent-purple"
              />
              <button className="bg-gradient-purple text-white px-6 py-3 rounded-full font-bold font-poppins hover:shadow-purple-glow transition-all duration-300 glow-effect">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
