import { create } from "zustand"
import { sanityClient } from "../api"

export const useERMStore = create((set, get) => ({

  ermHeroSection: null,
  ermIntroSection: null,
  ermRiskMaturitySection: null,
  ermScopeDeliverablesSection: null,
  ermMethodologySection: null,
  ermImplementationSection: null,
  ermAdvantagesSection: null,
  ermFaqSection: null,
  ermCtaSection: null,

  loading: false,
  error: null,

  // helper
  _pick: (sections, type) =>
    sections.find(s => s._type === type) || null,

  // ✅ fetch ERM page
  getERMContent: async () => {
    try {
      set({ loading: true, error: null })

      const data = await sanityClient.fetch(`
        *[_type == "ermPage"][0]{
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
        ermHeroSection: pick(sections, "ermHeroSection"),
        ermIntroSection: pick(sections, "ermIntroSection"),
        ermRiskMaturitySection: pick(sections, "ermRiskMaturitySection"),
        ermScopeDeliverablesSection: pick(sections, "ermScopeDeliverablesSection"),
        ermMethodologySection: pick(sections, "ermMethodologySection"),
        ermImplementationSection: pick(sections, "ermImplementationSection"),
        ermAdvantagesSection: pick(sections, "ermAdvantagesSection"),
        ermFaqSection: pick(sections, "ermFaqSection"),
        ermCtaSection: pick(sections, "ermCtaSection"),
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
  getERMSectionByType: async (type) => {
    try {
      set({ loading: true, error: null })

      const data = await sanityClient.fetch(`
        *[_type == "ermPage"][0]{
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