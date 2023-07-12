import { defineField, defineType } from 'sanity'
import { JoystickIcon } from '@sanity/icons'

export const skillType =  defineType({
    name: 'skill',
    title: 'Skill',
    type: 'document',
    icon: JoystickIcon,
    fields: [
        defineField({
            type: 'string',
            name: 'title',
            title: 'Title',
            validation: (rule) => rule.required(),
        }),
        defineField({
            type: 'slug',
            name: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96,
                isUnique: (value, context) => context.defaultIsUnique(value, context),
            },
            validation: (rule) => rule.required(),
        }),
    ]
})
