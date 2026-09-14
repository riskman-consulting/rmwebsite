import { defineField, defineType } from 'sanity'

export const event = defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            description: 'e.g. Conference, Chapter Meet, Internal Leadership Meet',
            options: {
                list: [
                    { title: 'Conference', value: 'Conference' },
                    { title: 'Chapter Meet', value: 'Chapter Meet' },
                    { title: 'Internal Meet', value: 'Internal Meet' },
                    { title: 'Workshop', value: 'Workshop' },
                ],
            },
        }),
        defineField({
            name: 'eventDate',
            title: 'Event Start Date',
            type: 'date',
            description: 'Used for sorting and determining if upcoming or past.',
        }),
        defineField({
            name: 'displayDate',
            title: 'Display Date',
            type: 'string',
            description: 'Human readable date, e.g. "12–13 February 2026"',
        }),
        defineField({
            name:"shortDesc",
            title:"Short Description",
            type:"string"
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        defineField({
            name: 'type',
            title: 'Event Sub-type',
            type: 'string',
            description: 'e.g. "IIA Bangalore Chapter 2026"',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        }),
        defineField({
            name: 'bannerImage',
            title: 'Banner Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'gallery',
            title: 'Gallery',
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
            title: 'title',
            date: 'displayDate',
            media: 'bannerImage',
        },
        prepare(selection) {
            const { title, date } = selection
            return {
                ...selection,
                subtitle: date ? date : 'No date set',
            }
        },
    },
})
