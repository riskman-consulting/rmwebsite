import { create } from "zustand";
import { sanityClient } from "../api/sanity";

const BASE = `*[_type == "homePage"][1]`;

export const useHomePage = create((set) => ({

  // ================= STATE =================
  heroSlides: [],
  strategiesSection: null,
  whyRiskManImage: null,
  testimonials: [],
  stats: [],
  keyServices: null,
  valueDifferentiators: null,
  featuredPosts: [],
  industries: [],
  featuredEvents: [],
  ctaSection: null,
  services: [],

  loading: false,
  error: null,

  // ================= MASTER FETCH =================
  fetchHomePage: async () => {
    try {
      set({ loading: true, error: null });

      const data = await sanityClient.fetch(`${BASE}{
        heroSlides[]{
          badge,
          titleLine1,
          titleLine2,
          description,
          btn1Text,
          btn1Link,
          btn2Text,
          btn2Link,
          image{asset->{url}}
        },

        strategiesSection{
          image{asset->{url}},
          features[]{title, desc}
        },

        whyRiskManImage{asset->{url}},

        testimonials[]{
          name,
          role,
          text,
          color,
          textColor,
          image{asset->{url}}
        },

        stats[]{value,label},

        keyServices{
          title,
          subtitle,
          services[]{
            id,
            title,
            description,
            path,
            image{asset->{url}}
          }
        },

        valueDifferentiators{
          title,
          subtitle,
          items[]{
            title,
            description,
            iconName,
            image{asset->{url}}
          }
        },

        featuredPosts[]->{
          _id,
          title,
          slug,
          mainImage{asset->{url}}
        },

        industries[]->{
  _id,
  title,
  slug,
  subtitle,
  marquee,
  icon,
  tag,
  headerImage{
    asset->{url}
  }
},

        featuredEvents[]->{
          _id,
          title,
          slug,
          image{asset->{url}}
        },

        ctaSection,

        services[]->{
          _id,
          title,
          slug,
          image{asset->{url}}
        }
      }`);



















      set({
        heroSlides: data.heroSlides || [],
        strategiesSection: data.strategiesSection,
        whyRiskManImage: data.whyRiskManImage,
        testimonials: data.testimonials || [],
        stats: data.stats || [],
        keyServices: data.keyServices,
        valueDifferentiators: data.valueDifferentiators,
        featuredPosts: data.featuredPosts || [],
        industries: data.industries || [],
        featuredEvents: data.featuredEvents || [],
        ctaSection: data.ctaSection,
        services: data.services || [],
        loading: false
      });

    } catch (e) {
      set({ error: e.message, loading: false });
    }
  },
  fetchIndustries: async () => {
    try {
      set({ loading: true, error: null });

      const industries = await sanityClient.fetch(`
      *[_type == "industry"]{
        _id,
        title,
        slug,
        subtitle,
        marquee,
        icon,
        tag,
        headerImage{
          asset->{url}
        }
      }
    `);

      set({ industries: industries || [], loading: false });

    } catch (e) {
      set({ error: e.message, loading: false });
    }
  },

}));