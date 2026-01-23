"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Note: Metadata cannot be exported from a Client Component. 
// If you need SEO for the main site, keep metadata in a separate 'layout-metadata.ts' 
// or simply use this streamlined version for the standalone look.

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  
  // Logic to detect the standalone BBR portal
  const isBBRPage = pathname === '/bbr-portal';

  return (
    <html lang="en" className="bg-[#000000]">
      <body className="bg-[#000000] text-white antialiased">
        {/* Hide Header only on the BBR Portal */}
        {!isBBRPage && <Header />}
        
        {children}
        
        {/* Hide Footer only on the BBR Portal */}
        {!isBBRPage && <Footer />}
      </body>
    </html>
  );
}
