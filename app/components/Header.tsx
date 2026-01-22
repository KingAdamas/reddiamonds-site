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
      <div className="mx-auto flex h-[80px] max-w-7xl items-center justify-between px-8">
        
        {/* Logo on the Left - Larger with Red Glow */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Red Diamonds International"
            width={58} 
            height={58}
            className="rounded shadow-[0_0_20px_rgba(209,48,39,0.25)]" 
            priority
          />
        </Link>

        {/* Desktop Navigation on the Right */}
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
        <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="bg-[#000000] border-t border-[#241d20] md:hidden px-8 py-6 space-y-4">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="block text-[10px] font-bold uppercase tracking-widest text-white/70">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
