import { defineField, defineType } from 'sanity'

export const youtube = defineType({
    name: 'youtube',
    title: 'YouTube Video',
    type: 'object',
    fields: [
        defineField({
            name: 'url',
            title: 'YouTube URL',
            type: 'url',
            validation: (r) =>
                r
                    .required()
                    .uri({ scheme: ['http', 'https'] })
                    .custom((value) => {
                        if (!value) return true
                        const pattern =
                            /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/
                        return pattern.test(value) || 'Must be a valid YouTube URL.'
                    }),
        }),
    ],
    preview: {
        select: { url: 'url' },
        prepare({ url }) {
            return { title: 'YouTube Video', subtitle: url }
        },
    },
})
