import { MDXRemote } from 'next-mdx-remote';
import ProjectLayout from 'layouts/project';
import components, { RoundedImage } from 'components/MDXComponents';
import { projectsQuery, projectSlugsQuery } from 'lib/sanity/queries';
import { sanityClient, getClient } from 'lib/sanity/client';
import { mdxToHtml } from 'lib/mdx';
import { Project } from 'lib/types';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { getImageDimensions } from '@sanity/asset-utils';
import { urlForImage } from 'lib/sanity/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Suspense } from 'react';
import Link from 'next/link';

// Barebones lazy-loaded image component
const SampleImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);
  const imageWidth = isInline ? width : 800;
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
      <figure className="">
        <Image
          src={image}
          alt={value.caption || ' '}
          loading="lazy"
          width={width}
          height={height}
          style={{
            // Avoid jumping around with aspect-ratio CSS property
            aspectRatio: width / height
          }}
        />
        <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
          {value.caption}
        </figcaption>
      </figure>
    </div>
  );
};

const anchorHeader = (props) => {
  const { node, children } = props;
  const { style, _key } = node;

  const HeadingTag = style;
  // Even though HTML5 allows id to start with a digit, we append it with a letter to avoid various JS methods to act up and make problems
  const headingId = children
    .join('')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '') // Remove leading and trailing dashes
    .toLowerCase();

  return (
    <HeadingTag id={headingId}>
      <Link
        href={`#${headingId}`}
        aria-hidden="true"
        tabIndex={-1}
        className={'anchor'}
      />
      <span>{children}</span>
    </HeadingTag>
  );
};

export default function ProjectsPage({ project }: { project: Project }) {
  const components = {
    block: {
      h1: anchorHeader,
      h2: anchorHeader,
      h3: anchorHeader,
      h4: anchorHeader,
      h5: anchorHeader,
      h6: anchorHeader,
    },
    types: {
      image: SampleImageComponent,
      code: (props) => (
        <SyntaxHighlighter
          language={props.value.language}
          style={dracula}
          showLineNumbers
        >
          {props.value.code}
        </SyntaxHighlighter>
      )
    }
  };
  return (
    <ProjectLayout project={project}>
      {/* <MDXRemote {...project.content} components={components} /> */}
      <PortableText value={project.content} components={components} />
    </ProjectLayout>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(projectSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params, preview = false }) {
  const { project } = await getClient(preview).fetch(projectsQuery, {
    slug: params.slug
  });

  if (!project) {
    return { notFound: true };
  }

  // const { html } = await mdxToHtml(project.content);

  return {
    props: {
      project: {
        ...project,
        content: project.content
      }
    }
  };
}

// block: {
//   // Customize block types with ease
//   // h1: ({children}) => <h1 className="text-2xl">{children}</h1>,

//   // Same applies to custom styles
//   customHeading: (props) => {
//     const { node, children } = props
//   const { style, _key } = node

//   if (/^h\d/.test(style)) {
//     const HeadingTag = style;
//     // Even though HTML5 allows id to start with a digit, we append it with a letter to avoid various JS methods to act up and make problems
//     const headingId = `h${_key}`;
//     return (
//       <HeadingTag id={headingId}>
//         <a
//           href={`#${headingId}`}
//           aria-hidden="true"
//           tabIndex={-1}
//         >#</a>
//         <span>{children}</span>
//       </HeadingTag>
//       )
//   }
//     return (

//     <h2 className="text-lg text-primary text-purple-700">test</h2>
//   )},
// },
