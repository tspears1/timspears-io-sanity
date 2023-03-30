import { defineType } from 'sanity'
import {BlockContentIcon} from '@sanity/icons'
import sectionEyebrow from '../objects/sectionEyebrow'
import contentFull from '../objects/contentFull'
import sectionHeading from '../objects/sectionHeading'

export default defineType({
    type: 'object',
    name: 'textHeadingBlock',
    title: 'Text w/ Heading Block',
    icon: BlockContentIcon,
    preview: {
        select: {
            title: 'sectionHeading.text'
        },
        prepare: ({ title }) => {
            return {
                title: `${title ?? '[ Text w/Heading Block ]' }`,
            }
        }
    },
    groups: [
        { name: 'block', title: 'Block', default: true },
        { name: 'settings', title: 'Settings' },
    ],
    fields: [
        { ...sectionEyebrow, group: 'block' },
        { ...sectionHeading, group: 'block' },
        { ...contentFull, group: 'block' },
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
            name: 'alignmentY',
            title: 'Bottom Alignment',
            description: 'Select to weight the heading to the bottom of the block.',
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