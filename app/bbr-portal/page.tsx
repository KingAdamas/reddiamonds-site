

"use client";

import { useState } from "react";

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

  const calculateProgress = () => {
    if (typeof currentBeans !== "number" || currentBeans <= 0) return { total: 0 };
    const usdValue = Math.floor(currentBeans / 210); 
    const reachedTier = [...tiers].sort((a, b) => b.goal - a.goal).find(t => currentBeans >= t.goal);
    const reward = reachedTier ? reachedTier.reward : 0;
    return { total: usdValue + reward };
  };

  const results = calculateProgress();

  return (
    <main className="min-h-screen bg-black text-white pt-10">
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#d13027]/20 bg-[#0a0a0a] p-8 md:p-20 shadow-2xl">
          
          {/* HERO CARD: Centered on mobile, spread out on desktop */}
          <div className="mb-12 p-6 rounded-2xl border border-[#d13027]/20 bg-[#d13027]/5 flex flex-col items-center text-center md:flex-row md:items-center md:justify-between md:text-left gap-6">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#d13027]">Official BIGO Bean Rush Invite</h3>
              <p className="text-sm text-gray-400 mt-1">Accept the invitation after joining.</p>
              <p className="text-[10px] font-bold uppercase tracking-tighter text-gray-500 mt-2">
                No Agency Contract | No Minimum Hours Required
              </p>
            </div>
            <a 
              href="https://slink.bigovideo.tv/WJl2TJ" 
              target="_blank"
              className="w-full md:w-auto px-10 py-4 bg-[#ecc970] text-black text-[10px] font-bold uppercase tracking-[0.2em] rounded-full text-center"
            >
              Join Bigo Bean Rush
            </a>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="border-b border-[#1a1a1a] pb-10 text-left">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#d13027]">Performance Metrics</p>
            <h1 className="mt-4 text-4xl font-extrabold uppercase italic md:text-6xl">THE RUSH.</h1>
            <p className="mt-4 text-gray-400 text-sm italic">Cycle: Mon 12:00 AM — Sun 11:59 PM (PDT)</p>
          </div>

          {/* ESTIMATOR AREA: Centered layout */}
          <div className="mt-12 p-8 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col items-center text-center">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#ecc970] mb-2">Payout Estimator</h2>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-8">Payout includes wallet value and weekly bonus.</p>
            
            <div className="w-full max-w-md space-y-8">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4">Current Weekly Beans</label>
                <input
                  type="number"
                  value={currentBeans}
                  onChange={(e) => setCurrentBeans(e.target.value === "" ? "" : Number(e.target.value))}
                  placeholder="Enter beans..."
                  className="w-full bg-black border border-[#241d20] rounded-xl px-6 py-5 text-2xl font-bold focus:border-[#d13027] outline-none text-center"
                />
              </div>

              <div className="p-6 rounded-xl bg-[#d13027]/10 border border-[#d13027]/30 flex flex-col justify-center items-center">
                <p className="text-[10px] font-bold uppercase text-[#d13027] mb-2">Est. Total Payout</p>
                <p className="text-4xl font-extrabold text-white">${results.total.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
