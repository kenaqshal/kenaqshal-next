import Link from 'next/link';
import NowPlaying from 'components/NowPlaying';
import { format } from 'date-fns';
import { app } from 'config/app';
import CustomLink from './CustomLink';


export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-slate-700 dark:border-gray-800 mb-8" />
      <div className="flex justify-between w-full flex-wrap h-auto">
        <div className="flex-col basis-1/2 md:basis-1/4 mt-4 md:mt-0">
          <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            General
          </h2>
          <ul className="text-gray-600 dark:text-gray-400">
            <li className="mb-3">
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/project" className="hover:underline">
                Project
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-col basis-1/2 md:basis-1/4 mt-4 md:mt-0">
          <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Social
          </h2>
          <ul className="text-gray-600 dark:text-gray-400">
            <li className="mb-3">
              <CustomLink href="https://twitter.com/kenaqshal">
                Twitter
              </CustomLink>
            </li>
            <li className="mb-3">
              <CustomLink href="https://github.com/kenaqshal">
                Github
              </CustomLink>
            </li>
            <li className="mb-3">
              <CustomLink href="https://www.linkedin.com/in/kenaqshal">
                LinkedIn
              </CustomLink>
            </li>
            <li className="mb-3">
              <CustomLink href="https://medium.com/@kenaqshal31">
                Medium
              </CustomLink>
            </li>
          </ul>
        </div>
        <div className="flex-col basis-1/2 md:basis-1/4 mt-4 md:mt-0">
          <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Extra
          </h2>
          <ul className="text-gray-600 dark:text-gray-400">
            <li className="mb-3">
              <CustomLink href="https://drive.google.com/file/d/19-gytAKYky2pFi3Y04_1gVmzcw6WVKWx/view?usp=sharing">
                Resume
              </CustomLink>
            </li>
            <li className="mb-3">
              <Link href="/snippets" className="hover:underline">
                Snippet
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/tweets" className="hover:underline">
                Tweets
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/timeline" className="hover:underline">
                Timeline
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sm:flex sm:items-center sm:justify-between w-full mt-5   gap-x-5">
        <NowPlaying />
        <p className="text-sm w-full mt-3 md:mt-0 text-gray-500 sm:text-right dark:text-gray-400">
          © {format(new Date(), 'yyyy')}{' '}
          <CustomLink href={app.BASE_URL}
          >
            Ken Aqshal Bramasta
          </CustomLink>
        </p>
      </div>
    </footer>
  );
}
