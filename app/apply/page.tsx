"use client";

import { useState } from "react";
import Link from "next/link";

export default function Apply() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("SUBMITTED");
    // Form logic is ready for integration with your agency email: reddiamondfamilyus@gmail.com
  };

  return (
    <main className="min-h-screen pt-[64px] bg-[#000000] text-white">
      {/* 64px clearances + 16px (pt-4) gap to match Overview and Process pages */}
      <div className="mx-auto max-w-3xl px-6 pt-4 pb-20">
        
        {/* PAGE HEADER */}
        <div className="border-b border-[#241d20] pb-10 text-center">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#ecc970]">
            The Gateway
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Entry is Earned.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-gray-400">
            The RDI pipeline is a structured environment for those ready to scale. 
            We do not recruit&mdash;we validate. Use this form to initiate the identification phase.
          </p>
        </div>

        {status === "SUBMITTED" ? (
          <div className="mt-20 text-center py-16 rounded-3xl border border-[#241d20] bg-[#0a0a0a]">
            <h2 className="text-xl font-bold text-[#ecc970] uppercase tracking-widest">Application Received</h2>
            <p className="mt-4 text-sm text-gray-400 italic">Your data has been entered into the validation pipeline.</p>
            <Link href="/" className="mt-8 inline-block text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white">Return to Overview</Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-8">
            
            {/* SECTION 1: IDENTITY */}
            <div className="space-y-4">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d13027]">01. Identity & Context</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <input required type="text" placeholder="FULL NAME" className="w-full bg-[#0a0a0a] border border-[#241d20] rounded-xl px-4 py-4 text-xs focus:border-[#ecc970] outline-none transition-colors" />
                <input required type="text" placeholder="ALIAS / STAGE NAME" className="w-full bg-[#0a0a0a] border border-[#241d20] rounded-xl px-4 py-4 text-xs focus:border-[#ecc970] outline-none transition-colors" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <select required className="w-full bg-[#0a0a0a] border border-[#241d20] rounded-xl px-4 py-4 text-xs focus:border-[#ecc970] outline-none text-gray-400">
                  <option value="">PRIMARY PLATFORM</option>
                  <option value="tiktok">TIKTOK</option>
                  <option value="bigo">BIGO LIVE</option>
                  <option value="other">OTHER</option>
                </select>
                <input required type="text" placeholder="PLATFORM HANDLE (@...)" className="w-full bg-[#0a0a0a] border border-[#241d20] rounded-xl px-4 py-4 text-xs focus:border-[#ecc970] outline-none transition-colors" />
              </div>
            </div>

            {/* SECTION 2: PERFORMANCE */}
            <div className="space-y-4 pt-4">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d13027]">02. Performance Metrics</h2>
              <input required type="text" placeholder="CURRENT AVG VIEWERSHIP / MONTHLY REACH" className="w-full bg-[#0a0a0a] border border-[#241d20] rounded-xl px-4 py-4 text-xs focus:border-[#ecc970] outline-none transition-colors" />
              <textarea required placeholder="DESCRIBE YOUR CURRENT MOMENTUM" rows={3} className="w-full bg-[#0a0a0a] border border-[#241d20] rounded-xl px-4 py-4 text-xs focus:border-[#ecc970] outline-none transition-colors resize-none"></textarea>
            </div>

            {/* SECTION 3: COMMITMENT */}
            <div className="space-y-4 pt-4">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d13027]">03. Operational Alignment</h2>
              <textarea required placeholder="WHY RDI? (EXPLAIN YOUR READINESS FOR STRUCTURE)" rows={3} className="w-full bg-[#0a0a0a] border border-[#241d20] rounded-xl px-4 py-4 text-xs focus:border-[#ecc970] outline-none transition-colors resize-none"></textarea>
              
              <div className="flex items-start gap-3 p-4 rounded-xl border border-[#d13027]/20 bg-[#d13027]/5">
                <input required type="checkbox" id="financial" className="mt-1 accent-[#d13027]" />
                <label htmlFor="financial" className="text-[10px] leading-relaxed text-gray-400 uppercase tracking-wider">
                  I am ready to set and track weekly and monthly financial goals to ensure long-term sustainability.
                </label>
              </div>
            </div>

            <button type="submit" className="w-full rounded-full bg-[#d13027] py-5 text-[10px] font-bold uppercase tracking-[0.4em] text-white transition-all hover:bg-[#b02821] hover:shadow-[0_0_30px_rgba(209,48,39,0.3)]">
              Begin Consideration
            </button>
          </form>
        )}

      </div>
    </main>
  );
}
