/**
 * Server-side Sanity utilities. By having these in a separate file from the
 * utilities we use on the client side, we are able to tree-shake (remove)
 * code that is not used on the client side.
 */
import { createClient } from 'next-sanity';
import { sanityConfig } from './sanity-config';

export const sanityClient = createClient(sanityConfig);

export const getClient = () =>  sanityClient;
