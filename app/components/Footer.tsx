import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-[#241d20] py-6 text-center text-white/40">
      <div className="mx-auto max-w-5xl px-6">
        {/* Line 1: Brand & Parent Company */}
        <p className="text-[10px] font-semibold tracking-[0.3em] uppercase">
          © 2026 Red Diamonds International — A brand of Rare Sighting, LLC | Atlanta, GA, USA
        </p>

        {/* Line 2: The Infrastructure Statement */}
        <p className="mt-2 text-[9px] leading-relaxed max-w-2xl mx-auto opacity-70">
          A creator development and validation company providing the structure needed to turn potential into performance.
        </p>

        {/* Line 3: Contact & Legal */}
        <div className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[9px] uppercase tracking-widest font-bold">
          <a href="mailto:reddiamondfamilyus@gmail.com" className="hover:text-[#ecc970] transition-colors">reddiamondfamilyus@gmail.com</a>
          <Link href="/privacy" className="hover:text-[#ecc970]">Privacy</Link>
          <Link href="/terms" className="hover:text-[#ecc970]">Terms</Link>
          <Link href="/cookies" className="hover:text-[#ecc970]">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
