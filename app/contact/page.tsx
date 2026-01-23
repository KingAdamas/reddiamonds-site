"use client";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen pt-[64px] bg-[#000000] text-white">
      <div className="mx-auto max-w-5xl px-6 pt-8 pb-20">
        
        <div className="border-b border-[#241d20] pb-12 text-center">
          <p className="text-sm font-bold tracking-[0.4em] uppercase text-[#ecc970]">Inquiries</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">Let&apos;s Connect.</h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-300">
            Red Diamonds International operates with high-level precision. We respond to inquiries that align with our operational standards and professional conduct.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div className="space-y-10">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#d13027]">Creators</h2>
              <p className="mt-2 text-lg text-white">Validation Pipeline</p>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                For creators ready to move from chaos to control. We identify potential and provide the infrastructure for professional scale on Bigo Live and TikTok Live.
              </p>
              <Link href="/apply" className="mt-6 inline-block text-sm font-bold uppercase tracking-widest text-[#ecc970] hover:text-white transition-colors">Apply for Consideration &rarr;</Link>
            </div>

            <div className="pt-4 border-t border-[#241d20]">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#d13027]">Brands &amp; Operations</h2>
              <p className="mt-2 text-lg text-white">Strategic Infrastructure</p>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                Access a pipeline of validated talent developed for professional scale and consistent performance.
              </p>
              <a href="mailto:reddiamondfamilyus@gmail.com" className="mt-6 inline-block text-sm font-bold uppercase tracking-widest text-[#ecc970] hover:text-white transition-colors">Direct Inquiry &rarr;</a>
            </div>
          </div>

          <div className="rounded-3xl border border-[#241d20] bg-[#0a0a0a]/50 p-10">
            {submitted ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold text-[#ecc970] uppercase tracking-widest">Message Sent</h3>
                <p className="mt-4 text-base text-gray-400">Your inquiry has been logged in our system.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                <input required type="text" placeholder="NAME" className="w-full bg-black border border-[#241d20] rounded-xl px-5 py-5 text-base focus:border-[#ecc970] outline-none" />
                <input required type="email" placeholder="EMAIL ADDRESS" className="w-full bg-black border border-[#241d20] rounded-xl px-5 py-5 text-base focus:border-[#ecc970] outline-none" />
                <textarea required placeholder="MESSAGE" rows={4} className="w-full bg-black border border-[#241d20] rounded-xl px-5 py-5 text-base focus:border-[#ecc970] outline-none resize-none"></textarea>
                <button type="submit" className="w-full rounded-full bg-[#d13027] py-6 text-sm font-bold uppercase tracking-[0.4em] text-white transition-all hover:bg-[#b02821]">
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
