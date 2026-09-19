import { defineField, defineType } from 'sanity'

export const mediaAsset = defineType({
    name: 'mediaAsset',
    title: 'Media Asset',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Asset Name',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'folder',
            title: 'Folder',
            type: 'reference',
            to: [{ type: 'mediaFolder' }],
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
        },
    },
})
