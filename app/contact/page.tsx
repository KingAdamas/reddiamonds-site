"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-[64px] bg-[#000000] text-white">
      {/* 64px header clearance + 16px (pt-4) elite gap for perfect alignment */}
      <div className="mx-auto max-w-5xl px-6 pt-4 pb-20">
        
        {/* PAGE HEADER */}
        <div className="border-b border-[#241d20] pb-12 text-center">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#ecc970]">
            Inquiries
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Let&apos;s Connect.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-400">
            Red Diamonds International operates with high-level precision. We respond to inquiries that align with our operational standards and professional conduct.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          
          {/* LEFT COLUMN: INQUIRY CATEGORIES */}
          <div className="space-y-8">
            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d13027]">Creators</h2>
              <p className="mt-2 text-sm text-white">Validation Pipeline</p>
              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                For creators ready to move from chaos to control. We identify potential and provide the infrastructure for professional scale.
              </p>
              <Link href="/apply" className="mt-4 inline-block text-[10px] font-bold uppercase tracking-widest text-[#ecc970] hover:text-white transition-colors">Apply for Consideration &rarr;</Link>
            </div>

            <div className="pt-4">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d13027]">Brands &amp; Operations</h2>
              <p className="mt-2 text-sm text-white">Strategic Infrastructure</p>
              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                Access a pipeline of validated talent or inquire about our asset management and operational systems.
              </p>
              <a href="mailto:reddiamondfamilyus@gmail.com" className="mt-4 inline-block text-[10px] font-bold uppercase tracking-widest text-[#ecc970] hover:text-white transition-colors">Direct Inquiry &rarr;</a>
            </div>

            <div className="pt-8 border-t border-[#241d20]">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Direct Line</p>
              <p className="mt-2 text-sm font-bold">REDDIAMONDFAMILYUS@GMAIL.COM</p>
              <p className="mt-1 text-[10px] text-gray-500 uppercase tracking-widest">Atlanta, GA, USA</p>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="rounded-3xl border border-[#241d20] bg-[#0a0a0a]/50 p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <h3 className="text-xl font-bold text-[#ecc970] uppercase tracking-widest">Message Sent</h3>
                <p className="mt-4 text-sm text-gray-400">Your inquiry has been logged in our system.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input required type="text" placeholder="NAME" className="w-full bg-black border border-[#241d20] rounded-xl px-4 py-4 text-xs focus:border-[#ecc970] outline-none transition-colors" />
                <input required type="email" placeholder="EMAIL ADDRESS" className="w-full bg-black border border-[#241d20] rounded-xl px-4 py-4 text-xs focus:border-[#ecc970] outline-none transition-colors" />
                <select required className="w-full bg-black border border-[#241d20] rounded-xl px-4 py-4 text-xs focus:border-[#ecc970] outline-none text-gray-400">
                  <option value="">INQUIRY TYPE</option>
                  <option value="brand">BRAND PARTNERSHIP</option>
                  <option value="business">BUSINESS / OPERATIONS</option>
                  <option value="other">OTHER</option>
                </select>
                <textarea required placeholder="MESSAGE" rows={4} className="w-full bg-black border border-[#241d20] rounded-xl px-4 py-4 text-xs focus:border-[#ecc970] outline-none transition-colors resize-none"></textarea>
                <button type="submit" className="w-full rounded-full bg-[#d13027] py-4 text-[10px] font-bold uppercase tracking-[0.4em] text-white transition-all hover:bg-[#b02821]">
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
