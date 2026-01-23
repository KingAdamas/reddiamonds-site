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
          
          {/* MASSIVE HEADER SECTION */}
          <div className="border-b border-[#1a1a1a] pb-12">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#d13027]">Internal Operational Track</p>
            
            {/* 3X SIZE TITLE */}
            <h1 className="mt-8 text-6xl font-[900] uppercase tracking-tighter md:text-[10rem] italic leading-[0.85] text-white">
              Bigo Bean <span className="text-[#d13027]">Rush.</span>
            </h1>

            {/* REPLACED PERFORMANCE METRICS WITH FORMAL DEFINITION */}
            <p className="mt-12 max-w-4xl text-lg md:text-2xl leading-relaxed text-gray-400 font-medium">
              The BIGO Bean Rush (BBR) program is a specialized performance track that runs parallel to, 
              but completely separate from, your standard <span className="text-white font-bold">Agency account</span>. 
              It is designed for creators who want to focus on high-volume weekly goals rather than monthly time requirements.
            </p>
          </div>

          {/* CALCULATOR & TABLE (Kept for functionality) */}
          <div className="mt-16 grid gap-12">
             {/* ... existing calculator and table code remains here ... */}
          </div>

          <div className="mt-12 pt-8 border-t border-[#1a1a1a] text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-700">
              Red Diamonds International Proprietary Infrastructure • Est. 2026
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
