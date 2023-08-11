import { defineType, defineField, defineArrayMember } from 'sanity'
import {WrenchIcon} from '@sanity/icons'
import {sectionHeadingType as sectionHeading} from '../objects/sectionHeading'

export const toolBlockType = defineType({
    type: 'object',
    name: 'toolBlock',
    title: 'Tool Block',
    icon: WrenchIcon,
    preview: {
        select: {
            title: 'sectionHeading.text',
        },
        prepare: ({ title }) => {
            return {
                title: `${title ?? '[ Tool Block ]'}`,
            }
        }
    },
    fields: [
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
        defineField({
            type: 'string',
            name: 'eyebrow',
            title: 'Eyebrow',
        }),
        defineField(sectionHeading),
        defineField({
            type: 'array',
            name: 'tools',
            title: 'Tools',
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'tool',
                    title: 'Tool',
                    preview: {
                        select: {
                            label: 'label',
                            library: 'library',
                        },
                        prepare: ({ label, library }) => {
                            return {
                                title: `[ ${label ?? library } ]`,
                            }
                        }
                    },
                    fields: [
                        {
                            type: 'string',
                            name: 'library',
                            title: 'Library',
                            options: {
                                list: [
                                    { title: 'Anime.js', value: 'anime-js' },
                                    { title: 'Atipo', value: 'atipo' },
                                    { title: 'Form Kit', value: 'form-kit' },
                                    { title: 'Framer Motion', value: 'framer-motion' },
                                    { title: 'Gatsby', value: 'gatsby' },
                                    { title: 'GraphQL', value: 'graph-ql' },
                                    { title: 'JavaScript', value: 'javascript' },
                                    { title: 'Lenis', value: 'lenis' },
                                    { title: 'Motion One', value: 'motion-one' },
                                    { title: 'Nuxt 3', value: 'nuxt' },
                                    { title: 'Pinia', value: 'pinia' },
                                    { title: 'React', value: 'react' },
                                    { title: 'Recoil', value: 'recoil' },
                                    { title: 'Sanity', value: 'sanity' },
                                    { title: 'Sass', value: 'sass' },
                                    { title: 'Splide', value: 'splide' },
                                    { title: 'Strapi', value: 'strapi' },
                                    { title: 'Vite', value: 'vite' },
                                    { title: 'VueUse', value: 'vue-use' },
                                    { title: 'Vue 3', value: 'vue' },
                                    { title: 'WordPress', value: 'wordpress' },
                                ]
                            }
                        },
                        {
                            type: 'string',
                            name: 'label',
                            title: 'Label',
                        },
                        {
                            type: 'string',
                            name: 'description',
                            title: 'Description',
                        }
                    ]
                })
            ]
        })
    ]
})