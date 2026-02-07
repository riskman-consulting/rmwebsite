import { create } from "zustand"
import { sanityClient } from "../api"

export const useHomeStore = create((set, get) => ({

  home_Section: null,
  blogSection: null,
  strategicSection: null,
  keyServicesSection: null,
  clientMarqueeSection: null,
  ctaSection: null,
  eventCTASection: null,
  industrySection: null,
  stateSection: null,
  riskComplianceSection: null,
  leadershipSection: null,
  testimonialsSection: null,
  faqSection: null,
  whyChooseRiskManSection: null,

  loading: false,
  error: null,

  // ✅ helper
  _pickSection: (sections, type) =>
    sections.find((s) => s._type === type) || null,

  // ✅ fetch full home page
  getHomeContent: async () => {
    try {
      set({ loading: true, error: null })

      const data = await sanityClient.fetch(`
        *[_type == "homePage"][0]{
          title,
          sections[]{
            ...,
            "imageUrl": image.asset->url,
            "bgUrl": backgroundImage.asset->url
          }
        }
      `)

      const sections = data?.sections || []
      const pick = get()._pickSection

      set({
        home_Section: pick(sections, "home_section"),
        blogSection: pick(sections, "blogSection"),
        strategicSection: pick(sections, "strategicSection"),
        keyServicesSection: pick(sections, "keyServicesSection"),
        clientMarqueeSection: pick(sections, "clientsMarqueeSection"),
        ctaSection: pick(sections, "ctaSection"),
        eventCTASection: pick(sections, "eventCTASection"),
        industrySection: pick(sections, "industrySection"),
        stateSection: pick(sections, "statsSection"),
        riskComplianceSection: pick(sections, "riskComplianceSection"),
        leadershipSection: pick(sections, "leadershipSection"),
        testimonialsSection: pick(sections, "testimonialsSection"),
        faqSection: pick(sections, "faqSection"),
        whyChooseRiskManSection: pick(sections, "whyChooseRiskManSection"),

        loading: false
      })

    } catch (err) {
      set({
        error: err.message || "Fetch failed",
        loading: false
      })
    }
  },

  // ✅ optional — fetch single section by type
  getSectionByType: async (type) => {
    try {
      set({ loading: true, error: null })

      const data = await sanityClient.fetch(`
        *[_type == "homePage"][0]{
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