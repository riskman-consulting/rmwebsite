import { defineField, defineType } from 'sanity'

export const post = defineType({
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    groups: [
        { name: 'content', title: 'Write', default: true },
        { name: 'setup', title: 'Setup' },
        { name: 'seo', title: 'SEO' },
        { name: 'aeo', title: 'AI Citation' },
        { name: 'media', title: 'Media' },
    ],
    fields: [
        /* ============ WRITE ============ */
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            group: 'content',
            validation: (r) => r.required(),
        }),
        defineField({
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            group: 'content',
            validation: (r) => r.required(),
        }),
        defineField({
            name: 'shortDescription',
            title: 'Short Description',
            type: 'text',
            rows: 3,
            description: 'Brief summary for blog cards and social sharing.',
            group: 'content',
        }),
        defineField({
            name: 'body',
            title: 'Content',
            type: 'blockContent',
            group: 'content',
        }),

        /* ============ SETUP ============ */
        defineField({
            name: 'contentType',
            title: 'Content Type',
            type: 'string',
            options: {
                layout: 'radio',
                list: [
                    { title: 'Pillar Content (Comprehensive Guide)', value: 'pillar' },
                    { title: 'Supporting Content (Cluster Article)', value: 'cluster' },
                ],
            },
            group: 'setup',
        }),
        defineField({
            name: 'parentPillar',
            title: 'Parent Pillar',
            type: 'reference',
            to: [{ type: 'post' }],
            options: {
                filter: 'contentType == "pillar"',
            },
            // Kept visible and optional to allow clearing references and prevent hidden validation errors
            group: 'setup',
        }),
        defineField({
            name: 'articleType',
            title: 'Article Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Concept Explainer (What is X?)', value: 'concept' },
                    { title: 'Comparison (X vs Y)', value: 'comparison' },
                    { title: 'Implementation (How to do X)', value: 'implementation' },
                    { title: 'Mistakes & Pitfalls (X mistakes to avoid)', value: 'mistakes' },
                    { title: 'Tools & Stack (Best tools for X)', value: 'tools' },
                    { title: 'Advanced Strategy (Scaling X)', value: 'advanced' },
                    { title: 'Case Study (X in action)', value: 'caseStudy' },
                ],
            },
            hidden: ({ parent }) => parent?.contentType !== 'cluster',
            group: 'setup',
        }),
        defineField({
            name: 'topicOwnership',
            title: 'Topic Ownership',
            type: 'string',
            description: 'The main topic this pillar aims to own.',
            hidden: ({ parent }) => parent?.contentType !== 'pillar',
            group: 'setup',
        }),
        defineField({
            name: 'funnelStage',
            title: 'Funnel Stage',
            type: 'string',
            options: {
                layout: 'radio',
                list: [
                    { title: 'Awareness (Top of Funnel)', value: 'awareness' },
                    { title: 'Consideration (Middle)', value: 'consideration' },
                    { title: 'Decision (Bottom)', value: 'decision' },
                ],
            },
            group: 'setup',
        }),
        defineField({
            name: 'targetReader',
            title: 'Target Reader',
            type: 'string',
            options: {
                list: [
                    { title: 'Developer', value: 'developer' },
                    { title: 'Marketer', value: 'marketer' },
                    { title: 'Founder / CEO', value: 'founder' },
                    { title: 'Product Manager', value: 'pm' },
                    { title: 'Executive', value: 'executive' },
                    { title: 'General', value: 'general' },
                ],
            },
            group: 'setup',
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'category' }] }],
            group: 'setup',
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: { layout: 'tags' },
            group: 'setup',
        }),
        defineField({
            name: 'publishedDate',
            title: 'Published Date',
            type: 'datetime',
            group: 'setup',
        }),
        defineField({
            name: 'lastUpdated',
            title: 'Last Updated',
            type: 'datetime',
            description: 'Most recent significant update (SEO freshness signal).',
            group: 'setup',
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'author' }],
            group: 'setup',
        }),

        /* ============ SEO ============ */
        defineField({
            name: 'primaryKeyword',
            title: 'Primary Keyword',
            type: 'string',
            group: 'seo',
        }),
        defineField({
            name: 'secondaryKeywords',
            title: 'Secondary Keywords',
            type: 'array',
            of: [{ type: 'string' }],
            options: { layout: 'tags' },
            group: 'seo',
        }),
        defineField({
            name: 'seoTitle',
            title: 'SEO Title',
            type: 'string',
            description: 'Recommended 50–60 characters.',
            validation: (r) => r.max(70),
            group: 'seo',
        }),
        defineField({
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            rows: 3,
            description: 'Recommended 150–155 characters.',
            validation: (r) => r.max(170),
            group: 'seo',
        }),
        defineField({
            name: 'canonicalUrl',
            title: 'Canonical URL',
            type: 'url',
            description: 'For duplicate/republished content; leave empty for originals.',
            group: 'seo',
        }),

        /* ============ AI CITATION (AEO) ============ */
        defineField({
            name: 'tldr',
            title: 'TL;DR Summary',
            type: 'text',
            rows: 3,
            description:
                'Direct answer for AI to cite (200–300 characters). Critical for ChatGPT/Perplexity inclusion.',
            validation: (r) => r.max(400),
            group: 'aeo',
        }),
        defineField({
            name: 'takeaways',
            title: 'Key Takeaways',
            type: 'array',
            of: [{ type: 'string' }],
            description: '3–5 bullet points summarizing core value.',
            validation: (r) => r.custom((value) => {
                if (!value || value.length === 0) return true;
                return value.length >= 1 ? true : 'Must have at least 1 takeaway';
            }),
            group: 'aeo',
        }),
        defineField({
            name: 'faqs',
            title: 'FAQs',
            type: 'array',
            description:
                'Frequently Asked Questions. Used for FAQPage structured data — helps AI assistants (ChatGPT, Perplexity, Google AI Overviews) cite your content.',
            of: [
                {
                    type: 'object',
                    name: 'faqItem',
                    title: 'FAQ',
                    fields: [
                        defineField({
                            name: 'question',
                            title: 'Question',
                            type: 'string',
                            validation: (r) => r.required().min(5).max(200),
                        }),
                        defineField({
                            name: 'answer',
                            title: 'Answer',
                            type: 'text',
                            rows: 4,
                            description: 'Concise, direct answer (recommended 50–300 characters).',
                            validation: (r) => r.required().min(20),
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'question',
                            subtitle: 'answer',
                        },
                    },
                },
            ],
            validation: (r) => r.max(20),
            group: 'aeo',
        }),

        /* ============ MEDIA ============ */
        defineField({
            name: 'mainImage',
            title: 'Featured Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt text',
                    type: 'string',
                    validation: (r) => r.custom((value, context) => {
                        if (context?.parent?.asset && !value) {
                            return 'Alt text is required when a featured image is uploaded';
                        }
                        return true;
                    }),
                }),
            ],
            group: 'media',
        }),
        defineField({
            name: 'relatedPosts',
            title: 'Related Posts',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'post' }] }],
            description: 'Curated internal links; 2–3 recommended.',
            validation: (r) => r.max(4),
            group: 'media',
        }),
        defineField({
            name: 'relatedPostsPosition',
            title: 'Related Posts Position',
            type: 'string',
            options: {
                layout: 'radio',
                list: [
                    { title: 'End of Article (Default)', value: 'end' },
                    { title: 'Middle of Article', value: 'middle' },
                    { title: 'Both Positions', value: 'both' },
                ],
            },
            initialValue: 'end',
            group: 'media',
        }),
    ],

    preview: {
        select: {
            title: 'title',
            contentType: 'contentType',
            articleType: 'articleType',
            funnelStage: 'funnelStage',
            authorName: 'author.name',
            media: 'mainImage',
        },
        prepare({ title, contentType, articleType, funnelStage, authorName, media }) {
            const typeStr = contentType ? `[${String(contentType).toUpperCase()}]` : ''
            const categoryStr = articleType ? `[${articleType}]` : ''
            let stageStr = ''
            
            if (funnelStage) {
                const stage =
                    funnelStage === 'awareness'
                        ? 'TOFU'
                        : funnelStage === 'consideration'
                            ? 'MOFU'
                            : 'BOFU'
                stageStr = `[${stage}]`
            }
            
            const authorStr = authorName ? `by ${authorName}` : ''
            
            const subtitle = [typeStr, categoryStr, stageStr, authorStr].filter(Boolean).join(' ')
            
            return {
                title,
                subtitle,
                media,
            }
        },
    },
})
