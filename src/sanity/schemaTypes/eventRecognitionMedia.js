import { defineField, defineType } from "sanity";

export const eventRecognitionMedia = defineType({
  name: "eventRecognitionMedia",
  title: "Event Recognition Media",
  type: "document",
  fields: [

    // Image
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    // Category (Tab Type)
    defineField({
      name: "type",
      title: "Category Type",
      type: "string",
      options: {
        list: [
          { title: "Accomplishments", value: "accomplishments" },
          { title: "Emerging Leaders", value: "emerging" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    // Search Terms (for filtering)
    defineField({
      name: "terms",
      title: "Search Keywords",
      type: "array",
      of: [{ type: "string" }],
      description: "Add keywords like iia, conference, mumbai, 2025 etc",
    }),

    // Optional Title
    defineField({
      name: "title",
      title: "Title (Optional)",
      type: "string",
    }),

    // Optional Event Name
    defineField({
      name: "eventName",
      title: "Event Name",
      type: "string",
    }),

    // Event Date
    defineField({
      name: "eventDate",
      title: "Event Date",
      type: "date",
    }),

    // Location
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),

    // Optional Description
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

  ],
});