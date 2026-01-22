import Link from "next/link";

export default function ApplyPage() {
  return (
    <main className="min-h-[calc(100vh-72px)] bg-[#000000] text-white">
      <div className="mx-auto max-w-3xl px-6 py-14">
        <div className="rounded-3xl border border-[#241d20] bg-gradient-to-b from-[#241d20]/50 to-transparent p-10 shadow-lg">
          <p className="text-sm font-semibold tracking-wide text-[#ecc970]">
            Apply for Consideration
          </p>

          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
            Where creators are refined, not recruited.
          </h1>

          <p className="mt-4 text-white/85">
            This is not an open signup. Red Diamonds International exists to refine rare
            creator potential into dominance through structure, discipline, and high-level management.
          </p>

          <p className="mt-4 text-white/85">
            If you are looking for quick exposure, shortcuts, or guaranteed outcomes, this is not for you.
            If you are ready to operate with control, not chaos, continue.
          </p>

          <div className="mt-8 rounded-2xl border border-[#241d20] bg-black/30 p-6">
            <h2 className="text-lg font-bold text-[#ecc970]">
              What acceptance actually means
            </h2>

            <p className="mt-3 text-white/85">
              Joining Red Diamonds International does not automatically place you into active development
              or monetization pipelines.
            </p>

            <p className="mt-3 text-white/85">
              Acceptance means entry into the <span className="font-semibold text-white">Red Diamonds talent pool</span>:
              a group of creators under observation, evaluation, and ongoing consideration for refinement and advancement.
              Development is <span className="font-semibold text-white">earned</span>, not assigned.
            </p>

            <p className="mt-3 text-white/85">
              Application grants consideration, not placement. Entry into development pipelines is earned through
              performance, discipline, alignment, and readiness.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[#241d20] bg-[#241d20]/25 p-6">
              <h3 className="font-bold text-white">Who this is for</h3>
              <ul className="mt-3 space-y-2 text-white/85">
                <li>Creators with momentum who need structure.</li>
                <li>Live, content, or hybrid creators ready to be refined.</li>
                <li>People who welcome coaching, critique, and accountability.</li>
                <li>Creators focused on leverage, longevity, and control.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#241d20] bg-[#241d20]/25 p-6">
              <h3 className="font-bold text-white">What this is not</h3>
              <ul className="mt-3 space-y-2 text-white/85">
                <li>A guaranteed brand deal program.</li>
                <li>A viral lottery or follow-for-follow group.</li>
                <li>An open roster with automatic progression.</li>
                <li>A place to test commitment without discipline.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-[#241d20] bg-black/30 p-6">
            <h2 className="text-lg font-bold text-[#ecc970]">The refinement standard</h2>
            <p className="mt-3 text-white/85">
              RDI is performance-first. We build systems, not noise. We protect the standard.
              Not everyone advances, and that distinction is intentional.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-[#d13027] px-6 py-3 font-semibold text-white hover:bg-[#97261f]"
            >
              Begin Consideration
            </Link>

            <Link
              href="/learn-more"
              className="rounded-xl border border-[#241d20] bg-transparent px-6 py-3 font-semibold text-white hover:border-[#ecc970]/60 hover:text-[#ecc970]"
            >
              Understand the Process
            </Link>

            <Link
              href="/"
              className="rounded-xl border border-[#241d20] bg-transparent px-6 py-3 font-semibold text-white hover:border-[#ecc970]/60 hover:text-[#ecc970]"
            >
              Back to Home
            </Link>
          </div>

          <p className="mt-3 text-sm text-white/60">
            Selection is intentional. Submission does not guarantee acceptance.
          </p>
        </div>
      </div>
    </main>
  );
}

