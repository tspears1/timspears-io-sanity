import { PresentationIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

import slug from '../fields/slug'
import theme from '../fields/_theme'
import eyebrow from '../fields/_eyebrow'
import {introBlockType as introBlock} from '../blocks/introBlock'
import {textBlockType as textBlock} from '../blocks/textBlock'
import {textHeadingBlockType as textHeadingBlock} from '../blocks/textHeadingBlock'
import {mediaBlockType as mediaBlock} from '../blocks/mediaBlock'
import {awardsBlockType as awardsBlock} from '../blocks/awardsBlock'
import {galleryBlockType as galleryBlock} from '../blocks/galleryBlock'
import {featuredImageType as featuredImage} from '../objects/featuredImage'

export const projectType = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    icon: PresentationIcon,
    liveEdit: true,
    groups: [
        {
            name: 'basics',
            title: 'Basics',
            default: true,
        },
        {
            name: 'card',
            title: 'Project Card',
        },
        {
            name: 'content',
            title: 'Content',
        },
        {
            name: 'seo',
            title: 'SEO',
        },

    ],
    fields: [
        defineField({
            name: 'title',
            description: 'This field is the title of your project.',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(),
            group: 'basics',
        }),
        { ...slug, group: 'basics' },
        {
            name: 'client',
            title: 'Client',
            type: 'string',
            validation: Rule => Rule.required(),
            group: 'basics',
        },
        {
            name: 'year',
            title: 'Year',
            type: 'string',
            validation: Rule => Rule.required(),
            group: 'basics',
        },
        { ...eyebrow, group: 'basics' },
        { ...theme, group: 'basics' },
        defineField({ ...featuredImage, group: 'basics' }),
        defineField({
            name: 'projectSkills',
            title: 'Skills',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'reference',
                    to: { type: 'skill' },
                    options: {
                        disableNew: true,
                    }
                })
            ],
            group: 'basics',
        }),

        // CARD GROUP =======================================================
        defineField({
            name: 'cardTitle',
            title: 'Card Title Override',
            description: '(Optional.) Will use Title if left blank',
            type: 'string',
            validation: (rule) => rule.max(24),
            group: 'card',
        }),
        defineField({
            name: 'cardEyebrow',
            title: 'Card Eyebrow Override',
            description: '(Optional.) Will use Eyebrow if left blank',
            type: 'string',
            validation: (rule) => rule.max(45),
            group: 'card',
        }),
        defineField({
            name: 'awarded',
            title: 'Has Awards?',
            type: 'boolean',
            initialValue: false,
            group: 'card',
        }),
        defineField({
            name: 'cardImage',
            title: 'Card Image',
            description: '(Optional.) Will use Featured Image if left blank.Recommended size 1600 x 1600',
            type: 'image',
            group: 'card',
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

        // SEO Group ===========================================
        defineField({
            name: 'overview',
            description:
                'Used both for the <meta> description tag for SEO, and project subheader.',
            title: 'Overview',
            type: 'array',
            of: [
                // Paragraphs
                defineArrayMember({
                    lists: [],
                    marks: {
                        annotations: [],
                        decorators: [
                        {
                            title: 'Italic',
                            value: 'em',
                        },
                        {
                            title: 'Strong',
                            value: 'strong',
                        },
                        ],
                    },
                    styles: [],
                    type: 'block',
                }),
            ],
            validation: (rule) => rule.max(155),
            group: 'seo',
        }),
    ]
})