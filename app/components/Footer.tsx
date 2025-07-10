import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, LucideIcon } from "lucide-react"
import { ReactNode } from "react"

// Adjusted type to distinguish between LucideIcon components and custom render functions
type SocialLink = {
  href: string
  label: string
} & (
  | { type: 'iconComponent'; component: LucideIcon }
  | { type: 'renderFunction'; render: () => ReactNode }
);

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ]

  // Updated socialLinks array to use the new type structure
  const socialLinks: SocialLink[] = [
    { type: 'iconComponent', component: Facebook, href: "#", label: "Facebook" },
    {
      type: 'renderFunction',
      render: () => (
        <span className="text-lg font-bold">𝕏</span>
      ),
      href: "#",
      label: "X (Twitter)"
    },
    { type: 'iconComponent', component: Linkedin, href: "#", label: "LinkedIn" },
    { type: 'iconComponent', component: Instagram, href: "https://www.instagram.com/modeai.co?igsh=MTY2emhsMHdiMHdiZg==", label: "Instagram" },
  ]

  return (
    <footer className="glass-card border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-heading-bold gradient-text mb-4 block">
              ModeAI
            </Link>
            <p className="text-text-muted font-body-regular mb-6 max-w-md">
              Next-generation AI agents and intelligent business automation with human-centric design. We create soulful
              automation that empowers people and transforms businesses.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-text-muted">
                <Phone size={18} className="text-accent-purple mt-1" />
                <div className="flex flex-col space-y-1">
                  <span className="font-body-regular">🇮🇳 +91 8700117495, +91 70835-89845</span>
                  <span className="font-body-regular">🇦🇪 +971  (054) 303 9984</span>
                  <span className="font-body-regular">🇨🇦 +1 (780) 908-2320</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-text-muted">
                <Mail size={18} className="text-accent-purple" />
                <span className="font-body-regular">admin@mode-ai.co</span>
              </div>
              <div className="flex items-center space-x-3 text-text-muted">
                <MapPin size={18} className="text-accent-purple" />
                <span className="font-body-regular">India, UAE, Canada</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading-medium text-text-primary mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-accent-purple transition-colors duration-300 font-body-regular"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-heading-medium text-text-primary mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-border-gray rounded-full flex items-center justify-center text-text-muted hover:bg-accent-purple hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.type === 'iconComponent' ? (
                    <social.component size={20} />
                  ) : (
                    social.render()
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border-gray mt-8 pt-8 text-center">
          <p className="text-text-muted font-body-regular">© 2025 ModeAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
