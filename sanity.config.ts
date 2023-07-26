import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {RobotIcon} from '@sanity/icons'
import {media} from 'sanity-plugin-media'
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash"
import { colorInput } from "@sanity/color-input"
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'

import { pageStructure, singletonPlugin } from './plugins/settings'

// schemas ==============
import { homeType as home} from "./schemas/singletons/home"
import { settingsType as settings} from "./schemas/singletons/settings"
import { schemaTypes } from './schemas'

export default defineConfig({
  projectId: 'z0o6cgrz',
  dataset: 'production',
  basePath: '/studio',
  name: 'default',
  title: 'timspears.io',
  icon: RobotIcon,

  schema: {
    types: schemaTypes,
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
    vercelDeployTool(),
  ],
})
