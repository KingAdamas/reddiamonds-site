'use client';

import React from 'react';
import Link from 'next/link';

export default function FeaturedCreators() {
  return (
    <div className="min-h-screen bg-[#F7F3EF] text-black font-sans selection:bg-[#8B0000] selection:text-white">
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-8 md:space-y-12">

        {/* --- HERO --- */}
        <section>
          <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-20 text-center shadow-sm">
            <p className="text-[#8B0000] text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-8 leading-loose">
              FEATURED CREATORS
            </p>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-black mb-6 md:mb-8 leading-[1.1]">
              Creators Building Their Presence with RDI.
            </h1>
            <p className="max-w-3xl mx-auto text-black/70 text-base md:text-lg leading-relaxed font-medium">
              A look at the kinds of creators RDI works with, coaches, podcasters, entertainers, lifestyle personalities, and more, building consistency and growth through TikTok Live.
            </p>
          </div>
        </section>

        {/* --- COMING SOON GRID --- */}
        <section>
          <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-20 shadow-sm">
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 text-black text-center border-b border-black/10 pb-6">
              Coming Soon
            </h3>
            <p className="max-w-2xl mx-auto text-zinc-600 text-base md:text-lg leading-relaxed mb-12 font-medium text-center">
              Profiles of RDI creators will be featured here as they build their presence on TikTok Live. Check back soon, or apply to be one of the first creators featured.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center">
                  <span className="text-zinc-400 text-xs font-bold uppercase tracking-[0.2em]">Coming Soon</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA --- */}
        <section>
          <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-20 shadow-sm text-center">
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-black">
              Want to Be Featured?
            </h3>
            <p className="max-w-2xl text-base md:text-lg mb-10 font-medium leading-relaxed text-zinc-600 mx-auto">
              If you're consistent, coachable, and ready to grow on TikTok Live, apply to start your journey with RDI.
            </p>
            <Link href="/apply" className="inline-block bg-[#8B0000] text-white py-6 px-16 rounded-2xl font-bold tracking-widest text-[11px] uppercase hover:bg-[#a00000] transition-all shadow-md">
              Apply to Stream
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
