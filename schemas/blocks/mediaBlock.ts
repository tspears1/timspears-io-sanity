import { defineType, defineArrayMember, defineField } from 'sanity'
import {ImagesIcon} from '@sanity/icons'
import {sectionHeadingType as sectionHeading} from '../objects/sectionHeading'
import { title as rTitle } from 'radash'

export const mediaBlockType = defineType({
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
                media: media[0].media || media[0].video?.poster
            }
        }
    },
    fields: [
        defineField(sectionHeading),
        {
            type: 'string',
            name: 'layout',
            title: 'Media Block Layout',
            options: {
                list: [
                    { title: 'Grid', value: 'grid' },
                    { title: 'Full Viewport', value: 'full' },
                    { title: 'Video Player', value: 'video' },
                ],
                layout: 'radio',
                direction: 'horizontal',
            },
            initialValue: 'grid',
        },
        {
            name: 'mediaGroup',
            title: 'Media Group',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'mediaItem',
                    title: 'Media',
                    preview: {
                        select: {
                            size: 'spacing',
                            ratio: 'ratio',
                            media: 'media',
                            video: 'video',
                            type: 'mediaType'
                        },
                        prepare: ({ type, media, size, ratio, video }) => {
                            const caption = media?.caption ?? video?.caption ?? '{ Untitled }'
                            return {
                                title: `[ ${rTitle(type)} ] [ ${rTitle(size)} ] [ ${rTitle(ratio)} ] ${caption}`,
                                media: media ?? video?.poster ?? undefined
                            }
                        }
                    },
                    fields: [
                        defineField({
                            type: 'string',
                            name: 'mediaType',
                            title: 'Media Type',
                            options: {
                                list: [
                                    { title: 'Image', value: 'image' },
                                    { title: 'Video', value: 'video' },
                                ],
                                layout: 'radio',
                                direction: 'horizontal',
                            },
                            initialValue: 'image',
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            type: 'image',
                            name: 'media',
                            title: 'Image Media',
                            options: {
                                hotspot: true,
                                accept: 'image/*'
                            },
                            fields: [
                                {
                                    name: 'caption',
                                    type: 'string',
                                    title: 'Caption',
                                },
                                {
                                    name: 'attribution',
                                    type: 'string',
                                    title: 'Attribution',
                                }
                            ],
                            validation: (Rule) => Rule.custom((currentValue, { document }) => {
                                const { mediaType } = document
                                if (mediaType === 'image') {
                                    return currentValue?.asset?._ref ? true : 'Image is required.'
                                }
                                return true
                            }),
                            hidden: ({ parent }) => parent?.mediaType !== 'image',
                        }),
                        defineField({
                            type: 'file',
                            name: 'video',
                            title: 'Video Media',
                            fields: [
                                {
                                    name: 'caption',
                                    type: 'string',
                                    title: 'Caption',
                                },
                                {
                                    name: 'attribution',
                                    type: 'string',
                                    title: 'Attribution',
                                },
                                {
                                    name: 'poster',
                                    type: 'image',
                                    title: 'Poster',
                                },
                                {
                                    name: 'background',
                                    type: 'color',
                                    title: 'Background Color',
                                }
                            ],
                            validation: (Rule) => Rule.custom((currentValue, { document }) => {
                                const { mediaType } = document
                                if (mediaType === 'video') {
                                    return currentValue?.asset?._ref ? true : 'Video is required.'
                                }
                                return true
                            }),
                            hidden: ({ parent }) => parent?.mediaType !== 'video',
                            options: {
                                accept: 'video/*'
                            }
                        }),
                        defineField({
                            type: 'string',
                            name: 'ratio',
                            title: 'Aspect Ratio',
                            description: 'Only applies to grid layout.',
                            options: {
                                list: [
                                    { title: '1:1', value: '1:1' },
                                    { title: '4:3', value: '4:3' },
                                    { title: '16:9', value: '16:9' },
                                    { title: '21:9', value: '21:9' },
                                    { title: 'Contain', value: 'null' },
                                ],
                                layout: 'radio',
                                direction: 'horizontal',
                            },
                            initialValue: '16/9',
                        }),
                        defineField({
                            type: 'string',
                            name: 'spacing',
                            title: 'Grid Spacing',
                            description: 'Only applies to grid layout.',
                            options: {
                                list: [
                                    { title: 'Auto', value: 'auto' },
                                    { title: 'Full', value: 'full' }, // 1
                                    { title: 'Half', value: 'half' }, // 2
                                    { title: 'Third', value: 'third' }, // 3
                                ],
                                layout: 'radio',
                                direction: 'horizontal',
                            },
                            initialValue: 'auto',
                        })
                    ]
                })
            ]
        }
    ]
})