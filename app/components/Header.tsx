'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Overview', href: '/' },
    { name: 'The Process', href: '/process' },
    { name: 'Apply For Consideration', href: '/apply' },
    { name: 'Let\'s Connect', href: '/contact' },
    { name: 'Creator Hub', href: '/creator-hub', highlight: true },
  ];

  return (
    <header className="w-full bg-black py-4 border-b border-zinc-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image src="/icon.png" alt="RDI" width={30} height={30} className="rounded-sm" />
        </Link>

        {/* DESKTOP NAV (Hidden on Mobile) */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`${link.highlight ? 'text-white font-bold border-l border-zinc-800 pl-6' : 'text-zinc-400'} hover:text-red-500 transition-colors text-[10px] uppercase tracking-widest`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* MOBILE HAMBURGER BUTTON (Shown only on Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 focus:outline-none"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 animate-in fade-in zoom-in duration-300">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white text-2xl">✕</button>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className={`${link.highlight ? 'text-red-500 font-bold' : 'text-zinc-400'} text-lg uppercase tracking-[0.3em] font-medium`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}