"use client";

import { useState } from "react";
import type { ChangeEvent } from "react";
import { ALL_COUNTRIES, platformsForCountry, type Platform } from "./countries";

type Result =
  | { status: "idle" }
  | { status: "approved"; headline: string; detail: string }
  | { status: "declined"; headline: string; detail: string };

export default function EligibilityClient() {
  const [country, setCountry] = useState<string>("");
  const [platform, setPlatform] = useState<Platform>("both");

  const [ageOk, setAgeOk] = useState<boolean>(false);
  const [standingOk, setStandingOk] = useState<boolean>(false);
  const [notRemoved, setNotRemoved] = useState<boolean>(false);

  const [result, setResult] = useState<Result>({ status: "idle" });

  function checkEligibility() {
    const c = country.trim();
    const available = platformsForCountry(c);

    if (!c) {
      setResult({
        status: "declined",
        headline: "Country required",
        detail: "Enter your country so we can confirm coverage.",
      });
      return;
    }

    if (!ageOk || !standingOk || !notRemoved) {
      setResult({
        status: "declined",
        headline: "Not eligible (yet)",
        detail:
          "To qualify, you must be 18+, in good standing (not restricted/banned/suspended for violations), and not removed from Red Diamonds in the last 12 months.",
      });
      return;
    }

    if (available.length === 0) {
      setResult({
        status: "declined",
        headline: "Not in our service list",
        detail:
          "Your country isn’t currently in our serviced regions. Check back as we expand.",
      });
      return;
    }

    const needs: Array<"tiktok" | "bigo"> =
      platform === "both" ? ["tiktok", "bigo"] : [platform];

    const missing = needs.filter((p) => !available.includes(p));

    if (missing.length) {
      const missingLabel =
        missing.length === 2
          ? "TikTok LIVE and BIGO LIVE"
          : missing[0] === "tiktok"
          ? "TikTok LIVE"
          : "BIGO LIVE";

      setResult({
        status: "declined",
        headline: "Platform not supported for this country",
        detail: `We service ${c}, but it’s not eligible for ${missingLabel} based on our current coverage list.`,
      });
      return;
    }

    setResult({
      status: "approved",
      headline: "Approved ✅",
      detail: `You’re eligible to apply for ${
        platform === "both"
          ? "TikTok LIVE + BIGO LIVE"
          : platform === "tiktok"
          ? "TikTok LIVE"
          : "BIGO LIVE"
      } from ${c}.`,
    });
  }

  const badgeClass =
    result.status === "approved"
      ? "bg-[#0b3d1a] border-[#1e7a39] text-white"
      : result.status === "declined"
      ? "bg-[#3d0b0b] border-[#7a1e1e] text-white"
      : "bg-[#000000]/20 border-[#241d20] text-white/80";

  return (
    <div className="mt-6 rounded-2xl border border-[#241d20] bg-[#000000]/20 p-6">
      <div className="grid gap-4">
        <div>
          <label className="text-sm font-semibold text-white/90">Country</label>
          <input
            value={country}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCountry(e.target.value)
            }
            list="rdi-countries"
            placeholder="Start typing (e.g., Nigeria, Canada, United Arab Emirates)"
            className="mt-2 w-full rounded-xl border border-[#241d20] bg-[#000000]/30 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#ecc970]/30"
          />
          <datalist id="rdi-countries">
            {ALL_COUNTRIES.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </div>

        <div>
          <label className="text-sm font-semibold text-white/90">Platform</label>
          <select
            value={platform}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setPlatform(e.target.value as Platform)
            }
            className="mt-2 w-full rounded-xl border border-[#241d20] bg-[#000000]/30 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#ecc970]/30"
          >
            <option value="both">TikTok LIVE + BIGO LIVE</option>
            <option value="tiktok">TikTok LIVE</option>
            <option value="bigo">BIGO LIVE</option>
          </select>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-white/90">You qualify only if:</p>

          <label className="flex items-start gap-3 text-sm text-white/80">
            <input
              type="checkbox"
              checked={ageOk}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setAgeOk(e.target.checked)
              }
              className="mt-1"
            />
            <span>
              You are <span className="font-semibold">18+</span>.
            </span>
          </label>

          <label className="flex items-start gap-3 text-sm text-white/80">
            <input
              type="checkbox"
              checked={standingOk}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setStandingOk(e.target.checked)
              }
              className="mt-1"
            />
            <span>
              Your accounts are in <span className="font-semibold">good standing</span>{" "}
              (not restricted, banned, or suspended for violations / harmful behavior).
            </span>
          </label>

          <label className="flex items-start gap-3 text-sm text-white/80">
            <input
              type="checkbox"
              checked={notRemoved}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setNotRemoved(e.target.checked)
              }
              className="mt-1"
            />
            <span>
              You have <span className="font-semibold">not</span> been removed as a host from
              Red Diamonds in the last <span className="font-semibold">12 months</span>.
            </span>
          </label>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={checkEligibility}
            className="rdi-btn-shine inline-flex items-center justify-center rounded-xl bg-[#d13027] px-6 py-3 font-semibold text-white hover:bg-[#97261f]"
          >
            Check Eligibility
          </button>

          <a
            href="https://forms.gle/REPLACE_ME"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center rounded-xl border border-[#241d20] bg-transparent px-6 py-3 font-semibold text-white hover:border-[#ecc970]/60 hover:text-[#ecc970]"
          >
            Apply Now
          </a>
        </div>

        <div className={`rounded-xl border px-4 py-3 text-sm ${badgeClass}`}>
          {result.status === "idle" ? (
            <span>Enter your country + platform, then check eligibility.</span>
          ) : (
            <div>
              <div className="font-semibold">{result.headline}</div>
              <div className="mt-1 opacity-90">{result.detail}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
