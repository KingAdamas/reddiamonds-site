import Link from 'next/link';

export default function Process() {
  const phases = [
    {
      title: "Get Started",
      label: "Step 01",
      desc: "Apply and tell us where you are now. RDI works with creators at every stage, whether you've never gone live or you're already posting consistently. We get you set up and ready to start streaming on TikTok Live with confidence."
    },
    {
      title: "Build Consistency",
      label: "Step 02",
      desc: "Going live once doesn't build an audience. RDI helps you build a real streaming routine, with structure and support that turns occasional attempts into a consistent habit."
    },
    {
      title: "Grow & Develop",
      label: "Step 03",
      desc: "As you stay consistent, RDI works with you on content, presence, and audience engagement, helping you strengthen every live session and build toward monetization opportunities through TikTok Live."
    }
  ];

  return (
    <main className="min-h-screen pt-[64px] bg-[#F7F3EF] text-black selection:bg-[#8B0000] selection:text-white">
      <div className="mx-auto max-w-6xl px-6 pt-4 md:pt-12 pb-20">

        <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white p-8 md:p-20 text-center shadow-sm">

          <div className="border-b border-zinc-100 pb-12 flex flex-col items-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#8B0000]">
              How It Works
            </p>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl leading-tight text-black">
              From First Live to <span className="text-[#8B0000]">Real Growth.</span>
            </h1>
            <p className="mt-8 mx-auto max-w-2xl text-lg leading-relaxed text-black/70 font-medium">
              RDI works with creators in three stages: getting started, building consistency, and developing your presence over time. It's not a race, it's a process built around showing up.
            </p>
          </div>

          <div className="mt-20 space-y-24 text-left">
            {phases.map((phase, index) => (
              <div key={index} className="grid gap-8 md:grid-cols-12 border-t border-zinc-100 pt-16 first:border-t-0 first:pt-0">
                <div className="md:col-span-4">
                  <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#8B0000]">{phase.label}</span>
                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-black">{phase.title}</h2>
                </div>
                <div className="md:col-span-8">
                  <p className="text-base md:text-lg leading-relaxed text-zinc-600 font-medium">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 pt-10 border-t border-zinc-100">
            <p className="text-sm font-bold text-black/60 mb-8">
              Consistency and coachability matter more than where you're starting from.
            </p>
            <Link
              href="/apply"
              className="inline-block w-full md:w-auto rounded-full bg-[#8B0000] px-12 py-5 text-xs font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-[#a00000] shadow-md"
            >
              Apply to Stream
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
