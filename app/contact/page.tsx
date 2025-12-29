import Link from "next/link";

export default function ContactPage() {
  const email = "reddiamondfamilyus@gmail.com";

  const subject = encodeURIComponent("Existing RDI Content Creator");
  const body = encodeURIComponent(
    [
      "Your Content Creator Name + Platform (TikTok, BIGO, etc.): ",
      "Country of Residence: ",
      "Current Agency Manager (if unassigned, leave blank): ",
      "Primary Reason for Contacting (Referral, Ban/Restriction, etc.): ",
      "Referral Info: Content Creator Name + Platform, Has he/she applied?: ",
    ].join("\n")
  );

  const mailto = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <main className="min-h-[calc(100vh-72px)] bg-[#000000] text-white">
      <div className="mx-auto max-w-5xl px-6 py-14">
        {/* HERO */}
        <div className="relative overflow-hidden rounded-3xl border border-[#241d20] bg-gradient-to-br from-[#241d20]/60 via-transparent to-transparent p-10 shadow-lg">
          {/* If you have this glow class in your CSS, it’ll show; if not, it’s harmless */}
          <div className="rdi-hero-glow" />

          <p className="text-sm font-semibold tracking-widest text-[#ecc970]/90">
            Let&apos;s Connect
          </p>

          <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
            Talk to the team.{" "}
            <span className="text-[#ecc970]">Move with the squad.</span>
          </h1>

          <p className="mt-4 max-w-3xl text-white/80 text-lg leading-relaxed">
            Whether you&apos;re ready to join Red Diamonds International or you have
            questions about management, strategy, or support—reach out and we&apos;ll
            point you in the right direction.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${email}`}
              className="rdi-btn-shine inline-block rounded-xl bg-[#d13027] px-6 py-3 font-semibold text-white hover:bg-[#97261f]"
            >
              Email Us
            </a>

            <Link
              href="/apply"
              className="inline-block rounded-xl border border-[#241d20] bg-transparent px-6 py-3 font-semibold text-white hover:border-[#ecc970]/60 hover:text-[#ecc970]"
            >
              Join the Squad
            </Link>
          </div>
        </div>

        {/* CARDS */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* FAST WAYS */}
          <div className="rounded-3xl border border-[#241d20] bg-[#241d20]/30 p-8">
            <h2 className="text-xl font-bold text-[#ecc970]">Fast ways to connect</h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-[#241d20] bg-[#000000]/30 p-5">
                <p className="font-semibold">Email</p>
                <p className="mt-1 text-sm text-white/70">
                  Best for business inquiries + serious creator applications.
                </p>
                <a
                  className="mt-3 inline-block font-semibold text-[#ecc970] hover:underline"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
              </div>

              <div className="rounded-2xl border border-[#241d20] bg-[#000000]/30 p-5">
                <p className="font-semibold">Instagram / TikTok</p>
                <p className="mt-1 text-sm text-white/70">
                  Best for quick questions, collaboration, and creator proof.
                </p>
                <a
                  className="mt-3 inline-block font-semibold text-[#ecc970] hover:underline"
                  href="https://www.tiktok.com/@_reddiamondsintl"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  tiktok.com/@_reddiamondsintl
                </a>
              </div>

              <div className="rounded-2xl border border-[#241d20] bg-[#000000]/30 p-5">
                <p className="font-semibold">WhatsApp (optional)</p>
                <p className="mt-1 text-sm text-white/70">
                  Best for international creators who prefer messaging.
                </p>
                <span className="mt-3 inline-block font-semibold text-[#ecc970]/70">
                  Message on WhatsApp (add link later)
                </span>
              </div>
            </div>
          </div>

          {/* EXISTING CREATOR */}
          <div className="rounded-3xl border border-[#241d20] bg-[#241d20]/30 p-8">
            <h2 className="text-xl font-bold text-[#ecc970]">
              Existing RDI Content Creator
            </h2>

            <p className="mt-3 text-white/70">
              Have a quick question? Have a referral? Send us an email with the
              details below.
            </p>

            <div className="mt-6 rounded-2xl border border-[#241d20] bg-[#000000]/30 p-5">
              <p className="font-semibold">Include this info:</p>

              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li>
                  <span className="text-[#ecc970]">• </span>
                  Your Content Creator Name + Platform (TikTok, BIGO, etc.)
                </li>
                <li>
                  <span className="text-[#ecc970]">• </span>
                  Country of Residence
                </li>
                <li>
                  <span className="text-[#ecc970]">• </span>
                  Current Agency Manager (if unassigned, leave blank)
                </li>
                <li>
                  <span className="text-[#ecc970]">• </span>
                  Primary Reason for Contacting (Referral, Ban/Restriction, etc.)
                </li>
                <li>
                  <span className="text-[#ecc970]">• </span>
                  Referral Info: Content Creator Name + Platform, Has he/she applied?
                </li>
              </ul>

              <a
                className="rdi-btn-shine mt-5 inline-block rounded-xl bg-[#d13027] px-6 py-3 font-semibold text-white hover:bg-[#97261f]"
                href={mailto}
                target="_blank"
                rel="noreferrer noopener"
              >
                Send a Message
              </a>

              <p className="mt-4 text-xs text-white/60">
                Next upgrade (when you&apos;re ready): we&apos;ll replace this with a real
                form + automatic routing.
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
