import { defineField, defineType } from 'sanity'

export const tableOfContents = defineType({
    name: 'tableOfContents',
    title: 'Table of Contents',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Table of Contents',
        }),
    ],
    preview: {
        select: { title: 'title' },
        prepare({ title }) {
            return {
                title: title || 'Table of Contents',
                subtitle: 'Auto-generated from H2/H3 headings',
            }
        },
    },
})
