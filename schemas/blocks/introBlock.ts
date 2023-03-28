import { defineType } from 'sanity'
import {InfoOutlineIcon} from '@sanity/icons'

import projectEyebrow from '../objects/projectEyebrow'
import button from '../objects/button'
import contentSimple from '../objects/contentSimple'

export default defineType({
    name: 'projectIntro',
    title: 'Project Intro',
    type: 'object',
    icon: InfoOutlineIcon,
    fields: [
        projectEyebrow,
        {
            type: 'string',
            name: 'title',
            title: 'Section Title',
            validation: Rule => Rule.required()
        },
        button,
        contentSimple,
    ]
})