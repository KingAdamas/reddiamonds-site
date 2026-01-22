import Link from "next/link";

const EMAIL = "reddiamondfamilyus@gmail.com";
// Update this later if you want a live link:
const TIKTOK_URL = ""; // e.g. "https://www.tiktok.com/@reddiamondsinternational"

export default function ContactPage() {
  return (
    <main className="min-h-[calc(100vh-72px)] bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-14">
        {/* HERO */}
        <div className="rdi-card rdi-reveal relative overflow-hidden rounded-3xl border border-[#241d20] bg-[#241d20]/30 p-10 shadow-lg">
          <p className="text-center text-xl font-bold text-[#ecc970]">
            Contact and Inquiries
          </p>

          <h1 className="mt-3 text-center text-4xl font-extrabold leading-tight md:text-5xl">
            Route your inquiry correctly.
          </h1>

          <p className="mt-4 mx-auto max-w-2xl text-center text-white/80">
            This page routes professional inquiries related to partnerships, media, investors, and
            existing Red Diamonds International creators. If you are a creator seeking formal
            consideration, use the Apply pathway to enter the correct evaluation pipeline.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="rdi-btn-shine rdi-btn-pulse rounded-xl bg-[#d13027] px-6 py-3 font-semibold text-white hover:bg-[#97261f]"
            >
              Email the Team
            </a>

            <Link
              href="/apply"
              className="rounded-xl border border-[#241d20] bg-transparent px-6 py-3 font-semibold text-white hover:border-[#ecc970]/60 hover:text-[#ecc970]"
            >
              Apply for Consideration
            </Link>

            <Link
              href="/the-process"
              className="rounded-xl border border-[#241d20] bg-transparent px-6 py-3 font-semibold text-white/80 hover:text-white"
            >
              Review The Process
            </Link>
          </div>

          <p className="mt-6 text-center text-sm text-white/60">
            Inquiries are reviewed and routed internally. Submission does not guarantee a response.
          </p>
        </div>

        {/* ROUTING SECTIONS */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Brands / Press / Investors */}
          <div className="rdi-card rdi-reveal rdi-delay-150 rounded-3xl border border-[#241d20] bg-[#241d20]/20 p-8">
            <h2 className="text-lg font-bold text-[#ecc970]">
              Brands, Press, Investors
            </h2>

            <p className="mt-3 text-white/80">
              Use email for partnership inquiries, media requests, sponsorship discussions, and
              investor or platform coordination.
            </p>

            <p className="mt-5 text-sm text-white/70">
              Email:{" "}
              <a className="underline hover:text-white" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </p>
          </div>

          {/* Existing RDI creators */}
          <div className="rdi-card rdi-reveal rdi-delay-150 rounded-3xl border border-[#241d20] bg-[#241d20]/20 p-8">
            <h2 className="text-lg font-bold text-[#ecc970]">
              Existing RDI Creators
            </h2>

            <p className="mt-3 text-white/80">
              For active creator support, account issues, internal matters, and routed requests,
              use email with clear context so your inquiry can be handled efficiently.
            </p>

            <p className="mt-5 text-sm text-white/70">
              Helpful context (when applicable): username, platform, region, and a short summary
              of the issue.
            </p>
          </div>

          {/* Non-RDI creators */}
          <div className="rdi-card rdi-reveal rdi-delay-150 rounded-3xl border border-[#241d20] bg-[#241d20]/20 p-8">
            <h2 className="text-lg font-bold text-[#ecc970]">
              Creators Not Yet Affiliated
            </h2>

            <p className="mt-3 text-white/80">
              Red Diamonds International is not an open-signup agency. If you are seeking
              development, structure, or advancement within the RDI ecosystem, begin with formal
              consideration.
            </p>

            <div className="mt-5">
              <Link
                href="/apply"
                className="inline-flex rounded-xl bg-[#d13027] px-5 py-3 font-semibold text-white hover:bg-[#97261f]"
              >
                Apply for Consideration
              </Link>
            </div>

            <p className="mt-4 text-sm text-white/70">
              This ensures your information enters the correct evaluation pipeline.
            </p>
          </div>
        </div>

        {/* FOLLOW (visibility only) */}
        <div className="rdi-card rdi-reveal rdi-delay-200 mt-10 rounded-3xl border border-[#241d20] bg-[#241d20]/20 p-8">
          <h2 className="text-lg font-bold text-[#ecc970]">Follow for Visibility</h2>

          <p className="mt-3 text-white/80">
            For public-facing updates, follow Red Diamonds International on TikTok.
            This is not a support or contact channel.
          </p>

          {TIKTOK_URL ? (
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-xl border border-[#241d20] px-5 py-3 font-semibold text-white/80 hover:border-[#ecc970]/60 hover:text-white"
            >
              Follow on TikTok
            </a>
          ) : (
            <p className="mt-5 text-sm text-white/60">
              TikTok link not set yet. Add your URL at the top of this file (TIKTOK_URL) when ready.
            </p>
          )}
        </div>

        {/* Quiet operational note */}
        <p className="mt-10 text-center text-sm text-white/50">
          Red Diamonds International operates with intention. Inquiries are reviewed quietly, routed deliberately,
          and answered when aligned.
        </p>
      </div>
    </main>
  );
}
