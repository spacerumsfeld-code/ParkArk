import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { XataAdapter } from '@next-auth/xata-adapter';
import { XataClient } from '@park-ark/clients/xata';
import {
  AuthorizationService,
  authDomain,
} from '@park-ark/services/authorization';

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
  // callbacks: {
  //   signIn: async ({ user }) => {
  //     /** update user lastLogon */

  //     /** Add something to Authorization Service */
  //     try {
  //       await authorizationService.setUserSession(user.id);
  //     } catch (e) {
  //       console.log('Failed to set user session in Authorization Service!', e);
  //     }

  //     const { data: sessionData } = await authorizationService.getUserSession(user.id);

  //     console.log(sessionData);

  //     return true;
  //   },
  // },
  events: {
    signIn: async ({ user, isNewUser }) => {
      /** update user lastLogon */

      /** Set user session in Authorization service */
      try {
        await authorizationService.setUserSession(user.id);
      } catch (e) {
        console.log('Failed to set user session in Authorization Service!', e);
      }

      /** Set user role in Authorization if new user */
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
    signOut({ session }) {
      /** Delete session in Authorization Service */
    },
  },
});
