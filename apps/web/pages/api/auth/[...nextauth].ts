import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { XataAdapter } from '@next-auth/xata-adapter';
import { XataClient } from '@park-ark/clients/xata';
import {
  AuthorizationService,
  authDomain,
} from '@park-ark/services/authorization';
import { setCookie } from 'cookies-next';

const client = new XataClient({
  branch: process.env.XATA_BRANCH as string,
});

const authorizationService = new AuthorizationService();

export default NextAuth({
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
  events: {
    signIn: async ({ user, isNewUser }) => {
      /** Testing httpOnly cookie */

      /** update user lastLogon */

      /** Set user session. */
      try {
        await authorizationService.setUserSession(user.id);
      } catch (e) {
        console.log('Failed to set user session in Authorization Service!', e);
      }

      /** If new user, set their 'basic' role. */
      if (isNewUser) {
        try {
          await authorizationService.setUserRole(
            user.id,
            authDomain.UserRoleEnum.basic
          );
        } catch (e) {
          console.log('Failed to set user role in Authorization Service!', e);
        }
      }
    },
    signOut(message) {
      /** Delete session in Authorization Service */
    },
  },
});
