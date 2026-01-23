export default function Apply() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#d13027]">
      <div className="mx-auto max-w-4xl px-6 pt-32 pb-40 md:pt-48">
        <h1 className="text-4xl font-extrabold uppercase tracking-tighter md:text-6xl italic leading-tight text-center">
          Begin <span className="text-[#d13027]">Consideration.</span>
        </h1>
        <p className="mx-auto mt-10 text-lg leading-relaxed text-gray-400 max-w-2xl text-center">
          Apply for management within the RDI infrastructure. Note: Selection is highly competitive and restricted to creators who meet elite operational standards.
        </p>
        <div className="mt-12 text-center border-t border-[#241d20] pt-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/30">
            Not selected yet does not mean not qualified.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <button className="w-full rounded-full bg-[#d13027] px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#b02821] md:w-auto">
            Submit Application
          </button>
        </div>
      </div>
    </main>
  );
}
