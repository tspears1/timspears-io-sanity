import { defineType, defineArrayMember } from "sanity"
import sectionHeading from "../objects/sectionHeading"
import {BlockElementIcon} from '@sanity/icons'

export default defineType({
    type: 'object',
    name: 'galleryBlock',
    title: 'Gallery Block',
    icon: BlockElementIcon,
    preview: {
        select: {
            title: 'sectionHeading.text',
            media: 'mediaGroup',
        },
        prepare: ({ title, media }) => {
            return {
                title: `${title ?? '[ Gallery Block ]'} ( ${media.length} )`,
                media: media[0].media ?? null
            }
        }
    },
    fields: [
        { ...sectionHeading, options: { collapsed: true } },
        {
            name: 'mediaGroup',
            title: 'Media Group',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'mediaItem',
                    title: 'Media',
                    fields: [
                        {
                            type: 'image',
                            name: 'media',
                            title: 'Media File',
                            validation: Rule => Rule.required()
                        },
                        {
                            type: 'string',
                            name: 'caption',
                            title: 'Caption',
                        },
                    ]
                })
            ]
        }
    ]
})