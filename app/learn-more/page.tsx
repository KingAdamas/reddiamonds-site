export default function LearnMorePage() {
  return (
    <main className="min-h-[calc(100vh-72px)] bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="rounded-3xl border border-[#241d20] bg-gradient-to-br from-[#241d20]/40 to-transparent p-10">
          <p className="text-sm tracking-widest text-[#ecc970]/90 uppercase">
            Learn More
          </p>

          <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
            Elite strategy. Real management. Global results.
          </h1>

          <p className="mt-4 text-white/80 text-lg leading-relaxed max-w-3xl">
            Red Diamonds International helps creators build repeatable growth, improve live performance,
            and scale reward earnings with structured coaching and high-level support.
          </p>

          <div className="mt-8 rounded-2xl border border-[#241d20] bg-black/40 p-6">
            <h2 className="text-xl font-bold text-[#ecc970]">What you’ll get</h2>
            <ul className="mt-4 space-y-3 text-white/85">
              <li>• Performance coaching tailored to your platform and region</li>
              <li>• Monetization strategy focused on repeatable reward growth</li>
              <li>• Support systems for consistency, retention, and community</li>
              <li>• Access to resources and workflows as the RDI library expands</li>
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:reddiamondfamilyus@gmail.com"
              className="rounded-xl bg-[#d13027] px-6 py-3 font-semibold text-white hover:bg-[#97261f]"
            >
              Email Us
            </a>
            <a
              href="https://www.tiktok.com/@_reddiamondsintl"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-xl border border-[#241d20] bg-transparent px-6 py-3 font-semibold text-white hover:border-[#ecc970]/60 hover:text-[#ecc970]"
            >
              Visit TikTok
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
