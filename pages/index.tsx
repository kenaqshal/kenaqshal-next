import Image from 'next/image';
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
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Ken Aqshal Bramasta
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
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Friendly software engineer who love to learn new things and always
              looking for new ways to improve his skills
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Ken Aqshal Bramasta"
              height={176}
              width={176}
              src="/avatar.jpg"
              className="rounded-full filter grayscale"
            />
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Recent Posts
        </h3>
        <div className="flex gap-6 flex-col md:flex-row">
          {posts.map((post: Post) => {
            return (
              <BlogPostCard
                key={post.title}
                title={post.title}
                slug={post.slug}
                gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
              />
            );
          })}
        </div>
        <Link href="/blog">
          <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            Read all posts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts: Post[] = await getClient().fetch(indexQuery(1, 3));

  return { props: { posts } };
}
