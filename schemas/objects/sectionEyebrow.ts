import { defineType } from 'sanity'
import { skills } from '../../constants/skills'

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
            type: 'string',
            name: 'icon',
            title: 'Icon',
            options: {
                list: skills,
            },
        }

    ]
})