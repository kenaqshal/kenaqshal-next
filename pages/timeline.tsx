import Container from 'components/Container';
import { getClient } from 'lib/sanity/client';
import { Timeline } from 'lib/types';
import { allTimelineQuery, indexQuery } from 'lib/sanity/queries';
import { InferGetStaticPropsType } from 'next';
import { format } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote';
import components from 'components/MDXComponents';
import { mdxToHtml } from 'lib/mdx';
import Promise from 'bluebird';
import SanityContent from 'components/sanity/Base';
import ExperienceTimeline from 'components/ExperienceTimeline';


export default function Timelines({
  timelines
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <Container title="Timeline – Ken Aqshal Bramasta">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-black dark:text-white">
          Timeline
        </h1>
        <p className="text-xl">
          Here's a brief rundown of my most recent work experiences.
        </p>
        <ExperienceTimeline timelines={timelines} /> 
      </div>
    </Container>
  );
}

export async function getStaticProps({ preview = false }) {
  let timelines: Timeline[] = await getClient(preview).fetch(allTimelineQuery);
  timelines = await Promise.map(timelines, async (timeline) => {
    return timeline;
  });

  return { props: { timelines } };
}
