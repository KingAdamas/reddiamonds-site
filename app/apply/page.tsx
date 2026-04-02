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

  // UPDATED: Input fields now white background, dark borders, and dark text
  const fieldBase =
    "w-full bg-white border border-zinc-200 rounded-xl px-5 py-4 text-xs outline-none transition-colors focus:border-[#8B0000] text-black placeholder:text-zinc-400 font-medium italic";

  // UPDATED: Select fields now white background, dark borders, and dark text
  const selectBase =
    "w-full bg-white border border-zinc-200 rounded-xl px-5 py-4 text-xs outline-none focus:border-[#8B0000] transition-colors text-black invalid:text-zinc-400 font-medium italic";

  return (
    // UPDATED: Background to RDI Crimson
    <main className="min-h-screen bg-[#8B0000] text-black font-sans selection:bg-[#8B0000] selection:text-white">
      <div className="mx-auto max-w-5xl px-6 pt-4 md:pt-12 pb-40 md:pt-48">
        
        {/* UPDATED: Card to Solid White with Zinc border */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white p-8 md:p-20 shadow-2xl">
          {status === "SUBMITTED" ? (
            <div className="py-16 text-center">
              {/* UPDATED: Status text to Crimson */}
              <h2 className="text-3xl font-bold text-[#8B0000] uppercase tracking-widest italic">
                Application Received
              </h2>
              <p className="mx-auto mt-6 max-w-md text-lg text-black italic font-medium">
                Your application has been received and entered into the RDI review process. Our team will review fit,
                potential, and overall alignment with the pipeline.
              </p>
              <Link
                href="/"
                className="mt-12 inline-block text-xs font-bold uppercase tracking-[0.4em] text-black/40 hover:text-[#8B0000] transition-colors"
              >
                Return to Overview
              </Link>
            </div>
          ) : (
            <>
              <div className="border-b border-zinc-100 pb-10 text-center">
                {/* UPDATED: Subheader to Crimson */}
                <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#8B0000]">
                  Apply for Consideration
                </p>
                <h1 className="mt-6 text-4xl font-extrabold uppercase tracking-tighter md:text-7xl italic leading-tight text-black">
                  Entry Into the Pipeline Is <span className="text-[#8B0000]">Earned.</span>
                </h1>
                <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-black/80 font-medium italic">
                  Red Diamonds International reviews creators for fit, potential, and long term opportunity readiness.
                  This is the first step into a selective pipeline built for refinement, development, and stronger
                  monetization pathways.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-16 space-y-12 text-left">
                {/* SECTION 01: CREATOR PROFILE */}
                <div className="space-y-6">
                  {/* UPDATED: Section markers to Crimson */}
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B0000]">
                    01. Creator Profile
                  </h2>

                  <div className="grid gap-4 md:grid-cols-2">
                    <input required type="text" placeholder="LEGAL NAME" className={fieldBase} />
                    <input required type="text" placeholder="PLATFORM HANDLE (@...)" className={fieldBase} />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <select required className={selectBase} defaultValue="">
                      <option value="" disabled>
                        PRIMARY PLATFORM
                      </option>
                      <option value="tiktok">TIKTOK</option>
                      <option value="bigo">BIGO LIVE</option>
                      <option value="other">OTHER</option>
                    </select>

                    <input required type="text" placeholder="REGION / COUNTRY" className={fieldBase} />
                  </div>

                  <select required className={selectBase} defaultValue="">
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
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B0000]">
                    02. Growth & Traction
                  </h2>

                  <div className="grid gap-4 md:grid-cols-2">
                    <input required type="text" placeholder="CURRENT FOLLOWER COUNT" className={fieldBase} />
                    <input required type="text" placeholder="AVERAGE VIEWS PER POST" className={fieldBase} />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <input required type="text" placeholder="POSTS PER WEEK" className={fieldBase} />
                    <input required type="text" placeholder="LIVES PER WEEK" className={fieldBase} />
                  </div>

                  <input
                    required
                    type="text"
                    placeholder="AVERAGE VIEWERS PER LIVE (IF APPLICABLE)"
                    className={fieldBase}
                  />
                </div>

                {/* SECTION 03: ALIGNMENT */}
                <div className="space-y-6">
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B0000]">
                    03. Operational Alignment
                  </h2>

                  <div className="grid gap-4 md:grid-cols-2">
                    <select required className={selectBase} defaultValue="">
                      <option value="" disabled>
                        ACTIVE & CONSISTENT?
                      </option>
                      <option value="yes">YES</option>
                      <option value="somewhat">SOMEWHAT</option>
                      <option value="no">NO</option>
                    </select>

                    <select required className={selectBase} defaultValue="">
                      <option value="" disabled>
                        OPEN TO COACHING?
                      </option>
                      <option value="yes">YES</option>
                      <option value="somewhat">SOMEWHAT</option>
                      <option value="no">NO</option>
                    </select>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <select required className={selectBase} defaultValue="">
                      <option value="" disabled>
                        WEEKLY COMMITMENT?
                      </option>
                      <option value="yes">YES</option>
                      <option value="somewhat">SOMEWHAT</option>
                      <option value="no">NO</option>
                    </select>

                    <select required className={selectBase} defaultValue="">
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
                    className={`${fieldBase} resize-none`}
                  ></textarea>
                </div>

                {/* UPDATED: Button to brand Crimson */}
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#8B0000] py-6 text-sm font-bold uppercase tracking-[0.4em] text-white transition-all hover:bg-[#a00000] shadow-xl"
                >
                  Begin Consideration
                </button>
              </form>
            </>
          )}
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-12 text-center">
          {/* UPDATED: Text to soft white for contrast against Crimson background */}
          <p className="text-sm text-white/60 italic font-medium">
            Submission does not guarantee acceptance into active development. All applicants enter a review process, and
            progression within the pipeline is based on fit, consistency, and potential.
          </p>
          <Link
            href="/process"
            className="inline-block mt-4 text-xs font-bold uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors"
          >
            Review the process again
          </Link>
        </div>
      </div>
    </main>
  );
}
