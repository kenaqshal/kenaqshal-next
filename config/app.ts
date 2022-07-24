export const app = {
  // For retrieving Unsplash metrics
  UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY,

  // For retrieving YouTube metrics
  GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
  GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,

  // For subscribe & show metrics for newsletter
  REVUE_API_KEY: process.env.REVUE_API_KEY,

  // For showing now playing song from Spotify
  SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,

  // For NextAuth.js and GitHub OAuth
  OAUTH_CLIENT_KEY: process.env.OAUTH_CLIENT_KEY,
  OAUTH_CLIENT_SECRET: process.env.OAUTH_CLIENT_SECRET,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  NEXT_AUTH_SECRET: process.env.NEXT_AUTH_SECRET,

  // For retrieving Tweets
  TWITTER_API_KEY: process.env.TWITTER_API_KEY,
  TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY,

  // For post views and guestbook
  DATABASE_URL: process.env.DATABASE_URL,

  // For Sanity CMS
  NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
  SANITY_PREVIEW_SECRET: process.env.SANITY_API_TOKEN,
  SANITY_STUDIO_REVALIDATE_SECRET: process.env.SANITY_STUDIO_REVALIDATE_SECRET,

  // For General Setting
  NODE_ENV: process.env.NODE_ENV,
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,

};
