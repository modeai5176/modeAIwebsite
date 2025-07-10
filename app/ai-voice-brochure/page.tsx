'use client'

import { useState, useEffect } from 'react'
import { Phone, Play, CheckCircle, TrendingUp, Users, Clock, Globe, Zap, Download, QrCode, ExternalLink, Star, ArrowRight, Calendar, MessageCircle, X } from 'lucide-react'

export default function AIVoiceBrochure() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [loadedVideos, setLoadedVideos] = useState<Set<string>>(new Set())

  // Preload video metadata for faster playback
  useEffect(() => {
    const videoSources = ['/arabic.webm', '/english.webm']
    
    videoSources.forEach(src => {
      const video = document.createElement('video')
      video.preload = 'metadata'
      video.src = src
      video.addEventListener('loadedmetadata', () => {
        setLoadedVideos(prev => new Set([...prev, src.replace('/', '').replace('.webm', '')]))
      })
    })
  }, [])

  const futureProspects = [
    {
      industry: "Hospitality",
      title: "Restaurant & Hotel Chains",
      potential: "Handle 1000+ reservations daily without human intervention",
      impact: "Up to 90% cost reduction",
      vision: "Imagine never missing a booking during peak hours, with AI managing complex requests in multiple languages simultaneously.",
      icon: "🍽️"
    },
    {
      industry: "Healthcare",
      title: "Medical Practices",
      potential: "24/7 appointment scheduling & patient follow-ups",
      impact: "300% increase in patient satisfaction",
      vision: "Picture patients booking appointments instantly at 3 AM, with AI handling insurance verification and sending automated reminders.",
      icon: "🏥"
    },
    {
      industry: "Real Estate",
      title: "Property & Sales",
      potential: "Qualify unlimited leads through intelligent conversations",
      impact: "500% more qualified prospects",
      vision: "Envision AI agents conducting property inquiries, scheduling viewings, and nurturing leads while you focus on closing deals.",
      icon: "🏠"
    }
  ]

  const features = [
    {
      icon: <Globe className="w-8 h-8 text-accent-purple" />,
      title: "Multilingual Support",
      subtitle: "Any Language, Any Dialect",
      description: "Communicate with global customers"
    },
    {
      icon: <Users className="w-8 h-8 text-accent-purple" />,
      title: "Human-like Conversations",
      subtitle: "Natural AI Interactions",
      description: "Indistinguishable from human agents"
    },
    {
      icon: <Zap className="w-8 h-8 text-accent-purple" />,
      title: "Complete Automation",
      subtitle: "End-to-End Process",
      description: "From call to conversion automatically"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-accent-purple" />,
      title: "Industry-Specific Scripts",
      subtitle: "Tailored for Your Business",
      description: "Perfect for any industry or use case"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent-purple" />,
      title: "Advanced Analytics",
      subtitle: "Performance Insights",
      description: "Track every call and conversion"
    },
    {
      icon: <Clock className="w-8 h-8 text-accent-purple" />,
      title: "24/7 Operations",
      subtitle: "Never Miss Opportunities",
      description: "Scale without hiring more staff"
    }
  ]

  const workflowSteps = [
    { step: "1", title: "Call Initiated", description: "Inbound or outbound call starts" },
    { step: "2", title: "AI Engages", description: "Natural conversation begins" },
    { step: "3", title: "Objective Achieved", description: "Booking, sale, or lead qualification" },
    { step: "4", title: "Data Captured", description: "All information logged automatically" },
    { step: "5", title: "Action Triggered", description: "Follow-ups and notifications sent" }
  ]

  return (
    <div className="bg-gradient-to-b from-primary-bg via-primary-secondary to-primary-bg min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(166,134,209,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(41,255,227,0.05),transparent_50%)]"></div>
        
        {/* Animated Waveform Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="flex items-center justify-center h-full">
            <div className="flex items-end space-x-1">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="bg-accent-purple rounded-full animate-pulse"
                  style={{
                    width: '4px',
                    height: `${Math.random() * 100 + 20}px`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '1.5s'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 leading-tight" style={{fontFamily: 'var(--font-heading)', fontWeight: 700}}>
              Turn Missed Calls Into{" "}
              <span className="gradient-text">Confirmed Customers</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-muted mb-8 leading-relaxed" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>
              24/7 AI Voice Agents + Proven Digital Marketing
            </p>
            <p className="text-lg text-text-muted mb-12 max-w-3xl mx-auto" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>
              Our AI voice agent combines human-like AI callers with real, trackable marketing — so your business never sleeps.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => document.getElementById('demo-videos')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-accent-purple hover:bg-accent-purple/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-3"
                style={{fontFamily: 'var(--font-heading)', fontWeight: 600}}
              >
                <Play className="w-5 h-5" />
                Watch It Work
              </button>
              <a 
                href="#contact"
                className="bg-transparent border-2 border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
                style={{fontFamily: 'var(--font-heading)', fontWeight: 600}}
              >
                Book Free Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Analytics */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="glass-card-strong border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-text-primary mb-6 text-center" style={{fontFamily: 'var(--font-heading)', fontWeight: 600}}>
              Live Performance Dashboard
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-accent-purple/10 to-accent-pink/10 rounded-2xl border border-accent-purple/20">
                <Phone className="w-12 h-12 text-accent-purple mx-auto mb-4" />
                <div className="text-3xl font-bold text-text-primary mb-2" style={{fontFamily: 'var(--font-heading)', fontWeight: 700}}>412</div>
                <div className="text-text-muted" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>Calls Placed</div>
                <div className="text-xs text-text-muted mt-1">Last Month</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-2xl border border-green-500/20">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-text-primary mb-2" style={{fontFamily: 'var(--font-heading)', fontWeight: 700}}>297</div>
                <div className="text-text-muted" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>Bookings Closed</div>
                <div className="text-xs text-text-muted mt-1">72% Success Rate</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl border border-blue-500/20">
                <Zap className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-text-primary mb-2" style={{fontFamily: 'var(--font-heading)', fontWeight: 700}}>2s</div>
                <div className="text-text-muted" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>Avg Response Time</div>
                <div className="text-xs text-text-muted mt-1">Lightning Fast</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Proof Section */}
      <section id="demo-videos" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-text-primary mb-6" style={{fontFamily: 'var(--font-heading)', fontWeight: 600}}>
              See AI <span className="gradient-text">In Action</span>
            </h2>
            <p className="text-lg text-text-muted max-w-3xl mx-auto mb-4" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>
              Real AI call recordings showing natural conversations, objection handling, and successful outcomes across different industries.
            </p>
            
            {/* Debug Info */}
            <div className="text-sm text-text-muted mb-4">
              <p>Debug: Active Video: {activeVideo || 'None'}</p>
              <p>Loaded Videos: {Array.from(loadedVideos).join(', ') || 'None'}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { 
                title: "AI Restaurant Receptionist (Arabic)", 
                duration: "1:31", 
                description: "AI voice agent handling restaurant reservations in Arabic",
                videoSrc: "/arabic.webm",
                videoId: "arabic"
              },
              { 
                title: "AI Restaurant Receptionist (English)", 
                duration: "1:07", 
                description: "Same AI agent managing bookings in English",
                videoSrc: "/english.webm",
                videoId: "english"
              }
            ].map((video, index) => (
              <div key={index} className="glass-card-strong border border-white/10 rounded-2xl overflow-hidden hover:shadow-card-glow transition-all duration-300">
                <div className="relative h-48 bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 overflow-hidden">
                                    {activeVideo === video.videoId ? (
                    <div className="relative w-full h-full bg-black">
                      <video
                        key={video.videoId}
                        className="w-full h-full object-contain"
                        controls
                        autoPlay
                        muted
                        playsInline
                        preload="auto"
                        src={video.videoSrc}
                        onLoadStart={() => {
                          console.log(`Loading video: ${video.videoSrc}`)
                        }}
                        onCanPlay={() => {
                          console.log(`Video can play: ${video.videoSrc}`)
                          setLoadedVideos(prev => new Set([...prev, video.videoId]))
                        }}
                        onError={(e) => {
                          console.error('Video loading error:', e)
                          console.error('Video source:', video.videoSrc)
                          setActiveVideo(null)
                        }}
                        onPlay={() => {
                          console.log(`Video started playing: ${video.videoSrc}`)
                        }}
                      >
                        Your browser does not support the video tag.
                      </video>
                      <button
                        onClick={() => {
                          console.log('Closing video')
                          setActiveVideo(null)
                        }}
                        className="absolute top-2 right-2 bg-black/80 text-white p-2 rounded-full hover:bg-black transition-colors duration-300 z-20"
                        aria-label="Close video"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div 
                      className="flex items-center justify-center cursor-pointer group h-full"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        console.log('Play button clicked for:', video.videoId)
                        console.log('Video source:', video.videoSrc)
                        setActiveVideo(video.videoId)
                      }}
                    >
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                      
                      <Play className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300 z-10" />
                      
                      <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                      
                      {loadedVideos.has(video.videoId) && (
                        <div className="absolute bottom-4 left-4 bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          Ready
                        </div>
                      )}
                      
                      {!loadedVideos.has(video.videoId) && (
                        <div className="absolute bottom-4 left-4 bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs flex items-center gap-1">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                          Loading...
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-2" style={{fontFamily: 'var(--font-heading)', fontWeight: 600}}>
                    {video.title}
                  </h3>
                  <p className="text-text-muted text-sm" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(166,134,209,0.15),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(41,255,227,0.1),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(166,134,209,0.05)_60deg,transparent_120deg)]"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-accent-purple/20 to-transparent rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-accent-pink/20 to-transparent rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-purple/20 to-accent-pink/20 border border-accent-purple/30 rounded-full mb-8">
              <Zap className="w-5 h-5 text-accent-purple mr-2" />
              <span className="text-accent-purple font-medium" style={{fontFamily: 'var(--font-heading)', fontWeight: 500}}>
                Revolutionary Process
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-text-primary mb-8 leading-tight" style={{fontFamily: 'var(--font-heading)', fontWeight: 700}}>
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-text-muted max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>
              Experience the future of business communication with our intelligent automation that transforms every interaction into opportunity.
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block max-w-7xl mx-auto">
            <div className="relative">
              {/* Main Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-purple/20 to-transparent transform -translate-y-1/2 rounded-full"></div>
              
              {/* Animated Flow */}
              <div className="absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-accent-purple via-accent-pink to-accent-purple animate-pulse opacity-80 rounded-full"></div>
              </div>
              
              {/* Flowing Particles */}
              <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-accent-purple rounded-full opacity-60"
                    style={{
                      left: `${12.5 * i}%`,
                      animation: `flow 3s infinite ${i * 0.3}s`,
                      animationTimingFunction: 'ease-in-out'
                    }}
                  />
                ))}
              </div>
              
              <div className="grid grid-cols-5 gap-8 relative">
                {workflowSteps.map((step, index) => (
                  <div key={index} className="relative group">
                    {/* Main Step Card */}
                    <div className="relative">
                      {/* Glow Effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple/50 to-accent-pink/50 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      {/* Card */}
                      <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:scale-105 transition-all duration-500 group-hover:border-accent-purple/40">
                        {/* Step Icon Container */}
                        <div className="relative mb-8">
                          {/* Outer Ring */}
                          <div className="w-24 h-24 bg-gradient-to-br from-accent-purple/30 to-accent-pink/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                            {/* Inner Circle */}
                            <div className="w-16 h-16 bg-gradient-to-br from-accent-purple to-accent-pink rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-accent-purple/50">
                              <span className="text-white font-bold text-xl" style={{fontFamily: 'var(--font-heading)', fontWeight: 700}}>
                                {step.step}
                              </span>
                            </div>
                          </div>
                          
                          {/* Orbiting Elements */}
                          <div className="absolute inset-0 animate-spin" style={{animationDuration: '10s'}}>
                            <div className="absolute top-0 left-1/2 w-3 h-3 bg-accent-pink rounded-full transform -translate-x-1/2 opacity-60"></div>
                            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-accent-purple rounded-full transform -translate-x-1/2 opacity-40"></div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="text-center space-y-4">
                          <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent-purple transition-colors duration-300" style={{fontFamily: 'var(--font-heading)', fontWeight: 600}}>
                            {step.title}
                          </h3>
                          <p className="text-text-muted leading-relaxed" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>
                            {step.description}
                          </p>
                        </div>
                        
                        {/* Progress Indicator */}
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                          <div className="w-8 h-1 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Connection Arrow */}
                    {index < workflowSteps.length - 1 && (
                      <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                        <div className="w-8 h-8 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300">
                          <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Vertical Flow */}
          <div className="lg:hidden space-y-8 max-w-md mx-auto">
            {workflowSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index < workflowSteps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-accent-purple to-accent-pink opacity-60"></div>
                )}
                
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple/30 to-accent-pink/30 rounded-2xl blur opacity-0 hover:opacity-100 transition-all duration-300"></div>
                  
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                    <div className="flex items-start gap-6">
                      {/* Step Number */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-accent-purple to-accent-pink rounded-full flex items-center justify-center shadow-xl">
                          <span className="text-white font-bold text-lg" style={{fontFamily: 'var(--font-heading)', fontWeight: 700}}>
                            {step.step}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 space-y-3">
                        <h3 className="text-xl font-bold text-text-primary" style={{fontFamily: 'var(--font-heading)', fontWeight: 600}}>
                          {step.title}
                        </h3>
                        <p className="text-text-muted leading-relaxed" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom Section */}
          <div className="text-center mt-20 space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                <div className="text-3xl font-bold text-accent-purple mb-2" style={{fontFamily: 'var(--font-heading)', fontWeight: 700}}>
                  &lt;2min
                </div>
                <div className="text-text-muted" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>
                  Average Call Duration
                </div>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                <div className="text-3xl font-bold text-accent-purple mb-2" style={{fontFamily: 'var(--font-heading)', fontWeight: 700}}>
                  24/7
                </div>
                <div className="text-text-muted" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>
                  Always Available
                </div>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                <div className="text-3xl font-bold text-accent-purple mb-2" style={{fontFamily: 'var(--font-heading)', fontWeight: 700}}>
                  ∞
                </div>
                <div className="text-text-muted" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>
                  Scalability
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full blur opacity-30"></div>
              <div className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-purple/30 to-accent-pink/30 backdrop-blur-xl border border-white/30 rounded-full">
                <Zap className="w-6 h-6 text-accent-purple mr-3" />
                <span className="text-text-primary font-medium text-lg" style={{fontFamily: 'var(--font-heading)', fontWeight: 500}}>
                  Experience the Future of Business Communication
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* CSS Animation for flowing particles */}
        <style jsx>{`
          @keyframes flow {
            0% { transform: translateX(-100px) scale(0); opacity: 0; }
            10% { transform: translateX(-50px) scale(1); opacity: 1; }
            90% { transform: translateX(50px) scale(1); opacity: 1; }
            100% { transform: translateX(100px) scale(0); opacity: 0; }
          }
        `}</style>
      </section>

      {/* Future Prospects */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-text-primary mb-6" style={{fontFamily: 'var(--font-heading)', fontWeight: 600}}>
              The Future of <span className="gradient-text">Business Communication</span>
            </h2>
            <p className="text-lg text-text-muted max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>
              Discover what's possible when AI voice agents revolutionize how businesses handle customer interactions across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {futureProspects.map((prospect, index) => (
              <div key={index} className="glass-card-strong border border-white/10 rounded-2xl p-8 hover:shadow-card-glow transition-all duration-300 group">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 bg-accent-purple/20 text-accent-purple text-sm rounded-full border border-accent-purple/30">
                    {prospect.industry}
                  </span>
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {prospect.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-accent-purple transition-colors duration-300" style={{fontFamily: 'var(--font-heading)', fontWeight: 600}}>
                  {prospect.title}
                </h3>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-accent-purple mb-2" style={{fontFamily: 'var(--font-heading)', fontWeight: 700}}>
                    {prospect.impact}
                  </div>
                  <p className="text-text-muted font-medium mb-4" style={{fontFamily: 'var(--font-body)', fontWeight: 500}}>
                    {prospect.potential}
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-accent-purple/10 to-accent-pink/10 rounded-xl p-4 border border-accent-purple/20">
                  <p className="text-text-primary text-sm leading-relaxed italic" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>
                    {prospect.vision}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-purple/20 to-accent-pink/20 border border-accent-purple/30 rounded-full">
              <Star className="w-5 h-5 text-accent-purple mr-3" />
              <span className="text-text-primary font-medium text-lg" style={{fontFamily: 'var(--font-body)', fontWeight: 500}}>
                Be among the first to experience this revolutionary technology
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-text-primary mb-6" style={{fontFamily: 'var(--font-heading)', fontWeight: 600}}>
              Why Choose Our <span className="gradient-text">AI Voice Agent</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-card-strong border border-white/10 rounded-2xl p-8 hover:shadow-card-glow hover:scale-105 transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2" style={{fontFamily: 'var(--font-heading)', fontWeight: 600}}>
                  {feature.title}
                </h3>
                <p className="text-accent-purple font-medium mb-3" style={{fontFamily: 'var(--font-heading)', fontWeight: 500}}>
                  {feature.subtitle}
                </p>
                <p className="text-text-muted" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="glass-card-strong border border-white/10 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-8" style={{fontFamily: 'var(--font-heading)', fontWeight: 600}}>
              Trusted by Businesses Worldwide
            </h2>
            
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              <div className="flex items-center gap-2 text-text-muted">
                <span className="text-2xl">🇦🇪</span>
                <span style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>UAE</span>
              </div>
            
              <div className="flex items-center gap-2 text-text-muted">
                <span className="text-2xl">🇨🇦</span>
                <span style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>Canada</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <span className="text-2xl">🇮🇳</span>
                <span style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>India</span>
              </div>
            </div>
            
            <div className="inline-flex items-center px-6 py-3 bg-accent-purple/20 border border-accent-purple/30 rounded-full">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-text-primary font-medium" style={{fontFamily: 'var(--font-body)', fontWeight: 500}}>
                Google Partner • AI Technology Certified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="glass-card-strong border border-white/10 rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-text-primary mb-6" style={{fontFamily: 'var(--font-heading)', fontWeight: 700}}>
              Don't Lose Another <span className="gradient-text">Customer</span>
            </h2>
            <p className="text-xl text-text-muted mb-12" style={{fontFamily: 'var(--font-body)', fontWeight: 400}}>
              Let our AI voice agent book your next sale while you focus on growing your business.
            </p>
            
            <div className="flex justify-center">
              <a 
                href="https://wa.me/917083589845"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-4"
                style={{fontFamily: 'var(--font-heading)', fontWeight: 600}}
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 