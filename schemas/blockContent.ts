import { BookIcon } from '@sanity/icons';
import { format, parseISO } from 'date-fns';
import { defineField, defineType } from 'sanity';

import authorType from './author';
import tagType from './tag';

/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    {
      type: 'block'
    },
    {
      type: 'image', //TODO: Add image metadata
      options: {
        hotspot: false, // <-- Defaults to false
        metadata: [
          'blurhash',   
          'lqip',       
        ],
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        }
      ]
    },
    {
      type: 'code',
      options: {
        withFilename: true
      }
    }
  ]
});
