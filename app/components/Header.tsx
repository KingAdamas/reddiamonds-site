'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'OVERVIEW', path: '/' },
  { name: 'THE PROCESS', path: '/process' },
  { name: 'APPLY FOR CONSIDERATION', path: '/apply' },
  { name: 'LET\'S CONNECT', path: '/contact' },
  { name: 'CREATOR HUB', path: '/creator-hub' },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] w-full bg-[#8B0000] py-4 px-6 shadow-xl">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO: Restored using your original /logo.png */}
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-white/20 transition-transform group-hover:scale-110">
            <Image 
              src="/logo.png" 
              alt="RDI Logo" 
              fill 
              className="object-cover"
            />
          </div>
          <span className="text-white font-black italic tracking-[0.3em] text-sm">RDI</span>
        </Link>

        {/* DESKTOP NAVIGATION: Pill logic for active state */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  isActive 
                    ? 'bg-white text-black shadow-lg' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="lg:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* MOBILE OVERLAY: Solid Crimson to prevent white-card bleed through */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#8B0000] border-t border-white/10 flex flex-col items-center py-10 gap-6 lg:hidden shadow-2xl animate-in fade-in slide-in-from-top-4">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-[12px] font-black uppercase tracking-[0.3em] transition-all px-6 py-2 rounded-full ${
                    isActive 
                      ? 'bg-white text-black' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
