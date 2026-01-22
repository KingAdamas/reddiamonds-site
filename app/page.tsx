import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen pt-[64px] bg-[#000000] text-white">
      {/* Main Container:
          pt-[64px] clears your slim header exactly.
          pt-4 (16px) creates the refined gap for your iPhone & Desktop.
      */}
      <div className="mx-auto max-w-5xl px-6 pt-4 pb-20">
        
        {/* HERO CARD */}
        <div className="relative overflow-hidden rounded-3xl border border-[#241d20] bg-gradient-to-b from-[#241d20]/60 to-transparent p-10 shadow-2xl">
          {/* Brand Depth Glow */}
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#d13027]/10 blur-[100px]" />

          <p className="text-center text-[10px] font-bold tracking-[0.4em] uppercase text-[#ecc970]">
            Where creators are refined, not recruited.
          </p>

          <h1 className="mt-4 text-center text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Stop posting. <br className="hidden md:block" /> Start dominating.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed text-gray-400">
            Elite strategy and high-level management for creators ready to operate 
            with control, not chaos. We identify potential, turn it into measurable performance, 
            and scale brands where the top 1% actually operate.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link 
              href="/process" 
              className="rounded-full bg-[#d13027] px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-[#b02821] hover:shadow-[0_0_20px_rgba(209,48,39,0.4)]"
            >
              Understand the Process
            </Link>
            <Link 
              href="/apply" 
              className="rounded-full border border-[#241d20] bg-white/5 px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10"
            >
              Apply for Consideration
            </Link>
          </div>
        </div>

        {/* STRATEGIC PILLARS SECTION */}
        <div className="mt-12 rounded-3xl border border-[#241d20] bg-[#0a0a0a]/50 p-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-[#241d20] pb-6">
            <div>
              <h2 className="text-xl font-bold text-[#ecc970] uppercase tracking-widest">What We Offer</h2>
              <p className="mt-1 text-xs text-gray-500 italic">Refinement isn&apos;t a service. It&apos;s a system.</p>
            </div>
            <p className="mt-4 md:mt-0 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
              Not everyone qualifies. That&apos;s the point.
            </p>
          </div>
          
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-white">Performance Engineering</h3>
              <p className="mt-3 text-xs leading-relaxed text-gray-400">
                We identify what actually moves your audience, eliminate wasted effort, and build systems that increase retention and authority[cite: 3, 22].
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-white">Monetization Leverage</h3>
              <p className="mt-3 text-xs leading-relaxed text-gray-400">
                We structure income around leverage, not volume, optimizing monetization mechanics and long-term sustainability[cite: 18, 20].
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-white">Operational Control</h3>
              <p className="mt-3 text-xs leading-relaxed text-gray-400">
                From onboarding to execution, we enforce structure and support creators ready to operate at a professional standard[cite: 23, 40].
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-white">Validation Infrastructure</h3>
              <p className="mt-3 text-xs leading-relaxed text-gray-400">
                Access to proprietary training and frameworks reserved for creators inside the RDI pipeline[cite: 15, 77].
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
