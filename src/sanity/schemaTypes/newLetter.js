import { defineField, defineType } from 'sanity'

export const newLetter = defineType({
    name: 'newLetter',
    title: 'Newsletter',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'username',
            title: 'Username',
            type: 'string',
        }),
        defineField({
            name: 'newsDate',
            title: 'News Date',
            type: 'datetime',
        }),
        defineField({
            name:"linkdinUrl",
            title:"Linkdin URL",
            type:"url"
        }),
        defineField({
            name: 'createdAt',
            title: 'Created At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'updatedAt',
            title: 'Updated At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
    ],
})