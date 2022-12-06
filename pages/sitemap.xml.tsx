import { sanityClient } from 'lib/sanity/client';
import {
  postSlugsQuery,
  projectSlugsQuery,
  snippetSlugsQuery
} from 'lib/sanity/queries';
import { app } from 'config/app';

const createSitemap = (slugs) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${slugs
          .map((slug) => {
            return `
                <url>
                    <loc>${`${app.BASE_URL}/${slug}`}</loc>
                </url>
            `;
          })
          .join('')}
    </urlset>
`;
export async function getServerSideProps({ res }) {
  const allPosts = await sanityClient.fetch(postSlugsQuery);
  const allSnippets = await sanityClient.fetch(snippetSlugsQuery);
  const allProjects = await sanityClient.fetch(projectSlugsQuery);
  const allPages = [
    ...allPosts.map((slug) => `blog/${slug}`),
    ...allSnippets.map((slug) => `snippets/${slug}`),
    ...allProjects.map((slug) => `project/${slug}`),
    ...[
      '',
      'about',
      'blog',
      'dashboard',
      'guestbook',
      'newsletter',
      'tweets',
      'uses',
      'timeline',
      'snippets',
      'project'
    ]
  ];

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );
  res.write(createSitemap(allPages));
  res.end();

  return {
    props: {}
  };
}

export default function Sitemap() {
  return null;
}
