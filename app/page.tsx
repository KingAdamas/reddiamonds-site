'use client';

import React from 'react';
import Link from 'next/link';

export default function Overview() {
  return (
    // SITE-WIDE RED BACKGROUND
    <div className="min-h-screen bg-[#8B0000] text-black font-sans selection:bg-white selection:text-[#8B0000]">
      
      {/* MAIN CONTENT: FUSED PILLAR APPROACH
        space-y-0 is the key: it removes the red background gaps between the sections.
      */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-0">
        
        {/* --- 1. HERO SECTION (TOP OF FUSED PILLAR) --- */}
        <section>
          {/* FUSION: Keep top corners rounded, flat bottom to connect seamlessly */}
          <div className="bg-white border border-zinc-200 border-b-0 rounded-t-[2.5rem] p-8 md:p-20 text-center relative overflow-hidden">
            
            {/* CRIMSON SUBHEADER */}
            <p className="text-[#8B0000] text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] mb-8 italic leading-loose">
              WHERE CREATORS ARE <span className="text-black underline decoration-black/20 underline-offset-8">REFINED</span>, NOT RECRUITED.
            </p>
            
            <h1 className="text-4xl md:text-7xl font-black italic tracking-tighter text-black mb-6 md:mb-8 leading-[1.1]">
              The Pipeline Is Built for Those Who Are Ready to Be More Than a Creator.
            </h1>
            
            <p className="max-w-3xl mx-auto text-black/80 text-sm md:text-lg leading-relaxed mb-10 font-medium italic opacity-90 px-2 md:px-0">
              Red Diamonds International identifies emerging talent across TikTok, Bigo Live, YouTube, and live performance venues — and builds them into market-ready digital assets. We operate across the US, Canada, UK, Nigeria, and South Africa. Entry is selective. Development is structured. Opportunity is earned.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
              <Link href="/process" className="w-full md:w-auto bg-black text-white text-[11px] uppercase tracking-[0.3em] font-black py-5 px-12 rounded-full transition-all hover:bg-zinc-800 shadow-xl text-center">
                THE PROCESS
              </Link>
              <Link href="/apply" className="w-full md:w-auto bg-[#8B0000] text-white text-[11px] uppercase tracking-[0.3em] font-black py-5 px-12 rounded-full transition-all hover:bg-[#a00000] shadow-xl text-center">
                APPLY FOR CONSIDERATION
              </Link>
            </div>
          </div>
        </section>

        {/* --- 2. WHAT WE OFFER (MIDDLE OF FUSED PILLAR) --- */}
        <section>
          {/* FUSION: Flat top and bottom; essentially a white tube */}
          <div className="bg-white border-x border-zinc-200 p-8 md:p-20">
            {/* Standardized Header: Black, Italic, 5XL (closer to 7XL), Centered */}
            <h3 className="text-3xl md:text-5xl font-black italic tracking-tighter mb-12 text-black text-center border-b border-black/10 pb-4">
              What Entry Into the Pipeline Gets You
            </h3>
            <ul className="space-y-12 max-w-4xl mx-auto text-center">
              {[
                { title: 'Global Monetization', desc: 'Direct revenue pathways on TikTok, Bigo Live, and YouTube — not promises, structured access.' },
                { title: 'Brand Readiness', desc: 'Content strategy, image alignment, and partnership preparation for creators serious about longevity.' },
                { title: 'Operational Network', desc: 'A selective community of refined talent operating with shared standards, not just shared followers.' }
              ].map((item) => (
                <li key={item.title} className="border-b border-black/5 pb-8 last:border-0">
                  <h4 className="text-black font-black uppercase tracking-[0.2em] text-[10px] mb-3">{item.title}</h4>
                  <p className="text-zinc-700 text-sm md:text-base font-medium italic leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- CREDIBILITY ROW --- */}
        <div className="bg-white border-x border-zinc-200 px-8 md:px-20 py-10 border-t border-t-black/5">
          <div className="flex justify-center gap-16 max-w-2xl mx-auto text-center">
            {[
              { stat: '5', label: 'Countries' },
              { stat: '3', label: 'Platforms' },
              { stat: '1', label: 'Standard' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-4xl md:text-5xl font-black italic text-black tracking-tighter">{item.stat}</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-black/50 font-bold mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- 3. READY TO SCALE (BOTTOM OF FUSED PILLAR) --- */}
        <section>
          {/* FUSION: Flat top, rounded bottom corners to finalize the pillar structure */}
          <div className="bg-white border border-zinc-200 border-t-0 rounded-b-[2.5rem] p-8 md:p-20 shadow-2xl text-center">
            {/* Standardized Header: Black, Italic, 6XL (for impactful closing), Centered */}
            <h3 className="text-3xl md:text-6xl font-black italic uppercase tracking-tighter mb-6 leading-tight text-black">
              READY TO <br className="hidden md:block"/>SCALE?
            </h3>
            {/* Corrected weight/style: Crimson, Medium, Italic for better reading */}
            <p className="max-w-2xl text-base md:text-xl mb-10 font-medium italic leading-relaxed text-[#8B0000] mx-auto">
              RDI does not take everyone. If you have the consistency, the coachability, and the commitment to show up as a professional — this pipeline was built for you. If you are still looking for shortcuts, it was not.
            </p>
            <Link href="/apply" className="inline-block bg-black text-white py-6 px-16 rounded-2xl font-black tracking-widest text-[11px] hover:bg-zinc-800 transition-all shadow-xl">
              Apply for Consideration
            </Link>
          </div>
        </section>

        {/* ---STANDALONE SEPARATOR--- */}
        <div className="h-12 md:h-20"></div> 

        {/* --- 4. RED DIAMOND COLLECTION (STANDALONE CARD) --- */}
        <section>
          <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-20 shadow-2xl text-center">
            
            {/* Crimson Label */}
            <div className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-[#8B0000] mb-8">
              THE COMMUNITY & VISIBILITY HUB
            </div>

            {/* Fused Header Style: Spans the card, Black Italic 7XL */}
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter italic leading-[1.1] text-black mb-10">
              The Ecosystem Extends Beyond the Pipeline.
            </h2>

            <p className="max-w-4xl mx-auto text-sm md:text-xl leading-relaxed text-zinc-700 font-medium italic mb-12">
              Red Diamond Collection is where RDI creators build supporter income, strengthen their content, and expand visibility beyond the pipeline. It is the public-facing expression of what refinement produces.
            </p>

            <a
              href="https://rdi-collection-shop.fourthwall.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-14 py-6 text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-zinc-800 transition-all shadow-xl"
            >
              EXPLORE THE COLLECTION
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}

