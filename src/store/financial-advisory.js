import { create } from "zustand"
import { sanityClient } from "../api"

export const useFinancialAdvisoryStore = create((set, get) => ({

  financialHeroSection: null,
  financialValuePillarsSection: null,
  financialServiceCatalogSection: null,
  financialMarketInsightSection: null,
  financialSmeAdvisorySection: null,
  financialTrackRecordSection: null,
  financialFaqSection: null,

  loading: false,
  error: null,

  // helper
  _pick: (sections, type) =>
    sections.find(s => s._type === type) || null,

  // ✅ fetch page
  getFinancialAdvisoryContent: async () => {
    try {
      set({ loading: true, error: null })

      const data = await sanityClient.fetch(`
        *[_type == "financialAdvisory"][0]{
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
        financialHeroSection: pick(sections, "financialHeroSection"),
        financialValuePillarsSection: pick(sections, "financialValuePillarsSection"),
        financialServiceCatalogSection: pick(sections, "financialServiceCatalogSection"),
        financialMarketInsightSection: pick(sections, "financialMarketInsightSection"),
        financialSmeAdvisorySection: pick(sections, "financialSmeAdvisorySection"),
        financialTrackRecordSection: pick(sections, "financialTrackRecordSection"),
        financialFaqSection: pick(sections, "financialFaqSection"),
        loading: false
      })

    } catch (err) {
      set({
        error: err.message || "Fetch failed",
        loading: false
      })
    }
  },

  // ✅ optional single section fetch
  getFinancialSectionByType: async (type) => {
    try {
      set({ loading: true, error: null })

      const data = await sanityClient.fetch(`
        *[_type == "financialAdvisory"][0]{
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