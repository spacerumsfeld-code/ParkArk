import React from 'react';
import { signOut } from 'next-auth/react';

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
