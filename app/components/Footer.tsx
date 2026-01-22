import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-[#241d20] py-12 text-center">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Line 1: Brand & Parent Company */}
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white">
          © 2026 Red Diamonds International — A brand of Rare Sighting, LLC | Atlanta, GA, USA
        </p>

        {/* Line 2: Mission Statement based on RDI Documentation */}
        <p className="mt-4 text-[10px] leading-relaxed max-w-2xl mx-auto text-white/50 italic px-4">
          A creator development and validation company providing the infrastructure required to turn potential into performance.
        </p>

        {/* Line 3: Email (All Caps, Centered, Own Line) */}
        <div className="mt-10">
          <a 
            href="mailto:reddiamondfamilyus@gmail.com" 
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:text-[#ecc970] transition-colors"
          >
            REDDIAMONDFAMILYUS@GMAIL.COM
          </a>
        </div>

        {/* Line 4: Legal Links (All Caps, Centered, Next Line) */}
        <div className="mt-5 flex justify-center gap-x-10 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
        </div>

      </div>
    </footer>
  );
}
