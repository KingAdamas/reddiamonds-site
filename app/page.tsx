'use client';

import React from 'react';
import Link from 'next/link';

export default function Overview() {
  return (
    <div className="min-h-screen bg-[#8B0000] text-white font-sans selection:bg-white selection:text-[#8B0000]">
      <main className="max-w-7xl mx-auto px-6 py-32">
        
        {/* --- HERO SECTION --- */}
        <section className="mb-24">
          <div className="bg-black/10 border border-white/10 rounded-3xl p-10 md:p-20 text-center shadow-2xl relative overflow-hidden">
            <p className="text-white/60 text-[11px] md:text-[12px] uppercase tracking-[0.5em] mb-8 font-black italic">
              WHERE CREATORS ARE <span className="text-white">REFINED</span>, NOT RECRUITED.
            </p>
            
            <h1 className="text-4xl md:text-8xl font-black italic uppercase tracking-tighter text-white mb-6 leading-none">
              WHERE CREATOR POTENTIAL <br />
              MEETS <span className="text-black/40">REAL OPPORTUNITY</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-white text-sm md:text-lg leading-relaxed mb-14 font-medium italic opacity-90">
              Red Diamonds International identifies emerging creators, refines digital talent, and prepares select individuals for stronger monetization, brand readiness, and real content opportunities.
            </p>

            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] mb-12 text-white/50 font-bold">
              BUILDING A TRUSTED PIPELINE OF DIGITAL TALENT ACROSS THE US, CANADA, UK, NIGERIA, AND SOUTH AFRICA.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
              <Link href="/process" className="w-full md:w-auto bg-black text-white text-[11px] uppercase tracking-[0.25em] font-black py-6 px-12 rounded-full transition-all hover:bg-white hover:text-black">
                THE PROCESS
              </Link>
              <Link href="/apply" className="w-full md:w-auto bg-white text-[#8B0000] text-[11px] uppercase tracking-[0.25em] font-black py-6 px-12 rounded-full transition-all hover:bg-zinc-200">
                APPLY FOR CONSIDERATION
              </Link>
            </div>
          </div>
        </section>

        {/* --- WHAT WE OFFER --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10">
          <div className="bg-black/20 border border-white/10 p-12 rounded-3xl shadow-xl">
            <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-6">WHAT WE OFFER</h3>
            <ul className="space-y-6">
              {[
                { title: 'Global Monetization', desc: 'Direct paths to revenue on platforms like TikTok, Bigo, and YouTube.' },
                { title: 'Brand Readiness', desc: 'Polishing your image and content strategy for high-level partnerships.' },
                { title: 'Elite Community', desc: 'Join a network of refined talent focused on professional growth.' }
              ].map((item) => (
                <li key={item.title}>
                  <h4 className="text-white font-black uppercase tracking-widest text-[11px] mb-1">{item.title}</h4>
                  <p className="text-white/70 text-sm font-medium italic">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white text-[#8B0000] p-12 rounded-3xl shadow-xl flex flex-col justify-center">
            <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-6 text-black">READY TO SCALE?</h3>
            <p className="text-sm md:text-base mb-8 font-bold italic leading-relaxed text-[#8B0000]">
              We don't take everyone. We only take the best. If you are ready to move from "Creator" to "Digital Asset," start your application today.
            </p>
            <Link href="/apply" className="bg-black text-white text-center py-5 rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-[#8B0000] transition-all">
              START ENROLLMENT
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}