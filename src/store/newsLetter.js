import { create } from "zustand";
import { sanityClient } from "../api/sanity";

const NEWSLETTER_PROJECTION = `{
  _id,
  title,
  "image": image.asset->url,
  description,
  username,
  newsDate,
  linkdinUrl,
  createdAt,
  updatedAt,
  _createdAt,
  _updatedAt
}`;

export const useNewsletterStore = create((set) => ({

  // ================= STATE =================
  newsletters: [],
  singleNewsletter: null,

  loading: false,
  error: null,

  // ================= FETCHERS =================

  fetchNewsletters: async () => {
    try {
      set({ loading: true, error: null });

      const data = await sanityClient.fetch(`
        *[_type == "newLetter"] | order(newsDate desc, _createdAt desc) ${NEWSLETTER_PROJECTION}
      `);

      set({ newsletters: data || [], loading: false });

    } catch (e) {
      set({ error: e.message, loading: false });
    }
  },

  fetchNewsletterById: async (id) => {
    try {
      set({ loading: true, error: null, singleNewsletter: null });

      const data = await sanityClient.fetch(
        `*[_type == "newLetter" && _id == $id][0] ${NEWSLETTER_PROJECTION}`,
        { id }
      );

      set({ singleNewsletter: data || null, loading: false });

    } catch (e) {
      set({ error: e.message, loading: false });
    }
  },

  clearSingleNewsletter: () => set({ singleNewsletter: null }),

}));
