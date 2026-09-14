import { defineField, defineType } from 'sanity'

export const industry = defineType({
    name: 'industry',
    title: 'Industry',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
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
            name: 'subtitle',
            title: 'Subtitle',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        }),
        defineField({
            name:"marquee",
            title:"Marquee",
            type:"string"
        }),
        defineField({
            name:"icon",
            title:"Icon",
            type:"string"
        }),
        defineField({
            name:"tag",
            title:"Tag",
            type:"string"
        })
    ],
})
