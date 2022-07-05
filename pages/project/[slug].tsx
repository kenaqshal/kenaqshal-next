import { MDXRemote } from 'next-mdx-remote';
import ProjectLayout from 'layouts/project';
import components from 'components/MDXComponents';
import { projectsQuery, projectSlugsQuery } from 'lib/queries';
import { sanityClient, getClient } from 'lib/sanity-server';
import { mdxToHtml } from 'lib/mdx';
import { Project } from 'lib/types';

export default function ProjectsPage({ project }: { project: Project }) {
  return (
    <ProjectLayout project={project}>
      <MDXRemote {...project.content} components={components} />
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

  const { html } = await mdxToHtml(project.content);

  return {
    props: {
      project: {
        ...project,
        content: html
      }
    }
  };
}
