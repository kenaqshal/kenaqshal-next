import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import { getClient } from '../lib/sanity-server';
import { Post } from '../lib/types';
import { indexQuery } from '../lib/queries';
import { InferGetStaticPropsType } from 'next';

export default function Home({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto py-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8 mb-10">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Hi, my name is Ken.
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Software Engineer at{' '}
              <span className="font-semibold">
                <a
                  href="http://mbiz.co.id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mbiz
                </a>
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I'm a software engineer who loves to learn new things and always
              looking for new ways to improve his skills. Welcome to my website,
              where you'll find all the stuff I'm currently thinking about.
            </p>
            <Link href="/about" legacyBehavior>
              <button
                className="flex items-center justify-center right-1 top-1 px-1 font-medium bg-primary text-gray-100 rounded w-40 h-11"
                type="submit"
              >
                More about me
                {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-auto w-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                }
              </button>
            </Link>
          </div>
        </div>

        <div className="flex w-full flex-row flex-wrap justify-between mb-6 items-center">
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight text-black dark:text-white h-4 align-middle">
            Recent Posts
          </h3>
          <Link
            href="/blog"
            className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1 mt-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </Link>
        </div>

        <div className="flex gap-6 flex-col md:flex-row">
          {posts.map((post: Post) => {
            return (
              <BlogPostCard
                key={post.title}
                title={post.title}
                slug={post.slug}
                gradient="from-primary to-primary"
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps({ preview = false }) {
  const posts: Post[] = await getClient(preview).fetch(indexQuery(1, 3));

  return { props: { posts } };
}
