"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV = [
  { label: "Overview", href: "/" },
  { label: "The Process", href: "/process" },
  { label: "Apply for Consideration", href: "/apply" },
  { label: "Let’s Connect", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#241d20] bg-black/80 backdrop-blur-md">   
       <div className="mx-auto flex h-[56px] max-w-5xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
          aria-label="Go to homepage"
        >
          <Image
            src="/logo.png"
            alt="Red Diamonds International"
            width={44}
            height={44}
            className="rounded"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/80 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl border border-[#241d20] px-3 py-2 text-white/80 hover:text-white"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div id="mobile-nav" className="border-t border-[#241d20] bg-black md:hidden">
          <div className="mx-auto max-w-5xl px-6 py-2">
            <nav className="flex flex-col gap-4">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/80 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
