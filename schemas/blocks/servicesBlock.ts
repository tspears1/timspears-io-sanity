import { defineField, defineType } from 'sanity'
import { sectionHeadingType } from '../objects/sectionHeading'

export const servicesBlockType = defineType({
    type: 'object',
    name: 'servicesBlock',
    title: 'Services Block',
    fields: [
        defineField(sectionHeadingType),
        defineField({
            type: 'text',
            name: 'text',
            title: 'Text',
            rows: 3,
        }),
    ]
})