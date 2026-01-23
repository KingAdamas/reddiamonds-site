"use client";

import { useState } from "react";
import Link from "next/link";

export default function BBRPortal() {
  const [currentBeans, setCurrentBeans] = useState<number | "">("");

  const tiers = [
    { lvl: "27", goal: 2000000, reward: 15000 },
    { lvl: "20", goal: 650000, reward: 4770 },
    { lvl: "15", goal: 300000, reward: 2200 },
    { lvl: "10", goal: 80000, reward: 600 },
    { lvl: "05", goal: 12500, reward: 72 },
    { lvl: "01", goal: 1500, reward: 5 },
  ];

  const calculatePayout = () => {
    if (typeof currentBeans !== "number" || currentBeans <= 0) return { usd: 0, reward: 0, total: 0 };
    const usdValue = Math.floor(currentBeans / 210); // Standard Bigo conversion rate
    const reachedTier = [...tiers].sort((a, b) => b.goal - a.goal).find(t => currentBeans >= t.goal);
    const reward = reachedTier ? reachedTier.reward : 0;
    return { usd: usdValue, reward, total: usdValue + reward };
  };

  const results = calculatePayout();

  return (
    <main className="min-h-screen pt-[64px] bg-black text-white selection:bg-[#d13027]">
      <div className="mx-auto max-w-6xl px-6 pt-4 md:pt-12 pb-20">
        
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#d13027]/20 bg-[#0a0a0a] p-8 md:p-20 shadow-2xl">
          
          {/* HEADER SECTION */}
          <div className="border-b border-[#1a1a1a] pb-16">
            <h1 className="text-4xl font-[900] uppercase tracking-tighter md:text-[5rem] italic leading-[0.85] text-white">
              Bigo Bean <span className="text-[#d13027]">Rush.</span>
            </h1>

            <p className="mt-10 max-w-4xl text-lg md:text-xl leading-relaxed text-gray-400 font-medium">
              [cite_start]The **BIGO Bean Rush (BBR)** is an optional, high-performance hosting track that operates completely separate from your standard **Agency account**. [cite: 1] [cite_start]Built for high-volume creators, BBR replaces monthly contracts and 
hour requirements with weekly "sprints" focused purely on performance. [cite: 1]
            </p>
          </div>

          {/* PROGRAM ESSENTIALS */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#ecc970]">Weekly Sprints</h3>
              [cite_start]<p className="mt-2 text-sm text-gray-400">Evaluation cycles run from Monday to Sunday, providing faster feedback and weekly bonus opportunities. [cite: 1]</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#ecc970]">Zero Constraints</h3>
              [cite_start]<p className="mt-2 text-sm text-gray-400">There are no agency contracts or minimum broadcasting hour requirements. [cite: 1]</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#ecc970]">Wallet Security</h3>
              [cite_start]<p className="mt-2 text-sm text-gray-400">While beans do not carry over to the next week for bonus credit, all earnings remain safely in your wallet with no financial penalties for low-volume weeks. [cite: 1]</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#ecc970]">Active Status</h3>
              [cite_start]<p className="mt-2 text-sm text-gray-400">To maintain eligibility, you must remain active; four consecutive weeks of inactivity will result in automatic removal from the BBR program. [cite: 1]</p>
            </div>
          </div>

          {/* CALCULATOR SECTION */}
          <div className="mt-16 p-8 rounded-3xl bg-white/[0.03] border border-white/10">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#ecc970] mb-8 italic">Payout Estimator</h2>
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4">Weekly Bean Count</label>
                <input 
                  type="number" 
                  value={currentBeans} 
                  onChange={(e) => setCurrentBeans(e.target.value === "" ? "" : Number(e.target.value))}
                  placeholder="0"
                  className="w-full bg-black border border-[#241d20] rounded-xl px-6 py-5 text-3xl font-bold text-white focus:border-[#d13027] outline-none transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-black border border-[#1a1a1a]">
                  <p className="text-[10px] font-bold uppercase text-gray-500">Wallet (USD)</p>
                  <p className="text-xl font-bold text-white">${results.usd.toLocaleString()}</p>
                </div>
                <div className="p-4 rounded-xl bg-black border border-[#1a1a1a]">
                  <p className="text-[10px] font-bold uppercase text-[#d13027]">BBR Reward</p>
                  <p className="text-xl font-bold text-[#ecc970]">${results.reward.toLocaleString()}</p>
                </div>
                <div className="col-span-2 p-6 rounded-xl bg-[#d13027]/10 border border-[#d13027]/30">
                  <p className="text-[10px] font-bold uppercase text-[#d13027]">Est. Weekly Payout</p>
                  <p className="text-4xl font-bold text-white">${results.total.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>

          {/* JOIN BBR BUTTON */}
          <div className="mt-12 text-center">
            <Link 
              href="/apply" 
              className="inline-block w-full md:w-auto rounded-full bg-[#d13027] px-16 py-6 text-sm font-black uppercase tracking-[0.5em] text-white shadow-2xl transition-all hover:bg-[#b02821] hover:scale-105"
            >
              Join BBR Now
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-[#1a1a1a] text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-700">
              Red Diamonds International • Strategic Infrastructure • 2026
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
