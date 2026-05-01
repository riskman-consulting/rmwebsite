import { create } from "zustand";
import { sanityClient } from "../api/sanity";

const POST_LIST_PROJECTION = `{
  _id,
  title,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "mainImageAlt": mainImage.alt,
  contentType,
  funnelStage,
  seoTitle,
  metaDescription,
  tldr,
  takeaways,
  _createdAt,
  _updatedAt
}`;

const POST_DETAIL_PROJECTION = `{
  _id,
  title,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "mainImageAlt": mainImage.alt,
  body,
  contentType,
  funnelStage,
  seoTitle,
  metaDescription,
  tldr,
  takeaways,
  _createdAt,
  _updatedAt
}`;

export const useBlogStore = create((set) => ({

  // ================= STATE =================
  posts: [],
  singlePost: null,

  loading: false,
  error: null,

  // ================= FETCHERS =================

  fetchPosts: async () => {
    try {
      set({ loading: true, error: null });

      const data = await sanityClient.fetch(`
        *[_type == "post"] | order(_createdAt desc) ${POST_LIST_PROJECTION}
      `);

      set({ posts: data || [], loading: false });

    } catch (e) {
      set({ error: e.message, loading: false });
    }
  },

  fetchPostBySlug: async (slug) => {
    try {
      set({ loading: true, error: null, singlePost: null });

      const data = await sanityClient.fetch(
        `*[_type == "post" && slug.current == $slug][0] ${POST_DETAIL_PROJECTION}`,
        { slug }
      );

      set({ singlePost: data || null, loading: false });

    } catch (e) {
      set({ error: e.message, loading: false });
    }
  },

  fetchPostsByContentType: async (contentType) => {
    try {
      set({ loading: true, error: null });

      const data = await sanityClient.fetch(
        `*[_type == "post" && contentType == $contentType] | order(_createdAt desc) ${POST_LIST_PROJECTION}`,
        { contentType }
      );

      set({ posts: data || [], loading: false });

    } catch (e) {
      set({ error: e.message, loading: false });
    }
  },

  fetchPostsByFunnelStage: async (funnelStage) => {
    try {
      set({ loading: true, error: null });

      const data = await sanityClient.fetch(
        `*[_type == "post" && funnelStage == $funnelStage] | order(_createdAt desc) ${POST_LIST_PROJECTION}`,
        { funnelStage }
      );

      set({ posts: data || [], loading: false });

    } catch (e) {
      set({ error: e.message, loading: false });
    }
  },

  clearSinglePost: () => set({ singlePost: null }),

}));
