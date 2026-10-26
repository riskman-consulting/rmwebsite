import { defineField, defineType } from 'sanity'
import { CompressedVideoInput, MAX_VIDEO_MB } from '../components/CompressedVideoInput'

/**
 * RiskMan GRC module slugs. Kept here rather than imported from
 * `pages/products/productsData.js` because that file pulls in PNGs and icon
 * components, which the Sanity CLI (running in Node) cannot load. Add a slug
 * here whenever a module is added there.
 */
const GRC_MODULES = [
    { title: 'Enterprise Risk Management', value: 'enterprise-risk-management' },
    { title: 'Risk Based Internal Audit', value: 'risk-based-internal-audit' },
    { title: 'Control Testing', value: 'control-testing' },
    { title: 'Action Taken Report', value: 'action-taken-report' },
    { title: 'Policy and SOP', value: 'policy' },
    { title: 'Global SOX', value: 'global-sox' },
]

export const moduleVideo = defineType({
    name: 'moduleVideo',
    title: 'Module Video',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'module',
            title: 'Module',
            description: 'The product module page this video appears on.',
            type: 'string',
            options: { list: GRC_MODULES, layout: 'dropdown' },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'video',
            title: 'Video',
            description: `Videos larger than ${MAX_VIDEO_MB} MB are compressed in the browser before upload.`,
            type: 'file',
            options: { accept: 'video/*' },
            components: { input: CompressedVideoInput },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'poster',
            title: 'Poster Image',
            description: 'Optional thumbnail shown before the video plays.',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'caption',
            title: 'Caption',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            description: 'Lower numbers show first within the module.',
            type: 'number',
            initialValue: 0,
        }),
    ],
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
    preview: {
        select: {
            title: 'title',
            module: 'module',
            media: 'poster',
        },
        prepare: ({ title, module, media }) => ({
            title,
            subtitle: GRC_MODULES.find((m) => m.value === module)?.title || module,
            media,
        }),
    },
})
