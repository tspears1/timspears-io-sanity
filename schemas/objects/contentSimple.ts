import { defineType, defineArrayMember } from 'sanity'
import externalLink from './externalLink'
import internalLink from './internalLink'

export default defineType({
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
                    internalLink,
                    externalLink,
                ],
                decorators: [
                    {
                        title: 'Italic',
                        value: 'em',
                    },
                    {
                        title: 'Strong',
                        value: 'strong'
                    }
                ]
            }
        })
    ]
})