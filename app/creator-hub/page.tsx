'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CreatorHub() {
  const [showGate, setShowGate] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [targetId, setTargetId] = useState('');
  const [error, setError] = useState(false);

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
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      setError(true);
      setAccessCode('');
    }
  };

  return (
    <div className="min-h-screen bg-[#8B0000] text-white font-sans selection:bg-white selection:text-[#8B0000] relative">
      
      {/* --- ACCESS GATE OVERLAY (Z-index 200 to cover Navbar) --- */}
      {showGate && (
        <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="max-w-md w-full bg-[#700000] border border-white/20 p-10 rounded-3xl shadow-2xl text-center">
            <p className="text-white/60 text-[11px] uppercase tracking-[0.4em] mb-4 font-black">Identity Verification</p>
            <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-6 text-white">Access Required</h2>
            
            <form onSubmit={verifyAccess} className="space-y-4">
              <input 
                type="password" 
                placeholder="ENTER ACCESS CODE" 
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                className={`w-full bg-black/40 border ${error ? 'border-white' : 'border-white/10'} text-white text-center py-4 rounded-xl focus:outline-none focus:border-white transition-all uppercase tracking-widest text-[11px] font-medium`}
                autoFocus
              />
              {error && <p className="text-white text-[10px] uppercase font-black tracking-widest mt-2 animate-bounce">Access Denied</p>}
              <button type="submit" className="w-full bg-white text-[#8B0000] py-4 rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-zinc-200 transition-all mt-4 shadow-xl">Unlock Hub</button>
            </form>

            <div className="mt-8 flex flex-col gap-4">
              <Link href="/contact" className="text-white text-[11px] uppercase tracking-[0.2em] font-bold hover:underline transition-colors">
                Active Talent: Contact Manager
              </Link>
              <button onClick={() => setShowGate(false)} className="text-white/40 text-[11px] uppercase tracking-[0.2em] hover:text-white transition-colors">
                Return to Gateway
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-6 py-32">
        
        {/* --- THE RED COMMAND HERO --- */}
        <section className="mb-24">
          <div className="bg-black/10 border border-white/10 rounded-3xl p-10 md:p-20 text-center shadow-2xl relative overflow-hidden">
            <p className="text-white/90 text-[11px] md:text-[13px] uppercase tracking-[0.45em] mb-8 font-black max-w-4xl mx-auto leading-relaxed">
              BUILDING A TRUSTED PIPELINE OF <span className="text-white border-b border-white/30">DIGITAL CONTENT CREATORS</span>
            </p>
            
            <h1 className="text-4xl md:text-8xl font-black italic uppercase tracking-tighter text-white mb-6 leading-none">
              THE RDI <span className="text-black/40">CREATOR HUBS</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-white text-sm md:text-lg leading-relaxed mb-14 font-medium italic">
              The exclusive command center for RDI Creators. Access granted to the latest trends, resources, and updates.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
              <button onClick={() => handleGateEntry('tiktok-hub')} className="w-full md:w-auto bg-black text-white text-[11px] uppercase tracking-[0.25em] font-black py-6 px-12 rounded-full transition-all hover:bg-white hover:text-black">RDI TIKTOK CREATORS HUB</button>
              <button onClick={() => handleGateEntry('enrollment')} className="w-full md:w-auto bg-[#8B0000] border-2 border-white text-white text-[11px] uppercase tracking-[0.25em] font-black py-6 px-12 rounded-full transition-all hover:bg-white hover:text-[#8B0000]">RDI BIGO LIVE CREATORS HUB</button>
              <button onClick={() => handleGateEntry('youtube-hub')} className="w-full md:w-auto bg-white text-[#8B0000] text-[11px] uppercase tracking-[0.25em] font-black py-6 px-12 rounded-full transition-all hover:bg-zinc-200">RDI YOUTUBE CREATORS HUB</button>
            </div>
          </div>
        </section>

        {/* --- JOIN SYSTEM (CENTERED ON MOBILE) --- */}
        <section id="tiktok-hub" className="mb-24 pt-10">
          <h3 className="text-4xl font-black italic uppercase tracking-tighter border-b-2 border-white/10 pb-6 mb-12 text-center md:text-left">JOIN SYSTEM</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="bg-black/20 border border-white/10 p-8 rounded-3xl shadow-xl flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-white text-xl font-black mb-6 flex items-center tracking-tight">
                <span className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse shadow-[0_0_12px_rgba(255,255,255,0.8)]"></span>
                TikTok Live (US Region)
              </h4>
              <Link href="https://www.tiktok.com/t/ZTkjDy9aa/" target="_blank" className="block w-full bg-black text-white text-center py-5 rounded-xl font-black uppercase tracking-widest text-[11px] mb-8 hover:bg-zinc-900 transition-all border border-white/5">GET YOUR TIKTOK INVITATION CODE</Link>
              <div className="space-y-4 text-white text-sm leading-relaxed">
                <p className="font-medium"><strong className="text-white uppercase tracking-tighter font-black">Manual guide:</strong> Settings and privacy &gt; Creator tools &gt; LIVE Center &gt; Creator Network Center.</p>
                <div className="mt-8 rounded-2xl overflow-hidden border-2 border-white/10 mx-auto md:mx-0"><img src="/images/language_english.png" alt="TikTok Guide" className="w-full opacity-90" /></div>
                <p className="mt-6 text-[11px] uppercase tracking-widest text-white/60 font-black">Reference: TikTok Creator Network Enrollment Flow</p>
              </div>
            </div>

            <div id="enrollment" className="bg-black/20 border border-white/10 p-8 rounded-3xl shadow-xl flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-white text-xl font-black mb-6 flex items-center tracking-tight">
                <span className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse shadow-[0_0_12px_rgba(255,255,255,0.8)]"></span>
                Bigo Live (Regional)
              </h4>
              <div className="space-y-4 mb-14 w-full">
                <Link href="/contact" className="block w-full bg-white text-[#8B0000] text-center py-5 rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-zinc-200 transition-all">JOIN BIGO AGENCY (US/CANADA)</Link>
                <Link href="/contact" className="block w-full bg-black text-white text-center py-5 rounded-xl font-black uppercase tracking-widest text-[11px] border border-white/10 hover:bg-zinc-900 transition-all">JOIN BIGO AGENCY (UK/IRELAND)</Link>
              </div>
              <div className="mt-12 pt-10 border-t-2 border-white/5 w-full">
                <h4 className="text-white text-lg font-black mb-8 flex items-center justify-center md:justify-start tracking-widest uppercase italic">Downloads</h4>
                <div className="space-y-4 w-full">
                  <Link href="https://www.bigo.tv/" target="_blank" className="block w-full bg-white text-[#8B0000] text-center py-5 rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-zinc-200 transition-all">DOWNLOAD BIGO LIVE</Link>
                  <Link href="https://www.tiktok.com/" target="_blank" className="block w-full bg-black text-white text-center py-5 rounded-xl font-black uppercase tracking-widest text-[11px] border border-white/10 hover:bg-zinc-900 transition-all">DOWNLOAD TIKTOK</Link>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- GROWTH MATRIX --- */}
        <section className="mb-24 pt-10">
          <h3 className="text-4xl font-black italic uppercase tracking-tighter border-b-2 border-white/10 pb-6 mb-12 text-center md:text-left">GROWTH MATRIX</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Training', 'Payouts & Targets', 'Weekly Tips', 'Support Form', 'Policy & Expectations', 'Platform Resources'].map((title) => (
              <div key={title} className="p-10 bg-black/10 border border-white/10 rounded-3xl hover:border-white transition-all group text-center md:text-left">
                <h4 className="text-white font-black mb-3 uppercase tracking-widest text-[11px] group-hover:text-black group-hover:bg-white inline-block px-2 py-1 rounded transition-all">{title}</h4>
                <p className="text-white/80 text-xs leading-relaxed font-medium">Internal training module for RDI talent.</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- STANDARDS --- */}
        <section id="youtube-hub" className="mb-24 pt-10">
          <h3 className="text-4xl font-black italic uppercase tracking-tighter border-b-2 border-white/10 pb-6 mb-12 text-white text-center md:text-left">STANDARDS</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Consistency', 'Professionalism', 'Coachability', 'Communication', 'Accountability'].map((standard) => (
              <div key={standard} className="py-8 border border-white/10 rounded-2xl text-center bg-black/10 hover:bg-white hover:text-[#8B0000] transition-all">
                <span className="text-[11px] uppercase tracking-[0.3em] font-black">{standard}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}