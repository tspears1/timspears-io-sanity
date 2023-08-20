import { defineType, defineField } from 'sanity'
import {ColorWheelIcon} from '@sanity/icons'
import {sectionEyebrowType as sectionEyebrow} from '../objects/sectionEyebrow'
import {contentSimpleType as contentSimple} from '../objects/contentSimple'

export const philosophyBlockType = defineType({
    type: 'object',
    name: 'philosophyBlock',
    title: 'Philosophy Block',
    icon: ColorWheelIcon,
    preview: {
        select: {
            title: 'title',
        },
        prepare: ({ title }) => {
            return {
                title: `${title ?? '[ Philosophy Block ]'}`,
            }
        },
    },
    groups: [
        { name: 'block', title: 'Block', default: true },
        { name: 'settings', title: 'Settings' },
    ],
    fields: [
        defineField({ ...sectionEyebrow, group: 'block' }),
        defineField({
            type: 'string',
            name: 'title',
            title: 'Title',
            description: 'Enter a title for the Philosophy Block.',
            group: 'block',
        }),
        defineField({
            type: 'array',
            name: 'values',
            title: 'Values',
            description: 'Enter a list of values for the Philosophy Block.',
            group: 'block',
            of: [
                {
                    type: 'object',
                    name: 'value',
                    title: 'Value',
                    fields: [
                        {
                            type: 'string',
                            name: 'title',
                            title: 'Title',
                            description: 'Enter a title for the value.',
                        },
                        defineField({ ...contentSimple }),
                    ]
                }
            ]
        }),
        {
            type: 'boolean',
            name: 'alignmentX',
            title: 'Reverse Column Order',
            description: 'Select to put the heading in the right column and the text in the left.',
            initialValue: false,
            group: 'settings',
        },
        {
            type: 'boolean',
            name: 'invertTheme',
            title: 'Invert Theme',
            description: 'Select to switch to darker background with lighter text.',
            initialValue: false,
            group: 'settings',
        }
    ]
})