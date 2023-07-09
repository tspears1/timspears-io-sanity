import { defineType } from 'sanity'
import {BlockquoteIcon} from '@sanity/icons'

import contentText from '../objects/contentText'
import sectionHeading from '../objects/sectionHeading'


export default defineType({
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
        { ...sectionHeading, group: 'block' },
        {
            type: 'boolean',
            name: 'spotlightText',
            title: 'Spotlight Text?',
            initialValue: false,
            group: 'block',
        },
        { ...contentText, group: 'block' },
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