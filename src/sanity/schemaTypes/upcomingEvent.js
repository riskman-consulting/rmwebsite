import { defineField, defineType } from "sanity";

export const upcomingEvent = defineType({
  name: "upcomingEvent",
  title: "Upcoming Event",
  type: "document",
  fields: [

    // Category (Conference / Webinar / etc.)
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Conference", value: "Conference" },
          { title: "Webinar", value: "Webinar" },
          { title: "Workshop", value: "Workshop" },
          { title: "Seminar", value: "Seminar" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),

    // Title
    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // Slug (for dynamic pages)
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // Event Date (better than string)
    defineField({
      name: "eventDate",
      title: "Event Date",
      type: "date",
      options: {
        dateFormat: "DD MMMM YYYY",
      },
      validation: (Rule) => Rule.required(),
    }),

    // Optional End Date (for multi-day events)
    defineField({
      name: "endDate",
      title: "End Date (Optional)",
      type: "date",
    }),

    // Location
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // Optional Banner Image
    defineField({
      name: "bannerImage",
      title: "Banner Image",
      type: "image",
      options: { hotspot: true },
    }),

    // Short Description
    defineField({
      name: "summary",
      title: "Short Description",
      type: "text",
    }),

    // Full Content
    defineField({
      name: "content",
      title: "Event Content",
      type: "blockContent",
    }),

  ],
});