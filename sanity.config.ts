import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {RobotIcon} from '@sanity/icons'
import {media} from 'sanity-plugin-media'
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash"
import { colorInput } from "@sanity/color-input"

import { pageStructure, singletonPlugin } from './plugins/settings'

// schemas ==============
import home from "./schemas/singletons/home"
import settings from "./schemas/singletons/settings"

import page from './schemas/documents/page'
import project from './schemas/documents/project'

import skill from './schemas/objects/skill'
import theme from './schemas/objects/theme'

export default defineConfig({
  projectId: 'z0o6cgrz',
  dataset: 'production',
  basePath: '/studio',
  name: 'default',
  title: 'timspears.io',
  icon: RobotIcon,

  schema: {
    types: [
      // Singletons
      home,
      settings,

      // Documents
      page,
      project,

      // Objects
      skill,
      theme,
    ],
  },

  plugins: [
    deskTool({
      structure: pageStructure([home, settings]),
    }),
    media(),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([home.name, settings.name]),
    visionTool(),
    colorInput(),
    unsplashImageAsset(),
  ],
})
