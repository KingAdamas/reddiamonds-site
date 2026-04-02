'use client';

import React from 'react';
import Link from 'next/link';

export default function Overview() {
  return (
    <div className="min-h-screen bg-[#8B0000] text-black font-sans selection:bg-white selection:text-[#8B0000]">
      
      {/* Main Container with Standardized Mobile Spacing */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-6 md:space-y-12">
        
        {/* --- 1. HERO SECTION (WHITE CARD) --- */}
        <section>
          <div className="bg-white border border-zinc-200 rounded-[2rem] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
            
            {/* CRIMSON SUBHEADER */}
            <p className="text-[#8B0000] text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] mb-8 italic leading-loose">
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

        {/* --- 2. WHAT WE OFFER (WHITE CARD) --- */}
        <section>
          <div className="bg-white border border-zinc-200 p-8 md:p-12 rounded-[2rem] shadow-xl">
            {/* CRIMSON SECTION TITLE */}
            <h3 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter mb-8 border-b border-black/10 pb-4 text-center md:text-left text-[#8B0000]">WHAT WE OFFER</h3>
            <ul className="space-y-8">
              {[
                { title: 'Global Monetization', desc: 'Direct paths to revenue on platforms like TikTok, Bigo, and YouTube.' },
                { title: 'Brand Readiness', desc: 'Polishing your image and content strategy for high-level partnerships.' },
                { title: 'Elite Community', desc: 'Join a network of refined talent focused on professional growth.' }
              ].map((item) => (
                <li key={item.title} className="text-center md:text-left">
                  <h4 className="text-black font-black uppercase tracking-[0.2em] text-[10px] mb-2">{item.title}</h4>
                  <p className="text-zinc-700 text-sm md:text-base font-medium italic leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- 3. READY TO SCALE (WHITE CARD) --- */}
        <section>
          <div className="bg-white border border-zinc-200 p-8 md:p-12 rounded-[2rem] shadow-xl flex flex-col justify-center text-center lg:text-left">
            <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-6 leading-tight text-black">READY TO <br className="hidden md:block"/>SCALE?</h3>
            <p className="text-base md:text-lg mb-8 font-bold italic leading-relaxed text-[#8B0000]">
              We don't take everyone. We only take the best. If you are ready to move from "Creator" to "Digital Asset," start your application today.
            </p>
            <Link href="/apply" className="bg-black text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-zinc-800 transition-all shadow-2xl">
              START ENROLLMENT
            </Link>
          </div>
        </section>

        {/* --- 4. RED DIAMOND COLLECTION (FULL-WIDTH & CRIMSON LABEL) --- */}
        <section>
          <div className="bg-white border border-zinc-200 rounded-[2rem] p-8 md:p-20 shadow-2xl overflow-hidden text-center">
            
            {/* CRIMSON SUBHEADER */}
            <div className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-[#8B0000] mb-8">
              THE COMMUNITY & VISIBILITY HUB
            </div>

            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic leading-[1.1] text-black mb-10">
              WHERE CREATORS BUILD <br className="hidden md:block" />
              AUDIENCE, INCOME, <br className="hidden md:block" />
              AND <span className="text-[#8B0000]">VISIBILITY.</span>
            </h2>

            <p className="max-w-4xl mx-auto text-sm md:text-xl leading-relaxed text-zinc-700 font-medium italic mb-12">
              Red Diamond Collection is the community and creator visibility hub of 
              the RDI ecosystem. It gives creators a place to strengthen content, 
              build supporter income, and increase visibility with both audiences and 
              future partners.
            </p>

            <div className="flex justify-center">
              <a
                href="https://rdi-collection-shop.fourthwall.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto text-center rounded-full bg-black px-14 py-6 text-[11px] font-black uppercase tracking-widest text-white transition-all hover:bg-zinc-800 shadow-xl"
              >
                EXPLORE THE COLLECTION
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}