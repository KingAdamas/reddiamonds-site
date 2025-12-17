export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-gray-600">Red Diamonds International</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Grow your live streaming income with structure, strategy, and support.
        </h1>

        <p className="mt-5 text-lg text-gray-700">
          We help creators turn their platform into a business through training, monetization strategy,
          and agency support.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/apply"
            className="rounded-xl bg-black px-5 py-3 text-white"
          >
            Apply to the Agency
          </a>

          <a
            href="/contact"
            className="rounded-xl border border-gray-300 px-5 py-3"
          >
            Contact Us
          </a>
        </div>

        <div className="mt-12 rounded-2xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold">What we offer</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
            <li>Live performance coaching and content strategy</li>
            <li>Monetization planning (diamonds/beans/gifting growth)</li>
            <li>Recruiting, onboarding, and support for creators</li>
            <li>Resource library (coming soon)</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
