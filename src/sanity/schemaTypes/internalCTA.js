import { defineField, defineType } from 'sanity'

export const internalCTA = defineType({
    name: 'internalCTA',
    title: 'Inline CTA',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'CTA headline, e.g. "Ready to talk to a risk advisor?"',
            validation: (r) => r.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 2,
            description: 'Short value proposition.',
        }),
        defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
            initialValue: 'Work with us',
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'string',
            description: 'Internal path (e.g. /contact) or external URL.',
            initialValue: '/contact',
        }),
        defineField({
            name: 'variant',
            title: 'Variant',
            type: 'string',
            initialValue: 'gradient',
            options: {
                list: [
                    { title: 'Gradient (Primary)', value: 'gradient' },
                    { title: 'Subtle (Outline)', value: 'outline' },
                    { title: 'Dark', value: 'dark' },
                ],
            },
        }),
    ],
    preview: {
        select: { title: 'title', buttonText: 'buttonText' },
        prepare({ title, buttonText }) {
            return {
                title: `CTA: ${title || 'Untitled'}`,
                subtitle: `Button: ${buttonText || 'Click'}`,
            }
        },
    },
})
