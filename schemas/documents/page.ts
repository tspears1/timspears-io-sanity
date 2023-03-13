import { DocumentsIcon } from '@sanity/icons'
import { defineType, defineField } from 'sanity'
import slug from '../fields/slug'
import theme from '../fields/_theme'
import eyebrow from '../fields/_eyebrow'

export default defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    icon: DocumentsIcon,
    fields: [
        defineField({
            name: 'title',
            description: 'This field is the title of your page.',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        slug,
        eyebrow,
        defineField({
            name: 'pageTemplate',
            title: 'Page Template',
            type: 'string',
            options: {
                list: [
                    { title: 'Simple Page', value: 'simple-template' },
                    { title: 'Works Index', value: 'works-template' },
                    { title: 'Thoughts Index', value: 'thoughts-template' },
                    { title: 'About Page', value: 'about-template' },
                    { title: 'Contact Page', value: 'contact-template' },
                ]
            },
            validation: (rule) => rule.required(),
            initialValue: 'simple-template'
        }),
        theme,
    ]
})