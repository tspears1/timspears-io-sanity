import { defineType, defineArrayMember, defineField } from 'sanity'
import {externalLinkType as externalLink} from './externalLink'
import {internalLinkType as internalLink} from './internalLink'


export const contentFullType = defineType({
    name: 'contentFull',
    title: 'Content',
    type: 'array',
    of: [
        defineArrayMember({
            type: 'block',
            marks: {
                annotations: [
                    defineField(internalLink),
                    defineField(externalLink),
                ]
            }
        }),
        defineArrayMember({
            type: 'image',
            name: 'contentImage',
            title: 'Image',
        })
    ]
})