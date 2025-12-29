import Link from "next/link";
import EligibilityClient from "./EligibilityClient";
import {
  BOTH_TIKTOK_AND_BIGO,
  BIGO_ONLY,
  TIKTOK_ONLY,
} from "./countries";

export default function ApplyPage() {
  return (
    <main className="min-h-[calc(100vh-72px)] bg-[#000000] text-white">
      <div className="mx-auto max-w-5xl px-6 py-14">
        {/* HERO */}
        <div className="relative overflow-hidden rounded-3xl border border-[#241d20] bg-gradient-to-b from-[#241d20]/60 to-transparent p-10 shadow-lg">
          <div className="rdi-hero-glow" />

          <p className="text-sm font-semibold text-[#ecc970]">Join the Squad</p>

          <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
            Stop streaming. Start dominating.
          </h1>

          <p className="mt-4 max-w-3xl text-white/80 text-lg leading-relaxed">
            Red Diamonds International delivers elite strategy and high-level management to
            turn your content into a global powerhouse. Scale your brand, maximize your
            earnings, and compete with the top 1%.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://forms.gle/REPLACE_ME"
              target="_blank"
              rel="noreferrer noopener"
              className="rdi-btn-shine rdi-btn-pulse inline-flex items-center justify-center rounded-xl bg-[#d13027] px-6 py-3 font-semibold text-white hover:bg-[#97261f]"
            >
              Apply Now
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-[#241d20] bg-transparent px-6 py-3 font-semibold text-white hover:border-[#ecc970]/60 hover:text-[#ecc970]"
            >
              Connect First
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* CHECK ELIGIBILITY */}
          <div className="rounded-3xl border border-[#241d20] bg-[#241d20]/20 p-8">
            <h2 className="text-xl font-bold text-[#ecc970]">Check Eligibility</h2>
            <p className="mt-2 text-white/70">
              Don’t guess. Confirm you qualify before you apply.
            </p>
            <EligibilityClient />
          </div>

          {/* COUNTRIES */}
          <div className="rounded-3xl border border-[#241d20] bg-[#241d20]/20 p-8">
            <h2 className="text-xl font-bold text-[#ecc970]">Countries we service</h2>
            <p className="mt-2 text-white/70">
              Countries are grouped by platform availability.
            </p>

            <div className="mt-6 space-y-6">
              <CountryGroup title="Both TikTok LIVE + BIGO LIVE" countries={BOTH_TIKTOK_AND_BIGO} />
              <CountryGroup title="BIGO LIVE only" countries={BIGO_ONLY} />
              <CountryGroup title="TikTok LIVE only" countries={TIKTOK_ONLY} />
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs text-white/50">
          By applying, you confirm your information is accurate and that you meet our eligibility requirements.
        </p>
      </div>
    </main>
  );
}

function CountryGroup({
  title,
  countries,
}: {
  title: string;
  countries: readonly string[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white/90">{title}</h3>
      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {countries
          .slice()
          .sort((a, b) => a.localeCompare(b))
          .map((c) => (
            <div
              key={c}
              className="rounded-xl border border-[#241d20] bg-[#000000]/20 px-4 py-2 text-sm text-white/80"
            >
              {c}
            </div>
          ))}
      </div>
    </div>
  );
}
