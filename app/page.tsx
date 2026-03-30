export default function Page() {
  return (
    <div>
      {/* Existing content... */}

      {/* What We Offer Section */}
      <section className="rounded-[2.5rem] border-[#1a1a1a] bg-[#0a0a0a] p-8 md:p-20 shadow-2xl">
        <div className="text-xs font-bold uppercase tracking-[0.4em] text-[#ecc970]">
          THE COMMUNITY & VISIBILITY HUB
        </div>
        <h2 className="text-4xl md:text-7xl font-extrabold uppercase tracking-tighter italic leading-[1.1]">
          WHERE CREATORS BUILD
          <br />
          AUDIENCE, INCOME,
          <br />
          AND <span className="text-[#d13027]">VISIBILITY.</span>
        </h2>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-white">
          {/* Include the exact body copy here */}
        </p>
        <a
          href="https://rdi-collection-shop.fourthwall.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#d13027] px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#b02821]"
        >
          EXPLORE THE COLLECTION
        </a>
      </section>

      {/* Red Diamond Collection Section */}
      <section className="mt-10 rounded-[2.5rem] border-[#1a1a1a] bg-[#0a0a0a] p-8 md:p-20 shadow-2xl">
        <div className="text-xs font-bold uppercase tracking-[0.4em] text-[#ecc970]">
          THE COMMUNITY & VISIBILITY HUB
        </div>
        <h2 className="text-4xl md:text-7xl font-extrabold uppercase tracking-tighter italic leading-[1.1]">
          WHERE CREATORS BUILD
          <br />
          AUDIENCE, INCOME,
          <br />
          AND <span className="text-[#d13027]">VISIBILITY.</span>
        </h2>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-white">
          Red Diamond Collection is the community and creator visibility hub of the RDI ecosystem. It gives creators a place to strengthen content, build supporter income, and increase visibility with both audiences and future partners.
        </p>
        <a
          href="https://rdi-collection-shop.fourthwall.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#d13027] px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#b02821]"
        >
          EXPLORE THE COLLECTION
        </a>
      </section>

      {/* Closing area... */}
    </div>
  );
}