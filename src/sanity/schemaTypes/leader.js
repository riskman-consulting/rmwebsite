import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'leader',
    title: 'Leader',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Title/Role',
            type: 'string',
            
        }),
        defineField({
            name: 'image',
            title: 'Profile Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'linkedin',
            title: 'LinkedIn URL',
            type: 'url',
        }),
        defineField({
            name:"number",
            description:"Only for sorting",
            title:"Number",
            type:"number"
        })
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'title',
            media: 'image',
        },
    },
})
