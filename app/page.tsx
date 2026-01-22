import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-72px)] bg-[#000000] text-white">
      <div className="mx-auto max-w-5xl px-6 py-14">
        {/* HERO */}
        <div className="rdi-card rdi-reveal relative overflow-hidden rounded-3xl border border-[#241d20] bg-gradient-to-b from-[#241d20]/60 to-transparent p-10 shadow-lg">
          <div className="rdi-hero-glow" />

          <p className="text-center text-sm font-semibold tracking-wide text-[#ecc970]">
            Where creators are refined, not recruited.
          </p>

          <h1 className="mt-3 text-center text-4xl font-extrabold leading-tight md:text-5xl">
            Stop posting. Start dominating.
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-300">
            Elite strategy and high-level management for creators ready to operate
            with control, not chaos. We refine potential into power, scale brands
            with precision, and compete where the top 1% actually operate.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-3">
  <Link
    href="/process"
    className="rdi-btn-shine rdi-btn-pulse rounded-xl bg-[#d13027] px-6 py-3 font-semibold text-white hover:bg-[#97261f]"
  >
    Understand the Process
  </Link>

  <Link
    href="/apply"
    className="rounded-xl border border-[#241d20] bg-transparent px-6 py-3 font-semibold text-white hover:border-[#ecc970]/60 hover:text-[#ecc970]"
  >
    Apply for Consideration
  </Link>

  <Link
    href="/contact"
    className="rounded-xl border border-[#241d20] bg-transparent px-6 py-3 font-semibold text-white/80 hover:text-white"
  >
    Let&apos;s Connect
  </Link>
</div>
          
       
          <p className="mt-3 text-center text-sm text-white/60">
           
          </p>
        </div>

        {/* OFFER */}
        <div className="rdi-card rdi-reveal rdi-delay-150 mt-10 rounded-3xl border border-[#241d20] bg-[#241d20]/30 p-8">
          <h2 className="text-xl font-bold text-[#ecc970]">What We Offer</h2>
          <p className="mt-2 text-white/70">Refinement isn&apos;t a service. It&apos;s a system.</p>

          <ul className="mt-5 space-y-4 text-white/85">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#ecc970]" />
              <span>
                <span className="font-semibold">Performance Engineering:</span> We identify what
                actually moves your audience, eliminate wasted effort, and build systems that
                increase retention, authority, and control.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#ecc970]" />
              <span>
                <span className="font-semibold">Monetization Leverage:</span> We structure income
                around leverage, not volume, optimizing gifting, partnerships, and long-term earning power.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#ecc970]" />
              <span>
                <span className="font-semibold">Operational Control:</span> From onboarding to execution,
                we remove friction, enforce structure, and support creators ready to operate at a higher standard.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#ecc970]" />
              <span>
                <span className="font-semibold">Private Systems &amp; Resources:</span> Access to proprietary
                tools, training, and frameworks reserved for creators inside the RDI pipeline.
              </span>
            </li>
          </ul>

          <p className="mt-6 text-white/70">
            <span className="font-semibold text-white">Not everyone qualifies.</span> That&apos;s the point.
          </p>
        </div>
      </div>
    </main>
  );
}

