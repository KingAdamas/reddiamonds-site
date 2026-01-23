import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#d13027]">
      <div className="mx-auto max-w-4xl px-6 pt-32 pb-40 text-center md:pt-48">
        <h1 className="text-4xl font-extrabold uppercase tracking-tighter md:text-6xl italic leading-tight">
          Stop Posting.<br />
          <span className="text-[#d13027]">Start Dominating.</span>
        </h1>
        <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-gray-400">
          Elite strategy and high-level management for creators ready to operate 
          with control, not chaos. We identify potential, engineer performance, 
          and scale brands where the top 1% actually operate.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="h-[1px] w-8 bg-[#241d20]"></div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ecc970]/50">
            Operating across US, Canada, UK, MENA, and Africa
          </p>
          <div className="h-[1px] w-8 bg-[#241d20]"></div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-center gap-6 md:flex-row">
          <Link 
            href="/process" 
            className="w-full rounded-full bg-[#d13027] px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#b02821] md:w-auto shadow-[0_10px_20px_rgba(209,48,39,0.2)]"
          >
            Understand the Process
          </Link>
          <Link 
            href="/apply" 
            className="w-full rounded-full border border-[#241d20] bg-white/5 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10 md:w-auto"
          >
            Begin Consideration
          </Link>
        </div>
      </div>
    </main>
  );
}
