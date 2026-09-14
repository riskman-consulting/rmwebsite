import { defineField, defineType } from 'sanity'

export const codeBlock = defineType({
    name: 'code',
    title: 'Code Block',
    type: 'object',
    fields: [
        defineField({
            name: 'language',
            title: 'Language',
            type: 'string',
            description: 'e.g. javascript, typescript, python, bash, sql',
        }),
        defineField({
            name: 'filename',
            title: 'Filename',
            type: 'string',
            description: 'Optional filename to display above the code.',
        }),
        defineField({
            name: 'code',
            title: 'Code',
            type: 'text',
            rows: 12,
            validation: (r) => r.required(),
        }),
    ],
    preview: {
        select: { filename: 'filename', language: 'language', code: 'code' },
        prepare({ filename, language, code }) {
            const subtitle = (code || '').split('\n')[0]?.slice(0, 60)
            return {
                title: filename || `${language || 'code'}`,
                subtitle,
            }
        },
    },
})
