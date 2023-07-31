import { defineField, defineType } from 'sanity'

export const featuredBlockType = defineType({
    type: 'object',
    name: 'featuredBlock',
    title: 'Featured Project Block',
    fields: [
        defineField({
            type: 'reference',
            name: 'project',
            title: 'Project',
            to: [{ type: 'project' }],
        }),
    ]
})