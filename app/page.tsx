import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-72px)] bg-[#000000] text-white">
      <div className="mx-auto max-w-5xl px-6 py-14">
        {/* HERO */}
        <div className="rounded-3xl border border-[#241d20] bg-gradient-to-b from-[#241d20]/60 to-transparent p-10 shadow-lg">
          <p className="text-sm tracking-widest text-[#ecc970]/90 uppercase">
            Red Diamonds International
          </p>

          <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
            Grow your live streaming income with{" "}
            <span className="text-[#ecc970]">structure</span>,{" "}
            <span className="text-[#ecc970]">strategy</span>, and{" "}
            <span className="text-[#ecc970]">support</span>.
          </h1>

          <p className="mt-4 max-w-2xl text-white/80">
            We help creators turn their platform into a business through
            training, monetization strategy, and agency support.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/apply"
              className="rounded-xl bg-[#d13027] px-5 py-3 font-semibold text-white hover:bg-[#97261f]"
            >
              Apply to the Agency
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-[#241d20] bg-transparent px-5 py-3 font-semibold text-[#ecc970] hover:border-[#ecc970]/60"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* OFFER */}
        <div className="mt-10 rounded-3xl border border-[#241d20] bg-[#241d20]/30 p-8">
          <h2 className="text-xl font-bold text-[#ecc970]">What we offer</h2>

          <ul className="mt-4 space-y-3 text-white/85">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#ecc970]" />
              Live performance coaching and content strategy
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#ecc970]" />
              Monetization planning (diamonds/beans/gifting growth)
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#ecc970]" />
              Recruiting, onboarding, and creator support
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#ecc970]" />
              Resource library (coming soon)
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
