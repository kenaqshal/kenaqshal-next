import { useMemo, useState, useEffect } from 'react';

import Container from 'components/Container';
import BlogPost from 'components/BlogPost';
import { InferGetStaticPropsType } from 'next';
import { indexQuery } from 'lib/sanity/queries';
import { getClient } from 'lib/sanity/client';
import { Post } from 'lib/types';
import { useRouter } from 'next/router';


export default function Blog({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');
  const { query } = useRouter();
  const [tag, setTag] = useState('');
  const filteredBlogPosts = useMemo(() => {
    return posts
      .filter((post) => {
        const matchesName = post.title.toLowerCase().includes(searchValue.toLowerCase())
        const matchesTag = post.tags.some((tagValue) => tagValue.slug.toLowerCase().includes(tag.toLowerCase()))
        return matchesName && matchesTag
      })
  }, [posts, searchValue, tag]);

  useEffect(() => {
    if (query.search) {
      setSearchValue(query.search.toString());
    }
    if (query.tag) {
      setTag(query.tag.toString());
    }
  }, [query]);


  

  return (
    <Container
      title="Blog – Ken Aqshal Bramasta"
      description="Thoughts on the software industry, programming, tech, music, and my personal life."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Blog
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {`This is the place where I write my personal blog, mostly about web development.
            In total, I've written ${posts.length} articles on my blog.
            Use the search below to filter by title.`}
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            defaultValue={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
          All Posts
        </h3>
        {!filteredBlogPosts.length && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No posts found.
          </p>
        )}
        {filteredBlogPosts.map((post) => (
          <BlogPost
            blogData={post}
            key={post._id}
          />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps({ preview = false }) {
  const posts: Post[] = await getClient(preview).fetch(indexQuery());

  return { props: { posts } };
}
