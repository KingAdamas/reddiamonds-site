'use client';

import React from 'react';
import Link from 'next/link';

export default function Overview() {
  return (
    <div className="min-h-screen bg-[#8B0000] text-white font-sans selection:bg-white selection:text-[#8B0000]">
      <main className="max-w-7xl mx-auto px-6 py-32">
        
        {/* --- HERO SECTION: DEEP BLACK HERO CARD --- */}
        <section className="mb-24">
          <div className="bg-black/95 border border-white/10 rounded-[2.5rem] p-12 md:p-24 text-center shadow-2xl relative overflow-hidden">
            <p className="text-white/40 text-[11px] md:text-[12px] uppercase tracking-[0.5em] mb-10 font-black italic">
              WHERE CREATORS ARE <span className="text-white">REFINED</span>, NOT RECRUITED.
            </p>
            
            <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white mb-8 leading-none">
              WHERE CREATOR POTENTIAL <br />
              MEETS <span className="text-[#8B0000]">REAL OPPORTUNITY</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-white text-sm md:text-xl leading-relaxed mb-16 font-medium italic opacity-80">
              Red Diamonds International identifies emerging creators, refines digital talent, and prepares select individuals for stronger monetization, brand readiness, and real content opportunities.
            </p>

            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] mb-14 text-white/30 font-bold border-t border-white/5 pt-10">
              BUILDING A TRUSTED PIPELINE OF DIGITAL TALENT ACROSS THE US, CANADA, UK, NIGERIA, AND SOUTH AFRICA.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <Link href="/process" className="w-full md:w-auto bg-[#8B0000] text-white text-[11px] uppercase tracking-[0.25em] font-black py-7 px-14 rounded-full transition-all hover:bg-white hover:text-[#8B0000] shadow-xl">
                THE PROCESS
              </Link>
              <Link href="/apply" className="w-full md:w-auto bg-white text-black text-[11px] uppercase tracking-[0.25em] font-black py-7 px-14 rounded-full transition-all hover:bg-zinc-200 shadow-xl">
                APPLY FOR CONSIDERATION
              </Link>
            </div>
          </div>
        </section>

        {/* --- DUAL ACTION CARDS --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
          
          {/* WHAT WE OFFER: THE BLACK CARD */}
          <div className="bg-black/95 border border-white/10 p-14 rounded-[2.5rem] shadow-2xl">
            <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-10 text-white">WHAT WE OFFER</h3>
            <ul className="space-y-8">
              {[
                { title: 'Global Monetization', desc: 'Direct paths to revenue on platforms like TikTok, Bigo, and YouTube.' },
                { title: 'Brand Readiness', desc: 'Polishing your image and content strategy for high-level partnerships.' },
                { title: 'Elite Community', desc: 'Join a network of refined talent focused on professional growth.' }
              ].map((item) => (
                <li key={item.title} className="border-l-2 border-[#8B0000] pl-6">
                  <h4 className="text-white font-black uppercase tracking-widest text-[11px] mb-2">{item.title}</h4>
                  <p className="text-white/60 text-sm font-medium leading-relaxed italic">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* READY TO SCALE: THE WHITE CONTRAST CARD */}
          <div className="bg-white text-[#8B0000] p-14 rounded-[2.5rem] shadow-2xl flex flex-col justify-center text-center md:text-left">
            <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-8 leading-none">READY TO <br/>SCALE?</h3>
            <p className="text-sm md:text-lg mb-12 font-bold italic leading-relaxed text-black">
              We don't take everyone. We only take the best. If you are ready to move from "Creator" to "Digital Asset," start your application today.
            </p>
            <Link href="/apply" className="bg-black text-white text-center py-6 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-[#8B0000] transition-all shadow-2xl">
              START ENROLLMENT
            </Link>
          </div>

        </section>
      </main>
    </div>
  );
}