import type { NextApiRequest, NextApiResponse } from 'next';
import { isValidRequest, isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';
import { sanityClient } from 'lib/sanity/client';
import { postUpdatedQuery, projectUpdatedQuery, snippetUpdatedQuery, timelineUpdatedQuery } from 'lib/sanity/queries';
import { app } from 'config/app';

export default async function revalidate(req: NextApiRequest, res: NextApiResponse) {
  const signature: any = req.headers[SIGNATURE_HEADER_NAME]
  const body = await readBody(req) // Read the body into a string


  if (!isValidSignature(body, signature, app.SANITY_STUDIO_REVALIDATE_SECRET)) {
    res.status(401).json({success: false, message: 'Invalid signature'})
    return
  }

  const jsonBody = JSON.parse(body);

  const { _id: id, _type: type } = jsonBody;
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

export const config = {
  api: {
    bodyParser: false,
  },
}

async function readBody(readable) {
  const chunks = []
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }
  return Buffer.concat(chunks).toString('utf8')
}