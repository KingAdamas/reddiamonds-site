"use client";

import { useState } from "react";
import Link from "next/link";

export default function Apply() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("SUBMITTED");
    // Form logic is ready for integration with: reddiamondfamilyus@gmail.com
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#d13027]">
      <div className="mx-auto max-w-5xl px-6 pt-4 md:pt-12 pb-40 md:pt-48">
        {/* THE APPLY HERO CARD */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#1a1a1a] bg-[#0a0a0a] p-8 md:p-20 shadow-2xl">
          {status === "SUBMITTED" ? (
            <div className="py-16 text-center">
              <h2 className="text-3xl font-bold text-[#ecc970] uppercase tracking-widest italic">
                Application Received
              </h2>
              <p className="mx-auto mt-6 max-w-md text-lg text-white italic">
                Your application has been received and entered into the RDI review process. Our team will review fit,
                potential, and overall alignment with the pipeline.
              </p>
              <Link
                href="/"
                className="mt-12 inline-block text-xs font-bold uppercase tracking-[0.4em] text-white/40 hover:text-[#d13027] transition-colors"
              >
                Return to Overview
              </Link>
            </div>
          ) : (
            <>
              <div className="border-b border-[#1a1a1a] pb-10 text-center">
                <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#ecc970]">
                  Apply for Consideration
                </p>
                <h1 className="mt-6 text-4xl font-extrabold uppercase tracking-tighter md:text-7xl italic leading-tight">
                  Entry Into the Pipeline Is <span className="text-[#d13027]">Earned.</span>
                </h1>
                <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white">
                  Red Diamonds International reviews creators for fit, potential, and long term opportunity readiness.
                  This is the first step into a selective pipeline built for refinement, development, and stronger
                  monetization pathways.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-16 space-y-12 text-left">
                {/* SECTION 01: CREATOR PROFILE */}
                <div className="space-y-6">
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d13027]">
                    01. Creator Profile
                  </h2>

                  {/* Row 1: Legal Name + Platform Handle */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      required
                      type="text"
                      placeholder="LEGAL NAME"
                      className="w-full bg-black border border-[#1a1a1a] rounded-xl px-5 py-4 text-xs focus:border-[#ecc970] outline-none transition-colors"
                    />
                    <input
                      required
                      type="text"
                      placeholder="PLATFORM HANDLE (@...)"
                      className="w-full bg-black border border-[#1a1a1a] rounded-xl px-5 py-4 text-xs focus:border-[#ecc970] outline-none transition-colors"
                    />
                  </div>

                  {/* Row 2: Primary Platform + Region / Country */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <select
                      required
                      className="w-full bg-black border border-[#1a1a1a] rounded-xl px-5 py-4 text-xs focus:border-[#ecc970] outline-none text-gray-500"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        PRIMARY PLATFORM
                      </option>
                      <option value="tiktok">TIKTOK</option>
                      <option value="bigo">BIGO LIVE</option>
                      <option value="other">OTHER</option>
                    </select>

                    <input
                      required
                      type="text"
                      placeholder="REGION / COUNTRY"
                      className="w-full bg-black border border-[#1a1a1a] rounded-xl px-5 py-4 text-xs focus:border-[#ecc970] outline-none transition-colors"
                    />
                  </div>

                  {/* Row 3: Gender full width */}
                  <select
                    required
                    className="w-full bg-black border border-[#1a1a1a] rounded-xl px-5 py-4 text-xs focus:border-[#ecc970] outline-none text-gray-500"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      GENDER
                    </option>
                    <option value="female">FEMALE</option>
                    <option value="male">MALE</option>
                    <option value="nonbinary">NON-BINARY</option>
                    <option value="prefer-not">PREFER NOT TO SAY</option>
                    <option value="other">OTHER</option>
                  </select>
                </div>

                {/* SECTION 02: GROWTH */}
                <div className="space-y-6">
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d13027]">
                    02. Growth & Traction
                  </h2>

                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      required
                      type="text"
                      placeholder="CURRENT FOLLOWER COUNT"
                      className="w-full bg-black border border-[#1a1a1a] rounded-xl px-5 py-4 text-xs focus:border-[#ecc970] outline-none transition-colors"
                    />
                    <input
                      required
                      type="text"
                      placeholder="AVERAGE VIEWS PER POST"
                      className="w-full bg-black border border-[#1a1a1a] rounded-xl px-5 py-4 text-xs focus:border-[#ecc970] outline-none transition-colors"
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      required
                      type="text"
                      placeholder="POSTS PER WEEK"
                      className="w-full bg-black border border-[#1a1a1a] rounded-xl px-5 py-4 text-xs focus:border-[#ecc970] outline-none transition-colors"
                    />
                    <input
                      required
                      type="text"
                      placeholder="LIVES PER WEEK"
                      className="w-full bg-black border border-[#1a1a1a] rounded-xl px-5 py-4 text-xs focus:border-[#ecc970] outline-none transition-colors"
                    />
                  </div>

                  <input
                    required
                    type="text"
                    placeholder="AVERAGE VIEWERS PER LIVE (IF APPLICABLE)"
                    className="w-full bg-black border border-[#1a1a1a] rounded-xl px-5 py-4 text-xs focus:border-[#ecc970] outline-none transition-colors"
                  />
                </div>

                {/* SECTION 03: ALIGNMENT */}
                <div className="space-y-6">
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d13027]">
                    03. Operational Alignment
                  </h2>

                  <div className="grid gap-4 md:grid-cols-2">
                    <select
                      required
                      className="w-full bg-black border border-[#1a1a1a] rounded-xl px-5 py-4 text-xs focus:border-[#ecc970] outline-none text-gray-500"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        ACTIVE & CONSISTENT?
                      </option>
                      <option value="yes">YES</option>
                      <option value="somewhat">SOMEWHAT</option>
                      <option value="no">NO</option>
                    </select>

                    <select
                      required
                      className="w-full bg-black border border-[#1a1a1a] rounded-xl px-5 py-4 text-xs focus:border-[#ecc970] outline-none text-gray-500"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        OPEN TO COACHING?
                      </option>
                      <option value="yes">YES</option>
                      <option value="somewhat">SOMEWHAT</option>
                      <option value="no">NO</option>
                    </select>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <select
                      required
                      className="w-full bg-black border border-[#1a1a1a] rounded-xl px-5 py-4 text-xs focus:border-[#ecc970] outline-none text-gray-500"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        WEEKLY COMMITMENT?
                      </option>
                      <option value="yes">YES</option>
                      <option value="somewhat">SOMEWHAT</option>
                      <option value="no">NO</option>
                    </select>

                    <select
                      required
                      className="w-full bg-black border border-[#1a1a1a] rounded-xl px-5 py-4 text-xs focus:border-[#ecc970] outline-none text-gray-500"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        FOCUSED ON LONG TERM GROWTH?
                      </option>
                      <option value="yes">YES</option>
                      <option value="somewhat">SOMEWHAT</option>
                      <option value="no">NO</option>
                    </select>
                  </div>

                  <textarea
                    required
                    placeholder="WHY SHOULD YOU BE SELECTED FOR THE RDI PIPELINE?"
                    rows={3}
                    className="w-full bg-black border border-[#1a1a1a] rounded-xl px-5 py-4 text-xs focus:border-[#ecc970] outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#d13027] py-6 text-sm font-bold uppercase tracking-[0.4em] text-white transition-all hover:bg-[#b02821] hover:shadow-[0_0_30px_rgba(209,48,39,0.3)]"
                >
                  Begin Consideration
                </button>
              </form>
            </>
          )}
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 italic">
            Submission does not guarantee acceptance into active development. All applicants enter a review process, and
            progression within the pipeline is based on fit, consistency, and potential.
          </p>
          <Link
            href="/process"
            className="inline-block mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[#ecc970] hover:text-white transition-colors"
          >
            Review the process again
          </Link>
        </div>
      </div>
    </main>
  );
}