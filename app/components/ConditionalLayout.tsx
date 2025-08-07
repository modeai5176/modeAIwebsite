"use client"

import { usePathname } from "next/navigation"
import Header from "./Header"
import Footer from "./Footer"

interface ConditionalLayoutProps {
  children: React.ReactNode
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname()
  const isAICallerPage = pathname.includes("/ai-caller")

  return (
    <>
      {!isAICallerPage && <Header />}
      <main className="min-h-screen">{children}</main>
      {!isAICallerPage && <Footer />}
    </>
  )
} 