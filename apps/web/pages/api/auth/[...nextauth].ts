import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { XataAdapter } from '@next-auth/xata-adapter';
import { XataClient } from '@park-ark/clients/xata';
import {
  AuthorizationService,
  authDomain,
} from '@park-ark/services/authorization';
import { getCookie } from 'cookies-next';
import { getServerSession } from 'next-auth';

const client = new XataClient({
  branch: process.env.XATA_BRANCH as string,
});

const authorizationService = new AuthorizationService();

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: any, res: any) =>
  NextAuth(req, res, {
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
      signIn: async (message) => {
        // wait 5 seconds
        await new Promise((resolve) => setTimeout(resolve, 5000));

        // const session = await getServerSession({ req, res });

        // console.log('session bro lets do it', session);

        console.log('where the fuck is my session', message);
        /** Testing httpOnly cookie */
        const sessionId = getCookie('next-auth.session-token', { req, res });
        console.log(sessionId);
        console.log('signIn cookies', req.cookies);

        /** update user lastLogon */

        /** Set user session. */
        try {
          await authorizationService.setUserSession(message.user.id);
        } catch (e) {
          console.log(
            'Failed to set user session in Authorization Service!',
            e
          );
        }

        /** If new user, set their 'basic' role. */
        if (message.isNewUser) {
          try {
            await authorizationService.setUserRole(
              message.user.id,
              authDomain.UserRoleEnum.basic
            );
          } catch (e) {
            console.log('Failed to set user role in Authorization Service!', e);
          }
        }
      },
      session(message) {
        console.log(message);
      },
      signOut(_message) {
        /** Delete session in Authorization Service */
      },
    },
  });
