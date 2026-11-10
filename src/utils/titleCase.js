/**
 * Title Case for headings, e.g. "Build the risk register" → "Build the Risk Register".
 *
 * - Only ever upper-cases a word's first letter; it never lower-cases, so
 *   acronyms and brand names (IDR, CAE's, SOX / IFC, RiskMan) are kept as written.
 * - Short articles, conjunctions and prepositions stay lower case, except as the
 *   first or last word or right after a colon ("Phase 1: Build the Annual Plan").
 * - Each part of a hyphenated word is capitalised ("Follow-Up", "End-to-End").
 */
const MINOR_WORDS = new Set([
  "a", "an", "the",
  "and", "but", "or", "nor", "for", "so", "yet",
  "as", "at", "by", "in", "of", "on", "per", "to", "via", "vs", "with", "from", "into", "onto", "over",
]);

const capitalise = (part) => part.replace(/[a-z]/i, (ch) => ch.toUpperCase());

export const toTitleCase = (text) => {
  if (typeof text !== "string" || !text.trim()) return text;

  const words = text.split(" ");
  const last = words.length - 1;

  return words
    .map((word, index) => {
      const bare = word.toLowerCase().replace(/[^a-z]/g, "");
      const afterColon = index > 0 && /:$/.test(words[index - 1]);
      const keepLower = MINOR_WORDS.has(bare) && index !== 0 && index !== last && !afterColon;

      if (keepLower) return word;
      return word
        .split("-")
        .map((part, i) => (i > 0 && MINOR_WORDS.has(part.toLowerCase()) ? part : capitalise(part)))
        .join("-");
    })
    .join(" ");
};

export default toTitleCase;
