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
            Looking to connect? Look no further! I'm always open for a conversation and I'd love to hear from you. 
            </p>
            <p>
            Whether you have a question, a project in mind or just want to say hi, I'm all ears.
            </p>
            <p>You can reach me through a variety of channels:</p>
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
              Let's connect and make something great together!
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
