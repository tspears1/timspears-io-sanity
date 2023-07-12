import { defineField, defineType } from 'sanity'
import {InfoOutlineIcon} from '@sanity/icons'

import {sectionEyebrowType as sectionEyebrow} from '../objects/sectionEyebrow'
import {buttonType as button} from '../objects/button'
import {contentSimpleType as contentSimple} from '../objects/contentSimple'
import {sectionHeadingType as sectionHeading} from '../objects/sectionHeading'

export const introBlockType = defineType({
    name: 'projectIntro',
    title: 'Project Intro',
    type: 'object',
    icon: InfoOutlineIcon,
    preview: {
        select: {
            title: 'sectionHeading.text'
        },
    },
    groups: [
        { name: 'block', title: 'Block', default: true },
        { name: 'settings', title: 'Settings' },
    ],
    fields: [
        defineField({ ...sectionEyebrow, group: 'block' }),
        defineField({ ...sectionHeading, group: 'block' }),
        defineField({ ...button, group: 'block'}),
        defineField({ ...contentSimple, group: 'block' }),
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