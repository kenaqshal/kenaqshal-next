import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/Container';
import avatar from 'public/avatar.jpg';
import avatarBW from 'public/avatar-bw.jpg';

export default function About() {
  return (
    <Container title="About – Ken Aqshal Bramasta">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h6>
            Hey I’m Bramasta, a software engineer who currently living in
            Jakarta, Indonesia 🇮🇩
          </h6>
          <p>
            I'm currently working at <a href="https://www.mbiz.co.id/">Mbiz</a>,
            maintaining and developing the future of procurement stuff. Before
            that, I worked at Bangun Kreatif Abadi, as a technical consultant.
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
          <div className="flex space-x-8">
            <a href="/avatar.jpg">
              <Image
                alt="Ken Aqshal Bramasta headshot"
                width={400}
                quality={100}
                src={avatar}
                className="rounded-md"
              />
            </a>
            <a href="/avatar-bw.jpg">
              <Image
                alt="Ken Aqshal Bramasta headshot"
                width={400}
                quality={100}
                src={avatarBW}
                className="rounded-md"
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
