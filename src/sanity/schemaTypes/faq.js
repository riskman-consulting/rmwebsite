import { defineField, defineType } from 'sanity'

export const faq = defineType({
    name: 'faq',
    title: 'FAQ Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Frequently Asked Questions',
        }),
        defineField({
            name: 'faqs',
            title: 'Questions',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'faqItem',
                    fields: [
                        defineField({
                            name: 'question',
                            title: 'Question',
                            type: 'string',
                            validation: (r) => r.required(),
                        }),
                        defineField({
                            name: 'answer',
                            title: 'Answer',
                            type: 'text',
                            rows: 4,
                            validation: (r) => r.required(),
                        }),
                    ],
                    preview: {
                        select: { title: 'question', subtitle: 'answer' },
                    },
                },
            ],
            validation: (r) => r.min(1),
        }),
    ],
    preview: {
        select: { title: 'title', faqs: 'faqs' },
        prepare({ title, faqs }) {
            const count = Array.isArray(faqs) ? faqs.length : 0
            return {
                title: title || 'FAQ',
                subtitle: `${count} question${count === 1 ? '' : 's'}`,
            }
        },
    },
})
