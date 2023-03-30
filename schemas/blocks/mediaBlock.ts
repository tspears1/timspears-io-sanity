import { defineType, defineArrayMember } from 'sanity'
import {ImagesIcon} from '@sanity/icons'
import sectionHeading from '../objects/sectionHeading'

export default defineType({
    type: 'object',
    name: 'mediaBlock',
    title: 'Media Block',
    icon: ImagesIcon,
    preview: {
        select: {
            title: 'sectionHeading.text',
            media: 'mediaGroup',
        },
        prepare: ({ title, media }) => {
            return {
                title: `${title ?? '[ Media Block ]'} ( ${media.length} )`,
                media: media[0].media
            }
        }
    },
    fields: [
        sectionHeading,
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
                        {
                            type: 'string',
                            name: 'spacing',
                            title: 'Spacing',
                            options: {
                                list: [
                                    { title: 'Auto', value: 'auto' },
                                    { title: 'Full', value: 'full' },
                                    { title: 'Half', value: 'half' },
                                    { title: 'Third', value: 'third' },
                                ],
                                layout: 'radio',
                                direction: 'horizontal',
                            },
                            initialValue: 'auto',
                        }
                    ]
                })
            ]
        }
    ]
})