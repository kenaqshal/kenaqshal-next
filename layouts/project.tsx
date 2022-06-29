import Image from 'next/image';

import Container from 'components/Container';
import type { PropsWithChildren } from 'react';
import { Project } from 'lib/types';
import { urlForImage } from 'lib/sanity';
import { Link45deg } from '@styled-icons/bootstrap';

export default function ProjectLayout({
  children,
  project
}: PropsWithChildren<{ project: Project }>) {
  return (
    <Container
      title={`${project.title} - Code Project`}
      description="A collection of code projects – including serverless functions, Node.js scripts, and CSS tricks."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <div className="flex justify-between w-full mb-8">
          <div>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              {project.title}
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
          </div>
          <div className="mt-2 sm:mt-0">
            <Image
              alt={project.title}
              height={84}
              width={84}
              src={urlForImage(project.logo).url()}
              className="rounded"
            />
          </div>
        </div>

        <div className="w-full mt-4 prose dark:prose-dark max-w-none">
          <a href="https://movic.id" target="_blank" rel="noopener noreferrer" className='no-underline'>
            <button
              className="flex items-center justify-center right-1 top-1 px-4 font-medium h-8 bg-slate-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
              type="submit"
            >
              Visit{' '}
              {
                <Link45deg className="w-6 h-auto text-gray-800 dark:text-gray-200 " />
              }
            </button>
          </a>
          {children}
        </div>
      </article>
    </Container>
  );
}
