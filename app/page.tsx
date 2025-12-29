import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-72px)] bg-[#000000] text-white">
      <div className="mx-auto max-w-5xl px-6 py-14">
        {/* HERO */}
        <div className="relative overflow-hidden rounded-3xl border border-[#241d20] bg-gradient-to-b from-[#241d20]/60 to-transparent p-10 shadow-lg">
         <div className="rdi-hero-glow" />
 <p className="text-center text-xl font-bold text-[#ecc970]">Red Diamonds International</p>

          <h1 className="mt-3 text-center text-4xl font-extrabold leading-tight md:text-5xl">
            Stop streaming. Start dominating.
          </h1>

          <p className="mt-4 text-white/80 text-left text-lg leading-relaxed max-w-none">
            Red Diamonds International delivers elite strategy and high-level
            management to turn your content into a global powerhouse. Scale your
            brand, maximize your earnings, and compete with the top 1%.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/apply"
              className="rdi-btn-shine rdi-btn-pulse rounded-xl bg-[#d13027] px-6 py-3 font-semibold text-white hover:bg-[#97261f]"
            >
              Join the Squad
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-[#241d20] bg-transparent px-6 py-3 font-semibold text-white hover:border-[#ecc970]/60 hover:text-[#ecc970]"
            >
              Let&apos;s Connect
            </Link>
          </div>
        </div>

        {/* OFFER */}
        {/* OFFER */}
        <div className="mt-10 rounded-3xl border border-[#241d20] bg-[#241d20]/30 p-8">
          <h2 className="text-xl font-bold text-[#ecc970]">What We Offer</h2>

          <ul className="mt-4 space-y-4 text-white/85">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#ecc970]" />
              <span><span className="font-semibold">Strategic Growth:</span> Tailored performance coaching to increase reach and retention.</span>
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#ecc970]" />
              <span><span className="font-semibold">Monetization Mastery:</span> Expert planning to scale gifting and diamond growth.</span>
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#ecc970]" />
              <span><span className="font-semibold">Full-Scale Support:</span> Seamless recruiting, onboarding, and dedicated creator care.</span>
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#ecc970]" />
              <span><span className="font-semibold">Exclusive Resources:</span> Coming soon: The RDI digital resource library.</span>
            </li>
          </ul>
        </div>

</div>
    </main>
  );
}
