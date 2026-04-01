'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-black py-4 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO ON THE LEFT */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/icon.png" 
            alt="Red Diamonds International" 
            width={40} 
            height={40} 
            className="rounded-md"
          />
        </Link>

        {/* ORIGINAL MENU ITEMS + CREATOR HUB ON THE RIGHT */}
        <nav className="flex items-center space-x-8">
          <Link href="/" className="text-zinc-400 hover:text-white transition-colors text-[10px] uppercase tracking-[0.2em] font-medium">
            Overview
          </Link>

          <Link href="/process" className="text-zinc-400 hover:text-white transition-colors text-[10px] uppercase tracking-[0.2em] font-medium">
            The Process
          </Link>

          <Link href="/apply" className="text-zinc-400 hover:text-white transition-colors text-[10px] uppercase tracking-[0.2em] font-medium">
            Apply For Consideration
          </Link>

          <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors text-[10px] uppercase tracking-[0.2em] font-medium">
            Let's Connect
          </Link>

          {/* NEW CREATOR HUB LINK - STYLED TO STAND OUT SLIGHTLY */}
          <Link 
            href="/creator-hub" 
            className="text-white hover:text-red-500 transition-colors text-[10px] uppercase tracking-[0.2em] font-bold border-l border-zinc-800 pl-8"
          >
            Creator Hub
          </Link>
        </nav>
      </div>
    </header>
  );
}