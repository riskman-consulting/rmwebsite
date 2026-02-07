import { create } from "zustand"
import { sanityClient } from "../api"

export const useServicePageStore = create((set) => ({

  servicePage: null,
  loading: false,
  error: null,

  // ✅ fetch service page
  getServicePageContent: async () => {
    try {
      set({ loading: true, error: null })

      const data = await sanityClient.fetch(`
        *[_type == "servicePage"][0]{
          
          heroSection{
            ...,
            "imageUrl": image.asset->url,
            "bgUrl": backgroundImage.asset->url
          },

          stickyServiceSection{
            ...,
            items[]{
              ...,
              "iconUrl": icon.asset->url
            }
          },

          AllServicesSection{
            ...,
            services[]{
              ...,
              "imageUrl": image.asset->url
            }
          },

          CapabilitiesSection{
            ...,
            capabilities[]{
              ...,
              "iconUrl": icon.asset->url
            }
          },

          ctaSection{
            ...,
            "bgUrl": backgroundImage.asset->url
          }

        }
      `)

      set({
        servicePage: data,
        loading: false
      })

    } catch (err) {
      set({
        error: err.message || "Fetch failed",
        loading: false
      })
    }
  },

  clearServicePage: () => set({ servicePage: null })

}))