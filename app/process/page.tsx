import Link from "next/link";

export default function Process() {
  return (
    <main className="min-h-screen pt-[64px] bg-[#000000] text-white">
      <div className="mx-auto max-w-5xl px-6 pt-8 pb-20">
        
        {/* PAGE HEADER */}
        <div className="border-b border-[#241d20] pb-12">
          <p className="text-sm font-bold tracking-[0.4em] uppercase text-[#ecc970]">
            The Pipeline
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
            Refinement is <br /> a System.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-300">
            Red Diamonds International (RDI) operates a repeatable pipeline designed to identify high-potential creators and provide the validation infrastructure necessary for professional scale.
          </p>
        </div>

        {/* THE THREE PHASES */}
        <div className="mt-20 space-y-24">
          {/* Phase 1 */}
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#d13027]">Phase 01</span>
              <h2 className="mt-2 text-2xl font-bold uppercase tracking-widest text-white">Identification</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-base leading-relaxed text-gray-400">
                We analyze engagement data to find creators demonstrating consistent momentum. Entry into the ecosystem isn&apos;t about clout&mdash;it&apos;s about identifying creators ready to operate with discipline and professional conduct.
              </p>
            </div>
          </div>

          {/* Phase 2: Validation */}
          <div className="grid gap-8 md:grid-cols-12 border-t border-[#241d20] pt-16">
            <div className="md:col-span-4">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#d13027]">Phase 02</span>
              <h2 className="mt-2 text-2xl font-bold uppercase tracking-widest text-white">Validation</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-base leading-relaxed text-gray-400">
                Creators are placed into our infrastructure, where they are tested for consistency and professionalism. This phase includes operational support and encouraging the creator to set weekly and monthly financial goals, ensuring long-term sustainability.
              </p>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="grid gap-8 md:grid-cols-12 border-t border-[#241d20] pt-16">
            <div className="md:col-span-4">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#d13027]">Phase 03</span>
              <h2 className="mt-2 text-2xl font-bold uppercase tracking-widest text-white">Optimization</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-base leading-relaxed text-gray-400">
                Through performance engineering and monetization leverage, we maximize earning power. We replace chaos with structure, allowing creators to compete where the top 1% actually operate.
              </p>
            </div>
          </div>
        </div>

        {/* BRAND & INVESTOR SECTION */}
        <div className="mt-32 rounded-3xl border border-[#d13027]/30 bg-[#0a0a0a] p-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-[#ecc970] uppercase tracking-widest">Brand &amp; Investor Validation</h2>
          <p className="mt-4 text-lg text-gray-300 italic">Predictability is the ultimate asset.</p>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">Risk Mitigation</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-400">
                By enforcing strict operational standards and financial goal-tracking, we eliminate the volatility typically associated with creator-led brands.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">Scalable Infrastructure</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-400">
                Our pipeline is built for repeatable success. We provide the management and validation necessary to turn individual influence into institutional-grade performance.
              </p>
            </div>
          </div>
        </div>

        {/* CALL TO ACTION - UPDATED */}
        <div className="mt-24 text-center">
          {/* Added inline-flex center properties and shortened text to "Begin Consideration" */}
          <Link 
            href="/apply" 
            className="inline-flex items-center justify-center rounded-full bg-[#d13027] px-12 py-5 text-sm font-bold uppercase tracking-[0.4em] text-white transition-all hover:bg-[#b02821] hover:shadow-[0_0_20px_rgba(209,48,39,0.3)]"
          >
            Begin Consideration
          </Link>
        </div>

      </div>
    </main>
  );
}
