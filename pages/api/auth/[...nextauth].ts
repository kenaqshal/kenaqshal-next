import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { app } from '../../../config/app';

export default NextAuth({
  secret: app.NEXT_AUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: app.OAUTH_CLIENT_KEY,
      clientSecret: app.OAUTH_CLIENT_SECRET
    })
  ]
});
