import Image, { ImageLoader, ImageProps } from 'next/image';
import { urlForImage } from 'lib/sanity/image';

const sanityImageLoader: ImageLoader = ({ src, width, quality = 75 }) => {
  return `${src}${
    src.includes('?') ? '&' : '?'
  }w=${width}&q=${quality}&auto=format`;
};

//TODO: implement sanity image loader from metadata lqip
import { getImageDimensions } from '@sanity/asset-utils';
export default function SanityImage(props) {
  const { value, isInline, metadata } = props;
  const lqip = metadata?.lqip;
  const { width, height } = getImageDimensions(value);
  const imageWidth = isInline ? 100 : 800;
  const imageHeight = Math.round((height / width) * imageWidth);
  let image = urlForImage(value)
    .image(value)
    .width(imageWidth)
    .height(imageHeight)

    .fit('max')
    .auto('format')
    .url();

  // fetch image url from sanity with best quality and auto image ratio so you dont have big images
  // and then use next/image to lazy load the image

  return (
    <div className="w-100 h-auto flex justify-center">
      <figure className="w-full h-auto">
        <Image
          src={image}
          alt={value.caption || ' '}
          loading="lazy"
          width={width}
          height={height}
          placeholder={lqip ? 'blur' : 'empty'}
          className="w-full h-auto max-h-96 rounded-xl"
          blurDataURL={lqip}
          loader={sanityImageLoader}
          style={{
            // Avoid jumping around with aspect-ratio CSS property
            aspectRatio: width / height,
            objectFit: 'contain'
          }}
        />
        <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
          {value.caption}
        </figcaption>
      </figure>
    </div>
  );
}
