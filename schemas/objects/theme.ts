import { defineField, defineType } from 'sanity'
import { LemonIcon } from '@sanity/icons'
import slug from '../fields/slug'

export default defineType({
    name: 'theme',
    title: 'Theme',
    type: 'document',
    icon: LemonIcon,
    fields: [
        defineField({
            type: 'string',
            name: 'title',
            title: 'Title',
            validation: (rule) => rule.required(),
        }),
        slug,
        defineField({
            type: 'color',
            name: 'color',
            title: 'Base Color',
            options: {
                disableAlpha: true
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            type: 'color',
            name: 'invert',
            title: 'Opposite Color (optional)',
            options: {
                disableAlpha: true,
            }
        })
    ]
})