import { create } from "zustand"
import { sanityClient } from "../api"

export const useRiskAdvisoryStore = create((set, get) => ({

  riskHeroSection: null,
  riskOverviewSection: null,
  riskServicesSection: null,
  riskWhyRiskManSection: null,
  riskCtaSection: null,
  riskFaqSection: null,

  loading: false,
  error: null,

  // helper
  _pick: (sections, type) =>
    sections.find(s => s._type === type) || null,

  // ✅ fetch Risk Advisory page
  getRiskAdvisoryContent: async () => {
    try {
      set({ loading: true, error: null })

      const data = await sanityClient.fetch(`
        *[_type == "riskAdvisoryPage"][0]{
          title,
          sections[]{
            ...,
            "imageUrl": image.asset->url,
            "bgUrl": backgroundImage.asset->url
          }
        }
      `)

      const sections = data?.sections || []
      const pick = get()._pick

      set({
        riskHeroSection: pick(sections, "riskHeroSection"),
        riskOverviewSection: pick(sections, "riskOverviewSection"),
        riskServicesSection: pick(sections, "riskServicesSection"),
        riskWhyRiskManSection: pick(sections, "riskWhyRiskManSection"),
        riskCtaSection: pick(sections, "riskCtaSection"),
        riskFaqSection: pick(sections, "riskFaqSection"),
        loading: false
      })

    } catch (err) {
      set({
        error: err.message || "Fetch failed",
        loading: false
      })
    }
  },

  // ✅ optional — single section fetch
  getRiskSectionByType: async (type) => {
    try {
      set({ loading: true, error: null })

      const data = await sanityClient.fetch(`
        *[_type == "riskAdvisoryPage"][0]{
          sections[_type == "${type}"][0]{
            ...,
            "imageUrl": image.asset->url,
            "bgUrl": backgroundImage.asset->url
          }
        }
      `)

      set({ loading: false })
      return data?.sections || null

    } catch (err) {
      set({ error: err.message, loading: false })
      return null
    }
  }

}))