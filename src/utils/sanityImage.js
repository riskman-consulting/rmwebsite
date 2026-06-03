import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../api/sanity";

const builder = imageUrlBuilder(sanityClient);

/**
 * Wraps the Sanity image-url builder. Accepts a Sanity image object
 * (asset ref + hotspot/crop). Returns null if the source can't be built.
 */
export const urlFor = (source) => {
  try {
    return builder.image(source);
  } catch {
    return null;
  }
};

/**
 * Build a delivery URL for a Sanity image.
 * - Accepts a plain URL string (returned as-is) or an image object.
 * - When both width & height are given, crops around the hotspot
 *   (fixes awkward cropping); otherwise scales to fit `max`.
 * - Always serves an auto-format (WebP/AVIF) image at the requested size
 *   instead of the full-resolution original (fixes sizing/perf).
 */
export function imageUrl(source, { width, height, fit = "crop", quality = 80 } = {}) {
  if (!source) return null;
  if (typeof source === "string") return source;

  const b = urlFor(source);
  if (!b) return source?.asset?.url || null;

  let img = b.auto("format").quality(quality);
  if (width) img = img.width(Math.round(width));
  if (height) img = img.height(Math.round(height));
  img = width && height ? img.fit(fit) : img.fit("max");
  return img.url();
}

/** Pixel dimensions baked into the asset, when available (prevents layout shift). */
export const imageDimensions = (source) => {
  if (!source || typeof source === "string") return null;
  const d = source?.asset?.metadata?.dimensions;
  if (!d?.width || !d?.height) return null;
  return { width: d.width, height: d.height };
};

/** Resolve alt text: explicit field on the image object, then fallback. */
export const imageAlt = (source, fallback = "") =>
  (typeof source === "object" && source?.alt) || fallback;
