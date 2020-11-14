import AppLayout from '../conponents/AppLayout';
import React from 'react';
import Head from 'next/head';
import NicknameEditForm from '../conponents/NicknameEditForm';
import FollowList from '../conponents/FollowList';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { me } = useSelector((state) => state.user);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={me.followings} />
        <FollowList header="팔로워 목록" data={me.followers} />
      </AppLayout>
    </>
  );
};

export default Profile;
