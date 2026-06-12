'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Onboarding() {
  const [unlocked, setUnlocked] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);

  const ACCESS_CODE = "RDI2026";

  const verifyAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === ACCESS_CODE) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setCode('');
    }
  };

  if (!unlocked) {
    return (
      <div className="min-h-screen bg-[#F7F3EF] text-black font-sans flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white border border-zinc-200 p-10 rounded-3xl shadow-sm text-center">
          <p className="text-[#8B0000] text-xs uppercase tracking-[0.3em] mb-4 font-bold">Welcome to RDI</p>
          <h1 className="text-3xl font-extrabold tracking-tight mb-6 text-black">Creator Onboarding</h1>
          <p className="text-zinc-600 text-sm font-medium mb-8">
            This page is for creators who have been accepted into the RDI program. Enter your access code to continue.
          </p>

          <form onSubmit={verifyAccess} className="space-y-4">
            <input
              type="password"
              placeholder="ACCESS CODE"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className={`w-full bg-zinc-50 border ${error ? 'border-[#8B0000]' : 'border-zinc-200'} text-black text-center py-4 rounded-xl focus:outline-none focus:border-black transition-all uppercase tracking-widest text-xs font-bold`}
              autoFocus
            />
            {error && <p className="text-[#8B0000] text-xs uppercase font-bold tracking-widest mt-2">Incorrect code</p>}
            <button type="submit" className="w-full bg-[#8B0000] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#a00000] transition-all shadow-md">
              Unlock
            </button>
          </form>

          <Link href="/contact" className="mt-8 inline-block text-[#8B0000] text-xs uppercase tracking-[0.2em] font-bold hover:underline transition-colors">
            Need help? Contact RDI
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F3EF] text-black font-sans selection:bg-[#8B0000] selection:text-white">
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-8 md:space-y-12">

        {/* --- HERO --- */}
        <section>
          <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-20 text-center shadow-sm">
            <p className="text-[#8B0000] text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-8 leading-loose">
              YOU&apos;RE IN
            </p>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-black mb-6 md:mb-8 leading-[1.1]">
              Welcome to RDI.
            </h1>
            <p className="max-w-3xl mx-auto text-black/70 text-base md:text-lg leading-relaxed font-medium">
              You&apos;ve been accepted into the RDI creator program. Here&apos;s your first step to get connected on TikTok Live.
            </p>
          </div>
        </section>

        {/* --- STEP 1: JOIN AGENCY --- */}
        <section>
          <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-20 shadow-sm text-center">
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-black">
              Step 1: Connect with RDI on TikTok
            </h3>
            <p className="max-w-2xl mx-auto text-zinc-600 text-base md:text-lg leading-relaxed mb-10 font-medium">
              Use the link below to join RDI&apos;s TikTok agency network. This connects your account so we can support your growth and live streaming on the platform.
            </p>
            <a
              href="https://www.tiktok.com/t/ZMhayjkVC/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#8B0000] text-white px-14 py-6 text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#a00000] transition-all shadow-md"
            >
              Join RDI on TikTok
            </a>
          </div>
        </section>

        {/* --- WHAT'S NEXT --- */}
        <section>
          <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-20 shadow-sm">
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 text-black text-center border-b border-black/10 pb-6">
              What Happens Next
            </h3>
            <ul className="max-w-2xl mx-auto space-y-4 text-zinc-800 text-base md:text-lg font-medium">
              {[
                'A member of the RDI team will follow up to confirm your connection',
                'You\u2019ll get support setting your first streaming schedule',
                'We\u2019ll start working together on consistency and live presence',
              ].map((item, i) => (
                <li key={item} className="border-b border-black/5 pb-4 last:border-0 flex gap-3">
                  <span className="text-[#8B0000] font-bold">{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- CONTACT --- */}
        <section>
          <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-20 shadow-sm text-center">
            <p className="text-zinc-600 text-base md:text-lg font-medium mb-6">
              Questions about onboarding? Reach out anytime.
            </p>
            <Link href="/contact" className="inline-block bg-black text-white py-5 px-12 rounded-full font-bold tracking-widest text-[11px] uppercase hover:bg-zinc-800 transition-all shadow-md">
              Contact RDI
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
