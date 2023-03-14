import { XataAdapter } from '@next-auth/xata-adapter';
import { XataClient } from '@park-ark/clients/xata';
import { AuthorizationService } from '@park-ark/services/authorization';
import { NextApiRequest } from 'next';
import { DefaultSession, NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}

const client = new XataClient({
  branch: process.env.XATA_BRANCH as string,
});

const authorizationService = new AuthorizationService();

export const generateAuthOptions = (req?: NextApiRequest): NextAuthOptions => ({
  adapter: XataAdapter(client),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      allowDangerousEmailAccountLinking: true,
      profile(profile) {
        return {
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
    async session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
  events: {
    signIn: async ({ user, isNewUser }) => {
      const lol = req?.cookies;
      /** Since we cant do shit here and cant get session, at least set user ROLE to basic if new user
       */
      console.log('user side effect', user);
    },
    signOut: async (message) => {
      /** delete session key in redis. */
    },
  },
});
