import { defineField, defineType } from 'sanity'

export const engagement = defineType({
    name: 'engagement',
    title: 'Engagement (Global)',
    type: 'document',
    fields: [
        defineField({
            name: 'country',
            title: 'Country',
            type: 'string',
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative Text',
                        },
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'country',
            media: 'images.0',
        },
    },
})
