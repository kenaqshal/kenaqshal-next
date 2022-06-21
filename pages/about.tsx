import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/Container';
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter
} from '@styled-icons/simple-icons';
export default function About() {
  return (
    <Container title="About – Ken Aqshal Bramasta">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6 max-w-2xl">
          <h6>
            Hey I’m Bramasta, a software engineer who currently living in
            Jakarta, Indonesia 🇮🇩
          </h6>
          <p>
            I'm currently working at{' '}
            <Link href="https://www.mbiz.co.id/">Mbiz</Link>, maintaining and
            developing the future of procurement stuff. Before that, I worked at
            Bangun Kreatif Abadi, as a technical consultant.
          </p>
          <p>
            I grew up in Bekasi, West Java. Just side of Jakarta(the most
            crowded city in indonesia🚗), and I come from a software engineering
            background in Vocational high school. I love working in the backend
            because I don't have an interest in design and am more comfortable
            creating a high-speed and reliable service rather than responsive
            design. And I spent almost 90% of my career as a backend engineer✨.
          </p>

          <p>
            In my spare time🆓, I love being outdoors, reading a comic or book,
            and watching the movie
          </p>
          <p className="mb-2">
            You can also follow my work, projects and occassional insights into
            my life on my social networks:
          </p>
          <span>
            <Link href={'https://github.com/kenaqshal'} target='_blank'>
              <Github className="w-6 h-auto text-gray-800 dark:text-gray-200" />
            </Link>
            <Link href={'https://www.instagram.com/kenaqshal'} target='_blank'>
              <Instagram className="w-6 h-auto text-gray-800 dark:text-gray-200 ml-2" />
            </Link>
            <Link href={'https://www.linkedin.com/in/kenaqshal'} target='_blank'>
              <Linkedin className="w-6 h-auto text-gray-800 dark:text-gray-200 ml-2" />
            </Link>
            <Link href={'https://www.facebook.com/kenaqshal.bramasta'} target='_blank'>
              <Facebook className="w-6 h-auto text-gray-800 dark:text-gray-200 ml-2" />
            </Link>
            <Link href={'https://twitter.com/kenaqshal'} target='_blank'>
              <Twitter className="w-6 h-auto text-gray-800 dark:text-gray-200 ml-2" />
            </Link>
          </span>
        </div>
      </div>
    </Container>
  );
}
