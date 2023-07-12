import { defineType } from 'sanity'

export const buttonType = defineType({
    name: 'button',
    title: 'Button',
    type: 'object'  ,
    options: {
        collapsible: true,
    },
    fields: [
        {
            type: 'string',
            name: 'text',
            title: 'Button Text',
            validation: Rule => Rule.required().max(20),
        },
        {
            type: 'url',
            name: 'url',
            title: 'URL',
            placeholder: 'https://...',
            validation: Rule => Rule.required().uri(),
        },
        {
            type: 'boolean',
            name: 'target',
            title: 'Open in New Tab/Window?',
            initialValue: false,
        }
    ]
})