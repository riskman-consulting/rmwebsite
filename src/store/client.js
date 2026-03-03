import { create } from "zustand";
import { sanityClient } from "../api/sanity";

export const useClientStore = create((set) => ({
  clients: [],
  loading: false,
  error: null,

  fetchClients: async () => {
    try {
      set({ loading: true, error: null });

      const query = `*[_type == "clients"]{
        _id,
        name,
        url,
        "image": image.asset->url
      }`;

      const data = await sanityClient.fetch(query);

      set({
        clients: data,
        loading: false,
      });

    } catch (err) {
      set({
        error: err.message,
        loading: false,
      });
    }
  },
}));