[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fkenaqshal%2Fkenaqshal-next)

# kenaqshal.com

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [PlanetScale](https://planetscale.com)
- **ORM**: [Prisma](https://prisma.io/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **CMS**: [Sanity](https://www.sanity.io/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Overview

- `layouts/*` - The different page layouts each MDX category (blog, snippets) uses.
- `lib/*` - Short for "library", a collection of helpful utilities or code for external services.
- `pages/api/*` - [API Routes](https://nextjs.org/docs/api-routes/introduction) powering, guestbook, project, snippet, and post views.
- `pages/blog/*` - Static pre-rendered blog pages using MDX.
- `pages/sitemap.xml.tsx` - Automatically generated sitemap.
- `pages/feed.xml.tsx` - Automatically generated RSS feed.
- `pages/*` - All other static pages.
- `prisma/*` - My Prisma schema, which uses a PlanetScale MySQL database.
- `public/*` - Static assets including fonts and images.
- `styles/*` - A small amount of global styles. I'm mostly using vanilla Tailwind CSS.

## Running Locally

This application requires Node.js v16.13+.

```bash
$ git clone https://github.com/kenaqshal/kenaqshal-next.git
$ cd kenaqshal-next
$ yarn
$ yarn dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/kenaqshal/kenaqshal-next/blob/main/.env.example).

## Cloning / Forking

Please review the [license](https://github.com/kenaqshal/kenaqshal-next/blob/main/LICENSE.txt) and remove all of my personal information (resume, blog posts, images, etc.).


## Credit
_Project partially based on [Lee Rob's website](https://github.com/leerob/leerob.io/)_