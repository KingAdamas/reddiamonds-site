"use client";

import { useState } from "react";
import Link from "next/link";

export default function Apply() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("SUBMITTED");
    // Form logic is ready for integration with: reddiamondfamilyus@gmail.com
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#d13027]">
      <div className="mx-auto max-w-5xl px-6 pt-4 md:pt-12 pb-40 md:pt-48">
        
        {/* THE APPLY HERO CARD */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#1a1a1a] bg-[#0a0a0a] p-8 md:p-20 shadow-2xl">
          
          {status === "SUBMITTED" ? (
            <div className="py-16 text-center">
              <h2 className="text-3xl font-bold text-[#ecc970] uppercase tracking-widest italic">Application Received</h2>
              <p className="mx-auto mt-6 max-w-md text-lg text-gray-400 italic">
                Your data has been entered into the validation pipeline. A selection officer will review your profile.
              </p>
              <Link href="/" className="mt-12 inline-block text-xs font-bold uppercase tracking-[0.4em] text-white/40 hover:text-[#d13027] transition-colors">
                Return to Overview
              </Link>
            </div>
          ) : (
            <>
              <div className="border-b border-[#1a1a1a] pb-10 text-center">
                <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#ecc970]">
                  The Gateway
                </p>
                <h1 className="mt-6 text-4xl font-extrabold uppercase tracking-tighter md:text-7xl italic leading-tight">
                  Entry is <span className="text-[#d13027]">Earned.</span>
                </h1>
                <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">
                  The RDI pipeline is a structured environment for those ready to scale. 
                  We do not recruit—we validate. Use this form to initiate the identification phase.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-16 space-y-12 text-left">
                
                {/* SECTION 01: IDENTITY */}
                <div className="space-y-6">
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d13027]">01. Identity & Context</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <input required type="text" placeholder="LEGAL NAME" className="w-full bg-black border border-[#1a1a1a] rounded-xl px-5 py-4 text-xs focus:border-[#ecc970] outline-none transition-colors" />
                    <input required type="text" placeholder="ALIAS / STAGE NAME" className="w-full bg-black border border-[#1a1a1a] rounded-xl px-5 py-4 text-xs focus:border-[#ecc970] outline-none transition-colors" />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <select required className="w-full bg-black border border-[#1a1a1a] rounded-xl px-5 py-4 text-xs focus:border-[#ecc970] outline-none text-gray-500">
                      <option value="">PRIMARY PLATFORM</option>
                      <option value="tiktok">TIKTOK</option>
                      <option value="bigo">BIGO LIVE</option>
                      <option value="other">OTHER</option>
                    </select>
                    <input required type="text" placeholder="PLATFORM HANDLE (@...)" className="w-full bg-black border border-[#1a1a1a] rounded-xl px-5 py-4 text-xs focus:border-[#ecc970] outline-none transition-colors" />
                  </div>
                </div>

                {/* SECTION 02: PERFORMANCE */}
                <div className="space-y-6">
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d13027]">02. Performance Metrics</h2>
                  <input required type="text" placeholder="CURRENT AVG VIEWERSHIP / MONTHLY REACH" className="w-full bg-black border border-[#1a1a1a] rounded-xl px-5 py-4 text-xs focus:border-[#ecc970] outline-none transition-colors" />
                  <textarea required placeholder="DESCRIBE YOUR CURRENT LIVE STREAM EXPERIENCE." rows={3} className="w-full bg-black border border-[#1a1a1a] rounded-xl px-5 py-4 text-xs focus:border-[#ecc970] outline-none transition-colors resize-none"></textarea>
                </div>

                {/* SECTION 03: ALIGNMENT */}
                <div className="space-y-6">
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d13027]">03. Operational Alignment</h2>
                  <textarea required placeholder="WHY RDI? (EXPLAIN YOUR READINESS FOR STRUCTURE)" rows={3} className="w-full bg-black border border-[#1a1a1a] rounded-xl px-5 py-4 text-xs focus:border-[#ecc970] outline-none transition-colors resize-none"></textarea>
                  
                  <div className="flex items-start gap-4 p-6 rounded-2xl border border-[#d13027]/20 bg-[#d13027]/5">
                    <input required type="checkbox" id="financial" className="mt-1 h-4 w-4 accent-[#d13027]" />
                    <label htmlFor="financial" className="text-[10px] leading-relaxed text-gray-400 uppercase tracking-widest">
                      I am ready to set and track weekly and monthly financial goals to ensure long-term sustainability.
                    </label>
                  </div>
                </div>

                <button type="submit" className="w-full rounded-full bg-[#d13027] py-6 text-sm font-bold uppercase tracking-[0.4em] text-white transition-all hover:bg-[#b02821] hover:shadow-[0_0_30px_rgba(209,48,39,0.3)]">
                  Begin Consideration
                </button>
              </form>
            </>
          )}
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 italic">
            Submission does not guarantee representation. All candidates undergo a multi-step observation period.
          </p>
          <Link href="/process" className="inline-block mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[#ecc970] hover:text-white transition-colors">
            Review the process again
          </Link>
        </div>

      </div>
    </main>
  );
}
