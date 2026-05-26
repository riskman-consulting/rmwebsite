import { create } from "zustand";
import { sanityClient } from "../api/sanity";

const POST_LIST_PROJECTION = `{
  _id,
  title,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "mainImageAlt": mainImage.alt,
  shortDescription,
  contentType,
  funnelStage,
  articleType,
  targetReader,
  topicOwnership,
  tags,
  seoTitle,
  metaDescription,
  primaryKeyword,
  secondaryKeywords,
  canonicalUrl,
  tldr,
  takeaways,
  publishedDate,
  lastUpdated,
  _createdAt,
  _updatedAt,
  author->{
    name,
    "slug": slug.current,
    "image": image.asset->url,
    title,
    bio
  },
  categories[]->{
    title,
    "slug": slug.current,
    description
  }
}`;

const POST_DETAIL_PROJECTION = `{
  _id,
  title,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "mainImageAlt": mainImage.alt,
  shortDescription,
  body[]{
    ...,
    _type == "block" => {
      ...,
      markDefs[]{
        ...,
        _type == "internalLink" => {
          ...,
          "reference": reference->{
            _type,
            title,
            "slug": slug.current
          }
        }
      }
    }
  },
  contentType,
  funnelStage,
  articleType,
  targetReader,
  topicOwnership,
  tags,
  seoTitle,
  metaDescription,
  primaryKeyword,
  secondaryKeywords,
  canonicalUrl,
  tldr,
  takeaways,
  faqs,
  publishedDate,
  lastUpdated,
  relatedPostsPosition,
  _createdAt,
  _updatedAt,
  author->{
    name,
    "slug": slug.current,
    "image": image.asset->url,
    title,
    bio
  },
  categories[]->{
    title,
    "slug": slug.current,
    description
  },
  parentPillar->{
    title,
    "slug": slug.current
  },
  "relatedPosts": relatedPosts[]->{
    _id,
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    "mainImageAlt": mainImage.alt,
    shortDescription,
    tldr,
    metaDescription
  }
}`;

export const useBlogStore = create((set) => ({

  // ================= STATE =================
  posts: [],
  singlePost: null,

  loading: false,
  error: null,

  // ================= FETCHERS =================

  fetchPosts: async () => {
    try {
      set({ loading: true, error: null });

      const data = await sanityClient.fetch(`
        *[_type == "post"] | order(_createdAt desc) ${POST_LIST_PROJECTION}
      `);

      set({ posts: data || [], loading: false });

    } catch (e) {
      set({ error: e.message, loading: false });
    }
  },

  fetchPostBySlug: async (slug) => {
    try {
      set({ loading: true, error: null, singlePost: null });

      const data = await sanityClient.fetch(
        `*[_type == "post" && slug.current == $slug][0] ${POST_DETAIL_PROJECTION}`,
        { slug }
      );

      set({ singlePost: data || null, loading: false });

    } catch (e) {
      set({ error: e.message, loading: false });
    }
  },

  fetchPostsByContentType: async (contentType) => {
    try {
      set({ loading: true, error: null });

      const data = await sanityClient.fetch(
        `*[_type == "post" && contentType == $contentType] | order(_createdAt desc) ${POST_LIST_PROJECTION}`,
        { contentType }
      );

      set({ posts: data || [], loading: false });

    } catch (e) {
      set({ error: e.message, loading: false });
    }
  },

  fetchPostsByFunnelStage: async (funnelStage) => {
    try {
      set({ loading: true, error: null });

      const data = await sanityClient.fetch(
        `*[_type == "post" && funnelStage == $funnelStage] | order(_createdAt desc) ${POST_LIST_PROJECTION}`,
        { funnelStage }
      );

      set({ posts: data || [], loading: false });

    } catch (e) {
      set({ error: e.message, loading: false });
    }
  },

  clearSinglePost: () => set({ singlePost: null }),

}));
