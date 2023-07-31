import { DocumentsIcon } from '@sanity/icons'
import { defineType, defineField, defineArrayMember } from 'sanity'
import slug from '../fields/slug'
import theme from '../fields/_theme'
import eyebrow from '../fields/_eyebrow'
import workTemplate from '../templates/_work-index'
import {introBlockType as introBlock} from '../blocks/introBlock'
import {textBlockType as textBlock} from '../blocks/textBlock'
import {textHeadingBlockType as textHeadingBlock} from '../blocks/textHeadingBlock'
import {mediaBlockType as mediaBlock} from '../blocks/mediaBlock'
import {awardsBlockType as awardsBlock} from '../blocks/awardsBlock'
import {galleryBlockType as galleryBlock} from '../blocks/galleryBlock'
import { servicesBlockType as servicesBlock } from '../blocks/servicesBlock'
import thoughtsIndex from '../templates/_thoughts-index'
import { featuredBlockType as featuredBlock } from '../blocks/featuredBlock'

const allowContentDesigner : string[] = [
    'about-template',
    'thoughts-template',
]

export const pageType = defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    icon: DocumentsIcon,
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
        {
            name: 'heroSize',
            title: 'Hero Size',
            type: 'string',
            options: {
                list: [
                    { title: 'SM', value: 'sm' },
                    { title: 'MD', value: 'md' },
                    { title: 'LG', value: 'lg' },
                ],
                layout: 'radio',
                direction: 'horizontal',
            },
            initialValue: 'large',
            group: 'basics',
        },
        { ...slug, group: 'basics' },
        { ...eyebrow, group: 'basics' },
        defineField({
            name: 'pageTemplate',
            title: 'Page Template',
            type: 'string',
            options: {
                list: [
                    { title: 'Simple Page', value: 'simple-template' },
                    { title: 'Works Index', value: 'works-template' },
                    { title: 'Thoughts Index', value: 'thoughts-template' },
                    { title: 'About Page', value: 'about-template' },
                    { title: 'Contact Page', value: 'contact-template' },
                ]
            },
            validation: (rule) => rule.required(),
            initialValue: 'simple-template',
            group: 'basics',
        }),
        { ...theme, group: 'basics' },

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
                defineArrayMember(servicesBlock),
                defineArrayMember(featuredBlock),
            ],
            group: 'content',
            hidden: ({ document }) => !allowContentDesigner.includes( document?.pageTemplate as string ),
            validation: Rules => Rules.unique()
        }),

        // Work Template
        ...workTemplate,

        // Thoughts Template
        ...thoughtsIndex,

    ]
})