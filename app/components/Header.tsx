"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-[#241d20] bg-black">
      <div className="mx-auto flex h-[72px] max-w-5xl items-center justify-between px-6">
        {/* Left: Logo + Name */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Red Diamonds International"
            width={52}
            height={52}
            className="rounded"
            priority
          />
          <span className="font-semibold text-[#ecc970]">
            <span className="hidden sm:inline text-lg">Red Diamonds International</span>
            <span className="sm:hidden text-base">Red Diamonds</span>
          </span>
        </Link>

        {/* Desktop nav (NO Join here) */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-white/80 hover:text-white">
            Home
          </Link>
          <Link href="/contact" className="text-white/80 hover:text-white">
            Connect
          </Link>
        </nav>

        {/* Mobile nav: hamburger only */}
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

      {/* Mobile dropdown */}
      {open && (
        <div id="mobile-nav" className="md:hidden border-t border-[#241d20] bg-black">
          <div className="mx-auto max-w-5xl px-6 py-4 flex flex-col gap-3">
            <Link href="/" className="text-white/80 hover:text-white" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link
              href="/contact"
              className="text-white/80 hover:text-white"
              onClick={() => setOpen(false)}
            >
              Connect
            </Link>

            <Link
              href="/apply"
              className="mt-1 inline-flex w-fit rounded-xl bg-[#d13027] px-4 py-2 font-semibold text-white hover:bg-[#97261f]"
              onClick={() => setOpen(false)}
            >
              Join
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
