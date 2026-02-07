import { create } from "zustand"
import { sanityClient } from "../api"

export const useBlogStore = create((set) => ({

  blogs: [],
  blog: null,
  loading: false,
  error: null,

  // ✅ get all blogs
  getBlogs: async () => {
    try {
      set({ loading: true, error: null })

      const data = await sanityClient.fetch(`
        *[_type == "blog"] | order(date desc){
          _id,
          title,
          slug,
          category,
          author,
          date,
          readTime,
          shortDescription,
          "featuredImageUrl": featuredImage.asset->url
        }
      `)

      set({ blogs: data, loading: false })

    } catch (err) {
      set({ error: err.message, loading: false })
    }
  },

  // ✅ get blog by slug
  getBlogBySlug: async (slug) => {
    try {
      set({ loading: true, error: null })

      const data = await sanityClient.fetch(`
        *[_type == "blog" && slug.current == $slug][0]{
          _id,
          title,
          slug,
          category,
          author,
          date,
          readTime,
          shortDescription,
          content[]{
            ...,
            "imageUrl": featuredImage.asset->url
          },
          "featuredImageUrl": featuredImage.asset->url
        }
      `, { slug })

      set({ blog: data, loading: false })

    } catch (err) {
      set({ error: err.message, loading: false })
    }
  },

  // ✅ get by category
  getBlogsByCategory: async (category) => {
    try {
      set({ loading: true, error: null })

      const data = await sanityClient.fetch(`
        *[_type == "blog" && category == $category] | order(date desc){
          title,
          slug,
          category,
          author,
          date,
          readTime,
          shortDescription,
          "featuredImageUrl": featuredImage.asset->url
        }
      `, { category })

      set({ blogs: data, loading: false })

    } catch (err) {
      set({ error: err.message, loading: false })
    }
  },

  // ✅ clear single blog
  clearBlog: () => set({ blog: null })

}))