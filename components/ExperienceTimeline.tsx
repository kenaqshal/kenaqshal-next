import { format } from 'date-fns';
import SanityContent from './sanity/Base';

export default function ExperienceTimeline({timelines}) {
  return (
    <div className="flex flex-wrap w-full flex-row gap-y-3 mb-8 prose dark:prose-dark leading-6 max-w-2xl">
      <ol className="relative border-l border-gray-200 dark:border-gray-700 list-none ">
        {timelines.map((timeline, index) => {
          const joinDate = format(new Date(timeline?.startDate), 'MMMM yyyy');
          const exitDate = timeline.endDate
            ? format(new Date(timeline.endDate), 'MMMM yyyy')
            : 'Present';
          return (
            <li className="mb-10 ml-6 mt-0" key={index}>
              <span className="flex absolute -left-3 mt-2 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-3 h-3 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 className="flex items-center mb-1 text-2xl font-semibold text-blue-600 dark:text-blue-400">
                {timeline.title}{' '}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {joinDate} - {exitDate}
              </time>

              <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-100">
                <SanityContent content={timeline.content} />
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
