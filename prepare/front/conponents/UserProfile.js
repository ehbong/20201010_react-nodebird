import React, { useCallback } from 'react';
import { Card, Button, Avatar } from 'antd';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers/user';

function UserProfile() {
  const dispatch = useDispatch();
  const onLogOut = useCallback((e) => {
    dispatch(logoutAction());
  });
  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="follower">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>user</Avatar>} title="user" />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
}

export default UserProfile;
