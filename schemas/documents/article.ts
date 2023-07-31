import { defineType, defineField, defineArrayMember } from 'sanity'
import {BulbOutlineIcon} from '@sanity/icons'
import slug from '../fields/slug'
import theme from '../fields/_theme'
import eyebrow from '../fields/_eyebrow'
import {introBlockType as introBlock} from '../blocks/introBlock'
import {textBlockType as textBlock} from '../blocks/textBlock'
import {textHeadingBlockType as textHeadingBlock} from '../blocks/textHeadingBlock'
import {mediaBlockType as mediaBlock} from '../blocks/mediaBlock'
import {awardsBlockType as awardsBlock} from '../blocks/awardsBlock'
import {galleryBlockType as galleryBlock} from '../blocks/galleryBlock'

export const articleType = defineType({
    name: 'article',
    title: 'Article',
    type: 'document',
    icon: BulbOutlineIcon,
    groups: [
        {
            name: 'basics',
            title: 'Basics',
            default: true,
        },
        {
            name: 'content',
            title: 'Content',
        }
    ],
    fields: [
        defineField({
            name: 'title',
            description: 'This field is the title of your page.',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
            group: 'basics',
        }),
        { ...eyebrow, group: 'basics' },
        { ...theme, group: 'basics' },
        { ...slug, group: 'basics' },
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
            validation: (rule) => rule.required(),
            group: 'basics',
        }),
        defineField({
            name: 'abstract',
            title: 'Abstract',
            type: 'text',
            rows: 3,
            validation: (rule) => rule.required(),
            group: 'basics',
        }),

        // Content Group =======================================
        defineField({
            name: 'contentDesigner',
            title: 'Content Designer',
            type: 'array',
            of: [
                defineArrayMember(introBlock),
                defineArrayMember(textHeadingBlock),
                defineArrayMember(textBlock),
                defineArrayMember(mediaBlock),
                defineArrayMember(galleryBlock),
                defineArrayMember(awardsBlock),
            ],
            group: 'content',
        }),
    ]
})