import { defineType } from 'sanity'

export default defineType({
    name: 'sectionEyebrow',
    title: 'Eyebrow',
    type: 'object',
    options: {
        collapsible: true,
    },
    fields: [
        {
            type: 'string',
            name: 'text',
            title: 'Eyebrow Text',
            validation: Rule => Rule.required(),
        },
        {
            type: 'string',
            name: 'digit',
            title: 'Digit (optional)',
        },
        {
            type: 'reference',
            name: 'icon',
            title: 'Skill Icon',
            to: { type: 'skill' },
            options: {
                disableNew: true,
            },
            validation: Rule => Rule.max(1),
        },

    ]
})