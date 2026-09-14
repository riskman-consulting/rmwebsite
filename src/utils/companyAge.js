/**
 * Single source of truth for RiskMan's age.
 *
 * RiskMan was founded on 19 July 2020, so every "N years" claim on the site
 * should be derived from here instead of being hardcoded. The anniversary
 * rolls over on 19 July each year.
 *
 * NOTE: this is for the *company's* age only. Numbers that describe the
 * combined experience of the leadership team, an individual's tenure, or a
 * past event ("the 5 Year Anniversary celebration") are not derived from this.
 */

export const FOUNDING_DATE = new Date(2020, 6, 19); // 19 July 2020 (month is 0-indexed)
export const FOUNDING_YEAR = FOUNDING_DATE.getFullYear();

const WORDS = [
  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight",
  "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
  "sixteen", "seventeen", "eighteen", "nineteen", "twenty",
];

/**
 * Completed years since founding, as of `now` (defaults to today).
 * e.g. 18 Jul 2026 -> 5, 19 Jul 2026 -> 6.
 */
export function getCompanyYears(now = new Date()) {
  let years = now.getFullYear() - FOUNDING_DATE.getFullYear();

  const beforeAnniversary =
    now.getMonth() < FOUNDING_DATE.getMonth() ||
    (now.getMonth() === FOUNDING_DATE.getMonth() &&
      now.getDate() < FOUNDING_DATE.getDate());

  if (beforeAnniversary) years -= 1;

  return Math.max(0, years);
}

/** "6" */
export function getCompanyYearsLabel(now = new Date()) {
  return String(getCompanyYears(now));
}

/** "six" — for prose. Falls back to digits past twenty. */
export function getCompanyYearsWord(now = new Date()) {
  const years = getCompanyYears(now);
  return WORDS[years] ?? String(years);
}

/** "Six" — for prose at the start of a sentence. */
export function getCompanyYearsWordCapitalized(now = new Date()) {
  const word = getCompanyYearsWord(now);
  return word.charAt(0).toUpperCase() + word.slice(1);
}

/** "6 Years" / "1 Year" */
export function getCompanyYearsPhrase(now = new Date()) {
  const years = getCompanyYears(now);
  return `${years} ${years === 1 ? "Year" : "Years"}`;
}

/** The year the site is currently in, for "2026 / 6 Years Strong" style stats. */
export function getCurrentYear(now = new Date()) {
  return now.getFullYear();
}
