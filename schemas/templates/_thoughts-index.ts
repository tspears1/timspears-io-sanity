import { defineField, defineArrayMember } from 'sanity'

export default [
    defineField({
        name: 'articles',
        title: 'Articles',
        type: 'array',
        of: [
            defineArrayMember({
                type: 'reference',
                to: { type: 'article' },
                options: {
                    disableNew: true,
                }
            }),
            defineArrayMember({
                type: 'object',
                title: 'External Article',
                name: 'externalArticle',
                fields: [
                    defineField({
                        name: 'title',
                        title: 'Title',
                        type: 'string',
                        validation: Rule => Rule.required(),
                    }),
                    defineField({
                        name: 'url',
                        title: 'URL',
                        type: 'url',
                        validation: Rule => Rule.required(),
                    }),
                    defineField({
                        name: 'publication',
                        title: 'Publication',
                        type: 'string',
                    }),
                    defineField({
                        name: 'abstract',
                        title: 'Abstract',
                        type: 'text',
                        rows: 3,
                        validation: Rule => Rule.required(),
                    }),
                    defineField({
                        name: 'date',
                        title: 'Date',
                        type: 'date',
                        validation: Rule => Rule.required(),
                    }),
                ]
            })
        ],
        group: 'content',
        hidden: ({ document }) => document?.pageTemplate !== 'thoughts-template',
        validation: Rules => Rules.unique()
    })
]