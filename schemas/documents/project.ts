import { DocumentIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

import slug from '../fields/slug'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    icon: DocumentIcon,
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
    ]
})