"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Keep your existing logic for restricted portal pages
  const isBBRPage = pathname.startsWith('/bbr-portal') || pathname.startsWith('/rush');

  return (
    <html lang="en" className="bg-[#8B0000] scroll-smooth">
      <body className="bg-[#8B0000] text-white antialiased font-sans selection:bg-white selection:text-[#8B0000]">
        {/* Only show Header/Footer if not on a restricted BBR/Rush page */}
        {!isBBRPage && <Header />}
        
        <main className="min-h-screen">
          {children}
        </main>

        {!isBBRPage && <Footer />}
      </body>
    </html>
  );
}