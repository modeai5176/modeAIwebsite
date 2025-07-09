import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Poppins, Space_Grotesk, Sora, Open_Sans } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: 'swap',
  preload: true,
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: 'swap',
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: 'swap',
  preload: true,
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#1a1a2e',
}

export const metadata: Metadata = {
  title: {
    default: "AI Automation for Businesses | Mode AI",
    template: "%s | Mode AI"
  },
  description: "Automate your business with Mode AI — AI-powered voice assistants, CRM workflows, and smart automation solutions. Based in Vancouver, serving globally.",
  generator: "Next.js",
  applicationName: "Mode AI",
  referrer: "origin-when-cross-origin",
  keywords: ["AI automation", "business automation", "AI agents", "digital transformation", "ModeAI", "Vancouver", "voice assistants", "CRM workflows"],
  authors: [{ name: "ModeAI Team" }],
  creator: "ModeAI",
  publisher: "ModeAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.mode-ai.co'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.mode-ai.co',
    title: 'AI Automation for Businesses | Mode AI',
    description: 'Automate your business with Mode AI — AI-powered voice assistants, CRM workflows, and smart automation solutions. Based in Vancouver, serving globally.',
    siteName: 'Mode AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation for Businesses | Mode AI',
    description: 'Automate your business with Mode AI — AI-powered voice assistants, CRM workflows, and smart automation solutions. Based in Vancouver, serving globally.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo_transparent.png',
    shortcut: '/logo_transparent.png',
    apple: '/logo_transparent.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mode AI",
              "url": "https://www.mode-ai.co/",
              "logo": "https://www.mode-ai.co/logo2.png",
              "description": "Mode AI is a Vancouver-based AI automation company that helps businesses streamline operations using intelligent voice assistants, CRM automation, and workflow solutions.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Vancouver",
                "addressRegion": "BC",
                "addressCountry": "Canada"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-780-908-2320",
                "contactType": "Customer Service"
              },
              "sameAs": [
                "https://www.linkedin.com/company/mode-ai-co/",
                "https://www.instagram.com/modeai.co/"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Automation Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Voice Assistants",
                      "description": "Automated voice AI to handle customer calls, bookings, and support inquiries."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "CRM Workflow Automation",
                      "description": "Seamlessly integrate AI into your CRM to improve sales and customer retention."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Business Process Automation",
                      "description": "Custom AI workflows for repetitive task automation to save time and boost productivity."
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} ${sora.variable} ${openSans.variable} bg-primary-bg text-text-primary antialiased h-full m-0 p-0`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
