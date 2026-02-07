import { create } from "zustand"
import { sanityClient } from "../api"

export const useIndustriesStore = create((set) => ({

  industries: null,
  loading: false,
  error: null,

  // ✅ fetch industries page
  getIndustriesContent: async () => {
    try {
      set({ loading: true, error: null })

      const data = await sanityClient.fetch(`
        *[_type == "industriesPage"][0]{
          
          heroSection{
            label,
            heading,
            description,
            images[]{
              "url": asset->url
            }
          },

          expertiseSection{
            tagline,
            heading,
            description,
            "backgroundIconUrl": backgroundIcon.asset->url
          },

          industriesGridHeader{
            label,
            heading,
            description
          },

          featureHighlights{
            heading,
            items[]{
              title,
              description,
              "iconImageUrl": iconImage.asset->url
            }
          },

          ctaSection{
            heading,
            description,
            badges,
            buttonText,
            buttonLink,
            "backgroundImageUrl": backgroundImage.asset->url
          }

        }
      `)

      set({
        industries: data,
        loading: false
      })

    } catch (err) {
      set({
        error: err.message || "Fetch failed",
        loading: false
      })
    }
  },

  clearIndustries: () => set({ industries: null })

}))