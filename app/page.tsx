import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen pt-[64px] bg-[#000000] text-white">
      {/* Reduced top padding from py-14 (56px) to pt-4 (16px) 
          to close the gap between header and hero.
      */}
      <div className="mx-auto max-w-5xl px-6 pt-4 pb-14">
        
        {/* HERO CARD */}
        <div className="rdi-card rdi-reveal relative overflow-hidden rounded-3xl border border-[#241d20] bg-gradient-to-b from-[#241d20]/60 to-transparent p-10 shadow-lg">
          <div className="rdi-hero-glow" />

          <p className="text-center text-[10px] font-bold tracking-[0.4em] uppercase text-[#ecc970]">
            Where creators are refined, not recruited.
          </p>

          <h1 className="mt-4 text-center text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
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
              className="rounded-full bg-[#d13027] px-8 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#b02821] hover:shadow-[0_0_20px_rgba(209,48,39,0.4)]"
            >
              Understand the Process
            </Link>
            <Link 
              href="/apply" 
              className="rounded-full border border-[#241d20] bg-white/5 px-8 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10"
            >
              Apply for Consideration
            </Link>
          </div>
        </div>

        {/* WHAT WE OFFER SECTION */}
        <div className="mt-12 rounded-3xl border border-[#241d20] bg-[#0a0a0a] p-10">
          <h2 className="text-xl font-bold text-[#ecc970] uppercase tracking-widest">What We Offer</h2>
          <p className="mt-2 text-sm text-gray-400 italic">Refinement isn’t a service. It’s a system.</p>
          
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white">Performance Engineering</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                We identify what actually moves your audience, eliminate wasted effort, and build systems that increase retention and authority.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white">Monetization Leverage</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                We structure income around leverage, not volume, optimizing monetization mechanics and long-term sustainability[cite: 18, 20].
              </p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white">Operational Control</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                From onboarding to execution, we enforce structure and support creators ready to operate at a professional standard[cite: 23, 40].
              </p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white">Validation Infrastructure</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                Access to proprietary training and frameworks reserved for creators inside the RDI pipeline[cite: 15, 77].
              </p>
            </div>
          </div>
          
          <p className="mt-10 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
            Not everyone qualifies. That’s the point.
          </p>
        </div>

      </div>
    </main>
  );
}
