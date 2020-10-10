import React from 'react';
import AppLayout from '../conponents/AppLayout';
import Head from 'next/head';

const Signup = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>회원가입 | NodeBird</title>
      </Head>
      <AppLayout>
        <div>Hello, Signup!</div>
      </AppLayout>
    </>
  );
};

export default Signup;
