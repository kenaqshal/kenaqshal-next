const postFields = `
  _id,
  title,
  publishedAt,
  excerpt,
  mainImage,
  "slug": slug.current,
`;
const calcPagination = (page: number, size: number): string => {
    let lastData = page * size
    let firstData = lastData - size

    return `[${firstData}...${lastData}]`
}

export const indexQuery = (page?:number, size?: number): string => {
    let pagination = ''
    if (page && size) pagination = calcPagination(page, size)
    return `*[_type == "post"] | order(date desc, _updatedAt desc) ${pagination} {
        ${postFields}
    }`
};

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  }
}`;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;

export const postUpdatedQuery = `*[_type == "post" && _id == $id].slug.current`;

const snippetFields = `
  _id,
  title,
  description,
  logo,
  "slug": slug.current,
  _createdAt
`;

export const snippetIndexQuery = (page?:number, size?: number): string => {
  let pagination = ''
  if (page && size) pagination = calcPagination(page, size)
  return `*[_type == "snippet"] | order(date desc, _updatedAt desc) ${pagination} {
      ${snippetFields}
  }`
};

export const allSnippetsQuery = `
*[_type == "snippet"] | order(date desc, _updatedAt desc) {
  ${snippetFields}
}`;

export const snippetsQuery = `
{
  "snippet": *[_type == "snippet" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${snippetFields}
  }
}`;

export const snippetSlugsQuery = `
*[_type == "snippet" && defined(slug.current)][].slug.current
`;

export const snippetBySlugQuery = `
*[_type == "snippet" && slug.current == $slug][0] {
  ${snippetFields}
}
`;


const projectFields = `
  _id,
  title,
  description,
  logo,
  "slug": slug.current,
  link,
`;

export const allProjectQuery = `
*[_type == "project"] | order(date desc, _updatedAt desc) {
  ${projectFields}
}`;



export const allProjectsQuery = `
*[_type == "project"] | order(date desc, _updatedAt desc) {
  ${projectFields}
}`;

export const projectsQuery = `
{
  "project": *[_type == "project" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${projectFields}
  }
}`;

export const projectSlugsQuery = `
*[_type == "project" && defined(slug.current)][].slug.current
`;

export const projectBySlugQuery = `
*[_type == "project" && slug.current == $slug][0] {
  ${projectFields}
}
`;


const timelineFields = `
  _id,
  title,
  content,
  logo,
  startDate,
  endDate,
`;

export const allTimelineQuery = `
*[_type == "timeline"] | order(_createdAt desc) {
  ${timelineFields}
}`;
