'use client';

import React from 'react';

export default function FAQ() {
  return (
    <div className="min-h-screen bg-[#8B0000] text-black font-sans selection:bg-white selection:text-[#8B0000]">
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        <section>
          <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-20 text-center shadow-2xl">
            <h1 className="text-4xl md:text-7xl font-black italic tracking-tighter text-black mb-6 leading-[1.1]">
              FAQ
            </h1>
            <p className="max-w-2xl mx-auto text-black/80 text-sm md:text-lg leading-relaxed font-medium italic">
              Frequently asked questions about applying, the development process, and what to expect as an RDI creator are coming soon.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
