"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV = [
  { label: "Overview", href: "/" },
  { label: "The Process", href: "/process" },
  { label: "Apply for Consideration", href: "/apply" },
  { label: "Let's Connect", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#241d20] bg-[#000000]">
      <div className="mx-auto flex h-[64px] max-w-7xl items-center justify-between px-8">
        
        {/* Logo Left - Establish Brand Authority */}
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Red Diamonds International"
            width={48} 
            height={48}
            className="rounded shadow-[0_0_15px_rgba(209,48,39,0.2)]" 
            priority
          />
        </Link>

        {/* Navigation Right - Refined Uppercase Style */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70 hover:text-[#ecc970] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="text-white/80 hover:text-white text-2xl"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Nav - Matches Solid Black Aesthetic */}
      {open && (
        <div className="border-t border-[#241d20] bg-[#000000] md:hidden">
          <div className="px-8 py-6 flex flex-col gap-5">
            {NAV.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                onClick={() => setOpen(false)}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 hover:text-[#ecc970]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
