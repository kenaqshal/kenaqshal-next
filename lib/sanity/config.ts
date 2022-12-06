import { app } from '../../config/app';
export const sanityConfig = {
  dataset: app.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: app.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: app.NODE_ENV !== 'production',
  apiVersion: '2021-03-25',
  token: app.SANITY_API_TOKEN,
  previewSecret: app.SANITY_PREVIEW_SECRET,
  secret: app.SANITY_PREVIEW_SECRET,
};
