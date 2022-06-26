import Container from 'components/Container';
import { InferGetStaticPropsType } from 'next';
import { allProjectQuery } from 'lib/queries';
import { getClient } from 'lib/sanity-server';
import { Project } from 'lib/types';
import ProjectCard from 'components/ProjectCard';

export default function Projects({
  projects
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title="Projects – Ken Aqshal Bramasta"
      description="A collection of project that I've used in the past."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Project
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
        These are a collection of projects that I've work in the past. To showcase projects that I already work on with different frameworks, languages, and business cases.
        </p>
        <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
          {projects.map((Project) => (
            <ProjectCard
              key={Project.slug}
              title={Project.title}
              slug={Project.slug}
              logo={Project.logo}
              description={Project.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const projects: Project[] = await getClient().fetch(allProjectQuery);

  return { props: { projects } };
}
