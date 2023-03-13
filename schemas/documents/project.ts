import { PresentationIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

import slug from '../fields/slug'
import theme from '../fields/_theme'
import eyebrow from '../fields/_eyebrow'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    icon: PresentationIcon,
    // Uncomment below to have edits publish automatically as you type
    liveEdit: true,
    fields: [
        defineField({
            name: 'title',
            description: 'This field is the title of your project.',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        slug,
        eyebrow,
        theme,
        defineField({
            name: 'overview',
            description:
                'Used both for the <meta> description tag for SEO, and project subheader.',
            title: 'Overview',
            type: 'array',
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
            name: 'projectSkills',
            title: 'Skills',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'reference',
                    to: { type: 'skill' },
                    options: {
                        disableNew: true,
                    }
                })
            ]
        })
    ]
})