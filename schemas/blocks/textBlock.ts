import { defineField, defineType } from 'sanity'
import {BlockquoteIcon} from '@sanity/icons'

import {contentTextType as contentText} from '../objects/contentText'
import {sectionHeadingType as sectionHeading} from '../objects/sectionHeading'


export const textBlockType = defineType({
    type: 'object',
    name: 'textBlock',
    title: 'Text Block',
    icon: BlockquoteIcon,
    preview: {
        select: {
            title: 'sectionHeading.text',
        },
        prepare: ({ title }) => {
            return {
                title: `${title ?? '[ Text Block ]' }`,
            }
        }
    },
    groups: [
        { name: 'block', title: 'Block', default: true },
        { name: 'settings', title: 'Settings' },
    ],
    fields: [
        defineField({ ...sectionHeading, group: 'block' }),
        {
            type: 'boolean',
            name: 'spotlightText',
            title: 'Spotlight Text?',
            initialValue: false,
            group: 'block',
        },
        defineField({ ...contentText, group: 'block' }),
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