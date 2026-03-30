import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#d13027]">
      <div className="mx-auto max-w-6xl px-6 pt-4 md:pt-12 pb-40 md:pt-48">
        
        {/* THE HERO CARD */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#1a1a1a] bg-[#0a0a0a] p-8 md:p-20 text-center shadow-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#ecc970]">
            WHERE CREATORS ARE REFINED, NOT RECRUITED.
          </p>

          <h1 className="mt-8 text-4xl font-extrabold uppercase tracking-tighter md:text-7xl italic leading-[1.1] mb-4">
            WHERE CREATOR POTENTIAL<br />
            MEETS <span className="text-[#d13027]">REAL OPPORTUNITY</span>
          </h1>
                
          <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-white">
            Red Diamonds International identifies emerging creators, refines digital talent, and prepares select individuals for stronger monetization, brand readiness, and real content opportunities.
          </p>

          {/* GEOGRAPHIC CREDIBILITY ANCHOR */}
          <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.4em] text-[#ecc970]/50">
            BUILDING A TRUSTED PIPELINE OF DIGITAL TALENT ACROSS THE US, CANADA, UK, NIGERIA and SOUTH AFRICA.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-6 md:flex-row">
            <Link 
              href="/process" 
              className="w-full rounded-full bg-[#d13027] px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#b02821] md:w-auto"
            >
              The Process
            </Link>
            <Link 
              href="/apply" 
              className="w-full rounded-full border border-[#241d20] bg-white/5 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10 md:w-auto"
            >
              Apply for Consideration.
            </Link>
          </div>
        </div>

        {/* WHAT WE OFFER SECTION */}
        <div className="mt-32 rounded-[2.5rem] border border-[#1a1a1a] bg-[#0a0a0a] p-8 md:p-20 shadow-2xl">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end border-b border-[#1a1a1a] pb-10">
            <div>
              <h2 className="text-4xl font-extrabold uppercase tracking-tighter italic">What We Offer</h2>
              <p className="mt-4 text-sm font-medium italic text-white">Refinement isn't a service. It's a system.</p>
            </div>
            <p className="mt-6 md:mt-0 text-[10px] font-bold uppercase tracking-[0.4em] text-[#ecc970]/50">
              Not everyone qualifies. That's the point.
            </p>
          </div>

          <div className="mt-16 grid gap-16 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">Content Refinement</h3>
              <p className="mt-4 text-white leading-relaxed">
                We strengthen creator positioning, improve content direction, and help turn raw potential into clearer digital value.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">Monetization Strategy</h3>
              <p className="mt-4 text-white leading-relaxed">
                We build more intentional monetization pathways designed for sustainability, stronger audience conversion, and long term growth.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">Structured Development</h3>
              <p className="mt-4 text-white leading-relaxed">
                We provide a more disciplined pathway for creators ready to operate with consistency, accountability, and professional standards.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">Opportunity Readiness</h3>
              <p className="mt-4 text-white leading-relaxed">
                Select creators gain access to development, tools, and strategic support designed to prepare them for stronger monetization and future opportunities.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}