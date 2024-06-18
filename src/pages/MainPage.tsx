import { useEffect } from 'react';

import {
  fetchPostsRequest,
} from '../redux/actions/actionPosts';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';

import { PostList } from './index';
import { Loader } from './index';
import { ErrorMessage } from './index';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);
  const isLoading = useAppSelector((state) => state.posts.isLoading);
  const error = useAppSelector((state) => state.posts.error);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      {error !== null && <ErrorMessage error={error} />}
      {error === null && <PostList posts={posts} />}
    </>
  );
};

export default MainPage;
