import { create } from "zustand"
import { sanityClient } from "../api"

export const useEventStore = create((set, get) => ({

  eventHeroSection: null,
  eventsSection: null,
  eventUpcomingEventsSection: null,
  eventMomentsSection: null,
  eventAwardsSection: null,
  eventCompanyTimelineSection: null,
  eventWhyItMattersSection: null,
  eventTeamTestimonialsSection: null,
  eventCtaSection: null,

  loading: false,
  error: null,

  // helper
  _pick: (sections, type) =>
    sections.find(s => s._type === type) || null,

  // ✅ fetch event page
  getEventContent: async () => {
    try {
      set({ loading: true, error: null })

      const data = await sanityClient.fetch(`
        *[_type == "eventPage"][0]{
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
        eventHeroSection: pick(sections, "eventHeroSection"),
        eventsSection: pick(sections, "eventsSection"),
        eventUpcomingEventsSection: pick(sections, "eventUpcomingEventsSection"),
        eventMomentsSection: pick(sections, "eventMomentsSection"),
        eventAwardsSection: pick(sections, "eventAwardsSection"),
        eventCompanyTimelineSection: pick(sections, "eventCompanyTimelineSection"),
        eventWhyItMattersSection: pick(sections, "eventWhyItMattersSection"),
        eventTeamTestimonialsSection: pick(sections, "eventTeamTestimonialsSection"),
        eventCtaSection: pick(sections, "eventCtaSection"),
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
  getEventSectionByType: async (type) => {
    try {
      set({ loading: true, error: null })

      const data = await sanityClient.fetch(`
        *[_type == "eventPage"][0]{
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