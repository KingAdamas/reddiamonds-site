"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-[#241d20] bg-black">
      <div className="mx-auto flex h-[72px] max-w-5xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
          aria-label="Go to overview"
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
          <Link href="/" className="text-white/80 hover:text-white">
            Overview
          </Link>

          <Link href="/the-process" className="text-white/80 hover:text-white">
            The Process
          </Link>

          <Link href="/apply" className="text-white/80 hover:text-white">
            Apply for Consideration
          </Link>

          <Link href="/contact" className="text-white/80 hover:text-white">
            Let&apos;s Connect
          </Link>
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

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-[#241d20] bg-black"
        >
          <nav className="flex flex-col gap-6 px-6 py-8">
            <Link
              href="/"
              className="text-white/80 hover:text-white"
              onClick={() => setOpen(false)}
            >
              Overview
            </Link>

            <Link
              href="/the-process"
              className="text-white/80 hover:text-white"
              onClick={() => setOpen(false)}
            >
              The Process
            </Link>

            <Link
              href="/apply"
              className="text-white/80 hover:text-white"
              onClick={() => setOpen(false)}
            >
              Apply for Consideration
            </Link>

            <Link
              href="/contact"
              className="text-white/80 hover:text-white"
              onClick={() => setOpen(false)}
            >
              Let&apos;s Connect
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

