import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen pt-[64px] bg-[#000000] text-white">
      {/* Container: 64px header clearance + pt-8 (32px) gap */}
      <div className="mx-auto max-w-5xl px-6 pt-8 pb-20">
        
        {/* HERO SECTION */}
        <div className="relative overflow-hidden rounded-3xl border border-[#241d20] bg-gradient-to-b from-[#241d20]/60 to-transparent p-12 shadow-2xl">
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#d13027]/10 blur-[100px]" />

          <p className="text-center text-sm font-bold tracking-[0.4em] uppercase text-[#ecc970]">
            Where creators are refined, not recruited.
          </p>

          <h1 className="mt-6 text-center text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Stop posting. <br className="hidden md:block" /> Start dominating.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-gray-300">
            Elite strategy and high-level management for creators ready to operate 
            with control, not chaos. We identify potential, turn it into measurable performance, 
            and scale brands where the top 1% actually operate.
          </p>

          {/* UPDATED BUTTONS: Added inline-flex items-center justify-center */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link 
              href="/process" 
              className="inline-flex items-center justify-center rounded-full bg-[#d13027] px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#b02821] hover:shadow-[0_0_20px_rgba(209,48,39,0.4)]"
            >
              Understand the Process
            </Link>
            <Link 
              href="/apply" 
              className="inline-flex items-center justify-center rounded-full border border-[#241d20] bg-white/5 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10"
            >
              Apply for Consideration
            </Link>
          </div>
        </div>

        {/* CORE PILLARS SECTION */}
        <div className="mt-16 rounded-3xl border border-[#241d20] bg-[#0a0a0a]/50 p-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-[#241d20] pb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#ecc970] uppercase tracking-widest">What We Offer</h2>
              <p className="mt-2 text-lg text-gray-500 italic">Refinement isn&apos;t a service. It&apos;s a system.</p>
            </div>
            <p className="mt-4 md:mt-0 text-sm font-bold uppercase tracking-[0.2em] text-white/40">
              Not everyone qualifies. That&apos;s the point.
            </p>
          </div>
          
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">Performance Engineering</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-400">
                We identify what actually moves your audience, eliminate wasted effort, and build systems that increase retention and authority.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">Monetization Leverage</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-400">
                We structure income around leverage, not volume, optimizing monetization mechanics and long-term sustainability.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">Operational Control</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-400">
                From onboarding to execution, we enforce structure and support creators ready to operate at a professional standard.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">Validation Infrastructure</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-400">
                Access to proprietary training and frameworks reserved for creators inside the RDI pipeline.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
