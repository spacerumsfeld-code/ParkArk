import React from 'react';
import { LoginModal } from '../components/LoginModal';
import { AuthorizationService } from '@park-ark/services/authorization';
import { getCookie } from 'cookies-next';
import { GetServerSideProps } from 'next';

const LoginPage = () => {
  return (
    <>
      <LoginModal />
    </>
  );
};

export default LoginPage;

export const getServerSideProps: GetServerSideProps<any> = async ({
  req,
  res,
}) => {
  const authorizationService = new AuthorizationService();
  const userId = getCookie('userId', { req, res });

  let userHasValidSession;
  try {
    userHasValidSession = await authorizationService.getUserSession(
      userId as string
    );
  } catch (e) {
    console.log(e);
  }

  if (userHasValidSession) {
    return {
      props: {},
    };
  }

  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};
