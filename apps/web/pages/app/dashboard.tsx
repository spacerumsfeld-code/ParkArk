import React from 'react';
import { signOut } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';
import { generateAuthOptions } from '../../server/auth';
import { AuthorizationService } from '@park-ark/services/authorization';

const DashboardPage = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <button
        onClick={() => signOut({ callbackUrl: 'http://localhost:4200/login' })}
      >
        Logout
      </button>
    </>
  );
};

export default DashboardPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const authorizationService = new AuthorizationService();
  const sessionToken = context.req.cookies['next-auth.session-token'];
  const authorizedSession = await authorizationService.getSession(
    `session:${sessionToken}`
  );

  if (sessionToken && !authorizedSession.data) {
    console.log('ooga booga');
    let session;
    try {
      session = await getServerSession(
        context.req,
        context.res,
        generateAuthOptions()
      );
      await authorizationService.setSession(
        `session:${sessionToken}`,
        session?.user.id as string
      );
    } catch (error) {
      console.log(error);
    }
  }

  return {
    props: {},
  };
};
