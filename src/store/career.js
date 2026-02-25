import { create } from "zustand";
import { sanityClient } from "../api/sanity";


export const useCareerStore = create((set) => ({
  testimonials: [],
  jobOpenings: [],
  loading: false,
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
            description,
            location,
            employmentType,
            datePosted,
            lastDate
          }
        }
      `;

      const data = await sanityClient.fetch(query);

      // ✅ Filter expired jobs
      const today = new Date();
      const activeJobs =
        data?.jobOpenings?.filter((job) =>
          job.lastDate ? new Date(job.lastDate) >= today : true
        ) || [];

      set({
        testimonials: data?.testimonials || [],
        jobOpenings: activeJobs,
        loading: false,
      });

    } catch (error) {
      set({
        error: error.message || "Failed to fetch career page",
        loading: false,
      });
    }
  },
}));