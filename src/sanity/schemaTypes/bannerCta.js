import { defineField, defineType } from 'sanity'

export const bannerCta = defineType({
    name: 'bannerCta',
    title: 'Banner CTA',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'text',
        }),
        defineField({
            name: 'image',
            title: 'Background Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'btnText',
            title: 'Button Text',
            type: 'string',
        }),
        defineField({
            name: 'btnLink',
            title: 'Button Link',
            type: 'string',
        }),
    ],
})
