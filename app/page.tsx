'use client';

import React from 'react';
import Link from 'next/link';

export default function Overview() {
  return (
    <div className="min-h-screen bg-[#F7F3EF] text-black font-sans selection:bg-[#8B0000] selection:text-white">

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-8 md:space-y-12">

        {/* --- 1. HERO SECTION --- */}
        <section>
          <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-20 text-center relative overflow-hidden shadow-sm">

            <p className="text-[#8B0000] text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-8 leading-loose">
              RED DIAMONDS INTERNATIONAL — CREATOR RECRUITMENT &amp; <span className="text-black">DEVELOPMENT</span>
            </p>

            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-black mb-6 md:mb-8 leading-[1.1]">
              Become a TikTok Live Creator with RDI.
            </h1>

            <p className="max-w-3xl mx-auto text-black/70 text-base md:text-lg leading-relaxed mb-10 font-medium px-2 md:px-0">
              Build your presence. Grow your audience. Learn how to show up consistently on TikTok Live with support from a creator-focused agency.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
              <Link href="/apply" className="w-full md:w-auto bg-[#8B0000] text-white text-[11px] uppercase tracking-[0.3em] font-bold py-5 px-12 rounded-full transition-all hover:bg-[#a00000] shadow-md text-center">
                APPLY TO STREAM
              </Link>
              <Link href="/process" className="w-full md:w-auto bg-black text-white text-[11px] uppercase tracking-[0.3em] font-bold py-5 px-12 rounded-full transition-all hover:bg-zinc-800 shadow-md text-center">
                HOW IT WORKS
              </Link>
            </div>
          </div>
        </section>

        {/* --- 2. WHO RDI IS RECRUITING --- */}
        <section>
          <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-20 shadow-sm">
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 text-black text-center border-b border-black/10 pb-6">
              Who RDI Is Recruiting
            </h3>
            <p className="max-w-3xl mx-auto text-zinc-600 text-base md:text-lg leading-relaxed mb-10 font-medium text-center">
              RDI is recruiting creators who want to take TikTok Live seriously and build visibility, consistency, and community through live streaming. This includes professionals with personality, emerging creators, community builders, and entertainers and lifestyle personalities.
            </p>
            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto text-zinc-800 text-base md:text-lg font-medium">
              {[
                'Coaches, speakers, podcasters, and educators',
                'Comedians, musicians, and entertainers',
                'Beauty and fitness personalities',
                'Faith and community leaders',
                'Lifestyle creators and entrepreneurs',
                'People with personality who connect with others',
              ].map((item) => (
                <li key={item} className="border-b border-black/5 pb-4 flex gap-3">
                  <span className="text-[#8B0000] font-bold">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- 3. IS THIS YOU? --- */}
        <section>
          <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-20 shadow-sm">
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 text-black text-center border-b border-black/10 pb-6">
              Is This You?
            </h3>
            <ul className="max-w-2xl mx-auto space-y-4 text-zinc-800 text-base md:text-lg font-medium">
              {[
                'You show up consistently, online or in person',
                'You\u2019re coachable and open to learning',
                'You\u2019re comfortable engaging with people in real time',
                'You\u2019re interested in growing through live content',
                'You\u2019re ready to turn TikTok Live into a real growth channel',
              ].map((item) => (
                <li key={item} className="border-b border-black/5 pb-4 last:border-0 flex gap-3">
                  <span className="text-[#8B0000] font-bold">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- 4. WHAT RDI DOES --- */}
        <section>
          <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-20 shadow-sm">
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-12 text-black text-center border-b border-black/10 pb-6">
              What RDI Does
            </h3>
            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto">
              {[
                { title: 'Get Started', desc: 'RDI helps new creators get set up and ready to go live on TikTok with confidence.' },
                { title: 'Stay Consistent', desc: 'Structure and support to help creators build a real streaming routine, not a one-time attempt.' },
                { title: 'Improve Engagement', desc: 'Guidance on content, presence, and audience interaction to strengthen every live session.' },
                { title: 'Build Toward Monetization', desc: 'RDI helps creators build toward monetization opportunities through TikTok Live, with structure and a clear path forward.' },
              ].map((item) => (
                <li key={item.title} className="border-b border-black/5 pb-8">
                  <h4 className="text-black font-bold uppercase tracking-[0.15em] text-xs mb-3">{item.title}</h4>
                  <p className="text-zinc-600 text-base md:text-lg font-medium leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- CREDIBILITY ROW --- */}
        <div className="bg-white border border-zinc-200 rounded-[2.5rem] px-8 md:px-20 py-10 shadow-sm">
          <div className="flex justify-center gap-16 max-w-2xl mx-auto text-center">
            {[
              { stat: '1', label: 'Platform Focus' },
              { stat: '1', label: 'Standard' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">{item.stat}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-black/50 font-bold mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- 5. WHY JOIN RDI --- */}
        <section>
          <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-20 shadow-sm text-center">
            <h3 className="text-3xl md:text-6xl font-extrabold uppercase tracking-tight mb-6 leading-tight text-black">
              Why Join <br className="hidden md:block"/>RDI?
            </h3>
            <p className="max-w-2xl text-base md:text-xl mb-10 font-medium leading-relaxed text-[#8B0000] mx-auto">
              RDI offers structure, guidance, creator development, visibility, and community. If you&apos;re consistent, coachable, and ready to take TikTok Live seriously, this is your next step.
            </p>
            <Link href="/apply" className="inline-block bg-black text-white py-6 px-16 rounded-2xl font-bold tracking-widest text-[11px] hover:bg-zinc-800 transition-all shadow-md">
              Apply to Stream
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
