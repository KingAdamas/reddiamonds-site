
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
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Red Diamonds International" width={36} height={36} />
          <span className="text-lg font-semibold text-[#ecc970]">
            Red Diamonds International
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-white/80 hover:text-white">
            Home
          </Link>
          <Link href="/contact" className="text-white/80 hover:text-white">
            Connect
          </Link>
          <Link
            href="/apply"
            className="rounded-xl bg-[#d13027] px-4 py-2 font-semibold text-white hover:bg-[#97261f]"
          >
            Join
          </Link>
        </nav>

        {/* Mobile nav */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/apply"
            className="rounded-xl bg-[#d13027] px-4 py-2 font-semibold text-white hover:bg-[#97261f]"
          >
            Join
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl border border-[#241d20] px-3 py-2 text-white/80 hover:text-white"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-[#241d20] bg-black">
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
          </div>
        </div>
      )}
    </header>
  );
}

