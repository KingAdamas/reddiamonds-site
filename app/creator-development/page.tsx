'use client';

import React from 'react';
import Link from 'next/link';

export default function CreatorDevelopment() {
  return (
    <div className="min-h-screen bg-[#F7F3EF] text-black font-sans selection:bg-[#8B0000] selection:text-white">
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-8 md:space-y-12">

        {/* --- HERO --- */}
        <section>
          <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-20 text-center shadow-sm">
            <p className="text-[#8B0000] text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-8 leading-loose">
              CREATOR DEVELOPMENT
            </p>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-black mb-6 md:mb-8 leading-[1.1]">
              Growth Doesn&apos;t Happen by Accident.
            </h1>
            <p className="max-w-3xl mx-auto text-black/70 text-base md:text-lg leading-relaxed font-medium">
              RDI works with creators on the things that actually move the needle on TikTok Live: showing up consistently, improving how you engage, and building a presence people want to come back to.
            </p>
          </div>
        </section>

        {/* --- AREAS OF SUPPORT --- */}
        <section>
          <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-20 shadow-sm">
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-12 text-black text-center border-b border-black/10 pb-6">
              Where RDI Helps
            </h3>
            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto">
              {[
                { title: 'Consistency', desc: 'Building a streaming schedule you can actually stick to, and the habits that make showing up feel normal instead of overwhelming.' },
                { title: 'Live Presence', desc: 'How you come across on camera. Pacing, energy, and comfort going live, especially in the early sessions when it feels unfamiliar.' },
                { title: 'Audience Engagement', desc: 'Turning viewers into a community. Responding, reading the room, and keeping people in the stream longer.' },
                { title: 'Content Strategy', desc: 'What to talk about, how to structure a session, and how your live content connects to what you post elsewhere.' },
                { title: 'Feedback & Coaching', desc: 'Honest, ongoing feedback on your streams so you can see what\u2019s working and adjust without guessing.' },
                { title: 'Growth Tracking', desc: 'Keeping an eye on the metrics that matter, follower growth, watch time, and engagement, so progress is visible over time.' },
              ].map((item) => (
                <li key={item.title} className="border-b border-black/5 pb-8">
                  <h4 className="text-black font-bold uppercase tracking-[0.15em] text-xs mb-3">{item.title}</h4>
                  <p className="text-zinc-600 text-base md:text-lg font-medium leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- WHO THIS IS FOR --- */}
        <section>
          <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-20 shadow-sm">
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 text-black text-center border-b border-black/10 pb-6">
              No Matter Where You&apos;re Starting
            </h3>
            <ul className="max-w-2xl mx-auto space-y-4 text-zinc-800 text-base md:text-lg font-medium">
              {[
                'New to TikTok Live and not sure where to begin',
                'Posting consistently but haven\u2019t gone live yet',
                'Already going live but want to grow faster',
                'Looking for structure instead of figuring it out alone',
              ].map((item) => (
                <li key={item} className="border-b border-black/5 pb-4 last:border-0 flex gap-3">
                  <span className="text-[#8B0000] font-bold">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- CTA --- */}
        <section>
          <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-20 shadow-sm text-center">
            <h3 className="text-3xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-black">
              Ready to Build <br className="hidden md:block"/>Your Presence?
            </h3>
            <p className="max-w-2xl text-base md:text-xl mb-10 font-medium leading-relaxed text-[#8B0000] mx-auto">
              Apply to stream with RDI and start building the consistency and presence that turns TikTok Live into real growth.
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
