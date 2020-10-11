import AppLayout from '../conponents/AppLayout';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import NicknameEditForm from '../conponents/NicknameEditForm';
import FollowList from '../conponents/FollowList';

const Profile = () => {
  const [followingList, setFollowingList] = useState([]);
  const [followerList, setFollowerList] = useState([]);

  useEffect(() => {
    setFollowerList([
      { nickname: '메시' },
      { nickname: '데용' },
      { nickname: '이니에스타' },
      { nickname: '알바' },
      { nickname: '피케' },
    ]);
    setFollowingList([
      { nickname: '메시' },
      { nickname: '데용' },
      { nickname: '이니에스타' },
      { nickname: '알바' },
      { nickname: '피케' },
    ]);
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
