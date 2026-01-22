import Link from "next/link";

export default function ProcessPage() {
  return (
    <main className="min-h-screen pt-[92px] bg-[#000000] text-white">
      <div className="mx-auto max-w-5xl px-6 py-14">
        
        {/* HERO SECTION */}
        <div className="rdi-card animate-in fade-in slide-in-from-bottom-8 duration-1000 relative overflow-hidden rounded-3xl border border-[#241d20] bg-gradient-to-b from-[#241d20]/60 to-transparent p-10 shadow-lg">
          <div className="rdi-hero-glow" />
          <p className="text-center text-xs font-semibold tracking-[0.3em] uppercase text-[#ecc970]">
            The Pathway to Refinement
          </p>
          <h1 className="mt-3 text-center text-4xl font-extrabold leading-tight md:text-5xl">
            The Process
          </h1>
          <p className="mx-auto mt-4 max-w-md text-center text-gray-300">
            This is a structured evaluation pathway. We observe, score, and refine creators 
            based on performance, discipline, alignment, and readiness.
          </p>
        </div>

        {/* 4 STEP PATHWAY */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* STEP 1 */}
          <div className="rdi-card animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 rounded-3xl border border-[#241d20] bg-[#241d20]/30 p-8 hover:border-[#d13027]/50 transition-colors">
            <span className="text-[#ecc970] text-xs font-bold uppercase tracking-[0.3em]">Step 1</span>
            <h3 className="mt-2 text-xl font-bold">Submit for consideration</h3>
            <p className="mt-3 text-white/70">You apply and enter review. This confirms interest and starts evaluation, not placement.</p>
          </div>

          {/* STEP 2 */}
          <div className="rdi-card animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 rounded-3xl border border-[#241d20] bg-[#241d20]/30 p-8 hover:border-[#d13027]/50 transition-colors">
            <span className="text-[#ecc970] text-xs font-bold uppercase tracking-[0.3em]">Step 2</span>
            <h3 className="mt-2 text-xl font-bold">Observation</h3>
            <p className="mt-3 text-white/70">We watch your content and live behavior over time. Consistency and signal quality matter.</p>
          </div>

          {/* STEP 3 */}
          <div className="rdi-card animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-450 rounded-3xl border border-[#241d20] bg-[#241d20]/30 p-8 hover:border-[#d13027]/50 transition-colors">
            <span className="text-[#ecc970] text-xs font-bold uppercase tracking-[0.3em]">Step 3</span>
            <h3 className="mt-2 text-xl font-bold">Evaluation</h3>
            <p className="mt-3 text-white/70">We assess performance, discipline, alignment, and readiness. The standard is refinement, not hype.</p>
          </div>

          {/* STEP 4 */}
          <div className="rdi-card animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 rounded-3xl border border-[#241d20] bg-[#241d20]/30 p-8 hover:border-[#d13027]/50 transition-colors">
            <span className="text-[#ecc970] text-xs font-bold uppercase tracking-[0.3em]">Step 4</span>
            <h3 className="mt-2 text-xl font-bold">Advancement</h3>
            <p className="mt-3 text-white/70">When you meet the standard, you can be invited into active development and monetization pathways.</p>
          </div>
        </div>

        {/* EVALUATION CRITERIA */}
        <div className="rdi-card animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 mt-10 rounded-3xl border border-[#241d20] bg-[#241d20]/30 p-8">
          <h2 className="text-xl font-bold text-[#ecc970] uppercase tracking-widest">What we evaluate</h2>
          <ul className="mt-5 grid gap-4 md:grid-cols-2 text-white/85">
            <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[#ecc970]" /> Consistency and momentum</li>
            <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[#ecc970]" /> Live performance & control</li>
            <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[#ecc970]" /> Communication & professionalism</li>
            <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[#ecc970]" /> Discipline and follow through</li>
          </ul>
        </div>

        {/* FINAL CALL TO ACTION */}
        <div className="mt-14 text-center">
          <Link
            href="/apply"
            className="rdi-btn-shine rdi-btn-pulse rounded-xl bg-[#d13027] px-10 py-4 font-bold text-white hover:bg-[#97261f] transition-all shadow-xl"
          >
            Begin Consideration
          </Link>
          <p className="mt-4 text-sm text-white/50 tracking-wide">
            Development is earned, not assigned.
          </p>
        </div>

      </div>
    </main>
  );
}
