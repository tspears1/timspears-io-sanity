import { defineType } from 'sanity'
import { LinkIcon } from '@sanity/icons'

export default defineType({
    name: 'internalLink',
    type: 'object',
    title: 'Internal link',
    icon: LinkIcon,
    fields: [
        {
            name: 'reference',
            type: 'reference',
            title: 'Reference',
            to: [
                { type: 'page' },
                { type: 'project' }
            ]
        }
    ]
})