import { defineType, defineArrayMember, defineField } from 'sanity'
import {externalLinkType as externalLink} from './externalLink'
import {internalLinkType as internalLink} from './internalLink'

export const contentSimpleType = defineType({
    name: 'contentSimple',
    title: 'Content',
    type: 'array',
    of: [
        defineArrayMember({
            type: 'block',
            styles: [],
            lists: [],
            marks: {
                annotations: [
                    defineField(internalLink),
                    defineField(externalLink),
                ],
                decorators: [
                    {
                        title: 'Italic',
                        value: 'em',
                    },
                    {
                        title: 'Strong',
                        value: 'strong'
                    },
                ]
            }
        })
    ]
})