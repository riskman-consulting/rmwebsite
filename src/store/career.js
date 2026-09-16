import { create } from "zustand";
import { sanityClient } from "../api/sanity";
import { isJobOpen } from "../utils/jobSlug";


export const useCareerStore = create((set) => ({
  testimonials: [],
  jobOpenings: [],
  // Unfiltered list — a shared link to a closed role must still resolve so the
  // page can say "applications closed" instead of 404-ing.
  allJobOpenings: [],
  loading: false,
  loaded: false,
  error: null,

  fetchCareerPage: async () => {
    try {
      set({ loading: true, error: null });

      const query = `
        *[_type == "careerPage"][0]{
          testimonials[]{
            _key,
            name,
            position,
            quote,
            tag,
            image
          },
          jobOpenings[]{
            _key,
            title,
            "slug": slug.current,
            description,
            location,
            employmentType,
            datePosted,
            lastDate
          }
        }
      `;

      const data = await sanityClient.fetch(query);

      const allJobs = data?.jobOpenings || [];

      set({
        testimonials: data?.testimonials || [],
        // ✅ Filter expired jobs
        jobOpenings: allJobs.filter(isJobOpen),
        allJobOpenings: allJobs,
        loading: false,
        loaded: true,
      });

    } catch (error) {
      set({
        error: error.message || "Failed to fetch career page",
        loading: false,
        loaded: true,
      });
    }
  },
}));
