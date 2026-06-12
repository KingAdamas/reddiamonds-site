'use client';

import React from 'react';
import Link from 'next/link';

export default function Overview() {
  return (
    // SITE-WIDE RED BACKGROUND
    <div className="min-h-screen bg-[#8B0000] text-black font-sans selection:bg-white selection:text-[#8B0000]">

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-0">

        {/* --- 1. HERO SECTION --- */}
        <section>
          <div className="bg-white border border-zinc-200 border-b-0 rounded-t-[2.5rem] p-8 md:p-20 text-center relative overflow-hidden">

            <p className="text-[#8B0000] text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] mb-8 italic leading-loose">
              CREATOR RECRUITMENT & <span className="text-black underline decoration-black/20 underline-offset-8">DEVELOPMENT</span>
            </p>

            <h1 className="text-4xl md:text-7xl font-black italic tracking-tighter text-black mb-6 md:mb-8 leading-[1.1]">
              Become a TikTok Live Creator with RDI.
            </h1>

            <p className="max-w-3xl mx-auto text-black/80 text-sm md:text-lg leading-relaxed mb-10 font-medium italic opacity-90 px-2 md:px-0">
              Build your presence. Grow your audience. Learn how to show up consistently on TikTok Live with support from a creator-focused agency.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
              <Link href="/apply" className="w-full md:w-auto bg-[#8B0000] text-white text-[11px] uppercase tracking-[0.3em] font-black py-5 px-12 rounded-full transition-all hover:bg-[#a00000] shadow-xl text-center">
                APPLY TO STREAM
              </Link>
              <Link href="/process" className="w-full md:w-auto bg-black text-white text-[11px] uppercase tracking-[0.3em] font-black py-5 px-12 rounded-full transition-all hover:bg-zinc-800 shadow-xl text-center">
                HOW IT WORKS
              </Link>
            </div>
          </div>
        </section>

        {/* --- 2. WHO RDI IS RECRUITING --- */}
        <section>
          <div className="bg-white border-x border-zinc-200 p-8 md:p-20 border-t border-t-black/5">
            <h3 className="text-3xl md:text-5xl font-black italic tracking-tighter mb-8 text-black text-center border-b border-black/10 pb-4">
              Who RDI Is Recruiting
            </h3>
            <p className="max-w-3xl mx-auto text-zinc-700 text-sm md:text-lg leading-relaxed mb-10 font-medium italic text-center">
              RDI is recruiting creators who want to take TikTok Live seriously and build visibility, consistency, and community through live streaming. This includes professionals with personality, emerging creators, community builders, and entertainers and lifestyle personalities.
            </p>
            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto text-zinc-800 text-sm md:text-base font-medium italic">
              {[
                'Coaches, speakers, podcasters, and educators',
                'Comedians, musicians, and entertainers',
                'Beauty and fitness personalities',
                'Faith and community leaders',
                'Lifestyle creators and entrepreneurs',
                'People with personality who connect with others',
              ].map((item) => (
                <li key={item} className="border-b border-black/5 pb-4 flex gap-3">
                  <span className="text-[#8B0000] font-black">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- 3. IS THIS YOU? --- */}
        <section>
          <div className="bg-white border-x border-zinc-200 p-8 md:p-20 border-t border-t-black/5">
            <h3 className="text-3xl md:text-5xl font-black italic tracking-tighter mb-8 text-black text-center border-b border-black/10 pb-4">
              Is This You?
            </h3>
            <ul className="max-w-2xl mx-auto space-y-4 text-zinc-800 text-sm md:text-base font-medium italic">
              {[
                'You show up consistently, online or in person',
                'You\u2019re coachable and open to learning',
                'You\u2019re comfortable engaging with people in real time',
                'You\u2019re interested in growing through live content',
                'You\u2019re ready to turn TikTok Live into a real growth channel',
              ].map((item) => (
                <li key={item} className="border-b border-black/5 pb-4 last:border-0 flex gap-3">
                  <span className="text-[#8B0000] font-black">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- 4. WHAT RDI DOES --- */}
        <section>
          <div className="bg-white border-x border-zinc-200 p-8 md:p-20 border-t border-t-black/5">
            <h3 className="text-3xl md:text-5xl font-black italic tracking-tighter mb-12 text-black text-center border-b border-black/10 pb-4">
              What RDI Does
            </h3>
            <ul className="space-y-12 max-w-4xl mx-auto text-center">
              {[
                { title: 'Get Started', desc: 'RDI helps new creators get set up and ready to go live on TikTok with confidence.' },
                { title: 'Stay Consistent', desc: 'Structure and support to help creators build a real streaming routine, not a one-time attempt.' },
                { title: 'Improve Engagement', desc: 'Guidance on content, presence, and audience interaction to strengthen every live session.' },
                { title: 'Build Toward Monetization', desc: 'RDI helps creators build toward monetization opportunities through TikTok Live, with structure and a clear path forward.' },
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
              { stat: '1', label: 'Platform Focus' },
              { stat: '1', label: 'Standard' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-4xl md:text-5xl font-black italic text-black tracking-tighter">{item.stat}</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-black/50 font-bold mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- 5. WHY JOIN RDI --- */}
        <section>
          <div className="bg-white border border-zinc-200 border-t-0 rounded-b-[2.5rem] p-8 md:p-20 shadow-2xl text-center">
            <h3 className="text-3xl md:text-6xl font-black italic uppercase tracking-tighter mb-6 leading-tight text-black">
              Why Join <br className="hidden md:block"/>RDI?
            </h3>
            <p className="max-w-2xl text-base md:text-xl mb-10 font-medium italic leading-relaxed text-[#8B0000] mx-auto">
              RDI offers structure, guidance, creator development, visibility, and community. If you&apos;re consistent, coachable, and ready to take TikTok Live seriously, this is your next step.
            </p>
            <Link href="/apply" className="inline-block bg-black text-white py-6 px-16 rounded-2xl font-black tracking-widest text-[11px] hover:bg-zinc-800 transition-all shadow-xl">
              Apply to Stream
            </Link>
          </div>
        </section>

        {/* ---STANDALONE SEPARATOR--- */}
        <div className="h-12 md:h-20"></div>

        {/* --- 6. RED DIAMOND COLLECTION (SECONDARY) --- */}
        <section>
          <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-20 shadow-2xl text-center">

            <div className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-[#8B0000] mb-8">
              COMMUNITY & BRAND IDENTITY
            </div>

            <h2 className="text-3xl md:text-5xl font-black tracking-tighter italic leading-[1.1] text-black mb-10">
              The Red Diamond Collection
            </h2>

            <p className="max-w-3xl mx-auto text-sm md:text-lg leading-relaxed text-zinc-700 font-medium italic mb-12">
              A supporting space for RDI creators to build community, strengthen their brand identity, and expand visibility alongside their work on TikTok Live.
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
