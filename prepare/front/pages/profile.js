import AppLayout from '../conponents/AppLayout';
import React from 'react';
import Head from 'next/head';

const Profile = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <div>Hello, Profile!</div>
      </AppLayout>
    </>
  );
};

export default Profile;
