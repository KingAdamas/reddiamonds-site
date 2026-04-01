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
            width={30} 
            height={30} 
            className="rounded-sm"
          />
        </Link>

        {/* ALL MENU ITEMS ON THE RIGHT */}
        <nav className="flex items-center space-x-6">
          <Link href="/" className="text-zinc-400 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-medium">
            Overview
          </Link>

          <Link href="/process" className="text-zinc-400 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-medium">
            The Process
          </Link>

          <Link href="/apply" className="text-zinc-400 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-medium">
            Apply For Consideration
          </Link>

          <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-medium">
            Let's Connect
          </Link>

          {/* NEW CREATOR HUB LINK - SEPARATED BY A BORDER */}
          <Link 
            href="/creator-hub" 
            className="text-white hover:text-red-500 transition-colors text-[10px] uppercase tracking-widest font-bold border-l border-zinc-800 pl-6"
          >
            Creator Hub
          </Link>
        </nav>
      </div>
    </header>
  );
}