import { create } from "zustand"
import { sanityClient } from "../api"

export const useBCPStore = create((set, get) => ({

  bcpHeroSection: null,
  bcpOverviewSection: null,
  bcpBenefitsSection: null,
  bcpFocusAreasSection: null,
  bcpMethodologySection: null,
  bcpCallToActionSection: null,
  bcpFaqSection: null,

  loading: false,
  error: null,

  // helper
  _pick: (sections, type) =>
    sections.find(s => s._type === type) || null,

  // ✅ fetch full BCP page
  getBCPContent: async () => {
    try {
      set({ loading: true, error: null })

      const data = await sanityClient.fetch(`
        *[_type == "bcpPage"][0]{
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
        bcpHeroSection: pick(sections, "bcpHeroSection"),
        bcpOverviewSection: pick(sections, "bcpOverviewSection"),
        bcpBenefitsSection: pick(sections, "bcpBenefitsSection"),
        bcpFocusAreasSection: pick(sections, "bcpFocusAreasSection"),
        bcpMethodologySection: pick(sections, "bcpMethodologySection"),
        bcpCallToActionSection: pick(sections, "bcpCallToActionSection"),
        bcpFaqSection: pick(sections, "bcpFaqSection"),
        loading: false
      })

    } catch (err) {
      set({
        error: err.message || "Fetch failed",
        loading: false
      })
    }
  },

  // ✅ optional — fetch single section
  getBCPSectionByType: async (type) => {
    try {
      set({ loading: true, error: null })

      const data = await sanityClient.fetch(`
        *[_type == "bcpPage"][0]{
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