import { defineField } from 'sanity'

export default defineField({
    name: 'pageTheme',
    title: 'Theme',
    type: 'reference',
    to: { type: 'theme' },
    options: {
        disableNew: true,
    },
    validation: (rule) => rule.required(),
})