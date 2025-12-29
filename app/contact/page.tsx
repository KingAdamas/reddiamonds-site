import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-[calc(100vh-72px)] bg-[#000000] text-white">
      <div className="mx-auto max-w-5xl px-6 py-14">
        {/* HERO */}
        <div className="relative overflow-hidden rounded-3xl border border-[#241d20] bg-gradient-to-b from-[#241d20]/60 to-transparent p-10 shadow-lg">
          <div className="rdi-hero-glow" />

          <p className="text-xl font-bold text-[#ecc970]">Let’s Connect</p>

          <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
            Talk to the team.
            <span className="text-[#ecc970]"> Move with the squad.</span>
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/80">
            Whether you’re ready to join Red Diamonds International or you have questions
            about management, strategy, or support—reach out and we’ll point you in the right direction.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="rdi-btn-shine rounded-xl bg-[#d13027] px-6 py-3 font-semibold text-white hover:bg-[#97261f]"
              href="mailto:reddiamondfamilyus@gmail.com?subject=Existing%20RDI%20Content%20Creator&body=Your%20Content%20Creator%20Name%20%2B%20Platform%20%28TikTok%2C%20BIGO%2C%20etc.%29%3A%20%0ACountry%20of%20Residence%3A%20%0ACurrent%20Agency%20Manager%20%28if%20unassigned%2C%20leave%20blank%29%3A%20%0APrimary%20Reason%20for%20Contacting%20%28Referral%2C%20Ban/Restriction%2C%20etc.%29%3A%20%0AReferral%20Info%20%28Creator%20Name%20%2B%20Platform%2C%20has%20he/she%20applied%3F%29%3A%20"
            >
              Email Us
            </a>

            <Link
              href="/apply"
              className="rounded-xl border border-[#241d20] bg-transparent px-6 py-3 font-semibold text-white hover:border-[#ecc970]/60 hover:text-[#ecc970]"
            >
              Join the Squad
            </Link>
          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* LEFT: OPTIONS */}
          <div className="rounded-3xl border border-[#241d20] bg-[#241d20]/30 p-8">
            <h2 className="text-xl font-bold text-[#ecc970]">Fast ways to connect</h2>

            <div className="mt-5 space-y-4 text-white/85">
              <div className="rounded-2xl border border-[#241d20] bg-black/40 p-5">
                <p className="font-semibold">Email</p>
                <p className="mt-1 text-sm text-white/70">
                  Best for business inquiries + serious creator applications.
                </p>
                <a
                  className="mt-3 inline-block font-semibold text-[#ecc970] hover:underline"
                  href="mailto:reddiamondfamilyus@gmail.com?subject=RDI%20-%20Let%E2%80%99s%20Connect"
                >
                  reddiamondfamilyus@gmail.com
                </a>
              </div>

              <div className="rounded-2xl border border-[#241d20] bg-black/40 p-5">
                <p className="font-semibold">Instagram / TikTok</p>
                <p className="mt-1 text-sm text-white/70">
                  Best for quick questions, collaboration, and creator proof.
                </p>
                <a
                  className="mt-3 inline-block font-semibold text-[#ecc970] hover:underline"
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  tiktok.com/@_reddiamondsintl
                </a>
              </div>

              <div className="rounded-2xl border border-[#241d20] bg-black/40 p-5">
                <p className="font-semibold">WhatsApp (optional)</p>
                <p className="mt-1 text-sm text-white/70">
                  Best for international creators who prefer messaging.
                </p>
                <a
                  className="mt-3 inline-block font-semibold text-[#ecc970] hover:underline"
                  href="https://wa.me/17707505844"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: QUICK MESSAGE */}
          <div className="rounded-3xl border border-[#241d20] bg-[#241d20]/30 p-8">
            <h2 className="text-xl font-bold text-[#ecc970]">Existing RDI Content Creator</h2>
            <p className="mt-3 text-white/80">
              No portal yet—so here’s the simplest setup that still feels professional:
              send an email with a few details.
            </p>

            <div className="mt-5 rounded-2xl border border-[#241d20] bg-black/40 p-5 text-white/85">
              <p className="font-semibold">Include this info:</p>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
<li className="leading-relaxed">• Your Content Creator Name + Platform (TikTok, BIGO, etc.)</li>
<li className="leading-relaxed">• Country of Residence</li>
<li className="leading-relaxed">• Current Agency Manager (if unassigned, leave blank)</li>
<li className="leading-relaxed">• Primary Reason for Contacting (Referral, Ban/Restriction, etc.)</li>
<li className="leading-relaxed">• Referral Info: Content Creator Name + Platform, Has he/she applied?</li>
</ul>

              <a
                className="rdi-btn-shine mt-5 inline-block rounded-xl bg-[#d13027] px-6 py-3 font-semibold text-white hover:bg-[#97261f]"
                href="mailto:reddiamondfamilyus@gmail.com?subject=Existing%20RDI%20Content%20Creator&body=Your%20Content%20Creator%20Name%20%2B%20Platform%20%28TikTok%2C%20BIGO%2C%20etc.%29%3A%20%0ACountry%20of%20Residence%3A%20%0ACurrent%20Agency%20Manager%20%28if%20unassigned%2C%20leave%20blank%29%3A%20%0APrimary%20Reason%20for%20Contacting%20%28Referral%2C%20Ban%2FRestriction%2C%20etc.%29%3A%20%0AReferral%20Info%20%28Content%20Creator%20Name%20%2B%20Platform%2C%20Has%20he%2Fshe%20applied%3F%29%3A%20"
                target="_blank"
                rel="noreferrer noopener"
              >
                Send a Message
              </a>

              <p className="mt-4 text-xs text-white/60">
                Next upgrade (when you’re ready): we’ll replace this with a real form + automatic routing.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-sm text-white/60">
          <Link href="/" className="hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
