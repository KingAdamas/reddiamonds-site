"use client";

import { useState } from "react";

export default function BBRPortal() {
  const [currentBeans, setCurrentBeans] = useState<number | "">("");

  // Authenticated tiers from the official Bigo Bean Rush Weekly Reward Chart
  const tiers = [
    { lvl: "27", goal: 2000000, reward: 15000 },
    { lvl: "26", goal: 1750000, reward: 13125 },
    { lvl: "25", goal: 1500000, reward: 11250 },
    { lvl: "24", goal: 1250000, reward: 9375 },
    { lvl: "23", goal: 1000000, reward: 7500 },
    { lvl: "22", goal: 850000, reward: 6375 },
    { lvl: "21", goal: 750000, reward: 5500 },
    { lvl: "20", goal: 650000, reward: 4770 },
    { lvl: "15", goal: 300000, reward: 2200 },
    { lvl: "10", goal: 80000, reward: 600 },
    { lvl: "05", goal: 12500, reward: 72 },
    { lvl: "01", goal: 1500, reward: 5 },
  ];

  const calculateProgress = () => {
    if (typeof currentBeans !== "number" || currentBeans <= 0) {
      return { usd: 0, reward: 0, total: 0, nextGoal: 1500, percent: 0 };
    }
    
    const usdValue = Math.floor(currentBeans / 210); 
    const sortedTiers = [...tiers].sort((a, b) => a.goal - b.goal);
    const reachedTier = [...sortedTiers].reverse().find(t => currentBeans >= t.goal);
    const nextTier = sortedTiers.find(t => t.goal > currentBeans);
    
    const reward = reachedTier ? reachedTier.reward : 0;
    const nextGoal = nextTier ? nextTier.goal : 2000000;
    const percent = Math.min(Math.floor((currentBeans / nextGoal) * 100), 100);

    return { usd: usdValue, reward, total: usdValue + reward, nextGoal, percent };
  };

  const results = calculateProgress();

  return (
    <main className="min-h-screen pt-[64px] bg-black text-white selection:bg-[#d13027]">
      <div className="mx-auto max-w-6xl px-6 pt-4 md:pt-12 pb-20">
        
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#d13027]/20 bg-[#0a0a0a] p-8 md:p-20 shadow-2xl">
          
          {/* UPDATED JOIN BIGO BEAN RUSH LINK */}
          <div className="mb-12 p-6 rounded-2xl border border-[#ecc970]/20 bg-[#ecc970]/5 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#ecc970]">Official BBR Event</h3>
              <p className="text-sm text-gray-400 mt-1">Accept the invitation to join the official Bigo Bean Rush track.</p>
            </div>
            <a 
              href="https://slink.bigovideo.tv/WJl2TJ" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-10 py-4 bg-[#ecc970] text-black text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white transition-all shadow-[0_10px_20px_rgba(236,201,112,0.2)]"
            >
              Join Bigo Bean Rush
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-start border-b border-[#1a1a1a] pb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#d13027]">Performance Metrics</p>
              <h1 className="mt-4 text-4xl font-extrabold uppercase tracking-tighter md:text-6xl italic">
                The <span className="text-white">Rush.</span>
              </h1>
              <p className="mt-4 text-gray-400 text-sm italic">Cycle: Mon 12:00 AM — Sun 11:59 PM (PDT)</p>
            </div>
          </div>

          {/* CALCULATOR SECTION */}
          <div className="mt-12 p-8 rounded-3xl bg-white/[0.03] border border-white/10">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#ecc970] mb-8">Payout Estimator</h2>
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4">Current Weekly Beans</label>
                <input 
                  type="number" 
                  value={currentBeans} 
                  onChange={(e) => setCurrentBeans(e.target.value === "" ? "" : Number(e.target.value))}
                  placeholder="Enter beans..."
                  className="w-full bg-black border border-[#241d20] rounded-xl px-6 py-5 text-2xl font-bold focus:border-[#d13027] outline-none"
                />
                <div className="mt-8">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2">
                    <span className="text-gray-500">Next Goal: {results.nextGoal.toLocaleString()}</span>
                    <span className="text-[#ecc970]">{results.percent}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#d13027] transition-all" style={{ width: `${results.percent}%` }} />
                  </div>
                </div>
              </div>
              <div className="col-span-1 p-6 rounded-xl bg-[#d13027]/10 border border-[#d13027]/30 text-center flex flex-col justify-center">
                <p className="text-[10px] font-bold uppercase text-[#d13027] mb-2">Est. Total Payout</p>
                <p className="text-4xl font-extrabold text-white">${results.total.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#1a1a1a] text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-700">
              Red Diamonds International Proprietary Infrastructure
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
