import { defineField } from "sanity"

export default defineField({
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
    },
    validation: (rule) => rule.required(),
})