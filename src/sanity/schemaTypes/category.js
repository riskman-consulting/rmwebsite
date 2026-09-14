import { defineField, defineType } from 'sanity'

export const category = defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (r) => r.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (r) => r.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            description: 'Brief category description.',
        }),
        defineField({
            name: 'definition',
            title: 'Definition (AEO)',
            type: 'text',
            rows: 3,
            description: 'Paragraph definition LLMs may cite when describing this category.',
        }),
    ],
    preview: {
        select: { title: 'title', subtitle: 'description' },
    },
})
