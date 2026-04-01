'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-black py-6 border-b border-zinc-900">
      <nav className="max-w-7xl mx-auto px-4 flex justify-center items-center space-x-8">
        <Link 
          href="/contact" 
          className="text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium"
        >
          Let's Connect
        </Link>
        
        <Link 
          href="/creator-hub" 
          className="text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium border-l border-zinc-800 pl-8"
        >
          Creator Hub
        </Link>
      </nav>
    </header>
  );
}