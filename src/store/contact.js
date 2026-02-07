import { create } from "zustand"
import { sanityClient } from "../api"

export const useContactStore = create((set) => ({

  contact: null,
  loading: false,
  error: null,

  // ✅ fetch contact page
  getContactContent: async () => {
    try {
      set({ loading: true, error: null })

      const data = await sanityClient.fetch(`
        *[_type == "contactPage"][0]{
          heroTitle,
          heroHighlight,
          heroDescription,
          "heroImageUrl": heroImage.asset->url,

          contactMethods[]{
            title,
            description,
            contact,
            actionLink,
            details
          },

          whyReasons[]{
            title,
            description
          },

          services,
          
          officeHours{
            weekdays,
            saturday,
            sunday
          },

          officeFeatures[]{
            title,
            description
          },

          locationName,
          locationAddress,

          ctaTitle,
          ctaDescription,
          ctaPrimaryLabel,
          ctaPrimaryLink,
          ctaSecondaryLabel,
          ctaSecondaryLink
        }
      `)

      set({
        contact: data,
        loading: false
      })

    } catch (err) {
      set({
        error: err.message || "Fetch failed",
        loading: false
      })
    }
  },

  // optional helper
  clearContact: () => set({ contact: null })

}))