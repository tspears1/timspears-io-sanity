import { defineType } from 'sanity'
import { LaunchIcon } from '@sanity/icons'

export const externalLinkType = defineType({
    name: 'link',
    type: 'object',
    title: 'External link',
    icon: LaunchIcon,
    fields: [
        {
            name: 'href',
            type: 'url',
            title: 'URL',
            placeholder: 'https://'
        },
        {
            title: 'Open in new tab',
            name: 'blank',
            type: 'boolean',
            initialValue: true,
        }
    ]
})