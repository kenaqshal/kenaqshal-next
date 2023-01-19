/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'

import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import authorType from 'schemas/author'
import postType from 'schemas/post'
import tagType from 'schemas/tag'
import projectType from 'schemas/project'
import snippetType from 'schemas/snippet'
import timelineType from 'schemas/timeline'
import blockContentType from 'schemas/blockContent'
import { media } from 'sanity-plugin-media';
import { codeInput } from '@sanity/code-input';
import  {sanityConfig}  from 'lib/sanity/config'

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Personal Website'

export default defineConfig({
  basePath: '/studio',
  projectId :sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [authorType, postType, tagType, projectType, snippetType, timelineType,blockContentType]
    
  },
  plugins: [
    deskTool(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: sanityConfig.apiVersion }),
    // markdownSchema(),
    media(),
    codeInput(),
    
  ],
})
