import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { RootState } from '../../redux/store';
import {
  fetchPostsFail,
  fetchPostsRequest,
  fetchPostsSuccess
} from '../../redux/actions/actionPosts';
import { Posts } from '../../types';

import PostList from '../PostList/PostList';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state: RootState) => state.posts.posts);
  const isLoading = useSelector((state: RootState) => state.posts.loading);
  const error = useSelector((state: RootState) => state.posts.error);

  useEffect(() => {
    dispatch(fetchPostsRequest());
    axios.get<Posts[]>('http://localhost:3000/posts/')
      .then(response => {
        console.log(response);
        dispatch(fetchPostsSuccess(response.data));
      })
      .catch(error => {
        console.log(error.message);
        dispatch(fetchPostsFail(error.message));
      });
  }, [dispatch]);

  return (
    <>
      <Loader isLoading={isLoading} />
      {error || !posts.length ? <ErrorMessage error={error} /> : <PostList posts={posts} />}
    </>
  );
};

export default MainPage;
