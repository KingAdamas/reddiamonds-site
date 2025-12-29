export const BOTH_TIKTOK_AND_BIGO = ["United States", "Canada"] as const;

export const BIGO_ONLY = [
  "United Kingdom",
  "Ireland",
  "Nigeria",
  "Ghana",
  "Kenya",
  "Ethiopia",
  "Uganda",
  "Zambia",
  "South Africa",
] as const;

export const TIKTOK_ONLY = [
  "Algeria",
  "Bahrain",
  "Egypt",
  "Iraq",
  "Jordan",
  "Kuwait",
  "Lebanon",
  "Libya",
  "Morocco",
  "Oman",
  "Qatar",
  "Saudi Arabia",
  "Tunisia",
  "United Arab Emirates",
  "Yemen",
] as const;

export const ALL_COUNTRIES = [
  ...BOTH_TIKTOK_AND_BIGO,
  ...BIGO_ONLY,
  ...TIKTOK_ONLY,
].slice().sort((a, b) => a.localeCompare(b));

export type Platform = "tiktok" | "bigo" | "both";

function norm(s: string) {
  return s.trim().toLowerCase();
}

export function platformsForCountry(country: string): Array<"tiktok" | "bigo"> {
  const c = norm(country);

  if (BOTH_TIKTOK_AND_BIGO.some((x) => norm(x) === c)) return ["tiktok", "bigo"];
  if (BIGO_ONLY.some((x) => norm(x) === c)) return ["bigo"];
  if (TIKTOK_ONLY.some((x) => norm(x) === c)) return ["tiktok"];

  return [];
}
