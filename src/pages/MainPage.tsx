import { useEffect } from 'react';

import {
  fetchPostsRequest,
} from '../redux/actions/actionPosts';
import PostList from '../components/PostList/PostList';
import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';

const MainPage = () => {
  const dispatch = useAppDispatch();

  const posts = useAppSelector((state) => state.posts.posts);
  const isLoading = useAppSelector((state) => state.posts.isLoading);
  const error = useAppSelector((state) => state.posts.error);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);

  return (
    <>
      {isLoading === true ? <Loader /> : ''}
      {error !== null ? <ErrorMessage error={error} /> : ''}
      <PostList posts={posts} />
    </>
  );
};

export default MainPage;
