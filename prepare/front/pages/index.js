import React from 'react';
import { useSelector } from 'react-redux';
import AppLayout from '../conponents/AppLayout';
import PostForm from '../conponents/PostForm';
import PostCard from '../conponents/PostCard';

const Home = () => {
  const { isLogin } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <AppLayout>
      {isLogin && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};

export default Home;
