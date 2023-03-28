import { defineType, defineArrayMember } from 'sanity'
import externalLink from './externalLink'
import internalLink from './internalLink'

export default defineType({
    name: 'contentText',
    title: 'Content',
    type: 'array',
    of: [
        defineArrayMember({
            type: 'block',
            marks: {
                annotations: [
                    internalLink,
                    externalLink,
                ]
            }
        })
    ]
})