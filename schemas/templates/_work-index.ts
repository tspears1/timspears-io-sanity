import { defineField, defineArrayMember } from 'sanity'

export default [
    defineField({
        name: 'activeProjects',
        title: 'Active Projects',
        type: 'array',
        of: [
            defineArrayMember({
                type: 'reference',
                to: { type: 'project' },
                options: {
                    disableNew: true,
                }
            })
        ],
        group: 'content',
        hidden: ({ document }) => document?.pageTemplate !== 'works-template',
        validation: Rules => Rules.unique()
    })
]