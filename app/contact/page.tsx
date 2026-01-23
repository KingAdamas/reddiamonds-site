"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch("https://formspree.io/f/mwvlvgwz", {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });
    if (response.ok) {
      setStatus("SUBMITTED");
      form.reset();
    }
  };

  return (
    <main className="min-h-screen pt-[64px] bg-[#000000] text-white">
      <div className="mx-auto max-w-5xl px-6 pt-8 pb-20">

        {/* PAGE HEADER */}
        <div className="border-b border-[#241d20] pb-12 text-center">
          <p className="text-sm font-bold tracking-[0.4em] uppercase text-[#ecc970]">Inquiries</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl text-center">Let&apos;s Connect.</h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-300 text-center">
            Red Diamonds International operates with high-level precision. We respond to inquiries that align with our operational standards and professional conduct.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          
          {/* LEFT COLUMN: INQUIRY CATEGORIES */}
          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#d13027]">Creators</h2>
              <p className="mt-2 text-xl font-bold text-white">Validation Pipeline</p>
              {/* UPDATED: Increased from text-sm to text-base */}
              <p className="mt-4 text-base leading-relaxed text-gray-400">
                For creators ready to move from chaos to control. We identify potential and provide the infrastructure for professional scale on Bigo Live and TikTok Live.
              </p>
              <Link href="/apply" className="mt-6 inline-block text-sm font-bold uppercase tracking-widest text-[#ecc970] hover:text-white transition-colors">Apply for Consideration &rarr;</Link>
            </div>

            <div className="pt-8 border-t border-[#241d20]">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#d13027]">Brands &amp; Operations</h2>
              <p className="mt-2 text-xl font-bold text-white">Strategic Infrastructure</p>
              {/* UPDATED: Increased from text-sm to text-base */}
              <p className="mt-4 text-base leading-relaxed text-gray-400">
                Access a pipeline of validated talent developed for professional scale and consistent performance.
              </p>
              <a href="mailto:reddiamondfamilyus@gmail.com" className="mt-6 inline-block text-sm font-bold uppercase tracking-widest text-[#ecc970] hover:text-white transition-colors">Direct Inquiry &rarr;</a>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="rounded-3xl border border-[#241d20] bg-[#0a0a0a]/50 p-10">
            {status === "SUBMITTED" ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold text-[#ecc970] uppercase tracking-widest">Message Sent</h3>
                <p className="mt-4 text-lg text-gray-400">Your inquiry has been logged in our system.</p>
                <button onClick={() => setStatus("")} className="mt-8 text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white underline underline-offset-8">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input required name="Name" type="text" placeholder="NAME" className="w-full bg-black border border-[#241d20] rounded-xl px-5 py-5 text-base focus:border-[#ecc970] outline-none transition-colors placeholder:text-gray-600" />
                <input required name="Email" type="email" placeholder="EMAIL ADDRESS" className="w-full bg-black border border-[#241d20] rounded-xl px-5 py-5 text-base focus:border-[#ecc970] outline-none transition-colors placeholder:text-gray-600" />
                <textarea required name="Message" placeholder="MESSAGE" rows={4} className="w-full bg-black border border-[#241d20] rounded-xl px-5 py-5 text-base focus:border-[#ecc970] outline-none resize-none transition-colors 
placeholder:text-gray-600"></textarea>
                <button type="submit" className="w-full rounded-full bg-[#d13027] py-6 text-sm font-bold uppercase tracking-[0.4em] text-white transition-all hover:bg-[#b02821] hover:shadow-[0_0_20px_rgba(209,48,39,0.3)]">
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
