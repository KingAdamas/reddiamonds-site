import Link from 'next/link';

export default function Process() {
  const phases = [
    { 
      title: "Identification", 
      label: "Phase 01",
      desc: "We analyze engagement data to find creators demonstrating consistent momentum across global markets. Entry into the ecosystem isn't about clout—it's about identifying creators ready to operate with discipline and professional conduct." 
    },
    { 
      title: "Validation", 
      label: "Phase 02",
      desc: "Candidates undergo a rigorous testing phase to ensure total operational alignment. This phase includes operational support and goal-tracking. Note: Progression is performance-based, not time-based." 
    },
    { 
      title: "Scaling", 
      label: "Phase 03",
      desc: "Validated talent gains access to proprietary monetization and global positioning. We replace chaos with structure, allowing creators to compete where the top 1% actually operate." 
    }
  ];

  return (
    <main className="min-h-screen pt-[64px] bg-black text-white selection:bg-[#d13027]">
      <div className="mx-auto max-w-6xl px-6 pt-4 pb-20">
        
        {/* THE PROCESS HERO CARD - CENTERED HEADER */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#1a1a1a] bg-[#0a0a0a] p-8 md:p-20 text-center shadow-2xl">
          
          <div className="border-b border-[#1a1a1a] pb-12 flex flex-col items-center">
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#ecc970]">
              The Operational Framework
            </p>
            <h1 className="mt-6 text-4xl font-extrabold uppercase tracking-tighter md:text-7xl italic leading-tight">
              The <span className="text-[#d13027]">Process.</span>
            </h1>
            <p className="mt-8 mx-auto max-w-2xl text-lg leading-relaxed text-gray-300">
              Red Diamonds International (RDI) operates a repeatable pipeline designed to identify high-potential creators and provide the validation infrastructure necessary for professional scale.
            </p>
          </div>

          {/* THE THREE PHASES GRID - MAINTAINS READABILITY */}
          <div className="mt-20 space-y-24 text-left">
            {phases.map((phase, index) => (
              <div key={index} className="grid gap-8 md:grid-cols-12 border-t border-[#1a1a1a] pt-16 first:border-t-0 first:pt-0">
                <div className="md:col-span-4">
                  <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#d13027]">{phase.label}</span>
                  <h2 className="mt-2 text-2xl font-bold uppercase tracking-widest text-white">{phase.title}</h2>
                </div>
                <div className="md:col-span-8">
                  <p className="text-base leading-relaxed text-gray-400">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* FIXED WIDTH CTA BUTTON */}
          <div className="mt-24 pt-10 border-t border-[#1a1a1a]">
            <Link 
              href="/apply" 
              className="inline-block w-full md:w-auto rounded-full bg-[#d13027] px-12 py-5 text-xs font-bold uppercase tracking-[0.4em] text-white transition-all hover:bg-[#b02821] hover:shadow-[0_0_20px_rgba(209,48,39,0.3)]"
            >
              Apply for Consideration
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
