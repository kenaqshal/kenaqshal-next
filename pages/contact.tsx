import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/Container';

export default function Contact() {
  return (
    <Container title="Contact – Ken Aqshal Bramasta">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Contact Me
        </h1>
        <div className="flex flex-wrap w-full flex-row gap-y-3 mb-8 prose dark:prose-dark leading-6 max-w-2xl">
          <div className="basis-full md:basis-3/4">
            <p>
              I'm always open for a conversation, so please don't hesitate
              contacting me!
            </p>

            <p>
              Anyways, please{' '}
              <Link
                href="https://nohello.club/"
                target="_blank"
                rel="noopener noreferrer"
              >
                don't just say hello
              </Link>
              .
            </p>
            <p>There's a few ways you can get it touch:</p>
            <ul className="list-disc">
              <li>
                <Link
                  href="mailto:hi.kenaqshal@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Via email
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/messages/compose?recipient_id=1477259275298738178"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 dark:text-red-500"
                >
                  Twitter Direct Messages
                </Link>
              </li>
            </ul>
            <p>
              I always check every message and email that comes in every day at
              the end of the time.
            </p>
          </div>
          <div className="basis-full md:basis-1/4">
            <Image
              alt={'title'}
              height={1200}
              width={1200}
              src={'/static/images/say_hi.svg'}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
