import { defineField, defineType } from 'sanity'

export const latex = defineType({
    name: 'latex',
    title: 'Math Equation (LaTeX)',
    type: 'object',
    fields: [
        defineField({
            name: 'formula',
            title: 'Formula',
            type: 'text',
            rows: 4,
            description: 'LaTeX formula without $$ delimiters, e.g. V_a = \\frac{I \\cdot C}{L}',
            validation: (r) => r.required(),
        }),
        defineField({
            name: 'caption',
            title: 'Caption',
            type: 'string',
        }),
        defineField({
            name: 'displayMode',
            title: 'Display Mode',
            type: 'string',
            initialValue: 'block',
            options: {
                list: [
                    { title: 'Block (centered on its own line)', value: 'block' },
                    { title: 'Inline (within text flow)', value: 'inline' },
                ],
            },
        }),
    ],
    preview: {
        select: { formula: 'formula', displayMode: 'displayMode' },
        prepare({ formula, displayMode }) {
            return {
                title: displayMode === 'inline' ? '📐 Inline Math' : '📐 Equation',
                subtitle: (formula || '').slice(0, 80),
            }
        },
    },
})
