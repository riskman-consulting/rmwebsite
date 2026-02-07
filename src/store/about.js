import { create } from "zustand"
import { sanityClient } from "../api"

export const useAboutStore = create((set, get) => ({

  aboutHeroSection: null,
  aboutIntroductionSection: null,
  aboutMissionVisionSection: null,
  aboutFeaturesSection: null,
  aboutJourneyTimelineSection: null,
  aboutTributeSection: null,
  aboutLeadershipSection: null,
  aboutServiceLeadersSection: null,
  aboutTestimonialsSection: null,
  aboutAlliancePartnersSection: null,
  aboutTeamsSection: null,
  aboutFaqSection: null,
  aboutCtaSection: null,

  loading: false,
  error: null,

  // helper
  _pick: (sections, type) =>
    sections.find(s => s._type === type) || null,

  // ✅ fetch full about page
  getAboutContent: async () => {
    try {
      set({ loading: true, error: null })

      const data = await sanityClient.fetch(`
        *[_type == "aboutPage"][0]{
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
        aboutHeroSection: pick(sections, "aboutHeroSection"),
        aboutIntroductionSection: pick(sections, "aboutIntroductionSection"),
        aboutMissionVisionSection: pick(sections, "aboutMissionVisionSection"),
        aboutFeaturesSection: pick(sections, "aboutFeaturesSection"),
        aboutJourneyTimelineSection: pick(sections, "aboutJourneyTimelineSection"),
        aboutTributeSection: pick(sections, "aboutTributeSection"),
        aboutLeadershipSection: pick(sections, "aboutLeadershipSection"),
        aboutServiceLeadersSection: pick(sections, "aboutServiceLeadersSection"),
        aboutTestimonialsSection: pick(sections, "aboutTestimonialsSection"),
        aboutAlliancePartnersSection: pick(sections, "aboutAlliancePartnersSection"),
        aboutTeamsSection: pick(sections, "aboutTeamsSection"),
        aboutFaqSection: pick(sections, "aboutFaqSection"),
        aboutCtaSection: pick(sections, "aboutCtaSection"),

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
  getAboutSectionByType: async (type) => {
    try {
      set({ loading: true, error: null })

      const data = await sanityClient.fetch(`
        *[_type == "aboutPage"][0]{
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