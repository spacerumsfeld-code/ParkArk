import React from 'react';
import { Modal } from '@park-ark/ui/lib/components/Modal';
import { signIn } from 'next-auth/react';
import { Button } from '@park-ark/ui/lib/elements/Button';

type LoginModalProps = {
  //
};

export const LoginModal: React.FC<LoginModalProps> = () => {
  return (
    <>
      <div>Login Modal</div>
      <Modal open={true} label="Login" onClose={() => console.log('lol')}>
        <div>Modal Content</div>
        <Button
          onClick={() =>
            signIn('google', {
              callbackUrl: 'http://localhost:4200/app/dashboard',
            })
          }
        >
          Logon
        </Button>
      </Modal>
    </>
  );
};
