import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { app } from 'config/app';
import NextLink from 'next/link';
import cn from 'classnames';

import Footer from 'components/Footer';
import MobileMenu from 'components/MobileMenu';
import Image from 'next/image';


function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200 underline underline-offset-4 decoration-2 decoration-primary'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg  hover:ease-in hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-primary transition-all'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Ken Aqshal Bramasta – Software engineer.',
    description: `Software engineer and JavaScript enthusiast`,
    image: `${app.BASE_URL}/avatar.jpg`,
    type: 'website',
    ...customMeta
  };

  return (
    <div className="bg-gray-0 dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`${app.BASE_URL}${router.asPath}`} />
        <link rel="canonical" href={`${app.BASE_URL}${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Ken Aqshal Bramasta" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kenaqshal" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="flex flex-col justify-center px-8">
        <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-gray-0  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>
          <div className="w-10 h-auto bg-gray-200 rounded-full dark:bg-gray-600 flex items-center justify-center  hover:ring-4 ring-primary  transition-all">
            <Image
              alt="Ken Aqshal Bramasta"
              height={80}
              width={80}
              src="/avatar.jpg"
              className="rounded-full w-full"
            />
          </div>
          <div className="ml-[-0.60rem]">
            <MobileMenu />
            <NavItem href="/" text="Home" />
            <NavItem href="/about" text="About" />
            <NavItem href="/blog" text="Blog" />
            <NavItem href="/project" text="Project" />
            <NavItem href="/snippets" text="Snippets" />
            <NavItem href="/contact" text="Contact" />
          </div>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-4 ring-primary  transition-all"
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5 text-gray-800 dark:text-gray-200"
              >
                {resolvedTheme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </nav>
      </div>
      <main
        id="skip"
        className="flex flex-col justify-center px-8 bg-gray-0 dark:bg-gray-900"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
