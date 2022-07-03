import RSS from 'rss';
import { sanityClient } from 'lib/sanity-server';
import { indexQuery } from 'lib/queries';
import { app } from 'config/app';

export async function getServerSideProps({ res }) {
  const feed = new RSS({
    title: 'Ken Aqshal Bramasta',
    site_url: app.BASE_URL,
    feed_url: `${app.BASE_URL}/feed.xml`
  });

  const allPosts = await sanityClient.fetch(indexQuery());
  allPosts.map((post) => {
    feed.item({
      title: post.title,
      url: `${app.BASE_URL}/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.excerpt
    });
  });

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );
  res.write(feed.xml({ indent: true }));
  res.end();

  return {
    props: {}
  };
}

export default function RSSFeed() {
  return null;
}
