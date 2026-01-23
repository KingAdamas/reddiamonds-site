import Link from 'next/link';

export default function Process() {
  const phases = [
    { title: "Identification", desc: "We track high-potential creators on TikTok and Bigo Live who exhibit the discipline required for elite management." },
    { title: "Validation", desc: "Candidates undergo a rigorous testing phase to engineer performance metrics and ensure operational alignment." },
    { title: "Scaling", desc: "Validated creators gain access to proprietary monetization leverage and global brand positioning." }
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#d13027]">
      <div className="mx-auto max-w-4xl px-6 pt-32 pb-40 md:pt-48">
        <h1 className="text-4xl font-extrabold uppercase tracking-tighter md:text-6xl italic leading-tight">
          The <span className="text-[#d13027]">Pipeline.</span>
        </h1>
        <div className="mt-16 space-y-20 text-left">
          {phases.map((phase, index) => (
            <section key={index} className="border-l border-[#241d20] pl-8">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ecc970]">Phase 0{index + 1}</p>
              <h2 className="mt-2 text-2xl font-bold uppercase tracking-tight">{phase.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-400 max-w-2xl">{phase.desc}</p>
              {index === 1 && (
                <div className="mt-6 border-l-2 border-[#d13027] pl-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 italic">
                    Progression is performance-based, not time-based.
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>
        <div className="mt-20">
          <Link href="/apply" className="text-sm font-bold uppercase tracking-widest text-[#d13027] hover:underline">
            Initiate Pipeline Consideration →
          </Link>
        </div>
      </div>
    </main>
  );
}
