import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-72px)] bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-14">

        {/* HERO */}
        <div className="relative overflow-hidden rounded-3xl border border-[#241d20] bg-gradient-to-b from-[#241d20]/60 to-transparent p-10 shadow-lg">
          <p className="text-center text-xl font-bold text-[#ecc970]">
            Red Diamonds International
          </p>

          <h1 className="mt-3 text-center text-4xl font-extrabold md:text-5xl">
            Stop streaming. Start dominating.
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-300">
            Red Diamonds International delivers elite strategy and high-level
            management to turn your content into a global powerhouse. Scale your
            brand, maximize your earnings, and compete with the top 1%.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/apply"
              className="rounded-xl bg-[#d13027] px-6 py-3 font-semibold text-white hover:bg-[#97261f]"
            >
              Join the Squad
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-[#241d20] px-6 py-3 font-semibold hover:border-[#ecc970]/60 hover:text-[#ecc970]"
            >
              Let&apos;s Connect
            </Link>

            <Link
              href="/learn-more"
              className="rounded-xl border border-[#241d20] px-6 py-3 font-semibold hover:border-[#ecc970]/60 hover:text-[#ecc970]"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* OFFER */}
        <div className="mt-10 rounded-3xl border border-[#241d20] bg-[#241d20]/30 p-8">
          <h2 className="text-xl font-bold text-[#ecc970]">
            What We Offer
          </h2>

          <ul className="mt-4 space-y-4 text-white/85">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#ecc970]" />
              <span>
                <strong>Strategic Growth:</strong> Tailored performance coaching
                to increase reach and retention.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#ecc970]" />
              <span>
                <strong>Monetization Mastery:</strong> Expert planning to scale
                gifting and reward growth.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#ecc970]" />
              <span>
                <strong>Full-Scale Support:</strong> Recruiting, onboarding, and
                dedicated creator care.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#ecc970]" />
              <span>
                <strong>Exclusive Resources:</strong> The RDI digital resource
                library (coming soon).
              </span>
            </li>
          </ul>
        </div>

      </div>
    </main>
  );
}

