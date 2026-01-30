"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // This logic hides the menu for /rush, /bbr-portal, and variations
  const isBBRPage = pathname.startsWith('/bbr-portal') || pathname.startsWith('/rush');

  return (
    <html lang="en" className="bg-[#000000]">
      <body className="bg-[#000000] text-white antialiased">
        {!isBBRPage && <Header />}
        <main>{children}</main>
        {!isBBRPage && <Footer />}
      </body>
    </html>
  );
}
