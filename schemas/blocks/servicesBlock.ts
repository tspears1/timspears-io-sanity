import { defineField, defineType } from 'sanity'
import { sectionHeadingType } from '../objects/sectionHeading'
import { JoystickIcon } from '@sanity/icons'

export const servicesBlockType = defineType({
    type: 'object',
    name: 'servicesBlock',
    title: 'Services Block',
    icon: JoystickIcon,
    preview: {
        select: {
            title: 'sectionHeading.text',
        },
        prepare: ({ title }) => {
            return {
                title: `${title ?? '[ Services Block ]' }`,
            }
        }
    },
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