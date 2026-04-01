'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CreatorHub() {
  const [showGate, setShowGate] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [targetId, setTargetId] = useState('');
  const [error, setError] = useState(false);

  // MASTER ACCESS CODE
  const MASTER_CODE = "RDI2026"; 

  const handleGateEntry = (id: string) => {
    setTargetId(id);
    setShowGate(true);
    setError(false);
  };

  const verifyAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode === MASTER_CODE) {
      setShowGate(false);
      setAccessCode('');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setError(true);
      setAccessCode('');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-500/30 relative">
      
      {/* --- THE ACCESS GATE OVERLAY --- */}
      {showGate && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="max-w-md w-full bg-zinc-950 border border-zinc-900 p-10 rounded-3xl shadow-2xl text-center">
            <p className="text-red-600 text-[10px] uppercase tracking-[0.4em] mb-4 font-black">Identity Verification</p>
            <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-6 text-white">Access Required</h2>
            
            <form onSubmit={verifyAccess} className="space-y-4">
              <input 
                type="password" 
                placeholder="ENTER ACCESS CODE" 
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                className={`w-full bg-black border ${error ? 'border-red-600' : 'border-zinc-800'} text-white text-center py-4 rounded-xl focus:outline-none focus:border-red-600 transition-all uppercase tracking-widest text-[10px]`}
                autoFocus
              />
              {error && <p className="text-red-600 text-[9px] uppercase font-black tracking-widest mt-2">Access Denied: Refined Talent Only</p>}
              <button type="submit" className="w-full bg-red-600 text-white py-4 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-red-700 transition-all mt-4">Unlock Hub</button>
            </form>

            <div className="mt-8 flex flex-col gap-4">
              <Link href="/contact" className="text-zinc-400 text-[9px] uppercase tracking-[0.2em] font-bold hover:text-white transition-colors">
                Active Talent: Contact Manager for Entry
              </Link>
              <button onClick={() => setShowGate(false)} className="text-zinc-700 text-[9px] uppercase tracking-[0.2em] hover:text-zinc-400 transition-colors">
                Return to Gateway
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-6 py-20">
        
        {/* --- GATEWAY HERO CARD --- */}
        <section className="mb-24">
          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-10 md:p-20 text-center shadow-2xl relative overflow-hidden transition-all duration-500 hover:border-zinc-800">
            <p className="text-red-600 text-[10px] md:text-[11px] uppercase tracking-[0.45em] mb-8 font-black">RESTRICTED ACCESS: ACTIVE CREATORS ONLY</p>
            <h1 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter text-white mb-6 leading-none">THE RDI <span className="text-zinc-500">CREATOR HUBS</span></h1>
            <p className="max-w-2xl mx-auto text-zinc-400 text-sm md:text-lg leading-relaxed mb-14 font-light italic">
              The exclusive command center for RDI Creators. Access granted to the latest trends, resources, updates, and trainings.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
              <button onClick={() => handleGateEntry('tiktok-hub')} className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white text-[10px] uppercase tracking-[0.25em] font-black py-6 px-12 rounded-full transition-all">RDI TIKTOK CREATORS HUB</button>
              <button onClick={() => handleGateEntry('enrollment')} className="w-full md:w-auto bg-black hover:bg-zinc-900 text-white text-[10px] uppercase tracking-[0.25em] font-black py-6 px-12 rounded-full border border-zinc-800 transition-all">RDI BIGO LIVE CREATORS HUB</button>
              <button onClick={() => handleGateEntry('youtube-hub')} className="w-full md:w-auto bg-white hover:bg-zinc-200 text-black text-[10px] uppercase tracking-[0.25em] font-black py-6 px-12 rounded-full transition-all">RDI YOUTUBE CREATORS HUB</button>
            </div>
          </div>
        </section>

        {/* --- JOIN SYSTEM SECTION --- */}
        <section id="tiktok-hub" className="mb-24 pt-10">
          <h3 className="text-4xl font-black italic uppercase tracking-tighter border-b border-zinc-900 pb-6 mb-12">JOIN SYSTEM</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* TIKTOK CARD */}
            <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-3xl shadow-xl">
              <h4 className="text-white text-lg font-bold mb-6 flex items-center">
                <span className="w-2.5 h-2.5 bg-red-600 rounded-full mr-3 animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
                TikTok Live (US Region)
              </h4>
              <Link href="https://www.tiktok.com/t/ZTkjDy9aa/" target="_blank" className="block w-full bg-red-600 text-white text-center py-5 rounded-xl font-black uppercase tracking-widest text-[10px] mb-8 hover:bg-red-700 transition-all">GET YOUR TIKTOK INVITATION CODE</Link>
              <div className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                <p><strong className="text-zinc-200 uppercase tracking-tighter">Manual guide:</strong> Settings and privacy &gt; Creator tools &gt; LIVE Center &gt; Creator Network Center.</p>
                <div className="mt-8 rounded-2xl overflow-hidden border border-zinc-800 shadow-inner"><img src="/images/language_english.png" alt="TikTok Guide" className="w-full" /></div>
                <p className="mt-6 text-[10px] uppercase tracking-widest text-center text-zinc-600">Reference: TikTok Creator Network Enrollment Flow</p>
                <ol className="list-decimal list-inside space-y-3 mt-6 text-zinc-400">
                  <li>Open the Creator Network Center.</li>
                  <li>Locate your invitation code.</li>
                  <li>Share it with the Manager.</li>
                </ol>
              </div>
            </div>

            {/* BIGO CARD */}
            <div id="enrollment" className="bg-zinc-950 border border-zinc-900 p-8 rounded-3xl shadow-xl">
              <h4 className="text-white text-lg font-bold mb-6 flex items-center">
                <span className="w-2.5 h-2.5 bg-red-600 rounded-full mr-3 animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
                Bigo Live (Regional)
              </h4>
              <div className="space-y-4 mb-14">
                <Link href="/contact" className="block w-full bg-red-600 text-white text-center py-5 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-red-700 transition-all shadow-lg shadow-red-900/20">JOIN BIGO AGENCY (US/CANADA)</Link>
                <Link href="/contact" className="block w-full bg-zinc-900 text-white text-center py-5 rounded-xl font-black uppercase tracking-widest text-[10px] border border-zinc-800 hover:bg-zinc-800 transition-all">JOIN BIGO AGENCY (UK/IRELAND)</Link>
              </div>
              
              <div className="mt-12 pt-10 border-t border-zinc-900">
                <h4 className="text-white text-lg font-bold mb-8 flex items-center">
                  <span className="w-2.5 h-2.5 bg-red-600 rounded-full mr-3 animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
                  Downloads
                </h4>
                <div className="space-y-4">
                  <Link href="https://www.bigo.tv/" target="_blank" className="block w-full bg-red-600 text-white text-center py-5 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-red-700 transition-all shadow-lg shadow-red-900/20">DOWNLOAD BIGO LIVE</Link>
                  <Link href="https://www.tiktok.com/" target="_blank" className="block w-full bg-zinc-900 text-white text-center py-5 rounded-xl font-black uppercase tracking-widest text-[10px] border border-zinc-800 hover:bg-zinc-800 transition-all">DOWNLOAD TIKTOK</Link>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- GROWTH MATRIX --- */}
        <section className="mb-24 pt-10">
          <h3 className="text-4xl font-black italic uppercase tracking-tighter border-b border-zinc-900 pb-6 mb-12">GROWTH MATRIX</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Training', 'Payouts & Targets', 'Weekly Tips', 'Support Form', 'Policy & Expectations', 'Platform Resources'].map((title) => (
              <div key={title} className="p-10 bg-zinc-950 border border-zinc-900 rounded-3xl hover:border-red-900/50 transition-all group">
                <h4 className="text-white font-black mb-3 uppercase tracking-widest text-[10px] group-hover:text-red-500 transition-colors">{title}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">Internal training module for RDI talent.</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- STANDARDS --- */}
        <section id="youtube-hub" className="mb-24 pt-10">
          <h3 className="text-4xl font-black italic uppercase tracking-tighter border-b border-zinc-900 pb-6 mb-12 text-white">STANDARDS</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Consistency', 'Professionalism', 'Coachability', 'Communication', 'Accountability'].map((standard) => (
              <div key={standard} className="py-8 border border-zinc-900 rounded-2xl text-center bg-zinc-950/50 hover:bg-zinc-950 transition-all">
                <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-500 font-black">{standard}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}