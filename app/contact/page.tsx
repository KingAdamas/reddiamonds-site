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
        Accept: "application/json",
      },
    });
    if (response.ok) {
      setStatus("SUBMITTED");
      form.reset();
    }
  };

  return (
    // UPDATED: Background to RDI Crimson and text selection to Crimson
    <main className="min-h-screen bg-[#8B0000] text-black font-sans selection:bg-[#8B0000] selection:text-white">
      <div className="mx-auto max-w-6xl px-6 pt-4 md:pt-12 pb-40 md:pt-48">
        
        {/* UPDATED: Card to Solid White with Zinc border */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white p-8 md:p-20 shadow-2xl">
          {status === "SUBMITTED" ? (
            <div className="py-16 text-center">
              {/* UPDATED: Success header to brand Crimson */}
              <h3 className="text-3xl font-bold text-[#8B0000] uppercase tracking-widest italic">
                Inquiry Logged.
              </h3>
              <p className="mx-auto mt-6 max-w-md text-lg text-black italic font-medium">
                Your message has been received. A member of the RDI team will follow up if your inquiry aligns with our
                current priorities and opportunities.
              </p>
              <button
                onClick={() => setStatus("")}
                className="mt-12 text-xs font-bold uppercase tracking-[0.4em] text-black/40 hover:text-[#8B0000] transition-colors"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <>
              {/* UPDATED: Bottom border to light Zinc */}
              <div className="border-b border-zinc-100 pb-10 text-center">
                {/* UPDATED: Subheader to brand Crimson */}
                <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#8B0000]">
                  Partner & Creator Inquiries
                </p>
                <h1 className="mt-6 text-4xl font-extrabold uppercase tracking-tighter md:text-7xl italic leading-tight text-black">
                  Let&apos;s <span className="text-[#8B0000]">Connect.</span>
                </h1>

                <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-black/80 font-medium italic">
                  Red Diamonds International welcomes inquiries from creators, partners, and aligned contacts seeking
                  collaboration, connection, or strategic conversation.
                </p>
              </div>

              <div className="mt-16 grid gap-12 md:grid-cols-2 text-left">
                {/* Information Side */}
                <div className="space-y-12">
                  <div>
                    {/* UPDATED: Section label to brand Crimson */}
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B0000]">
                      Global Hubs
                    </h2>
                    <p className="mt-4 text-xl font-black text-black italic leading-relaxed">
                      Atlanta • London • Dubai • Lagos
                    </p>
                  </div>
                  <div>
                    {/* UPDATED: Section label to brand Crimson */}
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B0000]">
                      Direct Channel
                    </h2>
                    <p className="mt-4 text-xl font-black text-black italic">
                      reddiamondfamilyus@gmail.com
                    </p>
                  </div>
                </div>

                {/* Form Side */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* UPDATED: Inputs to White bg, Zinc borders, and Black text */}
                  <input
                    required
                    name="Name"
                    type="text"
                    placeholder="NAME"
                    className="w-full bg-white border border-zinc-200 rounded-xl px-5 py-5 text-base text-black placeholder:text-zinc-400 font-medium italic focus:border-[#8B0000] outline-none transition-colors"
                  />
                  <input
                    required
                    name="Email"
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    className="w-full bg-white border border-zinc-200 rounded-xl px-5 py-5 text-base text-black placeholder:text-zinc-400 font-medium italic focus:border-[#8B0000] outline-none transition-colors"
                  />
                  <textarea
                    required
                    name="Message"
                    placeholder="MESSAGE"
                    rows={4}
                    className="w-full bg-white border border-zinc-200 rounded-xl px-5 py-5 text-base text-black placeholder:text-zinc-400 font-medium italic focus:border-[#8B0000] outline-none resize-none transition-colors"
                  ></textarea>
                  
                  {/* UPDATED: Button to brand Crimson */}
                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#8B0000] py-6 text-sm font-bold uppercase tracking-[0.4em] text-white transition-all hover:bg-[#a00000] shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
