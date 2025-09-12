import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import StarBorder from "../components/StarBorder"
import {
  Phone,
  Calendar,
  Clock,
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Lock,
  TrendingUp,
  MessageSquare,
  Scale,
  Heart,
  Home,
  Briefcase,
  Wrench,
  Car,
} from "lucide-react"

export default function ModeAILandingPage() {
  return (
    <div className="min-h-screen bg-[url('/wireframe-1080p.png')] bg-cover bg-center bg-fixed">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border-gray bg-primary-bg/95 backdrop-blur supports-[backdrop-filter]:bg-primary-bg/60 animate-fade-in">
        <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center hover-lift">
                <MessageSquare className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-heading text-xl font-bold">ModeAI</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#solutions" className="text-sm font-medium hover:text-primary transition-colors duration-200">
              Solutions
            </a>
            <a href="#industries" className="text-sm font-medium hover:text-primary transition-colors duration-200">
              Industries
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors duration-200">
              Pricing
            </a>
            <a href="#resources" className="text-sm font-medium hover:text-primary transition-colors duration-200">
              Resources
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-2">
              <span className="inline-flex items-center rounded-full border border-border-gray px-2.5 py-0.5 text-xs font-medium text-text-muted hover-lift">
                GDPR-Compliant
              </span>
              <span className="inline-flex items-center rounded-full border border-border-gray px-2.5 py-0.5 text-xs font-medium text-text-muted hover-lift">
                Secure by Design
              </span>
            </div>
            <StarBorder
              className="hidden sm:inline-flex font-heading-semibold hover:shadow-primary-glow transition-all duration-300 inline-flex items-center text-xs px-3 py-1.5"
              color="#A686D1"
              speed="2.5s"
            >
              Get a Live Demo
            </StarBorder>
            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 hover-lift rounded-xl">
              See It In Action
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center justify-center py-8 md:py-12 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/wireframe-1080p.png)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/55"></div>
        <div className="relative z-10 w-full">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-text-primary">
                  Never lose another <span className="gradient-text">high-value lead</span>
                </h1>
                <p className="text-base md:text-lg text-text-muted max-w-2xl leading-relaxed">
                  AI receptionists and automations that answer instantly, qualify smartly, and book reliably.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="metallic-fluid-btn text-text-primary hover:shadow-purple-glow hover-lift rounded-xl">
                  See It In Action
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <StarBorder
                  className="font-heading-semibold hover:shadow-primary-glow transition-all duration-300 inline-flex items-center text-xs px-3 py-1.5"
                  color="#A686D1"
                  speed="2.5s"
                >
                  Get a Live Demo
                </StarBorder>
              </div>
            </div>

            <div className="relative animate-fade-in-up animate-delay-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="glass-card-strong p-4 md:p-6 space-y-3 hover-lift animate-delay-100 rounded-xl">
                  <div className="flex items-center space-x-2 text-soft-red">
                    <Phone className="h-4 md:h-5 w-4 md:w-5" />
                    <span className="text-sm font-medium">Missed Calls</span>
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-text-primary">47%</div>
                  <p className="text-xs text-text-muted">Lost opportunities</p>
                </Card>

                <Card className="glass-card-strong p-4 md:p-6 space-y-3 bg-accent/10 border-accent/20 hover-lift animate-delay-200 rounded-xl">
                  <div className="flex items-center space-x-2 text-accent">
                    <CheckCircle className="h-4 md:h-5 w-4 md:w-5" />
                    <span className="text-sm font-medium">Auto-Booked</span>
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-text-primary">90%</div>
                  <p className="text-xs text-text-muted">Success rate</p>
                </Card>

                <Card className="glass-card-strong p-4 md:p-6 space-y-3 col-span-1 sm:col-span-2 bg-accent/10 border-accent/20 hover-lift animate-delay-300 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 md:h-5 w-4 md:w-5" />
                      <span className="text-sm font-medium">Appointment Confirmed</span>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-accent/20 text-accent px-2.5 py-0.5 text-xs font-medium w-fit animate-pulse-subtle">
                      Just now
                    </span>
                  </div>
                  <p className="text-sm opacity-90">Sarah Johnson - Legal Consultation - Tomorrow 2:00 PM</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="py-8 md:py-12 animate-fade-in relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/wireframe-1080p.png)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/55"></div>
        <div className="relative z-10">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center space-y-4 md:space-y-6">
            <p className="text-sm text-text-muted">Trusted across law, luxury clinics, real estate, and more</p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 opacity-60">
              <div className="flex items-center space-x-2 hover-lift">
                <Scale className="h-5 md:h-6 w-5 md:w-6 text-accent" />
                <span className="font-medium text-sm md:text-base text-text-primary">Legal</span>
              </div>
              <div className="flex items-center space-x-2 hover-lift">
                <Heart className="h-5 md:h-6 w-5 md:w-6 text-accent" />
                <span className="font-medium text-sm md:text-base text-text-primary">Healthcare</span>
              </div>
              <div className="flex items-center space-x-2 hover-lift">
                <Home className="h-5 md:h-6 w-5 md:w-6 text-accent" />
                <span className="font-medium text-sm md:text-base text-text-primary">Real Estate</span>
              </div>
              <div className="flex items-center space-x-2 hover-lift">
                <Briefcase className="h-5 md:h-6 w-5 md:w-6 text-accent" />
                <span className="font-medium text-sm md:text-base text-text-primary">Consulting</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
              <span className="inline-flex items-center rounded-full border border-border-gray px-2.5 py-0.5 text-xs font-medium text-text-muted hover-lift">
                <Shield className="h-3 w-3 mr-1" />
                GDPR-Compliant
              </span>
              <span className="inline-flex items-center rounded-full border border-border-gray px-2.5 py-0.5 text-xs font-medium text-text-muted hover-lift">
                <TrendingUp className="h-3 w-3 mr-1" />
                99.9% Uptime
              </span>
              <span className="inline-flex items-center rounded-full border border-border-gray px-2.5 py-0.5 text-xs font-medium text-text-muted hover-lift">
                <Lock className="h-3 w-3 mr-1" />
                Encrypted
              </span>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Problem Amplifier */}
      <section className="py-12 md:py-20 animate-fade-in-up relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/wireframe-1080p.png)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/55"></div>
        <div className="relative z-10">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center space-y-8 md:space-y-12">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl md:text-3xl font-bold sm:text-4xl">
                How much revenue are you losing?
              </h2>
            </div>

            <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="glass-card-strong p-6 md:p-8 text-center space-y-4 hover-lift animate-delay-100 rounded-xl">
                <div className="mx-auto w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-destructive">$2,400</div>
                  <p className="text-sm text-text-muted">Missed revenue per month</p>
                </div>
              </Card>

              <Card className="glass-card-strong p-6 md:p-8 text-center space-y-4 hover-lift animate-delay-200 rounded-xl">
                <div className="mx-auto w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-destructive">$850</div>
                  <p className="text-sm text-text-muted">Slow response cost per month</p>
                </div>
              </Card>

              <Card className="glass-card-strong p-6 md:p-8 text-center space-y-4 hover-lift animate-delay-300 sm:col-span-2 lg:col-span-1 rounded-xl">
                <div className="mx-auto w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-destructive">$1,200</div>
                  <p className="text-sm text-text-muted">Admin overload per month</p>
                </div>
              </Card>
            </div>

            <div className="space-y-6 animate-fade-in-up animate-delay-400">
              <p className="text-base md:text-lg text-text-muted">
                <span className="font-bold text-destructive">$4,650</span> slipping away every month because no one
                picked up in time.
              </p>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 hover-lift rounded-xl">
                Fix It Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Solution Snapshot */}
      <section className="py-12 md:py-20 animate-fade-in relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/wireframe-1080p.png)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/55"></div>
        <div className="relative z-10">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <h2 className="font-heading text-2xl md:text-3xl font-bold sm:text-4xl">What you get with ModeAI</h2>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-3 animate-fade-in-up animate-delay-100">
                  <CheckCircle className="h-5 md:h-6 w-5 md:w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">Answers instantly, every time</h3>
                    <p className="text-sm text-text-muted">Never miss a call again with 24/7 AI reception</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 animate-fade-in-up animate-delay-200">
                  <CheckCircle className="h-5 md:h-6 w-5 md:w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">Books appointments without back-and-forth</h3>
                    <p className="text-sm text-text-muted">
                      Smart scheduling that handles availability and preferences
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 animate-fade-in-up animate-delay-300">
                  <CheckCircle className="h-5 md:h-6 w-5 md:w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">Plugs into your CRM in minutes</h3>
                    <p className="text-sm text-text-muted">Seamless integration with your existing workflow</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 animate-fade-in-up animate-delay-400">
                  <CheckCircle className="h-5 md:h-6 w-5 md:w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">Gets smarter with every conversation</h3>
                    <p className="text-sm text-text-muted">AI that learns your business and improves over time</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 hover-lift rounded-xl">
                See It In Action
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="relative animate-fade-in-up animate-delay-200">
              <Card className="glass-card-strong p-4 md:p-6 space-y-4 hover-lift rounded-xl">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm md:text-base">Call Flow</h3>
                  <span className="inline-flex items-center rounded-full bg-accent/10 text-accent px-2.5 py-0.5 text-xs font-medium animate-pulse-subtle">
                    Live
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-border-gray/50 hover-lift animate-delay-100">
                    <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm">Incoming call received</span>
                  </div>

                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-accent/10 hover-lift animate-delay-200">
                    <MessageSquare className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm">AI greeting & qualification</span>
                  </div>

                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent/20 hover-lift animate-delay-300">
                    <Calendar className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm">Appointment booked automatically</span>
                  </div>

                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary text-primary-foreground hover-lift animate-delay-400">
                    <CheckCircle className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">CRM updated with lead details</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Industry Snapshots */}
      <section className="py-12 md:py-20 animate-fade-in relative bg-cover bg-center bg-no-repeat" id="industries" style={{ backgroundImage: 'url(/wireframe-1080p.png)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/55"></div>
        <div className="relative z-10">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center space-y-8 md:space-y-12">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl md:text-3xl font-bold sm:text-4xl">Built for your industry</h2>
              <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto">
                Tailored solutions that understand your specific business needs
              </p>
            </div>

            <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="glass-card-strong p-4 md:p-6 space-y-4 hover-lift cursor-pointer group animate-delay-100 rounded-xl">
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-200">
                  <Scale className="h-5 md:h-6 w-5 md:w-6 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm md:text-base">Law Firms</h3>
                  <p className="text-sm text-text-muted">Auto-qualify and book consultations</p>
                </div>
              </Card>

              <Card className="glass-card-strong p-4 md:p-6 space-y-4 hover-lift cursor-pointer group animate-delay-200 rounded-xl">
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-200">
                  <Heart className="h-5 md:h-6 w-5 md:w-6 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm md:text-base">Luxury Clinics</h3>
                  <p className="text-sm text-text-muted">24/7 bookings and FAQs handled</p>
                </div>
              </Card>

              <Card className="glass-card-strong p-4 md:p-6 space-y-4 hover-lift cursor-pointer group animate-delay-300 rounded-xl">
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-200">
                  <Home className="h-5 md:h-6 w-5 md:w-6 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm md:text-base">Real Estate</h3>
                  <p className="text-sm text-text-muted">Schedule viewings without phone tag</p>
                </div>
              </Card>

              <Card className="glass-card-strong p-4 md:p-6 space-y-4 hover-lift cursor-pointer group animate-delay-100 rounded-xl">
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-200">
                  <Briefcase className="h-5 md:h-6 w-5 md:w-6 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm md:text-base">Consulting</h3>
                  <p className="text-sm text-text-muted">Qualify leads and book discovery calls</p>
                </div>
              </Card>

              <Card className="glass-card-strong p-4 md:p-6 space-y-4 hover-lift cursor-pointer group animate-delay-200 rounded-xl">
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-200">
                  <Wrench className="h-5 md:h-6 w-5 md:w-6 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm md:text-base">Home Services</h3>
                  <p className="text-sm text-text-muted">Instant quotes and service scheduling</p>
                </div>
              </Card>

              <Card className="glass-card-strong p-4 md:p-6 space-y-4 hover-lift cursor-pointer group animate-delay-300 rounded-xl">
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-200">
                  <Car className="h-5 md:h-6 w-5 md:w-6 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm md:text-base">Automotive</h3>
                  <p className="text-sm text-text-muted">Service appointments and parts inquiries</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20 animate-fade-in relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/wireframe-1080p.png)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/55"></div>
        <div className="relative z-10">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center space-y-8 md:space-y-12">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl md:text-3xl font-bold sm:text-4xl">
                Real results from real businesses
              </h2>
            </div>

            <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="glass-card-strong p-4 md:p-6 space-y-4 hover-lift animate-delay-100 rounded-xl">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed">
                  "Missed 40% of calls before ModeAI. Now we book 90% of inquiries in month one. Game changer."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-accent">RK</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold">Rajesh Kumar</p>
                    <p className="text-xs text-text-muted">Partner, Kumar & Associates Law</p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card-strong p-4 md:p-6 space-y-4 hover-lift animate-delay-200 rounded-xl">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed">
                  "Saves us 15 hours per week on admin. Our team can focus on what matters - patient care."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-accent">PS</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold">Dr. Priya Sharma</p>
                    <p className="text-xs text-text-muted">Director, Elite Wellness Clinic</p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card-strong p-4 md:p-6 space-y-4 hover-lift animate-delay-300 sm:col-span-2 lg:col-span-1 rounded-xl">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed">
                  "Property viewings increased 300%. No more phone tag with prospects. Pure efficiency."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-accent">AM</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold">Arjun Mehta</p>
                    <p className="text-xs text-text-muted">Founder, Prime Properties</p>
                  </div>
                </div>
              </Card>
            </div>

            <StarBorder
              className="font-heading-semibold hover:shadow-primary-glow transition-all duration-300 inline-flex items-center text-xs px-3 py-1.5"
              color="#A686D1"
              speed="2.5s"
            >
              Show Me How
              <ArrowRight className="ml-2 h-4 w-4" />
            </StarBorder>
          </div>
        </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-20 animate-fade-in relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/wireframe-1080p.png)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/55"></div>
        <div className="relative z-10">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center space-y-8 md:space-y-12">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl md:text-3xl font-bold sm:text-4xl">How it works</h2>
              <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto">
                Start with a guided demo; we'll tailor it in real time.
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-center space-y-4 animate-fade-in-up animate-delay-100">
                <div className="mx-auto w-14 md:w-16 h-14 md:h-16 rounded-full bg-accent/10 flex items-center justify-center hover-lift">
                  <span className="text-xl md:text-2xl font-bold text-accent">1</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm md:text-base">Map your flow</h3>
                  <p className="text-sm text-text-muted">15 minutes to understand your process</p>
                </div>
              </div>

              <div className="text-center space-y-4 animate-fade-in-up animate-delay-200">
                <div className="mx-auto w-14 md:w-16 h-14 md:h-16 rounded-full bg-accent/10 flex items-center justify-center hover-lift">
                  <span className="text-xl md:text-2xl font-bold text-accent">2</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm md:text-base">Connect your CRM & numbers</h3>
                  <p className="text-sm text-text-muted">Seamless integration with your tools</p>
                </div>
              </div>

              <div className="text-center space-y-4 animate-fade-in-up animate-delay-300 sm:col-span-2 lg:col-span-1">
                <div className="mx-auto w-14 md:w-16 h-14 md:h-16 rounded-full bg-accent/10 flex items-center justify-center hover-lift">
                  <span className="text-xl md:text-2xl font-bold text-accent">3</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm md:text-base">Go live and iterate</h3>
                  <p className="text-sm text-text-muted">Launch same day, improve continuously</p>
                </div>
              </div>
            </div>

            <StarBorder
              className="font-heading-semibold hover:shadow-primary-glow transition-all duration-300 inline-flex items-center text-xs px-3 py-1.5"
              color="#A686D1"
              speed="2.5s"
            >
              Get a Live Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </StarBorder>
          </div>
        </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-20 animate-fade-in relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/wireframe-1080p.png)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/55"></div>
        <div className="relative z-10">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-8 md:space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-heading text-2xl md:text-3xl font-bold sm:text-4xl">Frequently asked questions</h2>
            </div>

            <div className="space-y-4 md:space-y-6">
              <Card className="glass-card-strong p-4 md:p-6 hover-lift animate-delay-100 rounded-xl">
                <div className="space-y-3">
                  <h3 className="font-semibold text-sm md:text-base">Will this replace my team?</h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    No. It handles the repetitive parts so your team can focus on revenue-generating activities.
                  </p>
                </div>
              </Card>

              <Card className="glass-card-strong p-4 md:p-6 hover-lift animate-delay-200 rounded-xl">
                <div className="space-y-3">
                  <h3 className="font-semibold text-sm md:text-base">Which CRMs do you support?</h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    HubSpot, Pipedrive, Zoho, Salesforce, and more. Custom integrations available.
                  </p>
                </div>
              </Card>

              <Card className="glass-card-strong p-4 md:p-6 hover-lift animate-delay-300 rounded-xl">
                <div className="space-y-3">
                  <h3 className="font-semibold text-sm md:text-base">How long does setup take?</h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Same day for common stacks. Most businesses are live within 24 hours.
                  </p>
                </div>
              </Card>

              <Card className="glass-card-strong p-4 md:p-6 hover-lift animate-delay-400 rounded-xl">
                <div className="space-y-3">
                  <h3 className="font-semibold text-sm md:text-base">Do you support multiple languages?</h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Yes. Multi-lingual support with global routing capabilities.
                  </p>
                </div>
              </Card>

              <Card className="glass-card-strong p-4 md:p-6 hover-lift animate-delay-100 rounded-xl">
                <div className="space-y-3">
                  <h3 className="font-semibold text-sm md:text-base">What about pricing?</h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Simple tiers. Pay for outcomes, not hype.{" "}
                    <a href="#pricing" className="text-accent hover:underline transition-colors duration-200">
                      View pricing
                    </a>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 animate-fade-in relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/wireframe-1080p.png)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/55"></div>
        <div className="relative z-10">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl md:text-3xl font-bold sm:text-4xl">
                Ready to stop leaking revenue?
              </h2>
              <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto">
                Join hundreds of businesses that never miss a lead again
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-accent text-accent-foreground hover:bg-accent/90 hover-lift rounded-xl"
              >
                See It In Action
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <StarBorder
                className="font-heading-semibold hover:shadow-primary-glow transition-all duration-300 inline-flex items-center text-xs px-3 py-1.5"
                color="#A686D1"
                speed="2.5s"
              >
                Get a Live Demo
              </StarBorder>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 border-t animate-fade-in bg-primary-bg">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center hover-lift">
                  <MessageSquare className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-heading text-xl font-bold">ModeAI</span>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                Never lose another high-value lead with AI that works.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-sm md:text-base">Solutions</h4>
              <div className="space-y-2 text-sm text-text-muted">
                <a href="#" className="block hover:text-foreground transition-colors duration-200">
                  AI Receptionist
                </a>
                <a href="#" className="block hover:text-foreground transition-colors duration-200">
                  Automations
                </a>
                <a href="#" className="block hover:text-foreground transition-colors duration-200">
                  CRM Integration
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-sm md:text-base">Industries</h4>
              <div className="space-y-2 text-sm text-text-muted">
                <a href="#" className="block hover:text-foreground transition-colors duration-200">
                  Law Firms
                </a>
                <a href="#" className="block hover:text-foreground transition-colors duration-200">
                  Healthcare
                </a>
                <a href="#" className="block hover:text-foreground transition-colors duration-200">
                  Real Estate
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-sm md:text-base">Company</h4>
              <div className="space-y-2 text-sm text-text-muted">
                <a href="#" className="block hover:text-foreground transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="block hover:text-foreground transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="block hover:text-foreground transition-colors duration-200">
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t text-center text-sm text-text-muted">
            <p>&copy; 2024 ModeAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
