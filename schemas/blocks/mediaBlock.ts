import { defineType, defineArrayMember } from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export default defineType({
    type: 'object',
    name: 'mediaBlock',
    title: 'Media Block',
    icon: ImagesIcon,
    fields: [
        {
            type: 'string',
            name: 'blockTitle',
            title: 'Block Title',
            readOnly: true,
            initialValue: () => 'Media Block',
        },
        {
            type: 'string',
            name: 'sectionTitle',
            title: 'Section Title',
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
                            placeholder: 'Select a spacing option.',
                            validation: Rule => Rule.required()
                        }
                    ]
                })
            ]
        }
    ]
})