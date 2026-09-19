import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // ================= HERO SLIDES =================
    defineField({
      name: 'heroSlides',
      title: 'Hero Slides',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'badge', title: 'Badge', type: 'string' }),
            defineField({ name: 'titleLine1', title: 'Title Line 1', type: 'string' }),
            defineField({ name: 'titleLine2', title: 'Title Line 2', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text' }),
            defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'btn1Text', title: 'Button 1 Text', type: 'string' }),
            defineField({ name: 'btn1Link', title: 'Button 1 Link', type: 'string' }),
            defineField({ name: 'btn2Text', title: 'Button 2 Text', type: 'string' }),
            defineField({ name: 'btn2Link', title: 'Button 2 Link', type: 'string' }),
          ],
        },
      ],
    }),

    // ================= FEATURES SECTION =================
    defineField({
      name: 'strategiesSection',
      title: 'Features Section',
      type: 'object',
      description: 'features for Strategic Risk Management section',
      fields: [
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          validation: (rule) => rule.required()
        }),
        defineField({
          name: "features",
          title: "Features",
          type: "array",
          of: [
            {
              type: "object",
              name: "featureItem",
              title: "Feature Item",
              fields: [
                defineField({
                  name: "title",
                  title: "Title",
                  type: "string",
                  validation: (rule) => rule.required()
                }),
                defineField({
                  name: "desc",
                  title: "Description",
                  type: "string",
                  validation: (rule) => rule.required()
                })
              ]
            }
          ]
        })
      ]
    }), // ✅ ← missing comma fixed here

    // ================= WHY RISKMAN IMAGE =================
    defineField({
      name: 'whyRiskManImage',
      title: 'Why RiskMan Section Image',
      type: 'image',
      description: 'Central image for Why Choose RiskMan section',
      options: { hotspot: true },
    }),

    // ================= TESTIMONIALS =================
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      description: 'Client testimonials with profiles',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({ name: 'role', title: 'Role', type: 'string' }),
            defineField({ name: 'text', title: 'Testimonial Text', type: 'text' }),
            defineField({ name: 'image', title: 'Profile Image', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'color', title: 'Card Background Color (CSS)', type: 'string' }),
            defineField({ name: 'textColor', title: 'Text Color (CSS)', type: 'string' }),
          ],
        },
      ],
    }),

    // ================= STATS =================
    defineField({
      name: 'stats',
      title: 'Key Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Value', type: 'string' }),
            defineField({ name: 'label', title: 'Label', type: 'string' }),
          ],
        },
      ],
    }),

    // ================= KEY SERVICES =================
    defineField({
      name: 'keyServices',
      title: 'Key Services Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'text' }),
        defineField({
          name: 'services',
          title: 'Services',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'id', title: 'ID (e.g., 01)', type: 'string' }),
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'text' }),
                defineField({ name: 'image', title: 'Image', type: 'image' }),
                defineField({ name: 'path', title: 'Path', type: 'string' }),
              ],
            },
          ],
        }),
      ],
    }),

    // ================= VALUE DIFFERENTIATORS =================
    defineField({
      name: 'valueDifferentiators',
      title: 'Value Differentiators Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'text' }),
        defineField({
          name: 'items',
          title: 'Differentiators',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'text' }),
                defineField({ name: 'iconName', title: 'Icon Name (Lucide)', type: 'string' }),
                defineField({ name: 'image', title: 'Background Image', type: 'image' }),
              ],
            },
          ],
        }),
      ],
    }),

    // ================= REFERENCES =================
    defineField({
      name: 'featuredPosts',
      title: 'Featured Posts',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'post' }] }],
    }),

    defineField({
      name: 'industries',
      title: 'Featured Industries',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'industry' }] }],
    }),

    defineField({
      name: 'featuredEvents',
      title: 'Featured Events',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'event' }] }],
    }),

    defineField({
      name: 'ctaSection',
      title: 'CTA Banner Section',
      type: 'bannerCta',
    }),

    defineField({
      name: 'services',
      title: 'Featured Services Documents',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),
  ],
})