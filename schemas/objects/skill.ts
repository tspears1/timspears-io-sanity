import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'skill',
    title: 'Skill',
    type: 'object',
    fields: [
        defineField({
            type: 'string',
            name: 'title',
            title: 'Title',
            validation: (rule) => rule.required(),
        }),
        defineField({
            type: 'slug',
            name: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96,
                isUnique: (value, context) => context.defaultIsUnique(value, context),
            },
            validation: (rule) => rule.required(),
        }),
    ]
})