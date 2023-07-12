import { defineType, defineField } from 'sanity'
import { HomeIcon } from '@sanity/icons'
import theme from '../fields/_theme'
import eyebrow from '../fields/_eyebrow'

export const homeType = defineType({
    name: 'home',
    title: 'Homepage',
    type: 'document',
    icon: HomeIcon,
    fields: [
        defineField({
            name: 'title',
            description: 'This field is the title of your page.',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        eyebrow,
        theme,
    ],
})
