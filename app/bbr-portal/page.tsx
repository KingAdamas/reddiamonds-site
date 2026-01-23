import Link from 'next/link';

export default function BBRPortal() {
  // Complete data set from the high-detail reward chart
  const tiers = [
    { lvl: "27", goal: "2,000,000", beansUsd: "$9,524", reward: "$15,000", 
total: "$24,524" },
    { lvl: "20", goal: "650,000", beansUsd: "$3,095", reward: "$4,770", 
total: "$7,865" },
    { lvl: "15", goal: "300,000", beansUsd: "$1,429", reward: "$2,200", 
total: "$3,629" },
    { lvl: "10", goal: "80,000", beansUsd: "$381", reward: "$600", total: 
"$981" },
    { lvl: "05", goal: "12,500", beansUsd: "$60", reward: "$72", total: 
"$132" },
    { lvl: "01", goal: "1,500", beansUsd: "$7", reward: "$5", total: "$12" 
},
  ];

  return (
    <main className="min-h-screen pt-[64px] bg-black text-white 
selection:bg-[#d13027]">
      <div className="mx-auto max-w-6xl px-6 pt-4 md:pt-12 pb-20">
        
        {/* PRIVATE HEADER CARD */}
        <div className="relative overflow-hidden rounded-[2.5rem] border 
border-[#d13027]/20 bg-[#0a0a0a] p-8 md:p-20 shadow-2xl">
          <div className="flex flex-col md:flex-row md:justify-between 
md:items-start border-b border-[#1a1a1a] pb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.4em] 
text-[#d13027]">BIGO Bean Rush (BBR)</p>
              <h1 className="mt-4 text-4xl font-extrabold uppercase 
tracking-tighter md:text-6xl italic">
                Performance <span className="text-white">Metrics.</span>
              </h1>
              <p className="mt-4 text-gray-400 text-sm italic">Effective 
July 21, 2025</p>
            </div>
            <div className="mt-6 md:mt-0 text-right">
              <p className="text-[10px] font-bold uppercase 
tracking-widest text-[#ecc970]">Weekly Cycle</p>
              <p className="text-xs font-bold text-white uppercase">Mon 
12:00 AM — Sun 11:59 PM (PDT)</p>
            </div>
          </div>

          {/* OPERATIONAL DATA GRID */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="p-6 rounded-2xl bg-white/5 border 
border-white/10">
              <h3 className="text-[10px] font-bold uppercase 
tracking-widest text-[#d13027]">Zero Hour Mandate</h3>
              <p className="mt-2 text-sm text-gray-400">No minimum 
broadcasting hours required. Focus purely on bean volume.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border 
border-white/10">
              <h3 className="text-[10px] font-bold uppercase 
tracking-widest text-[#d13027]">Global Recognition</h3>
              <p className="mt-2 text-sm text-gray-400">Both local and 
overseas beans count toward your weekly total.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border 
border-white/10">
              <h3 className="text-[10px] font-bold uppercase 
tracking-widest text-[#d13027]">Rapid Settlement</h3>
              <p className="mt-2 text-sm text-gray-400">Rewards released 
by the following Wednesday at 1:00 AM PDT.</p>
            </div>
          </div>

          {/* FINANCIAL BREAKDOWN TABLE */}
          <div className="mt-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] 
text-white italic">Weekly Reward Milestones</h2>
            <div className="mt-6 overflow-hidden rounded-xl border 
border-[#1a1a1a]">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 uppercase text-[10px] 
tracking-widest text-gray-500">
                  <tr>
                    <th className="px-6 py-4">Level</th>
                    <th className="px-6 py-4">Bean Goal</th>
                    <th className="px-6 py-4">Beans (USD)</th>
                    <th className="px-6 py-4">Agency Reward</th>
                    <th className="px-6 py-4 text-right">Total Payout</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1a1a1a]">
                  {tiers.map((tier, i) => (
                    <tr key={i} className="hover:bg-white/5 
transition-colors">
                      <td className="px-6 py-4 font-bold text-white">Lvl 
{tier.lvl}</td>
                      <td className="px-6 py-4 
text-gray-400">{tier.goal}</td>
                      <td className="px-6 py-4 
text-gray-400">{tier.beansUsd}</td>
                      <td className="px-6 py-4 
text-[#ecc970]">{tier.reward}</td>
                      <td className="px-6 py-4 text-right font-bold 
text-white">{tier.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-center text-[10px] text-gray-600 
uppercase tracking-widest">
              Consult internal documentation for full 27-level financial 
modeling.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-[#1a1a1a] 
text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] 
text-gray-700">
              Red Diamonds International Proprietary Infrastructure • 
Confirmed Operational Track
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
