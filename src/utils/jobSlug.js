/**
 * Job URL helpers.
 *
 * Job openings live inside the `careerPage` Sanity document as an array of
 * objects, so they have no document id of their own. A shareable URL is built
 * from an optional editor-defined `slug`, falling back to the slugified title
 * and finally to the array item's `_key`.
 */

export const slugifyJobTitle = (value = "") =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const getJobSlug = (job) =>
  job?.slug?.current ||
  (typeof job?.slug === "string" ? job.slug : "") ||
  slugifyJobTitle(job?.title) ||
  job?._key ||
  "";

export const getJobPath = (job) => `/careers/${getJobSlug(job)}`;

/** Accepts the slug or the raw `_key`, so older links keep working. */
export const matchesJobId = (job, id) => {
  if (!job || !id) return false;
  const target = decodeURIComponent(String(id)).toLowerCase();
  return (
    getJobSlug(job).toLowerCase() === target ||
    String(job?._key || "").toLowerCase() === target
  );
};

/** Same rule the careers list uses to hide closed roles. */
export const isJobOpen = (job) =>
  job?.lastDate ? new Date(job.lastDate) >= new Date() : true;

export const formatJobDate = (value) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export const formatEmploymentType = (value = "") =>
  String(value).replace(/_/g, " ");
