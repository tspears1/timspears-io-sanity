import { defineType } from 'sanity'
import {InfoOutlineIcon} from '@sanity/icons'

import sectionEyebrow from '../objects/sectionEyebrow'
import button from '../objects/button'
import contentSimple from '../objects/contentSimple'
import sectionHeading from '../objects/sectionHeading'

export default defineType({
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
        { ...sectionEyebrow, group: 'block' },
        { ...sectionHeading, group: 'block' },
        { ...button, group: 'block'},
        { ...contentSimple, group: 'block' },
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