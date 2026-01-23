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
    const usdValue = Math.floor(currentBeans / 210);
    const reachedTier = [...tiers].sort((a, b) => b.goal - a.goal).find(t => currentBeans >= t.goal);
    const reward = reachedTier ? reachedTier.reward : 0;
    return { usd: usdValue, reward, total: usdValue + reward };
  };

  const results = calculatePayout();

  return (
    <main className="min-h-screen pt-[64px] bg-black text-white selection:bg-[#d13027]">
      <div className="mx-auto max-w-6xl px-6 pt-4 md:pt-12 pb-20">
        
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#d13027]/20 bg-[#0a0a0a] p-8 md:p-20 shadow-2xl">
          
          {/* HEADER SECTION - REMOVED INTERNAL LABEL */}
          <div className="border-b border-[#1a1a1a] pb-16">
            
            {/* 50% SMALLER TITLE */}
            <h1 className="text-4xl font-[900] uppercase tracking-tighter md:text-[5rem] italic leading-[0.85] text-white">
              Bigo Bean <span className="text-[#d13027]">Rush.</span>
            </h1>

            <p className="mt-10 max-w-4xl text-lg md:text-xl leading-relaxed text-gray-400 font-medium">
              The BIGO Bean Rush (BBR) program is a specialized performance track that runs parallel to, 
              but completely separate from, your standard <span className="text-white font-bold">Agency account</span>. 
              It is designed for creators who want to focus on high-volume weekly goals rather than monthly time requirements.
            </p>
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

          {/* TABLE SECTION */}
          <div className="mt-20">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white italic">Weekly Reward Chart</h2>
            <div className="mt-8 overflow-hidden rounded-xl border border-[#1a1a1a]">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 uppercase text-[10px] tracking-widest text-gray-500">
                  <tr>
                    <th className="px-6 py-5">Level</th>
                    <th className="px-6 py-5">Bean Goal</th>
                    <th className="px-6 py-5 text-right">Agency Reward</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1a1a1a]">
                  {tiers.map((tier, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-5 font-bold text-white">Lvl {tier.lvl}</td>
                      <td className="px-6 py-5 text-gray-400">{tier.goal.toLocaleString()}</td>
                      <td className="px-6 py-5 text-right font-bold text-[#ecc970]">${tier.reward.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
