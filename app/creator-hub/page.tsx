import Link from "next/link";
import Image from "next/image";

export const metadata = { robots: "noindex, nofollow" };

const RESOURCES = [
  { title: "Training", desc: "Structured development modules and live workflows." },
  { title: "Payouts & Targets", desc: "Clear targets, payout timing, and performance expectations." },
  { title: "Weekly Tips", desc: "Weekly execution notes to keep performance consistent." },
  { title: "Support Form", desc: "Submit issues, requests, and operational questions." },
  { title: "Policy & Expectations", desc: "Behavior, content, and platform compliance standards." },
  { title: "Platform Resources", desc: "Platform tools, links, and reference material." },
];

const STANDARDS = [
  "Consistency",
  "Professionalism",
  "Coachability",
  "Communication",
  "Accountability",
];

export default function CreatorHubPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#d13027]">
      <div className="mx-auto max-w-6xl px-6 pt-4 pb-40 md:pt-12 md:pt-48">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-[2.5rem] border border-[#1a1a1a] bg-[#0a0a0a] p-8 text-center shadow-2xl md:p-20">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-white/60">
            INTERNAL CREATOR INFRASTRUCTURE
          </p>

          <h1 className="mt-8 text-4xl font-extrabold uppercase tracking-tighter italic leading-[1.1] md:text-7xl">
            THE RDI CREATOR HUB
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white">
            The infrastructure for refined talent. A dedicated ecosystem for active TikTok Live and BIGO Live hosts.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-6 md:flex-row">
            <a
              href="https://www.tiktok.com/t/ZTkjDy9aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-[#ff0000] px-10 py-5 text-sm font-bold uppercase tracking-widest text-white hover:bg-[#cc0000] md:w-auto"
            >
              Get Your TikTok Invitation Code
            </a>

            <Link
              href="#enrollment"
              className="w-full rounded-full border border-[#241d20] bg-white/5 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 md:w-auto"
            >
              Agency Enrollment
            </Link>
          </div>
        </section>

        {/* ENROLLMENT */}
        <section
          id="enrollment"
          className="mt-32 rounded-[2.5rem] border border-[#1a1a1a] bg-[#0a0a0a] p-8 shadow-2xl md:p-20"
        >
          <div className="border-b border-[#1a1a1a] pb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-white/60">
              AGENCY ENROLLMENT
            </p>
            <h2 className="mt-6 text-4xl font-extrabold uppercase tracking-tighter italic md:text-6xl">
              Join System
            </h2>
          </div>

          <div className="mt-16 grid gap-14 md:grid-cols-2">
            {/* TikTok */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">
                TikTok Live (US Region)
              </h3>

              <div className="mt-8 flex flex-col items-center gap-4 md:items-start">
                <a
                  href="https://www.tiktok.com/t/ZTkjDy9aa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full bg-[#ff0000] px-8 py-4 text-center text-sm font-bold uppercase tracking-widest text-white hover:bg-[#cc0000] md:w-auto"
                >
                  Get Your TikTok Invitation Code
                </a>

                <p className="max-w-xl text-white/90">
                  Manual guide: <span className="font-semibold">Settings and privacy</span> &gt;{" "}
                  <span className="font-semibold">Creator tools</span> &gt;{" "}
                  <span className="font-semibold">LIVE Center</span> &gt;{" "}
                  <span className="font-semibold">Creator Network Center</span>.
                </p>
              </div>

              <div className="mt-10 overflow-hidden rounded-2xl border border-[#1a1a1a] bg-black">
                <div className="p-4 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/60">
                    Reference Screen
                  </p>
                </div>

                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/language_english.jpg"
                    alt="TikTok Creator Network Center screen reference"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 520px"
                    priority={false}
                  />
                </div>

                <div className="border-t border-[#1a1a1a] p-6 text-center">
                  <ol className="mx-auto max-w-xl space-y-3 text-sm text-white/90">
                    <li>Open the Creator Network Center.</li>
                    <li>Locate your invitation code on screen.</li>
                    <li>Copy the invitation code and share it with the Creator Network Manager.</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* BIGO */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">
                BIGO Live (Regional)
              </h3>

              <div className="mt-8 flex flex-col items-center gap-4 md:items-start">
                <a
                  href="/contact"
                  className="w-full rounded-full bg-[#ff0000] px-8 py-4 text-center text-sm font-bold uppercase tracking-widest text-white hover:bg-[#cc0000] md:w-auto"
                >
                  Join Bigo Agency (US/Canada)
                </a>

                <a
                  href="/contact"
                  className="w-full rounded-full border border-[#241d20] bg-white/5 px-8 py-4 text-center text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 md:w-auto"
                >
                  Join Bigo Agency (UK/Ireland)
                </a>

                <p className="max-w-xl text-white/90">
                  If you are unsure which region applies, use the contact form and select the closest match.
                </p>
              </div>

              {/* Downloads row */}
              <div className="mt-12 rounded-2xl border border-[#1a1a1a] bg-black p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/60 text-center md:text-left">
                  Downloads
                </p>

                <div className="mt-5 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start">
                  <a
                    href="https://www.bigo.tv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70 hover:text-white transition-colors"
                  >
                    Download Bigo Live
                  </a>

                  <span className="hidden md:block text-white/20">•</span>

                  <a
                    href="https://www.tiktok.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70 hover:text-white transition-colors"
                  >
                    Download TikTok
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RESOURCE GRID */}
        <section className="mt-32 rounded-[2.5rem] border border-[#1a1a1a] bg-[#0a0a0a] p-8 shadow-2xl md:p-20">
          <div className="border-b border-[#1a1a1a] pb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-white/60">
              RESOURCES
            </p>
            <h2 className="mt-6 text-4xl font-extrabold uppercase tracking-tighter italic md:text-6xl">
              Grid
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-[#1a1a1a] bg-[#111111] p-8 text-center sm:text-left"
              >
                <h3 className="text-sm font-bold uppercase tracking-widest text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* STANDARDS */}
        <section className="mt-32 rounded-[2.5rem] border border-[#1a1a1a] bg-[#0a0a0a] p-8 shadow-2xl md:p-20">
          <div className="border-b border-[#1a1a1a] pb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-white/60">
              EXPECTATIONS
            </p>
            <h2 className="mt-6 text-4xl font-extrabold uppercase tracking-tighter italic md:text-6xl">
              Standards
            </h2>
          </div>

          {/* Using a simple icon bullet approach (consistent with your typography + spacing) */}
          <ul className="mx-auto mt-14 grid max-w-3xl gap-5 text-center md:text-left">
            {STANDARDS.map((item) => (
              <li key={item} className="flex items-center justify-center gap-3 md:justify-start">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#d13027]" />
                <span className="text-sm font-bold uppercase tracking-widest text-white/90">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
