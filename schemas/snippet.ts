import { BookIcon } from '@sanity/icons';
import { format, parseISO } from 'date-fns';
import { defineField, defineType } from 'sanity';

import authorType from './author';
import categoryType from './category';

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
  name: 'snippet',
  title: 'Snippet',
  icon: BookIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context)
      }
    }),

    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }]
    })
    // defineField({
    //   type: 'markdown',
    //   title: 'Content',
    //   name: 'content'
    // })
  ]
});
