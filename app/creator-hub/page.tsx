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
    <div className="min-h-screen bg-[#8B0000] text-black font-sans selection:bg-white selection:text-[#8B0000] relative">
      
      {/* --- ACCESS GATE OVERLAY --- */}
      {showGate && (
        <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="max-w-md w-full bg-white border border-zinc-200 p-10 rounded-3xl shadow-2xl text-center">
            <p className="text-[#8B0000] text-[11px] uppercase tracking-[0.4em] mb-4 font-black italic">Identity Verification</p>
            <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-6 text-black">Access Required</h2>
            
            <form onSubmit={verifyAccess} className="space-y-4">
              <input 
                type="password" 
                placeholder="ENTER ACCESS CODE" 
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                className={`w-full bg-zinc-50 border ${error ? 'border-[#8B0000]' : 'border-zinc-200'} text-black text-center py-4 rounded-xl focus:outline-none focus:border-black transition-all uppercase tracking-widest text-[11px] font-bold italic`}
                autoFocus
              />
              {error && <p className="text-[#8B0000] text-[10px] uppercase font-black tracking-widest mt-2 animate-bounce">Access Denied</p>}
              <button type="submit" className="w-full bg-black text-white py-4 rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-[#8B0000] transition-all mt-4 shadow-xl">Unlock Hub</button>
            </form>

            <div className="mt-8 flex flex-col gap-4">
              <Link href="/contact" className="text-[#8B0000] text-[11px] uppercase tracking-[0.2em] font-black hover:underline transition-colors italic">
                Active Talent: Contact Manager
              </Link>
              <button onClick={() => setShowGate(false)} className="text-zinc-400 text-[11px] uppercase tracking-[0.2em] hover:text-black transition-colors font-bold">
                Return to Gateway
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-6 py-32">
        
        {/* --- THE COMMAND HERO --- */}
        <section className="mb-24">
          <div className="bg-white border border-zinc-200 rounded-3xl p-10 md:p-20 text-center shadow-2xl relative overflow-hidden">
            <p className="text-[#8B0000] text-[11px] md:text-[13px] uppercase tracking-[0.45em] mb-8 font-black max-w-4xl mx-auto leading-relaxed italic">
              BUILDING A TRUSTED PIPELINE OF <span className="text-black border-b border-black/10">DIGITAL CONTENT CREATORS</span>
            </p>
            
            <h1 className="text-4xl md:text-8xl font-black italic uppercase tracking-tighter text-black mb-6 leading-none">
              THE RDI <span className="text-[#8B0000]">CREATOR HUBS</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-zinc-600 text-sm md:text-lg leading-relaxed mb-14 font-medium italic">
              The exclusive command center for RDI Creators. Access granted to the latest trends, resources, and updates.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
              <button onClick={() => handleGateEntry('tiktok-hub')} className="w-full md:w-auto bg-black text-white text-[11px] uppercase tracking-[0.25em] font-black py-6 px-12 rounded-full transition-all hover:bg-zinc-800">RDI TIKTOK CREATORS HUB</button>
              <button onClick={() => handleGateEntry('enrollment')} className="w-full md:w-auto bg-[#8B0000] text-white text-[11px] uppercase tracking-[0.25em] font-black py-6 px-12 rounded-full transition-all hover:bg-[#a00000]">RDI BIGO LIVE CREATORS HUB</button>
              <button onClick={() => handleGateEntry('youtube-hub')} className="w-full md:w-auto bg-zinc-100 text-black text-[11px] uppercase tracking-[0.25em] font-black py-6 px-12 rounded-full transition-all hover:bg-zinc-200">RDI YOUTUBE CREATORS HUB</button>
            </div>
          </div>
        </section>

        {/* --- JOIN SYSTEM --- */}
        <section id="tiktok-hub" className="mb-24 pt-10">
          <h3 className="text-4xl font-black italic uppercase tracking-tighter border-b-2 border-white/10 pb-6 mb-12 text-center md:text-left text-white">JOIN SYSTEM</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="bg-white border border-zinc-200 p-8 rounded-3xl shadow-xl flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-black text-xl font-black mb-6 flex items-center tracking-tight uppercase italic">
                <span className="w-3 h-3 bg-[#8B0000] rounded-full mr-3 animate-pulse shadow-[0_0_12px_rgba(139,0,0,0.4)]"></span>
                TikTok Live (US Region)
              </h4>
              <Link href="https://www.tiktok.com/t/ZTkjDy9aa/" target="_blank" className="block w-full bg-black text-white text-center py-5 rounded-xl font-black uppercase tracking-widest text-[11px] mb-8 hover:bg-zinc-900 transition-all">GET YOUR TIKTOK INVITATION CODE</Link>
              <div className="space-y-4 text-zinc-600 text-sm leading-relaxed italic font-medium">
                <p><strong className="text-black uppercase tracking-tighter font-black not-italic">Manual guide:</strong> Settings and privacy &gt; Creator tools &gt; LIVE Center &gt; Creator Network Center.</p>
                <div className="mt-8 rounded-2xl overflow-hidden border border-zinc-200 mx-auto md:mx-0"><img src="/images/language_english.png" alt="TikTok Guide" className="w-full grayscale hover:grayscale-0 transition-all duration-700" /></div>
                <p className="mt-6 text-[11px] uppercase tracking-widest text-[#8B0000] font-black">Reference: TikTok Creator Network Enrollment Flow</p>
              </div>
            </div>

            <div id="enrollment" className="bg-white border border-zinc-200 p-8 rounded-3xl shadow-xl flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-black text-xl font-black mb-6 flex items-center tracking-tight uppercase italic">
                <span className="w-3 h-3 bg-[#8B0000] rounded-full mr-3 animate-pulse shadow-[0_0_12px_rgba(139,0,0,0.4)]"></span>
                Bigo Live (Regional)
              </h4>
              <div className="space-y-4 mb-14 w-full">
                <Link href="/contact" className="block w-full bg-[#8B0000] text-white text-center py-5 rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-[#a00000] transition-all">JOIN BIGO AGENCY (US/CANADA)</Link>
                <Link href="/contact" className="block w-full bg-black text-white text-center py-5 rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-zinc-900 transition-all">JOIN BIGO AGENCY (UK/IRELAND)</Link>
              </div>
              <div className="mt-12 pt-10 border-t border-zinc-100 w-full text-center md:text-left">
                <h4 className="text-[#8B0000] text-sm font-black mb-8 tracking-widest uppercase italic">Infrastructure Downloads</h4>
                <div className="space-y-4 w-full">
                  <Link href="https://www.bigo.tv/" target="_blank" className="block w-full border border-zinc-200 text-black text-center py-5 rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-zinc-50 transition-all">DOWNLOAD BIGO LIVE</Link>
                  <Link href="https://www.tiktok.com/" target="_blank" className="block w-full border border-zinc-200 text-black text-center py-5 rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-zinc-50 transition-all">DOWNLOAD TIKTOK</Link>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- GROWTH MATRIX --- */}
        <section className="mb-24 pt-10">
          <h3 className="text-4xl font-black italic uppercase tracking-tighter border-b-2 border-white/10 pb-6 mb-12 text-center md:text-left text-white">GROWTH MATRIX</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Training', 'Payouts & Targets', 'Weekly Tips', 'Support Form', 'Policy & Expectations', 'Platform Resources'].map((title) => (
              <div key={title} className="p-10 bg-white border border-zinc-200 rounded-3xl hover:border-black transition-all group text-center md:text-left shadow-lg">
                <h4 className="text-[#8B0000] font-black mb-3 uppercase tracking-widest text-[11px] group-hover:text-white group-hover:bg-black inline-block px-2 py-1 rounded transition-all italic">{title}</h4>
                <p className="text-zinc-600 text-xs leading-relaxed font-bold italic">Internal training module reserved for active RDI talent.</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- STANDARDS --- */}
        <section id="youtube-hub" className="mb-24 pt-10">
          <h3 className="text-4xl font-black italic uppercase tracking-tighter border-b-2 border-white/10 pb-6 mb-12 text-white text-center md:text-left">STANDARDS</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Consistency', 'Professionalism', 'Coachability', 'Communication', 'Accountability'].map((standard) => (
              <div key={standard} className="py-8 border border-white/20 rounded-2xl text-center bg-black/10 hover:bg-white hover:text-[#8B0000] transition-all text-white shadow-xl">
                <span className="text-[11px] uppercase tracking-[0.3em] font-black italic">{standard}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
