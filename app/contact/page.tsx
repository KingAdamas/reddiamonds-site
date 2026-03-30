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
    <main className="min-h-screen bg-black text-white selection:bg-[#d13027]">
      <div className="mx-auto max-w-6xl px-6 pt-4 md:pt-12 pb-40 md:pt-48">
        {/* THE CONNECT HERO CARD */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#1a1a1a] bg-[#0a0a0a] p-8 md:p-20 shadow-2xl">
          {status === "SUBMITTED" ? (
            <div className="py-16 text-center">
              <h3 className="text-3xl font-bold text-[#ecc970] uppercase tracking-widest italic">
                Inquiry Logged.
              </h3>
              <p className="mx-auto mt-6 max-w-md text-lg text-white italic">
                Your message has been received. A member of the RDI team will follow up if your inquiry aligns with our
                current priorities and opportunities.
              </p>
              <button
                onClick={() => setStatus("")}
                className="mt-12 text-xs font-bold uppercase tracking-[0.4em] text-white/40 hover:text-[#d13027] transition-colors"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <>
              <div className="border-b border-[#1a1a1a] pb-10 text-center">
                <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#ecc970]">
                  Partner & Creator Inquiries
                </p>
                <h1 className="mt-6 text-4xl font-extrabold uppercase tracking-tighter md:text-7xl italic leading-tight">
                  Let&apos;s <span className="text-[#d13027]">Connect.</span>
                </h1>

                <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white">
                  Red Diamonds International welcomes inquiries from creators, partners, and opportunity aligned contacts
                  seeking connection, collaboration, or strategic conversation.
                </p>
              </div>

              <div className="mt-16 grid gap-12 md:grid-cols-2 text-left">
                {/* Information Side */}
                <div className="space-y-12">
                  <div>
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d13027]">
                      Global Hubs
                    </h2>
                    <p className="mt-4 text-xl font-medium text-white leading-relaxed">
                      Atlanta • London • Dubai • Lagos
                    </p>
                  </div>
                  <div>
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d13027]">
                      Direct Channel
                    </h2>
                    <p className="mt-4 text-xl font-medium text-white">
                      reddiamondfamilyus@gmail.com
                    </p>
                  </div>
                </div>

                {/* Form Side */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    required
                    name="Name"
                    type="text"
                    placeholder="NAME"
                    className="w-full bg-black border border-[#1a1a1a] rounded-xl px-5 py-5 text-base focus:border-[#ecc970] outline-none transition-colors"
                  />
                  <input
                    required
                    name="Email"
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    className="w-full bg-black border border-[#1a1a1a] rounded-xl px-5 py-5 text-base focus:border-[#ecc970] outline-none transition-colors"
                  />
                  <textarea
                    required
                    name="Message"
                    placeholder="MESSAGE"
                    rows={4}
                    className="w-full bg-black border border-[#1a1a1a] rounded-xl px-5 py-5 text-base focus:border-[#ecc970] outline-none resize-none transition-colors"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#d13027] py-6 text-sm font-bold uppercase tracking-[0.4em] text-white transition-all hover:bg-[#b02821]"
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
