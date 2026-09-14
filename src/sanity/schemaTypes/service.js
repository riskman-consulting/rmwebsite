import { defineField, defineType } from 'sanity'

export const service = defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Service Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'headerImage',
            title: 'Header Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'summary',
            title: 'Summary',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'blockContent',
        }),
        defineField({
            name: 'ctaSection',
            title: 'CTA Banner Section',
            type: 'bannerCta',
        }),
    ],
})
