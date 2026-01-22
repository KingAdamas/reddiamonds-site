// app/process/page.tsx
import Link from "next/link";

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        {/* HERO */}
        <section className="rounded-2xl border border-white/10 bg-rd-gray/30 p-6 shadow-sm sm:p-8">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            The Process
          </h1>

          <p className="mt-4 max-w-3xl text-white/90">
            This is a structured evaluation pathway. We observe, score, and
            refine creators based on performance, discipline, alignment, and
            readiness.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-rd-red px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-rd-red-dark"
            >
              Begin Consideration
            </Link>

            {/* Mobile only */}
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white/90 hover:border-white/25 hover:text-white md:hidden"
            >
              Back to Home
            </Link>
          </div>
        </section>

        {/* 4 STEP PROCESS */}
        <section className="mt-8 rounded-2xl border border-white/10 bg-rd-gray/20 p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-rd-gold sm:text-2xl">
            The 4 step pathway
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-rd-gray/30 p-5">
              <div className="text-sm font-semibold text-white/80">Step 1</div>
              <h3 className="mt-1 text-lg font-semibold">Submit for consideration</h3>
              <p className="mt-2 text-white/90">
                You apply and enter review. This confirms interest and starts
                evaluation, not placement.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-rd-gray/30 p-5">
              <div className="text-sm font-semibold text-white/80">Step 2</div>
              <h3 className="mt-1 text-lg font-semibold">Observation</h3>
              <p className="mt-2 text-white/90">
                We watch your content and live behavior over time. Consistency
                and signal quality matter.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-rd-gray/30 p-5">
              <div className="text-sm font-semibold text-white/80">Step 3</div>
              <h3 className="mt-1 text-lg font-semibold">Evaluation</h3>
              <p className="mt-2 text-white/90">
                We assess performance, discipline, alignment, and readiness. The
                standard is refinement, not hype.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-rd-gray/30 p-5">
              <div className="text-sm font-semibold text-white/80">Step 4</div>
              <h3 className="mt-1 text-lg font-semibold">Advancement</h3>
              <p className="mt-2 text-white/90">
                When you meet the standard, you can be invited into active
                development and monetization pathways.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT WE EVALUATE */}
        <section className="mt-6 rounded-2xl border border-white/10 bg-rd-gray/20 p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-rd-gold sm:text-2xl">
            What we evaluate
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-white/90">
            <li>Consistency and momentum</li>
            <li>Live performance and audience control</li>
            <li>Communication, presence, and professionalism</li>
            <li>Discipline and follow through</li>
            <li>Brand alignment and long term potential</li>
          </ul>
        </section>

        {/* WHAT ACCEPTANCE MEANS */}
        <section className="mt-6 rounded-2xl border border-white/10 bg-rd-gray/30 p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-rd-gold sm:text-2xl">
            What acceptance means
          </h2>

          <div className="mt-4 space-y-3 text-white/90">
            <p>
              Acceptance means entry into the Red Diamonds talent pool: a group
              of creators under observation, evaluation, and ongoing
              consideration for refinement and advancement.
            </p>
            <p className="font-semibold text-white">Development is earned, not assigned.</p>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="mt-6 rounded-2xl border border-white/10 bg-rd-gray/20 p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-rd-gold sm:text-2xl">
            Timing expectations
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-white/90">
            <li>Consideration is ongoing and performance based</li>
            <li>Some creators advance quickly, others need more time and structure</li>
            <li>Consistency beats intensity</li>
          </ul>
        </section>

        {/* BOTTOM CTA AREA */}
        <section className="mt-10 rounded-2xl border border-white/10 bg-rd-gray/30 p-6 sm:p-8">
          {/* Desktop only: ONLY Begin Consideration */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-rd-red px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-rd-red-dark"
            >
              Begin Consideration
            </Link>
          </div>

          {/* Mobile only: Begin Consideration + Back to Home */}
          <div className="flex flex-col gap-3 md:hidden">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-rd-red px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-rd-red-dark"
            >
              Begin Consideration
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white/90 hover:border-white/25 hover:text-white"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

