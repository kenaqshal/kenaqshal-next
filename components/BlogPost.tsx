import Link from 'next/link';
import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { Post, Views } from 'lib/types';
import { format } from 'date-fns/esm';
import Image from 'next/image';
import { urlForImage } from 'lib/sanity/image';

export default function BlogPost({ blogData }: { blogData: Post }) {
  const { data } = useSWR<Views>(`/api/views/${blogData.slug}`, fetcher);
  const views = data?.total;
  const publishedDate = format(new Date(blogData.publishedAt), 'dd MMM yyyy');

  return (
    <Link href={`/blog/${blogData.slug}`} className="w-full ">
      <div className="w-full mb-2 flex dark:bg-gray-900 border-2 border-primary shadow rounded-xl">
        <div className="w-1/4 p-2">
          <Image
            alt="Ken Aqshal Bramasta"
            src={urlForImage(blogData.mainImage).url()}
            width="0"
            height="0"
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div className="w-3/4 p-4">
          <div className="w-full ">
            <p className="mb-1 text-sm text-gray-500">
              {blogData.readTime} min read • <time>{publishedDate}</time> •{' '}
              {`${views ? new Number(views).toLocaleString() : '–––'}`} views
            </p>
            <h3 className="text-lg md:text-lg font-medium w-full text-gray-900 dark:text-gray-100 tracking-tight">
              {blogData.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-300 tracking-tight">
              {blogData.excerpt}
            </p>
            <div className="mt-4 flex gap-2">
              {blogData.tags.map((tag) => {
                return (
                  <span
                    key={tag.title}
                    className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600 dark:text-blue-50 dark:bg-blue-500"
                  >
                    {tag.title}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
