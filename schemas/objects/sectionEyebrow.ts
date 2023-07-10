import { defineType } from 'sanity'
import ListOverrideField from '../../components/ListOverrideField'

export default defineType({
    name: 'sectionEyebrow',
    title: 'Eyebrow',
    type: 'object',
    options: {
        collapsible: true,
    },
    fields: [
        {
            type: 'string',
            name: 'text',
            title: 'Eyebrow Text',
            validation: Rule => Rule.required(),
        },
        {
            type: 'string',
            name: 'digit',
            title: 'Digit (optional)',
        },
        // {
        //     type: 'reference',
        //     name: 'icon',
        //     title: 'Skill Icon',
        //     to: { type: 'skill' },
        //     options: {
        //         disableNew: true,
        //     },
        // },
        {
            type: 'string',
            name: 'icon',
            title: 'Icon',
            components: {
                input: ListOverrideField,
            },
            options: {
                listGenerator: ({ document }) => {
                    console.log(document)
                    // const skills = (document.skills || []).map((skill) => {
                    //     return { title: skill.title, slug: skill.slug }
                    // })
                    // return skills
                }
            },
            layout: 'radio',
        }

    ]
})