export default function Footer() {
  return (
    <footer className="border-t border-[#241d20] bg-[#000000] py-16 px-6">
      <div className="mx-auto max-w-5xl text-center space-y-4">
        {/* Main Brand Line: text-sm (14px) */}
        <p className="text-sm font-bold uppercase tracking-[0.4em] text-white/50">
          © 2026 RED DIAMONDS INTERNATIONAL
        </p>
        
        {/* Entity Line: text-xs (12px) */}
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/20">
          A BRAND OF RARE SIGHTING, LLC
        </p>
        
        {/* Location Line: text-xs (12px) */}
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/20">
          ATLANTA, GA, USA
        </p>
      </div>
    </footer>
  );
}
