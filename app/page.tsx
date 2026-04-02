'use client';

import React from 'react';
import Link from 'next/link';

export default function Overview() {
  return (
    <div className="min-h-screen bg-[#8B0000] text-white font-sans selection:bg-white selection:text-[#8B0000]">
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        
        {/* --- HERO SECTION --- */}
        <section className="mb-12 md:mb-20">
          <div className="bg-black/10 border border-white/10 rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
            
            <p className="text-white/60 text-[10px] md:text-[11px] uppercase tracking-[0.4em] mb-8 font-black italic leading-loose">
              WHERE CREATORS ARE <span className="text-white underline decoration-white/20 underline-offset-8">REFINED</span>, NOT RECRUITED.
            </p>
            
            <h1 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter text-white mb-6 md:mb-8 leading-[1.1] md:leading-none">
              BUILDING A TRUSTED <br className="hidden md:block" />
              PIPELINE OF <span className="text-black/30">DIGITAL CONTENT CREATORS</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-white text-sm md:text-lg leading-relaxed mb-10 md:mb-12 font-medium italic opacity-90 px-2 md:px-0">
              Red Diamonds International (RDI) identifies emerging creators from various social media platforms and venues, refines digital talent, and prepares select individuals for stronger monetization, brand readiness, and real content opportunities.
            </p>

            {/* --- THE DIVIDER (2) --- */}
            <div className="w-24 h-px bg-white/20 mx-auto mb-10 md:mb-12"></div>

            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] mb-12 text-white/50 font-bold max-w-2xl mx-auto leading-loose">
              ACROSS THE US, CANADA, UK, NIGERIA, AND SOUTH AFRICA.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
              <Link href="/process" className="w-full md:w-auto bg-black text-white text-[11px] uppercase tracking-[0.3em] font-black py-5 px-12 rounded-full transition-all hover:bg-white hover:text-black shadow-xl border border-white/10">
                THE PROCESS
              </Link>
              <Link href="/apply" className="w-full md:w-auto bg-white text-[#8B0000] text-[11px] uppercase tracking-[0.3em] font-black py-5 px-12 rounded-full transition-all hover:bg-zinc-200 shadow-xl">
                APPLY FOR CONSIDERATION
              </Link>
            </div>
          </div>
        </section>

        {/* --- GRID: WHAT WE OFFER & READY TO SCALE --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mb-10 md:mb-16">
          
          <div className="bg-black/15 border border-white/5 p-8 md:p-12 rounded-3xl shadow-xl">
            <h3 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter mb-8 border-b border-white/10 pb-4 text-center md:text-left">WHAT WE OFFER</h3>
            <ul className="space-y-8">
              {[
                { title: 'Global Monetization', desc: 'Direct paths to revenue on platforms like TikTok, Bigo, and YouTube.' },
                { title: 'Brand Readiness', desc: 'Polishing your image and content strategy for high-level partnerships.' },
                { title: 'Elite Community', desc: 'Join a network of refined talent focused on professional growth.' }
              ].map((item) => (
                <li key={item.title} className="text-center md:text-left">
                  <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-2">{item.title}</h4>
                  <p className="text-white/70 text-sm md:text-base font-medium italic leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white text-[#8B0000] p-8 md:p-12 rounded-3xl shadow-xl flex flex-col justify-center text-center lg:text-left">
            <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-6 leading-tight text-black">READY TO <br className="hidden md:block"/>SCALE?</h3>
            <p className="text-base md:text-lg mb-8 font-bold italic leading-relaxed text-[#8B0000]">
              We don't take everyone. We only take the best. If you are ready to move from "Creator" to "Digital Asset," start your application today.
            </p>
            <Link href="/apply" className="bg-black text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-[#8B0000] transition-all shadow-2xl">
              START ENROLLMENT
            </Link>
          </div>
        </section>

        {/* --- RED DIAMOND COLLECTION (FOURTHWALL INTEGRATION) --- */}
        <section className="bg-black/15 border border-white/5 rounded-3xl p-8 md:p-16 shadow-2xl overflow-hidden">
          <div className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-white/50 mb-8 text-center md:text-left">
            THE COMMUNITY & VISIBILITY HUB
          </div>

          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter italic leading-[1.1] text-white text-center md:text-left">
            WHERE CREATORS BUILD <br />
            AUDIENCE, INCOME, <br />
            AND <span className="text-black/40">VISIBILITY.</span>
          </h2>

          <p className="mt-8 md:mt-10 max-w-2xl text-sm md:text-lg leading-relaxed text-white/80 font-medium italic mx-auto md:mx-0 text-center md:text-left">
            Red Diamond Collection is the community and creator visibility hub of 
            the RDI ecosystem. It gives creators a place to strengthen content, 
            build supporter income, and increase visibility with both audiences and 
            future partners.
          </p>

          <div className="mt-12 flex justify-center md:justify-start">
            <a
              href="https://rdi-collection-shop.fourthwall.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto text-center rounded-full bg-white px-10 py-5 text-[11px] font-black uppercase tracking-widest text-[#8B0000] transition-all hover:bg-zinc-200 shadow-xl"
            >
              EXPLORE THE COLLECTION
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}