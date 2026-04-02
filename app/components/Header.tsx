'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Overview', href: '/' },
    { name: 'The Process', href: '/process' },
    { name: 'Apply For Consideration', href: '/apply' },
    { name: 'Let\'s Connect', href: '/contact' },
    { name: 'Creator Hub', href: '/creator-hub' },
  ];

  return (
    <header className="fixed top-0 w-full z-[150] bg-[#8B0000]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* LOGO - Keeping your existing icon.png but with a refined border */}
        <Link href="/" className="flex items-center group">
          <div className="border border-white/20 rounded-full p-1 group-hover:scale-110 transition-transform bg-black">
            <Image src="/icon.png" alt="RDI" width={28} height={28} className="rounded-sm" />
          </div>
          <span className="ml-3 text-white font-black italic tracking-tighter text-lg hidden sm:inline-block">RDI</span>
        </Link>

        {/* DESKTOP NAV - The Bold White-to-Black Strategy */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300
                  ${isActive 
                    ? 'bg-white text-black shadow-xl scale-105' 
                    : 'text-white hover:text-white/70 hover:bg-white/5'
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* MOBILE HAMBURGER - Custom White Lines */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 focus:outline-none flex flex-col gap-1.5 items-end"
        >
          {isOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <>
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-4 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </>
          )}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY - Deep Red for consistency */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#700000] z-[160] flex flex-col items-center justify-center space-y-10 animate-in fade-in zoom-in duration-300">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white text-3xl">✕</button>
          
          <div className="mb-10">
            <Image src="/icon.png" alt="RDI" width={60} height={60} className="rounded-md shadow-2xl" />
          </div>

          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className={`
                  text-xl uppercase tracking-[0.4em] font-black transition-all
                  ${isActive ? 'text-black bg-white px-6 py-2 rounded-full' : 'text-white'}
                `}
              >
                {link.name}
              </Link>
            ))}
        </div>
      )}
    </header>
  );
}