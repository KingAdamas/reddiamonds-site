'use client';

import React from 'react';
import Link from 'next/link';

export default function Overview() {
  return (
    <div className="min-h-screen bg-[#8B0000] text-black font-sans selection:bg-white selection:text-[#8B0000]">
      
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-0">
        
        {/* --- 1. HERO SECTION (TOP OF STACK) --- */}
        <section>
          <div className="bg-white border border-zinc-200 border-b-0 rounded-t-[2.5rem] p-8 md:p-20 text-center relative overflow-hidden">
            <p className="text-[#8B0000] text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] mb-8 italic">
              WHERE CREATORS ARE <span className="text-black underline decoration-black/20 underline-offset-8">REFINED</span>, NOT RECRUITED.
            </p>
            
            <h1 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter text-black mb-6 md:mb-8 leading-[1.1]">
              BUILDING A TRUSTED <br className="hidden md:block" />
              PIPELINE OF DIGITAL CONTENT CREATORS
            </h1>
            
            <p className="max-w-3xl mx-auto text-black/80 text-sm md:text-lg leading-relaxed mb-10 font-medium italic opacity-90 px-2 md:px-0">
              Red Diamonds International (RDI) identifies emerging creators from various social media platforms and venues, refines digital talent, and prepares select individuals for stronger monetization, brand readiness, and real content opportunities.
            </p>

            <div className="w-32 h-[1px] bg-black/10 mx-auto mb-10"></div>

            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] mb-12 text-black/70 font-bold max-w-2xl mx-auto leading-loose">
              ACROSS THE US, CANADA, UK, NIGERIA, AND SOUTH AFRICA.
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

        {/* --- 2. WHAT WE OFFER (MIDDLE OF STACK) --- */}
        <section>
          <div className="bg-white border-x border-zinc-200 p-8 md:p-20">
            <h3 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter mb-12 text-[#8B0000] text-center md:text-left border-b border-black/5 pb-4">
              WHAT WE OFFER
            </h3>
            <ul className="space-y-12">
              {[
                { title: 'Global Monetization', desc: 'Direct paths to revenue on platforms like TikTok, Bigo, and YouTube.' },
                { title: 'Brand Readiness', desc: 'Polishing your image and content strategy for high-level partnerships.' },
                { title: 'Elite Community', desc: 'Join a network of refined talent focused on professional growth.' }
              ].map((item) => (
                <li key={item.title} className="text-center md:text-left border-b border-black/5 pb-8 last:border-0">
                  <h4 className="text-black font-black uppercase tracking-[0.2em] text-[10px] mb-3">{item.title}</h4>
                  <p className="text-zinc-700 text-sm md:text-base font-medium italic leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- 3. READY TO SCALE (BOTTOM OF STACK) --- */}
        <section>
          <div className="bg-white border border-zinc-200 border-t-0 rounded-b-[2.5rem] p-8 md:p-20 shadow-2xl text-center md:text-left">
            <h3 className="text-3xl md:text-6xl font-black italic uppercase tracking-tighter mb-6 leading-tight text-black">
              READY TO <br className="hidden md:block"/>SCALE?
            </h3>
            <p className="max-w-2xl text-base md:text-xl mb-10 font-bold italic leading-relaxed text-[#8B0000]">
              We don't take everyone. We only take the best. If you are ready to move from "Creator" to "Digital Asset," start your application today.
            </p>
            <Link href="/apply" className="inline-block bg-black text-white py-6 px-16 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-[#8B0000] transition-all shadow-xl">
              START ENROLLMENT
            </Link>
          </div>
        </section>

        {/* STANDALONE COLLECTION SECTION (BELOW THE STACK) */}
        <div className="h-12 md:h-20"></div> 
        <section>
           <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-20 shadow-2xl text-center">
             <div className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-[#8B0000] mb-8">
               THE COMMUNITY & VISIBILITY HUB
             </div>
             <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic leading-[1.1] text-black mb-10">
               WHERE CREATORS BUILD AUDIENCE, INCOME, AND <span className="text-[#8B0000]">VISIBILITY.</span>
             </h2>
             <p className="max-w-4xl mx-auto text-sm md:text-xl leading-relaxed text-zinc-700 font-medium italic mb-12">
               Red Diamond Collection is the community and creator visibility hub of the RDI ecosystem.
             </p>
             <a href="https://rdi-collection-shop.fourthwall.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-14 py-6 text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-zinc-800 transition-all shadow-xl">
               EXPLORE THE COLLECTION
             </a>
           </div>
        </section>

      </main>
    </div>
  );
}
