"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-[#241d20] bg-black">
      <div className="mx-auto flex h-[72px] max-w-5xl items-center justify-between px-6">
        {/* Logo only */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="RDI"
            width={44}
            height={44}
            className="rounded"
            priority
          />
        </Link>

        {/* Desktop nav (ALL white links) */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-white/80 hover:text-white">
            Home
          </Link>

          <Link href="/contact" className="text-white/80 hover:text-white">
            Connect
          </Link>

          <Link href="/apply" className="text-white/80 hover:text-white">
            Apply for Consideration
          </Link>

          <Link href="/learn-more" className="text-white/80 hover:text-white">
            Learn More
          </Link>
        </nav>

        {/* Mobile nav */}
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
        <div
          id="mobile-nav"
          className="border-t border-[#241d20] bg-black md:hidden"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-5">
            <Link
              href="/"
              className="text-white/80 hover:text-white"
              onClick={() => setOpen(false)}
            >
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
              className="text-white/80 hover:text-white"
              onClick={() => setOpen(false)}
            >
              Join
            </Link>

            <Link
              href="/learn-more"
              className="text-white/80 hover:text-white"
              onClick={() => setOpen(false)}
            >
              Learn More
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


