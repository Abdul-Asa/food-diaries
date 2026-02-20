import type { KebabSpot, PriceTier, ValueLabel } from "./types";

/**
 * Overall score formula (0–100):
 * - Quality and Aesthetic each contribute up to 40 points (score/5 * 40).
 * - Price contributes 7–20 points: £ = 20, ££ = 13, £££ = 7 (cheaper = better value).
 * - Sum is clamped to 0–100 and rounded. A great cheap spot can reach high 80s–90s.
 */
const PRICE_SCORE: Record<PriceTier, number> = {
  "£": 20,
  "££": 13,
  "£££": 7,
};

export function computeOverall(spot: KebabSpot): number {
  const qualityScore = (spot.quality / 5) * 40;
  const aestheticScore = (spot.aesthetic / 5) * 40;
  const priceScore = PRICE_SCORE[spot.price];
  const raw = qualityScore + aestheticScore + priceScore;
  return Math.round(Math.min(100, Math.max(0, raw)));
}

/**
 * Value label from Overall + Price:
 * - High overall (≥75) + £ → Amazing Deal; high + ££ or mid (50–74) + £ → Good.
 * - Mid + ££ or low (25–49) + £/££ → Okay; low + £££ or very low (<25) → Not worth.
 */
export function getValueLabel(spot: KebabSpot): ValueLabel {
  const overall = computeOverall(spot);
  const { price } = spot;
  if (overall >= 75 && price === "£") {
    return "Amazing Deal";
  }
  if (overall >= 75 && price === "££") {
    return "Good";
  }
  if (overall >= 50 && price === "£") {
    return "Good";
  }
  if (overall >= 50 && price === "££") {
    return "Good";
  }
  if (overall >= 50 && price === "£££") {
    return "Okay";
  }
  if (overall >= 25) {
    return "Okay";
  }
  return "Not worth";
}

export const KEBAB_SPOTS: KebabSpot[] = [
  {
    name: "Istanbul Grill",
    address: "142 Burgess Road, Southampton SO16 3AX",
    verdict: "Solid doner and generous portions; best after midnight.",
    quality: 4,
    aesthetic: 3.5,
    price: "£",
  },
  {
    name: "Portswood Kebab House",
    address: "89 Portswood Road, Southampton SO17 2NF",
    verdict: "Reliable classic with a loyal student following.",
    quality: 3.5,
    aesthetic: 3,
    price: "£",
  },
  {
    name: "Mediterranean Kitchen",
    address: "24 High Street, Southampton SO14 2NA",
    verdict: "Fresh ingredients and proper charcoal grill; worth the queue.",
    quality: 4.5,
    aesthetic: 4,
    price: "££",
  },
  {
    name: "Shawarma Express",
    address: "5 Above Bar Street, Southampton SO14 7FN",
    verdict: "Quick, tasty shawarma wraps; more takeaway than dine-in.",
    quality: 4,
    aesthetic: 2.5,
    price: "£",
  },
  {
    name: "Bosphorus",
    address: "201 Shirley Road, Southampton SO15 3FL",
    verdict: "Full menu and sit-down vibe; good for a proper meal.",
    quality: 4,
    aesthetic: 4,
    price: "££",
  },
  {
    name: "Late Bite",
    address: "67 London Road, Southampton SO15 2AD",
    verdict: "Exactly what it says: hits the spot when nothing else is open.",
    quality: 3,
    aesthetic: 2,
    price: "£",
  },
];
