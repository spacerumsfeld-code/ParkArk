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
      allowDangerousEmailAccountLinking: true,
      profile(profile) {
        return {
          /** this id field is actually set by Xata, but this field is still required here to satisfy typing s*/
          id: profile.name,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString(),
        };
      },
    }),
  ],
  callbacks: {
    signIn: async ({ user, account }) => {
      /** update user lastLogon */

      /** Add something to Authorization Service */
      console.log('we have signed in and can do the authorization handoff now');
      console.log('user', user, 'account', account);
      return true;
    },
  },
});
