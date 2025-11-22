"use client";

import { usePathname } from "next/navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAICallerPage = pathname?.includes("/ai-caller") ?? false;

  return (
    <>
      {!isAICallerPage && <Header />}
      <main className="min-h-screen">{children}</main>
      {!isAICallerPage && <Footer />}
    </>
  );
}
