import { defineField, defineType } from 'sanity'

export const blockContent = defineType({
    title: 'Block Content',
    name: 'blockContent',
    type: 'array',
    of: [
        {
            title: 'Block',
            type: 'block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H1', value: 'h1' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'H5', value: 'h5' },
                { title: 'H6', value: 'h6' },
                { title: 'Quote', value: 'blockquote' },
                { title: 'Align Left', value: 'alignLeft' },
                { title: 'Align Center', value: 'alignCenter' },
                { title: 'Align Right', value: 'alignRight' },
                { title: 'Align Justify', value: 'alignJustify' },
            ],
            lists: [
                { title: 'Bullet', value: 'bullet' },
                { title: 'Numbered', value: 'number' },
            ],
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                    { title: 'Underline', value: 'underline' },
                    { title: 'Strike-through', value: 'strike-through' },
                    { title: 'Code', value: 'code' },
                    { title: 'Highlight', value: 'highlight' },
                ],
                annotations: [
                    {
                        title: 'URL',
                        name: 'link',
                        type: 'object',
                        fields: [
                            {
                                title: 'URL',
                                name: 'href',
                                type: 'url',
                            },
                        ],
                    },
                    {
                        title: 'Internal Link',
                        name: 'internalLink',
                        type: 'object',
                        fields: [
                            defineField({
                                title: 'Reference',
                                name: 'reference',
                                type: 'reference',
                                to: [{ type: 'post' }, { type: 'category' }],
                            }),
                        ],
                    },
                ],
            },
        },
        {
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    validation: (Rule) => Rule.custom((value, context) => {
                        if (context?.parent?.asset && !value) {
                            return 'Alternative text is required when an image is uploaded';
                        }
                        return true;
                    }),
                },
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                },
                {
                    name: 'displayMode',
                    type: 'string',
                    title: 'Display Mode',
                    initialValue: 'fit',
                    options: {
                        list: [
                            { title: 'Fit Width (Responsive)', value: 'fit' },
                            { title: 'Contained (Show Full Image)', value: 'contained' },
                            { title: 'Original Size', value: 'original' },
                            { title: 'Full Bleed (Edge-to-Edge)', value: 'fullBleed' },
                        ],
                    },
                },
                {
                    name: 'alignment',
                    type: 'string',
                    title: 'Alignment',
                    initialValue: 'center',
                    options: {
                        list: [
                            { title: 'Left', value: 'left' },
                            { title: 'Center', value: 'center' },
                            { title: 'Right', value: 'right' },
                        ],
                    },
                },
            ],
        },
        { type: 'code' },
        { type: 'youtube' },
        { type: 'faq' },
        { type: 'internalCTA' },
        { type: 'latex' },
        { type: 'tableOfContents' },
        { type: 'table' },
    ],
})
