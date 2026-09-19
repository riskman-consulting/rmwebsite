import { defineField, defineType } from 'sanity'

export const mediaFolder = defineType({
    name: 'mediaFolder',
    title: 'Media Folder',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Folder Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'parent',
            title: 'Parent Folder',
            type: 'reference',
            to: [{ type: 'mediaFolder' }],
        }),
    ],
})
