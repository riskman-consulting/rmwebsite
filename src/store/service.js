import { create } from "zustand";
import { sanityClient } from "../api/sanity";

export const useServiceStore = create((set) => ({
  // ===== STATE =====
  services: [],
  singleService: null,
  loading: false,
  error: null,

  // ===== FETCH ALL SERVICES =====
  fetchServices: async () => {
    try {
      set({ loading: true, error: null });

      const data = await sanityClient.fetch(`
        *[_type == "service"] | order(title asc){
          _id,
          title,
          slug,
          summary,
          headerImage{
            asset->{url}
          }
        }
      `);

      set({ services: data || [], loading: false });

    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // ===== FETCH SINGLE SERVICE BY SLUG =====
  fetchServiceBySlug: async (slug) => {
    try {
      set({ loading: true, error: null });

      const data = await sanityClient.fetch(
        `
        *[_type == "service" && slug.current == $slug][0]{
          _id,
          title,
          slug,
          summary,
          headerImage{
            asset->{url}
          },
          content,
          ctaSection
        }
        `,
        { slug }
      );

      set({ singleService: data || null, loading: false });

    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // ===== CLEAR SINGLE SERVICE =====
  clearService: () => set({ singleService: null }),
}));