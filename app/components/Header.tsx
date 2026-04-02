'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'OVERVIEW', path: '/' },
  { name: 'THE PROCESS', path: '/process' },
  { name: 'APPLY FOR CONSIDERATION', path: '/apply' },
  { name: 'LET\'S CONNECT', path: '/contact' },
  { name: 'CREATOR HUB', path: '/creator-hub' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-[100] w-full bg-[#8B0000] py-6 px-6">
      <nav className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* LOGO AREA */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-black rounded-full border border-white/20 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110">
            <span className="text-white font-black italic text-xs tracking-tighter">RDI</span>
          </div>
          <span className="text-white font-black italic tracking-[0.3em] text-sm">RDI</span>
        </Link>

        {/* NAVIGATION TABS */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  isActive 
                    ? 'bg-white text-black shadow-lg scale-105' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
