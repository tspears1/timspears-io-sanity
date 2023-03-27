import { defineField, defineType } from 'sanity'
import { IceCreamIcon } from '@sanity/icons'
import slug from '../fields/slug'

export default defineType({
    name: 'award',
    title: 'Award',
    type: 'document',
    icon: IceCreamIcon,
    fields: [
        defineField({
            type: 'string',
            name: 'title',
            title: 'Title',
            validation: Rule => Rule.required(),
        }),
        slug,
        defineField({
            type: 'image',
            name: 'logo',
            title: 'Logo',
            description: 'Must be SVG.',
        }),
    ]
})