import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { XataAdapter } from '@next-auth/xata-adapter';
import { XataClient } from '@park-ark/clients/xata';

const client = new XataClient({
  branch: process.env.XATA_BRANCH as string,
});

export default NextAuth({
  adapter: XataAdapter(client),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    signIn: async ({ user, account }) => {
      console.log('we have signed in and can do the authorization handoff now');
      console.log('user', user, 'account', account);
      return true;
    },
    // redirect: async ({ url, baseUrl }) => {
    //   console.log(
    //     'we have redirected and can do the authorization handoff now'
    //   );
    //   console.log('url', url, 'baseUrl', baseUrl);
    //   return url;
    // },
  },
});
