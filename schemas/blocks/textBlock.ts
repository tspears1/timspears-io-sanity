import { defineType } from 'sanity'
import {BlockquoteIcon} from '@sanity/icons'

import contentText from '../objects/contentText'


export default defineType({
    type: 'object',
    name: 'textBlock',
    title: 'Text Block',
    icon: BlockquoteIcon,
    fields: [
        {
            type: 'boolean',
            name: 'spotlightText',
            title: 'Spotlight Text?',
            initialValue: false,
        },
        contentText,
    ]
})