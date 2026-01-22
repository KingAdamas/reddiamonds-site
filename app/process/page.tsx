import Link from "next/link";

export default function Process() {
  return (
    <main className="min-h-screen pt-[64px] bg-[#000000] text-white">
      {/* Container matches Overview: 64px header clearance + 16px (pt-4) gap */}
      <div className="mx-auto max-w-5xl px-6 pt-4 pb-20">
        
        {/* PAGE HEADER */}
        <div className="border-b border-[#241d20] pb-12">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#ecc970]">
            The Pipeline
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
            Refinement is <br /> a System.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-gray-400">
            Red Diamonds International (RDI) operates a repeatable pipeline designed to identify high-potential creators and provide the validation infrastructure necessary for professional scale.
          </p>
        </div>

        {/* THE THREE PHASES */}
        <div className="mt-16 space-y-20">
          
          {/* Phase 1 */}
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d13027]">Phase 01</span>
              <h2 className="mt-2 text-xl font-bold uppercase tracking-widest text-white">Identification</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-sm leading-relaxed text-gray-400">
                We analyze raw engagement data to find creators demonstrating consistent momentum. Entry into the ecosystem isn&apos;t about clout—it&apos;s about identifying creators ready to operate with discipline and professional conduct.
              </p>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d13027]">Phase 02</span>
              <h2 className="mt-2 text-xl font-bold uppercase tracking-widest text-white">Validation</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-sm leading-relaxed text-gray-400">
                Creators are placed into our infrastructure, where they are tested for consistency and professionalism. This phase includes operational support and financial structures, such as our creator-focused savings groups, ensuring long-term sustainability.
              </p>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d13027]">Phase 03</span>
              <h2 className="mt-2 text-xl font-bold uppercase tracking-widest text-white">Optimization</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-sm leading-relaxed text-gray-400">
                Through performance engineering and monetization leverage, we maximize earning power. We replace chaos with structure, allowing creators to compete where the top 1% actually operate.
              </p>
            </div>
          </div>

        </div>

        {/* CALL TO ACTION */}
        <div className="mt-24 rounded-3xl border border-[#241d20] bg-gradient-to-r from-[#241d20]/30 to-transparent p-12 text-center">
          <h3 className="text-2xl font-bold text-white">Ready for the pipeline?</h3>
          <p className="mt-3 text-sm text-gray-400">Development is earned, not assigned.</p>
          <div className="mt-10">
            <Link 
              href="/apply" 
              className="rounded-full bg-[#d13027] px-12 py-4 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-[#b02821] hover:shadow-[0_0_20px_rgba(209,48,39,0.3)]"
            >
              Apply for Consideration
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}

