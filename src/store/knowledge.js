import { create } from "zustand";
import { sanityClient } from "../api/sanity";

const BASE = `*[_type == "knowledgePage"][0]`;

export const useKnowledgePage = create((set) => ({

  // ================= STATE =================
  articles: [],
  categories: [],
  resources: [],
  faqSection: [],

  loading: false,
  error: null,

  // ================= FETCHERS =================

  fetchArticles: async () => {
    try {
      set({ loading: true });

      const data = await sanityClient.fetch(`${BASE}{
        articles[]{
          ...,
          bannerImage{asset->{url}},
          featuredImage{asset->{url}}
        }
      }`);

      set({ articles: data.articles, loading: false });

    } catch (e) {
      set({ error: e.message, loading: false });
    }
  },

  fetchCategories: async () => {
    const data = await sanityClient.fetch(`${BASE}{categories}`);
    set({ categories: data.categories });
  },

  fetchResources: async () => {
    const data = await sanityClient.fetch(`${BASE}{
      resources[]{
        ...,
        image{asset->{url}}
      }
    }`);

    set({ resources: data.resources });
  },

  fetchFAQ: async () => {
    const data = await sanityClient.fetch(`${BASE}{faqSection}`);
    set({ faqSection: data.faqSection });
  },

}));