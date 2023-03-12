import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { XataAdapter } from '@next-auth/xata-adapter';
import { XataClient } from '@park-ark/clients/xata';

const client = new XataClient();

export default NextAuth({
  adapter: XataAdapter(client),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.id,
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
      return true;
    },
  },
});
