import React from 'react';
import { LoginModal } from '../components/modals/LoginModal';
import { AuthorizationService } from '@park-ark/services/authorization';
import { GetServerSideProps } from 'next';

const LoginPage = () => {
  return (
    <>
      <LoginModal />
    </>
  );
};

export default LoginPage;

// export const getServerSideProps: GetServerSideProps<any> = async ({
//   req,
//   res,
// }) => {
//   const authorizationService = new AuthorizationService();

//   let userHasValidSession;
//   try {
//     userHasValidSession = await authorizationService.getUserSession(
//       userId as string
//     );
//   } catch (e) {
//     console.log(e);
//   }

//   if (userHasValidSession) {
//     return {
//       redirect: {
//         destination: '/app/dashboard',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };
