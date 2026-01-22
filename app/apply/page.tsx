// app/apply/page.tsx
import Link from "next/link";

export default function ApplyPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      {/* HERO */}
      <section className="rounded-2xl border border-white/10 bg-rd-gray/30 p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Apply for Consideration
        </h1>

        {/* Removed: "This is not an open signup" */}

        <div className="mt-5 space-y-4 text-white/90">
          {/* Keep only the second paragraph (condensed for mobile readability) */}
          <p>
            Acceptance means entry into the Red Diamonds talent pool: a group of
            creators under observation, evaluation, and ongoing consideration for
            refinement and advancement.
          </p>
          <p className="font-semibold text-white">Development is earned, not assigned.</p>
        </div>

        {/* TOP CTA (Optional, keeps flow strong) */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-rd-red px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-rd-red-dark"
          >
            Begin Consideration
          </Link>

          {/* Optional: keep a quiet secondary link on larger screens near the top */}
          <Link
            href="/"
            className="hidden items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white/90 hover:border-white/25 hover:text-white md:inline-flex"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="mt-8 rounded-2xl border border-white/10 bg-rd-gray/20 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-rd-gold sm:text-2xl">
          Who this is for
        </h2>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-white/90">
          <li>Creators with momentum who need structure</li>
          <li>Live, content, or hybrid creators ready to be refined</li>
          <li>People who welcome coaching, critique, and accountability</li>
          <li>Creators focused on leverage, longevity, and control</li>
        </ul>
      </section>

      {/* WHAT THIS IS NOT */}
      <section className="mt-6 rounded-2xl border border-white/10 bg-rd-gray/20 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-rd-gold sm:text-2xl">
          What this is not
        </h2>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-white/90">
          <li>A guaranteed brand deal program</li>
          <li>A viral lottery or follow-for-follow group</li>
          <li>An open roster with automatic progression</li>
          <li>A place to test commitment without discipline</li>
        </ul>
      </section>

      {/* BOTTOM CTA AREA */}
      <section className="mt-10 rounded-2xl border border-white/10 bg-rd-gray/30 p-6 sm:p-8">
        {/* Desktop only: keep only Begin Consideration */}
        <div className="hidden md:flex md:items-center md:justify-start">
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

        {/* Removed on mobile: Understand the Process */}
        {/* Removed entirely: "Selection is intentional. Submission does not guarantee acceptance." */}
      </section>
    </main>
  );
}

