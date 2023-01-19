import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import type { PropsWithChildren } from 'react';

import Container from 'components/Container';
import Subscribe from 'components/Subscribe';
import ViewCounter from 'components/ViewCounter';
import { Post } from 'lib/types';
import { urlForImage } from 'lib/sanity/image';
import { app } from 'config/app';
import CustomLink from 'components/CustomLink';

export default function BlogLayout({
  children,
  post
}: PropsWithChildren<{ post: Post }>) {
  return (
    <Container
      title={`${post.title} – Ken Aqshal Bramasta`}
      description={post.excerpt}
      image={urlForImage(post.mainImage).url()}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="Ken Aqshal Bramasta"
              height={24}
              width={24}
              src="/avatar.jpg"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {'Ken Aqshal Bramasta / '}
              {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
            {post.readingTime} min read
            {` • `}
            <ViewCounter slug={post.slug} />
          </p>
        </div>
        <div className="mt-4 flex gap-2">
          {post.tags.map((tag) => {
            return (
              <CustomLink href={`/blog?tag=${tag.slug}`} key={tag.title}>
                <span
                  key={tag.title}
                  className="inline-flex items-center gap-1 rounded-full bg-blue-50 dark:bg-blue-500 px-2 py-1 text-sm font-semibold dark:text-blue-50 text-blue-600"
                >
                  {tag.title}
                </span>
              </CustomLink>
            );
          })}
        </div>

        <div className="w-full mt-4 prose dark:prose-dark max-w-none">
          <div className="w-full">
            <Image
              alt="Ken Aqshal Bramasta"
              src={urlForImage(post.mainImage).url()}
              width="0"
              height="0"
              sizes="100vw"
              style={{ objectFit: 'contain', objectPosition: 'center' }}
              className="w-full h-auto max-h-100 rounded-xl"
            />
          </div>
          {children}
        </div>
        <div className="mt-8"></div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <a
            href={`https://mobile.twitter.com/search?q=${encodeURIComponent(
              `${app.BASE_URL}/blog/${post.slug}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Discuss on Twitter'}
          </a>
          {` • `}
          <a
            href="https://github.com/kenaqshal/kenaqshal-next/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Suggest Change'}
          </a>
        </div>
      </article>
    </Container>
  );
}
