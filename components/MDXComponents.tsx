import Link from 'next/link';
import Image from 'next/image';

import ProsCard from 'components/ProsCard';
import ConsCard from 'components/ConsCard';
import Unsplash from 'components/metrics/Unsplash';
import Analytics from 'components/metrics/Analytics';
import YouTube from 'components/metrics/Youtube';
import Step from 'components/Step';
import ImageWithTheme from 'components/ImageWithTheme';
import { getBlurData } from 'lib/image-blur';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage (props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} layout='responsive' loading='lazy' />;
}

function Callout(props) {
  return (
    <div className="flex bg-gray-200 dark:bg-gray-800 rounded-lg p-4">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

const MDXComponents = {
  Image: RoundedImage,
  // img: RoundedImage,
  ImageWithTheme,
  a: CustomLink,
  Callout,
  Analytics,
  ConsCard,
  ProsCard,
  Step,
  Unsplash,
  YouTube
};

export default MDXComponents;
