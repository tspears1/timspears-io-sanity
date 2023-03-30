import { defineType } from 'sanity'
import {InfoOutlineIcon} from '@sanity/icons'

import sectionEyebrow from '../objects/sectionEyebrow'
import button from '../objects/button'
import contentSimple from '../objects/contentSimple'
import sectionHeading from '../objects/sectionHeading'

export default defineType({
    name: 'projectIntro',
    title: 'Project Intro',
    type: 'object',
    icon: InfoOutlineIcon,
    preview: {
        select: {
            title: 'sectionHeading.text'
        },
    },
    fields: [
        sectionEyebrow,
        sectionHeading,
        button,
        contentSimple,
    ]
})