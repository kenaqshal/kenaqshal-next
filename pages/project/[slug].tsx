import ProjectLayout from 'layouts/project';
import { projectsQuery, projectSlugsQuery } from 'lib/sanity/queries';
import { sanityClient, getClient } from 'lib/sanity/client';
import { Project } from 'lib/types';
import SanityContent from 'components/sanity/Base';

export default function ProjectsPage({ project }: { project: Project }) {
  return (
    <ProjectLayout project={project}>
      <SanityContent content={project.content} />
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

  return {
    props: {
      project: {
        ...project,
        content: project.content
      }
    }
  };
}
