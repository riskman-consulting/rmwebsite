import { defineField, defineType } from 'sanity'

export const eventsPage = defineType({
    name: 'eventsPage',
    title: 'Events Page Content',
    type: 'document',
    fields: [
        defineField({
            name: 'heroImages',
            title: 'Hero Section Images',
            type: 'array',
            description: 'Background images for the Events page hero slideshow (5 images recommended)',
            of: [{ type: 'image', options: { hotspot: true } }],
        }),
        defineField({
            name: 'internationalAssignments',
            title: 'International Assignments',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'person', title: 'Person Name', type: 'string' },
                        { name: 'role', title: 'Role', type: 'string' },
                        { name: 'country', title: 'Country', type: 'string' },
                        { name: 'countryCode', title: 'Country Code', type: 'string', description: 'e.g., VN, PH, MM, ID' },
                        { name: 'city', title: 'City', type: 'string' },
                        { name: 'date', title: 'Date/Schedule', type: 'string' },
                        { name: 'title', title: 'Engagement Title', type: 'string' },
                        { name: 'story', title: 'Story / Description', type: 'text' },
                        {
                            name: 'images',
                            title: 'Images',
                            type: 'array',
                            of: [{ type: 'image', options: { hotspot: true } }]
                        }
                    ]
                }
            ]
        })
    ]
})
