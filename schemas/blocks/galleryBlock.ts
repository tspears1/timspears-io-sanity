import { defineType, defineField, defineArrayMember } from "sanity"
import { sectionHeadingType as sectionHeading } from "../objects/sectionHeading"
import {BlockElementIcon} from '@sanity/icons'

export const galleryBlockType = defineType({
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
                media: media[0] ?? null
            }
        }
    },
    fields: [
        defineField({ ...sectionHeading, options: { collapsed: true } }),
        {
            name: 'mediaGroup',
            title: 'Media Group',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'image',
                    name: 'media',
                    title: 'Media File',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            type: 'string',
                            name: 'caption',
                            title: 'Caption',
                        },
                    ],
                    validation: Rule => Rule.required(),
                })
            ]
        }
    ]
})