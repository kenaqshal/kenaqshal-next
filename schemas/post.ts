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
  name: 'post',
  title: 'Post',
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
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text'
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: authorType.name }
    }),
    defineField({
      name: 'mainImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: tagType.name } }]
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publish At',
      type: 'datetime'
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent'
    })
    // defineField({
    //   type: 'markdown',
    //   title: 'Body',
    //   name: 'content'
    // })
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      date: 'datetime',
      media: 'mainImage'
    },
    prepare({ title, media, author, date }) {
      const subtitles = [
        author && `by ${author}`,
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`
      ].filter(Boolean);

      return { title, media, subtitle: subtitles.join(' ') };
    }
  }
});
