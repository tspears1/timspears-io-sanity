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
    fields: [
        sectionHeading,
        {
            type: 'boolean',
            name: 'spotlightText',
            title: 'Spotlight Text?',
            initialValue: false,
        },
        contentText,
    ]
})