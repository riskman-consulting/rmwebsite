import { create } from "zustand"
import { sanityClient } from "../api"

export const useRBIAStore = create((set, get) => ({

  rbiaHeroSection: null,
  rbiaLandscapeSection: null,
  rbiaRiskAdvisorySection: null,
  rbiaCustomizedApproachSection: null,
  rbiaSampleIaSection: null,
  rbiaStrategyPlanSection: null,
  rbiaCtaSection: null,
  rbiaFaqSection: null,

  loading: false,
  error: null,

  // helper
  _pick: (sections, type) =>
    sections.find(s => s._type === type) || null,

  // ✅ fetch RBIA page
  getRBIAContent: async () => {
    try {
      set({ loading: true, error: null })

      const data = await sanityClient.fetch(`
        *[_type == "rbiaPage"][0]{
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
        rbiaHeroSection: pick(sections, "rbiaHeroSection"),
        rbiaLandscapeSection: pick(sections, "rbiaLandscapeSection"),
        rbiaRiskAdvisorySection: pick(sections, "rbiaRiskAdvisorySection"),
        rbiaCustomizedApproachSection: pick(sections, "rbiaCustomizedApproachSection"),
        rbiaSampleIaSection: pick(sections, "rbiaSampleIaSection"),
        rbiaStrategyPlanSection: pick(sections, "rbiaStrategyPlanSection"),
        rbiaCtaSection: pick(sections, "rbiaCtaSection"),
        rbiaFaqSection: pick(sections, "rbiaFaqSection"),
        loading: false
      })

    } catch (err) {
      set({
        error: err.message || "Fetch failed",
        loading: false
      })
    }
  },

  // ✅ optional — fetch one section only
  getRBIASectionByType: async (type) => {
    try {
      set({ loading: true, error: null })

      const data = await sanityClient.fetch(`
        *[_type == "rbiaPage"][0]{
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