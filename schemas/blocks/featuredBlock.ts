import { defineField, defineType } from 'sanity'
import {RocketIcon} from '@sanity/icons'

export const featuredBlockType = defineType({
    type: 'object',
    name: 'featuredBlock',
    title: 'Featured Project Block',
    icon: RocketIcon,
    preview: {
        select: {
            title: 'project.title',
        },
        prepare: ({ title }) => {
            return {
                title: `${title ? '[ Featured Project Block ] ' + title : '[ Featured Project Block ]' }`,
            }
        }
    },
    fields: [
        defineField({
            type: 'reference',
            name: 'project',
            title: 'Project',
            to: [{ type: 'project' }],
        }),
    ]
})