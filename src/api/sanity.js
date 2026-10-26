import { createClient } from "@sanity/client"

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATA_SET,
  apiVersion: "2024-01-01",
  useCdn: true, // fast read
  // No token: the dataset is public, so published content reads without one.
  // Anything with a VITE_ prefix ends up in the public JavaScript bundle, and a
  // token here would also let anyone read unpublished drafts.
})