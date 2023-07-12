import { defineType, defineField } from 'sanity'

export const featuredImageType = defineType({
    name: 'featuredImage',
    title: 'Featured Image',
    type: 'object',
    options: {
        collapsible: true,
    },
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            description: 'Recommended size 1600 x 1600',
            type: 'image',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'fit',
            title: 'Use Image Fit: Contain?',
            description: 'Will fit the image inside the container. Default to Cover.',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'background',
            title: 'Background Color',
            description: 'Select background color for the image. Default to theme.',
            type: 'color',
            hidden: ({ parent }) => !parent?.fit,
        }),
    ],
})