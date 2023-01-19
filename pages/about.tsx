import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/Container';
import {
  Antdesign,
  Express,
  Facebook,
  Flutter,
  Github,
  Go,
  Instagram,
  Javascript,
  Laravel,
  Linkedin,
  Medium,
  Mysql,
  Nestjs,
  Nextdotjs,
  Nodedotjs,
  Postgresql,
  Python,
  ReactLogo,
  Tailwindcss,
  Twitter,
  Typescript
} from '@styled-icons/simple-icons';

const skills = [
  { icon: Javascript },
  { icon: Typescript },
  { icon: Nodedotjs },
  { icon: Go },
  { icon: ReactLogo },
  { icon: Postgresql },
  { icon: Mysql },
  { icon: Nestjs },
  { icon: Express },
  { icon: Nextdotjs },
  { icon: Tailwindcss },
  { icon: Antdesign },
  { icon: Python },
  { icon: Laravel },
  { icon: Flutter }
];

const socials = [
  { icon: Github, link: 'https://github.com/kenaqshal' },
  { icon: Instagram, link: 'https://www.instagram.com/kenaqshal' },
  { icon: Linkedin, link: 'https://www.linkedin.com/in/kenaqshal' },
  { icon: Facebook, link: 'https://www.facebook.com/kenaqshal.bramasta' },
  { icon: Twitter, link: 'https://twitter.com/kenaqshal' },
  { icon: Medium, link: 'https://medium.com/@kenaqshal31' }
];
export default function About() {
  return (
    <Container title="About – Ken Aqshal Bramasta">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6 max-w-2xl">
          <h6>
            Hey there! I'm Ken Aqshal Bramasta, but you can call me Ken or
            Bramasta. I'm a software engineer currently living in Jakarta,
            Indonesia 🇮🇩.
          </h6>
          <p>
            I grew up in Bekasi, West Java, just a hop, skip and a jump away
            from Jakarta, the most crowded city in Indonesia 🚗. I studied
            software engineering in vocational high school and found my passion
            for working on the backend. I don't have much interest in design,
            but I love creating high-speed and reliable services. That's why
            I've spent almost 90% of my career as a backend engineer✨.
          </p>

          <p>
            Before I got into software development, my dream was to become an
            architect and create the tallest buildings architecture🏛, but when I
            couldn't get into the architecture major in vocational high school,
            I decided to pursue software engineering because I loved playing
            with computers. It wasn't until then that I realized my true passion
            was in software engineering, specifically in creating systems 👨‍💻
          </p>

          <p>
          In my free time, I love being outdoors, reading comics and books, and watching movies.
          </p>

          <p>
          If you want to learn more about me, check out my{' '}
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              resume
            </Link>
            , <Link href="/timeline">timeline</Link> and please don't hesitate
            to <Link href="/contact">contact me</Link>!
          </p>
          <a
            href="https://drive.google.com/file/d/19-gytAKYky2pFi3Y04_1gVmzcw6WVKWx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <button
              className="flex items-center justify-center right-1 top-1 px-4 font-medium h-8 bg-primary text-gray-100 rounded w-28"
              type="submit"
            >
              Resume{' '}
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
          </a>

          <h4 className="text-2xl">Skills</h4>
          <div className="flex flex-wrap w-full flex-row gap-y-3">
            {skills.map((item, key) => {
              return (
                <div className="basis-10" key={key}>
                  <item.icon className="w-8 h-auto text-gray-800 dark:text-gray-200" />
                </div>
              );
            })}
          </div>

          <h4 className="text-2xl mb-0">Socials</h4>
          <p className="mb-2 mt-0">
            You can also follow my work, projects and occassional insights into
            my life on my social networks:
          </p>
          <div className="flex flex-wrap w-full flex-row gap-y-3">
            {socials.map((item, key) => {
              return (
                <div className="basis-10" key={key}>
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <item.icon className="w-8 h-auto text-gray-800 dark:text-gray-200" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}
