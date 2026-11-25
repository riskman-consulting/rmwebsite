import { create } from "zustand";
import { buildData } from "../utils/buildData";
import { sanityClient } from "../api/sanity";

const IMAGE_PROJECTION = `{
  alt,
  hotspot,
  crop,
  asset->{
    _id,
    url,
    metadata { dimensions, lqip }
  }
}`;

const POST_LIST_PROJECTION = `{
  _id,
  title,
  "slug": slug.current,
  "mainImage": mainImage${IMAGE_PROJECTION},
  "mainImageAlt": mainImage.alt,
  shortDescription,
  contentType,
  funnelStage,
  articleType,
  targetReader,
  topicOwnership,
  "parentTopic": parentPillar->topicOwnership,
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
  "mainImage": mainImage${IMAGE_PROJECTION},
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
    "mainImage": mainImage${IMAGE_PROJECTION},
    "mainImageAlt": mainImage.alt,
    shortDescription,
    tldr,
    metaDescription
  }
}`;

// A post with a future publishedDate is scheduled: it stays hidden (lists and
// direct URL) until that date/time arrives. Posts without a date show as before.
const IS_PUBLISHED = `(!defined(publishedDate) || dateTime(publishedDate) <= dateTime(now()))`;
const NEWEST_FIRST = `order(coalesce(publishedDate, _createdAt) desc)`;

export const useBlogStore = create((set, get) => ({

  // ================= STATE =================
  posts: buildData("posts", []),
  singlePost: null,

  loading: false,
  error: null,

  // ================= FETCHERS =================

  fetchPosts: async () => {
    try {
      // A list already on screen (from the build) stays while it refreshes
      set({ loading: get().posts.length === 0, error: null });

      const data = await sanityClient.fetch(`
        *[_type == "post" && ${IS_PUBLISHED}] | ${NEWEST_FIRST} ${POST_LIST_PROJECTION}
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
        `*[_type == "post" && slug.current == $slug && ${IS_PUBLISHED}][0] ${POST_DETAIL_PROJECTION}`,
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
        `*[_type == "post" && contentType == $contentType && ${IS_PUBLISHED}] | ${NEWEST_FIRST} ${POST_LIST_PROJECTION}`,
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
        `*[_type == "post" && funnelStage == $funnelStage && ${IS_PUBLISHED}] | ${NEWEST_FIRST} ${POST_LIST_PROJECTION}`,
        { funnelStage }
      );

      set({ posts: data || [], loading: false });

    } catch (e) {
      set({ error: e.message, loading: false });
    }
  },

  clearSinglePost: () => set({ singlePost: null }),

}));
