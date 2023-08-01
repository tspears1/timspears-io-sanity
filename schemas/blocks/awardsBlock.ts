import { defineType, defineField } from 'sanity'
import {IceCreamIcon} from '@sanity/icons'
import { sectionHeadingType as sectionHeading } from '../objects/sectionHeading'

export const awardsBlockType = defineType({
    type: 'object',
    name: 'awardsBlock',
    title: 'Awards Block',
    icon: IceCreamIcon,
    preview: {
        select: {
            title: 'sectionHeading.text'
        },
    },
    fields: [
        defineField(sectionHeading),
        defineField({
            type: 'string',
            name: 'sectionTheme',
            title: 'Section Theme',
            options: {
                list: [
                    { title: 'Light', value: 'light' },
                    { title: 'Dark', value: 'dark' },
                ],
                layout: 'radio',
                direction: 'horizontal',
            },
            initialValue: 'light',
        }),
        {
            type: 'array',
            name: 'awardsList',
            title: 'Awards',
            of: [
                {
                    type: 'object',
                    name: 'awardItem',
                    title: 'Award',
                    icon: IceCreamIcon,
                    fields: [
                        {
                            type: 'string',
                            name: 'title',
                            title: 'Title',
                            validation: Rule => Rule.required()
                        },
                        {
                            type: 'string',
                            name: 'subtitle',
                            title: 'Subtitle',
                        },
                        {
                            type: 'string',
                            name: 'competition',
                            title: 'Competition',
                        },
                        {
                            type: 'reference',
                            name: 'presenter',
                            title: 'Presenter',
                            to: [{ type: 'award' }]
                        },
                        {
                            type: 'reference',
                            name: 'relatedProject',
                            title: 'Related Project',
                            to: [{ type: 'project' }],
                            options: {
                                disableNew: true,
                            }
                        },
                    ],
                },
            ],
        },
    ],
})