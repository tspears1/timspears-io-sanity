import { CogIcon } from '@sanity/icons'
import { defineField, defineType, defineArrayMember } from 'sanity'

export default defineType({
    name: 'settings',
    title: 'Settings',
    type: 'document',
    icon: CogIcon,
    liveEdit: true,
    groups: [
        {
            name: 'global',
            title: 'Global',
            default: true,
            // icon: 'some icon',
        },
        {
            name: 'navigation',
            title: 'Navigation',
        },
        {
            name: 'social',
            title: 'Social',
        }
    ],
    fields: [
        defineField({
            name: 'siteTitle',
            title: 'Site Title',
            type: 'string',
            group: 'global',
        }),
        defineField({
            name: 'siteEyebrow',
            title: 'Site eyebrow',
            type: 'string',
            group: 'global'
        }),

        defineField({
            name: 'overview',
            description:
                'Used both for the <meta> description tag for SEO, and project subheader.',
            title: 'Overview',
            type: 'array',
            group: 'global',
            of: [
                // Paragraphs
                defineArrayMember({
                    lists: [],
                    marks: {
                        annotations: [],
                        decorators: [
                            {
                                title: 'Italic',
                                value: 'em',
                            },
                            {
                                title: 'Strong',
                                value: 'strong',
                            },
                        ],
                    },
                    styles: [],
                    type: 'block',
                }),
            ],
            validation: (rule) => rule.max(155).required(),
        }),

        defineField({
            name: 'navigation',
            title: 'Navigation',
            type: 'array',
            group: 'navigation',
            of: [
                defineArrayMember({
                    type: 'reference',
                    to: { type: 'page' },
                    options: {
                        disableNew: true,
                    }
                })
            ],
            validation: (rule) => rule.max(4),
        }),

        defineField({
            name: 'behanceLink',
            title: 'Behance',
            type: 'url',
            group: 'social',
        }),
        defineField({
            name: 'dribbbleLink',
            title: 'Dribbble',
            type: 'url',
            group: 'social',
        }),
        defineField({
            name: 'githubLink',
            title: 'Github',
            type: 'url',
            group: 'social',
        }),
    ]
})
