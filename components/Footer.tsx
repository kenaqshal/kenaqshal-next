import Link from 'next/link';
import NowPlaying from 'components/NowPlaying';
import { format } from 'date-fns';
import { app } from 'config/app';

const ExternalLink = ({ href, children }) => (
  <a
    className="hover:underline"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

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
              <Link href="/">
                <a className="hover:underline">Home</a>
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/about">
                <a className="hover:underline">About</a>
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/blog">
                <a className="hover:underline">Blog</a>
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/project">
                <a className="hover:underline">Project</a>
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
              <ExternalLink href="https://twitter.com/kenaqshal">
                Twitter
              </ExternalLink>
            </li>
            <li className="mb-3">
              <ExternalLink href="https://github.com/kenaqshal">
                Github
              </ExternalLink>
            </li>
            <li className="mb-3">
              <ExternalLink href="https://www.linkedin.com/in/kenaqshal">
                LinkedIn
              </ExternalLink>
            </li>
            <li className="mb-3">
              <ExternalLink href="https://medium.com/@kenaqshal31">
                Medium
              </ExternalLink>
            </li>
          </ul>
        </div>
        <div className="flex-col basis-1/2 md:basis-1/4 mt-4 md:mt-0">
          <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Extra
          </h2>
          <ul className="text-gray-600 dark:text-gray-400">
            <li className="mb-3">
              <ExternalLink href="https://drive.google.com/file/d/19-gytAKYky2pFi3Y04_1gVmzcw6WVKWx/view?usp=sharing">
                Resume
              </ExternalLink>
            </li>
            <li className="mb-3">
              <Link href="/snippets">
                <a className="hover:underline">Snippet</a>
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/tweets">
                <a className="hover:underline">Tweets</a>
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/timeline">
                <a className="hover:underline">Timeline</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sm:flex sm:items-center sm:justify-between w-full mt-5   gap-x-5">
        <NowPlaying />
        <p className="text-sm w-full mt-3 md:mt-0 text-gray-500 sm:text-right dark:text-gray-400">
          © {format(new Date(), 'yyyy')}{' '}
          <a href={app.BASE_URL} className="hover:underline" target={'_blank'} rel="noopener noreferrer">
            Ken Aqshal Bramasta
          </a>
        </p>
      </div>
    </footer>
  );
}
