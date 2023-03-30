import { defineType } from 'sanity'

export default defineType({
    name: 'sectionHeading',
    title: 'Heading',
    type: 'object',
    options: {
        collapsible: true,
    },
    fields: [
        {
            type: 'string',
            name: 'text',
            title: 'Heading Text',
        },
        {
            type: 'string',
            name: 'style',
            title: 'Heading Style',
            options: {
                list: [
                    { title: 'Bold', value: 'bold' },
                    { title: 'Thin', value: 'thin' },
                    { title: 'Poster', value: 'poster' },
                ],
                layout: 'radio',
                direction: 'horizontal',
            },
            initialValue: 'bold',
        },
        {
            type: 'string',
            name: 'size',
            title: 'Heading Size',
            options: {
                list: [
                    { title: 'H2', value: 'h2' },
                    { title: 'H3', value: 'h3' },
                    { title: 'H4', value: 'h4' },
                ],
                layout: 'radio',
                direction: 'horizontal',
            },
            initialValue: 'h2',
        },
    ]
})