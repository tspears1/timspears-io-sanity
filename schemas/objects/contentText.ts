import { defineType, defineArrayMember, defineField } from 'sanity'
import {externalLinkType as externalLink} from './externalLink'
import {internalLinkType as internalLink} from './internalLink'

export const contentTextType = defineType({
    name: 'contentText',
    title: 'Content',
    type: 'array',
    of: [
        defineArrayMember({
            type: 'block',
            name: 'blocks',
            marks: {
                annotations: [
                    defineField(internalLink),
                    defineField(externalLink),
                ]
            }
        })
    ]
})