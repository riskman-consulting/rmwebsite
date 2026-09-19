import { defineField, defineType } from 'sanity'

export const photo = defineType({
    name: 'photo',
    title: 'Photo (Moments that Matter)',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: '5 Year Celebration', value: '5 Year Celebration' },
                    { title: 'Team Lunches & Dinner', value: 'Team Lunches & Dinner' },
                    { title: 'Office Culture', value: 'Office Culture' },
                    { title: 'Meetings & Discussions', value: 'Meetings & Discussions' },
                ],
            },
        }),
        defineField({
            name: 'subCategory',
            title: 'Sub Category',
            type: 'string',
            description: 'e.g. Birthday Celebration\'s, Festive Celebration\'s',
        }),
        defineField({
            name: 'year',
            title: 'Year',
            type: 'number',
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
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        }),
    ],
    preview: {
        select: {
            title: 'title',
            category: 'category',
            media: 'image',
        },
        prepare(selection) {
            const { title, category } = selection
            return {
                ...selection,
                subtitle: category,
            }
        },
    },
})
