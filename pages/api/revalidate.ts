import type { NextApiRequest, NextApiResponse } from 'next';
import { isValidRequest } from '@sanity/webhook';
import { sanityClient } from 'lib/sanity/client';
import { postUpdatedQuery, projectUpdatedQuery, snippetUpdatedQuery, timelineUpdatedQuery } from 'lib/sanity/queries';
import { app } from 'config/app';

export default async function revalidate(req :NextApiRequest, res: NextApiResponse) {
// {
  // This isn't working yet - not sure why
  if (!isValidRequest(req, app.SANITY_STUDIO_REVALIDATE_SECRET)) {
    return res.status(401).json({ message: 'Invalid request' });
  }

  const { _id: id, _type: type } = req.body;
  if (typeof id !== 'string' || !id) {
    return res.status(400).json({ message: 'Invalid _id' });
  }

  try {
    let slug;
    if (type == 'post') {
      slug = await sanityClient.fetch(postUpdatedQuery, { id });
      await Promise.all([
        res.revalidate('/'),
        res.revalidate('/blog'),
        res.revalidate(`/blog/${slug}`)
      ]);
    }
    if (type == 'snippet') {
      slug = await sanityClient.fetch(snippetUpdatedQuery, { id });
      await Promise.all([
        res.revalidate('/snippets'),
        res.revalidate(`/snippets/${slug}`)
      ]);
    }
    if (type == 'project') {
      slug = await sanityClient.fetch(projectUpdatedQuery, { id });
      await Promise.all([
        res.revalidate('/project'),
        res.revalidate(`/project/${slug}`)
      ]);
    }
    if (type == 'timeline') {
      slug = await sanityClient.fetch(timelineUpdatedQuery, { id });
      await Promise.all([
        res.revalidate('/timeline'),
        res.revalidate('/about')
      ]);
    }

    return res.status(200).json({ message: `Updated ${slug} on type ${type}` });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}
