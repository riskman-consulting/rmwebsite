import { createClient } from "@sanity/client"

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATA_SET,
  apiVersion: "2024-01-01",
  useCdn: true, // fast read
  token: import.meta.env.VITE_SANITY_API_TOKEN, // optional (protected)
})