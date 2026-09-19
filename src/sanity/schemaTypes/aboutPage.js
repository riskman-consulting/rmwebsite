import { defineField, defineType } from 'sanity'

export const aboutPage = defineType({
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),

        defineField({
            name: 'philosophy',
            title: 'Philosophy',
            type: 'text',
        }),

        defineField({
            name: 'heroSlides',
            title: 'Hero Slides',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'badge', title: 'Badge', type: 'string' },
                        { name: 'titleLine1', title: 'Title Line 1', type: 'string' },
                        { name: 'titleLine2', title: 'Title Line 2', type: 'string' },
                        { name: 'description', title: 'Description', type: 'text' },
                        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
                    ],
                },
            ],
        }),

        // Introduction Section
        defineField({
            name: 'introductionImage',
            title: 'Introduction Section Image',
            type: 'image',
            description: 'Main image for the "Who We Are" section',
            options: { hotspot: true },
        }),

        // Mission & Vision Section - 2x2 Grid
        defineField({
            name: 'missionVisionImages',
            title: 'Mission & Vision Images (Grid)',
            type: 'object',
            description: 'Four images displayed in a 2x2 grid',
            fields: [
                { name: 'image1', title: 'Image 1', type: 'image', options: { hotspot: true } },
                { name: 'image2', title: 'Image 2', type: 'image', options: { hotspot: true } },
                { name: 'image3', title: 'Image 3', type: 'image', options: { hotspot: true } },
                { name: 'image4', title: 'Image 4', type: 'image', options: { hotspot: true } },
            ],
        }),

        // ✅ Leadership — FIXED (array items must be object)
        defineField({
            name: 'leadership',
            title: 'Co-Founders & Leadership',
            type: 'array',
            description: 'Co-founder team members (3 people)',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'name', title: 'Name', type: 'string', validation: Rule => Rule.required() },
                        { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() },
                        { name: 'bio', title: 'Bio', type: 'text', validation: Rule => Rule.required() },
                        { name: 'location', title: 'Location', type: 'string', validation: Rule => Rule.required() },
                        { name: 'linkedin', title: 'Linkedin', type: 'string', validation: Rule => Rule.required() },
                        { name: 'badge', title: 'Badge', type: 'string' },
                        { name: "image", title: "Image", type: "image" },

                        defineField({
                            name: 'summaryBlocks',
                            title: 'Summary Blocks',
                            type: 'array',
                            of: [{ type: 'string' }],
                        }),

                        defineField({
                            name: 'expertise',
                            title: 'Expertise',
                            type: 'array',
                            of: [{ type: 'string' }],
                        }),

                        { name: 'highlightsTitle', title: 'Highlights Title', type: 'string' },

                        defineField({
                            name: 'highlights',
                            title: 'Highlights',
                            type: 'array',
                            of: [{ type: 'string' }],
                        }),

                        { name: 'certTitle', title: 'Cert Title', type: 'string' },

                        // ✅ fixed object array
                        defineField({
                            name: 'certifications',
                            title: 'Certifications',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        { name: 'title', title: 'Title', type: 'string' },
                                        { name: 'org', title: 'Organization', type: 'string' },
                                    ],
                                },
                            ],
                        }),

                        // ✅ fixed invalid nested array
                        defineField({
                            name: 'philosophyBlocks',
                            title: 'Philosophy Blocks',
                            type: 'array',
                            of: [{ type: 'string' }],
                        }),
                    ],
                },
            ],
        }),

        // Service Leaders
        defineField({
            name: 'serviceLeaders',
            title: 'Service Leaders & Client Leads',
            type: 'array',
            description: 'Associate partners and client leads (4 people)',
            of: [
                {
                    type: 'object',
                    name: 'serviceLeader',
                    title: 'Service Leader',
                    fields: [
                        defineField({
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name:"title",
                            title:"Title",
                            type:"string"
                        }),
                        defineField({
                            name: 'location',
                            title: 'Location',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'credentials',
                            title: 'Credentials',
                            type: 'string',
                        }),
                        defineField({
                            name: 'bio',
                            title: 'Bio',
                            type: 'text',
                        }),
                        defineField({
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        }),
                        defineField({
                            name: 'expertise',
                            title: 'Expertise',
                            type: 'array',
                            of: [{ type: 'string' }],
                        }),
                        defineField({
                            name: 'linkedin',
                            title: 'LinkedIn',
                            type: 'url',
                        }),
                    ],
                },
            ],
        }),

        defineField({
            name: 'profileImage',
            title: 'Profile Image (Legacy)',
            type: 'image',
            options: { hotspot: true },
        }),

        defineField({
            name: 'experience',
            title: 'Experience',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'experience' }] }],
        }),
    ],
})