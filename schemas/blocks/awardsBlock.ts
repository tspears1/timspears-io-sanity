import { defineType } from 'sanity'
import {IceCreamIcon} from '@sanity/icons'
import sectionHeading from '../objects/sectionHeading'

export default defineType({
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
        sectionHeading,
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