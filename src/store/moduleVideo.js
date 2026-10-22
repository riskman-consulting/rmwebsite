import { create } from "zustand";
import { sanityClient } from "../api/sanity";

export const useModuleVideoStore = create((set) => ({
  // Videos keyed by module slug; a slug with no entry has not been fetched yet
  videosByModule: {},
  loading: false,
  error: null,

  // ===== FETCH VIDEOS FOR ONE MODULE =====
  // Refetches on every visit (the cached list shows meanwhile), so a video
  // published from the embedded Studio appears without a full page reload.
  fetchModuleVideos: async (moduleSlug) => {
    try {
      set({ loading: true, error: null });

      // Only published documents with an uploaded file — the client carries a
      // token, so drafts would otherwise leak onto the site (and show twice
      // once published). A module with no video simply comes back empty.
      const data = await sanityClient.fetch(
        `
        *[_type == "moduleVideo" && module == $moduleSlug && defined(video.asset)
          && !(_id in path("drafts.**"))]
          | order(order asc, _createdAt asc){
          _id,
          title,
          caption,
          "videoUrl": video.asset->url,
          "mimeType": video.asset->mimeType,
          "poster": poster.asset->url
        }
      `,
        { moduleSlug }
      );

      set((state) => ({
        videosByModule: {
          ...state.videosByModule,
          [moduleSlug]: (data || []).filter((video) => video.videoUrl),
        },
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));
