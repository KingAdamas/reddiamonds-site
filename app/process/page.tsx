import Link from 'next/link';

export default function Process() {
  const phases = [
    { 
      title: "Discovery", 
      label: "Phase 01",
      desc: "We evaluate creators based on trajectory, not just numbers. RDI looks beyond follower counts to assess consistency, content quality, and professional readiness. Entry into the pipeline is earned, not given." 
    },
    { 
      title: "Refinement", 
      label: "Phase 02",
      desc: "Selected creators enter a structured development phase focused on elevating content performance, building operational discipline, and closing the gap between raw potential and market-ready talent. Progress is earned through output, not time." 
    },
    { 
      title: "Opportunity Readiness", 
      label: "Phase 03",
      desc: "Refined creators are positioned for real monetization pathways, brand alignment, and expanded reach across key markets. This is where preparation meets opportunity, reserved for those who have completed the work." 
    }
  ];

  return (
    // UPDATED: Background to RDI Crimson and text selection to Crimson
    <main className="min-h-screen pt-[64px] bg-[#8B0000] text-black selection:bg-[#8B0000] selection:text-white">
      <div className="mx-auto max-w-6xl px-6 pt-4 md:pt-12 pb-20">
        
        {/* UPDATED: Card to White, border to Zinc, and shadow for depth */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white p-8 md:p-20 text-center shadow-2xl">
          
          {/* UPDATED: Border to light gray/zinc */}
          <div className="border-b border-zinc-100 pb-12 flex flex-col items-center">
            {/* UPDATED: Label to brand Crimson */}
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#8B0000]">
              The Development Pipeline
            </p>
            {/* UPDATED: Main title to Black with brand Crimson highlight */}
            <h1 className="mt-6 text-4xl font-extrabold uppercase tracking-tighter md:text-7xl italic leading-tight text-black">
              The <span className="text-[#8B0000]">Process.</span>
            </h1>
            {/* UPDATED: Paragraph to soft black (black/80) */}
            <p className="mt-8 mx-auto max-w-2xl text-lg leading-relaxed text-black/80 font-medium italic">
              Red Diamonds International (RDI) runs a selective creator development pipeline built to identify raw talent, refine it with structure, and position select individuals for genuine opportunity.
            </p>
          </div>

          <div className="mt-20 space-y-24 text-left">
            {phases.map((phase, index) => (
              /* UPDATED: Inner border to very light gray */
              <div key={index} className="grid gap-8 md:grid-cols-12 border-t border-zinc-100 pt-16 first:border-t-0 first:pt-0">
                <div className="md:col-span-4">
                  {/* UPDATED: Phase label to brand Crimson */}
                  <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#8B0000]">{phase.label}</span>
                  {/* UPDATED: Phase title to Black */}
                  <h2 className="mt-2 text-2xl font-bold uppercase tracking-widest text-black italic">{phase.title}</h2>
                </div>
                <div className="md:col-span-8">
                  {/* UPDATED: Description text to Deep Zinc (zinc-700) */}
                  <p className="text-base leading-relaxed text-zinc-700 font-medium italic">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* UPDATED: Bottom border to very light gray */}
          <div className="mt-24 pt-10 border-t border-zinc-100">
            {/* UPDATED: Button to brand Crimson with standard white text */}
            <Link 
              href="/apply" 
              className="inline-block w-full md:w-auto rounded-full bg-[#8B0000] px-12 py-5 text-xs font-bold uppercase tracking-[0.4em] text-white transition-all hover:bg-[#a00000] shadow-xl"
            >
              Apply for Consideration
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
