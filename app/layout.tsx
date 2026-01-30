"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  
  // Detects the standalone BBR portal
  const isBBRPage = pathname === '/bbr-portal' || pathname === '/rush';
  
  return (
    <html lang="en" className="bg-[#000000]">
      <body className="bg-[#000000] text-white antialiased">
        {/* Hide Header/Footer only on the BBR Portal */}
        {!isBBRPage && <Header />}
        {children}
        {!isBBRPage && <Footer />}
      </body>
    </html>
  );
}
