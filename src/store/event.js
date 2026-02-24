import { create } from "zustand";
import { sanityClient } from "../api/sanity";

// eventsPage document (only one)
const EVENTS_PAGE_BASE = `*[_type == "eventsPage"][0]`;

export const useEventsStore = create((set) => ({

  // ================= STATE =================
  heroImages: [],
  internationalAssignments: [],
  events: [],
  photos: [],
  eventRecognitionMedia: [],
  engagement: [],
  leaders: [],
  upcomingEvents: [],
  singleUpcomingEvent: null,

  loading: false,
  error: null,

  // ================= EVENTS PAGE =================

  fetchHeroImages: async () => {
    try {
      set({ loading: true });

      const data = await sanityClient.fetch(`
        ${EVENTS_PAGE_BASE}{
          heroImages[]{
            asset->{url}
          }
        }
      `);

      set({
        heroImages: data?.heroImages || [],
        loading: false
      });

    } catch (e) {
      set({ error: e.message, loading: false });
    }
  },


  fetchEngagement: async () => {
    try {
      const query = `*[_type == "engagement"] {
      _id,
      country,
      "images": images[].asset->url
    }`;

      const data = await sanityClient.fetch(query);

      set({ engagement: data });
    } catch (error) {
      console.error("Error fetching engagement data:", error);
    }
  },

  fetchInternationalAssignments: async () => {
    try {
      set({ loading: true });

      const data = await sanityClient.fetch(`
        ${EVENTS_PAGE_BASE}{
          internationalAssignments[]{
            person,
            role,
            country,
            countryCode,
            city,
            date,
            title,
            story,
            images[]{
              asset->{url}
            }
          }
        }
      `);




      set({
        internationalAssignments: data?.internationalAssignments || [],
        loading: false
      });

    } catch (e) {
      set({ error: e.message, loading: false });
    }
  },

  // ================= EVENTS (event document) =================
  fetchPhoto: async () => {
    try {
      set({ loading: true, error: null });

      const query = `*[_type == "photo"] | order(year desc){
        _id,
        title,
        category,
        subCategory,
        year,
        description,
        tags,
        "imageUrl": image.asset->url
      }`;

      const data = await sanityClient.fetch(query);



      set({ photos: data, loading: false });

    } catch (error) {
      console.error("Error fetching photos:", error);
      set({ error: "Failed to fetch photos", loading: false });
    }
  },

  fetchEvents: async () => {
    try {
      set({ loading: true });

      const data = await sanityClient.fetch(`
        *[_type == "event"] | order(eventDate desc){
          _id,
          title,
          slug,
          category,
          eventDate,
          displayDate,
          shortDesc,
          location,
          type,
          description,
          bannerImage{
            asset->{url}
          },
          gallery[]{
            alt,
            asset->{url}
          }
        }
      `);



      set({ events: data, loading: false });

    } catch (e) {
      set({ error: e.message, loading: false });
    }
  },

  // ================= LEADERS =================

  fetchLeaders: async () => {
    try {
      const data = await sanityClient.fetch(`
        *[_type == "leader"]{
          name,
          title,
          linkedin,
          image{
            asset->{url}
          }
        }
      `);

      set({ leaders: data });

    } catch (e) {
      set({ error: e.message });
    }
  },
  // ================= UPCOMING EVENTS =================

  fetchUpcomingEvents: async () => {
    try {
      set({ loading: true, error: null });

      const data = await sanityClient.fetch(`
      *[_type == "upcomingEvent" && eventDate >= now()] 
      | order(eventDate asc){
        _id,
        title,
        slug,
        category,
        eventDate,
        endDate,
        location,
        summary,
        bannerImage{
          asset->{url}
        }
      }
    `);

      set({ upcomingEvents: data || [], loading: false });

    } catch (e) {
      set({ error: e.message, loading: false });
    }
  },
  // ================= EVENT RECOGNITION MEDIA =================

fetchEventRecognitionMedia: async () => {
  try {
    set({ loading: true, error: null });

    const data = await sanityClient.fetch(`
      *[_type == "eventRecognitionMedia"] | order(eventDate desc){
        _id,
        type,
        terms,
        title,
        eventName,
        eventDate,
        location,
        description,
        image{
          asset->{url}
        }
      }
    `);

    set({ eventRecognitionMedia: data || [], loading: false });

  } catch (e) {
    set({ error: e.message, loading: false });
  }
},

}));