"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useCallback, memo, useEffect } from "react"
import { Menu, X } from "lucide-react"
import StarBorder from "./StarBorder"

const Header = memo(function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-all duration-300 ${
      isScrolled 
        ? 'bg-primary-bg/85 shadow-xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo with StarBorder */}
          <Link
            href="/"
            className="font-heading-bold flex items-center"
          >
            <Image src="/logo2.png" alt="ModeAI logo" width={70} height={70} />
            <span className="text-3xl text-white px-2">ModeAI</span>
          </Link>

          {/* Desktop Navigation with StarBorder */}
          <nav className="hidden custom:block">
            <StarBorder
              className="font-heading-semibold hover:shadow-primary-glow transition-all duration-300"
              color="#29FFE3"
              speed="3s"
            >
              <div className="flex items-center space-x-8 px-4 py-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white font-heading-semibold hover:text-neon-pink transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </StarBorder>
          </nav>

          {/* CTA Button */}
          <div className="hidden custom:block">
            <StarBorder
              as={Link}
              href="/contact"
              className="font-heading-semibold hover:shadow-primary-glow transition-all duration-300"
              color="#A686D1"
              speed="2.5s"
            >
              Book Your Appointment
            </StarBorder>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`block custom:hidden border border-border-gray/30 rounded-2xl p-3 text-text-primary shadow-lg transition-all duration-300 ${
              isScrolled 
                ? 'bg-primary-bg/95' 
                : 'bg-primary-bg/90'
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="block custom:hidden mt-4">
            <div className="bg-primary-bg/95 border border-border-gray/30 rounded-2xl shadow-lg overflow-hidden">
              <div className="flex flex-col py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-6 py-3 text-text-primary font-heading-medium hover:bg-border-gray hover:text-accent-purple transition-all duration-300"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="px-6 py-3">
                  <StarBorder
                    as={Link}
                    href="/contact"
                    className="w-full font-heading-semibold hover:shadow-primary-glow transition-all duration-300 block text-center"
                    color="#A686D1"
                    speed="2.5s"
                    onClick={closeMenu}
                  >
                    Book Your Appointment
                  </StarBorder>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
})

export default Header
