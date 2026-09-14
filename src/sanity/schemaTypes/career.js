import { defineField, defineType } from "sanity";

export const careerPage = defineType({
  name: "careerPage",
  title: "Career Page",
  type: "document",
  fields: [
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: "position",
              title: "Position",
              type: "string"
            }),
            defineField({
              name: "quote",
              title: "Quote",
              type: "text"
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true
              }
            }),
            defineField({
              name: "tag",
              title: "Tag",
              type: "string"
            })
          ]
        }
      ]
    }),

    // =====================
    // Job Openings Section
    // =====================
    defineField({
      name: "jobOpenings",
      title: "Job Openings",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Job Title",
              type: "string",
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text"
            }),
            defineField({
              name: "location",
              title: "Location",
              type: "string"
            }),
            defineField({
              name: "employmentType",
              title: "Employment Type",
              type: "string",
              options: {
                list: [
                  { title: "Full Time", value: "FULL_TIME" },
                  { title: "Part Time", value: "PART_TIME" },
                  { title: "Contract", value: "CONTRACT" }
                ]
              }
            }),
            defineField({
              name: "datePosted",
              title: "Date Posted",
              type: "date"
            }),

            // ✅ NEW FIELD ADDED
            defineField({
              name: "lastDate",
              title: "Last Date to Apply",
              type: "date",
              validation: (Rule) =>
                Rule.required().min(Rule.valueOfField("datePosted"))
            })
          ]
        }
      ]
    })
  ]
});