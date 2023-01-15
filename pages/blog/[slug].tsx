import { MDXRemote } from 'next-mdx-remote';
import BlogLayout from 'layouts/blog';
import Tweet from 'components/Tweet';
import components from 'components/MDXComponents';
import { postQuery, postSlugsQuery } from 'lib/sanity/queries';
import { getTweets } from 'lib/twitter';
import { sanityClient, getClient } from 'lib/sanity/client';
import { mdxToHtml } from 'lib/mdx';
import { Post } from 'lib/types';
import SanityContent from 'components/sanity/Base';

export default function PostPage({ post }: { post: Post }) {
  const StaticTweet = ({ id }) => {
    const tweet = post.tweets.find((tweet) => tweet.id === id);
    return <Tweet {...tweet} />;
  };

  return (
    <BlogLayout post={post}>
      <SanityContent content={post.content} />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params, preview = false}) {
  const { post } = await getClient(preview).fetch(postQuery, {
    slug: params.slug
  });

  if (!post) {
    return { notFound: true };
  }



  return {
    props: {
      post: {
        ...post,
        readingTime : post.readTime
      }
    }
  };
}
