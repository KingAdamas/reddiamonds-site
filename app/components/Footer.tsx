import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-[#241d20] py-10 text-center">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Line 1: Primary Entity */}
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white">
          © 2026 Red Diamonds International — A brand of Rare Sighting, LLC | Atlanta, GA, USA
        </p>

        {/* Line 2: The Validation Statement */}
        <p className="mt-3 text-[10px] leading-relaxed max-w-2xl mx-auto text-white/50 italic">
          RDI is a creator development and validation company providing the infrastructure required to turn potential into performance.
        </p>

        {/* Line 3: Email Address (Centered on its own line) */}
        <div className="mt-8">
          <a 
            href="mailto:reddiamondfamilyus@gmail.com" 
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:text-[#ecc970] transition-colors"
          >
            reddiamondfamilyus@gmail.com
          </a>
        </div>

        {/* Line 4: Legal Links (Centered on the next line) */}
        <div className="mt-4 flex justify-center gap-x-10 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
        </div>

      </div>
    </footer>
  );
}
