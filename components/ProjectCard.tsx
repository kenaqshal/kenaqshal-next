import Link from 'next/link';
import Image from 'next/image';
import { urlForImage } from 'lib/sanity';

export default function ProjectCard({
  title,
  description,
  slug,
  logo,
  ...rest
}) {
  return (
    (<Link
      href={`/project/${slug}`}
      className="rounded border-2 border-primary p-4 w-full bg-white dark:bg-gray-900"
      {...rest}>

      <div className="flex gap-4 flex-row w-full max-w-none items-center">
        <Image
          alt={title}
          height={54}
          width={54}
          src={urlForImage(logo).url()}
          className="rounded basis-1/4"
        />
        <h2 className="text-xl font-bold text-left mt-2 text-gray-900 dark:text-gray-100 basis-3/4">
          {title}
        </h2>
      </div>
      <p className="mt-4 text-gray-700 dark:text-gray-400">{description}</p>

    </Link>)
  );
}
