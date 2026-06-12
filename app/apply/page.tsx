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

  const fieldBase =
    "w-full bg-white border border-zinc-200 rounded-xl px-5 py-4 text-sm outline-none transition-colors focus:border-[#8B0000] text-black placeholder:text-zinc-400 font-medium";

  const selectBase =
    "w-full bg-white border border-zinc-200 rounded-xl px-5 py-4 text-sm outline-none focus:border-[#8B0000] transition-colors text-black invalid:text-zinc-400 font-medium";

  return (
    <main className="min-h-screen bg-[#F7F3EF] text-black font-sans selection:bg-[#8B0000] selection:text-white">
      <div className="mx-auto max-w-5xl px-6 pt-4 md:pt-12 pb-40 md:pt-48">

        <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white p-8 md:p-20 shadow-sm">
          {status === "SUBMITTED" ? (
            <div className="py-16 text-center">
              <h2 className="text-3xl font-extrabold text-[#8B0000] uppercase tracking-widest">
                Application Received
              </h2>
              <p className="mx-auto mt-6 max-w-md text-lg text-black font-medium">
                Your application has been received. Our team will review your consistency, presence, and readiness to start streaming with RDI.
              </p>
              <Link
                href="/"
                className="mt-12 inline-block text-xs font-bold uppercase tracking-[0.4em] text-black/40 hover:text-[#8B0000] transition-colors"
              >
                Return Home
              </Link>
            </div>
          ) : (
            <>
              <div className="border-b border-zinc-100 pb-10 text-center">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#8B0000]">
                  Apply to Stream
                </p>
                <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl leading-tight text-black">
                  Start Your TikTok Live Journey with RDI.
                </h1>
                <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-black/70 font-medium">
                  Tell us a bit about where you are now. RDI works with creators at every stage, what matters most is consistency, coachability, and a willingness to show up. Complete every section honestly so we can match you with the right support.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-16 space-y-12 text-left">
                {/* SECTION 01: ABOUT YOU */}
                <div className="space-y-6">
                  <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-[#8B0000]">
                    01. About You
                  </h2>

                  <div className="grid gap-4 md:grid-cols-2">
                    <input required type="text" placeholder="Full Name" className={fieldBase} />
                    <input required type="text" placeholder="TikTok Handle (@...)" className={fieldBase} />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <select required className={selectBase} defaultValue="">
                      <option value="" disabled>
                        What best describes you?
                      </option>
                      <option value="coach">Coach / Speaker / Educator</option>
                      <option value="podcaster">Podcaster</option>
                      <option value="comedian">Comedian</option>
                      <option value="musician">Musician</option>
                      <option value="beauty-fitness">Beauty / Fitness Personality</option>
                      <option value="faith-community">Faith / Community Leader</option>
                      <option value="lifestyle">Lifestyle Creator / Entrepreneur</option>
                      <option value="other">Other</option>
                    </select>

                    <input required type="text" placeholder="City / Region" className={fieldBase} />
                  </div>
                </div>

                {/* SECTION 02: WHERE YOU ARE NOW */}
                <div className="space-y-6">
                  <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-[#8B0000]">
                    02. Where You Are Now
                  </h2>

                  <div className="grid gap-4 md:grid-cols-2">
                    <input required type="text" placeholder="Current Follower Count" className={fieldBase} />
                    <input required type="text" placeholder="Posts Per Week" className={fieldBase} />
                  </div>

                  <select required className={selectBase} defaultValue="">
                    <option value="" disabled>
                      Have you gone live on TikTok before?
                    </option>
                    <option value="yes-regularly">Yes, regularly</option>
                    <option value="yes-occasionally">Yes, occasionally</option>
                    <option value="no-never">No, never</option>
                  </select>
                </div>

                {/* SECTION 03: READINESS */}
                <div className="space-y-6">
                  <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-[#8B0000]">
                    03. Your Readiness
                  </h2>

                  <div className="grid gap-4 md:grid-cols-2">
                    <select required className={selectBase} defaultValue="">
                      <option value="" disabled>
                        Are you able to post consistently?
                      </option>
                      <option value="yes">Yes</option>
                      <option value="somewhat">Somewhat</option>
                      <option value="no">Not yet</option>
                    </select>

                    <select required className={selectBase} defaultValue="">
                      <option value="" disabled>
                        Open to coaching and feedback?
                      </option>
                      <option value="yes">Yes</option>
                      <option value="somewhat">Somewhat</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  <select required className={selectBase} defaultValue="">
                    <option value="" disabled>
                      Can you commit to a weekly streaming schedule?
                    </option>
                    <option value="yes">Yes</option>
                    <option value="somewhat">Possibly</option>
                    <option value="no">No</option>
                  </select>

                  <textarea
                    required
                    placeholder="What do you want to grow on TikTok Live, and what would help you most?"
                    rows={3}
                    className={`${fieldBase} resize-none`}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#8B0000] py-6 text-sm font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-[#a00000] shadow-md"
                >
                  Submit Application
                </button>
              </form>
            </>
          )}
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-12 text-center">
          <p className="text-sm text-black/50 font-medium">
            Submitting an application does not guarantee placement. RDI reviews every submission and follows up with creators who are a good fit for current opportunities.
          </p>
          <Link
            href="/process"
            className="inline-block mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[#8B0000] hover:text-black transition-colors"
          >
            Not sure yet? See how it works first.
          </Link>
        </div>
      </div>
    </main>
  );
}
