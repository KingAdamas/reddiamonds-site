'use client';

import React from 'react';
import Link from 'next/link';

export default function CreatorHub() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-500/30">
      <main className="max-w-7xl mx-auto px-6 py-20">
        
        {/* --- GATEWAY HERO CARD --- */}
        <section className="mb-24">
          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-10 md:p-20 text-center shadow-2xl relative overflow-hidden transition-all duration-500 hover:border-zinc-800">
            {/* THE EXCLUSIVITY EYEBROW */}
            <p className="text-red-600 text-[10px] md:text-[11px] uppercase tracking-[0.45em] mb-8 font-black">
              RESTRICTED ACCESS: ACTIVE CREATORS ONLY
            </p>

            {/* THE PLURAL AUTHORITY HEADLINE */}
            <h1 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter text-white mb-6 leading-none">
              THE RDI <span className="text-zinc-500 font-medium">CREATOR HUBS</span>
            </h1>

            {/* THE PRIVILEGED & SUPPORTED DESCRIPTION */}
            <p className="max-w-2xl mx-auto text-zinc-400 text-sm md:text-lg leading-relaxed mb-14 font-light">
              The <span className="text-white font-medium italic">exclusive command center</span> for RDI Creators. 
              <span className="text-zinc-200"> Access granted</span> to the latest trends, resources, updates, and trainings.
            </p>

            {/* THE HUB ENTRY ACTIONS */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
              {/* TIKTOK - RED */}
              <a 
                href="#tiktok-hub" 
                className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white text-[11px] uppercase tracking-[0.25em] font-black py-6 px-12 rounded-full transition-all duration-300 shadow-xl shadow-red-900/30 hover:scale-105 active:scale-95 text-center"
              >
                RDI TIKTOK CREATORS HUB
              </a>
              
              {/* BIGO - BLACK */}
              <a 
                href="#enrollment" 
                className="w-full md:w-auto bg-black hover:bg-zinc-900 text-white text-[11px] uppercase tracking-[0.25em] font-black py-6 px-12 rounded-full border border-zinc-800 transition-all duration-300 hover:scale-105 active:scale-95 text-center"
              >
                RDI BIGO LIVE CREATORS HUB
              </a>

              {/* YOUTUBE - WHITE */}
              <a 
                href="#youtube-hub" 
                className="w-full md:w-auto bg-white hover:bg-zinc-200 text-black text-[11px] uppercase tracking-[0.25em] font-black py-6 px-12 rounded-full transition-all duration-300 shadow-lg shadow-white/10 hover:scale-105 active:scale-95 text-center"
              >
                RDI YOUTUBE CREATORS HUB
              </a>
            </div>
          </div>
        </section>

        {/* --- AGENCY ENROLLMENT SECTION (TIKTOK) --- */}
        <section id="tiktok-hub" className="mb-24 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-zinc-900 pb-6">
            <div>
              <h2 className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] mb-2">Agency Enrollment</h2>
              <h3 className="text-4xl font-black italic uppercase tracking-tighter">Join System</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* TIKTOK INSTRUCTIONS */}
            <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-2xl">
              <h4 className="text-white text-lg font-bold mb-6 flex items-center">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3 animate-pulse"></span>
                TikTok Live (US Region)
              </h4>
              <Link 
                href="https://www.tiktok.com/t/ZTkjDy9aa/" 
                target="_blank"
                className="inline-block w-full bg-red-600 text-white text-center py-4 rounded-lg font-bold uppercase tracking-widest text-xs mb-8 hover:bg-red-700 transition-colors"
              >
                Get Your TikTok Invitation Code
              </Link>
              <div className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                <p><strong className="text-zinc-200">Manual guide:</strong> Settings and privacy &gt; Creator tools &gt; LIVE Center &gt; Creator Network Center.</p>
                <div className="mt-8 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
                  <img 
                    src="/images/language_english.png" 
                    alt="TikTok Creator Network Center guide" 
                    className="w-full h-auto"
                  />
                  <div className="p-4 text-center text-zinc-500 text-xs italic">
                    Reference: TikTok Creator Network Enrollment Flow
                  </div>
                </div>
                <ol className="list-decimal list-inside space-y-3 mt-6">
                  <li>Open the Creator Network Center.</li>
                  <li>Locate your invitation code on screen.</li>
                  <li>Copy the invitation code and share it with the Creator Network Manager.</li>
                </ol>
              </div>
            </div>

            {/* BIGO INSTRUCTIONS */}
            <div id="enrollment" className="bg-zinc-950 border border-zinc-900 p-8 rounded-2xl">
              <h4 className="text-white text-lg font-bold mb-6 flex items-center">
                <span className="w-2 h-2 bg-zinc-500 rounded-full mr-3"></span>
                Bigo Live (Regional)
              </h4>
              <div className="space-y-4">
                <Link 
                  href="/contact" 
                  className="inline-block w-full bg-red-600 text-white text-center py-4 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-colors"
                >
                  Join Bigo Agency (US/Canada)
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-block w-full bg-zinc-800 text-white text-center py-4 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-zinc-700 transition-colors"
                >
                  Join Bigo Agency (UK/Ireland)
                </Link>
              </div>
              <p className="mt-8 text-zinc-500 text-sm italic">
                If you are unsure which region applies, use the contact form and select the closest match.
              </p>
              
              <div className="mt-12 pt-8 border-t border-zinc-900">
                <h5 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-4">Downloads</h5>
                <div className="flex gap-4">
                  <Link href="https://www.bigo.tv/" target="_blank" className="text-xs text-zinc-400 hover:text-white transition-colors underline decoration-zinc-800 underline-offset-4">Download Bigo Live</Link>
                  <span className="text-zinc-800">•</span>
                  <Link href="https://www.tiktok.com/" target="_blank" className="text-xs text-zinc-400 hover:text-white transition-colors underline decoration-zinc-800 underline-offset-4">Download TikTok</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- RESOURCES GRID --- */}
        <section id="resources" className="mb-24 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-zinc-900 pb-6">
            <div>
              <h2 className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] mb-2">Resources</h2>
              <h3 className="text-4xl font-black italic uppercase tracking-tighter">Growth Matrix</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Training', desc: 'Structured development modules and live workflows.' },
              { title: 'Payouts & Targets', desc: 'Clear targets, payout timing, and performance expectations.' },
              { title: 'Weekly Tips', desc: 'Weekly execution notes to keep performance consistent.' },
              { title: 'Support Form', desc: 'Submit issues, requests, and operational questions.' },
              { title: 'Policy & Expectations', desc: 'Behavior, content, and platform compliance standards.' },
              { title: 'Platform Resources', desc: 'Platform tools, links, and reference material.' }
            ].map((item) => (
              <div key={item.title} className="p-8 bg-zinc-950 border border-zinc-900 rounded-2xl hover:border-red-900/50 transition-all group">
                <h4 className="text-white font-bold mb-3 uppercase tracking-widest text-xs group-hover:text-red-500 transition-colors">{item.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- STANDARDS SECTION --- */}
        <section id="youtube-hub" className="mb-24 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-zinc-900 pb-6">
            <div>
              <h2 className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] mb-2">Expectations</h2>
              <h3 className="text-4xl font-black italic uppercase tracking-tighter text-white">Standards</h3>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Consistency', 'Professionalism', 'Coachability', 'Communication', 'Accountability'].map((standard) => (
              <div key={standard} className="py-6 border border-zinc-900 rounded-xl text-center">
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">{standard}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}