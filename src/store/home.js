import { create } from "zustand"
import { sanityClient } from "../api"

export const useHomeContent = create((set) => ({

  hero: null,
  strategies: null,
  loading: false,
  error: null,
    
  getHomeContent: async () => {
    try {
      set({ loading: true })

      const data = await sanityClient.fetch(
        `*[_type == "homePage"][0]`
      )

      set({ hero: data, loading: false })

    } catch (err) {
      set({ error: err.message, loading: false })
    }
  },

  // ✅ Only strategic sections
  getHomeContentStrategiesSection: async () => {
    try {
      set({ loading: true })

      const data = await sanityClient.fetch(`
        *[_type == "homePage"][0]{
          sections[_type == "strategicSection"]{
            headingLine1,
            description,
            "bgUrl": backgroundImage.asset->url
          }
        }
      `)

      set({ strategies: data.sections, loading: false })

    } catch (err) {
      set({ error: err.message, loading: false })
    }
  }

}))