import { defineType, defineField } from 'sanity'
import {sectionEyebrowType as sectionEyebrow} from '../objects/sectionEyebrow'
import {contentFullType as contentFull} from '../objects/contentFull'
import {sectionHeadingType as sectionHeading} from '../objects/sectionHeading'
import {RobotIcon} from '@sanity/icons'

export const headshotBlockType = defineType({
    type: 'object',
    name: 'headshotBlock',
    title: 'Headshot Block',
    icon: RobotIcon,
    preview: {
        select: {
            title: 'sectionHeading.text',
            media: 'headshot',
        },
        prepare: ({ title, media }) => {
            return {
                title: `${title ?? '[ Headshot Block ]' }`,
                media: media,
            }
        }
    },
    groups: [
        { name: 'block', title: 'Block', default: true },
        { name: 'settings', title: 'Settings' },
    ],
    fields: [
        defineField({ ...sectionEyebrow, group: 'block' }),
        defineField({ ...sectionHeading, group: 'block' }),
        defineField({ ...contentFull, group: 'block' }),
        defineField({
            type: 'image',
            name: 'headshot',
            title: 'Headshot',
            description: 'Select an image to use as the headshot.',
            group: 'block',

        }),
        {
            type: 'boolean',
            name: 'alignmentX',
            title: 'Reverse Column Order',
            description: 'Select to put the Image in the right column and the text in the left.',
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