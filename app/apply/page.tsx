import Link from "next/link";

export default function ApplyPage() {
  return (
    <main className="min-h-screen pt-[92px] bg-[#000000] text-white">
      <div className="mx-auto max-w-3xl px-6 py-14">
        
        {/* HEADER SECTION */}
        <div className="rdi-card animate-in fade-in slide-in-from-bottom-8 duration-1000 relative overflow-hidden rounded-3xl border border-[#241d20] bg-gradient-to-b from-[#241d20]/60 to-transparent p-10 shadow-lg mb-10 text-center">
          <div className="rdi-hero-glow" />
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#ecc970]">
            Candidate Intake
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
            Apply for Consideration
          </h1>
          <p className="mx-auto mt-4 max-w-md text-gray-300">
            Submit your profile for evaluation. We review creators based on consistency, 
            momentum, and brand alignment.
          </p>
        </div>

        {/* APPLICATION FORM */}
        <div className="rdi-card animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 rounded-3xl border border-[#241d20] bg-[#241d20]/30 p-8 md:p-12 shadow-2xl">
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#ecc970] mb-2">Legal Name</label>
                <input type="text" placeholder="Full Name" className="w-full bg-black/50 border border-[#241d20] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d13027] transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#ecc970] mb-2">Creator Alias</label>
                <input type="text" placeholder="@username" className="w-full bg-black/50 border border-[#241d20] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d13027] transition-colors" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#ecc970] mb-2">Primary Platform (TikTok / Bigo Live)</label>
              <input type="text" placeholder="Where do you operate?" className="w-full bg-black/50 border border-[#241d20] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d13027] transition-colors" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#ecc970] mb-2">Email Address</label>
              <input type="email" placeholder="email@example.com" className="w-full bg-black/50 border border-[#241d20] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d13027] transition-colors" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#ecc970] mb-2">Professional Summary</label>
              <textarea rows={4} placeholder="Briefly describe your goals and current momentum..." className="w-full bg-black/50 border border-[#241d20] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d13027] transition-colors 
resize-none"></textarea>
            </div>

            <div className="pt-4">
              <button 
                type="button"
                className="rdi-btn-shine rdi-btn-pulse w-full rounded-xl bg-[#d13027] py-4 font-bold text-white hover:bg-[#97261f] transition-all uppercase tracking-widest"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-10 text-center">
          <p className="text-sm text-white/40 italic">
            Submission of this form does not guarantee representation. All candidates undergo a multi-step observation period.
          </p>
          <Link href="/process" className="inline-block mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[#ecc970] hover:text-white transition-colors">
            Review the process again
          </Link>
        </div>

      </div>
    </main>
  );
}
